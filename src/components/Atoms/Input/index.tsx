import React, { FC } from "react";
import Style from "./style.module.css";
import InputProps from "./props";

const Input: FC<InputProps> = ({ placeholder, type }) => {
  return (
    <input placeholder={placeholder} type={type} className={Style.input} />
  );
};

export default Input;
