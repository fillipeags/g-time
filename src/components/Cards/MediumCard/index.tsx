import { Swiper, SwiperSlide } from 'swiper/react';
import breakpoints from '../../../utils/swiper-settings';
import { CardsContainer, Testecontainer } from './styles';
import data from '../../../database/mock';
import MediumCardItem from './MediumCardItem';

const MediumCard = () => {
  return (
    <CardsContainer>
      <h2>Category</h2>
      <Testecontainer>
        <Swiper
          slidesPerView={4}
          spaceBetween={260}
          navigation
          breakpoints={breakpoints}
        >
          {data.map(({ id, title, score, coverImage }) => (
            <SwiperSlide key={id}>
              <MediumCardItem
                coverImage={coverImage}
                title={title}
                score={score}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Testecontainer>
    </CardsContainer>
  );
};

export default MediumCard;
