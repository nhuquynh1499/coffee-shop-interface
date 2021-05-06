import { Grid, makeStyles, Slide, TextField } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import { green } from "@material-ui/core/colors";
import Dialog from "@material-ui/core/Dialog";
import IconButton from "@material-ui/core/IconButton";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import EditIcon from "@material-ui/icons/Edit";
import React, { useState } from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
    margin: "auto",
  },
  appBar: {
    position: "relative",
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}));

const EditDialog = () => {
  const classes = useStyles();

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

  return (
    <React.Fragment>
      <IconButton aria-label="edit" onClick={handleOpen}>
        <EditIcon fontSize="medium" style={{ color: green[500] }} />
      </IconButton>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Edit Employee Information
            </Typography>
            <Button autoFocus color="inherit" onClick={handleClose}>
              Save
            </Button>
          </Toolbar>
        </AppBar>
        <Grid container style={{ padding: 16 }}>
          <Grid item xs={12}>
            <TextField
              id="outlined-basic"
              label="Employee's Name"
              variant="outlined"
              fullWidth
            />
          </Grid>
        </Grid>

        <Grid container style={{ padding: 16 }}>
          <Grid item xs={12}>
            <TextField
              id="outlined-basic"
              label="Phone Number"
              variant="outlined"
              fullWidth
            />
          </Grid>
        </Grid>

        <Grid container style={{ padding: 16 }}>
          <Grid item xs={12}>
            <TextField
              id="outlined-basic"
              label="Address"
              variant="outlined"
              fullWidth
            />
          </Grid>
        </Grid>

        <Grid container style={{ padding: 16 }}>
          <Grid item xs={12}>
            <TextField
              id="outlined-basic"
              label="Active"
              variant="outlined"
              fullWidth
            />
          </Grid>
        </Grid>
      </Dialog>
    </React.Fragment>
  );
};
export default EditDialog;
