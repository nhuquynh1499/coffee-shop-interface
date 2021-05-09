import React, { useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { getInforByToken, sendPostUpdateInfor } from '../../redux/action/auth';
import UserDetailForm from '../components/user/FormDetail';
import Loading from '../components/ui/Loading';
import { Card, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    maxWidth: 600,
    margin: 'auto',
    marginBottom: 20
  }
});

export default function UserDetailPage() {
  const classes = useStyles();
  let history = useHistory();
  const token = useSelector((state) => state.auth.token);
  const infor = useSelector((state) => state.auth.infor);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getInforByToken(token))
    if (!token) {
      history.push("/")
    }
  }, [token]);

  const handleSubmitFormDetail = (payload) => {
    dispatch(sendPostUpdateInfor(payload))
  }

  return (
    <div className="user-detail">
      <div className="mt-30 container">
        <Card className={classes.root}>
          <h1 className="text-center mt-20">User detail</h1>
          { infor ? <UserDetailForm infor={infor} handleSubmitFormDetail={handleSubmitFormDetail} token={token} /> : <Loading />}
        </Card>
      </div>
    </div>
  );
}