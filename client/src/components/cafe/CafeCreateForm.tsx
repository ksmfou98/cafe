import Button from 'components/common/Button';
import { SERVER_URL } from 'config';
import useCreateCafe from 'hooks/cafe/useCreateCafe';
import useCheckLoginEffect from 'hooks/user/useCheckLoginEffect';
import styled from 'styled-components';

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

  useCheckLoginEffect();

  return (
    <CafeCreateFormBlock>
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
              <StyledButton type="submit" color={'true'}>
                카페생성
              </StyledButton>
            </div>
          </form>
        </div>
      </div>
    </CafeCreateFormBlock>
  );
};

const CafeCreateFormBlock = styled.div`
  .inner-form {
    overflow: hidden;
    width: 800px;
    margin: 50px auto 0;
    .form-tit {
      margin-bottom: 40px;
      .title {
        font-size: 20px;
        color: #000;
      }
      .description {
        padding-top: 10px;
        font-size: 13px;
        color: #666;
      }
    }
    .form {
      label {
        width: 150px;
        display: inline-block;
      }
      .list {
        margin-bottom: 15px;
        display: flex;
        align-items: center;
        .inner-input {
          width: 500px;
          display: flex;
          align-items: center;
          input[type='text'] {
            flex-grow: 1;
            height: 40px;
            padding: 14px;
            border: 1px solid #ccc;
            border-radius: 5px;
          }
          .img-preview {
            width: 60px;
            height: 60px;
            img {
              width: 100%;
              height: 100%;
            }
          }
        }
      }
    }
  }
`;

const StyledButton = styled(Button)`
  margin: 0 auto;
  padding: 10px 20px;
  display: block;
`;

export default CafeCreateForm;
