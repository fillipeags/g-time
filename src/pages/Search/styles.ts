import styled from 'styled-components';
import { FiBarChart } from 'react-icons/fi';

interface IFilterButtonProps {
  active?: boolean;
}

export const Container = styled.div`
  width: 100%;
`;

export const HeaderContainer = styled.div`
  height: 60px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 40px;

  margin-bottom: 20px;

  @media (max-width: 425px) {
    gap: 18px;
  }
`;

export const FilterIcon = styled(FiBarChart)`
  transform: scaleX(-1) rotate(270deg);
`;

export const Filter = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 40px;

  p {
    color: ${({ theme }) => theme.colors.gray[300]};
    margin-left: -2px;
    margin-right: 10px;
  }

  @media (max-width: 768px) {
    gap: 8px;
  }

  @media (max-width: 425px) {
    flex-direction: column;
    gap: 20px;
  }
`;

export const FilterIconContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const FilterButton = styled.button<IFilterButtonProps>`
  width: 150px;
  height: 40px;
  background: transparent;
  border: 2px solid;
  border-image: linear-gradient(
      83.93deg,
      #4316db -6.08%,
      rgba(70, 27, 214, 0.445656) 67.34%,
      rgba(58, 0, 255, 0) 158.91%
    )
    1;

  transition: 0.2s ease-in-out;

  color: ${({ theme }) => theme.colors.gray[300]};

  background-color: ${({ theme, active }) =>
    active && theme.colors.primary.medium};

  &:hover {
    opacity: 0.6;
    transition: 0.5s;
  }
`;

export const ResetButton = styled.button`
  background: none;
  color: white;
  border: none;

  &:hover {
    opacity: 0.6;
    transition: 0.5s ease-in-out;
  }
`;
