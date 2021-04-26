import { Grid } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import React from "react";
import ResponsiveDrawer from "../../components/ResponsiveDrawer";
import Button from "../components/Button";
import MenuItems from "../components/MenuItems";

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
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    height: 750,
  },
}));

const MenuPage = () => {
  const classes = useStyles();

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
        {[1, 2, 3, 4, 5].map((index) => (
          <MenuItems />
        ))}
        
        <Grid container style={{ margin: "auto" }}>
          <Button />
        </Grid>
      </main>
    </div>
  );
};
export default MenuPage;
