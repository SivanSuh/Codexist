import React from "react";
import { FieldErrors, FieldValues, UseFormRegister} from "react-hook-form"

export default interface InputProps {
    placeholder:string;
    type?: "text" | "password" | "number"
    onChange?:(e:any) => void
    name:string
    register:UseFormRegister<FieldValues>
    errors?:FieldErrors | undefined | React.ReactNode | any
    required?:boolean
}