import styled from 'styled-components';
import PostCommentsWrite from './PostCommentsWrite';
import PostCommentItem from './PostCommentItem';
import useCommentsEffect from 'hooks/comment/useCommentsEffect';
import { useSelector } from 'react-redux';
import { reduxStateStore } from 'modules';
import { commentState, replyState } from 'modules/comment';
import useCommentLengthEffect from 'hooks/comment/useCommentLengthEffect';

const PostCommentsList = () => {
  useCommentsEffect();
  const comments = useSelector((state: reduxStateStore) => state.comment);
  const { commentLength } = useCommentLengthEffect();

  return (
    <PostCommentBlock>
      <div className="tit">
        <span>댓글 {commentLength}개</span>
      </div>

      {comments.map((comment: commentState, index: number) => (
        <div className="comment-list" key={index}>
          <PostCommentItem
            writer={comment.writer}
            content={comment.content}
            commentId={comment._id}
            createdAt={comment.createdAt}
            deleted={comment.deleted}
          />
          {comment.reply.length > 0 &&
            comment.reply.map((c: replyState, index: number) => (
              <div className="reply-comment" key={index}>
                <PostCommentItem
                  writer={c.writer}
                  responseTo={c.responseTo}
                  content={c.content}
                  replyCommentId={c._id}
                  createdAt={c.createdAt}
                  commentId={comment._id}
                />
              </div>
            ))}
        </div>
      ))}

      <PostCommentsWrite />
    </PostCommentBlock>
  );
};

const PostCommentBlock = styled.div`
  padding: 0 20px 60px 20px;
  margin-bottom: 100px;
  .tit {
    margin-bottom: 10px;
  }
  .comment-list {
    .reply-comment {
      padding-left: 60px;
    }
  }
`;

export default PostCommentsList;
