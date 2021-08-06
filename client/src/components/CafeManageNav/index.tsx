import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

const CafeManageNav = () => {
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
            <Link to={`/manage/suhui`}>카페 관리</Link>
          </div>
          <div className="manage">
            <Link to={`/manage/suhui/board`}>게시판 관리</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default CafeManageNav;
