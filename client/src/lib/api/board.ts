import client from './client';

// 게시판 목록 조회
export const readBoardListAPI = async (cafeId: string) => {
  const response = await client.get(`/board/readBoardList/${cafeId}`);
  return response.data.boards;
};
