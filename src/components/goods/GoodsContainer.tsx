import React, { ReactElement } from 'react';

import { Goods } from './Goods';

import { useAppSelector } from 'hooks';
import { selectGoodsData } from 'store/selectors';

export const GoodsContainer = (): ReactElement => {
  const allProducts = useAppSelector(selectGoodsData);

  return <Goods allProducts={allProducts} />;
};
