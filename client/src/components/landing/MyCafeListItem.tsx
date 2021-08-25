import { SERVER_URL } from 'lib/config';
import styled from 'styled-components';

interface MyCafeListItemProps {
  route: string;
  thumbnail: string;
  name: string;
  membersLength: number;
}

const MyCafeListItem = ({
  route,
  thumbnail,
  name,
  membersLength,
}: MyCafeListItemProps) => {
  return (
    <MyCafeListItemBlock>
      <a href={`/cafe/${route}`} className="cafe-link">
        <div className="thumb-info-type">
          <div className="wrap-thumb">
            <img
              src={`${SERVER_URL}/${thumbnail}`}
              alt=""
              className="img-thumb"
            />
          </div>
          <div className="wrap-info">
            <div className="box-tbl">
              <div className="inner-tbl">
                <strong className="tit-info">{name}</strong>
                <div className="additional-info">
                  <span className="txt-item ">준회원</span>
                  <span className="txt">맴버수</span>
                  <span className="txt">{membersLength}명</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </a>
    </MyCafeListItemBlock>
  );
};

export const MyCafeListItemBlock = styled.li`
  position: relative;
  float: left;
  padding: 10px 9px 10px 10px;
  .cafe-link {
    display: block;
    width: 354px;
    height: 112px;
    padding: 15px 24px;
    border: 1px solid #efefef;
    border-radius: 4px;
    background-color: #fff;
    text-decoration: none;
    box-sizing: border-box;
    box-shadow: 0 1px 4px #f0e9e9;
    &:hover {
      background-color: #f7f7f7;
    }
    .thumb-info-type {
      overflow: hidden;
      .wrap-thumb {
        margin: 10px 16px 0 0;
        width: 60px;
        height: 60px;
        float: left;
        position: relative;
        .img-thumb {
          display: inline-block;
          width: 100%;
          height: 100%;
          vertical-align: top;
        }
        .img-thumb::after {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border: 1px solid rgba(0, 0, 0, 0.05);
          box-sizing: border-box;
          content: '';
          border-radius: 50%;
        }
      }
      .wrap-info {
        overflow: hidden;
        .box-tbl {
          display: table;
          width: 100%;
          height: 100%;
          table-layout: fixed;
          .inner-tbl {
            height: 80px;
            display: table-cell;
            vertical-align: middle;
            .tit-info {
              display: -webkit-box;
              overflow: hidden;
              max-height: 43px;
              padding-right: 44px;
              line-height: 21px;
              font-size: 15px;
              font-weight: 700;
              color: #333;
              word-break: break-all;
              -webkit-box-orient: vertical;
              -webkit-line-clamp: 2;
            }
            .additional-info {
              margin-top: 10px;
              font-size: 0;
              .txt-item {
                display: inline-block;
                overflow: hidden;
                position: relative;
                max-width: 120px;
                padding-right: 14px;
                font-size: 14px;
                color: #959595;
                text-overflow: ellipsis;
                white-space: nowrap;
                vertical-align: top;
              }
              .txt {
                font-size: 14px;
                color: #333;
                margin-right: 5px;
              }
            }
          }
        }
      }
    }
  }
`;

export default MyCafeListItem;
