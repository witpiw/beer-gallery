import axios from "axios";

const fetchBeers = async (page) => {
  const res = await axios.get(
    `https://api.punkapi.com/v2/beers?page=${page}&per_page=15`
  );
  return res.data;
};

export default fetchBeers;
