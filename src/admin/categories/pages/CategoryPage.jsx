import { Grid } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import React, { useEffect } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import ResponsiveDrawer from "../../components/ResponsiveDrawer";
import { getList } from "../actions";
import Button from "../components/Button";
import Card from "../components/Card";

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
    height: 750
  }
}));

const CategoryPage = (props) => {
  const dispatch = useDispatch();

  const classes = useStyles();

  useEffect(() => {
    dispatch(getList());
  }, []);

  const list = useSelector((state) => state.listAdmin.list);

  return (
    <div className={classes.root}>
      <CssBaseline />

      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            Category Managements
          </Typography>
        </Toolbar>
      </AppBar>

      <ResponsiveDrawer />

      <main className={classes.content}>
        <Grid container spacing={1}>
          {list.map((item) => (
            <Grid item xs={3} style={{marginBottom: 16}}>
              <Card category={item} />
            </Grid>
          ))}
        </Grid>

        <Button className={classes.button} />
      </main>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { list: state.list };
};

export default connect(mapStateToProps)(CategoryPage);
