import Button from 'components/common/Button';
import useLogin from 'hooks/user/useLogin';
import useLoginEffect from 'hooks/user/useLoginEffect';
import styled from 'styled-components';

const LoginForm = () => {
  const { email, onChangeEmail, password, onChangePassword, onLogin } =
    useLogin();

  useLoginEffect();

  return (
    <LoginFormBlock>
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
    </LoginFormBlock>
  );
};

const LoginFormBlock = styled.div`
  input {
    border: 1px solid #bcbbbb;
    width: 100%;
    border-radius: 20px;
    padding: 15px;
    margin-bottom: 8px;
  }
`;

const StyledButton = styled(Button)`
  width: 100%;
  font-size: 16px;
  padding: 14px;
  border-radius: 20px;
  margin: 10px 0;
`;

export default LoginForm;
