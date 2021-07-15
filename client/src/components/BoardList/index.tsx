import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

const BoardList = () => {
  return (
    <div id="BoardList">
      <div className="list-title">
        <h3 className="title">전체 게시물</h3>
        <Link to="/dofe/write" className="title-btn">
          글쓰기
        </Link>
      </div>
      <div className="list-content">
        <div className="list-box">
          <table className="list-in-box">
            <tbody>
              <tr>
                <td className="subject">
                  <Link className="link" to="/dofe/post/1">
                    이도현과 노실분 구합니다
                    <span className="comment">[3]</span>
                  </Link>
                </td>
                <td className="sub writer">
                  <a className="link" href="">
                    ksmfou98
                  </a>
                </td>
                <td className="sub">2021.06.16</td>
              </tr>

              <tr>
                <td className="subject">
                  <a className="link" href="">
                    이도현과 노실분 구합니다
                    <span className="comment">[3]</span>
                  </a>
                </td>
                <td className="sub writer">
                  <a className="link" href="">
                    ksmfou98
                  </a>
                </td>
                <td className="sub">2021.06.16</td>
              </tr>

              <tr>
                <td className="subject">
                  <a className="link" href="">
                    이도현과 노실분 구합니다
                    <span className="comment">[3]</span>
                  </a>
                </td>
                <td className="sub writer">
                  <a className="link" href="">
                    ksmfou98
                  </a>
                </td>
                <td className="sub">2021.06.16</td>
              </tr>

              <tr>
                <td className="subject">
                  <a className="link" href="">
                    이도현과 노실분 구합니다
                    <span className="comment">[3]</span>
                  </a>
                </td>
                <td className="sub writer">
                  <a className="link" href="">
                    ksmfou98
                  </a>
                </td>
                <td className="sub">2021.06.16</td>
              </tr>

              <tr>
                <td className="subject">
                  <a className="link" href="">
                    이도현과 노실분 구합니다
                    <span className="comment">[3]</span>
                  </a>
                </td>
                <td className="sub writer">
                  <a className="link" href="">
                    ksmfou98
                  </a>
                </td>
                <td className="sub">2021.06.16</td>
              </tr>

              <tr>
                <td className="subject">
                  <a className="link" href="">
                    이도현과 노실분 구합니다
                    <span className="comment">[3]</span>
                  </a>
                </td>
                <td className="sub writer">
                  <a className="link" href="">
                    ksmfou98
                  </a>
                </td>
                <td className="sub">2021.06.16</td>
              </tr>

              <tr>
                <td className="subject">
                  <a className="link" href="">
                    이도현과 노실분 구합니다
                    <span className="comment">[3]</span>
                  </a>
                </td>
                <td className="sub writer">
                  <a className="link" href="">
                    ksmfou98
                  </a>
                </td>
                <td className="sub">2021.06.16</td>
              </tr>

              <tr>
                <td className="subject">
                  <a className="link" href="">
                    이도현과 노실분 구합니다
                    <span className="comment">[3]</span>
                  </a>
                </td>
                <td className="sub writer">
                  <a className="link" href="">
                    ksmfou98
                  </a>
                </td>
                <td className="sub">2021.06.16</td>
              </tr>

              <tr>
                <td className="subject">
                  <a className="link" href="">
                    이도현과 노실분 구합니다
                    <span className="comment">[3]</span>
                  </a>
                </td>
                <td className="sub writer">
                  <a className="link" href="">
                    ksmfou98
                  </a>
                </td>
                <td className="sub">2021.06.16</td>
              </tr>

              <tr>
                <td className="subject">
                  <a className="link" href="">
                    이도현과 노실분 구합니다
                    <span className="comment">[3]</span>
                  </a>
                </td>
                <td className="sub writer">
                  <a className="link" href="">
                    ksmfou98
                  </a>
                </td>
                <td className="sub">2021.06.16</td>
              </tr>

              <tr>
                <td className="subject">
                  <a className="link" href="">
                    이도현과 노실분 구합니다
                    <span className="comment">[3]</span>
                  </a>
                </td>
                <td className="sub writer">
                  <a className="link" href="">
                    ksmfou98
                  </a>
                </td>
                <td className="sub">2021.06.16</td>
              </tr>

              <tr>
                <td className="subject">
                  <a className="link" href="">
                    이도현과 노실분 구합니다
                    <span className="comment">[3]</span>
                  </a>
                </td>
                <td className="sub writer">
                  <a className="link" href="">
                    ksmfou98
                  </a>
                </td>
                <td className="sub">2021.06.16</td>
              </tr>

              <tr>
                <td className="subject">
                  <a className="link" href="">
                    이도현과 노실분 구합니다
                    <span className="comment">[3]</span>
                  </a>
                </td>
                <td className="sub writer">
                  <a className="link" href="">
                    ksmfou98
                  </a>
                </td>
                <td className="sub">2021.06.16</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default BoardList;
