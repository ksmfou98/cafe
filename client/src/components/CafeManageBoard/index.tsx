import React from 'react';
import './styles.scss';
import { AiOutlineMenu } from 'react-icons/ai';

const CafeManageBoard = () => {
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
                <li>
                  <div className="inner-list">
                    <div className="left-item">
                      <AiOutlineMenu />
                      <span>자유 게시판</span>
                    </div>
                    <div className="right-item">
                      <button type="button" className="btn-type2">
                        수정
                      </button>
                      <button type="button" className="btn-type1">
                        삭제
                      </button>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="inner-list">
                    <div className="left-item">
                      <AiOutlineMenu />
                      <span>자유 게시판</span>
                    </div>
                    <div className="right-item">
                      <button type="button" className="btn-type2">
                        수정
                      </button>
                      <button type="button" className="btn-type1">
                        삭제
                      </button>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="inner-list">
                    <div className="left-item">
                      <AiOutlineMenu />
                      <span>자유 게시판</span>
                    </div>
                    <div className="right-item">
                      <button type="button" className="btn-type2">
                        수정
                      </button>
                      <button type="button" className="btn-type1">
                        삭제
                      </button>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="inner-list">
                    <div className="left-item">
                      <AiOutlineMenu />
                      <span>자유 게시판</span>
                    </div>
                    <div className="right-item">
                      <button type="button" className="btn-type2">
                        수정
                      </button>
                      <button type="button" className="btn-type1">
                        삭제
                      </button>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="inner-list">
                    <div className="left-item">
                      <AiOutlineMenu />
                      <span>자유 게시판</span>
                    </div>
                    <div className="right-item">
                      <button type="button" className="btn-type2">
                        수정
                      </button>
                      <button type="button" className="btn-type1">
                        삭제
                      </button>
                    </div>
                  </div>
                </li>
              </ul>
              <div className="board-form">
                <input type="text" placeholder="게시판을 추가해주세요" />
                <button type="button" className="btn-type1">
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
