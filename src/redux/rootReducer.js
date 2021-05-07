import { combineReducers } from "redux";
import authReducer from "./reducer/auth";
import drinkReducer from "./reducer/drink";


const rootReducer = combineReducers({
  auth: authReducer,
  drink: drinkReducer,
});

export default rootReducer;
