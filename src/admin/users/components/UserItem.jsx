import { Divider } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import { green, red } from "@material-ui/core/colors";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import EditIcon from "@material-ui/icons/Edit";
import React from "react";
import { DateFormat, DateUtils } from "../../../utils";
import avatar from "../../svg/avatar.jpg";

const useStyles = makeStyles(() => ({
  root: {
    width: 300,
    height: 250,
  },
  media: {
    height: 0,
    paddingTop: "56.25%",
  },
  avatar: {
    width: 74,
    height: 74,
  },
}));

const UserItem = (props) => {
  const { user } = props;

  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar
            className={classes.avatar}
            src={avatar}
          />
        }
        title={
          <Typography variant="h6" style={{ fontWeight: 600 }}>
            {user.username}
          </Typography>
        }
        subheader={
          <div>{DateUtils.format(user.createdAt, DateFormat.YYYY_MM_DD)}</div>
        }
        action={
          <IconButton>
            <EditIcon
              style={{ color: green[500] }}
              fontSize="small"
            />
          </IconButton>
        }
      />

      <Divider />

      <CardContent>
        <Typography variant="subtitle2">Phone</Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {user.phone}
        </Typography>
        <Typography variant="subtitle2">Address</Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {user.address}
        </Typography>
      </CardContent>
    </Card>
  );
};
export default UserItem;
