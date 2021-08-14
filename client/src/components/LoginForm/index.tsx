import Button from 'components/common/Button';
import useLogin from 'hooks/user/useLogin';
import useLoginEffect from 'hooks/user/useLoginEffect';
import React from 'react';
import styled from 'styled-components';
import { css } from 'styled-components';
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
            <StyledButton color={'true'}>로그인</StyledButton>
          </form>
          <hr />

          <StyledLink to={'/join'} color={'false'}>
            회원가입
          </StyledLink>
        </div>
      </div>
    </>
  );
};

const StyledButton = styled(Button)`
  width: 100%;
  font-size: 16px;
  padding: 14px;
`;

const StyledLink = styled(Button)`
  width: 100%;
  font-size: 16px;
  padding: 14px;
  display: block;
`;
export default LoginForm;
