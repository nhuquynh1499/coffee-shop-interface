import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getInforByToken } from '../../redux/action/auth';
import Home from '../components/home/Home'

export default function HomePage() {
  const token = useSelector((state) => state.auth.token);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getInforByToken(token))
  }, [token]);

  return (
    <Home />
  );
}