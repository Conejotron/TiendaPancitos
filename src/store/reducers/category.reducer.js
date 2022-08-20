import { CATEGORIES } from "../../constants/data/categories";

const initialState = {
  categories: CATEGORIES,
  selected: null,
};

const categoryReducer = (state = initialState, action) => {
  return state;
};

export default categoryReducer;