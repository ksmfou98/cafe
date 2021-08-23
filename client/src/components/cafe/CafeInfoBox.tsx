import useCafeInfoEffect from 'hooks/cafe/useCafeInfoEffect';
import { reduxStateStore } from 'modules';
import { useSelector } from 'react-redux';
import { Link, useRouteMatch } from 'react-router-dom';
import { IoMdSettings } from 'react-icons/io';
import styled from 'styled-components';

interface matchProps {
  cafe: string;
}

const CafeInfoBox = () => {
  const match = useRouteMatch<matchProps>();
  const route = match.params.cafe;
  const user = useSelector((state: reduxStateStore) => state.user);

  const openChatPopup = () => {
    const popupX = window.screen.width / 2 - 800 / 2; // 팝업창을 가운데 띄우기 위한거
    const popupY = window.screen.height / 2 - 630 / 2;
    window.open(
      `/channels/${route}`,
      'Data',
      `height=630,width=800, top = ${popupY}, left =  ${popupX}`,
    );
  };

  const { cafeInfo, isMember } = useCafeInfoEffect(route, user._id);
  return (
    <CafeInfoBoxBlock>
      <div className="cafe-info-bg">
        <div className="info-tab">
          <div className="cafe-name">{cafeInfo.name}</div>
          <div className="cafe-info">
            <div className="cafe-manager info">
              <span className="info-tit">매니져</span>
              <span className="txt-point">{cafeInfo.manager.nickname}</span>
            </div>
            <div className="cafe-member info">
              <span className="info-tit">맴버수</span>
              <span className="txt-point">{cafeInfo.members?.length}명</span>
            </div>
            {cafeInfo.manager._id === user._id && (
              <div className="cafe-manage">
                <IoMdSettings />
                <Link to={`/manage/${route}`}>카페관리</Link>
              </div>
            )}
          </div>
        </div>

        <div className="cafe-btn">
          {isMember === true ? (
            <>
              <a href="" className="btn-type1 spacing">
                카페 글쓰기
              </a>
              <button onClick={openChatPopup} className="btn-type2">
                카페 채팅
              </button>
            </>
          ) : (
            <Link to={`/cafe/${route}/join`} className="btn-type1">
              5초 카페 가입하기
            </Link>
          )}
        </div>
      </div>
    </CafeInfoBoxBlock>
  );
};

const CafeInfoBoxBlock = styled.div`
  overflow: hidden;
  padding-top: 50px;
  margin-bottom: 30px;
  .cafe-info-bg {
    width: 100%;
    .info-tab {
      padding: 10px 15px;
      font-weight: bold;
      letter-spacing: -1px;
      .active {
        color: black;
        font-weight: 700;
      }
    }
    /* Cafe Info */
    .cafe-name {
      font-size: 17px;
      line-height: 22px;
      padding: 0 15px 5px;
      margin-bottom: 15px;
      font-weight: bold;
      letter-spacing: -1px;
      word-break: break-all;
    }
    .cafe-info {
      padding: 0 15px 4px 15px;
      width: 100%;
      text-align: left;
      .info {
        margin-bottom: 6px;
        .info-tit {
          width: 50px;
          display: block;
          float: left;
          font-size: 15px;
        }
        .txt-point {
          color: #333;
          font-size: 16px;
          font-weight: 500;
        }
      }

      .cafe-manage {
        padding-top: 8px;
        font-weight: 400;
        color: #666;
        display: flex;
        align-items: center;
        svg {
          color: rgb(180, 178, 178);
        }
      }
    }

    .cafe-btn {
      padding: 5px 20px;
      button {
        width: 100%;
      }
      .btn-type1,
      .btn-type2 {
        padding: 9px 0 10px;
        font-size: 14px;
        line-height: 16px;
        text-align: center;
        cursor: pointer;
        font-weight: bold;
      }
      .spacing {
        margin-bottom: 5px;
      }
    }
  }
`;

export default CafeInfoBox;
