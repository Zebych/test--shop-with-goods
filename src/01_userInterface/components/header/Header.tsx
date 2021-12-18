import React, { memo, ReactElement } from 'react';

import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

import cartIcon from '04_assets/img/outline_shopping_cart_white_18dp.png';
import { totalPriceCarts, useAppSelector } from 'store';

export const Header = memo((): ReactElement => {
  const totalPrise = useAppSelector(totalPriceCarts);

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
          {totalPrise > 0 && <p style={{ color: '#fff' }}>{totalPrise}</p>}
        </Button>
      </Link>
    </div>
  );
});
