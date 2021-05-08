import { combineReducers } from "redux";
import authReducer from "./reducer/auth";
import drinkReducer from "./reducer/drink";
import cartReducer from "./reducer/cart";

const rootReducer = combineReducers({
  auth: authReducer,
  drink: drinkReducer,
  cart: cartReducer,
});

export default rootReducer;
