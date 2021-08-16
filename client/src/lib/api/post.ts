import client from './client';

export const readPostListAPI = async (cafeId: string, boardId: string) => {
  const response = await client.get(`/post/readPostList/${cafeId}/${boardId}`);
  return response.data.posts;
};

export const postCreateAPI = async (
  cafeId: string,
  title: string,
  content: string,
  boardId: string,
) => {
  const body = {
    title,
    content,
    boardId,
  };
  const response = await client.post(`/post/create/${cafeId}`, body);
  return response;
};

export const postDetailAPI = async (cafeId: string, postId: string) => {
  const response = await client.get(`/post/readPostDetail/${cafeId}/${postId}`);
  return response.data.post;
};

export const postUpdateAPI = async (
  cafeId: string,
  postId: string,
  title: string,
  content: string,
  boardId: string,
) => {
  const body = {
    postId,
    title,
    content,
    boardId,
  };

  const response = await client.patch(`/post/update/${cafeId}`, body);
  return response.data;
};

// 좋아요
export const postLikeAPI = async (cafeId: string, postId: string) => {
  const response = await client.post(`/post/like/${cafeId}`, { postId });
  console.log(response);
  return response.data.post;
};

// 싫어요
export const postDislikeAPI = async (cafeId: string, postId: string) => {
  const response = await client.post(`/post/dislike/${cafeId}`, { postId });
  return response.data.post;
};
