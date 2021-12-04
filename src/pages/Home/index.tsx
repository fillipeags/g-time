import React from 'react';
import MediumCard from '../../components/Cards/MediumCard';

import Header from '../../components/Header';
import MainBanner from '../../components/MainBanner';

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <MainBanner />

      <MediumCard />
    </>
  );
};

export default Home;
