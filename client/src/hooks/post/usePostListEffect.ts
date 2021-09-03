import { readPostListAPI } from 'lib/api/post';
import { reduxStateStore } from 'modules';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

export default function usePostListEffect() {
  const cafe = useSelector((state: reduxStateStore) => state.cafe);
  const board = useSelector((state: reduxStateStore) => state.board);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const posts = await readPostListAPI(cafe._id, board._id);
        setPosts(posts);
      } catch (e) {
        alert('게시물 목록을 불러오는데 실패했습니다. 다시 접속해주세요');
      }
    };
    if (cafe._id) getData();
  }, [board._id, cafe._id]);

  return {
    cafe,
    board,
    posts,
  };
}
