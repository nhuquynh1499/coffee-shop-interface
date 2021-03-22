import React from "react";
import { Link } from "react-router-dom";

import { useFormik } from "formik";
import * as yup from 'yup';
import TextField from '@material-ui/core/TextField';

import logo from "../../../assets/images/commons/logo_lagre.png";

// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
const validationSchema = yup.object().shape({
  username: yup
    .string('Enter your username')
    .required('Username is required'),
  password: yup
    .string('Enter your password')
    .min(6, 'Password should be of minimum 6 characters length')
    .required('Password is required'),
  fullname: yup
    .string('Enter your full name')
    .required('Fullname is required'),
  phone: yup
    .string('Enter your phone number')
    .required('Phone number is required'),
  address: yup
    .string('Enter your address')
    .required('Address is required'),
  isAccept: yup
    .bool()
    .oneOf([true], 'The terms and conditions must be accepted.')
});

export default function Login(props) {
  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
      fullname: '',
      phone: '',
      address: '',
      isAccept: false,
    },
    validationSchema: validationSchema,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
      // axios.post("https://api-expense-tracker-codersx.herokuapp.com/api/login", values).then((res) => {
      // console.log(res);
      // localStorage.setItem("token", res.data.token);
      //     localStorage.setItem("userId", res.data.userId);
      //     history.push("/");
      // }).catch((error) => {
      // toast.error("Invalid username or password");
      // });
    },
  });

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

          <form onSubmit={formik.handleSubmit}>
            <div class="flex-center mb-12">
              <TextField 
                fullWidth 
                variant="outlined" 
                label="Username"
                name="username"
                type="text"
                value={formik.values.username}
                onChange={formik.handleChange}
                error={formik.touched.username && Boolean(formik.errors.username)}
                helperText={formik.touched.username && formik.errors.username}
              />
            </div>
            <div class="flex-center mb-12">
              <TextField 
                fullWidth 
                variant="outlined"
                label="Password" 
                type="password" 
                name="password" 
                value={formik.values.password}
                onChange={formik.handleChange}
                error={formik.touched.password && Boolean(formik.errors.password)}
                helperText={formik.touched.password && formik.errors.password}
              />
            </div>
            <div class="flex-center mb-12">
              <TextField 
                fullWidth 
                variant="outlined" 
                label="Fullname"
                name="fullname"
                type="text"
                value={formik.values.fullname}
                onChange={formik.handleChange}
                error={formik.touched.fullname && Boolean(formik.errors.fullname)}
                helperText={formik.touched.fullname && formik.errors.fullname}
              />
            </div>
            <div class="flex-center mb-12">
              <TextField 
                fullWidth 
                variant="outlined" 
                label="Phone number"
                name="phone"
                type="text"
                value={formik.values.phone}
                onChange={formik.handleChange}
                error={formik.touched.phone && Boolean(formik.errors.phone)}
                helperText={formik.touched.phone && formik.errors.phone}
              />
            </div>
            <div class="flex-center mb-12">
              <TextField 
                fullWidth 
                variant="outlined" 
                label="Address"
                name="address"
                type="text"
                value={formik.values.address}
                onChange={formik.handleChange}
                error={formik.touched.address && Boolean(formik.errors.address)}
                helperText={formik.touched.address && formik.errors.address}
              />
            </div>
            <label class="group-checkbox flex-center mb-32">
              <input 
                type="checkbox" 
                name="isAccept"
                onChange={formik.handleChange} 
                checked={formik.values.isAccept}  
                error={formik.touched.isAccept && Boolean(formik.errors.isAccept)}
                helperText={formik.touched.isAccept && formik.errors.isAccept}
              />
              <span class="checkmark"></span>
              <span class="fs-12 pl-4">I accept the Terms of Use & Privacy Policy.</span>
            </label>
            <button type="submit" class="c-btn bg-blue-btn fs-14 text-white text-bold mb-15">Signup</button>
          </form>
          <div class="flex-center fs-14">
            <span class="flex-center flex-gap">
              Already have an account?
              <Link to="/login" class="text-bold text-blue ml-5">Login here</Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
