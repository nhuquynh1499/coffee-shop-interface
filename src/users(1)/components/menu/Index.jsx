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

export default function HomePage() {
    const classes = useStyles();
    return (
      <div class="container">
        <Typography component="h6" variant="h6" className={classes.title}>
          MENU
        </Typography>
        <div className={classes.cols}>
          {
            [{
              name: "Nước chanh",
              price: "15.000đ",
              photo: "https://i.pinimg.com/564x/5d/b9/18/5db91829e87e218c6942a7727d5b240f.jpg"
            }, {
              name: "Trà sữa",
              price: "20.000đ",
              photo: "https://i.pinimg.com/564x/97/2c/95/972c9514f73120cab72ce91c3f5440ce.jpg"
            }, {
              name: "Trà sữa",
              price: "20.000đ",
              photo: "https://i.pinimg.com/564x/a3/17/08/a317085b479e7cdff35a3c69f0d57b02.jpg"
            }, {
              name: "Trà sữa",
              price: "20.000đ",
              photo: "https://i.pinimg.com/564x/7a/7f/69/7a7f693ff18ba1905912c6d3d1447169.jpg"
            }, {
              name: "Trà sữa",
              price: "20.000đ",
              photo: "https://i.pinimg.com/564x/b6/f2/a7/b6f2a71c0ed1a642e1a9872ab00d7b03.jpg"
            }, {
              name: "Trà sữa",
              price: "20.000đ",
              photo: "https://i.pinimg.com/564x/92/1d/47/921d4714b1c2e895a8fff604c46ecc1f.jpg"
            }, {
              name: "Sữa dâu",
              price: "20.000đ",
              photo: "https://i.pinimg.com/564x/04/38/4a/04384a8433a88b9654abb8d0fcb8f745.jpg"
            }, {
              name: "Coffee sữa Sài Gòn",
              price: "20.000đ",
              photo: "https://i.pinimg.com/564x/9f/be/54/9fbe54e9aa38b64bfba27c0a8822678c.jpg"
            }, {
              name: "Trà sữa",
              price: "20.000đ",
              photo: "https://i.pinimg.com/564x/94/96/1a/94961a0b7adb509e3f707aac6ee6aeab.jpg"
            }, {
              name: "Trà sữa",
              price: "20.000đ",
              photo: "https://i.pinimg.com/564x/9b/f3/66/9bf3668b79d384b94c75583c5262f28c.jpg"
            }
            ].map((item, index) => <MenuItem key={index} photo={item.photo} name={item.name} price={item.price}/>)
          }
        </div>
      </div>
    );
}