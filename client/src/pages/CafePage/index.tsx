import Header from 'components/base/Header';
import './styles.scss';
import CafeInfoBox from 'components/cafe/CafeInfoBox';
import CafeMenuBox from 'components/cafe/CafeMenuBox';
import PostList from 'components/post/PostList';
import { Route } from 'react-router-dom';
import CafeJoinForm from 'components/cafe/CafeJoinForm';
import PostDetail from 'components/post/PostDetail';
import ActivityAlert from 'components/cafe/ActivityAlert';
import PostUpload from 'components/post/PostUpload';
import PostEdit from 'components/post/PostEdit';
import CafeMemberBoxList from 'components/cafe/CafeMemberBoxList';
import GoToGithubBox from 'components/cafe/GoToGithubBox';

const CafePage = () => {
  return (
    <>
      <Header />
      <div id="CafePage" className="page-layout">
        <div className="inner-page">
          <div className="cafe-menu">
            <CafeInfoBox />
            <CafeMenuBox />
            <CafeMemberBoxList />
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

          <div className="cafe-right">
            <ActivityAlert />
            <GoToGithubBox />
          </div>
        </div>
      </div>
    </>
  );
};

export default CafePage;
