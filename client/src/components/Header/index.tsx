import useLogout from 'hooks/user/useLogout';
import { reduxStateStore } from 'modules';
import React from 'react';
import { useSelector } from 'react-redux';
import './styles.scss';

const Header = () => {
  const user = useSelector((state: reduxStateStore) => state.user);

  const { onLogout } = useLogout();
  return (
    <>
      <div id="Header">
        <div className="inner-header">
          <a className="logo" href="/">
            Dofe
          </a>
          <div className="user-info">
            <div className="info-box">
              {user.name ? (
                <>
                  <div>{user.name}</div>
                  <button type="button" onClick={onLogout}>
                    로그아웃
                  </button>
                </>
              ) : (
                <>
                  <a href="/login" className="btn-type1 login-btn">
                    로그인
                  </a>
                  <a href="/join" className="btn-type2 login-btn">
                    회원가입
                  </a>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
