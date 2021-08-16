import { postDislikeAPI, postLikeAPI } from 'lib/api/post';
import { reduxStateStore } from 'modules';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

export default function useHandleLike(
  like_count: number,
  like_users: { user: string; like: string }[],
) {
  const cafe = useSelector((state: reduxStateStore) => state.cafe);
  const user = useSelector((state: reduxStateStore) => state.user);

  const [likeCount, setLikeCount] = useState(0);
  const [likeUsers, setLikeUsers] = useState([
    {
      user: '',
      like: '',
    },
  ]);

  useEffect(() => {
    setLikeCount(like_count);
    setLikeUsers(like_users);
  }, [like_count, like_users]);

  // 좋아요
  const onLike = async (postId: string) => {
    try {
      const post = await postLikeAPI(cafe._id, postId);
      setLikeCount(post.like_count);
      setLikeUsers(post.like_users);
    } catch (e) {
      alert('좋아요에 실패했습니다');
    }
  };

  // 싫어요
  const onDislike = async (postId: string) => {
    try {
      const post = await postDislikeAPI(cafe._id, postId);
      setLikeCount(post.like_count);
      setLikeUsers(post.like_users);
    } catch (e) {
      alert('싫어요에 실패했습니다.');
    }
  };

  // 현재 유저가 좋아요를 눌렀는지 확인
  // like_users 에서 user: 현재유저 && like: "good" 이 있는지 ? 확인
  const isLiked = likeUsers.some(
    (likeUser) =>
      likeUser.user.toString() === user._id && likeUser.like === 'good',
  );

  // 현재 유저가 싫어요를 눌렀는지 확인
  // like_users 에서 user: 현재유저 && like : "bad" 가 있는지? 확인
  const isDisliked = likeUsers.some(
    (likeUser) => likeUser.user === user._id && likeUser.like === 'bad',
  );

  return {
    likeCount,
    onLike,
    onDislike,
    isLiked,
    isDisliked,
  };
}
