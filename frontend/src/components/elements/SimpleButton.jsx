import React from "react";
import { motion } from "framer-motion";

export const SimpleButton = ({ text, active, onClick }) => {
  const buttonStyles = {
    backgroundColor: "#70B2FF",
    color: "white",
    width: "175px",
    height: "100%",
    minHeight: "35px",
    border: "none",
    padding: "10px 20px",
    borderRadius: "20px",
    cursor: "pointer",
    textAlign: "center",
    fontSize: "16px",
    fontFamily: "Montserrat, sans-serif",
    fontWeight: "800",
    lineHeight: "normal",
  };

  const activeStyles = {
    ...buttonStyles,
    backgroundColor: active ? "#70B2FF" : "#D9D9D9",
    color: active ? "white" : "black",
  };

  const buttonVariants = {
    initial: { scale: 0.8 },
    animate: { scale: 1 },
  };

  return (
    <motion.button
      style={{ ...activeStyles }}
      className={`className="Simple-button" ${active ? "active" : ""}`}
      onClick={onClick}
      variants={buttonVariants}
      initial="initial"
      animate="animate"
    >
      {text}
    </motion.button>
  );
};
