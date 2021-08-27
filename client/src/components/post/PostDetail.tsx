import usePostDetailEffect from 'hooks/post/usePostDetailEffect';
import Button from 'components/common/Button';
import styled from 'styled-components';
import PostCommentsList from './PostCommentsList';
import useHandlePost from 'hooks/post/useHandlePost';
import { useSelector } from 'react-redux';
import { reduxStateStore } from 'modules';

const PostDetail = () => {
  const { post, cafe, postId } = usePostDetailEffect();
  const { onDelete } = useHandlePost();
  const user = useSelector((state: reduxStateStore) => state.user);
  return (
    <>
      <PostDetailBlock>
        <div className="post-title">
          <div className="title-left">
            {post.writer._id === user._id && (
              <>
                <StyledButton
                  to={`/cafe/${cafe.route}/edit/${postId}`}
                  color={'false'}
                >
                  수정
                </StyledButton>
                <StyledButton color={'false'} onClick={() => onDelete(postId)}>
                  삭제
                </StyledButton>
              </>
            )}
          </div>
          <div className="title-right">
            <StyledButton to={`/cafe/${cafe.route}`} color={'true'}>
              목록
            </StyledButton>
          </div>
        </div>
        <div className="post-body">
          <div className="title">{post.title}</div>
          <span className="writer">{post.writer.nickname}</span>
          <span className="sperator">·</span>
          <span className="date">{post.createdAt.slice(0, 10)}</span>
          <div
            className="post-content"
            dangerouslySetInnerHTML={{ __html: post.content }}
          ></div>
        </div>

        <PostCommentsList />
      </PostDetailBlock>
    </>
  );
};

const PostDetailBlock = styled.div`
  background: #fff;
  padding: 15px;
  border-radius: 10px;
  .post-title {
    display: flex;
    justify-content: space-between;
    padding: 0 20px 14px 20px;
    .title-left {
      display: flex;
      a {
        margin-right: 10px;
      }
    }
  }
  .post-body {
    padding: 5px 20px 20px 20px;
    .title {
      font-size: 2.5rem;
      line-height: 1.5;
      letter-spacing: -0.004em;
      margin-top: 0px;
      font-weight: 800;
      color: rgb(52, 58, 64);
      margin-bottom: 1rem;
      word-break: keep-all;
    }
    .writer {
      color: rgb(52, 58, 64);
      font-weight: bold;
      font-size: 14px;
    }
    .sperator {
      margin-left: 0.5rem;
      margin-right: 0.5rem;
    }
    .date {
      font-size: 14px;
    }

    .post-content {
      border-top: 1px solid #ebecef;
      margin-top: 20px;
      padding: 35px 0;
      min-height: 250px;
      border-bottom: 1px solid #ebecef;
    }
  }
`;

const StyledButton = styled(Button)`
  width: 80px;
  height: 30px;
`;

export default PostDetail;
