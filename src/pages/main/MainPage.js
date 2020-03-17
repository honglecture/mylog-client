import React from 'react';
import MainTemplate from '../../components/main/MainTemplate';
import LoginForm from '../../containers/auth/LoginForm';

const LoginPage = () => {
  return (
    <MainTemplate>
      <LoginForm />
    </MainTemplate>
  );
};

export default LoginPage;
