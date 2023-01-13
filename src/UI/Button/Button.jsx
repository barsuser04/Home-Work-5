import React from "react";
import "./Button.css";

const Button = ({ onClick, disabled, title }) => {
  return (
    <button className="btn" onClick={onClick} disabled={disabled}>
      {title}
    </button>
  );
};

export default Button;
