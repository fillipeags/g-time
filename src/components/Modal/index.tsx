/* eslint-disable @typescript-eslint/no-non-null-assertion */
import ReactDOM from 'react-dom';
import { Overlay, Container } from './styles';

const portal = document.getElementById('youtube-modal')!;

export default function Modal() {
  return ReactDOM.createPortal(
    <Overlay>
      <Container>
        <p>isso é um modal</p>
      </Container>
    </Overlay>,
    portal,
  );
}
