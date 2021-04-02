import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React from "react";
import coffeeCup from "../../../assets/images/commons/coffeeCup.jpg";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    marginTop: 60,
    marginLeft: 60,
  },
  media: {
    height: 300,
  },
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={coffeeCup}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Espresso
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Espresso is generally thicker than coffee brewed by other methods,
            with a viscosity of warm honey. This is due to the higher
            concentration of suspended and dissolved solids, and has crema on
            top.
            <br />
            Price: 20.000đ
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          EDIT
        </Button>
        <Button size="small" color="primary">
          DELETE
        </Button>
      </CardActions>
    </Card>
  );
}
