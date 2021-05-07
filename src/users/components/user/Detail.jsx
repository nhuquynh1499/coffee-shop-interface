import React, { useState } from 'react';
import { Link } from "react-router-dom";

import { Button, Card, makeStyles, TextField } from '@material-ui/core';

import { useFormik } from 'formik';
import * as yup from 'yup';
import { useSelector } from 'react-redux';

const useStyles = makeStyles({
  root: {
    maxWidth: 600,
    margin: 'auto',
    marginBottom: 20
  },
  input: {
    width: '100%',
    marginTop: 10,
    marginBottom: 10
  },
  button: {
    textTransform: "capitalize",
    marginLeft: 10,
    minWidth: 100
  }
});

const validationSchema = yup.object({
  username: yup
    .string('Enter your username')
    .required('Username is required'),
  password: yup
    .string('Enter your password')
    // .min(6, 'Password should be of minimum 6 characters length')
    .required('Password is required'),
});

export default function UserDetail() {
  const classes = useStyles();
  const [isEdit, setIsEdit] = useState(false);
  const infor = useSelector((state) => state.auth.infor);

  const formik = useFormik({
    initialValues: {
      username: infor.username || '',
      phone: infor.phone || '',
      address: infor.address || ''
    },
    // validationSchema: validationSchema,
    onSubmit: values => {
      console.log(values);
    },
  });

  return (
    <div className="user-detail">
      <div className="mt-30 container">
        <Card className={classes.root}>
          <h1 className="text-center mt-20">User detail</h1>
          <form onSubmit={formik.handleSubmit} className="p-20">
            <p>{ JSON.stringify(infor) }</p>
            <TextField 
              id="outlined-basic" 
              label="Username" 
              variant="outlined" 
              defaultValue={formik.values.username} 
              value={formik.values.username}
              onChange={formik.handleChange}
              className={classes.input}
              InputProps={{
                readOnly: !isEdit,
              }}
            />
            <TextField 
              id="outlined-basic" 
              label="Phone number" 
              variant="outlined" 
              defaultValue={formik.values.phone} 
              value={formik.values.phone}
              onChange={formik.handleChange}
              className={classes.input}
              InputProps={{
                readOnly: !isEdit,
              }}
            />
            <TextField 
              id="outlined-basic" 
              label="Address" 
              variant="outlined" 
              defaultValue={formik.values.address} 
              value={formik.values.address}
              onChange={formik.handleChange}
              className={classes.input}
              InputProps={{
                readOnly: !isEdit,
              }}
            />
            <div className="flex-right mt-10">
              <Link to="/user/change-password">
                <Button className={classes.button} variant="contained">Change Password</Button>
              </Link>
              { !isEdit && 
                <Button className={classes.button} onClick={() => setIsEdit(true)} variant="contained" color="primary">Edit information</Button> ||
                <Button className={classes.button} variant="contained" color="primary" type="submit">Submit</Button>
              }
            </div>
          </form>
        </Card>
      </div>
    </div>
  );
}