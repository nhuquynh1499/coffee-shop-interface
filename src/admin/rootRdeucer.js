import { combineReducers } from "redux";
import listReducer from "./categories/reducers/listReducer";

const rootReducer = combineReducers({
  list: listReducer,
});

export default rootReducer;
