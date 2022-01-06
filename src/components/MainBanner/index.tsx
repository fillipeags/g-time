import { Swiper, SwiperSlide } from 'swiper/react';

import MainBannerItem from './MainBannerItem';
import { MainBannerContainer } from './styles';

import data from '../../database/mock';
import '../../utils/swiper-settings';

const MainBanner = () => {
  return (
    <MainBannerContainer>
      <Swiper
        spaceBetween={800}
        autoplay={{
          delay: 2500,
        }}
        speed={700}
      >
        {data.map(({ id, title, summary, coverImage }) => (
          <SwiperSlide key={id}>
            <MainBannerItem
              title={title}
              summary={summary}
              coverImage={coverImage}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </MainBannerContainer>
  );
};

export default MainBanner;
