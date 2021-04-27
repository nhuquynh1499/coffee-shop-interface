import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Chip from "@material-ui/core/Chip";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React from "react";
import EventOutlinedIcon from "@material-ui/icons/EventOutlined";
import AccessAlarmIcon from "@material-ui/icons/AccessAlarm";
import EditDialog from "../components/EditDialog";
import DeleteDialog from "../components/DeleteDialog";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    marginBottom: theme.spacing(3),
  },
  details: {
    display: "flex",
    flexDirection: "column",
  },
  actions: {
    display: "block",
    flexDirection: "column",
    marginLeft: 600,
    marginTop: theme.spacing(6),
  },
  icon: {
    width: 100,
    height: 100,
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
  },
  chip: {
    marginTop: theme.spacing(1),
  },
  content: {
    flex: "1 0 auto",
  },
}));

const EventItem = () => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia>
        <EventOutlinedIcon className={classes.icon} />
      </CardMedia>

      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            Business Meeting
          </Typography>

          <Chip
            icon={<AccessAlarmIcon />}
            label="30 May 2021"
            color="secondary"
            className={classes.chip}
          />

          <Typography
            variant="subtitle1"
            color="textSecondary"
            style={{ marginTop: 8 }}
          >
            Business Meeting will be occur in 30/05/2021
          </Typography>
        </CardContent>
      </div>

      <div className={classes.actions}>
        <EditDialog />
        <DeleteDialog />
      </div>
    </Card>
  );
};

export default EventItem;
