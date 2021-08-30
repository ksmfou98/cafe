import styled from 'styled-components';
import PostCommentsWrite from './PostCommentsWrite';
import PostCommentItem from './PostCommentItem';
import useCommentsEffect from 'hooks/comment/useCommentsEffect';
import { useSelector } from 'react-redux';
import { reduxStateStore } from 'modules';
import useHandleComment from 'hooks/comment/useHandleComment';
import { commentState, replyState } from 'modules/comment';
import useCommentLengthEffect from 'hooks/comment/useCommentLengthEffect';

const PostCommentsList = () => {
  useCommentsEffect();
  const {
    replyCommentActiveId,
    onActiveReply,
    onCancelReply,
    updateCommentActiveId,
    onActiveUpdate,
    onCancelUpdate,
    updateContent,
    onChangeUpdateContent,
  } = useHandleComment();
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
            onActiveReply={onActiveReply}
            replyCommentActiveId={replyCommentActiveId}
            onCancelReply={onCancelReply}
            updateCommentActiveId={updateCommentActiveId}
            onActiveUpdate={onActiveUpdate}
            onCancelUpdate={onCancelUpdate}
            updateContent={updateContent}
            onChangeUpdateContent={onChangeUpdateContent}
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
                  onActiveReply={onActiveReply}
                  replyCommentActiveId={replyCommentActiveId}
                  onCancelReply={onCancelReply}
                  updateCommentActiveId={updateCommentActiveId}
                  onActiveUpdate={onActiveUpdate}
                  onCancelUpdate={onCancelUpdate}
                  updateContent={updateContent}
                  onChangeUpdateContent={onChangeUpdateContent}
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
