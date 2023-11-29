import React, { useState } from "react";
import "../css/dropdown.css";
import arrow from "../../assets/black_arrow.svg";

export const Dropdown = ({ Text, Data }) => {
  const languages = Data.split(",").map((lang) => lang.trim());

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="Dropdown">
      <div className="Parent-dropdown" onClick={toggleDropdown}>
        <p>{Text}</p>
        <img fill="#000000" src={arrow} width={"20px"} height={"20px"} alt="" />
      </div>
      {isOpen && (
        <div className="Child-dropdown">
          {languages.map((language, index) => (
            <div key={index} className="Dropdown-option">
              <p>{language}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
