import React, { useEffect, useRef, useState } from 'react';
import { useRouteMatch } from 'react-router-dom';
import socketIOClient from 'socket.io-client';
import { RiSendPlaneFill } from 'react-icons/ri';
import { BsPeopleCircle } from 'react-icons/bs';
import { useSelector } from 'react-redux';
import { reduxStateStore } from 'modules';
import useCafeInfoEffect from 'hooks/cafe/useCafeInfoEffect';
import styled from 'styled-components';
import { palette } from 'lib/styles/palette';
const ENDPOINT = 'http://localhost:4000';
const socket = socketIOClient(ENDPOINT);

interface MatchProps {
  cafe: string;
}
const ChattingPage = () => {
  const match = useRouteMatch<MatchProps>();
  const room_id = match.params.cafe;
  const user = useSelector((state: reduxStateStore) => state.user);
  const [response, setResponse] = useState({
    writer: '',
    content: '',
    time: '',
  });

  const [chat, setChat] = useState<any>([]);
  const [message, setMessage] = useState('');

  const [memberList, setMemberList] = useState<string[]>([]);

  const { cafeInfo } = useCafeInfoEffect(room_id, user._id);

  // 스크롤 고정 해주는 애
  const messagesEndRef = useRef<any>(null);
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    socket.emit('room', room_id, user.nickname);

    socket.on('members', (users, inMember) => {
      let members: string[] = [];
      Object.keys(users).forEach((key) => {
        if (users[key].room_id === room_id) {
          members.push(users[key].name);
          console.log(users[key].room_id, room_id);
        }
      });
      console.log(members);
      setMemberList(members);

      if (inMember.room_id === room_id) {
        const mention = {
          message: `${inMember.name}님이 들어오셨습니다.`,
        };
        setChat((chat: any) => chat.concat(mention));
        scrollToBottom();
      }
    });

    socket.on('exit', (users, outMember) => {
      console.log(users, outMember);
      if (outMember.room_id === room_id) {
        const mention = {
          message: `${outMember.name}님이 나가셨습니다.`,
        };
        setChat((chat: any) => chat.concat(mention));
        scrollToBottom();
      }
      let members: string[] = [];
      Object.keys(users).forEach((key) => {
        if (users[key].room_id === room_id) {
          members.push(users[key].name);
          console.log(users[key].room_id, room_id);
        }
      });
      console.log(members);
      setMemberList(members);
    });

    socket.on('message', (message, str) => {
      console.log('get Chat Effect Rendering');
      console.log(message);
      console.log(str);

      const nextForm = {
        writer: message.id,
        content: message.body,
        time:
          str.hours > 12
            ? `오후 ${str.hours % 12}:${str.minutes}`
            : `오전 ${str.hours}:${str.minutes}`,
      };
      setResponse(nextForm);
    });
  }, [room_id]);

  useEffect(() => {
    console.log('set Chat Effect Rendering');
    const getChat = async () => {
      (await response.writer.length) > 0 &&
        setChat((chat: any) => chat.concat(response)); // await 이 영향 안준다고 나와있지만 얘로 인해서 스크롤이  값을 불러온후에 실행됨
      scrollToBottom();
    };
    getChat();
  }, [response]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };

  const onClick = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const messageobject = {
      room_id,
      body: message,
      id: user.nickname,
    };
    socket.emit('send message', messageobject);
    setMessage('');
  };

  return (
    <ChattingPageBlock>
      <div className="chat-form">
        <div className="chat-tit">
          <h1>{cafeInfo.name}</h1>
        </div>
        <div className="chat-cont">
          {chat.map((c: any, index: any) => (
            <>
              {c.message && <div className="in-out-message">{c.message}</div>}
              {!c.message && (
                <div key={index} className="chat">
                  {user.nickname === c.writer ? (
                    <div className="right-chat">
                      <div className="talk">
                        <div className="content">
                          <div className="txt">{c.content}</div>
                        </div>
                        <div className="time">
                          <span className="desc">{c.time}</span>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="left-chat">
                      <div className="profile-ico">
                        <BsPeopleCircle size="28" />
                      </div>
                      <div className="talk">
                        <div className="writer">{c.writer}</div>
                        <div className="content">
                          <div className="txt">{c.content}</div>
                        </div>
                        <div className="time">
                          <span className="desc">{c.time}</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </>
          ))}
          <div ref={messagesEndRef} />
        </div>
        <div className="chat-input-form">
          <form action="" onSubmit={onClick}>
            <input
              type="text"
              onChange={onChange}
              value={message}
              placeholder="메세지를 입력하세요."
            />
            <button type="submit">
              <RiSendPlaneFill size="28" />
            </button>
          </form>
        </div>
      </div>
      <div className="member-list">
        <div className="member-tit">
          <span>Members({memberList.length})</span>
        </div>
        <div className="member-cont">
          <ul>
            {memberList.map((member: string, index: any) => (
              <li key={index}>
                <BsPeopleCircle size="28" />
                <span>{member}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </ChattingPageBlock>
  );
};

const ChattingPageBlock = styled.div`
  height: 100%;
  width: 100%;
  overflow: hidden;
  display: flex;
  .chat-form {
    width: 70%;
    height: 100vh;
    background-color: #f4f4f4;
    display: flex;
    flex-direction: column;
    .chat-tit {
      padding: 10px 20px;
      background-color: #fff;
      h1 {
        text-align: center;
      }
    }
    .chat-cont {
      padding: 10px 20px;
      flex-grow: 1;
      overflow-y: scroll;
      .in-out-message {
        display: block;
        margin: 8px 0;
        padding: 0;
        font-weight: 700;
        font-size: 13px;
        line-height: 24px;
        text-align: center;
      }
      .chat {
        overflow: hidden;
        padding: 8px 0;
        .left-chat {
          float: left;
          padding-left: 40px;
          position: relative;
          max-width: 60%;
          .profile-ico {
            overflow: hidden;
            position: absolute;
            top: 0;
            left: 0;
            svg {
              color: #c2c2c2;
            }
          }
          .talk {
            position: relative;
            box-sizing: border-box;
            padding-top: 23px;
            margin-left: 7px;

            .writer {
              position: absolute;
              top: 2px;
              left: 0;
              font-size: 14px;
              line-height: 13px;
              vertical-align: top;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
            }
            .content {
              overflow: hidden;
              display: inline-block;
              position: relative;
              z-index: 0;
              max-width: 100%;
              border-radius: 3px 16px 16px;
              font-size: 14px;
              line-height: 1.33;
              background-color: #fff;
              word-break: break-word;
              word-wrap: break-word;
              vertical-align: bottom;
              .txt {
                margin: 10px 12px 9px;
                white-space: pre-wrap;
              }
            }
            .time {
              position: absolute;
              left: 100%;
              bottom: 0;
              min-width: 83px;
              .desc {
                display: block;
                padding: 0 5px 0;
                font-size: 10px;
                color: #888;
                line-height: 1.2em;
                white-space: nowrap;
              }
            }
          }
        }
        .right-chat {
          float: right;
          position: relative;
          max-width: 60%;
          padding-left: 40px;
          .talk {
            float: right;
            margin: 0;
            padding: 0;
            text-align: right;
            position: relative;
            .content {
              overflow: hidden;
              display: inline-block;
              position: relative;
              z-index: 0;
              max-width: 100%;
              border-radius: 16px 16px 3px;
              font-size: 14px;
              line-height: 1.33;
              background-color: #fff;
              word-break: break-word;
              word-wrap: break-word;
              vertical-align: bottom;
              text-align: left;
              .txt {
                margin: 10px 12px 9px;
                white-space: pre-wrap;
              }
            }
            .time {
              position: absolute;
              right: 100%;
              bottom: 0;
              min-width: 83px;
              .desc {
                display: block;
                padding: 0 5px 0;
                font-size: 10px;
                color: #888;
                line-height: 1.2em;
                white-space: nowrap;
                margin-top: 12px;
              }
            }
          }
        }
      }
    }
    .chat-input-form {
      padding: 10px 20px;
      background: #fff;
      form {
        display: flex;
        align-items: center;
        justify-content: space-between;
        input {
          width: 90%;
          border: 1px solid ${palette.border};
          background: ${palette.border};
          border-radius: 15px;
          padding: 10px;
        }
        svg {
          color: ${palette.mainColor};
        }
      }
    }
  }
  .member-list {
    width: 30%;
    background-color: #fff;
    border-left: 1px solid ${palette.border};
    display: flex;
    flex-direction: column;
    height: 100vh;
    .member-tit {
      padding: 23px 20px;
      border-bottom: 1px solid #f4f4f4;
      font-size: 18px;
    }
    .member-cont {
      flex-grow: 1;
      overflow-y: scroll;
      li {
        padding: 10px 20px;
        display: flex;
        align-items: center;
        svg {
          margin-right: 10px;
          color: #c2c2c2;
        }
      }
    }
  }
`;

export default ChattingPage;
