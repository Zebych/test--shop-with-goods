import React, { ReactElement } from 'react';

import { ProductContainer } from './product';

import { goodsArrData, useAppSelector } from 'store';
import styleContainer from 'styles/Container.module.css';

export const Goods = (): ReactElement => {
  const goods = useAppSelector(goodsArrData);

  return (
    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
      <div className={styleContainer.container}>
        {goods.map(product => (
          <ProductContainer
            photo={product.photo}
            name={product.name}
            id={product.id}
            price={product.price}
            key={product.id}
          />
        ))}
      </div>
    </div>
  );
};
