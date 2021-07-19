import client from 'lib/api/client';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const RegisterForm = () => {

  const history = useHistory();

  const [form, setForm] = useState({
    email: '',
    password: '',
    passwordCheck: '',
    name: '',
  });

  const { email, password, passwordCheck, name } = form;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
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
      name,
    };

    try {
      const response = await client.post('/user/register', body);
      history.push("/")
    } catch (e) {
      alert('회원가입 실패했습니다.');
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
              value={password}
              name="password"
              onChange={onChange}
              placeholder="비밀번호"
            />
            <input
              type="password"
              value={passwordCheck}
              name="passwordCheck"
              onChange={onChange}
              placeholder="비밀번호확인"
            />
            <input
              type="text"
              value={name}
              name="name"
              onChange={onChange}
              placeholder="이름"
            />
            <button type="submit" className="btn btn-type1">
              가입하기
            </button>
          </form>
          <hr />
          <a className="btn btn-type2" href="/login">
            로그인 하러 가기
          </a>
        </div>
      </div>
    </>
  );
};

export default RegisterForm;
