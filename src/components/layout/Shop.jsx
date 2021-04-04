import React, { useState, useEffect } from 'react';
import { API_KEY, API_URL } from '../../../config';
// import mockupData from '../../mockupData';
import Preloader from '../Preloader';
import GoodsList from '../GoodsList';

const Shop = () => {
  const [goods, setGoods] = useState([]);
  const [loading, setLoading] = useState(true);

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
      {loading ? <Preloader /> : <GoodsList goods={goods} />}
    </main>
  );
};

export default Shop;
