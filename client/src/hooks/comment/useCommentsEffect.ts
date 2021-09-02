import { getComments } from 'modules/comment';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

export interface PostParams {
  postId: string;
}

export default function useCommentsEffect() {
  const { postId } = useParams<PostParams>();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getComments(postId));
  }, [postId, dispatch]);
}
