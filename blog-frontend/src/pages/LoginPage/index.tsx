import AuthForm from 'components/auth/AuthForm';
import LoginForm from 'containers/auth/LoginForm';
import React from 'react';
import AuthTemplate from '../../components/auth/AuthTemplate';

const LoginPage = () => {
  return (
    <AuthTemplate>
      <LoginForm />
    </AuthTemplate>
  );
};

export default LoginPage;
