import React, { ReactElement, useEffect } from 'react';

import { AppBar, LinearProgress, Toolbar } from '@material-ui/core';

import { PreloaderStatus } from './enum';

import { ProductType } from 'api';
import { HeaderContainer } from 'components';
import { useAppDispatch, useAppSelector } from 'hooks';
import { getLocalData, LocalStorageKey } from 'localStorage';
import { NavigateRoute } from 'routes';
import { goodsAllTC, setCart } from 'store/reducers';
import { selectAppStatus } from 'store/selectors';

export const App = (): ReactElement => {
  const dispatch = useAppDispatch();

  const status = useAppSelector(selectAppStatus);

  useEffect(() => {
    const localStorageData = getLocalData(LocalStorageKey.ProductsPlannedForPurchase);
    localStorageData.map((readyToBuyProduct: ProductType) =>
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

        {status === PreloaderStatus.Loading && <LinearProgress />}
      </AppBar>

      <NavigateRoute />
    </div>
  );
};
