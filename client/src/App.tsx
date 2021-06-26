import CafeJoinPage from 'pages/CafeJoinPage';
import CafePage from 'pages/CafePage';
import LandingPage from 'pages/LandingPage';
import LoginPage from 'pages/LoginPage';
import RegisterPage from 'pages/RegisterPage';
import React from 'react';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <>
      <Switch>
        <Route component={LandingPage} exact path="/" />
        <Route path="/:cafe" exact component={CafePage} />
        <Route path="/:cafe/join" exact component={CafeJoinPage} />
        <Route component={LoginPage} path="/login" />
        <Route component={RegisterPage} path="/register" />
      </Switch>
    </>
  );
}

export default App;
