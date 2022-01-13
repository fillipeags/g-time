import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

import { Container, Wrapper, Content } from '../MainBanner/styles';

const MainBannerSkeleton = () => {
  return (
    <SkeletonTheme baseColor="#fafafa22" highlightColor="#dadada">
      <Container>
        <Content>
          <Skeleton width="600px" height={60} />

          <Wrapper>
            <Skeleton width="200px" height={60} />
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
