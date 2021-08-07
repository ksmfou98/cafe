import client from './client';

// 게시판 목록 조회
export const readBoardListAPI = async (cafeId: string) => {
  const response = await client.get(`/board/readBoardList/${cafeId}`);
  return response.data.boards;
};

// 게시판 추가
export const createBoardAPI = async (cafeId: string, name: string) => {
  const response = await client.post(`/board/create/${cafeId}`, { name });
  return response.data.boards;
};

// 게시판 삭제
export const deleteBoardAPI = async (cafeId: string, boardId: string) => {
  const response = await client.delete(`/board/delete/${cafeId}/${boardId}`);
  return response.data.boards;
};

// 게시판 수정
export const updateBoardAPI = async (
  cafeId: string,
  name: string,
  boardId: string,
) => {
  const body = {
    name,
    boardId,
  };
  const response = await client.patch(`/board/update/${cafeId}`, body);
  return response.data.boards;
};
