import { EditPost } from 'modules/post';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import usePostDetailEffect from './usePostDetailEffect';

export default function usePostEditEffect() {
  const { post } = usePostDetailEffect();
  const dispatch = useDispatch();
  useEffect(() => {
    const body = {
      _id: post._id,
      title: post.title,
      content: post.content,
      boardId: post.board._id,
    };
    console.log(body);
    dispatch(EditPost(body));
  }, [dispatch, post]);
}
