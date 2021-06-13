import React from 'react';
import './styles.scss';

const MyCafeList = () => {
  return (
    <div className="cafe-list">
      <div className="inner-mycafe">
        <div className="cafe-util">
          <div className="cafe-menu">
            <ul className="list-menu">
              <li className="list">
                <a href="#" className="list-item">
                  내 카페
                  <span className="num-item">1</span>
                </a>
              </li>
              <li className="list">
                <a href="#" className="list-item">
                  즐겨 찾는 카페
                  <span className="num-item">0</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="cafe-card">
          <ul className="list-cafe">
            <li className="cafe-list">
              <a href="#" className="cafe-link">
                <div className="thumb-info-type">
                  <div className="wrap-thumb">
                    <img src="" alt="" className="img-thumb" />
                  </div>
                  <div className="wrap-info">
                    <div className="box-tbl">
                      <div className="inner-tbl">
                        <strong className="tit-info">이도현의 반수 카페</strong>
                        <div className="additional-info">
                          <span className="txt-item ">준회원</span>
                          <span className="txt">맴버수</span>
                          <span className="txt">345명</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </li>
            <li className="cafe-list">
              <a href="#" className="cafe-link">
                <div className="thumb-info-type">
                  <div className="wrap-thumb">
                    <img src="" alt="" className="img-thumb" />
                  </div>
                  <div className="wrap-info">
                    <div className="box-tbl">
                      <div className="inner-tbl">
                        <strong className="tit-info">이도현의 반수 카페</strong>
                        <div className="additional-info">
                          <span className="txt-item ">준회원</span>
                          <span className="txt">맴버수</span>
                          <span className="txt">345명</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </li>
            <li className="cafe-list">
              <a href="#" className="cafe-link">
                <div className="thumb-info-type">
                  <div className="wrap-thumb">
                    <img src="" alt="" className="img-thumb" />
                  </div>
                  <div className="wrap-info">
                    <div className="box-tbl">
                      <div className="inner-tbl">
                        <strong className="tit-info">이도현의 반수 카페</strong>
                        <div className="additional-info">
                          <span className="txt-item ">준회원</span>
                          <span className="txt">맴버수</span>
                          <span className="txt">345명</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </li>
            <li className="cafe-list">
              <a href="#" className="cafe-link">
                <div className="thumb-info-type">
                  <div className="wrap-thumb">
                    <img src="" alt="" className="img-thumb" />
                  </div>
                  <div className="wrap-info">
                    <div className="box-tbl">
                      <div className="inner-tbl">
                        <strong className="tit-info">이도현의 반수 카페</strong>
                        <div className="additional-info">
                          <span className="txt-item ">준회원</span>
                          <span className="txt">맴버수</span>
                          <span className="txt">345명</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </li>

            <li className="cafe-list cafe-create">
              <a href="#" className="cafe-link">
                <div className="thumb-info-type">
                  <div className="wrap-thumb">
                    <img src="" alt="" className="img-thumb" />
                  </div>
                  <div className="wrap-info">
                    <div className="box-tbl">
                      <div className="inner-tbl">
                        <strong className="tit-info">카페 만들기</strong>
                        <div className="additional-info">
                          <span className="txt-item ">
                            지금 카페를 만들어 보세요!
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MyCafeList;
