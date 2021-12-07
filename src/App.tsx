import React, { memo, useEffect } from 'react';

import { AppBar, Toolbar } from '@material-ui/core';

import { ProductObjType } from './03_inquiries';
import { getLocalData } from './06_utils';

import { Header, SetRoute } from '01_userInterface';
import { goodsAllTC, setCart, useAppDispatch } from '02_bisnessLogik';

const commandForGettingData = 1;

export const App = memo(() => {
  const dispatch = useAppDispatch();

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
