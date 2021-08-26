import { readCommentsAPI } from 'lib/api/comment';
import { SetComments } from 'modules/comment';
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
    const getData = async () => {
      const comments = await readCommentsAPI(postId);
      dispatch(SetComments(comments));
    };
    getData();
  }, [postId, dispatch]);
}
