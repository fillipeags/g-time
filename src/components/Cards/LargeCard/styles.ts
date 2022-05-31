import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 40px;
`;

export const Content = styled.div`
  width: 600px;
  height: 100%;
`;

export const CardBanner = styled.div`
  img {
    width: 600px;
    border-radius: 20px;
    box-shadow: 1px 0px 20px 1px rgba(255, 255, 255, 0.4);
    height: 350px;
  }
`;

export const GameInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const CardsContainer = styled.div`
  width: 72vw;

  margin-top: 40px;

  h1 {
    font-size: 28px;
    font-weight: medium;
    color: ${({ theme }) => theme.colors.gray[100]};
    text-transform: uppercase;
    text-align: center;
    margin: 0;
  }

  h3 {
    font-size: 20px;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.gray[500]};
    text-transform: capitalize;
    text-align: center;
    margin-top: 15px;
    margin-bottom: 20px;
  }
`;
