import React, { useEffect } from 'react';
// import { useHistory } from "react-router-dom"
// import { useSelector, useDispatch } from "react-redux";
// import { sendPostLogin } from '../../redux/action/auth';
import LoginForm from '../components/LoginForm';
import logo from "../../../assets/images/commons/logo.png";

export default function LoginPage() {
  // let history = useHistory();
  // const token = useSelector((state) => state.auth.token);

  // const dispatch = useDispatch();

  // useEffect(() => {
  //   if (token) {
  //     history.push("/")
  //   }
  // }, [token]);

  // const handleSubmitForm = (payload) => {
  //   dispatch(sendPostLogin(payload))
  // }

  return (
    <div className="auth">
      <div className="wrapped flex-column pt-30 pb-30">
        <div className="logo">
          <div className="image">
            <img className="logo" src={logo} alt="logo" />
          </div>
        </div>
        <div className="box">
          <div className="pt-10 pb-10">
            <h2 className="text-center">Welcome staff</h2>
          </div>
          <LoginForm 
          // handleSubmitForm={handleSubmitForm}
          />
        </div>
      </div>
    </div>
  );
}