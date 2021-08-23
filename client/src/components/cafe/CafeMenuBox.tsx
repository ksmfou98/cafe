import useBoardListEffect from 'hooks/board/useBoardListEffect';
import { reduxStateStore } from 'modules';
import { boardState, SetBoard } from 'modules/board';
import { HiOutlineClipboardList } from 'react-icons/hi';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

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
    <CafeMenuBoxBlock>
      <div className="menubox-in">
        <div className="menu-list">
          <ul className="cafe-menu-list">
            <li className={board.name === '전체 글보기' ? 'menu-active' : ''}>
              <span className="ico">
                <HiOutlineClipboardList size="22" />
              </span>
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
                <span className="ico">
                  <HiOutlineClipboardList size="22" />
                </span>
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
    </CafeMenuBoxBlock>
  );
};

const CafeMenuBoxBlock = styled.div`
  padding: 30px 0;
  border-top: 1px solid #cecece;
  border-bottom: 1px solid #cecece;
  margin: 10px 0;
  .menubox-in {
    width: 100%;
    .menu-list {
      display: block;
      color: #3e464a;
      .cafe-menu-tit:first-child {
        border-top: none;
      }
      .cafe-menu-list {
        padding: 0 10px;
        margin-top: 6px;
        font-size: 13px;
        line-height: 24px;
        li {
          padding: 7px;
          display: flex;
          align-items: center;
          border-radius: 10px;
          .ico {
            line-height: 19px;
            color: #706f6f;
          }
          .menu-link:hover {
            text-decoration: underline;
          }
          button {
            font-size: 15px;
          }
          &:hover {
            background: #e0e7f7;
            span {
              color: #5b4ef6;
            }
            button {
              color: #5b4ef6;
              font-weight: 600;
            }
          }
        }
        .menu-active {
          background: #e0e7f7;
          span {
            color: #5b4ef6;
          }
          button {
            color: #5b4ef6;
            font-weight: 600;
          }
        }
      }
    }
  }
`;

export default CafeMenuBox;
