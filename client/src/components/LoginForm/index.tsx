import useLogin from 'hooks/user/useLogin';
import useLoginEffect from 'hooks/user/useLoginEffect';
import React from 'react';
import './styles.scss';

const LoginForm = () => {
  const { email, onChangeEmail, password, onChangePassword, onLogin } =
    useLogin();

  useLoginEffect();

  return (
    <>
      <div id="AuthForm">
        <h1 className="logo">
          <a href="/">Dofe</a>
        </h1>

        <div className="form">
          <form action="" onSubmit={onLogin}>
            <input
              type="email"
              value={email}
              name="email"
              onChange={onChangeEmail}
              placeholder="이메일"
            />
            <input
              type="password"
              name="password"
              value={password}
              onChange={onChangePassword}
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
