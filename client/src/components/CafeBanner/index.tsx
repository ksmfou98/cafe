import React from 'react';
import './styles.scss';
import logo from 'static/logo.png';
import { Link } from 'react-router-dom';

const CafeBanner = () => {
  return (
    <div id="CafeBanner">
      <div className="front-img">
        <div className="front-cafe">
          <Link to="/dofe">
            <img src={logo} alt="" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CafeBanner;
