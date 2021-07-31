import React, { useEffect, useRef, useState } from 'react';
import './styles.scss';
import { useRouteMatch } from 'react-router-dom';
import socketIOClient from 'socket.io-client';
import { RiSendPlaneFill } from 'react-icons/ri';
import { BsPeopleCircle } from 'react-icons/bs';
import { useSelector } from 'react-redux';
import { reduxStateStore } from 'modules';
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
  });
  const [chat, setChat] = useState<any>([
    {
      writer: '',
      content: '',
    },
  ]);
  const [message, setMessage] = useState('');

  //   useEffect(() => {
  //     socket.on('upload', (data) => {
  //       console.log(data);
  //       setResponse(data.message);
  //     });
  //   }, []);

  // 스크롤 고정 해주는 애
  const messagesEndRef = useRef<any>(null);
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    // const room_id = roomName;
    socket.emit('room', room_id);

    // socket.on('your_id', (id) => {
    //   console.log(id);
    //   setYour_id(id);
    // });

    socket.on('message', (message) => {
      console.log(message);
      // setResponse(message.body);
      const nextForm = {
        ...response,
        writer: message.id,
        content: message.body,
      };
      setResponse(nextForm);
    });
  }, [room_id, response]);

  useEffect(() => {
    const getChat = async () => {
      (await response.writer.length) > 0 && setChat(chat.concat(response)); // await 이 영향 안준다고 나와있지만 얘로 인해서 스크롤이  값을 불러온후에 실행됨
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
  //   const onClick = (e: React.FormEvent<HTMLFormElement>) => {
  //     e.preventDefault();
  //     socket.emit('message', { message });
  //     setMessage('');
  //   };

  return (
    <div id="ChattingPage">
      <div className="chat-form">
        <div className="chat-tit">
          <h1>맥쓰사</h1>
        </div>
        <div className="chat-cont">
          {chat.map((c: any, index: any) => (
            <>
              {user.name === c.writer ? (
                <div key={index} className="chat">
                  <div className="right-chat">
                    <span>{c.content}</span>
                    <span>{c.writer}</span>
                  </div>
                </div>
              ) : (
                <div key={index} className="chat">
                  <div className="left-chat">
                    <span>{c.writer}</span>
                    <span>{c.content}</span>
                  </div>
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
          <span>Members(70)</span>
        </div>
        <div className="member-cont">
          <ul>
            <li>
              <BsPeopleCircle size="28" />
              <span>이도현</span>
            </li>
            <li>
              <BsPeopleCircle size="28" />
              <span>추종현</span>
            </li>
            <li>
              <BsPeopleCircle size="28" />
              <span>이지호</span>
            </li>
            <li>
              <BsPeopleCircle size="28" />
              <span>이도현</span>
            </li>
            <li>
              <BsPeopleCircle size="28" />
              <span>추종현</span>
            </li>
            <li>
              <BsPeopleCircle size="28" />
              <span>이지호</span>
            </li>
            <li>
              <BsPeopleCircle size="28" />
              <span>이도현</span>
            </li>
            <li>
              <BsPeopleCircle size="28" />
              <span>추종현</span>
            </li>
            <li>
              <BsPeopleCircle size="28" />
              <span>이지호</span>
            </li>
            <li>
              <BsPeopleCircle size="28" />
              <span>이도현</span>
            </li>
            <li>
              <BsPeopleCircle size="28" />
              <span>추종현</span>
            </li>
            <li>
              <BsPeopleCircle size="28" />
              <span>이지호</span>
            </li>
            <li>
              <BsPeopleCircle size="28" />
              <span>이도현</span>
            </li>
            <li>
              <BsPeopleCircle size="28" />
              <span>추종현</span>
            </li>
            <li>
              <BsPeopleCircle size="28" />
              <span>이지호</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ChattingPage;
