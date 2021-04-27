import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import React from "react";
import RatingColumn from "./RatingColumn";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(orderName, describe, createdAt) {
  return { orderName, describe, createdAt };
}

const rows = [
  createData("Espresso", "Good taste", "27/04/2021"),
  createData("Espresso", "Good taste", "27/04/2021"),
  createData("Espresso", "Good taste", "27/04/2021"),
  createData("Espresso", "Good taste", "27/04/2021"),
  createData("Espresso", "Good taste", "27/04/2021"),
];

const BasicTable = () => {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Order Name</TableCell>
            <TableCell align="center">Describe</TableCell>
            <TableCell align="center">Created At</TableCell>
            <TableCell align="center">Rating</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.orderName}
              </TableCell>
              <TableCell align="center">{row.describe}</TableCell>
              <TableCell align="center">{row.createdAt}</TableCell>
              <TableCell align="center">
                <RatingColumn />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
export default BasicTable;
