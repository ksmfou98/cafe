import { SERVER_URL } from 'config';
import styled from 'styled-components';

interface AllCafeListItemProps {
  route: string;
  thumbnail: string;
  name: string;
  membersLength: number;
}

const AllCafeListItem = ({
  route,
  thumbnail,
  name,
  membersLength,
}: AllCafeListItemProps) => {
  return (
    <AllCafeListItemBlock>
      <a href={`/cafe/${route}`} className="link">
        <div className="thumb-info-type">
          <div className="wrap-thumb">
            <img
              src={`${SERVER_URL}/${thumbnail}`}
              alt=""
              className="img-thumb"
            />
          </div>
          <div className="wrap-info">
            <p className="desc-info">{name}</p>
          </div>
        </div>
        <div className="additional-info">
          <span className="text-item">맴버수</span>
          <span className="num">{membersLength}</span>
          <span className="text-item">명</span>
        </div>
      </a>
    </AllCafeListItemBlock>
  );
};

const AllCafeListItemBlock = styled.li`
  border-bottom: 1px solid #ececec;
  .link {
    display: block;
    overflow: hidden;
    padding: 10px 20px;
    border-radius: 8px;
    .thumb-info-type {
      float: left;
      width: 556px;
      overflow: hidden;
      .wrap-thumb {
        width: 60px;
        margin-right: 8px;
        float: left;
        .img-thumb {
          display: inline-block;
          width: 100%;
          height: 100%;
          vertical-align: top;
        }
        .img-thumb::after {
          border-radius: 2px;
        }
      }
      .wrap-info {
        position: relative;
        padding-left: 48px;
        height: 65px;
        box-sizing: border-box;
        color: #333;
        line-height: 31px;
        overflow: hidden;
        .desc-info {
          overflow: hidden;
          padding-top: 16px;
          font-size: 18px;
          font-weight: 500;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      }
    }

    .additional-info {
      overflow: hidden;
      padding: 23px 20px 0 0;
      text-align: right;
      font-size: 0;
      .text-item {
        display: inline-block;
        overflow: hidden;
        position: relative;
        max-width: 80px;
        padding-right: 14px;
        font-size: 20px;
        color: #333;
        text-overflow: ellipsis;
        white-space: nowrap;
        vertical-align: top;
      }
      .num {
        font-weight: 700;
        color: #ff5656;
        font-size: 18px;
        margin-right: 5px;
        line-height: 20px;
      }
    }
  }
  .link:hover {
    background-color: #efefef;
  }
`;

export default AllCafeListItem;
