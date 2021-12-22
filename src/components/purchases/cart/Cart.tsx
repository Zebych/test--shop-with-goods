import React, { FC, memo, ReactElement } from 'react';

import { PaymentForm } from '../paymentData';
import { ProductsListContainer } from '../productsList';

import { CartPropsType } from './types';

import styleContainer from 'styles/Container.module.css';

export const Cart: FC<CartPropsType> = memo(
  ({ mediaStyle }): ReactElement => (
    <div className={styleContainer.container}>
      <div style={{ display: 'flex' }}>
        <div style={mediaStyle}>
          <ProductsListContainer />
          <PaymentForm mediaStyle={mediaStyle} />
        </div>
      </div>
    </div>
  ),
);
