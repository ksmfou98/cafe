import React from 'react';
import './styles.scss';
import logo from 'static/logo.png';


const CafeBanner = () => {
  return (
    <div id="CafeBanner">
      <div className="front-img">
        <div className="front-cafe">
          <a href="">
            <img src={logo} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default CafeBanner;
