import React, { useState, useEffect } from "react";
import "../css/dropdown.css";
import arrow from "../../assets/black_arrow.svg";

export const Dropdown = ({ Text, Data }) => {
  const DropdownData = Data.split(",").map((lang) => lang.trim());

  const [isOpen, setIsOpen] = useState(false);
  const [lastClicked, setLastClicked] = useState(Text);

  useEffect(() => {
    setLastClicked(Text);
  }, [Text]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const handleOptionClick = (DropDownData) => {
    setLastClicked(DropDownData);
    toggleDropdown();
  };

  return (
    <div className="Dropdown">
      <div className="Parent-dropdown" onClick={toggleDropdown}>
        <p>{lastClicked}</p>
        <img src={arrow} width={"20px"} height={"20px"} alt="" />
      </div>
      {isOpen && (
        <div className="Child-dropdown">
          {DropdownData.map((Data, index) => (
            <div
              key={index}
              className="Dropdown-option"
              onClick={() => handleOptionClick(Data)}
            >
              <p>{Data}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
