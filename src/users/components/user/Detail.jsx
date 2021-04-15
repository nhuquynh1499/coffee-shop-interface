import { Button, Card, makeStyles, TextField } from '@material-ui/core';
import { Link } from "react-router-dom";

import React from 'react';

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

export default function UserDetail() {
  const classes = useStyles();

  return (
    <div className="user-detail">
      <div className="mt-30 container">
        <Card className={classes.root}>
          <h1 className="text-center mt-20">User detail</h1>
          <form className="p-20">
            <TextField 
              id="outlined-basic" 
              label="Username" 
              variant="outlined" 
              defaultValue="quynhnnn" 
              className={classes.input}
              InputProps={{
                readOnly: true,
              }}
            />
             <TextField 
              id="outlined-basic" 
              label="Full Name" 
              variant="outlined" 
              defaultValue="Nhu Quynh" 
              className={classes.input}
              InputProps={{
                readOnly: true,
              }}
            />
            <TextField 
              id="outlined-basic" 
              label="Phone number" 
              variant="outlined" 
              defaultValue="0123456789" 
              className={classes.input}
              InputProps={{
                readOnly: true,
              }}
            />
            <TextField 
              id="outlined-basic" 
              label="Address" 
              variant="outlined" 
              defaultValue="Da Nang" 
              className={classes.input}
              InputProps={{
                readOnly: true,
              }}
            />
            <div className="flex-right mt-10">
              <Button className={classes.button} variant="contained" href="/user/change-password">Change Password</Button>
              <Button className={classes.button} variant="contained" color="primary" href="/user/edit">Edit information</Button>
            </div>
          </form>
        </Card>
      </div>
    </div>
  );
}