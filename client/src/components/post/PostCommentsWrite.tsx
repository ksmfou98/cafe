import Button from 'components/common/Button';
import { palette } from 'lib/styles/palette';
import { BsPeopleCircle } from 'react-icons/bs';
import TextareaAutosize from 'react-textarea-autosize';
import styled from 'styled-components';

const PostCommentsWrite = () => {
  return (
    <PostCommentsWriteBlock>
      <div className="comment-input">
        <BsPeopleCircle size="26" />
        <StyledCommentInput placeholder="댓글 추가 ..." />
      </div>
      <div className="comment-btn">
        <StyledCommentAddButton color="true">등록</StyledCommentAddButton>
        <StyledCommentAddButton color="false">취소</StyledCommentAddButton>
      </div>
    </PostCommentsWriteBlock>
  );
};

const PostCommentsWriteBlock = styled.div`
  .comment-input {
    display: flex;
    padding: 15px 0;
    svg {
      color: #978f8f;
      margin-right: 5px;
    }
  }
  .comment-btn {
    overflow: hidden;
  }
`;

const StyledCommentInput = styled(TextareaAutosize)`
  border: none;
  border-bottom: 1px solid #b6adad;
  width: 100%;
  resize: none;
  outline: none;
  padding: 5px 10px;
  &:focus {
    border-bottom: 1px solid ${palette.mainColor};
  }
`;

const StyledCommentAddButton = styled(Button)`
  width: 60px;
  height: 30px;
  float: right;
  margin-right: 7px;
  &:first-child {
    margin-right: 0;
  }
`;

export default PostCommentsWrite;
