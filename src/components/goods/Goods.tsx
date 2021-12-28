import React, { FC, ReactElement } from 'react';

import { ProductContainer } from './product';
import { GoodsPropsType } from './types';

import styleContainer from 'styles/Container.module.css';

export const Goods: FC<GoodsPropsType> = ({ allProducts }): ReactElement => (
  <div style={{ display: 'flex', justifyContent: 'space-around' }}>
    <div className={styleContainer.container}>
      {allProducts.map(({ photo, name, id, price }) => (
        <ProductContainer photo={photo} name={name} id={id} price={price} key={id} />
      ))}
    </div>
  </div>
);
