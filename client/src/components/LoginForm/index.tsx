import client from 'lib/api/client';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './styles.scss';

const LoginForm = () => {
  const history = useHistory();

  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const { email, password } = form;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const nextForm = {
      ...form,
      [name]: value,
    };
    setForm(nextForm);
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const body = {
      email,
      password,
    };

    try {
      const response = await client.post('/user/login', body);
      history.push('/');
    } catch (e) {
      alert('로그인에 실패했습니다.');
    }
  };

  return (
    <>
      <div id="AuthForm">
        <h1 className="logo">
          <a href="/">Dofe</a>
        </h1>

        <div className="form">
          <form action="" onSubmit={onSubmit}>
            <input
              type="email"
              value={email}
              name="email"
              onChange={onChange}
              placeholder="이메일"
            />
            <input
              type="password"
              name="password"
              value={password}
              onChange={onChange}
              placeholder="비밀번호"
            />
            <button type="submit" className="btn btn-type1">
              로그인
            </button>
          </form>
          <hr />
          <a className="btn btn-type2" href="/join">
            회원가입
          </a>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
