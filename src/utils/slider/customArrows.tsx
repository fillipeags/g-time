/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import styled from 'styled-components';

import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';

const PrevIcon = styled(IoIosArrowBack)`
  width: 40px;
  height: 40px;

  padding: 10px;
  border-radius: 100px;
  z-index: 1;

  background: linear-gradient(
    83.93deg,
    #4316db -6.08%,
    rgba(70, 27, 214, 0.6) 67.34%,
    rgba(58, 0, 255, 0) 158.91%
  ) !important;

  &:hover {
    opacity: 0.8 !important;
  }

  .slick-disabled {
    display: none;
  }
`;

const NextIcon = styled(IoIosArrowForward)`
  height: 40px;
  width: 40px;

  padding: 12px;
  border-radius: 100px;

  background: linear-gradient(
    83.93deg,
    #4316db -6.08%,
    rgba(70, 27, 214, 0.6) 67.34%,
    rgba(58, 0, 255, 0) 158.91%
  ) !important;

  &:hover {
    opacity: 0.8 !important;
  }

  .slick-disabled {
    display: none;
  }
`;

export const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
  <PrevIcon
    {...props}
    color="white"
    aria-disabled={currentSlide === slideCount - 1}
  />
);

export const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
  <NextIcon
    {...props}
    color="white"
    aria-disabled={currentSlide === slideCount - 1}
  />
);
