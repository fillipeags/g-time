import styled from 'styled-components';

export const Wrapper = styled.div``;

export const Container = styled.div`
  position: fixed;
  bottom: 20px;
  left: 50%;
  right: 0;
  z-index: 1000;

  //give nav it's own compsite layer
  transform: translate(-50%, 0);
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 60px;
  background: linear-gradient(
    83.93deg,
    #4316db 70.08%,
    rgba(70, 27, 214, 0.445656) 100%,
    rgba(58, 0, 255, 0) 120.91%
  );
  border-radius: 60px;
`;

export const MenuItem = styled.li`
  list-style-type: none;
`;

export const MenuContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`;

export const OptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 10px;
  white-space: nowrap;
`;
