import CafeBanner from 'components/CafeBanner';
import CafeInfoBox from 'components/CafeInfoBox';
import CafeJoinForm from 'components/CafeJoinForm';
import Footer from 'components/Footer';
import Header from 'components/Header';
import CafeMenuBox from 'components/CafeMenuBox';
import React from 'react';
import './styles.scss';

const CafeJoinPage = () => {
  console.log('cafejoinPage');
  return (
    <div id="CafeJoin">
      <Header />
      <div className="cafe-body">
        <CafeBanner />
        <div className="container">
          <div className="cafe-menu">
            <CafeInfoBox />
            <CafeMenuBox />
          </div>
          <div className="cafe-content">
            <CafeJoinForm />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CafeJoinPage;
