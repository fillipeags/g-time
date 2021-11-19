import styled from 'styled-components';

export const Container = styled.header`
  height: 70px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  margin: 40px 50px;

  h1 {
    color: ${({ theme }) => theme.colors.gray[100]};

    font-size: 36px;

    strong {
      color: ${({ theme }) => theme.colors.primary.medium};
    }
  }
`;

export const AvatarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  img {
    width: 70px;
    height: 70px;

    border-radius: 15px;
  }
`;
