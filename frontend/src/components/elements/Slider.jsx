import React, { useState, useEffect, useRef } from "react";

export const Slider = ({ data }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [timer, setTimer] = useState(null);
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  const startTimer = () => {
    const newTimer = setTimeout(() => {
      const newIndex = currentIndex === data.length - 1 ? 0 : currentIndex + 1;
      setCurrentIndex(newIndex);
    }, 10000);
    setTimer(newTimer);
  };

  const resetTimer = () => {
    if (timer) {
      clearTimeout(timer);
      startTimer();
    }
  };

  const nextSlide = () => {
    const newIndex = currentIndex === data.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    resetTimer();
  };

  const prevSlide = () => {
    const newIndex = currentIndex === 0 ? data.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    resetTimer();
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current - touchEndX.current > 50) {
      nextSlide();
    } else if (touchEndX.current - touchStartX.current > 50) {
      prevSlide();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  useEffect(() => {
    startTimer();
    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [currentIndex]);

  return (
    <div
      className="Slider"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <button className={"Control"} onClick={prevSlide}>
        <img src="/src/assets/arrow-left.svg" alt="" />
      </button>
      <div className="Slider-content">
        <div className="Slide">
          <img src={data[currentIndex].kuva} alt="" />
          <p>{data[currentIndex].kuvaus}</p>
        </div>
        <div className="Slider-buttons">
          {data.map((item, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={
                currentIndex === index ? "active-button" : "not-active"
              }
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
      <button className={"Control"} onClick={nextSlide}>
        <img src="/src/assets/arrow-right.svg" alt="" />
      </button>
    </div>
  );
};
