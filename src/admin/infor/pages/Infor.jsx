import React, { useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { getInforByToken } from '../actions/inforAdminAction';
import InforForm from '../components/InforForm';
import Loading from '../../ui/Loading';
import { Card, makeStyles, CssBaseline, AppBar, Toolbar, Typography } from '@material-ui/core';
import ResponsiveDrawer from '../../components/ResponsiveDrawer';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexGrow: 1,
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
    backgroundColor: "#5FA3B7",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    height: 750,
  },
  card: {
    maxWidth: 700,
    margin: 'auto',
    marginBottom: 20
  }
}));

export default function UserDetailPage() {
  const classes = useStyles();
  let history = useHistory();
  const token = useSelector((state) => state.authAdmin.token);
  const infor = useSelector((state) => state.inforAdmin.infor);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!token) {
      history.push("/")
    } else {
      dispatch(getInforByToken(token))
    }
  }, [token]);

  // const handleSubmitFormDetail = (payload) => {
  //   dispatch(sendPostUpdateInfor(payload))
  // }

  return (
    <div className={classes.root}>
      <CssBaseline />

      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            Feedback Managements
          </Typography>
        </Toolbar>
      </AppBar>

      <ResponsiveDrawer />

      <main className={classes.content}>
        <div className="user-detail">
          <div className="mt-30 container">
            <Card className={classes.card}>
              <h1 className="text-center mt-20">User detail</h1>
              { infor ? 
                <InforForm 
                  infor={infor} 
                  // handleSubmitFormDetail={handleSubmitFormDetail} 
                  token={token} 
                /> : <Loading />}
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}