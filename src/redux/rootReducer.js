import { combineReducers } from "redux";
import listAdminReducer from "../admin/categories/reducers/listAdminReducer";
import staffAdminReducer from "../admin/employees/reducers/staffAdminReducer";
import eventAdminReducer from "../admin/events/reducers/eventAdminReducer";
import menuAdminReducer from "../admin/menus/reducers/menuAdminReducer";
import orderAdminReducer from "../admin/orders/reducers/orderAdminReducer";
import userAdminReducer from "../admin/users/reducers/userAdminReducer";
import feedbackAdminReducer from "../admin/feedbacks/reducers/feedbackAdminReducer";
import authReducer from "./reducer/auth";
import drinkReducer from "./reducer/drink";

const rootReducer = combineReducers({
  auth: authReducer,
  drink: drinkReducer,
  listAdmin: listAdminReducer,
  drinkAdmin: menuAdminReducer,
  staffAdmin: staffAdminReducer,
  userAdmin: userAdminReducer,
  orderAdmin: orderAdminReducer,
  eventAdmin: eventAdminReducer,
  feedbackAdmin: feedbackAdminReducer,
});

export default rootReducer;
