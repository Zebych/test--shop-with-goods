import React, { FC, memo, ReactElement } from 'react';

import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

import { HeaderPropsType } from './types';

import cartIcon from 'assets/img/outline_shopping_cart_white_18dp.png';
import { IsInCart } from 'components';

export const Header: FC<HeaderPropsType> = memo(
  ({ totalPrise }): ReactElement => (
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
  ),
);
