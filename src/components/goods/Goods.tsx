import React, { ReactElement } from 'react';

import { ProductContainer } from './product';

import { toGoodsData, useAppSelector } from 'store';
import styleContainer from 'styles/Container.module.css';

export const Goods = (): ReactElement => {
  const goods = useAppSelector(toGoodsData);

  return (
    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
      <div className={styleContainer.container}>
        {goods.map(({ photo, name, id, price }) => (
          <ProductContainer photo={photo} name={name} id={id} price={price} key={id} />
        ))}
      </div>
    </div>
  );
};
