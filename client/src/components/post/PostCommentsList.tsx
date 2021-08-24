import styled from 'styled-components';
import PostCommentsWrite from './PostCommentsWrite';
import PostCommentItem from './PostCommentItem';

const fakeData = [
  {
    writer: 'dohyun',
    content: '첫 댓글 입니다.',
    reply: [
      {
        writer: 'seunghyun',
        content: '대댓글 입니다.',
        response: 'dohyun',
      },
      {
        writer: 'seunghyun',
        content: '대댓글 입니다.',
        response: 'dohyun',
      },
      {
        writer: 'seunghyun',
        content: '대댓글 입니다.',
        response: 'dohyun',
      },
    ],
  },
  {
    writer: 'dohyun',
    content: '첫 댓글 입니다.',
    reply: [],
  },
  {
    writer: 'dohyun',
    content: '첫 댓글 입니다.',
    reply: [],
  },
  {
    writer: 'dohyun',
    content: '첫 댓글 입니다.',
    reply: [],
  },
];

const PostCommentsList = () => {
  return (
    <PostCommentBlock>
      <div className="tit">
        <span>댓글 3개</span>
      </div>

      <PostCommentsWrite />

      {fakeData.map((data, index) => (
        <div className="comment-list">
          <PostCommentItem writer={data.writer} content={data.content} />
          {data.reply.length > 0 &&
            data.reply.map((d, index) => (
              <div className="reply-comment">
                <PostCommentItem
                  writer={d.writer}
                  response={d.response}
                  content={d.content}
                />
              </div>
            ))}
        </div>
      ))}
    </PostCommentBlock>
  );
};

const PostCommentBlock = styled.div`
  padding: 0 20px 60px 20px;
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
