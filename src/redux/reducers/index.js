import { combineReducers } from "redux";

const beerReducer = (state = { data: [], error: false }, action) => {
  if (action.type === "FETCH_BEERS") {
    return action.payload;
  }
  if (action.type === "RESET_BEERS") {
    return action.payload;
  }
  return state;
};

const pageReducer = (state = 1, action) => {
  if (action.type === "CHANGE_PAGE") {
    return action.payload;
  }
  return state;
};

const modalReducer = (state = null, action) => {
  switch (action.type) {
    case "SHOW_MODAL": {
      return action.payload;
    }
    case "HIDE_MODAL": {
      return action.payload;
    }
    default: {
      return state;
    }
  }
};

export default combineReducers({
  beers: beerReducer,
  modal: modalReducer,
  page: pageReducer,
});
