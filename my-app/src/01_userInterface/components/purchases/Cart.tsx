import React, { FC, memo, ReactElement } from 'react';

import { PaymentForm } from './paymentData/PaymentForm';
import { ProductsListContainer } from './productsList/ProductsListContainer';

import styleContainer from '05_common/styles/Container.module.css';

type CartPropsType = {
  mediaStyle?: object;
};

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
