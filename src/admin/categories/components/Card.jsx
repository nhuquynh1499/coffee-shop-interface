import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React from "react";
import coffeeCup from "../../../assets/images/commons/coffeeCup.jpg";
import coldDrink from "../../../assets/images/commons/coldDrink.jpg";
import CardActionsCate from "./CardActionsCate";
import Button from "./Button";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 250,
  },
  grid: {
    flexGrow: 1,
    margin: "auto",
    display: "block",
  },
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <div className={classes.grid}>
        <Grid container spacing={1}>
          <Grid item xs={6}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia className={classes.media} image={coffeeCup} />

                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Hot Drinks
                  </Typography>
                </CardContent>

                <CardActionsCate />
              </CardActionArea>
            </Card>
          </Grid>

          <Grid item xs={6}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia className={classes.media} image={coldDrink} />

                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Cold Drinks
                  </Typography>
                </CardContent>

                <CardActionsCate />
              </CardActionArea>
            </Card>
          </Grid>

          <Button />
        </Grid>
      </div>
    </React.Fragment>
  );
}
