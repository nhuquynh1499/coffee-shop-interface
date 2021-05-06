import { Grid, TextField } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import React from "react";

const CreateDialog = () => {
  return (
    <Grid container style={{ padding: 16 }}>
      <Grid item>
        <Typography style={{ margin: 16, fontWeight: "bold" }}>
          Category's Name:
        </Typography>
      </Grid>

      <Grid item xs={10}>
        <TextField
          id="outlined-basic"
          label="Category's Name"
          variant="outlined"
          fullWidth
        />
      </Grid>
    </Grid>
  );
};
export default CreateDialog;
