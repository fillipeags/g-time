import styled from 'styled-components';

export const Container = styled.header`
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
`;

export const AvatarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  img {
    width: 54px;
    height: 54px;

    border-radius: 10px;
  }
`;
