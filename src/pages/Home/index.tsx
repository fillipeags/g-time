// import LargeCard from '../../components/Cards/LargeCard';

import Header from '../../components/Header';
import MainBanner from '../../components/MainBanner';
import MediumCard from '../../components/Cards/MediumCard';

import requests from '../../services/api/requests';

import { Container, Content } from './styles';

const Home = () => {
  return (
    <Container>
      <Header />

      <Content>
        <MainBanner />

        <MediumCard
          category="Upcoming Games"
          fetchUrl={requests.upcomingGames}
        />
        <MediumCard category="New Games" fetchUrl={requests.newGames} />
        <MediumCard category="Popular Games" fetchUrl={requests.popularGames} />

        {/* <LargeCard /> */}
      </Content>
    </Container>
  );
};

export default Home;
