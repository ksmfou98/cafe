import Button from 'components/common/Button';
import { palette } from 'lib/styles/palette';
import { BsPeopleCircle } from 'react-icons/bs';
import TextareaAutosize from 'react-textarea-autosize';
import styled from 'styled-components';

const PostComment = () => {
  return (
    <PostCommentBlock>
      <div className="tit">
        <span>댓글 3개</span>
      </div>

      <div className="comment-input">
        <BsPeopleCircle size="20" />
        <StyledCommentInput placeholder="댓글 추가 ..." />
      </div>
      <div className="comment-add-btn">
        <StyledCommentAddButton color="true">등록</StyledCommentAddButton>
        <StyledCommentAddButton color="false">취소</StyledCommentAddButton>
      </div>
      
      
    </PostCommentBlock>
  );
};

const PostCommentBlock = styled.div`
  padding: 0 20px;
  .tit {
    margin-bottom: 10px;
  }
  .comment-input {
    display: flex;
    padding: 15px 0;
    svg {
      color: #978f8f;
    }
  }
  .comment-add-btn {
    overflow: hidden;
    margin-bottom: 15px;
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

export default PostComment;
