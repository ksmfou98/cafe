import { reduxStateStore } from 'modules';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import logo from 'static/logo.png';
import Button from 'components/common/Button';
import styled from 'styled-components';
import HeaderUserMenu from './HeaderUserMenu';

const Header = () => {
  const user = useSelector((state: reduxStateStore) => state.user);
  const [isLayer, setIsLayer] = useState(false);

  const onToggle = () => {
    setIsLayer(!isLayer);
  };

  return (
    <HeaderBlock>
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
                {isLayer && <HeaderUserMenu />}
              </div>
            ) : (
              <div className="info">
                <StyledButton color={'true'} to={'/login'}>
                  로그인
                </StyledButton>
              </div>
            )}
          </div>
        </div>
      </div>
    </HeaderBlock>
  );
};

const HeaderBlock = styled.header`
  width: 100%;
  background-color: #fff;
  height: 55px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);
  .inner-header {
    padding: 10px 5px;
    max-width: 1200px;
    margin: 0 auto;
    height: 100%;
    .logo {
      float: left;
      width: 100px;
      img {
        width: 100%;
      }
    }
    .user-info {
      float: right;
      display: flex;
      height: 100%;
      align-items: center;
      .info-box {
        display: flex;
        margin-top: 7px;
        .info {
          position: relative;
          .username {
            font-size: 14px;
            color: #636262;
            cursor: pointer;
            .name {
              font-weight: 500;
              color: #000;
            }
          }
        }
      }
    }
  }
`;

const StyledButton = styled(Button)`
  width: 80px;
  height: 30px;
`;

export default Header;
