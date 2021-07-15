import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import CafeInfo from './CafeInfo';
import './styles.scss';
import UserActivity from './UserActivity';

const CafeInfoBox = () => {
  const [navState, setNavState] = useState(0);

  const onCafeInfo = () => setNavState(0);
  const onUserActivity = () => setNavState(1);

  return (
    <div id="CafeInfoBox">
      <div className="cafe-info-bg">
        <div className="info-tab">
          <button
            type="button"
            onClick={onCafeInfo}
            className={'txt-title' + (navState === 0 ? ' active' : '')}
          >
            카페정보
          </button>
          <button
            type="button"
            onClick={onUserActivity}
            className={'txt-title' + (navState === 1 ? ' active' : '')}
          >
            나의활동
          </button>
        </div>
        {navState === 0 ? <CafeInfo /> : <UserActivity />}

        <div className="cafe-btn">
          <Link to="/dofe/join" className="cafe-join">
            5초 카페 가입하기
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CafeInfoBox;
