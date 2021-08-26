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
  commentId: string | undefined,
  content: string,
  responseTo: string | undefined,
) => {
  const body = { commentId, content, responseTo };
  const response = await client.post(
    `/comment/saveReplyComment/${cafeId}`,
    body,
  );
  return response.data.comment;
};
