import { Grid } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import ResponsiveDrawer from "../../components/ResponsiveDrawer";
import Button from "../components/Button";
import Table from "../components/Table";
import { getListStaff } from "../actions";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
    backgroundColor: "#5FA3B7"
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    height: 750,
  },
}));

const EmployeePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getListStaff());
  }, []);

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />

      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            Employee Managements
          </Typography>
        </Toolbar>
      </AppBar>

      <ResponsiveDrawer />

      <main className={classes.content}>
        <Table />

        <Grid container style={{ margin: "auto", marginTop: 24 }}>
          <Button />
        </Grid>
      </main>
    </div>
  );
};
export default EmployeePage;
