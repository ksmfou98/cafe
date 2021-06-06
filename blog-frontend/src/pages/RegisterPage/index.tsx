import AuthForm from 'components/auth/AuthForm';
import AuthTemplate from 'components/auth/AuthTemplate';
import React from 'react';
import { withRouter } from 'react-router';
import RegisterForm from '../../containers/auth/RegisterForm';

const RegisterPage = ({ history }: any) => {
  return (
    <AuthTemplate>
      <RegisterForm history={history} />
    </AuthTemplate>
  );
};

export default withRouter(RegisterPage);
