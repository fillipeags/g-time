/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';

const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
  <>
    <IoIosArrowBack
      {...props}
      color="white"
      aria-disabled={currentSlide === slideCount - 1}
    />
  </>
);

const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
  <>
    <IoIosArrowForward
      {...props}
      color="white"
      aria-disabled={currentSlide === slideCount - 1}
    />
  </>
);

const mainBannerSlider = {
  slidesToScroll: 1,
  // infinite: true,
  speed: 600,
  slidesToShow: 1,
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

const mediumCardSlider = {
  slidesToScroll: 1,
  // infinite: true,
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
