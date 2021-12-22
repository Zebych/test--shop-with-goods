import React, { ReactElement, useEffect } from 'react';

import { AppBar, Toolbar } from '@material-ui/core';

import { ProductObjType } from 'api';
import { Header } from 'components';
import { getLocalData } from 'localStorage';
import { NavigateRoute } from 'routes';
import { goodsAllTC, setCart, useAppDispatch } from 'store';

export const App = (): ReactElement => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    getLocalData().map((readyToBuyProduct: ProductObjType) =>
      dispatch(setCart({ addProduct: readyToBuyProduct })),
    );
    dispatch(goodsAllTC());
  }, []);

  return (
    <div>
      <AppBar position="static">
        <Toolbar style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Header />
        </Toolbar>
      </AppBar>
      <NavigateRoute />
    </div>
  );
};
