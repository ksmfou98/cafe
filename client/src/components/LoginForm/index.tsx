import React from 'react';
import './styles.scss';

const LoginForm = () => {
  return (
    <>
      <div id="AuthForm">
        <h1 className="logo">
          <a href="/">Dofe</a>
        </h1>

        <div className="form">
          <input type="email" placeholder="이메일" />
          <input type="password" placeholder="비밀번호" />
          <button type="button" className="btn btn-type1">
            로그인
          </button>
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
