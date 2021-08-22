import CafePage from 'pages/CafePage';
import LandingPage from 'pages/LandingPage';
import LoginPage from 'pages/LoginPage';
import RegisterPage from 'pages/RegisterPage';
import ChattingPage from 'pages/ChattingPage';
import { Route, Switch } from 'react-router-dom';
import 'styles/main.scss';
import CafeManagePage from 'pages/CafeManagePage';

function App() {
  return (
    <>
      <Switch>
        <Route path="/channels/:cafe" component={ChattingPage} />
        <Route path="/cafe/:cafe" component={CafePage} />
        <Route path="/manage/:cafe" component={CafeManagePage} />
        <Route path="/login" exact component={LoginPage} />
        <Route path="/register" exact component={RegisterPage} />
        <Route path="/" component={LandingPage} />
      </Switch>
    </>
  );
}

export default App;
