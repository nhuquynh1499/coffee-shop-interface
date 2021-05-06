import { Grid, TextField } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import React from "react";

const CreateDialog = () => {
  return (
    <React.Fragment>
      <Grid container style={{ padding: 16 }}>
        <Grid item>
          <Typography style={{ margin: 16, fontWeight: "bold" }}>
            Drink item's Name:
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

      <Grid container style={{ padding: 16 }}>
        <Grid item>
          <Typography style={{ margin: 16, fontWeight: "bold" }}>
            Drink item's Price:
          </Typography>
        </Grid>

        <Grid item xs={10}>
          <TextField
            id="outlined-basic"
            label="Price"
            variant="outlined"
            fullWidth
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};
export default CreateDialog;
