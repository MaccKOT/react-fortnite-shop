import React from 'react';
import BasketItem from './BasketItem';

const BasketList = (props) => {
  const { order = [], handleBasketShow = Function.prototype } = props;

  const totalPrice = order.reduce((sum, el) => {
    return sum + el.price.finalPrice * el.quantity;
  }, 0);

  return (
    <div className='collection basket-list'>
      <li className='collection-item active'>Корзина</li>
      {order.length ? (
        order.map((item) => <BasketItem key={item.mainId} {...item} />)
      ) : (
        <li className='collection-item'>Корзина пуста</li>
      )}
      <li className='collection-item active'>
        Общая стоимость: <b>{totalPrice}</b>
      </li>
      <span
        onClick={() => handleBasketShow()}
        className='material-icons basket-close'>
        close
      </span>
    </div>
  );
};

export default BasketList;
