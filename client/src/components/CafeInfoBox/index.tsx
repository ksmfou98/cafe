import React from 'react';
import './styles.scss';

const CafeInfoBox = () => {
  return (
    <div id="CafeInfoBox">
      <div className="cafe-info-bg">
        <div className="info-tab">
          <span className="txt-title">카페정보</span>
        </div>

        <div className="cafe-name">Dofe</div>

        <div className="cafe-info">
          <div className="cafe-manager info">
            <span className="info-tit">매니져</span>
            <span className="txt-point">이도현</span>
          </div>
          <div className="cafe-member info">
            <span className="info-tit">맴버수</span>
            <span className="txt-point">900명</span>
          </div>
        </div>

        <div className="cafe-btn">
          <a className="cafe-join">카페 가입하기</a>
        </div>
      </div>
    </div>
  );
};

export default CafeInfoBox;
