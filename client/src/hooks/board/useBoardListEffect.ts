import { readBoardListAPI } from 'lib/api/board';
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

  return {
    boards,
  };
}
