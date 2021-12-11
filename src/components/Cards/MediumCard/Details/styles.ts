import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
`;

export const Content = styled.div`
  height: 280px;
  background-color: ${({ theme }) => theme.colors.gray[800]};
  border-radius: 40px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const PlayContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-bottom: 60px;
`;
