import React, { FC } from "react";
import Style from "./style.module.css";
import InputProps from "./props";

const Input: FC<InputProps> = ({
  placeholder,
  type,
  required,
  onChange,
  name,
  register,
  errors,
}) => {
  return (
    <main className={Style.inputContainer}>
      <input
        placeholder={placeholder}
        type={type}
        {...register(name, { required })}
        name={name}
        onChange={onChange}
        className={Style.input}
      />
      {errors?.[name] && (
        <p className="text-red-500 text-center text-sm">
          {errors?.[name].message}
        </p>
      )}
    </main>
  );
};

export default Input;
