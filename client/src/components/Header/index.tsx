import useLogout from 'hooks/user/useLogout';
import { reduxStateStore } from 'modules';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import './styles.scss';
import logo from 'static/logo.png';

const Header = () => {
  const user = useSelector((state: reduxStateStore) => state.user);
  const [isLayer, setIsLayer] = useState(false);

  const onToggle = () => {
    setIsLayer(!isLayer);
  };
  const { onLogout } = useLogout();

  return (
    <>
      <div id="Header">
        <div className="inner-header">
          <a className="logo" href="/">
            <img src={logo} alt="logo" />
          </a>

          <div className="user-info">
            <div className="info-box">
              {user.nickname ? (
                <div className="info">
                  <button type="button" className="username" onClick={onToggle}>
                    반갑습니다, &nbsp;
                    <span className="name">{user.nickname}</span>
                    &nbsp; 님!
                  </button>
                  {isLayer && (
                    <div className="user-menu">
                      <div className="inner-menu">
                        <a href="">
                          <div className="menu-item">내 정보</div>
                        </a>
                        <div className="menu-item" onClick={onLogout}>
                          로그아웃
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <div className="info">
                  <a href="/login" className="btn-type1 btn">
                    로그인
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
