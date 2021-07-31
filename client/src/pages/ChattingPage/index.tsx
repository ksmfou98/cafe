import React, { useEffect, useState } from 'react';
import './styles.scss';
import { useRouteMatch } from 'react-router-dom';
import socketIOClient from 'socket.io-client';
import { RiSendPlaneFill } from 'react-icons/ri';
import { BsPeopleCircle } from 'react-icons/bs';
const ENDPOINT = 'http://localhost:4000';

const socket = socketIOClient(ENDPOINT);

interface MatchProps {
  cafe: string;
}
const ChattingPage = () => {
  const match = useRouteMatch<MatchProps>();
  const roomName = match.params.cafe;
  const [response, setResponse] = useState('');
  const [chat, setChat] = useState<any>([]);
  const [message, setMessage] = useState('');
  const [your_id, setYour_id] = useState('');

  //   useEffect(() => {
  //     socket.on('upload', (data) => {
  //       console.log(data);
  //       setResponse(data.message);
  //     });
  //   }, []);
  useEffect(() => {
    const user_id = roomName;
    socket.emit('room', user_id);
    socket.on('your_id', (id) => {
      console.log(id);
      setYour_id(id);
    });
    socket.on('message', (message) => {
      console.log(message);
      setResponse(message);
    });
  }, []);

  useEffect(() => {
    response.length > 0 && setChat([...chat, response]);
  }, [response]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };

  const onClick = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const messageobject = {
      name: roomName,
      body: message,
      id: your_id,
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
            <div>{c}</div>
          ))}
          
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
