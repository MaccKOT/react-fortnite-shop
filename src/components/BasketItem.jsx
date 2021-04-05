import React from 'react';

const BasketItem = (props) => {
  const {
    mainId,
    displayName,
    price,
    quantity,
    removeFromCart = Function.prototype,
    changeQuantity = Function.prototype,
  } = props;
  return (
    <li className='collection-item'>
      {displayName}{' '}
      <span
        onClick={() => changeQuantity(mainId, -1)}
        className='material-icons basket-quantity'>
        remove
      </span>{' '}
      × {quantity}{' '}
      <span
        onClick={() => changeQuantity(mainId, +1)}
        className='material-icons basket-quantity'>
        add
      </span>{' '}
      = {price.finalPrice * quantity}
      <span className='secondary-content'>
        <span
          onClick={() => removeFromCart(mainId)}
          className='material-icons basket-delete'>
          remove_circle_outline
        </span>
      </span>
    </li>
  );
};

export default BasketItem;
