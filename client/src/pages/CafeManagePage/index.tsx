import CafeManageBoard from 'components/manage/CafeManageBoard';
import CafeManageHome from 'components/manage/CafeManageHome';
import CafeManageNav from 'components/manage/CafeManageNav';
import Header from 'components/base/Header';
import React from 'react';
import { Route } from 'react-router-dom';
import './styles.scss';

const CafeManagePage = () => {
  return (
    <>
      <Header />
      <div id="CafeManagePage" className="page-layout">
        <div className="manage-nav">
          <CafeManageNav />
        </div>
        <div className="manage-cont">
          <Route path="/manage/:cafe" exact component={CafeManageHome} />
          <Route path="/manage/:cafe/board" exact component={CafeManageBoard} />
        </div>
      </div>
    </>
  );
};

export default CafeManagePage;
