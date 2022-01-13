import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

import { Container, Wrapper, Content } from '../../MainBanner/styles';

const MainBannerSkeleton = () => {
  return (
    <SkeletonTheme baseColor="#ffffff" highlightColor="#aca9a9">
      <Container>
        <Content>
          <Skeleton width="200px" height={20} baseColor="white" />

          <Wrapper>
            <Skeleton count={3} />
            <div>
              <Skeleton height={30} />
            </div>
            <Skeleton width="200px" height={20} />
          </Wrapper>
        </Content>
      </Container>
    </SkeletonTheme>
  );
};

export default MainBannerSkeleton;
