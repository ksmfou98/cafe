import { palette } from 'lib/styles/palette';
import { BsPeopleCircle } from 'react-icons/bs';
import { RiAddBoxLine } from 'react-icons/ri';
import styled from 'styled-components';
import { css } from 'styled-components';

interface PostCommentItemProps {
  writer: string;
  content: string;
  response?: string;
}

const PostCommentItem = ({
  writer,
  content,
  response,
}: PostCommentItemProps) => {
  return (
    <PostCommentItemBlock response={response}>
      <div className="top-box">
        <div className="left-box">
          <BsPeopleCircle size="40" />
        </div>
        <div className="right-box">
          <div className="writer">{writer}</div>
          <div className="date">2021년 8월 16일</div>
        </div>
      </div>
      <div className="bottom-box">
        <div className="content">
          {response && <span className="response">@{response}</span>}
          {content}
        </div>
        <div className="reply-btn">
          <StyledReplyButton>
            <RiAddBoxLine size="18" />
            <span>답글쓰기</span>
          </StyledReplyButton>
        </div>
      </div>
    </PostCommentItemBlock>
  );
};

const PostCommentItemBlock = styled.div`
  ${(props: any) =>
    !props.response &&
    css`
      padding-top: 1.5rem;
      padding-bottom: 1.5rem;
    `}
  .top-box {
    display: flex;
    align-items: center;
    margin-bottom: 1.5rem;
    .left-box {
      svg {
        color: #c0bdbd;
      }
    }
    .right-box {
      display: flex;
      flex-direction: column;
      margin-left: 1rem;
      .writer {
        font-size: 1rem;
        font-weight: 500;
        color: rgb(52, 58, 64);
      }
      .date {
        margin-top: 0.4rem;
        color: rgb(134, 142, 150);
        font-size: 0.775rem;
      }
    }
  }

  .bottom-box {
    .content {
      margin: 1.5rem 0;
      .response {
        font-weight: 700;
        margin-right: 8px;
      }
    }
    .reply-btn {
      button {
        padding: 0;
      }
    }
  }
`;

const StyledReplyButton = styled.button`
  display: flex;
  align-items: center;
  color: ${palette.mainColor};
  font-weight: 700;
  font-size: 14px;
  svg {
    margin-right: 3px;
  }
`;

export default PostCommentItem;
