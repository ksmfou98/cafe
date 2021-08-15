import { Link } from 'react-router-dom';
import usePostDetailEffect from 'hooks/post/usePostDetailEffect';
import Button from 'components/common/Button';
import styled from 'styled-components';

const PostDetail = () => {
  const { post, cafe, postId } = usePostDetailEffect();
  return (
    <>
      <PostDetailBlock>
        <div className="post-title">
          <div className="title-left">
            <StyledButton
              to={`/cafe/${cafe.route}/edit/${postId}`}
              color={'false'}
            >
              수정
            </StyledButton>
            <StyledButton color={'false'}>삭제</StyledButton>
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
      </PostDetailBlock>
    </>
  );
};

const PostDetailBlock = styled.div`
  .post-title {
    display: flex;
    justify-content: space-between;
    padding: 0 20px;
    .title-left {
      display: flex;
      a {
        margin-right: 10px;
      }
    }
  }
  .post-body {
    padding: 30px 20px;
    .title {
      font-size: 33px;
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
    }
    .sperator {
      margin-left: 0.5rem;
      margin-right: 0.5rem;
    }

    .post-content {
      margin-top: 20px;
      padding: 20px 0;
      border-bottom: 1px solid #ebecef;
      min-height: 45vh;
    }
  }
`;

const StyledButton = styled(Button)`
  width: 80px;
  height: 30px;
`;

export default PostDetail;
