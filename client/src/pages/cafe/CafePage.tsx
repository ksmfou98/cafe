import Header from 'components/base/Header';
import CafeInfoBox from 'components/cafe/CafeInfoBox';
import CafeMenuBox from 'components/cafe/CafeMenuBox';
import PostList from 'components/post/PostList';
import { Route } from 'react-router-dom';
import CafeJoinForm from 'components/cafe/CafeJoinForm';
import PostDetail from 'components/post/PostDetail';
import PostUpload from 'components/post/PostUpload';
import PostEdit from 'components/post/PostEdit';
import CafeMemberBoxList from 'components/cafe/CafeMemberBoxList';
import GoToGithubBox from 'components/cafe/GoToGithubBox';
import styled from 'styled-components';

const CafePage = () => {
  return (
    <CafePageBlock>
      <Header />
      <div id="CafePage" className="page-layout">
        <div className="inner-page">
          <div className="cafe-menu">
            <CafeInfoBox />
            <CafeMenuBox />
            <CafeMemberBoxList />
            <GoToGithubBox />
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
            <Route path="/cafe/:cafe" exact component={PostList} />
          </div>
        </div>
      </div>
    </CafePageBlock>
  );
};

const CafePageBlock = styled.div`
  .inner-page {
    display: flex;
    justify-content: center;
    flex: 1 1 auto;
    height: 100%;
    .cafe-menu {
      width: 204px;
      letter-spacing: -0.5px;
      overflow: hidden;
      text-align: left;
      flex: 0 1 204px;
      // align-self: flex-start;
      // position: sticky;
      // top: 55px;
    }
    .cafe-content {
      flex: 1 1 850px;
      width: 850px;
      margin: 0 90px;
      // min-height: 100vh;
      padding-top: 20px;
    }
  }
`;

export default CafePage;
