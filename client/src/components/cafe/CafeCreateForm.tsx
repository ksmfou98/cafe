import Button from 'components/common/Button';
import { SERVER_URL } from 'config';
import useCreateCafe from 'hooks/cafe/useCreateCafe';
import useCheckLoginEffect from 'hooks/user/useCheckLoginEffect';
import { palette } from 'lib/styles/palette';
import { AiOutlineCloudUpload } from 'react-icons/ai';
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
    nameValid,
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
            <div className="create-row">
              <div className="inner-row">
                <label>카페이름</label>
                <div className="inner-input">
                  <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={onChangeName}
                  />
                  <div className="num-character">
                    <span className="num-item">{name.length} </span>/ 30
                  </div>
                </div>
                <StyledCheckButton color={'false'}>중복확인</StyledCheckButton>
              </div>
              <p className="txt-possible">사용 가능한 이름 입니다.</p>
            </div>

            <div className="create-row">
              <div className="inner-row">
                <label>카페주소</label>
                <div className="inner-input">
                  <span>https://localhost:3000/</span>
                  <input
                    type="text"
                    name="route"
                    value={route}
                    onChange={onChangeRoute}
                  />
                  <div className="num-character">
                    <span className="num-item">{route.length} </span>/ 20
                  </div>
                </div>
                <StyledCheckButton color={'false'}>중복확인</StyledCheckButton>
              </div>
              <p className="txt-possible">사용 가능한 주소 입니다.</p>
            </div>

            <div className="create-row">
              <div className="inner-row">
                <label>카페 썸네일 이미지</label>
                <div className="inner-input">
                  <label htmlFor="img-upload">
                    <span>{imgURL}</span>
                    <AiOutlineCloudUpload size="25" />
                  </label>
                  <input
                    type="file"
                    id="img-upload"
                    className="image-upload"
                    onChange={imgUpload}
                  />
                </div>
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
      .create-row {
        margin-bottom: 20px;
        .inner-row {
          display: flex;
          align-items: center;
          label {
            width: 150px;
            display: inline-block;
          }
          .inner-input {
            width: 500px;
            display: flex;
            align-items: center;
            position: relative;
            label {
              color: #afaeae;
              font-family: Arial;
              display: flex;
              border: 1px solid #d5d3d3;
              width: 100%;
              height: 40px;
              padding: 12px;
              border-radius: 5px;
              align-items: center;
              justify-content: space-between;
              cursor: pointer;
              svg {
                float: right;
              }
            }
            .image-upload {
              display: none;
            }
            input[type='text'] {
              flex-grow: 1;
              height: 40px;
              padding: 0 55px 0 10px;
              border: 1px solid #ccc;
              border-radius: 5px;
            }

            .num-character {
              position: absolute;
              top: 12px;
              right: 10px;
              color: #959595;
              font-size: 14px;
              .num-item {
                color: #333;
                font-weight: 500;
              }
            }
          }
          .img-preview {
            margin-left: 10px;
            width: 60px;
            height: 60px;
            img {
              width: 100%;
              height: 100%;
            }
          }
        }
      }
      .txt-possible {
        font-size: 13px;
        color: #666;
        margin-left: 150px;
        margin: 10px 0px 10px 150px;
      }
    }
  }
`;

const StyledButton = styled(Button)`
  margin: 0 auto;
  padding: 10px 20px;
  display: block;
`;

const StyledCheckButton = styled(Button)`
  margin-left: 10px;
  height: 40px;
  display: block;
  width: 85px;
`;

export default CafeCreateForm;
