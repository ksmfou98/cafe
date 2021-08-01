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
              {user.nickname ? (
                <div className="info">
                  <div className="username">{user.nickname}</div>
                  <button
                    className="btn-type1 btn logout"
                    type="button"
                    onClick={onLogout}
                  >
                    로그아웃
                  </button>
                </div>
              ) : (
                <div className="info">
                  <a href="/login" className="btn-type1 btn">
                    로그인
                  </a>
                  <a href="/join" className="btn-type2 btn">
                    회원가입
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
