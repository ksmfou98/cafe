import { AiOutlineMenu } from 'react-icons/ai';
import useBoardListEffect from 'hooks/board/useBoardListEffect';
import { boardState } from 'modules/board';
import styled from 'styled-components';
import { palette } from 'lib/styles/palette';

const CafeManageBoard = () => {
  const {
    boards,
    createName,
    onChangeCreateName,
    onCreate,
    onDelete,
    updateBoardId,
    updateName,
    onChangeUpdateName,
    activeUpdateBoard,
    updateCancel,
    onUpdate,
  } = useBoardListEffect();
  return (
    <CafeManageBoardBlock>
      <div className="tit">게시판 관리</div>

      <div className="inner-box">
        <div className="content">
          <p className="desc_info">
            드래그 앤 드롭으로 게시판 순서를 변경할 수 있습니다.
          </p>
          <div className="board-list">
            <ul>
              <li>
                <div className="inner-list">
                  <span>전체 게시판</span>
                </div>
              </li>
              {boards.map((board: boardState, index) => (
                <li key={index}>
                  <div className="inner-list">
                    <div className="left-item">
                      {board._id === updateBoardId ? (
                        <input
                          type="text"
                          value={updateName}
                          className="edit-input"
                          onChange={onChangeUpdateName}
                        />
                      ) : (
                        <>
                          <AiOutlineMenu />
                          <span>{board.name}</span>
                        </>
                      )}
                    </div>
                    <div className="right-item">
                      {board._id === updateBoardId ? (
                        <>
                          <button
                            type="button"
                            className="btn-type2"
                            onClick={() => onUpdate(board._id)}
                          >
                            수정 완료
                          </button>
                          <button
                            type="button"
                            className="btn-type1"
                            onClick={updateCancel}
                          >
                            취소
                          </button>
                        </>
                      ) : (
                        <>
                          <button
                            type="button"
                            className="btn-type2"
                            onClick={() =>
                              activeUpdateBoard(board._id, board.name)
                            }
                          >
                            수정
                          </button>
                          <button
                            type="button"
                            className="btn-type1"
                            onClick={() => onDelete(board._id)}
                          >
                            삭제
                          </button>
                        </>
                      )}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            <div className="board-form">
              <input
                type="text"
                placeholder="게시판을 추가해주세요"
                value={createName}
                onChange={onChangeCreateName}
              />
              <button type="button" className="btn-type1" onClick={onCreate}>
                추가
              </button>
            </div>
          </div>
        </div>
      </div>
    </CafeManageBoardBlock>
  );
};

const CafeManageBoardBlock = styled.div`
  .inner-box {
    display: flex;
    flex: 1 1 auto;
    padding: 25px 75px 0;
    font-size: 14px;
    background-color: #fff;
    border-radius: 1px;
    border: 1px solid #e0e5ee;
    align-items: baseline;

    .content {
      flex: 1 1;
      .desc_info {
        margin-top: 4px;
        font-size: 13px;
        color: #808080;
      }
      .board-list {
        margin: 21px 0 30px;
        padding: 8px;
        border-radius: 1px;
        background-color: #e7edf3;
        ul {
          margin-bottom: 10px;
          li {
            padding: 0 19px;
            height: 50px;
            margin-bottom: -1px;
            border: 1px solid #e0e5ee;
            font-size: 16px;
            background-color: #fff;
            box-sizing: border-box;
            line-height: 45px;
            &:hover {
              background-color: #fdfdfd;
            }
            .inner-list {
              display: flex;
              align-items: center;
              justify-content: space-between;
              height: 100%;
              .left-item {
                display: flex;
                align-items: center;
                width: 65%;
                .edit-input {
                  padding: 5px 10px;
                  border: 1px solid ${palette.mainColor};
                  border-radius: 5px;
                  margin-right: 10px;
                  width: 100%;
                  height: 35px;
                }
                svg {
                  margin-right: 8px;
                  color: #999;
                  &:hover {
                    cursor: move;
                  }
                }
              }
              .right-item {
                display: flex;
                align-items: center;
                button {
                  margin-right: 5px;
                  padding: 3px 12px;
                }
              }
            }
          }
        }
      }

      .board-form {
        flex: 0 1 350px;
        display: flex;
        align-items: center;
        justify-content: center;
        input {
          padding: 5px 10px;
          border: 1px solid #e0e5ee;
          border-radius: 5px;
          margin-right: 10px;
          width: 92%;
          height: 35px;
        }
        button {
          padding: 5px 15px;
          height: 35px;
        }
      }
    }
  }
`;

export default CafeManageBoard;
