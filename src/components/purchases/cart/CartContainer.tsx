import React, { ReactElement, useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';

import { Cart } from './Cart';

import { toConditionBuyData, useAppDispatch, useAppSelector } from 'store';
import { conditionBuy } from 'store/reducers/cart-reducer/cart-reducer';

export const CartContainer = (): ReactElement => {
  const [matches, setMatches] = useState(window.matchMedia('(min-width: 550px)').matches);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const conditionBuyData = useAppSelector(toConditionBuyData);

  useEffect(() => {
    const evenSetMatches = (e: MediaQueryListEvent): void => setMatches(e.matches);
    window.matchMedia('(min-width: 550px)').addEventListener('change', evenSetMatches);
  }, []);

  useEffect(() => {
    dispatch(conditionBuy({ result: false }));
  }, [conditionBuyData]);

  const mediaStyle = matches ? { display: 'flex' } : { display: 'block' };

  if (conditionBuyData) {
    navigate('/test--shop-with-goods', { replace: true });
  }

  return (
    <div>
      <Cart mediaStyle={mediaStyle} />
    </div>
  );
};
