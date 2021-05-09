import { Grid } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ResponsiveDrawer from "../../components/ResponsiveDrawer";
import { getEvents } from "../actions";
import Button from "../components/Button";
import EventItem from "../components/EventItem";

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
    backgroundColor: "#5FA3B7"
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    height: 750,
  },
}));

const EventPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getEvents());
  }, []);

  const events = useSelector((state) => state.eventAdmin.events);

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />

      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            Event Managements
          </Typography>
        </Toolbar>
      </AppBar>

      <ResponsiveDrawer />

      <main className={classes.content}>
        {events.map((item) => (
          <EventItem key={item} event={item} />
        ))}

        <Grid container style={{ margin: "auto" }}>
          <Button />
        </Grid>
      </main>
    </div>
  );
};
export default EventPage;
