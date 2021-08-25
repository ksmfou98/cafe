import { palette } from 'lib/styles/palette';
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
  padding: 10px 20px 20px 20px;
  border-bottom: 1px solid #cecece;
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
    &::-webkit-scrollbar {
      width: 5px;
    }
    &::-webkit-scrollbar-thumb {
      background-color: #2f3542;
      border-radius: 10px;
      background-clip: padding-box;
      border: 2px solid transparent;
    }
    &::-webkit-scrollbar-track {
      background-color: #b6b5b5;
      border-radius: 10px;
      box-shadow: inset 0px 0px 5px white;
    }
  }
`;

export default CafeMemberBoxList;
