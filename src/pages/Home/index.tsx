import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import LargeCard from '../../components/Cards/LargeCard';
import MediumCard from '../../components/Cards/MediumCard';
import Header from '../../components/Header';
import MainBanner from '../../components/MainBanner';
import data from '../../database/mock';

import '../../utils/swiper-settings';
import CardsContainer from './styles';

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <MainBanner />

      <h2>Category</h2>

      <CardsContainer>
        <Swiper
          slidesPerView={4}
          spaceBetween={300}
          slidesPerGroup={1}
          loop
          loopFillGroupWithBlank
          navigation
        >
          {data.map(({ id, title, score, coverImage }) => (
            <SwiperSlide>
              <MediumCard
                key={id}
                coverImage={coverImage}
                title={title}
                score={score}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </CardsContainer>

      <LargeCard />
    </>
  );
};

export default Home;
