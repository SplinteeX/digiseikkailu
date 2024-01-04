import React from "react";

const Input = ({ text, value, onChange, type, placeholder }) => {
  return (
    <div>
      <p>{text}</p>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
