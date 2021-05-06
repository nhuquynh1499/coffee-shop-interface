import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 300,
    maxHeight: 500,
    marginTop: 20,
    marginLeft: 20,
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    marginRight: theme.spacing(1),
    marginLeft: theme.spacing(1),
  },
  content: {
    flex: '1 0 auto',
    padding: 0
  },
  title: {
    fontSize: 20,
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    '-webkit-line-clamp': 1,
    '-webkit-box-orient': 'vertical',
    overflow:'hidden',
  },
  cover: {
    "min-width": 151,
    height: 151,
    backgroundSize: "cover",
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    alignSelf: 'flex-end'
  },
  btn: {
    backgroundColor: '#5fa3b7',
    color: "#fff",
    borderRadius: "4px",
    padding: theme.spacing(1)
  }
}));

export default function MenuItem(props) {
  const classes = useStyles();
  const { photo, name, price } = props;

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.cover}
        image={photo}
        />
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h6" variant="h6" className={classes.title}>
            {name}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            {price}
          </Typography>
        </CardContent>
        <div className={classes.controls}>
          <button className={classes.btn}>Add to card</button>
        </div>
      </div>
    </Card>
  );
}
