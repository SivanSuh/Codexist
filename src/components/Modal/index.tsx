import React, { FC } from "react";
import Style from "./style.module.css";
import ModalProps from "./props";

const Modal: FC<ModalProps> = ({ children, close, open, title }) => {
  return (
    <>
      {open && (
        <div className={Style.modal}>
          <div className={Style.popup}>
            <div className={Style.alan}>
              <p>
                <strong>{title}</strong>
              </p>
              <p className={Style.close} onClick={close}>
                X
              </p>
            </div>
            <main className={Style.main}>{children}</main>
          </div>
        </div>
      )}
    </>
  );
};
export default Modal;
