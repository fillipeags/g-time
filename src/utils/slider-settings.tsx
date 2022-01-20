/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';

import styled from 'styled-components';

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

const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
  <>
    <PrevIcon
      {...props}
      color="white"
      aria-disabled={currentSlide === slideCount - 1}
    />
  </>
);

const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
  <>
    <NextIcon
      {...props}
      color="white"
      aria-disabled={currentSlide === slideCount - 1}
    />
  </>
);

const mainBannerSlider = {
  slidesToScroll: 1,
  autoplay: true,
  speed: 600,
  autoplaySpeed: 2500,
  slidesToShow: 1,
  dots: false,
  arrows: false,
  // responsive: [
  //   {
  //     breakpoint: 1366,
  //     settings: {
  //       infinite: true,
  //       speed: 600,
  //       slidesToShow: 6,
  //       sliesToScroll: 1,
  //     },
  //   },
  //   {
  //     breakpoint: 1330,
  //     settings: {
  //       infinite: true,
  //       speed: 600,
  //       slidesToShow: 5,
  //       sliesToScroll: 1,
  //     },
  //   },
  //   {
  //     breakpoint: 1160,
  //     settings: {
  //       infinite: true,
  //       speed: 600,
  //       slidesToShow: 4,
  //       sliesToScroll: 1,
  //     },
  //   },
  //   {
  //     breakpoint: 925,
  //     settings: {
  //       infinite: true,
  //       speed: 600,
  //       slidesToShow: 3,
  //       sliesToScroll: 1,
  //     },
  //   },
  //   {
  //     breakpoint: 425,
  //     settings: {
  //       infinite: true,
  //       speed: 600,
  //       slidesToShow: 1,
  //       sliesToScroll: 1,
  //     },
  //   },
  // ],
};

const mediumCardSlider = {
  slidesToScroll: 1,
  initialSlide: 0,
  // infinite: false,
  speed: 600,
  slidesToShow: 4,
  variableWidth: true,
  adaptiveHeight: true,
  prevArrow: <SlickArrowLeft currentSlide={undefined} slideCount={undefined} />,
  nextArrow: (
    <SlickArrowRight currentSlide={undefined} slideCount={undefined} />
  ),
  // responsive: [
  //   {
  //     breakpoint: 1366,
  //     settings: {
  //       infinite: true,
  //       speed: 600,
  //       slidesToShow: 6,
  //       sliesToScroll: 1,
  //     },
  //   },
  //   {
  //     breakpoint: 1330,
  //     settings: {
  //       infinite: true,
  //       speed: 600,
  //       slidesToShow: 5,
  //       sliesToScroll: 1,
  //     },
  //   },
  //   {
  //     breakpoint: 1160,
  //     settings: {
  //       infinite: true,
  //       speed: 600,
  //       slidesToShow: 4,
  //       sliesToScroll: 1,
  //     },
  //   },
  //   {
  //     breakpoint: 925,
  //     settings: {
  //       infinite: true,
  //       speed: 600,
  //       slidesToShow: 3,
  //       sliesToScroll: 1,
  //     },
  //   },
  //   {
  //     breakpoint: 425,
  //     settings: {
  //       infinite: true,
  //       speed: 600,
  //       slidesToShow: 1,
  //       sliesToScroll: 1,
  //     },
  //   },
  // ],
};

export { mediumCardSlider, mainBannerSlider };
