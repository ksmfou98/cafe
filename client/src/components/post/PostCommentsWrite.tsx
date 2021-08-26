import Button from 'components/common/Button';
import useHandleComment from 'hooks/comment/useHandleComment';
import { BsPeopleCircle } from 'react-icons/bs';
import TextareaAutosize from 'react-textarea-autosize';
import styled from 'styled-components';

interface PostCommentsWriteProps {
  onCancelReply?: () => void;
  writer?: {
    _id: string;
    email: string;
    name: string;
    nickname: string;
  };
  commentId?: string;
}

const PostCommentsWrite = ({
  onCancelReply,
  writer,
  commentId,
}: PostCommentsWriteProps) => {
  const { onSaveComment, onSaveReplyComment, onChangeContent, content } =
    useHandleComment();

  const onSubmit = () => {
    writer ? onSaveReplyComment(commentId, writer) : onSaveComment();
  };

  return (
    <PostCommentsWriteBlock>
      <div className="comment-input">
        <BsPeopleCircle size="26" />
        <StyledCommentInput
          value={content}
          onChange={onChangeContent}
          placeholder={
            writer
              ? `${writer.nickname}님께 댓글쓰기 ...`
              : '댓글을 작성해주세요 ...'
          }
        />
      </div>
      <div className="comment-btn">
        <StyledCommentAddButton color="true" onClick={onSubmit}>
          등록
        </StyledCommentAddButton>
        {onCancelReply && (
          <StyledCommentAddButton color="false" onClick={onCancelReply}>
            취소
          </StyledCommentAddButton>
        )}
      </div>
    </PostCommentsWriteBlock>
  );
};

const PostCommentsWriteBlock = styled.div`
  margin-top: 10px;
  .comment-input {
    display: flex;
    padding: 15px 0;
    svg {
      color: #978f8f;
      margin-right: 10px;
    }
  }
  .comment-btn {
    overflow: hidden;
  }
`;

const StyledCommentInput = styled(TextareaAutosize)`
  resize: none;
  padding: 10px 10px 20px 10px;
  outline: none;
  border: 1px solid rgb(233, 236, 239);
  width: 100%;
  border-radius: 4px;
  min-height: 6.125rem;
  font-size: 1rem;
  color: rgb(33, 37, 41);
  line-height: 1.75;
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
