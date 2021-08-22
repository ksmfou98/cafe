import AuthTemplate from 'components/auth/AuthTemplate';
import RegisterForm from 'components/auth/RegisterForm';
import React from 'react';

const RegisterPage = () => {
  return (
    <AuthTemplate AuthType="register">
      <RegisterForm />
    </AuthTemplate>
  );
};

export default RegisterPage;
