import LoginForm from 'components/auth/LoginForm';
import AuthTemplate from 'components/auth/AuthTemplate';
import { Helmet } from 'react-helmet';

const LoginPage = () => {
  return (
    <AuthTemplate AuthType="login">
      <Helmet>
        <title>Dofe - 로그인</title>
      </Helmet>
      <LoginForm />
    </AuthTemplate>
  );
};

export default LoginPage;
