import React from 'react';
import './styles.scss';

const AllCafeList = () => {
  return (
    <div className="AllCafeList">
      <div className="cafe-body">
        <div className="cafe-list">
          <div className="wrap-tit">
            <div className="tit-item">전체 카페</div>
          </div>

          <ul className="all-cafe-list">
            <li>
              <a href="/cafe/dofe" className="link">
                <div className="thumb-info-type">
                  <div className="wrap-thumb">
                    <img src="" alt="" className="img-thumb" />
                  </div>
                  <div className="wrap-info">
                    <p className="desc-info">이지호 사생활 카페</p>
                  </div>
                </div>
                <div className="additional-info">
                  <span className="text-item">맴버수</span>
                  <span className="num">2456</span>
                  <span className="text-item">명</span>
                </div>
              </a>
            </li>
            <li>
              <a href="" className="link">
                <div className="thumb-info-type">
                  <div className="wrap-thumb">
                    <img src="" alt="" className="img-thumb" />
                  </div>
                  <div className="wrap-info">
                    <p className="desc-info">추종현 공익 생활 카페</p>
                  </div>
                </div>
                <div className="additional-info">
                  <span className="text-item">맴버수</span>
                  <span className="num">2456</span>
                  <span className="text-item">명</span>
                </div>
              </a>
            </li>
            <li>
              <a href="" className="link">
                <div className="thumb-info-type">
                  <div className="wrap-thumb">
                    <img src="" alt="" className="img-thumb" />
                  </div>
                  <div className="wrap-info">
                    <p className="desc-info">추종현 공익 생활 카페</p>
                  </div>
                </div>
                <div className="additional-info">
                  <span className="text-item">맴버수</span>
                  <span className="num">2456</span>
                  <span className="text-item">명</span>
                </div>
              </a>
            </li>
            <li>
              <a href="" className="link">
                <div className="thumb-info-type">
                  <div className="wrap-thumb">
                    <img src="" alt="" className="img-thumb" />
                  </div>
                  <div className="wrap-info">
                    <p className="desc-info">추종현 공익 생활 카페</p>
                  </div>
                </div>
                <div className="additional-info">
                  <span className="text-item">맴버수</span>
                  <span className="num">2456</span>
                  <span className="text-item">명</span>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AllCafeList;
