import { combineReducers } from "redux";
import listAdminReducer from "../admin/categories/reducers/listAdminReducer";
import staffAdminReducer from "../admin/employees/reducers/staffAdminReducer";
import eventAdminReducer from "../admin/events/reducers/eventAdminReducer";
import feedbackAdminReducer from "../admin/feedbacks/reducers/feedbackAdminReducer";
import inforAdminReducer from "../admin/infor/reducers/inforAdminReducer";
import authAdminReducer from "../admin/login/reducers/authAdminReducer";
import menuAdminReducer from "../admin/menus/reducers/menuAdminReducer";
import orderAdminReducer from "../admin/orders/reducers/orderAdminReducer";
import roleAdminReducer from "../admin/roles/reducers/roleAdminReducer";
import salaryAdminReducer from "../admin/salary/reducers/salaryAdminReducer";
import shiftAdminReducer from "../admin/schedules/reducers/shiftAdminReducer";
import userAdminReducer from "../admin/users/reducers/userAdminReducer";
import authReducer from "./reducer/auth";
import cartReducer from "./reducer/cart";
import drinkReducer from "./reducer/drink";
import orderReducer from "./reducer/order";

const rootReducer = combineReducers({
  auth: authReducer,
  drink: drinkReducer,
  cart: cartReducer,
  order: orderReducer,
  listAdmin: listAdminReducer,
  drinkAdmin: menuAdminReducer,
  staffAdmin: staffAdminReducer,
  userAdmin: userAdminReducer,
  orderAdmin: orderAdminReducer,
  eventAdmin: eventAdminReducer,
  feedbackAdmin: feedbackAdminReducer,
  salaryAdmin: salaryAdminReducer,
  roleAdmin: roleAdminReducer,
  authAdmin: authAdminReducer,
  inforAdmin: inforAdminReducer,
  shiftAdmin: shiftAdminReducer,
});

export default rootReducer;
