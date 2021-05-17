import { Divider } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import { green } from "@material-ui/core/colors";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import EditIcon from "@material-ui/icons/Edit";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { DateFormat, DateUtils } from "../../../utils";
import avatar from "../../svg/avatar.jpg";
import PermissionDialog from "../dialogs/PermissionDialog";
import { updateStaff } from "../actions";
import EmployeeUpdate from "./EmployeeUpdate";

const useStyles = makeStyles(() => ({
  root: {
    width: 300,
    height: 310,
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

const EmployeeItem = (props) => {
  const { staff, roles } = props;

  const [openUpdate, setOpenUpdate] = useState(false);

  const classes = useStyles();

  const dispatch = useDispatch();

  const handleSubmitUpdate = (payload) => {
    dispatch(updateStaff(payload));
    setOpenUpdate(false);
  };

  const handleOpenUpdate = () => {
    setOpenUpdate(!openUpdate);
  };

  const handleCloseUpdate = () => {
    setOpenUpdate(false);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={<Avatar className={classes.avatar} src={avatar} />}
        title={
          <Typography variant="h6" style={{ fontWeight: 600 }}>
            {staff.username}
          </Typography>
        }
        subheader={
          <div>{DateUtils.format(staff.createdAt, DateFormat.YYYY_MM_DD)}</div>
        }
        action={
          <IconButton onClick={handleOpenUpdate}>
            <EditIcon style={{ color: green[500] }} fontSize="small" />
          </IconButton>
        }
      />

      <Divider />

      <CardContent>
        <Typography variant="subtitle2">Phone</Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {staff.phone}
        </Typography>

        <Typography variant="subtitle2">Address</Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {staff.address !== "" ? staff.address : "N/A"}
        </Typography>

        <Typography variant="subtitle2">Role</Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {roles.map((role) => {
            if (role._id === staff.role) {
              return role.name;
            }
            if (staff.role === "000000000000000000000000") {
              return "N/A";
            }
            return null;
          })}
        </Typography>

        <PermissionDialog staff={staff} />
      </CardContent>

      <EmployeeUpdate
        onSubmit={handleSubmitUpdate}
        open={openUpdate}
        onOpen={handleOpenUpdate}
        onClose={handleCloseUpdate}
        staff={staff}
        roles={roles}
      />
    </Card>
  );
};
export default EmployeeItem;
