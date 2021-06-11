import store from 'modules';
import { SetUser } from 'modules/user';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';


// function loadUser() {
//   try {
//     let user = localStorage.getItem('user');
//     console.log(user);
//     if (!user) return; // 로그인 상태가 아니라면 함수에서 나옴
//   } catch (e) {}
// }

// loadUser();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
