import Button from 'components/common/Button';
import useInput from 'hooks/common/useInput';
import { saveCommentAPI, saveReplyCommentAPI } from 'lib/api/comment';
import { reduxStateStore } from 'modules';
import { BsPeopleCircle } from 'react-icons/bs';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
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

interface ParamsProps {
  postId: string;
}

const PostCommentsWrite = ({
  onCancelReply,
  writer,
  commentId,
}: PostCommentsWriteProps) => {
  const [content, onChangeContent, setContent] = useInput('');
  const cafe = useSelector((state: reduxStateStore) => state.cafe);
  const { postId } = useParams<ParamsProps>();

  const onSaveComment = async () => {
    try {
      const comment = await saveCommentAPI(cafe._id, postId, content);
      setContent('');
    } catch (e) {
      alert('댓글 작성에 실패했습니다.');
    }
  };

  const onSaveReplyComment = async () => {
    console.log(cafe._id, commentId, content, writer?._id);
    try {
      const comment = await saveReplyCommentAPI(
        cafe._id,
        commentId,
        content,
        writer?._id,
      );
      setContent('');
    } catch (e) {
      console.log(e);
      alert('대댓글 작성에 실패했습니다.');
    }
  };

  const onSubmit = () => {
    if (writer) {
      onSaveReplyComment();
    } else {
      onSaveComment();
    }
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
