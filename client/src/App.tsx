import CafePage from 'pages/CafePage';
import LandingPage from 'pages/LandingPage';
import LoginPage from 'pages/LoginPage';
import PostPage from 'pages/PostPage';
import RegisterPage from 'pages/RegisterPage';
import WritePage from 'pages/WritePage';
import React from 'react';
import { Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Route component={LandingPage} exact path="/" />
      <Route component={CafePage} exact path="/:cafe?" />
      <Route component={LoginPage} path="/login" />
      <Route component={RegisterPage} path="/register" />
      <Route component={WritePage} path="/write" />
      <Route component={PostPage} path="/@:username/:postId" />
    </>
  );
}

export default App;
