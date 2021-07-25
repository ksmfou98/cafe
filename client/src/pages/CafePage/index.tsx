import Header from 'components/Header';
import React from 'react';
import './styles.scss';
import CafeInfoBox from 'components/CafeInfoBox';
import CafeMenuBox from 'components/CafeMenuBox';
import BoardList from 'components/BoardList';
import Footer from 'components/Footer';
import { Route } from 'react-router-dom';
import CafeJoinForm from 'components/CafeJoinForm';
import PostWriteForm from 'components/PostWriteForm';
import PostDetail from 'components/PostDetail';
import MyAlert from 'components/MyAlert';

const CafePage = () => {
  return (
    <>
      <Header />
      <div id="CafePage" className="page-layout">
        <div className="inner-page">
          <div className="cafe-menu">
            <CafeInfoBox />
            <CafeMenuBox />
          </div>
          <div className="cafe-content">
            <Route path="/:cafe/join" exact component={CafeJoinForm} />
            <Route path="/:cafe/write" exact component={PostWriteForm} />
            <Route path="/:cafe/post/:postid" exact component={PostDetail} />
            <Route path="/:cafe" exact component={BoardList} />
          </div>

          <MyAlert />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CafePage;
