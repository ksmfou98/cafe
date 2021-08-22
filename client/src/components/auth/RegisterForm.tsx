import Button from 'components/common/Button';
import useLoginEffect from 'hooks/user/useLoginEffect';
import useRegister from 'hooks/user/useRegister';
import styled from 'styled-components';

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
    nickname,
    onChangeNickname,
  } = useRegister();

  useLoginEffect(); // 회원가입시 바로 로그인

  return (
    <RegisterFormBlock>
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
        <input
          type="text"
          value={nickname}
          name="nickname"
          onChange={onChangeNickname}
          placeholder="닉네임"
        />
        <StyledButton type="submit" color="true">
          가입하기
        </StyledButton>
      </form>
      <hr />
    </RegisterFormBlock>
  );
};

const RegisterFormBlock = styled.div`
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

export default RegisterForm;
