import Header from 'components/Header';
import React from 'react';
import './styles.scss';
import CafeInfoBox from 'components/CafeInfoBox';
import CafeMenuBox from 'components/CafeMenuBox';
import BoardList from 'components/BoardList';
import { Route, useRouteMatch } from 'react-router-dom';
import CafeJoinForm from 'components/CafeJoinForm';
import PostWriteForm from 'components/PostWriteForm';
import PostDetail from 'components/PostDetail';
import MyAlert from 'components/MyAlert';

const CafePage = () => {
  const match = useRouteMatch();
  console.log(match);
  console.log("리랜더링")
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
            <Route path="/cafe/:cafe/write" exact component={PostWriteForm} />
            <Route path="/cafe/:cafe/post/:postid" exact component={PostDetail} />
            <Route path="/cafe/:cafe" exact component={BoardList} />
          </div>

          <MyAlert />
        </div>
      </div>
    </>
  );
};

export default CafePage;
