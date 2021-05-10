import { Card, makeStyles } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { getInforByToken, sendPostUpdatePassword } from '../../redux/action/auth';
import Loading from '../components/ui/Loading';
import UserChangePassword from '../components/user/FormChangePassword';

const useStyles = makeStyles({
  root: {
    maxWidth: 600,
    margin: 'auto',
    marginBottom: 20
  }
});

export default function UserChangePasswordPage() {
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

  const handleSubmitFormChangePassword = (payload) => {
    dispatch(sendPostUpdatePassword(payload))
  }

  return (
    <div className="user-detail">
      <div className="mt-30 container">
        <Card className={classes.root}>
          <h1 className="text-center mt-20">Change password</h1>
          { infor ? <UserChangePassword infor={infor} handleSubmitFormChangePassword={handleSubmitFormChangePassword} token={token}/> : <Loading />}
        </Card>
      </div>
    </div>
  );
}