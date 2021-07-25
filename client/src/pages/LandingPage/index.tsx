import Header from 'components/Header';
import React from 'react';
import './styles.scss';
import MyCafeList from 'components/MyCafeList';
import AllCafeList from 'components/AllCafeList';
import { Route } from 'react-router-dom';
import CafeCreateForm from 'components/CafeCreateForm';

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
