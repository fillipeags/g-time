import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

import { Container, Wrapper, Content } from '../../MainBanner/styles';

const MainBannerSkeleton = () => {
  return (
    <SkeletonTheme baseColor="#fafafac7" highlightColor="#ffffff">
      <Container>
        <Content>
          <Skeleton width="600px" height={50} />

          <Wrapper>
            <Skeleton width="350px" height={50} />
            <div>
              <Skeleton height={30} />
            </div>
            <Skeleton
              width="200px"
              height={50}
              style={{ marginRight: ' 40px' }}
            />
          </Wrapper>
        </Content>
      </Container>
    </SkeletonTheme>
  );
};

export default MainBannerSkeleton;
