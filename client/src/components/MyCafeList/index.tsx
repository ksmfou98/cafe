import { SERVER_URL } from 'config';
import { readMyCafeListAPI } from 'lib/api/cafe';
import { reduxStateStore } from 'modules';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './styles.scss';

const MyCafeList = () => {
  const user = useSelector((state: reduxStateStore) => state.user);
  const [cafes, setCafes] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await readMyCafeListAPI(user._id);
      console.log(response);
      setCafes(response);
    };
    getData();
  }, [user._id]);
  return (
    <div className="MyCafeList">
      <div className="cafe-list">
        <div className="inner-mycafe">
          <div className="cafe-util">
            <div className="mycafe-menu">
              <ul className="list-menu">
                <li className="list">
                  <a href="#" className="list-item">
                    내 카페
                    <span className="num-item">1</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="cafe-card">
            <ul className="list-cafe">
              {cafes.map((cafe: any, index) => (
                <li key={index} className="cafe-list">
                  <a href="#" className="cafe-link">
                    <div className="thumb-info-type">
                      <div className="wrap-thumb">
                        <img
                          src={`${SERVER_URL}/${cafe.thumbnail}`}
                          alt=""
                          className="img-thumb"
                        />
                      </div>
                      <div className="wrap-info">
                        <div className="box-tbl">
                          <div className="inner-tbl">
                            <strong className="tit-info">{cafe.name}</strong>
                            <div className="additional-info">
                              <span className="txt-item ">준회원</span>
                              <span className="txt">맴버수</span>
                              <span className="txt">
                                {cafe.members.length}명
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </li>
              ))}

              <li className="cafe-list cafe-create">
                <Link to="/create" className="cafe-link">
                  <div className="thumb-info-type">
                    <div className="wrap-thumb">
                      <img src="" alt="" className="img-thumb" />
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
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyCafeList;
