import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  bottom: 20px;
  left: 55px;
  right: 0;
  z-index: 1000;

  //give nav it's own compsite layer
  will-change: transform;
  transform: translateZ(0);

  display: flex;
  align-items: center;
  justify-content: center;

  height: 85px;
  width: 80%;
  background: linear-gradient(
    83.93deg,
    #4316db 70.08%,
    rgba(70, 27, 214, 0.445656) 100%,
    rgba(58, 0, 255, 0) 120.91%
  );
  border-radius: 60px;
`;

export const Content = styled.div``;

export const MenuItem = styled.li`
  list-style-type: none;

  /* display: flex;
  flex-direction: column; */
`;

export const MenuContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 60px;
`;

export const OptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 10px;
  white-space: nowrap;
`;
