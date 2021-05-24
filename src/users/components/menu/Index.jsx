import { makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import Loading from '../ui/Loading';
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
    display: "flex",
    flexWrap: "wrap",
    // justifyContent: 'space-between',
    gap: theme.spacing(2),
    margin: theme.spacing(2),
  },
}));

export default function HomePage(props) {
    const classes = useStyles();
    const { data, handleClickAddToCart } = props;
    return (
      <div className="container">
        <Typography component="h6" variant="h6" className={classes.title}>
          MENU
        </Typography>
        <div className={classes.cols}>
          {
            data.length === 0 ? <Loading /> : data.map((item, index) => <MenuItem key={index} item={item} handleClickAddToCart={handleClickAddToCart}/>)
          }
        </div>
      </div>
    );
}