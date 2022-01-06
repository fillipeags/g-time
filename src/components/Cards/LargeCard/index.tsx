import { Swiper, SwiperSlide } from 'swiper/react';
import breakpoints from '../../../utils/swiper-settings';

import LargeCardItem from './LargeCardItem';
import { CardsContainer } from './styles';

import data from '../../../database/mock';

const LargeCard = () => {
  return (
    <CardsContainer>
      <h1>Best Scored Games</h1>
      <h3>The best games to be played according to the community</h3>
      <Swiper slidesPerView={3} spaceBetween={800} breakpoints={breakpoints}>
        {data.map(({ id, title, score, coverImage }) => (
          <SwiperSlide key={id}>
            <LargeCardItem
              coverImage={coverImage}
              title={title}
              score={score}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </CardsContainer>
  );
};

export default LargeCard;
