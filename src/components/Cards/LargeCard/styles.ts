import styled from 'styled-components';

export const Container = styled.div`
  width: 400px;

  @media (max-width: 425px) {
    width: 280px;
  }
`;

export const CardBanner = styled.div`
  img {
    width: 400px;
    border-radius: 20px;
    box-shadow: 1px 0px 20px 1px rgba(255, 255, 255, 0.2);
    height: 250px;

    @media (max-width: 425px) {
      width: 280px;
      height: 150px;
    }
  }
`;

export const GameInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 20px;
  margin-bottom: 40px;

  @media (max-width: 425px) {
    flex-direction: column;
    gap: 0px;
  }
`;

export const Description = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const Button = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.primary.medium};
  font-weight: bold;
  text-transform: uppercase;
  font-size: 16px;

  transition: 0.6s ease-in-out;

  &:hover {
    opacity: 0.6;
    transition: 0.6s ease-in-out;
  }
`;
