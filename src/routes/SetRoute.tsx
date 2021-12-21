import React, { ReactElement } from 'react';

import { Route, Routes } from 'react-router-dom';

import { Goods, CartContainer } from '../components';

export const SetRoute = (): ReactElement => (
  <Routes>
    <Route path="/test--shop-with-goods" element={<Goods />} />
    <Route path="/cart" element={<CartContainer />} />
  </Routes>
);