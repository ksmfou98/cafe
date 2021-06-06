import AuthForm from 'components/auth/AuthForm';
import LoginForm from 'containers/auth/LoginForm';
import React from 'react';
import { withRouter } from 'react-router';
import AuthTemplate from '../../components/auth/AuthTemplate';

const LoginPage = ({ history }: any) => {
  return (
    <AuthTemplate>
      <LoginForm history={history} />
    </AuthTemplate>
  );
};

export default withRouter(LoginPage);
