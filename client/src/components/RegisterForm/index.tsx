import useLoginEffect from 'hooks/user/useLoginEffect';
import useRegister from 'hooks/user/useRegister';
import React from 'react';

const RegisterForm = () => {
  const {
    onSubmit,
    email,
    onChangeEmail,
    password,
    onChangePassword,
    passwordCheck,
    onChangePasswordCheck,
    name,
    onChangeName,
  } = useRegister();

  useLoginEffect(); // 회원가입시 바로 로그인

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
              onChange={onChangeEmail}
              placeholder="이메일"
            />
            <input
              type="password"
              value={password}
              name="password"
              onChange={onChangePassword}
              placeholder="비밀번호"
            />
            <input
              type="password"
              value={passwordCheck}
              name="passwordCheck"
              onChange={onChangePasswordCheck}
              placeholder="비밀번호확인"
            />
            <input
              type="text"
              value={name}
              name="name"
              onChange={onChangeName}
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
