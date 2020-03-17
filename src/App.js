import React from 'react';
import { Route } from 'react-router-dom';
import LoginPage from './pages/auth/LoginPage';
import MainPage from './pages/main/MainPage';
import { Helmet } from 'react-helmet-async';

const App = () => {
  return (
    <>
      <Helmet>
        <title>MYLOG</title>
      </Helmet>
      <Route component={MainPage} exact path="/" />
      <Route component={LoginPage} path="/login" />
    </>
  );
};
export default App;
