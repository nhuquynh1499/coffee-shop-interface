import React from "react";
import { BrowserRouter as Switch, Route } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import SignupPage from "../pages/SignupPage";
import Admin from "../admin/Admin";
import Menu from "../admin/menus/pages/Menu";

export default function () {
  return (
    <Switch>
      <Route path="/login" component={LoginPage} />
      <Route path="/signup" component={SignupPage} />
      <Route path="/admin" component={Admin} />
      <Route path="/menus" component={Menu} />
    </Switch>   
  );
}
