import React, { useEffect, useState } from 'react';
import { useRouteMatch } from 'react-router-dom';
import socketIOClient from 'socket.io-client';
const ENDPOINT = 'http://localhost:4000';

const socket = socketIOClient(ENDPOINT);

interface MatchProps {
  id: string;
}
const Test = () => {
  const match = useRouteMatch<MatchProps>();
  const roomName = match.params.id;
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
    <div>
      <form action="" onSubmit={onClick}>
        <input type="text" onChange={onChange} value={message} />
        <button type="submit">전송</button>
      </form>
      {chat.map((c: any, index: any) => (
        <div>{c}</div>
      ))}
    </div>
  );
};

export default Test;
