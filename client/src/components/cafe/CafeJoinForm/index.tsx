import client from 'lib/api/client';
import { useSelector } from 'react-redux';
import { reduxStateStore } from 'modules';
import styled from 'styled-components';
import Button from 'components/common/Button';
import Image from 'components/common/Image';
import CafeJoin from 'static/CafeJoin.png';

const CafeJoinForm = () => {
  const cafe = useSelector((state: reduxStateStore) => state.cafe);
  const user = useSelector((state: reduxStateStore) => state.user);

  const onJoin = async () => {
    const body = {
      cafeId: cafe._id,
      userId: user._id,
    };
    try {
      await client.post('/cafe/cafeJoin', body);
      window.location.replace(`/cafe/${cafe.route}`);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <CafeJoinFormBlock>
      <div className="cont-tit">카페 가입하기</div>
      <Image img={CafeJoin} text={'카페에 가입하시겠습니까 ?'} />
      <div className="cont-join">
        <div className="wrap-join">
          <div className="join-btn">
            <StyledButton color={'true'} onClick={onJoin}>
              가입
            </StyledButton>
            <StyledButton color={'false'} to={`/cafe/${cafe.route}`}>
              취소
            </StyledButton>
          </div>
        </div>
      </div>
    </CafeJoinFormBlock>
  );
};

const CafeJoinFormBlock = styled.div`
  .cont-join {
    color: #333;
    .wrap-join {
      padding: 0 20px 23px 20px;
      border-bottom: 1px solid #ececec;
      margin-top: 30px;

      .join-btn {
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }
`;

const StyledButton = styled(Button)`
  width: 120px;
  height: 33px;
  margin-right: 10px;
  &:last-child {
    margin-right: 0;
  }
`;

export default CafeJoinForm;
