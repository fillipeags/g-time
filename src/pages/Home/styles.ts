import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  .swiper-button-prev,
  .swiper-button-next {
    color: ${({ theme }) => theme.colors.primary.medium};
  }
`;

export default Container;
