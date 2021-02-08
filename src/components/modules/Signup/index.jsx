import React, { useState, useEffect } from "react";
// import { Link, useHistory } from "react-router-dom";
// import axios from "axios";
import logo from "../../../assets/images/commons/logo_lagre.png";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
import { Form, Formik } from "formik";
import { Link } from "react-router-dom";

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
                  <div class="flex-center mb-12">
                    <input
                      class="input fs-14"
                      name="name"
                      type="text"
                      placeholder="Fullname"
                    />
                  </div>
                  <div class="flex-center mb-12">
                    <input
                      class="input fs-14"
                      name="phone"
                      type="text"
                      placeholder="Phone number"
                    />
                  </div>
                  <div class="flex-center mb-12">
                    <input
                      class="input fs-14"
                      name="address"
                      type="text"
                      placeholder="Address"
                    />
                  </div>
                  <label class="group-checkbox flex-center mb-32">
                    <input type="checkbox" />
                    <span class="checkmark"></span>
                    <span class="fs-12 pl-4">
                      I accept the Terms of Use & Privacy Policy.
                    </span>
                  </label>
                  <button class="c-btn bg-blue-btn fs-14 text-white text-bold mb-15">
                    Signup
                  </button>
                </Form>
              );
            }}
          </Formik>
          <div class="flex-center fs-14">
            <span class="flex-center flex-gap">
              Already have an account?
              <Link to="/login" class="text-bold text-blue ml-5">
                Login here
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
