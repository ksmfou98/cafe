import useBoardListEffect from 'hooks/board/useBoardListEffect';
import { reduxStateStore } from 'modules';
import { boardState, SetBoard } from 'modules/board';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './styles.scss';

const CafeMenuBox = () => {
  const { boards } = useBoardListEffect();
  const dispatch = useDispatch();
  const cafe = useSelector((state: reduxStateStore) => state.cafe);
  const board = useSelector((state: reduxStateStore) => state.board);
  const history = useHistory();

  const onDispatchforBoard = (boardId: string, name: string) => {
    dispatch(SetBoard({ _id: boardId, name }));
    history.push(`/cafe/${cafe.route}`);
  };

  return (
    <div id="CafeMenuBox">
      <div className="menubox-in">
        <div className="menu-list">
          <ul className="cafe-menu-list">
            <li className={board.name === '전체 글보기' ? 'menu-active' : ''}>
              <button
                type="button"
                onClick={() => onDispatchforBoard('all', '전체 글보기')}
                className="menu-link"
              >
                전체 글보기
              </button>
            </li>
            {boards.map((b: boardState, index) => (
              <li
                key={index}
                className={board.name === b.name ? 'menu-active' : ''}
              >
                <button
                  type="button"
                  onClick={() => onDispatchforBoard(b._id, b.name)}
                  className="menu-link"
                >
                  {b.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CafeMenuBox;
