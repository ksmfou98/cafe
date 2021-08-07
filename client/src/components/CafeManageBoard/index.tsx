import React from 'react';
import './styles.scss';
import { AiOutlineMenu } from 'react-icons/ai';
import useBoardListEffect from 'hooks/board/useBoardListEffect';
import { boardState } from 'modules/board';

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
    <>
      <div id="CafeManageBoard">
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
                              onClick={() => onUpdate(board._id)}
                            >
                              완료
                            </button>
                            <button type="button" onClick={updateCancel}>
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
      </div>
    </>
  );
};

export default CafeManageBoard;
