import React from 'react';

const Cart = (props) => {
  const { quantity = 0, handleBasketShow = Function.prototype } = props;
  return (
    <div className='cart blue darken-4 white-text' onClick={handleBasketShow}>
      <span className='material-icons'>shopping_basket</span>
      {quantity ? <span className='cart_quantity'>{quantity}</span> : null}
    </div>
  );
};

export default Cart;
