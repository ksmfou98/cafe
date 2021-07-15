import React from 'react';

const CafeInfo = () => {
  return (
    <>
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
    </>
  );
};

export default CafeInfo;
