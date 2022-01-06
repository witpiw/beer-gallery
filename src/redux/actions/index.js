import axios from "axios";

export const fetchBeers = () => async (dispatch, getState) => {
  let error = false;
  const res = await axios
    .get(`https://api.punkapi.com/v2/beers?page=${getState().page}&per_page=15`)
    .catch(() => (error = true));
  dispatch({ type: "FETCH_BEERS", payload: { data: res.data, error } });
};

export const resetBeers = () => {
  return {
    type: "RESET_BEERS",
    payload: {
      data: [],
      error: false,
    },
  };
};

export const changePage = (page) => {
  return {
    type: "CHANGE_PAGE",
    payload: page,
  };
};

export const showModal = (details) => {
  return {
    type: "SHOW_MODAL",
    payload: details,
  };
};

export const hideModal = () => {
  return {
    type: "HIDE_MODAL",
    payload: false,
  };
};
