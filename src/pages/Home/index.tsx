import React from 'react';
// import LargeCard from '../../components/Cards/LargeCard';
import MediumCard from '../../components/Cards/MediumCard';
import Header from '../../components/Header';
import MainBanner from '../../components/MainBanner';

import '../../utils/swiper-settings';

import { Container, Content } from './styles';

const Home = () => {
  return (
    <Container>
      <Header />

      <Content>
        <MainBanner />

        <MediumCard />
        <MediumCard />

        {/* <LargeCard /> */}
      </Content>
    </Container>
  );
};

export default Home;
