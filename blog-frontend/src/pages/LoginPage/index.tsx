import AuthForm from 'components/auth/AuthForm';
import React from 'react';
import AuthTemplate from '../../components/auth/AuthTemplate';

const LoginPage = () => {
  return (
    <AuthTemplate>
      <AuthForm type="login" />
    </AuthTemplate>
  );
};

export default LoginPage;
