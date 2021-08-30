import { palette } from 'lib/styles/palette';
import { FaRegComment } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FiArrowUp, FiArrowDown } from 'react-icons/fi';
import { BsPeopleCircle } from 'react-icons/bs';
import useHandleLike from 'hooks/post/useHandleLike';
import { css } from 'styled-components';
import useCommentLengthEffect from 'hooks/comment/useCommentLengthEffect';

interface PostListItemProps {
  route: string;
  postId: string;
  title: string;
  content: string;
  createdAt: string;
  nickname: string;
  like_count: number;
  like_users: { user: string; like: string }[];
}

const PostListItem = ({
  route,
  postId,
  title,
  content,
  createdAt,
  nickname,
  like_count,
  like_users,
}: PostListItemProps) => {
  const { likeCount, onLike, onDislike, isLiked, isDisliked } = useHandleLike(
    like_count,
    like_users,
  );

  return (
    <PostListItemBlock>
      <StyledLikeBlock isLiked={isLiked} isDisliked={isDisliked}>
        <button
          disabled={isDisliked ? true : false}
          className="fst-btn"
          onClick={() => onLike(postId)}
        >
          <FiArrowUp size="22" />
        </button>
        <span className="count">{likeCount}</span>
        <button
          disabled={isLiked ? true : false}
          className="lst-btn"
          onClick={() => onDislike(postId)}
        >
          <FiArrowDown size="22" />
        </button>
      </StyledLikeBlock>
      <div className="right-box">
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
            <span className="sub-inner">
              <BsPeopleCircle size="20" />
              Posted by &nbsp;
              <span className="nickname"> {nickname}</span>
            </span>
            <span className="spe">|</span>
            <span>{createdAt.slice(0, 10)}</span>
          </div>
          <div className="sub-right">
            <div className="item comment">
              <FaRegComment size="15" />
              <span>[]</span>
            </div>
          </div>
        </div>
      </div>
    </PostListItemBlock>
  );
};

const PostListItemBlock = styled.li`
  padding: 25px;
  display: flex;
  box-shadow: 0px 7px 6px rgba(0, 0, 0, 0.08);
  border-radius: 7px;
  margin: 15px 0;
  background: #fff;
  .right-box {
    width: 100%;
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
      padding: 10px 0 15px;
      border-bottom: 1px solid #e6e6e6;
      margin-bottom: 15px;
    }
    .sub {
      white-space: nowrap;
      font-size: 12px;
      display: flex;
      justify-content: space-between;
      .sub-left {
        color: #9b9a9a;
        display: flex;
        align-items: center;
        font-weight: 600;
        .sub-inner {
          display: flex;
          align-items: center;
          .nickname {
            color: #555;
            font-weight: 700;
          }
          svg {
            margin-right: 8px;
          }
        }
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
        .comment {
          color: #4a4848;
        }
      }
    }
  }
`;

const StyledLikeBlock = styled.div<{ isLiked: boolean; isDisliked: boolean }>`
  padding-right: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 75px;
  color: #999;
  .count {
    line-height: 23px;
    padding-bottom: 3px;
    color: #999;
    font-weight: 700;
  }
  button {
    padding: 0;
    color: #999;
  }
  .fst-btn {
    color: #999;
  }
  .lst-btn {
    flex-grow: 1;
    color: #999;
  }

  ${(props) =>
    props.isLiked &&
    css`
      .fst-btn {
        color: ${palette.mainColor};
      }
      .count {
        color: ${palette.mainColor};
      }
    `}

  ${(props) =>
    props.isDisliked &&
    css`
      .lst-btn {
        color: #df190f;
      }
      .count {
        color: #df190f;
      }
    `}
`;

export default PostListItem;
