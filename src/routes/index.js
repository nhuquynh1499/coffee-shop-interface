import React from "react";
import { Switch, Route } from "react-router-dom";
import LoginPage from "../pages/loginpage";
import SignupPage from "../pages/signuppage";
import HomePage from "../pages/homepage";

const routes =  () => {
  return (
    <Switch>
      <Route exact path="/login" component={LoginPage} />
      <Route exact path="/signup" component={SignupPage} />
      <Route exact path="/" component={HomePage} />
    </Switch>   
  );
}

export default routes;