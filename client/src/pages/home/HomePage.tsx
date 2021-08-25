import Header from 'components/base/Header';
import { Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import CafeCreatePage from './CafeCreatePage';

const HomePage = () => {
  return (
    <>
      <Header />
      <Route path="/" exact component={LandingPage} />
      <Route path="/create" exact component={CafeCreatePage} />
    </>
  );
};

export default HomePage;
