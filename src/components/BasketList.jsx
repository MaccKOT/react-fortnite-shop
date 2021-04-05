import React from 'react';
import BasketItem from './BasketItem';

const BasketList = (props) => {
  const {
    order = [],
    handleBasketShow = Function.prototype,
    removeFromCart = Function.prototype,
    changeQuantity = Function.prototype,
  } = props;

  const totalPrice = order.reduce((sum, el) => {
    return sum + el.price.finalPrice * el.quantity;
  }, 0);

  return (
    <div className='collection basket-list z-depth-3'>
      <li className='collection-item active'>Корзина</li>
      {order.length ? (
        order.map((item) => (
          <BasketItem
            key={item.mainId}
            {...item}
            removeFromCart={removeFromCart}
            changeQuantity={changeQuantity}
          />
        ))
      ) : (
        <li className='collection-item'>Корзина пуста</li>
      )}
      <li className='collection-item active'>
        Общая стоимость: <b>{totalPrice}</b>
      </li>

      <li className='collection-item'>
        <button className='btn btn-small'>
          <i className='material-icons left'>attach_money</i>Оформить
        </button>
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
