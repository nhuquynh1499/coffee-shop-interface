import React, { useEffect } from 'react';
import Menu from '../components/menu/Index';
import { getListDrink } from '../../redux/action/drink';
import { useDispatch, useSelector } from 'react-redux';


export default function MenuPage() {
  const dispatch = useDispatch();
  const listDrink = useSelector((state) => state.drink.listDrink);

  useEffect(() => {
    dispatch(getListDrink());
  }, []);

  return (
    <Menu data={ listDrink }/>
  );
}