import React, { memo, ReactElement } from 'react';

import { ProductContainer } from './product';

import styleContainer from '05_common/styles/Container.module.css';
import { goodsArrData, useAppSelector } from 'store';

export const Goods = memo((): ReactElement => {
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
});
