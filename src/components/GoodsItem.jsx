import React from 'react';
import vBucksImage from '../vbucks.png';

const GoodsItem = (props) => {
  const {
    mainId,
    displayName,
    displayDescription,
    price,
    displayAssets,
    addToCart = Function.prototype,
  } = props;
  return (
    <div className='card'>
      <div className='card-image'>
        <img src={displayAssets[0].background} alt={displayName} />
      </div>
      <div className='card-content'>
        <span className='card-title'>{displayName}</span>
        <p>{displayDescription}</p>
      </div>
      <div className='card-action'>
        <button
          className='btn'
          onClick={() => addToCart({ mainId, displayName, price })}>
          Buy
        </button>
        <span className='right valign-wrapper' style={{ fontSize: '1.5rem' }}>
          {price.regularPrice}
          <img src={vBucksImage} width='28' height='28' alt='v-bucks' />
        </span>
      </div>
    </div>
  );
};

export default GoodsItem;
