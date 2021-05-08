import React, { useEffect } from 'react';
import Menu from '../components/menu/Index';
import { getListDrink } from '../../redux/action/drink';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../redux/action/cart';

export default function MenuPage() {
  const dispatch = useDispatch();
  const listDrink = useSelector((state) => state.drink.listDrink);

  useEffect(() => {
    dispatch(getListDrink());
  }, []);

  const handleClickAddToCart = (payload) => {
    dispatch(addToCart(payload))
  }

  return (
    <Menu data={ listDrink } handleClickAddToCart={handleClickAddToCart}/>
  );
}