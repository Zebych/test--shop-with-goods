import React, { ReactElement } from 'react';

import { Header } from './Header';

import { getSumPrice, useAppSelector } from 'store';

export const HeaderContainer = (): ReactElement => {
  const sumPrice = useAppSelector(getSumPrice);

  return <Header sumPrice={sumPrice} />;
};
