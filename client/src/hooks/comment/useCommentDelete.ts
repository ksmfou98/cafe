import { deleteCommentAPI, deleteReplyCommentAPI } from 'lib/api/comment';

export default function useCommentDelete() {
  const onCommentDelete = async (
    cafeId: string,
    postId: string,
    commentId: string,
  ) => {
    try {
      await deleteCommentAPI(cafeId, postId, commentId);
      window.location.reload();
    } catch (e) {
      alert('댓글 삭제에 실패했습니다.');
    }
  };

  const onReplyCommentDelete = async (
    cafeId: string,
    postId: string,
    commentId: string,
    replyCommentId?: string,
  ) => {
    try {
      await deleteReplyCommentAPI(cafeId, postId, commentId, replyCommentId);
      window.location.reload();
    } catch (e) {
      alert('대댓글 삭제에 실패했습니다.');
    }
  };

  return {
    onCommentDelete,
    onReplyCommentDelete,
  };
}
