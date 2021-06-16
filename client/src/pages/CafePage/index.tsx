import Header from 'components/Header';
import React from 'react';
import './styles.scss';
import logo from 'static/logo.png';
import CafeInfoBox from 'components/CafeInfoBox';
import CafeMenuBox from 'components/CafeMenuBox';
import CafeMainBoard from 'components/CafeMainBoard';

const CafePage = () => {
  return (
    <div id="CafePage">
      <Header />
      <div className="cafe-body">
        <div className="front-img">
          <div className="front-cafe">
            <a href="">
              <img src={logo} alt="" />
            </a>
          </div>
        </div>

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
    </div>
  );
};

export default CafePage;
