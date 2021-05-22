import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getInforByToken } from '../../redux/action/auth';
import Home from '../components/home/Home'

export default function HomePage() {
  const token = useSelector((state) => state.auth.token);
  const infor = useSelector((state) => state.auth.infor)
  const dispatch = useDispatch();

  useEffect(() => {
    if (!infor) {
      dispatch(getInforByToken(token))
    }
  }, []);

  return (
    <Home />
  );
}