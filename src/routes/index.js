import React from "react";
import { Switch, Route } from "react-router-dom";
import LoginPage from "../share/pages/LoginPage";
import SignupPage from "../share/pages/SignupPage";
import HomePage from "../share/pages/HomePage";
import Admin from "../admin/Admin";
import Menu from "../admin/menus/pages/Menu";
import EmployeePage from "../admin/employees/pages/EmployeePage";
import UserPage from "../admin/users/pages/UserPage";
import SalaryPage from "../admin/salary/pages/SalaryPage";
import SchedulePage from "../admin/schedules/pages/SchedulePage";
import CategoryPage from "../admin/categories/pages/CategoryPage";
import MenuPage from "../users/pages/MenuPage";

const routes =  () => {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/signup" component={SignupPage} />
      <Route path="/menu" component={MenuPage} />
      <Route path="/admin/summary" component={Admin} />
      <Route path="/admin/menu" component={Menu} />
      <Route path="/admin/employee" component={EmployeePage} />
      <Route path="/admin/user" component={UserPage} />
      <Route path="/admin/salary" component={SalaryPage} />
      <Route path="/admin/schedule" component={SchedulePage} />
      <Route path="/admin/categories" component={CategoryPage} />
    </Switch>   
  );
}

export default routes;