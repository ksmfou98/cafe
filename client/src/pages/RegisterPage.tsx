import AuthTemplate from 'components/auth/AuthTemplate';
import RegisterForm from 'components/auth/RegisterForm';
import { Helmet } from 'react-helmet';

const RegisterPage = () => {
  return (
    <AuthTemplate AuthType="register">
      <Helmet>
        <title>Dofe - 회원가입</title>
      </Helmet>
      <RegisterForm />
    </AuthTemplate>
  );
};

export default RegisterPage;
