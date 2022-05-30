import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import styled from 'styled-components';

import 'react-loading-skeleton/dist/skeleton.css';

import Slider from 'react-slick';

import { mediumCardSlider } from '../../utils/slider/sliderSettings';
import { CardsContainer } from '../Cards/MediumCard/styles';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const MediumCardSkeleton = () => {
  const mock = [1, 2, 3, 4, 5];

  return (
    <SkeletonTheme baseColor="#fafafa22" highlightColor="#ffffff">
      <CardsContainer>
        <Skeleton width="250px" height={40} style={{ marginLeft: '10px' }} />

        <br />
        <Wrapper>
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
        </Wrapper>
      </CardsContainer>
    </SkeletonTheme>
  );
};

export default MediumCardSkeleton;
