import { palette } from 'lib/styles/palette';
import { reduxStateStore } from 'modules';
import { userState } from 'modules/user';
import { BsPeopleCircle } from 'react-icons/bs';
import { RiAddBoxLine } from 'react-icons/ri';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { css } from 'styled-components';
import PostCommentsWrite from './PostCommentsWrite';

interface PostCommentItemProps {
  writer: userState;
  content: string;
  responseTo?: userState;
  commentId: string;
  onActiveReply: (commentId: string) => void;
  onCancelReply: () => void;
  replyCommentActiveId: string;
  replyCommentId?: any;
  createdAt: string;
  updateCommentActiveId: string;
  onActiveUpdate: (commentId: string, content: string) => void;
  onCancelUpdate: () => void;
  updateContent: string;
  onChangeUpdateContent: (e: any) => void;
}

const PostCommentItem = ({
  writer,
  content,
  responseTo,
  commentId,
  onActiveReply,
  replyCommentActiveId,
  onCancelReply,
  replyCommentId,
  createdAt,
  updateCommentActiveId,
  onActiveUpdate,
  onCancelUpdate,
  updateContent,
  onChangeUpdateContent,
}: PostCommentItemProps) => {
  // 대댓글의 경우 대댓글id를 활성화id에 넣고 , 그냥 댓글일 경우 댓글id를 활성화id에 넣음
  const commentActiveId = responseTo ? replyCommentId : commentId;
  const user = useSelector((state: reduxStateStore) => state.user);

  return (
    <PostCommentItemBlock responseTo={responseTo}>
      <div className="top-box">
        <div className="left-box">
          <div className="profile-ico">
            <BsPeopleCircle size="34" />
          </div>
          <div className="profile-des">
            <div className="writer">{writer.nickname}</div>
            <div className="date">{createdAt?.slice(0, 10)}</div>
          </div>
        </div>
        {writer._id === user._id && (
          <div className="right-box">
            <span onClick={() => onActiveUpdate(commentActiveId, content)}>
              수정
            </span>
            <span>삭제</span>
          </div>
        )}
      </div>
      <div className="bottom-box">
        {updateCommentActiveId === commentActiveId ? (
          <>
            <PostCommentsWrite
              update
              updateContent={updateContent}
              onChangeUpdateContent={onChangeUpdateContent}
              onCancelUpdate={onCancelUpdate}
            />
          </>
        ) : (
          <>
            <div className="content">
              {responseTo && (
                <span className="responseTo">@{responseTo.nickname}</span>
              )}
              {content}
            </div>
            <div className="reply-btn">
              <StyledReplyButton onClick={() => onActiveReply(commentActiveId)}>
                <RiAddBoxLine size="18" />
                <span>답글쓰기</span>
              </StyledReplyButton>
              {replyCommentActiveId === commentActiveId && (
                <div className="reply-form">
                  <PostCommentsWrite
                    writer={writer}
                    onCancelReply={onCancelReply}
                    commentId={commentId}
                  />
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </PostCommentItemBlock>
  );
};

const PostCommentItemBlock = styled.div`
  ${(props: any) =>
    !props.responseTo &&
    css`
      padding-top: 1rem;
      padding-bottom: 1rem;
    `}
  .top-box {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .left-box {
      display: flex;
      align-items: center;
      .profile-ico {
        svg {
          color: #c0bdbd;
        }
      }
      .profile-des {
        display: flex;
        flex-direction: column;
        margin-left: 1rem;
        .writer {
          font-size: 1rem;
          font-weight: 500;
          color: rgb(52, 58, 64);
        }
        .date {
          margin-top: 0.4rem;
          color: rgb(134, 142, 150);
          font-size: 0.775rem;
        }
      }
    }
    .right-box {
      font-size: 0.875rem;
      color: rgb(107 117 126);
      font-weight: 300;
      span {
        margin-right: 9px;
        cursor: pointer;
        &:hover {
          text-decoration: underline;
          color: rgb(180, 182, 184);
        }
      }
    }
  }

  .bottom-box {
    .content {
      margin: 1.5rem 0;
      .responseTo {
        font-weight: 700;
        margin-right: 8px;
      }
    }
    .reply-btn {
      button {
        padding: 0;
      }
      .reply-form {
        padding-left: 20px;
      }
    }
  }
`;

const StyledReplyButton = styled.button`
  display: flex;
  align-items: center;
  color: ${palette.mainColor};
  font-weight: 700;
  font-size: 14px;
  svg {
    margin-right: 3px;
  }
`;

export default PostCommentItem;
