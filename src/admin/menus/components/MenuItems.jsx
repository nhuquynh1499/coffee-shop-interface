import { IconButton } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { green } from "@material-ui/core/colors";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import EditIcon from "@material-ui/icons/Edit";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ObjectUtils } from "../../../utils/object.utils";
import { getList } from "../../categories/actions";
import { updateDrink } from "../actions";
import MenuUpdate from "./MenuUpdate";

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
    right: 0,
    marginTop: 32,
  },
}));
const MenuItems = (props) => {
  const { drink } = props;
  const [openUpdate, setOpenUpdate] = useState(false);
  const list = useSelector((state) => state.listAdmin.list);
  const category = ObjectUtils.get(drink, "category", {});
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!list) {
      dispatch(getList());
    }
  }, []);
  
  const handleSubmitUpdate = (payload) => {
    dispatch(updateDrink(payload));
    setOpenUpdate(false);
  };

  const handleOpenUpdate = () => {
    setOpenUpdate(!openUpdate);
  };

  const handleCloseUpdate = () => {
    setOpenUpdate(false);
  };

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

      <div className={classes.iconButton}  onClick={handleOpenUpdate}>
        <IconButton>
          <EditIcon style={{ color: green[500] }} fontSize="small" />
        </IconButton>
      </div>
      <MenuUpdate
        onSubmit={handleSubmitUpdate}
        list={list}
        open={openUpdate}
        onOpen={handleOpenUpdate}
        onClose={handleCloseUpdate}
        drink={drink}
      />
    </Card>
  );
};
export default MenuItems;
