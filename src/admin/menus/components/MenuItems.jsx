import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React from "react";
import coffeeCup from "../../../assets/images/commons/coffeeCup.jpg";
import DeleteDialog from "./DeleteDialog";
import EditDialog from "./EditDialog";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    marginBottom: theme.spacing(3),
  },
  details: {
    display: "flex",
    flexDirection: "column",
  },
  actions: {
    display: "block",
    flexDirection: "column",
    marginLeft: 850,
    marginTop: 32,
  },
  content: {
    flex: "1 0 auto",
  },
  cover: {
    width: 120,
  },
  controls: {
    display: "flex",
    alignItems: "center",
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
}));
const MenuItems = () => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia className={classes.cover} image={coffeeCup} />

      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            Espresso
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            Price: 20000đ
          </Typography>

          <Typography variant="subtitle1" color="textSecondary">
            Total: 30
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
