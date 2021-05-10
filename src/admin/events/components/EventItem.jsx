import { IconButton } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Chip from "@material-ui/core/Chip";
import { green } from "@material-ui/core/colors";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import AccessAlarmIcon from "@material-ui/icons/AccessAlarm";
import EditIcon from "@material-ui/icons/Edit";
import EventOutlinedIcon from "@material-ui/icons/EventOutlined";
import React from "react";
import { DateFormat, DateUtils } from "../../../utils";

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
    position: "absolute",
    right: 0,
    marginTop: 48,
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
  iconButton: {
    position: "absolute",
    right: 0,
    marginTop: 48,
  },
}));

const EventItem = (props) => {
  const { event } = props;

  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardMedia>
        <EventOutlinedIcon className={classes.icon} />
      </CardMedia>

      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            {event.name}
          </Typography>

          <Chip
            icon={<AccessAlarmIcon />}
            label={DateUtils.format(
              event.createdAt,
              DateFormat.YYYY_MM_DD_hh_mm_ss
            )}
            color="secondary"
            className={classes.chip}
          />

          <Typography
            variant="subtitle1"
            color="textSecondary"
            style={{ marginTop: 8 }}
          >
            {event.desc}
          </Typography>
        </CardContent>
      </div>

      <div className={classes.iconButton}>
        <IconButton>
          <EditIcon style={{ color: green[500] }} fontSize="small" />
        </IconButton>
      </div>
    </Card>
  );
};

export default EventItem;
