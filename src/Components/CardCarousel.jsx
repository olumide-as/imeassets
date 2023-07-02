import React, { useState, useEffect, useRef } from 'react';

const CardCarousel = ({ cards }) => {
  const [translateValue, setTranslateValue] = useState(0);
  const carouselRef = useRef(null);

  const handleNextCards = () => {
    const cardContainer = carouselRef.current;
    const cardContainerWidth = cardContainer.offsetWidth;
    const cardWidth = cardContainerWidth / getVisibleCards();
    const numCards = cards.length;
    const maxTranslateValue = -(cardWidth * numCards);
    const newTranslateValue = translateValue - cardWidth;
    if (newTranslateValue < maxTranslateValue) {
      setTranslateValue(cardWidth); // Set to a negative value to loop back to the beginning
    } else {
      setTranslateValue(newTranslateValue);
    }
  };

  const handlePrevCards = () => {
    const cardContainer = carouselRef.current;
    const cardContainerWidth = cardContainer.offsetWidth;
    const cardWidth = cardContainerWidth / getVisibleCards();
    const newTranslateValue = translateValue + cardWidth;
    if (newTranslateValue > 0) {
      const maxTranslateValue = -(cardWidth * cards.length);
      setTranslateValue(maxTranslateValue);
    } else {
      setTranslateValue(newTranslateValue);
    }
  };

  const getVisibleCards = () => {
    if (window.innerWidth < 640) {
      return 1; // Show one card on mobile view
    } else {
      return 5; // Show five cards on other devices
    }
  };

  return (
    <div className="card-carousel relative">
      <div className="card-carousel__controls top-0 left-0 right-0 flex justify-between p-4">
        <button
          onClick={handlePrevCards}
          className="px-4 py-2 bg-gray-300 rounded font-semibold text-sm hover:bg-gray-400"
        >
          Previous
        </button>
        <button
          onClick={handleNextCards}
          className="px-4 py-2 bg-gray-300 rounded font-semibold text-sm hover:bg-gray-400"
        >
          Next
        </button>
      </div>
      <div className="card-carousel__scroll-container overflow-x-scroll mt-2 shadow-sm">
        <div
          id="card-carousel-container"
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(${translateValue}px)` }}
          ref={carouselRef}
        >
          {cards.map((card, index) => (
            <a
              key={index}
              href={card.link}
              className="card-carousel__card flex-shrink-0 p-4 border border-t-0 rounded-md m-2 text-left w-80"
            >
              <img
                src={card.image}
                alt={card.title}
                className="w-full max-h-48 object-cover mb-4 rounded-md"
              />
              <h3 className="inline-block mb-3 text-xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700">
                {card.title}
              </h3>
              <p className="mb-2 text-gray-700">{card.description}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardCarousel;
