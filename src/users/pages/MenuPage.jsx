import React, { useEffect } from 'react';
import Menu from '../components/menu/Index';
import { getListDrink } from '../../redux/action/drink';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../redux/action/cart';
import { useHistory } from 'react-router';

export default function MenuPage() {
  const dispatch = useDispatch();
  const listDrink = useSelector((state) => state.drink.listDrink);
  const token = useSelector((state) => state.auth.token);
  const history = useHistory();

  useEffect(() => {
    dispatch(getListDrink());
  }, []);

  const handleClickAddToCart = (payload) => {
    if (token) {
      dispatch(addToCart(payload))
    } else {
      history.push("/login")
    }
  }

  return (
    <Menu data={ listDrink } handleClickAddToCart={handleClickAddToCart}/>
  );
}