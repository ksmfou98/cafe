import React from 'react';
import './styles.scss';
import { ImHappy, ImGithub } from 'react-icons/im';

const Footer = () => {
  console.log("footer 리랜더링")
  return (
    <div id="Footer">
      <div className="inner-footer">
        <div className="footer-title">
          <ImHappy /> 이도현 개인 프로젝트 <ImHappy />
        </div>
        <div className="footer-github">
          <span>
            <ImGithub size="22" />
          </span>
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
            href="https://github.com/ksmfou98/cafe"
          >
            Click Here!
          </a>
        </div>
      </div>
    </div>
  );
};
export default Footer;
