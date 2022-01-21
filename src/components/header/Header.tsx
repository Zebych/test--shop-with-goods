import React, { FC, memo, ReactElement } from 'react';

import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

import { HeaderPropsType } from './types';

import cartIcon from 'assets/img/iconShoppingCart.png';
import { CartStatus, NavigatePath } from 'enum';

export const Header: FC<HeaderPropsType> = memo(
  ({ sumPrice }): ReactElement => (
    <div>
      <Link to={NavigatePath.Goods} style={{ textDecoration: 'none' }}>
        <Button color="inherit">
          <p style={{ color: '#fff' }}>Goods</p>
        </Button>
      </Link>
      <Link to={NavigatePath.Cart} style={{ textDecoration: 'none' }}>
        <Button color="inherit">
          <img src={cartIcon} alt="cart" />
          {sumPrice !== CartStatus.Empty && <p style={{ color: '#fff' }}>{sumPrice}</p>}
        </Button>
      </Link>
    </div>
  ),
);
