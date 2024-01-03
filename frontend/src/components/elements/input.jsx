import React from "react";

const Input = ({ text, value, onChange, type }) => {
  return (
    <div>
      <p>{text}</p>
      <input type={type} value={value} onChange={onChange} />
    </div>
  );
};

export default Input;
