import React from "react";
import { Carousel } from "./styles";

const Slideshow = ({ images }) => {
  const renderSlides = () => {
    return images.links.map(image => (
      <div key={image}>
        <img
          src={image}
          loader={<div>Loading</div>}
          unloader={<div>Error</div>}
          alt={image}
        />
      </div>
    ));
  };

  return (
    <Carousel
      infiniteLoop={true}
      interval={5000}
      autoPlay={true}
      showArrows={true}
    >
      {renderSlides()}
    </Carousel>
  );
};

export default Slideshow;
