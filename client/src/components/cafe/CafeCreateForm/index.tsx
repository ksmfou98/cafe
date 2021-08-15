import { SERVER_URL } from 'config';
import useCreateCafe from 'hooks/cafe/useCreateCafe';
import React from 'react';
import './styles.scss';

const CafeCreateForm = () => {
  const {
    onCreate,
    imgUpload,
    name,
    onChangeName,
    route,
    onChangeRoute,
    imgURL,
  } = useCreateCafe();

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
