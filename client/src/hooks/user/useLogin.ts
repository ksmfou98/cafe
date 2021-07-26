import useInput from 'hooks/common/useInput';
import { loginAPI } from 'lib/api/user';
import { SetUser } from 'modules/user';
import { useDispatch } from 'react-redux';

export default function useLogin() {
  const [email, onChangeEmail] = useInput('');
  const [password, onChangePassword] = useInput('');
  const dispatch = useDispatch();

  const onLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await loginAPI(email, password);
      dispatch(SetUser(response.user));
    } catch (e) {
      alert('로그인에 실패했습니다.');
    }
  };

  return {
    email,
    onChangeEmail,
    password,
    onChangePassword,
    onLogin,
  };
}
