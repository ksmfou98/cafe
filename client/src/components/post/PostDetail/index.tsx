import './styles.scss';
import { Link } from 'react-router-dom';
import usePostDetailEffect from 'hooks/post/usePostDetailEffect';
import Button from 'components/common/Button';

const PostDetail = () => {
  const { post, cafe, postId } = usePostDetailEffect();
  return (
    <>
      <div id="PostDetail">
        <div className="list-title">
          <Button to={`/cafe/${cafe.route}/edit/${postId}`} color={'false'}>
            수정
          </Button>
          <Button color={'false'}>삭제</Button>
          <Link to="/cafe/dofe" className="title-btn">
            목록
          </Link>
        </div>
        <div className="post-body">
          <div className="post-title">{post.title}</div>
          <span className="post-writer">{post.writer.nickname}</span>
          <span className="sperator">·</span>
          <span className="post-date">{post.createdAt.slice(0, 10)}</span>
          <div
            className="post-content"
            dangerouslySetInnerHTML={{ __html: post.content }}
          ></div>
        </div>
      </div>
    </>
  );
};

export default PostDetail;
