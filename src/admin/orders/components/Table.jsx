import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import React from 'react';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(name, quantity, status, createdAt) {
  return { name, quantity, status, createdAt};
}

const rows = [
  createData('Espresso', 20, 'done', '27/04/2021'),
  createData('Espresso', 20, 'done', '27/04/2021'),
  createData('Espresso', 20, 'done', '27/04/2021'),
  createData('Espresso', 20, 'done', '27/04/2021'),
  createData('Espresso', 20, 'done', '27/04/2021'),
];

const BasicTable = () => {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Order Name</TableCell>
            <TableCell align="center">Quantity</TableCell>
            <TableCell align="center">Status</TableCell>
            <TableCell align="center">CreatedAt</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="center">{row.quantity}</TableCell>
              <TableCell align="center">{row.status}</TableCell>
              <TableCell align="center">{row.createdAt}</TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
export default BasicTable;