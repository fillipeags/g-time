import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  .swiper-button-prev,
  .swiper-button-next {
    color: ${({ theme }) => theme.colors.primary.medium};
  }
`;

export const MainBannerContainer = styled.div`
  width: 72vw;
`;
