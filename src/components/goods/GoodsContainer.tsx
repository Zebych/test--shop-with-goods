import React, { ReactElement } from 'react';

import { Goods } from './Goods';

import { getGoodsData, useAppSelector } from 'store';

export const GoodsContainer = (): ReactElement => {
  const allProducts = useAppSelector(getGoodsData);

  return <Goods allProducts={allProducts} />;
};
