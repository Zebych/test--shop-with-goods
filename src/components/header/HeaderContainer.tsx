import React, { ReactElement } from 'react';

import { Header } from './Header';

import { useAppSelector } from 'hooks';
import { selectSumPrice } from 'store/selectors';

export const HeaderContainer = (): ReactElement => {
  const sumPrice = useAppSelector(selectSumPrice);

  return <Header sumPrice={sumPrice} />;
};
