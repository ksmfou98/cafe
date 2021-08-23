import { postCreateAPI, postDeleteAPI, postUpdateAPI } from 'lib/api/post';
import { reduxStateStore } from 'modules';
import { SetPost } from 'modules/post';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

export default function useHandlePost() {
  const history = useHistory();
  const dispatch = useDispatch();
  const post = useSelector((state: reduxStateStore) => state.post);
  const cafe = useSelector((state: reduxStateStore) => state.cafe);
  const { boardId, title, content } = post;

  // 글 생성
  const onCreate = async () => {
    try {
      await postCreateAPI(cafe._id, title, content, boardId);
      history.push(`/cafe/${cafe.route}`);
    } catch (e) {
      alert('게시물 작성에 실패했습니다');
      console.log(e);
    }
  };

  // 글 수정
  const onUpdate = async () => {
    try {
      await postUpdateAPI(cafe._id, post._id, title, content, boardId);
      history.push(`/cafe/${cafe.route}/post/${post._id}`);
    } catch (e) {
      alert('게시물 수정에 실패했습니다');
      console.log(e);
    }
  };

  // 글 삭제
  const onDelete = async (postId: string) => {
    try {
      await postDeleteAPI(cafe._id, postId);
      history.push(`/cafe/${cafe.route}`);
    } catch (e) {
      alert('게시물 삭제에 실패했습니다');
      console.log(e);
    }
  };

  // 게시물 (등록,수정)Form Input 관리
  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { value, name } = e.target;
    let body = {
      key: name,
      value,
    };
    dispatch(SetPost(body));
  };

  return {
    onCreate,
    onUpdate,
    onDelete,
    onChange,
    title,
    content,
    boardId,
  };
}
