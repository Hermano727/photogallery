import React from "react";

const Modal = ({ selectedImg }) => {
    return (
        <div className="backdrop">
            <img src={selectedImg} alt="pic info"/>
        </div>
    )
}

export default Modal;