import { Grid, TextField } from "@material-ui/core";
import React from "react";

const CreateDialog = () => {
  return (
    <React.Fragment>
      <Grid container style={{ padding: 16 }}>
        <Grid item xs={12}>
          <TextField
            id="outlined-basic"
            label="Name of Event"
            variant="outlined"
            fullWidth
          />
        </Grid>
      </Grid>

      <Grid container style={{ padding: 16 }}>
        <Grid item xs={12}>
          <TextField
            id="outlined-basic"
            label="Date of Event"
            variant="outlined"
            fullWidth
          />
        </Grid>
      </Grid>

      <Grid container style={{ padding: 16 }}>
        <Grid item xs={12}>
          <TextField
            id="outlined-basic"
            label="Describe"
            variant="outlined"
            fullWidth
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};
export default CreateDialog;
