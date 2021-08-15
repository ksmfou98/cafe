import Header from 'components/base/Header';
import React from 'react';
import './styles.scss';
import CafeInfoBox from 'components/cafe/CafeInfoBox';
import CafeMenuBox from 'components/cafe/CafeMenuBox';
import BoardList from 'components/cafe/BoardList';
import { Route } from 'react-router-dom';
import CafeJoinForm from 'components/cafe/CafeJoinForm';
import PostDetail from 'components/post/PostDetail';
import MyAlert from 'components/cafe/MyAlert';
import PostUpload from 'components/post/PostUpload';
import PostEdit from 'components/post/PostEdit';

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
