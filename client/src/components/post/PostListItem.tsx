import { palette } from 'lib/styles/palette';
import { BiLike } from 'react-icons/bi';
import { FaRegComment } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface PostListItemProps {
  route: string;
  postId: string;
  title: string;
  content: string;
  createdAt: string;
  nickname: string;
}

const PostListItem = ({
  route,
  postId,
  title,
  content,
  createdAt,
  nickname,
}: PostListItemProps) => {
  return (
    <PostListItemBlock>
      <div></div>
      <div>
        <div className="title">
          <Link to={`/cafe/${route}/post/${postId}`} className="link">
            {title}
          </Link>
        </div>
        <div
          className="content"
          dangerouslySetInnerHTML={{ __html: content }}
        ></div>
        <div className="sub">
          <div className="sub-left">
            <span>{createdAt.slice(0, 10)}</span>
            <span className="spe">|</span>
            <span>{nickname}</span>
          </div>
          <div className="sub-right">
            <div className="item like">
              <BiLike size="16" />
              <span>[0]</span>
            </div>
            <div className="item comment">
              <FaRegComment size="15" />
              <span>[4]</span>
            </div>
          </div>
        </div>
      </div>
    </PostListItemBlock>
  );
};

const PostListItemBlock = styled.li`
  padding: 25px;
  display: block;
  box-shadow: 0px 7px 6px rgba(0, 0, 0, 0.08);
  border-radius: 7px;
  .link:hover {
    text-decoration: underline;
  }
  .title {
    font-size: 16.5px;
    width: 100%;
    font-weight: 500;
  }
  .content {
    font-size: 14px;
    padding: 10px 0 7px;
    max-height: 100px;
    overflow: hidden;
  }

  .sub {
    white-space: nowrap;
    font-size: 12px;
    display: flex;
    justify-content: space-between;
    .sub-left {
      color: #6f6f6f;
      .spe {
        margin: 0 5px;
      }
    }
    .sub-right {
      display: flex;
      .item {
        display: flex;
        align-items: center;
        margin-right: 9px;
        svg {
          margin-right: 3px;
        }
      }
      .like {
        color: ${palette.mainColor};
      }
      .comment {
        color: #4a4848;
      }
    }
  }
`;

export default PostListItem;
