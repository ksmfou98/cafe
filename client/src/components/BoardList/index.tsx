import usePostListEffect from 'hooks/post/usePostListEffect';
import { PostStateEmpty } from 'modules/post';
import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
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
          <table className="list-in-box">
            <tbody>
              {posts.map((post: any, index) => (
                <tr key={index}>
                  <td className="subject">
                    <a className="link" href="">
                      {post.title}
                      <span className="comment">[3]</span>
                    </a>
                  </td>
                  <td className="sub writer">
                    <a className="link" href="">
                      {post.writer.nickname}
                    </a>
                  </td>
                  <td className="sub">{post.createdAt.slice(0, 10)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default BoardList;
