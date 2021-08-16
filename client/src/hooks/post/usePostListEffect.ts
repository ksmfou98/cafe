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
      const posts = await readPostListAPI(cafe._id, board._id);
      console.log(posts);
      setPosts(posts);
    };
    if (cafe._id) getData();
  }, [board._id, cafe._id]);

  return {
    cafe,
    board,
    posts,
  };
}
