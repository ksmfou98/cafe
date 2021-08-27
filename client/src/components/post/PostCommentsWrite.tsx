import Button from 'components/common/Button';
import useHandleComment from 'hooks/comment/useHandleComment';
import { userState } from 'modules/user';
import TextareaAutosize from 'react-textarea-autosize';
import styled from 'styled-components';

interface PostCommentsWriteProps {
  onCancelReply?: () => void;
  onCancelUpdate?: () => void;
  writer?: userState;
  commentId?: string;
  update?: boolean;
  updateContent?: string;
  onChangeUpdateContent?: (e: any) => void;
  responseTo?: userState;
  replyCommentId?: string;
}

const PostCommentsWrite = ({
  onCancelReply,
  writer,
  commentId,
  update,
  updateContent,
  onChangeUpdateContent,
  onCancelUpdate,
  responseTo,
  replyCommentId,
}: PostCommentsWriteProps) => {
  const {
    onSaveComment,
    onSaveReplyComment,
    onChangeContent,
    content,
    onUpdateComment,
    onUpdateReplyComment,
  } = useHandleComment();

  const onWriteSubmit = async () => {
    writer // writer가 있으면 대댓글임
      ? await onSaveReplyComment(commentId, writer)
      : await onSaveComment();
    onCancelReply && onCancelReply();
  };

  const onUpdateSubmit = async () => {
    responseTo // responseTo가 있으면 대댓글임
      ? await onUpdateReplyComment(commentId, replyCommentId, updateContent)
      : await onUpdateComment(commentId, updateContent);
    onCancelUpdate && onCancelUpdate();
  };

  return (
    <PostCommentsWriteBlock>
      <div className="comment-input">
        <StyledCommentInput
          value={update ? updateContent : content}
          onChange={update ? onChangeUpdateContent : onChangeContent}
          placeholder={
            writer
              ? `${writer.nickname}님께 댓글쓰기 ...`
              : '댓글을 작성해주세요 ...'
          }
        />
      </div>
      <div className="comment-btn">
        {update ? (
          <>
            <StyledCommentAddButton color="true" onClick={onUpdateSubmit}>
              수정
            </StyledCommentAddButton>
            <StyledCommentAddButton color="false" onClick={onCancelUpdate}>
              취소
            </StyledCommentAddButton>
          </>
        ) : (
          <>
            <StyledCommentAddButton color="true" onClick={onWriteSubmit}>
              등록
            </StyledCommentAddButton>
            {onCancelReply && (
              <StyledCommentAddButton color="false" onClick={onCancelReply}>
                취소
              </StyledCommentAddButton>
            )}
          </>
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
