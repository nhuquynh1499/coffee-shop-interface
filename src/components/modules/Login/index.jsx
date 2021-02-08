import React, { useState, useEffect } from "react";
// import { Link, useHistory } from "react-router-dom";
// import axios from "axios";
import logo from "../../../assets/images/commons/logo_lagre.png";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
import { Form, Formik } from "formik";

export default function Login(props) {
  // const [canSubmit, setCanSubmit] = useState(false);
  const handleSubmit = (values) => {
    // axios.post("https://api-expense-tracker-codersx.herokuapp.com/api/login", values).then((res) => {
    // console.log(res);
    // localStorage.setItem("token", res.data.token);
    //     localStorage.setItem("userId", res.data.userId);
    //     history.push("/");
    // }).catch((error) => {
    // toast.error("Invalid username or password");
    // });
  };

  const initialValues = {
    email: "",
    password: "",
  };

  return (
    <div className="auth">
      {/* <ToastContainer /> */}
      <div className="wrapped flex-column pt-30 pb-30">
        <div className="logo">
          <div className="image">
            <img className="logo" src={logo} alt="logo" />
          </div>
        </div>

        <div className="box">
          <div className="pt-10 pb-10">
            <h2 className="text-center">A cup of coffee</h2>
            <h2 className="text-center">A cup for new day</h2>
          </div>
          <Formik initialValues={initialValues} onSubmit={handleSubmit}>
            {(formikProps) => {
              const { values, errors, touched } = formikProps;
              console.log({ values, touched, errors });

              return (
                <Form>
                  <div class="flex-center mb-12">
                    <input
                      class="input fs-14"
                      type="email"
                      placeholder="Username"
                    />
                  </div>
                  <div class="flex-center mb-12">
                    <input
                      class="input fs-14"
                      type="password"
                      placeholder="Password"
                    />
                  </div>
                  <label class="group-checkbox flex-center mb-32">
                    <input type="checkbox" />
                    <span class="checkmark"></span>
                    <span class="fs-12 pl-4">Remember me?</span>
                  </label>
                  <button class="c-btn bg-blue-btn fs-14 text-white text-bold mb-15">
                    Login
                  </button>
                </Form>
              );
            }}
          </Formik>
          <div class="flex-center fs-14">
            <span class="flex-center flex-gap">
              Not a member?
              <button type="button" class="text-bold ml-0">
                Signup now
              </button>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
