import React from "react";
import InfoCard from "./InfoCard";

function Carousel() {
  const cardsList = [1, 2, 3, 4, 5];

  return (
    <div id="default-carousel" class="relative w-full" data-carousel="slide">
      <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
          {cardsList.map((_, index) => {
            return (
              <InfoCard
                key={index}
                className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Carousel;
