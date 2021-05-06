import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import EmployeeActions from './EmployeeActions';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(userName, phoneNumber, address, active) {
  return { userName, phoneNumber, address, active};
}

const rows = [
  createData('Hoang', 123456, 6.0, 24),
  createData('Hoang', 123456, 9.0, 37),
  createData('Hoang', 123456, 16.0, 24),
  createData('Hoang', 123456, 3.7, 67),
  createData('Hoang', 123456, 16.0, 49),
];

const BasicTable = () => {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Employee's Name</TableCell>
            <TableCell align="center">Phone Number</TableCell>
            <TableCell align="center">Address</TableCell>
            <TableCell align="center">Active</TableCell>
            <TableCell align="center">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.userName}
              </TableCell>
              <TableCell align="center">{row.phoneNumber}</TableCell>
              <TableCell align="center">{row.address}</TableCell>
              <TableCell align="center">{row.active}</TableCell>
              <TableCell align="center">
                  <EmployeeActions />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
export default BasicTable;