import { Link, NavLink, useRouteMatch } from 'react-router-dom';
import { AiOutlineHome } from 'react-icons/ai';
import { BsClipboard } from 'react-icons/bs';
import { MdPeopleOutline } from 'react-icons/md';
import { useSelector } from 'react-redux';
import { reduxStateStore } from 'modules';
import useCafeInfoEffect from 'hooks/cafe/useCafeInfoEffect';
import styled from 'styled-components';
import { palette } from 'lib/styles/palette';

interface matchProps {
  cafe: string;
}
const CafeManageNav = () => {
  const cafe = useSelector((state: reduxStateStore) => state.cafe);
  const user = useSelector((state: reduxStateStore) => state.user);

  const match = useRouteMatch<matchProps>();
  const route = match.params.cafe;
  const { cafeInfo } = useCafeInfoEffect(route, user._id);

  const activeStyle = {
    color: '#5b4ef6',
  };
  return (
    <CafeManageNavBlock id="CafeManageNav">
      <div className="cafe-info">
        <Link to={`/cafe/${cafe.route}`} className="cafe-name">
          {cafeInfo.name}
        </Link>
        <div className="cafe-members">
          맴버수 : {cafeInfo.members?.length}명
        </div>
        <div className="cafe-manager">매니저 : {cafeInfo.manager.nickname}</div>
      </div>

      <div className="cafe-manage">
        <div className="manage">
          <NavLink activeStyle={activeStyle} exact to={`/manage/${cafe.route}`}>
            <AiOutlineHome size="20" />
            <span>카페 관리</span>
          </NavLink>
        </div>
        <div className="manage">
          <NavLink
            activeStyle={activeStyle}
            exact
            to={`/manage/${cafe.route}/board`}
          >
            <BsClipboard size="18" />
            <span>게시판 관리</span>
          </NavLink>
        </div>
        <div className="manage">
          <NavLink
            activeStyle={activeStyle}
            exact
            to={`/manage/${cafe.route}/member`}
          >
            <MdPeopleOutline size="20" />
            <span>맴버 관리</span>
          </NavLink>
        </div>
      </div>

      <div className="cafe-delete">
        <button className="btn-type1">카페 삭제</button>
      </div>
    </CafeManageNavBlock>
  );
};

const CafeManageNavBlock = styled.div`
  width: 200px;
  .cafe-info {
    background: #fff;
    padding: 20px;
    margin-bottom: 20px;
    border: 1px solid #e0e5ee;
    .cafe-name {
      display: block;
      font-size: 18px;
      line-height: 22px;
      font-weight: bold;
      letter-spacing: -1px;
      word-break: break-all;
      margin-bottom: 10px;
    }
    .cafe-members {
      margin-bottom: 5px;
    }
  }

  .cafe-manage {
    background: #fff;
    border: 1px solid #e0e5ee;
    margin-bottom: 20px;
    .manage {
      a {
        display: flex;
        padding: 15px 10px;
        border-bottom: 1px solid #f1f3f6;
        font-size: 17px;
        line-height: 16px;
        align-items: center;
        color: rgb(111, 109, 109);
        &:hover {
          background-color: #f8f8f8;
          color: ${palette.mainColor};
        }
        svg {
          margin-right: 7px;
        }
      }
    }
  }

  .cafe-delete {
    button {
      width: 100%;
      padding: 10px;
      font-size: 16px;
      font-weight: 700;
    }
  }
`;

export default CafeManageNav;
