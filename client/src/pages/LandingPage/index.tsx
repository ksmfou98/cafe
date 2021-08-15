import Header from 'components/base/Header';
import React from 'react';
import './styles.scss';
import MyCafeList from 'components/landing/MyCafeList';
import AllCafeList from 'components/landing/AllCafeList';
import { Route } from 'react-router-dom';
import CafeCreateForm from 'components/cafe/CafeCreateForm';

const LandingPage = () => {
  return (
    <>
      <Header />
      <div id="LandingPage">
        <Route path="/" exact>
          <MyCafeList />
          <AllCafeList />
        </Route>
        <Route path="/create" exact component={CafeCreateForm} />
      </div>
    </>
  );
};

export default LandingPage;
