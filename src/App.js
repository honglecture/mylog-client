import React from 'react';
import { Route } from 'react-router-dom';
import LoginPage from './pages/auth/LoginPage';
import MainPage from './pages/main/MainPage';
import { Helmet } from 'react-helmet-async';
import HomePage from './pages/mylog/HomePage';

const App = () => {
  return (
    <>
      <Helmet>
        <title>MYLOG</title>
      </Helmet>
      <Route component={MainPage} exact path="/" />
      <Route component={LoginPage} path="/login" />
      <Route component={HomePage} path="/home" />
    </>
  );
};
export default App;
