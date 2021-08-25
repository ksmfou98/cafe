import CafeManageBoard from 'components/manage/CafeManageBoard';
import CafeManageHome from 'components/manage/CafeManageHome';
import CafeManageNav from 'components/manage/CafeManageNav';
import Header from 'components/base/Header';
import { Route } from 'react-router-dom';
import styled from 'styled-components';

const CafeManagePage = () => {
  return (
    <>
      <Header />
      <CafeManagePageBlock className="page-layout">
        <div className="manage-nav">
          <CafeManageNav />
        </div>
        <div className="manage-cont">
          <Route path="/manage/:cafe" exact component={CafeManageHome} />
          <Route path="/manage/:cafe/board" exact component={CafeManageBoard} />
        </div>
      </CafeManagePageBlock>
    </>
  );
};

const CafeManagePageBlock = styled.div`
  display: flex;
  flex: 1 1 auto;
  .manage-nav {
    flex: 0 1 250px;
    padding: 30px 0;
  }
  .manage-cont {
    flex: 1 1;
    padding: 30px 0;
    .tit {
      font-size: 18px;
      font-weight: 600;
      padding-bottom: 30px;
    }
  }
`;

export default CafeManagePage;
