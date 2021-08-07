import React from 'react';
import { Link, NavLink, useRouteMatch } from 'react-router-dom';
import './styles.scss';
import { AiOutlineHome } from 'react-icons/ai';
import { BsClipboard } from 'react-icons/bs';
import { MdPeopleOutline } from 'react-icons/md';
import { useSelector } from 'react-redux';
import { reduxStateStore } from 'modules';
import useCafeInfoEffect from 'hooks/cafe/useCafeInfoEffect';

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
    <>
      <div id="CafeManageNav">
        <div className="cafe-info">
          <div className="cafe-name">{cafeInfo.name}</div>
          <div className="cafe-members">
            맴버수 : {cafeInfo.members?.length}명
          </div>
          <div className="cafe-manager">
            매니저 : {cafeInfo.manager.nickname}
          </div>
        </div>

        <div className="cafe-manage">
          <div className="manage">
            <NavLink
              activeStyle={activeStyle}
              exact
              to={`/manage/${cafe.route}`}
            >
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
      </div>
    </>
  );
};

export default CafeManageNav;
