import { reduxStateStore } from 'modules';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import CafeMemberBoxItem from './CafeMemberBoxItem';

const CafeMemberBoxList = () => {
  const members = useSelector((state: reduxStateStore) => state.cafe.members);

  return (
    <CafeMemberBoxListBlock>
      <div className="tit">
        <span>Members &nbsp; ({members.length})</span>
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
    overflow-y: scroll;
    height: 140px;
  }
`;

export default CafeMemberBoxList;
