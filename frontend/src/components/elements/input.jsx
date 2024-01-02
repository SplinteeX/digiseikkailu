import React from "react";

const Input = ({ text, value, onChange }) => {
  return (
    <div>
      <p>{text}</p>
      <input type="text" value={value} onChange={onChange} />
    </div>
  );
};

export default Input;
