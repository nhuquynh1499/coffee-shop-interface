import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Admin from "../admin/Admin";
import AdminLoginPage from "../admin/login/pages/Login";
import AdminInforPage from "../admin/infor/pages/Infor";
import AdminMenuPage from "../admin/menus/pages/Menu";
import EmployeePage from "../admin/employees/pages/EmployeePage";
import UserPage from "../admin/users/pages/UserPage";
import SalaryPage from "../admin/salary/pages/SalaryPage";
import SchedulePage from "../admin/schedules/pages/SchedulePage";
import CategoryPage from "../admin/categories/pages/CategoryPage";
import FeedbackPage from "../admin/feedbacks/pages/FeedbackPage";
import OrderPage from "../admin/orders/pages/OrderPage";
import EventPage from "../admin/events/pages/EventPage";

import Salary from '../employee/pages/Salary';
import Calendar from '../employee/pages/Calendar';

import LoginPage from "../users/pages/LoginPage";
import SignupPage from "../users/pages/SignupPage";
import HomePage from "../users/pages/HomePage";
import MenuPage from "../users/pages/MenuPage";
import ConfirmOrderPage from "../users/pages/ConfirmOrderPage";
import UserDetailPage from "../users/pages/UserDetailPage";
import UserChangePasswordPage from "../users/pages/UserChangePasswordPage";
import UserHistoryOrder from "../users/pages/UserHistoryOrder";

import NotFound from "../components/NotFound";

import { PrivateRoute } from "./PrivateRoute";
import RolePage from "../admin/roles/pages/RolePage";


const routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/signup" component={SignupPage} />
      <Route path="/menu" component={MenuPage} />
      <PrivateRoute path="/order" component={ConfirmOrderPage} />
      <PrivateRoute exact path="/user/detail" component={UserDetailPage} />
      <PrivateRoute exact path="/user/change-password" component={UserChangePasswordPage} />
      <PrivateRoute exact path="/user/history-order" component={UserHistoryOrder} />
      
      <Redirect exact from="/admin" to="/admin/summary" />
      <PrivateRoute path="/admin/summary" component={Admin} />
      <PrivateRoute path="/admin/menu" component={AdminMenuPage} />
      <PrivateRoute path="/admin/employees" component={EmployeePage} />
      <PrivateRoute path="/admin/users" component={UserPage} />
      <PrivateRoute path="/admin/salary" component={SalaryPage} />
      <PrivateRoute path="/admin/schedule" component={SchedulePage} />
      <PrivateRoute path="/admin/categories" component={CategoryPage} />
      <PrivateRoute path="/admin/feedbacks" component={FeedbackPage} />
      <PrivateRoute path="/admin/events" component={EventPage} />
      <PrivateRoute path="/admin/orders" component={OrderPage} />
      <PrivateRoute path="/admin/roles" component={RolePage} />
      <PrivateRoute path="/admin/login" component={AdminLoginPage} />
      <PrivateRoute path="/admin/infor" component={AdminInforPage} />

      <Route path="/employee/:employeeId/salary" component={Salary} />
      <Route path="/employee/:employeeId/calendar" component={Calendar} />
      
      <Route path="*" component={NotFound} />
    </Switch>
  );
};

export default routes;
