import { useEffect, useState } from "react";
//components
import Pager from "../Pager/Pager";
import BeerCard from "../BeerCard/BeerCard";
//api
import fetchBeers from "../../Api/punkApi";
//styles
import "./Main.scss";
//images
import defaultImage from "../../images/beer-bottle.png";

const Main = () => {
  const [beers, setBeers] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetchBeers(page);
      setBeers(res);
    };
    fetchData();
  }, [page]);

  return (
    <>
      <main>
        {beers.map(({ id, image_url, name, description }) => (
          <BeerCard
            description={description}
            name={name}
            key={id}
            id={id}
            img={image_url || defaultImage}
          />
        ))}
      </main>
      <Pager changePage={(val) => setPage(val)} />
    </>
  );
};

export default Main;
