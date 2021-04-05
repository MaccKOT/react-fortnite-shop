import React, { useEffect } from 'react';

const AlertToast = (props) => {
  const { name = '', closeAlert = Function.prototype } = props;

  useEffect(() => {
    const timerId = setTimeout(closeAlert, 250000);

    return () => {
      clearTimeout(timerId);
    };
  }, [name]);

  return (
    <div className='toast-container' id='toast-container'>
      <div className='toast rounded'>{`'${name}'  добавлена в корзину`}</div>
    </div>
  );
};

export default AlertToast;
