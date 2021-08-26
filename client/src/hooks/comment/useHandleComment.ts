import useInput from 'hooks/common/useInput';
import { saveCommentAPI, saveReplyCommentAPI } from 'lib/api/comment';
import { reduxStateStore } from 'modules';
import { SaveComment, SaveReplyComment } from 'modules/comment';
import { userState } from 'modules/user';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { PostParams } from './useCommentsEffect';

export default function useHandleComment() {
  const { postId } = useParams<PostParams>();
  const cafe = useSelector((state: reduxStateStore) => state.cafe);
  const [content, onChangeContent, setContent] = useInput('');
  const [replyCommentActiveId, setReplyCommentActiveId] = useState('');
  const dispatch = useDispatch();

  const onSaveComment = async () => {
    try {
      const comment = await saveCommentAPI(cafe._id, postId, content);
      setContent('');
      dispatch(SaveComment(comment));
    } catch (e) {
      alert('댓글 작성에 실패했습니다.');
    }
  };

  const onSaveReplyComment = async (
    commentId: string | undefined,
    writer: userState,
  ) => {
    try {
      const comment = await saveReplyCommentAPI(
        cafe._id,
        commentId,
        content,
        writer?._id,
      );
      setContent('');
      dispatch(SaveReplyComment({ comment, commentId }));
    } catch (e) {
      console.log(e);
      alert('대댓글 작성에 실패했습니다.');
    }
  };

  const onActiveReply = (commentId: string) => {
    setReplyCommentActiveId(commentId);
  };

  const onCancelReply = () => {
    setReplyCommentActiveId('');
  };

  return {
    onSaveComment,
    onSaveReplyComment,
    content,
    onChangeContent,
    replyCommentActiveId,
    onActiveReply,
    onCancelReply,
  };
}
