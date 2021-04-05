import React, { useState, useEffect } from 'react';
import { API_KEY, API_URL } from '../../../config';
// import mockupData from '../../mockupData';
import Preloader from '../Preloader';
import GoodsList from '../GoodsList';
import Cart from '../Cart';
import BasketList from '../BasketList';
import ALertToast from '../AlertToast';

const Shop = () => {
  const [goods, setGoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState([]);
  const [isBasketShow, setBasketShow] = useState(false);
  const [alertName, setAlertName] = useState('');

  const addToCart = (item) => {
    const itemIndex = order.findIndex(
      (orderItem) => orderItem.mainId === item.mainId
    );

    if (itemIndex < 0) {
      // если добавляем в первый раз
      const newItem = {
        ...item,
        quantity: 1,
      };
      setOrder([...order, newItem]);
    } else {
      // иначе находим элемент в корзине и увеличиваем количество на 1
      const newOrder = order.map((orderItem, index) => {
        if (index === itemIndex) {
          return {
            ...orderItem,
            quantity: orderItem.quantity + 1,
          };
        } else {
          return orderItem;
        }
      });

      setOrder(newOrder);
    }
    //информируем пользователя
    setAlertName(item.displayName);
  };

  const removeFromCart = (itemId) => {
    const newOrder = order.filter((el) => el.mainId !== itemId);
    setOrder(newOrder);
  };

  const changeQuantity = (itemId, itemChange) => {
    //меняет количество quantity у элемента на величину itemChange
    const newOrder = order.map((el) => {
      if (el.mainId === itemId) {
        // брать только положительные значения
        const newQuantity =
          el.quantity + itemChange >= 0 ? el.quantity + itemChange : 0;
        return { ...el, quantity: newQuantity };
      } else {
        return el;
      }
    });
    setOrder(newOrder);
  };

  const handleBasketShow = () => {
    setBasketShow(!isBasketShow);
  };

  const closeAlert = () => {
    setAlertName('');
  };

  useEffect(function getGoods() {
    fetch(API_URL, {
      headers: {
        Authorization: API_KEY,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        data.shop && setGoods(data.shop);
        setLoading(false);
        // console.log('data :>> ', data.shop);
      });
  }, []);

  return (
    <main className='container content'>
      <Cart quantity={order.length} handleBasketShow={handleBasketShow} />
      {loading ? (
        <Preloader />
      ) : (
        <GoodsList goods={goods} addToCart={addToCart} />
      )}
      {isBasketShow && (
        <BasketList
          order={order}
          handleBasketShow={handleBasketShow}
          removeFromCart={removeFromCart}
          changeQuantity={changeQuantity}
        />
      )}
      {alertName && <ALertToast name={alertName} closeAlert={closeAlert} />}
    </main>
  );
};

export default Shop;
