import { makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import MenuItem from './MenuItem';

const useStyles = makeStyles((theme) => ({
  title: {
    textAlign: "center",
    fontWeight: "bold",
    color: "#5fa3b7",
    fontSize: 36,
    marginTop: theme.spacing(2)
  },
  cols: {
    display: "grid",
    "grid-template-columns": "1fr 1fr 1fr 1fr",
    gap: theme.spacing(2),
    margin: theme.spacing(2)
  },
}));

export default function HomePage(props) {
    const classes = useStyles();
    const { data } = props;
    return (
      <div class="container">
        <Typography component="h6" variant="h6" className={classes.title}>
          MENU
        </Typography>
        <div className={classes.cols}>
          {
            data.map((item, index) => <MenuItem key={index} photo={item.photo} name={item.name} price={item.price}/>)
          }
        </div>
      </div>
    );
}