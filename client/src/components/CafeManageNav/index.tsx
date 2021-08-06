import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './styles.scss';
import { AiOutlineHome } from 'react-icons/ai';
import { BsClipboard } from 'react-icons/bs';
import { MdPeopleOutline } from 'react-icons/md';

const CafeManageNav = () => {
  const activeStyle = {
    color: '#5b4ef6',
  };
  return (
    <>
      <div id="CafeManageNav">
        <div className="cafe-info">
          <div className="cafe-name">수만휘</div>
          <div className="cafe-members">맴버수 : 3명</div>
          <div className="cafe-manager">매니저 : 도현</div>
        </div>

        <div className="cafe-manage">
          <div className="manage">
            <NavLink activeStyle={activeStyle} exact to={`/manage/suhui`}>
              <AiOutlineHome size="20" />
              <span>카페 관리</span>
            </NavLink>
          </div>
          <div className="manage">
            <NavLink activeStyle={activeStyle} exact to={`/manage/suhui/board`}>
              <BsClipboard size="18" />
              <span>게시판 관리</span>
            </NavLink>
          </div>
          <div className="manage">
            <NavLink
              activeStyle={activeStyle}
              exact
              to={`/manage/suhui/member`}
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
