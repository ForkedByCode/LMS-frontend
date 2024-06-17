import React, { useState } from "react";
import InfoCard from "./InfoCard";
import "./Slider.css"; // Assuming your CSS is in this file

function Slider() {
  const cardsList = [1, 2, 3, 4, 5];

  const [slideIndex, setSlideIndex] = useState(0);

  const nextSlide = () => {
    slideIndex !== cardsList.length
      ? setSlideIndex(slideIndex + 1)
      : setSlideIndex(0);
    console.log(slideIndex);
  };

  const prevSlide = () => {
    slideIndex !== 0
      ? setSlideIndex(slideIndex - 1)
      : setSlideIndex(cardsList.length);
    console.log(slideIndex);
  };

  return (
    <div className="slider-container">
      <div
        className="slider-wrapper"
        style={{ transform: `translateX(-${slideIndex * 100}%)` }}
      >
        {cardsList.map((_, index) => {
          return (
            <div className="slide" key={index}>
              <InfoCard prevSlide={prevSlide} nextSlide={nextSlide} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Slider;
