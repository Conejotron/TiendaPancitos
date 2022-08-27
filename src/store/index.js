import { applyMiddleware, combineReducers, createStore } from "redux";
import { categoryReducer, productsReducer } from "./reducers/index";

import thunk from "redux-thunk";

const rootReducer = combineReducers({
  products: productsReducer,
  category: categoryReducer,
});

export default createStore(rootReducer, applyMiddleware(thunk));