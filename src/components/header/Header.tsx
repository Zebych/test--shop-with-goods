import React, { ReactElement } from 'react';

import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

import cartIcon from 'assets/img/outline_shopping_cart_white_18dp.png';
import { IsInCart } from 'enums';
import { toTotalPriceProductsInCart, useAppSelector } from 'store';

export const Header = (): ReactElement => {
  const totalPrise = useAppSelector(toTotalPriceProductsInCart);

  return (
    <div>
      <Link to="/test--shop-with-goods" style={{ textDecoration: 'none' }}>
        <Button color="inherit">
          <p style={{ color: '#fff' }}>Goods</p>
        </Button>
      </Link>
      <Link to="/cart" style={{ textDecoration: 'none' }}>
        <Button color="inherit">
          <img src={cartIcon} alt="cart" />
          {totalPrise !== IsInCart.Empty && <p style={{ color: '#fff' }}>{totalPrise}</p>}
        </Button>
      </Link>
    </div>
  );
};
