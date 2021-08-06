import React from 'react';
import './styles.scss';

const CafeManageBoard = () => {
  return (
    <>
      <div id="CafeManageBoard">
        <div className="tit">게시판 관리</div>

        <div className="inner-box">
          <div className="left-box">
            <input type="text" placeholder="게시판을 추가해주세요" />
          </div>
          <div className="right-box">
            <ul>
              <li>전체 게시판</li>
              <li>자유 게시판</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default CafeManageBoard;
