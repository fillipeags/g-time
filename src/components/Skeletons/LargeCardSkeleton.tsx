import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import Slider from 'react-slick';

import { mediumCardSlider } from '../../utils/slider/sliderSettings';

import { CardsContainer } from '../Cards/MediumCard/styles';

const LargeCardSkeleton = () => {
  const mock = [1, 2, 3, 4, 5, 6];

  return (
    <SkeletonTheme baseColor="#fafafa22" highlightColor="#ffffff">
      <CardsContainer>
        <h2>
          <Skeleton width="250px" height={40} />
        </h2>
        <section>
          <Slider {...mediumCardSlider}>
            {mock.map(index => (
              <Skeleton
                width="280px"
                height={400}
                style={{ marginRight: '40px' }}
                key={index}
              />
            ))}
          </Slider>
        </section>
      </CardsContainer>
    </SkeletonTheme>
  );
};

export default LargeCardSkeleton;
