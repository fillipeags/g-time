import styled from 'styled-components';

export const Container = styled.div`
  width: 248px;
  height: 260px;
  border-radius: 40px;
  box-shadow: 0px 0px 10px rgba(255, 255, 255, 0.25);

  background-size: cover;

  display: flex;
  align-items: flex-end;

  margin-bottom: 40px;
  margin-left: 10px;
`;

export const Content = styled.div``;

export const GameInfo = styled.div`
  h4 {
    margin-bottom: 0px;
    font-weight: 400;
    font-size: 20px;
  }

  h4,
  p {
    margin-left: 25px;
  }

  p {
    font-size: 18px;
  }
`;

export const Rating = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
