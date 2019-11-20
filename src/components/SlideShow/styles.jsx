import styled from "styled-components";

import { Carousel as ResponsiveCarousel } from "react-responsive-carousel";

import "react-responsive-carousel/lib/styles/carousel.min.css";

export const Carousel = styled(ResponsiveCarousel)`
  .thumbs-wrapper {
    display: none;
  }

  .carousel .control-dots {
    display: none;
  }
`;
