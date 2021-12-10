import styled from 'styled-components';

export const Container = styled.div`
  .swiper-button-prev,
  .swiper-button-next {
    color: ${({ theme }) => theme.colors.primary.medium};
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
