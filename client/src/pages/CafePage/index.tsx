import Header from 'components/Header';
import React from 'react';
import './styles.scss';
import CafeInfoBox from 'components/CafeInfoBox';
import CafeMenuBox from 'components/CafeMenuBox';
import BoardList from 'components/BoardList';
import { Route } from 'react-router-dom';
import CafeJoinForm from 'components/CafeJoinForm';
import PostDetail from 'components/PostDetail';
import MyAlert from 'components/MyAlert';
import PostUpload from 'components/PostUpload';
import PostEdit from 'components/PostEdit';

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
            <Route path="/cafe/:cafe/join" exact component={CafeJoinForm} />
            <Route path="/cafe/:cafe/upload" exact component={PostUpload} />
            <Route path="/cafe/:cafe/edit/:postId" exact component={PostEdit} />
            <Route
              path="/cafe/:cafe/post/:postId"
              exact
              component={PostDetail}
            />
            <Route path="/cafe/:cafe" exact component={BoardList} />
          </div>
          <MyAlert />
        </div>
      </div>
    </>
  );
};

export default CafePage;
