import { combineReducers } from "redux";
import listAdminReducer from "../admin/categories/reducers/listAdminReducer";
import staffAdminReducer from "../admin/employees/reducers/staffAdminReducer";
import eventAdminReducer from "../admin/events/reducers/eventAdminReducer";
import feedbackAdminReducer from "../admin/feedbacks/reducers/feedbackAdminReducer";
import menuAdminReducer from "../admin/menus/reducers/menuAdminReducer";
import orderAdminReducer from "../admin/orders/reducers/orderAdminReducer";
import roleAdminReducer from "../admin/roles/reducers/roleAdminReducer";
import salaryAdminReducer from "../admin/salary/reducers/salaryAdminReducer";
import userAdminReducer from "../admin/users/reducers/userAdminReducer";
import authReducer from "./reducer/auth";
import cartReducer from "./reducer/cart";
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
  salaryAdmin: salaryAdminReducer,
  roleAdmin: roleAdminReducer,
  cart: cartReducer,
});

export default rootReducer;
