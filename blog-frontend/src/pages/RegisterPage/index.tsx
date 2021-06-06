import AuthForm from 'components/auth/AuthForm';
import AuthTemplate from 'components/auth/AuthTemplate';
import React from 'react';
import RegisterForm from '../../containers/auth/RegisterForm';

const RegisterPage = () => {
  return (
    <AuthTemplate>
      <RegisterForm />
    </AuthTemplate>
  );
};

export default RegisterPage;
