import React from 'react';

const CartItem = (props) => {
  const { photo, name, price } = props.item;
  return (
    <div className="cart-item">
      <div className="cart-item__image mr-7">
        <img src={photo} alt="" />
      </div>
      <div className="cart-item__infor">
        <p className="cart-item__infor--bold">{name}</p>
        <p>{price.toLocaleString()}đ</p>
      </div>
      <div className="cart-item__count">
        <button type="button">-</button>
        <input value="1"/>
        <button className="increase" type="button">+</button>
      </div>
    </div>
  )
}

export default CartItem;