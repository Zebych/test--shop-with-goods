import React, { memo, ReactElement } from 'react';

import { Route, Routes } from 'react-router-dom';

import { Goods } from '01_userInterface/components/goods';
import { Cart } from '01_userInterface/components/purchases';

export const SetRoute = memo(
  (): ReactElement => (
    <div>
      <Routes>
        <Route path="/" element={<Goods />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  ),
);
