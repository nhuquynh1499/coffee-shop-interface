import React from "react";
import { Switch, Route } from "react-router-dom";
import LoginPage from "../share/pages/LoginPage";
import SignupPage from "../share/pages/SignupPage";
import HomePage from "../share/pages/HomePage";
import Admin from "../admin/Admin";
import Menu from "../admin/menus/pages/Menu";

const routes =  () => {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/signup" component={SignupPage} />
      <Route path="/admin" component={Admin} />
      <Route path="/menus" component={Menu} />
    </Switch>   
  );
}

export default routes;