import React from 'react';
import './styles.scss';

const CafeJoinForm = () => {
  return (
    <div id="CafeJoinForm">
      <div className="cont-tit">카페 가입하기</div>
      <div className="cont-join">
        <form action="">
          <div className="wrap-join">
            <div className="join-input">
              <div className="nickname">
                <label htmlFor="">닉네임</label>
                <input
                  type="text"
                  placeholder="사용하실 닉네임을 입력해주세요"
                />
              </div>
              <p>사용 가능한 아이디 입니다.</p>
            </div>
            <div className="join-btn">
              <button className="btn">가입</button>
              <a className="btn cancel" href="">
                취소
              </a>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CafeJoinForm;
