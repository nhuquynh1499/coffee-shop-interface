import { Grid, TextField } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import { makeStyles, Slide } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import CardActions from "@material-ui/core/CardActions";
import Dialog from "@material-ui/core/Dialog";
import IconButton from "@material-ui/core/IconButton";
import Toolbar from "@material-ui/core/Toolbar";
import CloseIcon from "@material-ui/icons/Close";
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
    <CardActions>
      <Button size="small" color="primary" onClick={handleOpen}>
        EDIT
      </Button>

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
              Edit Category
            </Typography>
            <Button autoFocus color="inherit" onClick={handleClose}>
              Save
            </Button>
          </Toolbar>
        </AppBar>
        <Grid container style={{ padding: 16 }}>
          <Grid item>
            <Typography style={{ margin: 16, fontWeight: "bold" }}>
              Edit Category
            </Typography>
          </Grid>

          <Grid item xs={10}>
            <TextField
              id="outlined-basic"
              label="Category's Name"
              variant="outlined"
              fullWidth
            />
          </Grid>
        </Grid>
      </Dialog>
    </CardActions>
  );
};
export default EditDialog;
