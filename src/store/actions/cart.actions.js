import { URL_API } from "../../constants/firebase";
import { cartTypes } from "../types";

const { ADD_ITEM, REMOVE_ITEM, CONFIRM_CART } = cartTypes;

export const addItem = (item) => ({
  type: ADD_ITEM,
  item,
});

export const removeItem = (id) => ({
  type: REMOVE_ITEM,
  id,
});

export const confirmCart = (items, total) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${URL_API}/orders.json`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          date: Date.now(),
          items,
          total,
        }),
      });

      const result = await response.json();
      console.warn(result);
      dispatch({
        type: CONFIRM_CART,
        confirm: true,
      });
    } catch (error) {
      console.warn(error);
    }
  };
};