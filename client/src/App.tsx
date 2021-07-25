import CafePage from 'pages/CafePage';
import LandingPage from 'pages/LandingPage';
import LoginPage from 'pages/LoginPage';
import RegisterPage from 'pages/RegisterPage';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import 'styles/main.scss';

function App() {
  return (
    <>
      <Switch>
        <Route path="/cafe/:cafe" component={CafePage} />
        <Route component={LoginPage} exact path="/login" />
        <Route component={RegisterPage} exact path="/join" />
        <Route component={LandingPage} path="/" />
      </Switch>
    </>
  );
}

export default App;
