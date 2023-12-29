import { useState, useRef } from "react";

export const FancySectionSlider = ({ data }) => {
  const [selectedSection, setSelectedSection] = useState(0);
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0);
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  const handleSectionClick = (index) => {
    if (selectedSection === index) {
      setSelectedSection(null);
    } else {
      setSelectedSection(index);
      setSelectedCategoryIndex(0);
    }
  };

  const handleNextCategory = () => {
    const categoryCount = 4;
    setSelectedCategoryIndex((prevIndex) => (prevIndex + 1) % categoryCount);
  };

  const handlePreviousCategory = () => {
    const categoryCount = 4;
    setSelectedCategoryIndex(
      (prevIndex) => (prevIndex - 1 + categoryCount) % categoryCount
    );
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current && touchEndX.current) {
      const difference = touchStartX.current - touchEndX.current;
      if (Math.abs(difference) > 50) {
        if (difference > 0) {
          handleNextCategory();
        } else {
          handlePreviousCategory();
        }
      }
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  const renderContent = () => {
    if (selectedSection === null) {
      return (
        <div className="Section active">
          <h3>{Object.keys(data[0])[selectedCategoryIndex + 1]}:</h3>
          <ul>
            {Object.values(data[0])[selectedCategoryIndex + 1].map(
              (skill, skillIndex) => (
                <li key={skillIndex}>{skill}</li>
              )
            )}
          </ul>
          <div className="NavigationButtons">
            <button onClick={handlePreviousCategory}>Previous</button>
            <button onClick={handleNextCategory}>Next</button>
          </div>
          <div className="Current">{selectedCategoryIndex + 1} / 4</div>
        </div>
      );
    }

    return data.map((section, index) => (
      <div
        key={index}
        className={`Section ${selectedSection === index ? "active" : ""}`}
      >
        {selectedSection === index && (
          <>
            <h3>
              {Object.keys(section)
                [selectedCategoryIndex + 1].replace(/([A-Z])/g, " $1")
                .trimStart()}
            </h3>
            <ul>
              {Object.values(section)[selectedCategoryIndex + 1].map(
                (skill, skillIndex) => (
                  <li key={skillIndex}>{skill}</li>
                )
              )}
            </ul>
            <div className="End-section">
              <div className="NavigationButtons">
                <button onClick={handlePreviousCategory}>Edellinen</button>
                <button onClick={handleNextCategory}>Seuraava</button>
              </div>
              <div className="Current">{selectedCategoryIndex + 1} / 4</div>
            </div>
          </>
        )}
      </div>
    ));
  };

  return (
    <div
      className="Section-slider"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="Titles">
        {data.map((section, index) => (
          <h2
            key={index}
            className={selectedSection === index ? "active" : ""}
            onClick={() => handleSectionClick(index)}
          >
            {section.title}
          </h2>
        ))}
      </div>
      <div className="Content-section">{renderContent()}</div>
    </div>
  );
};
