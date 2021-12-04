import React from 'react';
import LargeCard from '../../components/Cards/LargeCard';
import MediumCard from '../../components/Cards/MediumCard';

import Header from '../../components/Header';
import MainBanner from '../../components/MainBanner';

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <MainBanner />

      <MediumCard />
      <MediumCard />

      <LargeCard />
    </>
  );
};

export default Home;
