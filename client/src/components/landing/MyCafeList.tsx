import { readMyCafeListAPI } from 'lib/api/cafe';
import { reduxStateStore } from 'modules';
import { useEffect } from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import CreateCafeIMG from 'static/CreateCafe.png';
import MyCafeListItem, { MyCafeListItemBlock } from './MyCafeListItem';

const MyCafeList = () => {
  const user = useSelector((state: reduxStateStore) => state.user);
  const [cafes, setCafes] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await readMyCafeListAPI(user._id);
      setCafes(response);
    };
    if (user._id) getData();
  }, [user._id]);

  return (
    <MyCafeListBlock>
      <div className="cafe-list">
        <div className="inner-mycafe">
          <div className="cafe-util">
            <div className="mycafe-menu">
              <ul className="list-menu">
                <li className="list">
                  <a href="#" className="list-item">
                    내 카페
                    <span className="num-item">{cafes.length}</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="cafe-card">
            <ul className="list-cafe">
              {cafes.map((cafe: any, index) => (
                <MyCafeListItem
                  key={index}
                  route={cafe.route}
                  thumbnail={cafe.thumbnail}
                  name={cafe.name}
                  membersLength={cafe.members.length}
                />
              ))}

              <MyCafeListItemBlock className="cafe-create">
                <Link to="/create" className="cafe-link">
                  <div className="thumb-info-type">
                    <div className="wrap-thumb">
                      <img
                        src={CreateCafeIMG}
                        alt="CreateCafeIMG"
                        className="img-thumb"
                      />
                    </div>
                    <div className="wrap-info">
                      <div className="box-tbl">
                        <div className="inner-tbl">
                          <strong className="tit-info">카페 만들기</strong>
                          <div className="additional-info">
                            <span className="txt-item ">
                              지금 카페를 만들어 보세요!
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </MyCafeListItemBlock>
            </ul>
          </div>
        </div>
      </div>
    </MyCafeListBlock>
  );
};

const MyCafeListBlock = styled.div`
  .cafe-list {
    padding: 50px 0 40px;
    overflow: hidden;
    .inner-mycafe {
      position: relative;
      width: 1100px;
      margin: 0 auto;
      .cafe-util {
        overflow: hidden;
        .list-menu {
          float: left;
          .list:first-child {
            margin-left: 0;
          }
          .list {
            position: relative;
            float: left;
            margin-left: 20px;
            .list-item {
              font-size: 20px;
              color: #000;
              text-decoration: none;
              cursor: pointer;
              .num-item {
                margin-left: 6px;
                font-weight: 700;
              }
            }
          }
        }
      }

      .cafe-card {
        margin-top: 8px;
        .list-cafe {
          position: relative;
          margin: 0 -9px 0 -10px;

          .cafe-create {
            .cafe-link {
              border-style: dashed;
              border-color: #e2e2e2;
              background-color: rgba(0, 0, 0, 0);
              &:hover {
                background-color: #f7f7f7;
              }
            }
            .txt-item {
              max-width: 100% !important;
            }
          }
        }
      }
    }
  }
`;

export default MyCafeList;
