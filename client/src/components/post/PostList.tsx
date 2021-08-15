import usePostListEffect from 'hooks/post/usePostListEffect';
import { PostStateEmpty } from 'modules/post';
import { useDispatch } from 'react-redux';
import Image from 'components/common/Image';
import NoPost from 'static/NoPost.png';
import Button from 'components/common/Button';
import styled from 'styled-components';
import PostListItem from './PostListItem';

const PostList = () => {
  const { cafe, board, posts } = usePostListEffect();
  const dispatch = useDispatch();

  return (
    <PostListBlock>
      <div className="list-title">
        <h3 className="title">{board.name}</h3>
      </div>
      <div className="list-content">
        <div className="list-box">
          <div className="list-in-box">
            <ul>
              {posts.length === 0 && (
                <div className="no-post">
                  <Image text={'게시물이 존재하지 않습니다'} img={NoPost} />
                </div>
              )}
              {posts.map((post: any, index) => (
                <PostListItem
                  key={index}
                  route={cafe.route}
                  postId={post._id}
                  title={post.title}
                  content={post.content}
                  createdAt={post.createdAt}
                  nickname={post.writer.nickname}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="write-btn">
        <StyledButton
          to={`/cafe/${cafe.route}/upload`}
          onClick={() => dispatch(PostStateEmpty())}
          color={'true'}
        >
          글쓰기
        </StyledButton>
      </div>
    </PostListBlock>
  );
};

const PostListBlock = styled.div`
  height: 100%;
  .list-content {
    overflow: hidden;
    height: 100%;
    .list-box {
      padding: 5px;
      height: 100%;
      .list-in-box {
        clear: both;
        width: 100%;
        height: 100%;
        line-height: 1.5;
        ul {
          height: 100%;
          .no-post {
            margin-top: 80px;
          }
        }
      }
    }
  }
  .write-btn {
    position: fixed;
    bottom: 50px;
    left: 50%;
    margin-left: -50px;
  }
`;

const StyledButton = styled(Button)`
  width: 100px;
  height: 50px;
  border-radius: 20px;
`;

export default PostList;
