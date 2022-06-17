import styled from 'styled-components';

export const Container = styled.main``;

export const Content = styled.div`
  margin-top: 60px;

  h1,
  h2,
  h3,
  p,
  span {
    margin: 0;
  }

  h1 {
    font-size: 62px;
    font-weight: 500;
  }

  h2 {
    font-size: 24px;
    font-weight: 500;
    text-transform: uppercase;
    margin: 40px 0px 20px 0px;

    &:first-of-type {
      margin: 10px 0px 20px 0px;
    }
  }

  h3 {
    font-size: 18px;
    font-weight: 300;
    text-transform: uppercase;
  }

  p {
    font-size: 16px;
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

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1.3fr 0.7fr;
  gap: 0px 30px;

  span {
    margin-right: 10px;
    margin-bottom: 20px;
  }

  @media (min-width: 320px) and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const LeftContent = styled.section`
  h3 {
    padding: 20px 0px;
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
`;

export const GameBanner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  position: relative;

  img {
    width: 450px;
    border-radius: 20px;
  }

  button {
    width: 200px;
    padding: 16px;
    border: none;
    background-color: ${({ theme }) => theme.colors.primary.medium};
    font-size: 16px;
    font-weight: bold;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.gray[0]};
    border-radius: 10px;
    box-shadow: 1px 3px 27px rgba(255, 255, 255, 0.3);

    position: absolute;
    bottom: -20px;

    &:hover {
      opacity: 0.8;
      transition: 0.4 ease-in-out;
    }
  }

  margin-bottom: 60px;

  @media (min-width: 1921px) {
    img {
      width: 900px;
    }

    button {
      width: 400px;
    }
  }

  @media (min-width: 320px) and (max-width: 767px) {
    img {
      width: 300px;
    }

    button {
      width: 200px;
      padding: 10px;
    }
  }
`;

export const BoxInfo = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  background-color: ${({ theme }) => theme.colors.gray[700]};

  span {
    background-color: ${({ theme }) => theme.colors.gray[600]};
  }

  margin: 20px 0px;
  padding: 20px 16px;
  border-radius: 10px;

  h3 {
    margin: 0;
  }
`;

export const AlignContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

export const Requirements = styled.div`
  ul {
    list-style: none;
    font-size: 18px;
    text-transform: capitalize;
    font-weight: 300;
    color: ${({ theme }) => theme.colors.gray[300]};
  }

  margin: 20px 0px;

  p {
    word-break: break-all;
    line-height: 30px;
  }

  li {
    font-weight: bold;
  }
`;

export const ScreenShotsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;

  gap: 20px;

  img {
    width: 400px;
  }

  @media (min-width: 1921px) {
    img {
      width: 600px;
    }
  }

  @media (min-width: 768px) and (max-width: 1920px) {
    img {
      width: 300px;
    }
  }

  @media (min-width: 320px) and (max-width: 767px) {
    img {
      width: 250px;
    }
  }
`;
