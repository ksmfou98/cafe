import { reduxStateStore } from 'modules';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import CafeMemberBoxItem from './CafeMemberBoxItem';

const CafeMemberBoxList = () => {
  const members = useSelector((state: reduxStateStore) => state.cafe.members);

  return (
    <CafeMemberBoxListBlock>
      <div className="tit">
        <span>Members &nbsp; ({members.length})</span>
        <StyledButton to={''} className="">
          전체보기
        </StyledButton>
      </div>

      <ul>
        {members.map((member, index) => (
          <CafeMemberBoxItem key={index} nickname={member.nickname} />
        ))}
      </ul>
    </CafeMemberBoxListBlock>
  );
};

const CafeMemberBoxListBlock = styled.div`
  padding: 10px 15px;
  .tit {
    color: #505153;
    font-weight: 500;
    font-size: 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;
  }
  ul {
    max-height: 140px;
    overflow: scroll;
  }
`;

const StyledButton = styled(Link)`
  font-size: 13px;
  color: #999;
  &:hover {
    color: #000;
  }
`;

export default CafeMemberBoxList;
