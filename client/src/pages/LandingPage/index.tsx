import Header from 'components/Header';
import React from 'react';
import './styles.scss';
import MyCafeList from 'components/MyCafeList';
import AllCafeList from 'components/AllCafeList';

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
