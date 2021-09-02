import { postDetailAPI } from 'lib/api/post';
import { reduxStateStore } from 'modules';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

export interface ParamsProps {
  postId: string;
}

export default function usePostDetailEffect() {
  const { postId } = useParams<ParamsProps>();
  const cafe = useSelector((state: reduxStateStore) => state.cafe);
  const [post, setPost] = useState({
    _id: '',
    title: '',
    content: '',
    writer: {
      _id: '',
      email: '',
      name: '',
      nickname: '',
    },
    createdAt: '',
    board: {
      _id: '',
    },
    comments: [],
  });
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await postDetailAPI(cafe._id, postId);
        console.log(response);
        setPost(response);
      } catch (e) {
        // alert('게시물 상세보기를 불러오는데 실패했습니다.');
      }
    };
    if (cafe._id) getData();
  }, [cafe._id, postId]);

  return {
    post,
    cafe,
    postId,
  };
}
