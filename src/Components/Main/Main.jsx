import { useEffect, useState } from "react";
//components
import Pager from "../Pager/Pager";
import BeerCard from "../BeerCard/BeerCard";
import Loader from "../Loader/Loader";
//api
import fetchBeers from "../../Api/punkApi";
//styles
import "./Main.scss";
//images
import defaultImage from "../../images/beer-bottle.png";

const Main = () => {
  const [beers, setBeers] = useState([]);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetchBeers(page);
        setBeers(res);
        setError(false);
      } catch {
        setError(true);
      }
    };
    fetchData();
  }, [page]);

  const renderBeerCards = () => {
    return beers.map(({ id, image_url, name, description }) => (
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
    if (!error && beers.length !== 0) {
      return renderBeerCards();
    } else if (beers.length === 0 && !error) {
      return <Loader />;
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
      <main>{renderContent()}</main>
      <Pager
        resetBeers={() => setBeers([])}
        changePage={(val) => setPage(val)}
      />
    </>
  );
};

export default Main;
