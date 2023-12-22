import React from "react";

export default interface ModalProps {
    open:boolean;
    close:() => void;
    children:React.ReactNode;
    title:string;
}