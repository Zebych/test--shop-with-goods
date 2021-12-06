import React, { memo, ReactElement, useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { conditionBuy } from '../../../02_bisnessLogik/cart-reducer/cart-reducer';

import { Cart } from './Cart';

import { AppRootStateType } from '02_bisnessLogik';

export const CartContainer = memo((): ReactElement => {
  const conditionBuyData = useSelector<AppRootStateType, boolean>(
    state => state.cart.conditionBuy,
  );
  const dispatch = useDispatch();
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
