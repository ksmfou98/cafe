import AllCafeList from 'components/landing/AllCafeList';
import MyCafeList from 'components/landing/MyCafeList';
import styled from 'styled-components';

const LandingPage = () => {
  return (
    <LandingPageBlock>
      <MyCafeList />
      <AllCafeList />
    </LandingPageBlock>
  );
};

const LandingPageBlock = styled.div``;

export default LandingPage;
