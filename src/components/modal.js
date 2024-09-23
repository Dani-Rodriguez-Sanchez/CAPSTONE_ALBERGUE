import React from "react";
import "../styles/modal.css";
import { IoMdClose } from "react-icons/io";

const Modal = ({ children, estado, cambiarEstado }) => {
  return (
    <>
      {estado && (
        <div className="Overlay">
          <div className="ContenedorModal">
            <div className="BotonCerrar" onClick={() => cambiarEstado(false)}>
              <IoMdClose />
            </div>
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
