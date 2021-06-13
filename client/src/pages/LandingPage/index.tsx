import Header from 'components/common/Header';
import React from 'react';
import './styles.scss';
import MyCafeList from '../../components/MyCafeList/index';
import AllCafeList from '../../components/AllCafeList/index';

const LandingPage = () => {
  return (
    <>
      <Header />
      <div id="LandingPage" className="page-layout">
        <MyCafeList />
        <AllCafeList />
      </div>
    </>
  );
};

export default LandingPage;
