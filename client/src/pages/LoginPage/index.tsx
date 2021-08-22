import LoginForm from 'components/auth/LoginForm';
import AuthTemplate from 'components/auth/AuthTemplate';

const LoginPage = () => {
  return (
    <AuthTemplate AuthType="login">
      <LoginForm />
    </AuthTemplate>
  );
};

export default LoginPage;
