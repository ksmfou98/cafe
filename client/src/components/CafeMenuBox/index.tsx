import useBoardListEffect from 'hooks/board/useBoardListEffect';
import { boardState } from 'modules/board';
import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

const CafeMenuBox = () => {
  const { boards } = useBoardListEffect();

  return (
    <div id="CafeMenuBox">
      <div className="menubox-in">
        <div className="menu-list">
          <ul className="cafe-menu-list">
            <li>
              <a href="" className="menu-link">
                전체 글보기
              </a>
            </li>
            {boards.map((board: boardState, index) => (
              <li key={index}>
                <Link to="" className="menu-link">
                  {board.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CafeMenuBox;
