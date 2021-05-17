import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React from "react";
import coffeeCup from "../../../assets/images/commons/coffeeCup.jpg";
import CardActionsCate from "./CardActionsCate";

const useStyles = makeStyles({
  root: {
    width: 250,
  },
  media: {
    height: 250,
    width: 250,
  },
  grid: {
    flexGrow: 1,
    margin: "auto",
    display: "block",
  },
});

const CategoryCard = (props) => {
  const { category } = props;

  const classes = useStyles();

  return (
    <React.Fragment>
      <Grid item xs={4}>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia className={classes.media} image={coffeeCup} />

            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {category.name}
              </Typography>
            </CardContent>

            <CardActionsCate category={category} />
          </CardActionArea>
        </Card>
      </Grid>
    </React.Fragment>
  );
};
export default CategoryCard;
