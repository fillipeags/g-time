import styled from 'styled-components';

const Container = styled.header`
  height: 60px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 {
    color: ${({ theme }) => theme.colors.gray[100]};

    font-size: 28px;
    font-weight: medium;

    strong {
      color: ${({ theme }) => theme.colors.primary.medium};
    }
  }

  @media (min-width: 425px) and (max-width: 1024px) {
    h1 {
      margin-top: 20px;
      font-size: 24px;
    }
  }
`;

export default Container;
