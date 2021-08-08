import usePostListEffect from 'hooks/post/usePostListEffect';
import { PostStateEmpty } from 'modules/post';
import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { BiLike } from 'react-icons/bi';
import { FaRegComment } from 'react-icons/fa';
import './styles.scss';

const BoardList = () => {
  const { cafe, board, posts } = usePostListEffect();
  const dispatch = useDispatch();

  return (
    <div id="BoardList">
      <div className="list-title">
        <h3 className="title">{board.name}</h3>
        <Link
          to={`/cafe/${cafe.route}/write`}
          onClick={() => dispatch(PostStateEmpty())}
          className="title-btn"
        >
          글쓰기
        </Link>
      </div>
      <div className="list-content">
        <div className="list-box">
          <div className="list-in-box">
            <ul>
              {posts.map((post: any, index) => (
                <li key={index}>
                  <div className="title">
                    <a className="link" href="">
                      {post.title}
                    </a>
                  </div>

                  <div
                    className="content"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                  ></div>

                  <div className="sub">
                    <div className="sub-left">
                      <span>{post.createdAt.slice(0, 10)}</span>
                      <span className="spe">|</span>
                      <span>{post.writer.nickname}</span>
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
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoardList;
