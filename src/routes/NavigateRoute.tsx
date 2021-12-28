import React, { memo, ReactElement } from 'react';

import { Route, Routes } from 'react-router-dom';

import { NavigatePath } from '../enum';

import { Goods, CartContainer } from 'components';

export const NavigateRoute = memo(
  (): ReactElement => (
    <Routes>
      <Route path={NavigatePath.Goods} element={<Goods />} />
      <Route path={NavigatePath.Cart} element={<CartContainer />} />
    </Routes>
  ),
);
