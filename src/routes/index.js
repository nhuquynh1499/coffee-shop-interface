import React from "react";
import { Switch, Route } from "react-router-dom";
import LoginPage from "../users/pages/LoginPage";
import SignupPage from "../users/pages/SignupPage";
import HomePage from "../users/pages/HomePage";

import Admin from "../admin/Admin";
import Menu from "../admin/menus/pages/Menu";
import EmployeePage from "../admin/employees/pages/EmployeePage";
import UserPage from "../admin/users/pages/UserPage";
import SalaryPage from "../admin/salary/pages/SalaryPage";
import SchedulePage from "../admin/schedules/pages/SchedulePage";
import CategoryPage from "../admin/categories/pages/CategoryPage";
import FeedbackPage from "../admin/feedbacks/pages/FeedbackPage";
import OrderPage from "../admin/orders/pages/OrderPage";
import EventPage from "../admin/events/pages/EventPage";

import MenuPage from "../users/pages/MenuPage";
import ConfirmOrderPage from "../users/pages/ConfirmOrderPage";
import UserDetailPage from "../users/pages/UserDetailPage";
import UserChangePasswordPage from "../users/pages/UserChangePasswordPage";
import { PrivateRoute } from "./PrivateRoute";
import RolePage from "../admin/roles/pages/RolePage";

const routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/signup" component={SignupPage} />
      <PrivateRoute path="/menu" component={MenuPage} />
      <PrivateRoute path="/order" component={ConfirmOrderPage} />
      <PrivateRoute exact path="/user/detail" component={UserDetailPage} />
      <PrivateRoute
        exact
        path="/user/change-password"
        component={UserChangePasswordPage}
      />

      <Route path="/admin/summary" component={Admin} />
      <Route path="/admin/menu" component={Menu} />
      <Route path="/admin/employees" component={EmployeePage} />
      <Route path="/admin/users" component={UserPage} />
      <Route path="/admin/salary" component={SalaryPage} />
      <Route path="/admin/schedule" component={SchedulePage} />
      <Route path="/admin/categories" component={CategoryPage} />
      <Route path="/admin/feedbacks" component={FeedbackPage} />
      <Route path="/admin/events" component={EventPage} />
      <Route path="/admin/orders" component={OrderPage} />
      <Route path="/admin/roles" component={RolePage} />
    </Switch>
  );
};

export default routes;
