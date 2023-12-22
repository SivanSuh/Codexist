import React, { FC } from "react";
import ButtonProps from "./props";
import Style from "./style.module.css";

const Button: FC<ButtonProps> = ({
  title,
  type = "button",
  onClick,
  bgColor = "#2B3A42",
  disabled = false,
}) => {
  return (
    <button
      className={Style.button}
      style={{ backgroundColor: bgColor }}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {title}
    </button>
  );
};
export default Button;
