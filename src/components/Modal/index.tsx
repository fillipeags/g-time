/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { useCallback, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import { Overlay, Container } from './styles';

const portal = document.getElementById('youtube-modal')!;

export default function Modal({ toggleModal, showModal }) {
  const wrapperRef = useRef<any>(null);

  const closeModal = useCallback(
    ({ target }) => {
      if (
        wrapperRef &&
        wrapperRef.current &&
        !wrapperRef.current.contains(target)
      ) {
        toggleModal();
      }
    },
    [toggleModal],
  );

  useEffect(() => {
    document.addEventListener('click', closeModal, { capture: true });
    return () => {
      document.removeEventListener('click', closeModal, { capture: true });
    };
  }, [closeModal]);

  return showModal
    ? ReactDOM.createPortal(
      <Overlay>
        <Container>
          <iframe
            ref={wrapperRef}
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
    )
    : null;
}
