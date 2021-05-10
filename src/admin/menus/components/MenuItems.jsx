import { IconButton } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { green } from "@material-ui/core/colors";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import EditIcon from "@material-ui/icons/Edit";
import React from "react";
import { ObjectUtils } from "../../../utils/object.utils";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    marginBottom: theme.spacing(3),
  },
  cover: {
    width: 125,
    height: 125,
  },
  media: {
    height: 125,
  },
  iconButton: {
    position: "absolute",
    marginLeft: 650,
    marginTop: -80,
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

        <div className={classes.iconButton}>
          <IconButton>
            <EditIcon style={{ color: green[500] }} fontSize="small" />
          </IconButton>
        </div>
      </div>
    </Card>
  );
};
export default MenuItems;
