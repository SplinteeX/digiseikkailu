import React from "react";
import "../css/floatInput.css";
const floatInput = ({ value, setValue, Type, text }) => {
  return (
    <div className="field-holder">
      <input
        type={Type}
        id={Type}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={text}
      />
      <label htmlFor={Type}>{text}</label>
    </div>
  );
};

export default floatInput;
