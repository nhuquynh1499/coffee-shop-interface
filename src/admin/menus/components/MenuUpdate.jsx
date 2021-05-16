import {
  AppBar,
  Button,
  Dialog,
  Grid,
  IconButton,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import React from "react";
import MenuUpdateDialog from "../dialogs/MenuUpdateDialog";

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "relative",
    backgroundColor: "#5FA3B7",
  },
}));

const MenuUpdate = (props) => {
  const { open, list, drink } = props;
  const { onSubmit, onOpen, onClose } = props;

  const classes = useStyles();

  return (
    <React.Fragment>
      {open && (
        <Dialog open={open} fullScreen>
          <AppBar className={classes.appBar}>
            <Toolbar>
              <IconButton
                edge="start"
                color="inherit"
                onClick={onClose}
                aria-label="close"
              >
                <CloseIcon />
              </IconButton>
              <Typography variant="h6">Update drink</Typography>
            </Toolbar>
          </AppBar>

          <MenuUpdateDialog onSubmit={onSubmit} drink={drink} list={list} />
        </Dialog>
      )}
    </React.Fragment>
  );
};
export default MenuUpdate;
