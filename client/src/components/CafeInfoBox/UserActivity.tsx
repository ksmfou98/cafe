import React from 'react';

const UserActivity = () => {
  return (
    <div className="UserActivity">
      <div className="nickname">도구합</div>
      <div className="join-date">2021-07-15</div>
      <div className="write-num">
        내가 쓴 글 보기
        <span>2개</span>
      </div>
      <div className="comment-num">
        내가 쓴 댓글보기
        <span>3개</span>
      </div>
    </div>
  );
};

export default UserActivity;
