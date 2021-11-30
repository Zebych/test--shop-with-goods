import React, { memo, useEffect } from 'react';

import { AppBar, Toolbar } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import { setCart } from './02_bisnessLogik/cart-reducer';
import { goodsAllTC } from './02_bisnessLogik/goods-reducer';
import { ProductObjType } from './03_inquiries/server';
import { getLocalData } from './06_utils/localStorage';

import { SetRoute } from '01_userInterface/01.2_navigate/SetRoute';
import { Header } from '01_userInterface/components/C1_header/Header';

const commandForGettingData = 1;

export const App = memo(() => {
  const dispatch = useDispatch();

  // обработка и добавление запланированых покупок из localStorage
  // данные для отрисовки стартовой страницы
  useEffect(() => {
    getLocalData().map((a: ProductObjType) => dispatch(setCart({ addProduct: a })));
    dispatch(goodsAllTC(commandForGettingData));
  }, []);

  return (
    <div>
      <AppBar position="static">
        <Toolbar style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Header />
        </Toolbar>
      </AppBar>
      <SetRoute />
    </div>
  );
});
