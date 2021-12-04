import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  margin-top: 40px;

  display: flex;
  flex-direction: column;
  align-items: center;

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
    margin-bottom: 50px;
  }
`;

export const Content = styled.div`
  width: 530px;
  margin-bottom: 40px;
`;

export const CardBanner = styled.div`
  img {
    width: 530px;
    border-radius: 20px;
    box-shadow: 0px 0px 29px 6px rgba(255, 255, 255, 0.55);
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
