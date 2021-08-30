import useInput from 'hooks/common/useInput';
import {
  saveCommentAPI,
  saveReplyCommentAPI,
  updateCommentAPI,
  updateReplyCommentAPI,
} from 'lib/api/comment';
import { reduxStateStore } from 'modules';
import {
  SaveComment,
  SaveReplyComment,
  UpdateComment,
  UpdateReplyComment,
} from 'modules/comment';
import { userState } from 'modules/user';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { PostParams } from './useCommentsEffect';

export default function useHandleComment() {
  const { postId } = useParams<PostParams>();
  const cafe = useSelector((state: reduxStateStore) => state.cafe);
  const [content, onChangeContent, setContent] = useInput('');
  const [updateContent, onChangeUpdateContent, setUpdateContent] = useInput('');
  const [replyCommentActiveId, setReplyCommentActiveId] = useState('');
  const [updateCommentActiveId, setUpdateCommentActiveId] = useState('');

  const dispatch = useDispatch();

  // 댓글 작성
  const onSaveComment = async () => {
    try {
      const comment = await saveCommentAPI(cafe._id, postId, content);
      setContent('');
      dispatch(SaveComment(comment));
    } catch (e) {
      alert('댓글 작성에 실패했습니다.');
    }
  };

  // 대댓글 작성
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

  // 대댓글 확성화
  const onActiveReply = (commentId: string) => {
    setReplyCommentActiveId(commentId);
  };

  // 대댓글 활성화 취소
  const onCancelReply = () => {
    setReplyCommentActiveId('');
  };

  // 댓글 수정 활성화
  const onActiveUpdate = (commentId: string, content: string) => {
    setUpdateContent(content);
    setUpdateCommentActiveId(commentId);
  };

  // 댓글 수정 활성화 취소
  const onCancelUpdate = () => {
    setUpdateCommentActiveId('');
  };

  // 댓글 수정
  const onUpdateComment = async (commentId?: string, content?: string) => {
    try {
      await updateCommentAPI(cafe._id, commentId, content);
      dispatch(UpdateComment({ commentId, content }));
    } catch (e) {
      alert('댓글 수정에 실패했습니다.');
    }
  };

  // 대댓글 수정
  const onUpdateReplyComment = async (
    commentId?: string,
    replyCommentId?: string,
    content?: string,
  ) => {
    try {
      await updateReplyCommentAPI(cafe._id, commentId, replyCommentId, content);
      dispatch(UpdateReplyComment({ commentId, replyCommentId, content }));
    } catch (e) {
      alert('대댓글 수정에 실패했습니다.');
    }
  };

  

  return {
    onSaveComment,
    onSaveReplyComment,
    content,
    onChangeContent,
    replyCommentActiveId,
    onActiveReply,
    onCancelReply,
    updateCommentActiveId,
    onActiveUpdate,
    onCancelUpdate,
    updateContent,
    onChangeUpdateContent,
    onUpdateComment,
    onUpdateReplyComment,
  };
}
