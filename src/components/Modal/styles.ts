import styled from 'styled-components';

const Overlay = styled.div`
  position: relative;
  z-index: 999;
`;

const Container = styled.div`
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(7px);

  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  p {
    font-size: 120px;
  }
`;

export { Overlay, Container };
