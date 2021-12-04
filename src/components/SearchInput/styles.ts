import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 54px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 25px;
  border-radius: 10px;

  background-color: ${({ theme }) => theme.colors.gray[600]};
`;

export const Search = styled.input`
  border: none;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.gray[300]};
  font-size: 20px;

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray[300]};
    font-weight: 500;
    padding-left: 5px;
  }
  outline: none;
`;
