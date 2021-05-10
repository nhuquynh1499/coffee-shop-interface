import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ResponsiveDrawer from "../../components/ResponsiveDrawer";
import { getDrink, postDrink } from "../actions";
import MenuItems from "../components/MenuItems";
import MenuCreate from "../components/MenuCreate";
import { getList } from "../../categories/actions";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexGrow: 1,
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
    backgroundColor: "#5FA3B7",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    height: 750,
  },
}));

const MenuPage = () => {
  const [open, setOpen] = useState(false);

  const dispatch = useDispatch();

  const classes = useStyles();

  useEffect(() => {
    dispatch(getDrink());
  }, []);

  useEffect(() => {
    dispatch(getList());
  }, []);

  const drinks = useSelector((state) => state.drinkAdmin.drinks);

  const list = useSelector((state) => state.listAdmin.list);

  const handleSubmit = (payload) => {
    dispatch(postDrink(payload));
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />

      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            Menu Managements
          </Typography>
        </Toolbar>
      </AppBar>

      <ResponsiveDrawer />

      <main className={classes.content}>
        <MenuCreate
          onSubmit={handleSubmit}
          list={list}
          open={open}
          onOpen={handleOpen}
          onClose={handleClose}
        />

        {drinks.map((drink) => (
          <MenuItems drink={drink} />
        ))}
      </main>
    </div>
  );
};
export default MenuPage;
