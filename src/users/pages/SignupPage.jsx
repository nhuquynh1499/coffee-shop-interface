import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { sendPostSignup } from "../../redux/action/auth.js";
import Signup from "../components/signup/Signup.jsx";

export default function SignupPage() {
  const dispatch = useDispatch();
  let history = useHistory();
  const status = useSelector((state) => state.auth.status );

  const handleSubmitForm = (payload) => {
    dispatch(sendPostSignup(payload))
  }

  return <Signup handleSubmitForm={handleSubmitForm} status={status}/>;
}
