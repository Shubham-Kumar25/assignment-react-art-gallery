import React, { useState } from "react";
import { FaStar, FaStarHalf, FaRegStar } from "react-icons/fa";
import { GrNext, GrPrevious } from "react-icons/gr";
import paintings from "./PaintingData";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? paintings.length - 3 : prevIndex - 3
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === paintings.length - 3 ? 0 : prevIndex + 3
    );
  };

  const visibleCards = paintings.slice(currentIndex, currentIndex + 3);

  const renderRatingStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (rating >= i + 1) {
        stars.push(<FaStar key={i} className="text-yellow-500" />);
      } else if (rating > i) {
        stars.push(<FaStarHalf key={i} className="text-yellow-500" />);
      } else {
        stars.push(<FaRegStar key={i} className="text-yellow-500" />);
      }
    }
    return stars;
  };

  return (
    <div className="relative items-center justify-center w-[640px] h-52">
      <div className="flex items-center justify-center">
        <div className="flex w-full h-52">
          {visibleCards.map((painting, index) => (
            <div
              key={index}
              className="w-[200px] mx-2 h-52 rounded-lg hover:scale-105 transition-transform hover:shadow-md cursor-pointer"
            >
              <img
                src={painting.image}
                alt={painting.name}
                className="object-cover w-full h-32 rounded-lg"
              />
              <div className="mt-2 text-sm font-semibold text-start">
                {painting.name}
              </div>
              <div className="flex justify-between mt-1">
                <div className="text-xl font-bold text-start">
                  {painting.price}
                </div>
                <div className="flex items-center text-xl font-bold text-start">
                  {renderRatingStars(painting.rating)}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div
          className="absolute left-0 transform -translate-y-1/2 cursor-pointer top-1/2"
          onClick={handlePrevious}
        >
          <GrPrevious className="w-8 h-8 hover:text-gray-800" />
        </div>
        <div
          className="absolute right-0 transform -translate-y-1/2 cursor-pointer top-1/2"
          onClick={handleNext}
        >
          <GrNext className="w-8 h-8 hover:text-gray-800" />
        </div>
      </div>
    </div>
  );
};

export default Carousel;
