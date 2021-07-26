import React, { useEffect, useState } from 'react';
import socketIOClient from 'socket.io-client';
const ENDPOINT = 'http://localhost:4000';

const socket = socketIOClient(ENDPOINT);
const Test = () => {
  const [response, setResponse] = useState('');
  const [chat, setChat] = useState<any>([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    socket.on('upload', (data) => {
      console.log(data);
      setResponse(data.message);
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
    socket.emit('message', { message });
    setMessage('');
  };

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
