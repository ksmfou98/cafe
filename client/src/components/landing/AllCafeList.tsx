import { readAllCafeListAPI } from 'lib/api/cafe';
import { useState } from 'react';
import { useEffect } from 'react';
import styled from 'styled-components';
import AllCafeListItem from './AllCafeListItem';

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
    <AllCafeListBlock>
      <div className="cafe-body">
        <div className="cafe-list">
          <div className="wrap-tit">
            <div className="tit-item">전체 카페</div>
          </div>

          <ul className="all-cafe-list">
            {cafes.map((cafe: any, index) => (
              <AllCafeListItem
                key={index}
                route={cafe.route}
                thumbnail={cafe.thumbnail}
                name={cafe.name}
                membersLength={cafe.members.length}
              />
            ))}
          </ul>
        </div>
      </div>
    </AllCafeListBlock>
  );
};

const AllCafeListBlock = styled.div`
  overflow: hidden;
  width: 100%;
  margin-top: 15px;
  padding-bottom: 140px;
  .cafe-body {
    overflow: hidden;
    width: 1100px;
    margin: 36px auto 0;
    .cafe-list {
      position: relative;
      width: 100%;
      margin: 0 auto;
      .wrap-tit {
        margin-bottom: 13px;
        position: relative;
        .tit-item {
          float: left;
          font-size: 20px;
          font-weight: 700;
          color: #333;
        }
      }
      .wrap-tit::after {
        display: block;
        width: 0;
        height: 0;
        clear: both;
        content: '';
      }
    }
  }
`;

export default AllCafeList;
