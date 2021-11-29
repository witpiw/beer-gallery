import React from "react";
import ReactDOM from "react-dom";
import { ReactComponent as CloseIcon } from "../../images/close.svg";
import "./Modal.scss";

const Modal = (props) => {
  return ReactDOM.createPortal(
    <div id="modal" onClick={() => props.hide()}>
      <div id="beerDetails" onClick={(e) => e.stopPropagation()}>
        <div id="imgContainer">
          <img id="img" src={props.img} alt={props.name} />
        </div>
        <div id="content">
          <div id="modalHeader">
            <h1>{props.name}</h1>
            <button id="close" onClick={() => props.hide()}>
              <CloseIcon />
            </button>
          </div>
          <div id="description">{props.description}</div>
        </div>
      </div>
    </div>,
    document.getElementById("modal-root")
  );
};

export default Modal;
