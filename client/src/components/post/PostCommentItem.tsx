import DeleteModal from 'components/common/DeleteModal';
import useCommentDelete from 'hooks/comment/useCommentDelete';
import useModal from 'hooks/common/useModal';
import { palette } from 'lib/styles/palette';
import { reduxStateStore } from 'modules';
import { userState } from 'modules/user';
import { BsPeopleCircle } from 'react-icons/bs';
import { RiAddBoxLine } from 'react-icons/ri';
import { useSelector } from 'react-redux';
import styled, { css } from 'styled-components';
import PostCommentsWrite from './PostCommentsWrite';

interface PostCommentItemProps {
  writer: userState;
  content: string;
  responseTo?: userState;
  commentId: string;
  deleted?: boolean;
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
  deleted,
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
  const cafe = useSelector((state: reduxStateStore) => state.cafe);

  const { isModal, onToggleModal } = useModal();
  const { onCommentDelete, onReplyCommentDelete } = useCommentDelete();

  const onDeleteSubmit = async () => {
    responseTo
      ? await onReplyCommentDelete(cafe._id, commentId, replyCommentId)
      : await onCommentDelete(cafe._id, commentId);
  };

  return (
    <PostCommentItemBlock responseTo={responseTo}>
      <div className="top-box">
        <div className="left-box">
          <div className="profile-ico">
            <BsPeopleCircle size="34" />
          </div>
          <div className="profile-des">
            <div className="writer">
              {deleted ? '알 수 없음' : writer.nickname}
            </div>
            <div className="date">{createdAt?.slice(0, 10)}</div>
          </div>
        </div>
        {writer._id === user._id && !deleted && (
          <div className="right-box">
            <span onClick={() => onActiveUpdate(commentActiveId, content)}>
              수정
            </span>
            <span onClick={onToggleModal}>삭제</span>
          </div>
        )}
        {isModal && (
          <DeleteModal
            onDelete={onDeleteSubmit}
            onToggleModal={onToggleModal}
            isModal={isModal}
          />
        )}
      </div>
      <div className="bottom-box">
        {updateCommentActiveId === commentActiveId ? (
          <PostCommentsWrite
            update
            updateContent={updateContent}
            onChangeUpdateContent={onChangeUpdateContent}
            onCancelUpdate={onCancelUpdate}
            writer={writer}
            responseTo={responseTo}
            commentId={commentId}
            replyCommentId={replyCommentId}
          />
        ) : (
          <>
            {deleted ? (
              <div className="content">
                <span className="deleted">삭제된 댓글입니다.</span>
              </div>
            ) : (
              <div className="content">
                {responseTo && (
                  <span className="responseTo">@{responseTo.nickname}</span>
                )}
                {content}
              </div>
            )}
            {!deleted && (
              <div className="reply-btn">
                <StyledReplyButton
                  onClick={() => onActiveReply(commentActiveId)}
                >
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
            )}
          </>
        )}
      </div>
    </PostCommentItemBlock>
  );
};

const PostCommentItemBlock = styled.div<{ responseTo?: userState }>`
  border-bottom: 1px solid rgb(233, 236, 239);
  /* ${(props) =>
    !props.responseTo &&
    css`
      padding-top: 1rem;
      padding-bottom: 1rem;
    `} */
  padding-top: 1rem;
  padding-bottom: 1rem;
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
      .deleted {
        color: rgb(134, 142, 150);
        font-style: italic;
      }
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
