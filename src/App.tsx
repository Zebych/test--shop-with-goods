import React, { ReactElement, useEffect } from 'react';

import { AppBar, LinearProgress, Toolbar } from '@material-ui/core';

import { ProductObjType } from 'api';
import { HeaderContainer } from 'components';
import { getLocalData, keyToLocalStorage } from 'localStorage';
import { NavigateRoute } from 'routes';
import { goodsAllTC, getAppStatus, setCart, useAppDispatch, useAppSelector } from 'store';

export const App = (): ReactElement => {
  const dispatch = useAppDispatch();

  const status = useAppSelector(getAppStatus);

  useEffect(() => {
    getLocalData(keyToLocalStorage.productsPlannedForPurchase).map(
      (readyToBuyProduct: ProductObjType) =>
        dispatch(setCart({ addProduct: readyToBuyProduct })),
    );
    dispatch(goodsAllTC());
  }, []);

  return (
    <div>
      <AppBar position="static">
        <Toolbar style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <HeaderContainer />
        </Toolbar>
        {status === 'loading' && <LinearProgress />}
      </AppBar>
      <NavigateRoute />
    </div>
  );
};
