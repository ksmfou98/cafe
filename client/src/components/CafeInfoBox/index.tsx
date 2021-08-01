import useCafeInfoEffect from 'hooks/cafe/useCafeInfoEffect';
import { reduxStateStore } from 'modules';
import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useRouteMatch } from 'react-router-dom';
import './styles.scss';

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
    <div id="CafeInfoBox">
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
    </div>
  );
};

export default CafeInfoBox;
