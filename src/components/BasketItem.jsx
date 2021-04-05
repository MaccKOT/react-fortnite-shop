import React from 'react';

const BasketItem = (props) => {
  const { mainId, displayName, price, quantity } = props;
  return (
    <li className='collection-item'>
      {displayName} × {quantity} = {price.finalPrice}
      <span className='secondary-content'>
        <span className='material-icons basket-delete'>
          remove_circle_outline
        </span>
      </span>
    </li>
  );
};

export default BasketItem;
