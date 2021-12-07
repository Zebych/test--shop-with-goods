import React, { memo, ReactElement } from 'react';

import { Product } from './product';

import { useAppSelector } from '02_bisnessLogik';
import { goodsArrData } from '05_common';
import styleContainer from '05_common/styles/Container.module.css';

export const Goods = memo((): ReactElement => {
  const goods = useAppSelector(goodsArrData);

  return (
    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
      <div className={styleContainer.container}>
        {goods.map(g => (
          <Product photo={g.photo} name={g.name} id={g.id} price={g.price} key={g.id} />
        ))}
      </div>
    </div>
  );
});
