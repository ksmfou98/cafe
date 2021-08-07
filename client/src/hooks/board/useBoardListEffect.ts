import useInput from 'hooks/common/useInput';
import {
  createBoardAPI,
  deleteBoardAPI,
  readBoardListAPI,
  updateBoardAPI,
} from 'lib/api/board';
import { reduxStateStore } from 'modules';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

export default function useBoardListEffect() {
  const cafeId = useSelector((state: reduxStateStore) => state.cafe._id);
  const [boards, setBoards] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const boards = await readBoardListAPI(cafeId);
      setBoards(boards);
    };
    if (cafeId) getData();
  }, [cafeId]);

  // 게시판 생성
  const [createName, onChangeCreateName, setCreateName] = useInput('');
  const onCreate = async () => {
    try {
      const boards = await createBoardAPI(cafeId, createName);
      setBoards(boards);
      setCreateName('');
    } catch (e) {
      alert('게시판 생성에 실패했습니다.');
      console.log(e);
      setCreateName('');
    }
  };

  //게시판 삭제
  const onDelete = async (boardId: string) => {
    try {
      const boards = await deleteBoardAPI(cafeId, boardId);
      setBoards(boards);
    } catch (e) {
      alert('게시판 삭제에 실패했습니다.');
      console.log(e);
    }
  };

  // 게시판 수정
  const [updateBoardId, setUpdateBoardId] = useState('');
  const [updateName, onChangeUpdateName, setUpdateName] = useInput('');

  // 수정 활성화
  const activeUpdateBoard = (boardId: string, name: string) => {
    setUpdateName(name);
    setUpdateBoardId(boardId);
  };

  // 수정 취소
  const updateCancel = () => {
    setUpdateBoardId('');
  };

  const onUpdate = async (boardId: string) => {
    try {
      const boards = await updateBoardAPI(cafeId, updateName, boardId);
      console.log(boards);
      setBoards(boards);
      setUpdateBoardId('');
    } catch (e) {
      alert('게시판 수정에 실패했습니다');
      console.log(e);
    }
  };

  return {
    boards,
    createName,
    onChangeCreateName,
    onCreate,
    onDelete,
    updateBoardId,
    updateName,
    onChangeUpdateName,
    activeUpdateBoard,
    updateCancel,
    onUpdate,
  };
}
