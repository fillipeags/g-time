import styled from 'styled-components';

export const Container = styled.div`
  .swiper-button-prev,
  .swiper-button-next {
    color: ${({ theme }) => theme.colors.gray[100]};
    background: linear-gradient(
      83.93deg,
      #4316db -6.08%,
      rgba(70, 27, 214, 0.445656) 67.34%,
      rgba(58, 0, 255, 0) 158.91%
    );
    height: 60px;
    width: 60px;
    border-radius: 50px;
  }

  .swiper-button-next::after {
    margin-left: 5px;
    font-size: 30px;
  }

  .swiper-button-prev::after {
    margin-right: 5px;
    font-size: 30px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
