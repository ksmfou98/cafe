import styled from 'styled-components';
import PostCommentsWrite from './PostCommentsWrite';
import PostCommentItem from './PostCommentItem';
import { useState } from 'react';

const fakeData = [
  {
    _id: '1',
    writer: 'dohyun',
    content: '첫 댓글 입니다.',
    reply: [
      {
        _id: '5',
        writer: 'seunghyun',
        content: '대댓글 입니다.',
        response: 'dohyun',
      },
      {
        _id: '6',
        writer: 'seunghyun',
        content: '대댓글 입니다.',
        response: 'dohyun',
      },
      {
        _id: '7',
        writer: 'seunghyun',
        content: '대댓글 입니다.',
        response: 'dohyun',
      },
    ],
  },
  {
    _id: '2',
    writer: 'dohyun',
    content: '첫 댓글 입니다.',
    reply: [],
  },
  {
    _id: '3',
    writer: 'dohyun',
    content: '첫 댓글 입니다.',
    reply: [],
  },
  {
    _id: '4',
    writer: 'dohyun',
    content: '첫 댓글 입니다.',
    reply: [],
  },
];

const PostCommentsList = () => {
  const [replyCommentId, setReplyCommentId] = useState('');

  const onActiveReply = (commentId: string) => {
    setReplyCommentId(commentId);
  };

  const onCancelReply = () => {
    setReplyCommentId('');
  };

  return (
    <PostCommentBlock>
      <div className="tit">
        <span>댓글 3개</span>
      </div>

      {fakeData.map((data, index) => (
        <div className="comment-list">
          <PostCommentItem
            key={index}
            writer={data.writer}
            content={data.content}
            commentId={data._id}
            onActiveReply={onActiveReply}
            replyCommentId={replyCommentId}
            onCancelReply={onCancelReply}
          />
          {data.reply.length > 0 &&
            data.reply.map((d, index) => (
              <div className="reply-comment">
                <PostCommentItem
                  key={index}
                  writer={d.writer}
                  response={d.response}
                  content={d.content}
                  commentId={d._id}
                  onActiveReply={onActiveReply}
                  replyCommentId={replyCommentId}
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
