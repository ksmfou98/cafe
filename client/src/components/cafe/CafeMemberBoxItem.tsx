import { BsPeopleCircle } from 'react-icons/bs';
import styled from 'styled-components';

interface CafeMemberBoxItemProps {
  nickname: string;
}

const CafeMemberBoxItem = ({ nickname }: CafeMemberBoxItemProps) => {
  return (
    <CafeMemberBoxItemBlock>
      <div className="profile-ico">
        <BsPeopleCircle size="28" />
      </div>
      <span className="nickname">{nickname}</span>
    </CafeMemberBoxItemBlock>
  );
};

const CafeMemberBoxItemBlock = styled.li`
  display: flex;
  align-items: center;
  height: 35px;
  .profile-ico {
    color: #c2c2c2;
    margin-right: 10px;
  }
  .nickname {
    font-size: 14px;
    line-height: 15px;
  }
`;

export default CafeMemberBoxItem;
