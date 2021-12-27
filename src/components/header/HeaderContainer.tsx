import React, { ReactElement } from 'react';

import { Header } from './Header';

import { toTotalPriceOfPlannedPurchases, useAppSelector } from 'store';

export const HeaderContainer = (): ReactElement => {
  const totalPrise = useAppSelector(toTotalPriceOfPlannedPurchases);

  return <Header totalPrise={totalPrise} />;
};
