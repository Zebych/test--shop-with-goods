import React, { memo, ReactElement } from 'react';

import { Route, Routes } from 'react-router-dom';

import { Goods, CartContainer } from 'components';
import { NavigatePath } from 'enums';

export const NavigateRoute = memo(
  (): ReactElement => (
    <Routes>
      <Route path={NavigatePath.goods} element={<Goods />} />
      <Route path={NavigatePath.cart} element={<CartContainer />} />
    </Routes>
  ),
);
