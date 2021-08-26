import styled from 'styled-components';
import PostCommentsWrite from './PostCommentsWrite';
import PostCommentItem from './PostCommentItem';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { readCommentsAPI } from 'lib/api/comment';

interface ParamsProps {
  postId: string;
}

const PostCommentsList = () => {
  const { postId } = useParams<ParamsProps>();
  const [replyCommentActiveId, setReplyCommentActiveId] = useState('');
  const [comments, setComments] = useState([]);

  const onActiveReply = (commentId: string) => {
    setReplyCommentActiveId(commentId);
  };

  const onCancelReply = () => {
    setReplyCommentActiveId('');
  };

  useEffect(() => {
    const getData = async () => {
      const comments = await readCommentsAPI(postId);
      console.log(comments);
      setComments(comments);
    };
    getData();
  }, [postId]);

  return (
    <PostCommentBlock>
      <div className="tit">
        <span>댓글 {comments.length}개</span>
      </div>

      {comments.map((comment: any, index) => (
        <div className="comment-list" key={index}>
          <PostCommentItem
            writer={comment.writer}
            content={comment.content}
            commentId={comment._id}
            onActiveReply={onActiveReply}
            replyCommentActiveId={replyCommentActiveId}
            onCancelReply={onCancelReply}
          />
          {comment.reply.length > 0 &&
            comment.reply.map((c: any, index: any) => (
              <div className="reply-comment" key={index}>
                <PostCommentItem
                  writer={c.writer}
                  responseTo={c.responseTo}
                  content={c.content}
                  commentId={comment._id}
                  replyCommentId={c._id}
                  onActiveReply={onActiveReply}
                  replyCommentActiveId={replyCommentActiveId}
                  onCancelReply={onCancelReply}
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
    border-bottom: 1px solid rgb(233, 236, 239);
    .reply-comment {
      padding-top: 1rem;
      padding-bottom: 1rem;
      padding-left: 50px;
    }
  }
`;

export default PostCommentsList;
