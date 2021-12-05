import React from 'react';
import LargeCard from '../../components/Cards/LargeCard';
import MediumCard from '../../components/Cards/MediumCard';
import Header from '../../components/Header';
import MainBanner from '../../components/MainBanner';

import '../../utils/swiper-settings';
import Container from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <Header />
      <MainBanner />

      <MediumCard />
      <MediumCard />

      <LargeCard />
    </Container>
  );
};

export default Home;
