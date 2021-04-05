import React from 'react';

const Cart = (props) => {
  const { quantity = 0 } = props;
  return (
    <div className='cart blue darken-4 white-text'>
      <span className='material-icons'>shopping_basket</span>
      {quantity ? <span className='cart_quantity'>{quantity}</span> : null}
    </div>
  );
};

export default Cart;
