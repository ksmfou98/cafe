import Header from 'components/Header';
import React from 'react';
import './styles.scss';
import CafeInfoBox from 'components/CafeInfoBox';
import CafeMenuBox from 'components/CafeMenuBox';
import BoardList from 'components/BoardList';
import Footer from 'components/Footer';
import CafeBanner from 'components/CafeBanner';
import { Route } from 'react-router-dom';
import CafeJoinForm from 'components/CafeJoinForm';
import PostWriteForm from 'components/PostWriteForm';
import PostDetail from 'components/PostDetail';

const CafePage = () => {
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
          <Route path="/:cafe/join" exact component={CafeJoinForm} />
          <Route path="/:cafe/write" exact component={PostWriteForm} />
          <Route path="/:cafe/post/:postid" exact component={PostDetail} />
          <Route path="/:cafe" component={BoardList} />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CafePage;
