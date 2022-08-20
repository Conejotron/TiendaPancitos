import { categoryReducer, productsReducer } from "./reducers/index";
import { combineReducers, createStore } from "redux";

const rootReducer = combineReducers({
  products: productsReducer,
  category: categoryReducer,
});

export default createStore(rootReducer);