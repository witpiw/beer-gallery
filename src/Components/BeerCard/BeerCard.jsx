import { useState } from "react";
import Modal from "../Modal/Modal";

import "./BeerCard.scss";

const BeerCard = (props) => {
  const [showModal, setShowModal] = useState(false);
  const hideModal = () => {
    setShowModal(false);
  };
  return (
    <>
      {showModal && (
        <Modal
          description={props.description}
          img={props.img}
          hide={hideModal}
          name={props.name}
        />
      )}
      <div id="beerCard">
        <div className="imgContainer">
          <img src={props.img} alt="beer" />
        </div>
        <div className="beerName">{props.name}</div>
        <button className="modalBtn" onClick={() => setShowModal(true)}>
          Find out more
        </button>
      </div>
    </>
  );
};

export default BeerCard;
