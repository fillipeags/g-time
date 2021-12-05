import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import LargeCard from '../../components/Cards/LargeCard';
import MediumCard from '../../components/Cards/MediumCard';
import Header from '../../components/Header';
import MainBanner from '../../components/MainBanner';
import data from '../../database/mock';

import '../../utils/swiper-settings';
import { CardsContainer, Container } from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <Header />
      <MainBanner />

      <h2>Category</h2>

      <CardsContainer>
        <Swiper
          slidesPerView={4}
          spaceBetween={300}
          loop
          loopFillGroupWithBlank
          navigation
          breakpoints={{
            '640': {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            '768': {
              slidesPerView: 4,
              spaceBetween: 50,
            },
            '1024': {
              slidesPerView: 3,
              spaceBetween: 300,
            },
            '1366': {
              slidesPerView: 4,
              spaceBetween: 300,
            },
            '1920': {
              slidesPerView: 5,
              spaceBetween: 250,
            },
          }}
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
    </Container>
  );
};

export default Home;
