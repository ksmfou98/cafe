import useInput from 'hooks/common/useInput';
import { registerAPI } from 'lib/api/user';
import { SetUser } from 'modules/user';
import { useDispatch } from 'react-redux';

export default function useRegister() {
  const dispatch = useDispatch();
  const [email, onChangeEmail] = useInput('');
  const [password, onChangePassword] = useInput('');
  const [passwordCheck, onChangePasswordCheck] = useInput('');
  const [name, onChangeName] = useInput('');
  const [nickname, onChangeNickname] = useInput('');

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await registerAPI(email, password, name, nickname);
      dispatch(SetUser(response.user));
    } catch (e) {
      alert('회원가입에 실패했습니다');
    }
  };

  return {
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
  };
}
