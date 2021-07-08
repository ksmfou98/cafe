import Header from 'components/Header';
import React from 'react';
import './styles.scss';
import MyCafeList from 'components/MyCafeList';
import AllCafeList from 'components/AllCafeList';
import Footer from 'components/Footer';

const LandingPage = () => {
  return (
    <>
      <Header />
      <div id="LandingPage">
        <MyCafeList />
        <AllCafeList />
      </div>
      <Footer />
    </>
  );
};

export default LandingPage;
