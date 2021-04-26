import { Grid, TextField } from "@material-ui/core";
import React from "react";

const CreateDialog = () => {
  return (
    <React.Fragment>
      <Grid container style={{ padding: 16 }}>
        <Grid item xs={12}>
          <TextField
            id="outlined-basic"
            label="Employee's Name"
            variant="outlined"
            fullWidth
          />
        </Grid>
      </Grid>

      <Grid container style={{ padding: 16 }}>
        <Grid item xs={12}>
          <TextField
            id="outlined-basic"
            label="Phone Number"
            variant="outlined"
            fullWidth
          />
        </Grid>
      </Grid>

      <Grid container style={{ padding: 16 }}>
        <Grid item xs={12}>
          <TextField
            id="outlined-basic"
            label="Address"
            variant="outlined"
            fullWidth
          />
        </Grid>
      </Grid>

      <Grid container style={{ padding: 16 }}>
        <Grid item xs={12}>
          <TextField
            id="outlined-basic"
            label="Active"
            variant="outlined"
            fullWidth
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};
export default CreateDialog;
