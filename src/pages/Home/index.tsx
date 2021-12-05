import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import LargeCard from '../../components/Cards/LargeCard';
import MediumCard from '../../components/Cards/MediumCard';
import Header from '../../components/Header';
import MainBanner from '../../components/MainBanner';
import data from '../../database/mock';

import '../../utils/swiper-settings';
import { Container, MainBannerContainer } from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <Header />

      <MainBannerContainer>
        <Swiper
          spaceBetween={800}
          autoplay={{
            delay: 2500,
          }}
          parallax
          speed={600}
        >
          {data.map(({ title, summary, coverImage }) => (
            <SwiperSlide>
              <MainBanner
                title={title}
                summary={summary}
                coverImage={coverImage}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </MainBannerContainer>

      <h2>Category</h2>
      <MediumCard />

      <LargeCard />
    </Container>
  );
};

export default Home;
