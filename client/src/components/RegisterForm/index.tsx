import React from 'react';

const RegisterForm = () => {
  return (
    <>
      <div id="AuthForm">
        <h1 className="logo">
          <a href="/">Dofe</a>
        </h1>

        <div className="form">
          <input type="email" placeholder="이메일" />
          <input type="password" placeholder="비밀번호" />
          <input type="password" placeholder="비밀번호확인" />
          <input type="text" placeholder="이름" />
          <input type="text" placeholder="휴대폰번호" />
          <button type="button" className="btn btn-type1">
            가입하기
          </button>
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
