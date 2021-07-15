import React from 'react';
import './styles.scss';

const Header = () => {
  return (
    <>
      <div id="Header">
        <div className="inner-header">
          <a className="logo" href="/">
            Dofe
          </a>
          <div className="user-info">
            <div className="info-box">
              <a href="/login" className="btn-type1 login-btn">
                로그인
              </a>
              <a href="/join" className="btn-type2 login-btn">
                회원가입
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
