import { useState } from 'react';
import styled from 'styled-components';

const CafeManageHome = () => {
  const testData = ['알류미늄', '탄소강', '구리', '합금강', '강철'];

  
  const [selectData, setSelectData] = useState<string[]>([]);

  const onClick = (e: React.ChangeEvent<HTMLInputElement>) => {
    const check = selectData.includes(e.target.name);
    if (check) {
      setSelectData(selectData.filter((item) => item !== e.target.name));
    } else {
      setSelectData(selectData.concat(e.target.name));
    }
  };

  const onReset = () => {
    setSelectData([]);
  };

  return (
    <>
      <CafeManageHomeBlock>
        <div className="tit">카페 관리</div>
        {/* 여기서 부터 테스트 */}

        <div>
          <span>재료</span>
          <span>({selectData.length})</span>
        </div>

        {testData.map((item, index) => (
          <div key={index} className="t1">
            <input
              type="checkbox"
              checked={selectData.includes(item)}
              name={item}
              onChange={onClick}
            />
            <span>{item}</span>
          </div>
        ))}

        <button type="button" onClick={onReset}>
          필터링 리셋
        </button>

        {/* 여기까지 */}
      </CafeManageHomeBlock>
    </>
  );
};

const CafeManageHomeBlock = styled.div``;

export default CafeManageHome;
