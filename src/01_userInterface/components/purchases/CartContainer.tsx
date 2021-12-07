import React, { memo, ReactElement, useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';

import { Cart } from './Cart';

import { useAppDispatch, useAppSelector } from '02_bisnessLogik';
import { conditionBuy } from '02_bisnessLogik/cart-reducer/cart-reducer';
import { dataConditionBuy } from '05_common';

export const CartContainer = memo((): ReactElement => {
  const conditionBuyData = useAppSelector(dataConditionBuy);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  // media hook
  const [matches, setMatches] = useState(window.matchMedia('(min-width: 550px)').matches);
  useEffect(() => {
    const handler = (e: MediaQueryListEvent): void => setMatches(e.matches);
    window.matchMedia('(min-width: 550px)').addEventListener('change', handler);
  }, []);
  const mediaStyle = matches ? { display: 'flex' } : { display: 'block' };

  // conditionBuy
  useEffect(() => {
    dispatch(conditionBuy({ result: false }));
  }, [conditionBuyData]);

  // navigate
  if (conditionBuyData) {
    navigate('/test--shop-with-goods', { replace: true });
  }
  return (
    <div>
      <Cart mediaStyle={mediaStyle} />
    </div>
  );
});
