import React from 'react';
import './styles.scss';
import { Link } from 'react-router-dom';

const PostDetail = () => {
  return (
    <>
      <div id="PostDetail">
        <div className="list-title">
          <h3 className="title">카페 글 보기</h3>
          <Link to="/cafe/dofe" className="title-btn">
            목록
          </Link>
        </div>

        <div className="post-body">
          <div className="post-title">개발자 되는법</div>
          <span className="post-writer">ksmfou98</span>
          <span className="sperator">·</span>
          <span className="post-date">2021-07-10</span>
          <div className="post-content">내용</div>
        </div>
      </div>
    </>
  );
};

export default PostDetail;
