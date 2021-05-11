import { Chip } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { Alert } from "@material-ui/lab";
import React from "react";
import { ObjectUtils } from "../../../utils";

const useStyles = makeStyles(() => ({
  root: {
    width: 300,
    height: 450,
  },
  media: {
    height: 0,
    paddingTop: "56.25%",
  },
  avatar: {
    width: 74,
    height: 74,
  },
  alert: {
    backgroundColor: ({ role }) => {
      const name = ObjectUtils.get(role, "name", "");
      if (name === "admin") {
        return "#f44336";
      }
      if (name === "service") {
        return "#ff9800";
      }
      if (name === "shipper") {
        return "#2196f3";
      }
      if (name === "bartender") {
        return "#4caf50";
      }
      return "5fa3b7";
    },
    color: "white",
  },
}));

const RoleItem = (props) => {
  const { role } = props;

  const classes = useStyles({ role });

  return (
    <Card className={classes.root}>
      <Alert severity="none" className={classes.alert}>
        {role.name}
      </Alert>

      <CardContent>
        <Typography variant="subtitle1">Permissions</Typography>
        {ObjectUtils.get(role, "permissions", []).map((permission) => (
          <React.Fragment>
            <Chip label={permission} style={{marginBottom: 8}} />
            <br />
          </React.Fragment>
        ))}
      </CardContent>
    </Card>
  );
};
export default RoleItem;
