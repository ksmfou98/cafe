import React from 'react';
import './styles.scss';

const CafeMenuBox = () => {
  return (
    <div id="CafeMenuBox">
      <div className="menubox-in">
        <div className="menu-list">
          <div className="cafe-menu-tit">
            <span>즐겨찾는 게시판</span>
          </div>
          <ul className="cafe-menu-list">
            <li>
              <a href="" className="menu-link">
                전체 글보기
              </a>
            </li>
          </ul>

          <div className="cafe-menu-tit">
            <span>이도현 게시판</span>
          </div>
          <ul className="cafe-menu-list">
            <li>
              <a href="" className="menu-link">
                이도현 이슈 정리
              </a>
            </li>
            <li>
              <a href="" className="menu-link">
                이도현 이슈 정리
              </a>
            </li>
            <li>
              <a href="" className="menu-link">
                이도현 이슈 정리
              </a>
            </li>
            <li>
              <a href="" className="menu-link">
                이도현 이슈 정리
              </a>
            </li>
          </ul>

          <div className="cafe-menu-tit">
            <span>지호종현 게시판</span>
          </div>
          <ul className="cafe-menu-list">
            <li>
              <a href="" className="menu-link">
                지호 종현 논란 정리
              </a>
            </li>
            <li>
              <a href="" className="menu-link">
                지호 종현 논란 정리
              </a>
            </li>
            <li>
              <a href="" className="menu-link">
                지호 종현 논란 정리
              </a>
            </li>
            <li>
              <a href="" className="menu-link">
                지호 종현 논란 정리
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CafeMenuBox;
