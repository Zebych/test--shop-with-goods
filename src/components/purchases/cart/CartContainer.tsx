import React, { ReactElement, useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

import { Cart } from './Cart';
import { useCartMediaHook } from './cartHooks';

import { useAppDispatch, useAppSelector } from 'hooks';
import { NavigatePath } from 'routes';
import { conditionBuy } from 'store/reducers';
import { selectDataIsPurchaseMade } from 'store/selectors';

export const CartContainer = (): ReactElement => {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const isPurchaseMade = useAppSelector(selectDataIsPurchaseMade);

  const { matches } = useCartMediaHook();
  const mediaStyle = matches ? { display: 'flex' } : { display: 'block' };

  useEffect(() => {
    dispatch(conditionBuy({ result: false }));
  }, [isPurchaseMade]);

  if (isPurchaseMade) {
    navigate(NavigatePath.Goods, { replace: true });
  }

  return (
    <div>
      <Cart mediaStyle={mediaStyle} />
    </div>
  );
};
