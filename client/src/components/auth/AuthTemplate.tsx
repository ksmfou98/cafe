import { BsLightningFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import styled from 'styled-components';

interface AuthTemplateProps {
  children: React.ReactNode;
  AuthType: 'login' | 'register';
}

const AuthTemplate = ({ children, AuthType }: AuthTemplateProps) => {
  return (
    <AuthTemplateBlock>
      <div className="accounts-form">
        <div className="accounts-ico">
          <BsLightningFill size="30" />
        </div>
        <div className="accounts-form-tit">
          {AuthType === 'login' ? '로그인' : '회원가입'}
        </div>
        <div className="accounts-des">
          카페를 만들어서 커뮤니티를 즐겨보세요 !
        </div>
        <div className="accounts-social">
          <div className="google-btn">
            <button>
              <FcGoogle size="24" />
              {AuthType === 'login'
                ? 'Sign in with Google'
                : 'Sign up with Google'}
            </button>
          </div>
        </div>
        <div className="accounts-message">
          <div className="message-before"></div>
          <span className="message">
            {AuthType === 'login'
              ? 'or Sign in with Email'
              : 'or Sign up with Email'}
          </span>
          <div className="message-after"></div>
        </div>
        {children}
        <div className="accounts-link">
          {AuthType === 'login' ? (
            <>
              <span className="link-des">아직 회원이 아니신가요??</span>
              <Link to="/register">회원가입</Link>
            </>
          ) : (
            <>
              <span className="link-des">이미 회원이신가요??</span>
              <Link to="/login">로그인 하러가기</Link>
            </>
          )}
        </div>
        <Link to={'/'} className="dofe">
          © dofe
        </Link>
      </div>
    </AuthTemplateBlock>
  );
};

const AuthTemplateBlock = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  .authForm {
    height: 100vh;
    display: flex;
    align-items: center;
  }

  .accounts-form {
    width: 400px;
    margin: 0 auto;

    .accounts-ico {
      color: #4a3cea;
      margin-bottom: 20px;
    }

    .accounts-form-tit {
      font-size: 24px;
      font-weight: 700;
      padding: 10px 0;
    }

    .accounts-des {
      font-size: 14px;
      color: #545976;
      padding: 5px 0;
    }

    .accounts-social {
      margin: 30px 0 20px;
      .google-btn {
        button {
          display: flex;
          align-items: center;
          border: 1px solid #bcbbbb;
          width: 100%;
          border-radius: 20px;
          padding: 10px;
          font-weight: 700;
          justify-content: center;
          svg {
            margin-right: 10px;
          }
        }
      }
    }

    .accounts-message {
      display: flex;
      align-items: center;
      margin-bottom: 10px;
      justify-content: center;
      .message-before,
      .message-after {
        width: 125px;
        border: 1px solid #ccc9c9;
        height: 0px;
      }
      .message {
        font-size: 12px;
        padding: 10px;
        color: #999;
      }
    }

    .accounts-link {
      margin: 15px 0;
      font-size: 14px;
      color: #2c2c2c;
      a {
        color: #4a3cea;
        font-weight: 600;
        margin-left: 5px;
      }
    }
  }

  .dofe {
    display: block;
    padding-top: 16px;
    font-style: normal;
    font-size: 15px;
    color: #949296;
    line-height: 22px;
    letter-spacing: 0;
    margin-bottom: 50px;
    text-align: center;
  }
`;

export default AuthTemplate;
