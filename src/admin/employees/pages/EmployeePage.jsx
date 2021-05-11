import { Grid } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ResponsiveDrawer from "../../components/ResponsiveDrawer";
import { getRoles } from "../../roles/actions";
import { getListStaff, postStaff } from "../actions";
import EmployeeCreate from "../components/EmployeeCreate";
import EmployeeItem from "../components/EmployeeItem";

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
    backgroundColor: "#5FA3B7",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    height: 750,
  },
}));

const EmployeePage = () => {
  const [open, setOpen] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getListStaff());
  }, []);

  useEffect(() => {
    dispatch(getRoles());
  }, []);

  const handleSubmit = (payload) => {
    dispatch(postStaff(payload));
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const listStaff = useSelector((state) => state.staffAdmin.listStaff);

  const roles = useSelector((state) => state.roleAdmin.roles);

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
        <EmployeeCreate
          onSubmit={handleSubmit}
          roles={roles}
          open={open}
          onOpen={handleOpen}
          onClose={handleClose}
        />

        <Grid container spacing={2}>
          {listStaff.map((staff) => (
            <Grid item xs={3}>
              <EmployeeItem staff={staff} roles={roles} />
            </Grid>
          ))}
        </Grid>
      </main>
    </div>
  );
};
export default EmployeePage;
