import styled from 'styled-components';
import GoToGithub from 'static/GoToGithub.png';
import { palette } from 'lib/styles/palette';
import { AiFillGithub } from 'react-icons/ai';

const GoToGithubBox = () => {
  return (
    <GoToGithubBoxBlock>
      <div className="img">
        <img src={GoToGithub} alt="GoToGithub" />
      </div>
      <div className="btn">
        <LinkedGoToGithub
          href="https://github.com/ksmfou98/cafe"
          rel="noreferrer"
          target="_blank"
        >
          <AiFillGithub size="20" />
          <span>Go to Github</span>
        </LinkedGoToGithub>
      </div>
    </GoToGithubBoxBlock>
  );
};

const GoToGithubBoxBlock = styled.div`
  margin-top: 50px;
  height: 200px;
  display: flex;
  flex-direction: column-reverse;
  position: relative;
  .img {
    width: 150px;
    position: absolute;
    top: -20px;
    left: 20px;
    img {
      width: 100%;
    }
  }
  .btn {
    padding: 20px 0;
    display: flex;
    justify-content: center;
  }
`;

const LinkedGoToGithub = styled.a`
  background-color: ${palette.mainColor};
  color: #fff;
  border: none;
  border-radius: 3px;
  font-weight: 700;
  font-size: 14px;
  width: 150px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    margin-right: 5px;
  }
`;

export default GoToGithubBox;
