import { Button, Card, makeStyles, TextField } from '@material-ui/core';
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
          <h1 className="text-center mt-20">Change Password</h1>
          <form className="p-20">
            <TextField 
              id="outlined-basic" 
              label="Old password" 
              type="password"
              variant="outlined" 
              className={classes.input}
            />
            <TextField 
              id="outlined-basic" 
              label="New password" 
              type="password"
              variant="outlined" 
              className={classes.input}
            />
            <TextField 
              id="outlined-basic" 
              label="Confirm new password" 
              type="password"
              variant="outlined" 
              className={classes.input}
            />
            <div className="flex-right mt-10">
              <Button className={classes.button} variant="contained" href="/user/detail">Back</Button>
              <Button className={classes.button} variant="contained" color="primary">Submit</Button>
            </div>
          </form>
        </Card>
      </div>
    </div>
  );
}