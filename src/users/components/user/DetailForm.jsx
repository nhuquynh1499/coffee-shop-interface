import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Button, makeStyles, TextField } from '@material-ui/core';
import { useFormik } from 'formik';
import * as yup from 'yup';

const useStyles = makeStyles({
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
  phone: yup
    .string('Enter your phone number')
    .required('Phone number is required'),
  address: yup
    .string('Enter your address')
    .required('Address is required'),
});

export default function UserDetail(props) {
  const classes = useStyles();
  const [isEdit, setIsEdit] = useState(false);
  const { infor } = props;

  const formik = useFormik({
    initialValues: {
      ...infor,
    },
    validationSchema: validationSchema,
    onSubmit: values => {
      console.log(values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="p-20">
      <TextField 
        label="Username" 
        variant="outlined" 
        name="username"
        value={formik.values.username}
        onChange={formik.handleChange}
        className={classes.input}
        InputProps={{
          readOnly: true,
        }}
      />
      <TextField 
        label="Phone number" 
        variant="outlined" 
        name="phone"
        value={formik.values.phone}
        onChange={formik.handleChange}
        className={classes.input}
        error={formik.touched.phone && Boolean(formik.errors.phone)}
        helperText={formik.touched.phone && formik.errors.phone}
        InputProps={{
          readOnly: !isEdit,
        }}
      />
      <TextField 
        label="Address" 
        variant="outlined" 
        name="address"
        value={formik.values.address}
        onChange={formik.handleChange}
        className={classes.input}
        error={formik.touched.address && Boolean(formik.errors.address)}
        helperText={formik.touched.address && formik.errors.address}
        InputProps={{
          readOnly: !isEdit,
        }}
      />
      <div className="flex-right mt-10">
        { !isEdit && 
          <Link to="/user/change-password"><Button className={classes.button} variant="contained">Change Password</Button></Link> ||
          <Button className={classes.button} variant="contained"  onClick={() => setIsEdit(false)}>Cancel</Button>
        }
          
        { !isEdit && 
          <Button className={classes.button} onClick={() => setIsEdit(true)} variant="contained" color="primary">Edit information</Button> ||
          <Button className={classes.button} variant="contained" color="primary" type="submit">Submit</Button>
        }
      </div>
    </form>
  );
}