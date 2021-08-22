import useLogout from 'hooks/user/useLogout';
import styled from 'styled-components';
import { keyframes } from 'styled-components';

const HeaderUserMenu = () => {
  const { onLogout } = useLogout();
  return (
    <HeaderUserMenuBlock>
      <div className="inner-menu">
        <a href="/">
          <div className="menu-item">내 정보</div>
        </a>
        <div className="menu-item" onClick={onLogout}>
          로그아웃
        </div>
      </div>
    </HeaderUserMenuBlock>
  );
};
const FadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const HeaderUserMenuBlock = styled.div`
  position: absolute;
  right: 0;
  margin-top: 1rem;
  .inner-menu {
    position: relative;
    z-index: 5;
    width: 8rem;
    background: white;
    box-shadow: rgb(0 0 0 / 10%) 0px 0px 8px;
    animation: ${FadeIn} 0.5s;
    .menu-item {
      color: rgb(33, 37, 41);
      padding: 0.75rem 1rem;
      line-height: 1.5;
      font-weight: 500;
      cursor: pointer;
      font-size: 13px;
      &:hover {
        background-color: rgb(246, 246, 246);
      }
    }
  }
`;

export default HeaderUserMenu;
