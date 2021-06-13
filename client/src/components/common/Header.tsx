import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import Responsive from './Responsive';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { UserStateTypes } from 'modules/user';

const HeaderBlock = styled.div`
  position: fixed;
  width: 100%;
  z-index: 100;
  background: white;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08);
`;
/**
 * Responsive 컴포넌트의 속성에 스타일을 추가해서 새로운 컴포넌트 생성
 */

const Wrapper = styled(Responsive)`
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between; /** 자식 엘리먼트 사이의 여백을 최대로 설정 */
  .logo {
    font-size: 1.125rem;
    font-weight: 800;
    letter-spacing: 2px;
  }
  .right {
    display: flex;
    align-items: center;
  }
`;

/**
 * 헤더가 fixed로 되어 있기 때문에 페이지의 콘텐츠가 4rem 아래에 나타나도록 해 주는 컴포넌트
 */
const Spacer = styled.div`
  height: 4rem;
`;

const UserInfo = styled.div`
  font-weight: 800;
  margin-right: 1rem;
`;

interface HeaderProps {
  user: UserStateTypes;
}

const Header = ({ user }: HeaderProps) => {
  return (
    <>
      <HeaderBlock>
        <Wrapper>
          <div className="logo">
            <Link to={'/'}>Dofe</Link>
          </div>
          {user.username ? (
            <div className="right">
              <UserInfo>{user.username}</UserInfo>
              <Button>로그아웃</Button>
            </div>
          ) : (
            <div className="right">
              <Button>
                <Link to={'/login'}>로그인</Link>
              </Button>
            </div>
          )}
        </Wrapper>
      </HeaderBlock>
      <Spacer />
    </>
  );
};

function mapStateToProps(state: any) {
  //  redux state로 부터 state를 component의 props으로 전달해줌
  //  store의 값을 여기 state로 가져올수 있음
  return { user: state.user };
}

export default connect(mapStateToProps)(Header);
