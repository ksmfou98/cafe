import { SERVER_URL } from 'config';
import { readAllCafeListAPI } from 'lib/api/cafe';
import React, { useState } from 'react';
import { useEffect } from 'react';
import './styles.scss';

const AllCafeList = () => {
  const [cafes, setCafes] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await readAllCafeListAPI();
      setCafes(response);
    };
    getData();
  }, []);
  return (
    <div className="AllCafeList">
      <div className="cafe-body">
        <div className="cafe-list">
          <div className="wrap-tit">
            <div className="tit-item">전체 카페</div>
          </div>

          <ul className="all-cafe-list">
            {cafes.map((cafe: any, index) => (
              <li key={index}>
                <a href={`/cafe/${cafe.route}`} className="link">
                  <div className="thumb-info-type">
                    <div className="wrap-thumb">
                      <img
                        src={`${SERVER_URL}/${cafe.thumbnail}`}
                        alt=""
                        className="img-thumb"
                      />
                    </div>
                    <div className="wrap-info">
                      <p className="desc-info">{cafe.name}</p>
                    </div>
                  </div>
                  <div className="additional-info">
                    <span className="text-item">맴버수</span>
                    <span className="num">{cafe.members.length}</span>
                    <span className="text-item">명</span>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AllCafeList;
