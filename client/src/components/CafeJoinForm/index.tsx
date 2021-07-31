import client from 'lib/api/client';
import React from 'react';
import useInput from 'hooks/common/useInput';
import './styles.scss';
import { useSelector } from 'react-redux';
import { reduxStateStore } from 'modules';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

const CafeJoinForm = () => {
  const [nickname, onChangeNickname] = useInput('');
  const [message, setMessage] = useState('');
  const cafe = useSelector((state: reduxStateStore) => state.cafe);
  const user = useSelector((state: reduxStateStore) => state.user);

  const onNicknameCheck = async () => {
    const body = {
      cafeId: cafe._id,
      nickname,
    };
    try {
      const response = await client.post('/cafe/checkNickname', body);
      console.log(response);
      setMessage('사용 가능한 닉네임 입니다.');
    } catch (e) {
      console.log(e);
      setMessage('이미 사용중인 닉네임 입니다.');
    }
  };

  const onJoin = async () => {
    const body = {
      cafeId: cafe._id,
      nickname,
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
              <div className="nickname">
                <label htmlFor="">닉네임</label>
                <input
                  type="text"
                  value={nickname}
                  onChange={onChangeNickname}
                  placeholder="사용하실 닉네임을 입력해주세요"
                />
                <button
                  type="button"
                  onClick={onNicknameCheck}
                  className="btn-type1"
                >
                  중복확인
                </button>
              </div>
              <p>{message}</p>
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
