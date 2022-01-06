import { useEffect } from "react";
import { connect } from "react-redux";
//components
import Pager from "../Pager/Pager";
import BeerCard from "../BeerCard/BeerCard";
import Loader from "../Loader/Loader";
import Modal from "../Modal/Modal";
//actions
import { fetchBeers } from "../../redux/actions";
//styles
import "./Main.scss";
//images
import defaultImage from "../../images/beer-bottle.png";

const Main = ({ page, fetchBeers, ...props }) => {
  useEffect(() => {
    fetchBeers(page);
  }, [page, fetchBeers]);

  const renderBeerCards = () => {
    return props.beers.data.map(({ id, image_url, name, description }) => (
      <BeerCard
        description={description}
        name={name}
        key={id}
        id={id}
        img={image_url || defaultImage}
      />
    ));
  };

  const renderContent = () => {
    if (props.beers.error === false && props.beers.data.length === 0) {
      return <Loader />;
    }
    if (props.beers.error === false && props.beers.data.length !== 0) {
      return renderBeerCards();
    } else {
      return (
        <p>
          Something went wrong :( <br />
          Please try again later
        </p>
      );
    }
  };

  return (
    <>
      {props.modal && <Modal {...props.modal} />}
      <main>{renderContent()}</main>
      <Pager />
    </>
  );
};

const mapStateToProps = (state) => {
  return { beers: state.beers, page: state.page, modal: state.modal };
};

export default connect(mapStateToProps, {
  fetchBeers,
})(Main);
