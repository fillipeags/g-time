import '../../../utils/swiper-settings';
import { Swiper, SwiperSlide } from 'swiper/react';
import { CardsContainer } from './styles';
import data from '../../../database/mock';
import MediumCardItem from './MediumCardItem';

const MediumCard = () => {
  return (
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
            <MediumCardItem
              key={id}
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

export default MediumCard;
