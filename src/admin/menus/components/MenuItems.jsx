import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React from "react";
import coffeeCup from "../../../assets/images/commons/coffeeCup.jpg";
import { ObjectUtils } from "../../../utils/object.utils";
import DeleteDialog from "./DeleteDialog";
import EditDialog from "./EditDialog";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    marginBottom: theme.spacing(3),
  },
  cover: {
    width: 125,
    height: 125
  },
  media: {
    height: 125
  },
  actions: {
    position: "absolute",
    right: 0,
    marginTop: 32,
  },
}));
const MenuItems = (props) => {
  const { drink } = props;

  const category = ObjectUtils.get(drink, "category", {});

  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia className={classes.media}>
        <img src={drink.image} alt="image-drink" className={classes.cover} />
      </CardMedia>

      <div className={classes.media}>
        <CardContent>
          <Typography component="h6" variant="h6">
            {drink.name}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            Price: {drink.price}
          </Typography>

          <Typography variant="subtitle1" color="textSecondary">
            Category: {category.name}
          </Typography>
        </CardContent>
      </div>

      <div className={classes.actions}>
        <EditDialog />
        <DeleteDialog />
      </div>
    </Card>
  );
};
export default MenuItems;
