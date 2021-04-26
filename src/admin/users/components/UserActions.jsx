import React from "react";
import DeleteDialog from "./DeleteDialog";
import EditDialog from "./EditDialog";

const UserActions = () => {
    return (
        <React.Fragment>
            <EditDialog />
            <DeleteDialog />
        </React.Fragment>
    );
}
export default UserActions;