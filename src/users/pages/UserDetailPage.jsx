import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getInforByToken } from '../../redux/action/auth';
import UserDetail from '../components/user/Detail';

export default function UserDetailPage() {
  const token = useSelector((state) => state.auth.token);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getInforByToken(token))
  }, [token]);

  return (
    <UserDetail />
  );
}