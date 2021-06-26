import Header from 'components/Header';
import React from 'react';
import './styles.scss';
import CafeInfoBox from 'components/CafeInfoBox';
import CafeMenuBox from 'components/CafeMenuBox';
import CafeMainBoard from 'components/CafeMainBoard';
import Footer from 'components/Footer';
import CafeBanner from 'components/CafeBanner';

const CafePage = () => {
  return (
    <div id="CafePage">
      <Header />
      <div className="cafe-body">
        <CafeBanner />
        <div className="container">
          <div className="cafe-menu">
            <CafeInfoBox />
            <CafeMenuBox />
          </div>
          <div className="cafe-content">
            <CafeMainBoard />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CafePage;
