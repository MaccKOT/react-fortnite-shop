import React, { useState, useEffect } from 'react';
import { API_KEY, API_URL } from '../../../config';
// import mockupData from '../../mockupData';
import Preloader from '../Preloader';
import GoodsList from '../GoodsList';
import Cart from '../Cart';

const Shop = () => {
  const [goods, setGoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState([]);

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
      <Cart quantity={order.length} />
      {loading ? (
        <Preloader />
      ) : (
        <GoodsList goods={goods} addToCart={addToCart} />
      )}
    </main>
  );
};

export default Shop;
