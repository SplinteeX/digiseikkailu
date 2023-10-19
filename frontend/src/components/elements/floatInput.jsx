import React from "react";
import "../css/floatInput.css";
const floatInput = ({ value, setValue, Type, text }) => {
  return (
    <div className="field-holder">
      <form method="post">
        <input
          type={Type}
          id={text}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder={text}
        />
        <label htmlFor={Type}>{text}</label>
      </form>
    </div>
  );
};

export default floatInput;
