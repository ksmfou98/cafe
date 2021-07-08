import Header from 'components/Header';
import React from 'react';
import './styles.scss';
import CafeInfoBox from 'components/CafeInfoBox';
import CafeMenuBox from 'components/CafeMenuBox';
import CafeMainBoard from 'components/CafeMainBoard';
import Footer from 'components/Footer';
import CafeBanner from 'components/CafeBanner';
import { Route } from 'react-router-dom';
import CafeJoinForm from 'components/CafeJoinForm';

const CafePage = () => {
  console.log('dd');
  return (
    <>
      <Header />
      <div id="CafePage" className="page-layout">
        <CafeBanner />
        <div className="cafe-menu">
          <CafeInfoBox />
          <CafeMenuBox />
        </div>
        <div className="cafe-content">
          <Route path="/:cafe" exact component={CafeMainBoard} />
          <Route path="/:cafe/join" component={CafeJoinForm} />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CafePage;
