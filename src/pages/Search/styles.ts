import styled from 'styled-components';
import { FiBarChart } from 'react-icons/fi';

interface IFilterButtonProps {
  active?: boolean;
}

export const Container = styled.div``;

export const HeaderContainer = styled.div`
  height: 60px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-bottom: 20px;
`;

export const FilterIcon = styled(FiBarChart)`
  transform: scaleX(-1) rotate(270deg);
`;

export const Filter = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 40px;

  p {
    color: ${({ theme }) => theme.colors.gray[300]};
  }
`;

export const FilterButton = styled.button<IFilterButtonProps>`
  width: 150px;
  height: 40px;
  background: transparent;
  border: 2px solid ${({ theme }) => theme.colors.primary.medium};
  color: ${({ theme }) => theme.colors.gray[300]};
  border-radius: 14px;

  background-color: ${({ theme, active }) =>
    active && theme.colors.primary.medium};

  &:hover {
    opacity: 0.6;
    transition: 0.5s;
  }
`;
