import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import Card from "../components/Card";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  }
}));

export default function SpacingGrid() {
  const classes = useStyles();

  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid container justify="center">
          {[0, 1, 2].map((value) => (
            <Grid key={value} item>
              <Card />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}
