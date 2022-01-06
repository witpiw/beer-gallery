import { connect } from "react-redux";

import { showModal } from "../../redux/actions";

import "./BeerCard.scss";

const BeerCard = (props) => {
  return (
    <>
      <div id="beerCard">
        <div className="imgContainer">
          <img src={props.img} alt="beer" />
        </div>
        <div className="beerName">{props.name}</div>
        <button className="modalBtn" onClick={() => props.showModal(props)}>
          Find out more
        </button>
      </div>
    </>
  );
};

export default connect(null, {
  showModal,
})(BeerCard);
