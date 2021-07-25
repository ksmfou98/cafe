import React from 'react';
import { Link } from 'react-router-dom';
import CafeInfo from './CafeInfo';
import './styles.scss';

const CafeInfoBox = () => {
  return (
    <div id="CafeInfoBox">
      <div className="cafe-info-bg">
        <div className="info-tab">
          <CafeInfo />
        </div>

        <div className="cafe-btn">
          <Link to="/cafe/dofe/join" className="cafe-join">
            5초 카페 가입하기
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CafeInfoBox;
