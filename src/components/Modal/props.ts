import React from "react";

export default interface ModalProps {
    open:boolean;
    close:(e:boolean) => void;
    children:React.ReactNode;
    title:string;
}