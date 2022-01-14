/* eslint-disable @typescript-eslint/no-non-null-assertion */
import ReactDOM from 'react-dom';
import { Overlay, Container } from './styles';

const portal = document.getElementById('youtube-modal')!;

export default function Modal() {
  return ReactDOM.createPortal(
    <Overlay>
      <Container>
        <iframe
          width={1000}
          height={600}
          src="https://www.youtube.com/embed/QyJ7sRru7LM"
          frameBorder="0"
          title="trailer"
          allow="autoplay"
        />
      </Container>
    </Overlay>,
    portal,
  );
}
