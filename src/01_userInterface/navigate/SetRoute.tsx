import React, { memo, ReactElement } from 'react';

import { Route, Routes } from 'react-router-dom';

import { Goods, CartContainer } from '../components';

export const SetRoute = memo(
  (): ReactElement => (
    <Routes>
      <Route path="/" element={<Goods />} />
      <Route path="/cart" element={<CartContainer />} />
    </Routes>
  ),
);