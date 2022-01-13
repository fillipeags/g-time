import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import breakpoints from '../../utils/swiper-settings';
import { CardsContainer } from '../Cards/MediumCard/styles';

const MediumCardSkeleton = () => {
  const mock = [1, 2, 3, 4, 5, 6];
  return (
    <SkeletonTheme baseColor="#fafafa22" highlightColor="#ffffff">
      <CardsContainer>
        <h2>
          <Skeleton width="250px" height={40} />
        </h2>
        <Swiper
          slidesPerView={4}
          spaceBetween={260}
          navigation
          breakpoints={breakpoints}
        >
          <SwiperSlide>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
              {mock.map(index => (
                <Skeleton
                  width="280px"
                  height={400}
                  style={{ marginRight: '40px' }}
                  key={index}
                />
              ))}
            </div>
          </SwiperSlide>
        </Swiper>
      </CardsContainer>
    </SkeletonTheme>
  );
};

export default MediumCardSkeleton;
