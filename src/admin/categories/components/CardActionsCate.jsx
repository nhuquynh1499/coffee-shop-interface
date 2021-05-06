import { Grid } from "@material-ui/core";
import React from "react";
import DeleteDialog from "./DeleteDialog";
import EditDialog from "./EditDialog";

const CardActionsCate = () => {
  return (
    <React.Fragment>
      <Grid container>
        <EditDialog />

        <DeleteDialog />
      </Grid>
    </React.Fragment>
  );
};

export default CardActionsCate;
