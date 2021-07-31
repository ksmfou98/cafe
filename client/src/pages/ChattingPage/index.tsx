import React, { useEffect, useRef, useState } from 'react';
import './styles.scss';
import { useRouteMatch } from 'react-router-dom';
import socketIOClient from 'socket.io-client';
import { RiSendPlaneFill } from 'react-icons/ri';
import { BsPeopleCircle } from 'react-icons/bs';
import { useSelector } from 'react-redux';
import { reduxStateStore } from 'modules';
import useCafeInfoEffect from 'hooks/cafe/useCafeInfoEffect';
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
    socket.emit('room', room_id, user.name);

    socket.on('members', (users) => {
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

    socket.on('exit', (users) => {
      console.log(users);
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
      id: user.name,
    };
    socket.emit('send message', messageobject);
    setMessage('');
  };

  return (
    <div id="ChattingPage">
      <div className="chat-form">
        <div className="chat-tit">
          <h1>{cafeInfo.name}</h1>
        </div>
        <div className="chat-cont">
          {chat.map((c: any, index: any) => (
            <div key={index} className="chat">
              {user.name === c.writer ? (
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
          <span>Members(70)</span>
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
    </div>
  );
};

export default ChattingPage;
