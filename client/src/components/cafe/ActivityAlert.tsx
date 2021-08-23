import { palette } from 'lib/styles/palette';
import styled from 'styled-components';

const ActivityAlert = () => {
  return (
    <ActivityAlertBlock>
      <div className="alert-tit">알림</div>

      <div className="alert-list">
        <ul>
          <li>
            <a href="">
              <div className="title">[맥쓰사] 맥북 왜 안킬까요 ??</div>
              <div className="reply">
                <span className="ico">└ </span>
                <span className="name">이지호</span>
                이런식으로 해보는거 어떄요 ??
              </div>
              <div className="date">
                <span>2021-07-25</span>
              </div>
            </a>
          </li>

          <li>
            <a href="">
              <div className="title">[수만휘] 이 문제집 어디껀가요 ??</div>
              <div className="reply">
                <span className="ico">└ </span>
                <span className="name">아무무</span>
                해법 수학 입니다
              </div>
              <div className="date">
                <span>2021-07-25</span>
              </div>
            </a>
          </li>

          <li>
            <a href="">
              <div className="title">[수만휘] 이 문제집 어디껀가요 ??</div>
              <div className="reply">
                <span className="ico">└ </span>
                <span className="name">아무무</span>
                해법 수학 입니다
              </div>
              <div className="date">
                <span>2021-07-25</span>
              </div>
            </a>
          </li>

          <li>
            <a href="">
              <div className="title">[수만휘] 이 문제집 어디껀가요 ??</div>
              <div className="reply">
                <span className="ico">└ </span>
                <span className="name">아무무</span>
                해법 수학 입니다
              </div>
              <div className="date">
                <span>2021-07-25</span>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </ActivityAlertBlock>
  );
};

const ActivityAlertBlock = styled.div`
  margin-bottom: 80px;
  .alert-tit {
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 4px;
    color: #505153;
  }

  .alert-list {
    ul {
      li {
        border-bottom: 1px solid ${palette.border};
        padding: 10px 0;
        margin: 8px 0;
        a {
          display: block;
          padding: 5px;
          &:hover {
            background-color: rgb(244, 244, 244);
          }
        }
        .title {
          font-weight: 600;
          font-size: 14px;
          margin-bottom: 8px;
        }
        .reply {
          font-size: 14px;
          margin-bottom: 5px;
          width: 200px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          display: block;
          .ico {
            margin-right: 5px;
          }
          .name {
            font-weight: 600;
            font-size: 13px;
            color: #382f2f;
            margin-right: 5px;
          }
        }
        .date {
          overflow: hidden;
          span {
            float: right;
            font-size: 12px;
            color: gray;
          }
        }
      }
    }
  }
`;

export default ActivityAlert;
