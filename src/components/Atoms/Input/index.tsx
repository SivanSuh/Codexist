import React, { FC } from "react";
import Style from "./style.module.css";
import InputProps from "./props";

const Input: FC<InputProps> = ({ placeholder, type, onChange }) => {
  return (
    <input
      placeholder={placeholder}
      type={type}
      onChange={onChange}
      className={Style.input}
    />
  );
};

export default Input;
