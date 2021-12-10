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
`;

export const FilterButton = styled.button<IFilterButtonProps>`
  width: 150px;
  height: 40px;
  background: transparent;
  border: 2px solid ${({ theme }) => theme.colors.primary.medium};
  color: ${({ theme }) => theme.colors.gray[300]};
  border-radius: 8px;

  background-color: ${({ theme, active }) =>
    active && theme.colors.primary.medium};

  &:hover {
    opacity: 0.6;
    transition: 0.5s;
  }
`;
