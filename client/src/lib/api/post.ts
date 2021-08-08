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
