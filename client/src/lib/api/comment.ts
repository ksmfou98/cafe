import client from './client';

// 댓글 불러오기
export const readCommentsAPI = async (postId: string) => {
  const response = await client.get(`/comment/readComments/${postId}`);
  return response.data.comments;
};

// 댓글 작성
export const saveCommentAPI = async (
  cafeId: string,
  postId: string,
  content: string,
) => {
  const body = { postId, content };
  const response = await client.post(`/comment/saveComment/${cafeId}`, body);
  return response.data.comment;
};

// 대댓글 작성
export const saveReplyCommentAPI = async (
  cafeId: string,
  postId: string,
  commentId: string | undefined,
  content: string,
  responseTo: string | undefined,
) => {
  const body = { commentId, content, responseTo, postId };
  const response = await client.post(
    `/comment/saveReplyComment/${cafeId}`,
    body,
  );
  return response.data.comment;
};

// 댓글 수정
export const updateCommentAPI = async (
  cafeId: string,
  commentId?: string,
  content?: string,
) => {
  const body = { commentId, content };
  const response = await client.patch(`/comment/updateComment/${cafeId}`, body);
  return response.data.comment;
};

// 대댓글 수정
export const updateReplyCommentAPI = async (
  cafeId: string,
  commentId?: string,
  replyCommentId?: string,
  content?: string,
) => {
  const body = { commentId, replyCommentId, content };
  const response = await client.patch(
    `/comment/updateReplyComment/${cafeId}`,
    body,
  );
  return response.data.comment;
};

// 댓글 삭제
export const deleteCommentAPI = async (
  cafeId: string,
  postId: string,
  commentId: string,
) => {
  const response = await client.delete(
    `/comment/deleteComment/${cafeId}/${postId}/${commentId}`,
  );
  return response.data;
};

// 대댓글 삭제
export const deleteReplyCommentAPI = async (
  cafeId: string,
  postId: string,
  commentId: string,
  replyCommentId?: string,
) => {
  const response = await client.delete(
    `/comment/deleteReplyComment/${cafeId}/${postId}/${commentId}/${replyCommentId}`,
  );

  return response.data;
};
