import { SERVER_URL } from 'config';
import useInput from 'hooks/common/useInput';
import { cafeCreateAPI, cafeThumbnailAPI } from 'lib/api/cafe';
import { reduxStateStore } from 'modules';
import React from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './styles.scss';

const CafeCreateForm = () => {
  const [name, onChangeName] = useInput('');
  const [route, onChangeRoute] = useInput('');
  const [imgURL, setImgURL] = useState('');
  const user = useSelector((state: reduxStateStore) => state.user);
  const history = useHistory();

  const imgUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setImgURL(e.target.value);
    //빈파일이 아닌 경우 함수 진행
    if (e.target.files !== null) {
      //FormData 생성
      const fd = new FormData();
      //FormData에 key, value 추가하기
      fd.append('cafe_img', e.target.files[0]);
      // axios 사용해서 백엔드에게 파일 보내기
      try {
        const image = await cafeThumbnailAPI(fd);
        console.log(image);
        setImgURL(image);
        // setMenuImg(image);
        // dispatch(SetImage({ image }));
      } catch (e) {
        alert('이미지 업로드에 실패했습니다.');
      }
    }
  };

  const onCreate = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await cafeCreateAPI(name, route, imgURL, user._id);
      alert('카페생성이 완료되었습니다.');
      history.push('/');
    } catch (e) {
      alert('카페생성에 실패했습니다');
    }
  };

  return (
    <div id="CafeCreateForm">
      <div className="inner-form">
        <div className="form-tit">
          <span className="title">카페 만들기</span>
          <p className="description">
            나와 같은 관심사를 가진 멤버를 모집하고 열심히 운영하여 카페를
            성장시켜보세요.
          </p>
        </div>
        <div className="form">
          <form action="" onSubmit={onCreate}>
            <div className="cafe-name list">
              <label>카페이름</label>
              <div className="inner-input">
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={onChangeName}
                />
              </div>
            </div>

            <div className="cafe-router list">
              <label>카페주소</label>
              <div className="inner-input">
                <span>https://localhost:3000/</span>
                <input
                  type="text"
                  name="route"
                  value={route}
                  onChange={onChangeRoute}
                />
              </div>
            </div>

            <div className="cafe-thumb list">
              <label>카페 썸네일 이미지</label>
              <div className="inner-input">
                <input type="file" onChange={imgUpload} />
                <div className="img-preview">
                  {!imgURL && <img src="" alt="" />}
                  {imgURL && <img src={`${SERVER_URL}/${imgURL}`} alt="" />}
                </div>
              </div>
            </div>

            <div className="create-btn">
              <button type="submit" className="btn-type1">
                카페 생성
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CafeCreateForm;
