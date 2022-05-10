import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 54px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 25px;
  border-radius: 10px;

  background-color: ${({ theme }) => theme.colors.gray[700]};
`;

export const Search = styled.input`
  width: 100%;
  border: none;
  background-color: transparent;
  font-size: 20px;
  color: ${({ theme }) => theme.colors.gray[100]};

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray[100]};
    font-weight: 500;
    padding-left: 5px;
  }
  outline: none;

  @media (max-width: 425px) {
    font-size: 16px;
  }
`;
