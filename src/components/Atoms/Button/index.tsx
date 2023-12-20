import React, { FC } from "react";
import ButtonProps from "./props";
import Style from "./style.module.css";

const Button: FC<ButtonProps> = ({ title, type = "button", onClick }) => {
  return (
    <button className={Style.button} type={type} onClick={onClick}>
      {title}
    </button>
  );
};
export default Button;
