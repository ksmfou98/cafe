import CafePage from 'pages/cafe/CafePage';
import HomePage from 'pages/home/HomePage';
import LoginPage from 'pages/LoginPage';
import RegisterPage from 'pages/RegisterPage';
import ChattingPage from 'pages/cafe/ChattingPage';
import { Route, Switch } from 'react-router-dom';
import CafeManagePage from 'pages/manage/CafeManagePage';

function App() {
  return (
    <>
      <Switch>
        <Route path="/channels/:cafe" component={ChattingPage} />
        <Route path="/cafe/:cafe" component={CafePage} />
        <Route path="/manage/:cafe" component={CafeManagePage} />
        <Route path="/login" exact component={LoginPage} />
        <Route path="/register" exact component={RegisterPage} />
        <Route path="/" component={HomePage} />
      </Switch>
    </>
  );
}

export default App;
