import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

import { CardsContainer } from '../Cards/MediumCard/styles';

const MediumCardSkeleton = () => {
  return (
    <SkeletonTheme baseColor="#fafafac7" highlightColor="#ffffff">
      <CardsContainer>
        <h2>
          <Skeleton width="250px" height={40} />
        </h2>

        <Skeleton
          width="280px"
          height={400}
          inline
          count={3}
          style={{ margin: '20px' }}
        />
      </CardsContainer>
    </SkeletonTheme>
  );
};

export default MediumCardSkeleton;
