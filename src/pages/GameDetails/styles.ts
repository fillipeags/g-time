import styled from 'styled-components';

export const Container = styled.main``;

export const Content = styled.div`
  h1,
  h2,
  h3,
  p,
  span {
    margin: 0;
  }

  h1 {
    font-size: 72px;
    font-weight: 500;
  }

  h2 {
    font-size: 28px;
    font-weight: 500;
    text-transform: uppercase;
  }

  h3 {
    font-size: 22px;
    font-weight: 300;
    text-transform: uppercase;
  }

  p {
    font-size: 20px;
    font-weight: 300;
    word-wrap: break-word;
    text-align: justify;
    color: ${({ theme }) => theme.colors.gray[400]};
  }

  span {
    font-size: 18px;
    text-transform: capitalize;
    font-weight: 300;
    color: ${({ theme }) => theme.colors.gray[300]};
  }
`;

export const GridContent = styled.main`
  display: grid;
  grid-template-columns: 1.3fr 0.7fr;
  gap: 0px 40px;
  margin-top: 100px;

  /* background-color: blue; */

  span {
    margin-right: 20px;
    margin-bottom: 20px;
  }
`;

export const LeftContent = styled.section`
  h2 {
    margin: 40px 0px 20px 0px;
  }

  p {
    margin-top: 20px;
  }
`;

export const RightContent = styled.section`
  h3 {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-weight: 500;
    margin-bottom: 20px;
  }

  span {
    margin: 0;
  }

  h2 {
    margin-bottom: 20px;
  }
`;

export const BoxInfo = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  background-color: ${({ theme }) => theme.colors.gray[600]};

  &:first-of-type {
    margin-top: 40px;
  }

  margin: 20px 0px 20px 0px;
  padding: 22px 16px;
  border-radius: 10px;

  h3 {
    margin: 0;
  }
`;

export const AlignContainer = styled.div`
  margin-top: 20px;

  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;
