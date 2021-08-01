import client from 'lib/api/client';
import React from 'react';
import './styles.scss';
import { useSelector } from 'react-redux';
import { reduxStateStore } from 'modules';

const CafeJoinForm = () => {
  const cafe = useSelector((state: reduxStateStore) => state.cafe);
  const user = useSelector((state: reduxStateStore) => state.user);

  const onJoin = async () => {
    const body = {
      cafeId: cafe._id,
      userId: user._id,
    };
    try {
      const response = await client.post('/cafe/cafeJoin', body);
      console.log(response);
      window.location.replace(`/cafe/${cafe.route}`);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div id="CafeJoinForm">
      <div className="cont-tit">카페 가입하기</div>
      <div className="cont-join">
        <div className="form">
          <div className="wrap-join">
            <div className="join-input">
              <p>카페에 가입하시겠습니까 ??</p>
            </div>
            <div className="join-btn">
              <button onClick={onJoin} className="btn">
                가입
              </button>
              <a className="btn cancel" href="">
                취소
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CafeJoinForm;
