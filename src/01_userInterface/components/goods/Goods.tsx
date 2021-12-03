import React, { memo, ReactElement } from 'react';

import { useSelector } from 'react-redux';

import { Product } from './product';

import { AppRootStateType } from '02_bisnessLogik';
import { ProductObjType } from '03_inquiries';
import styleContainer from '05_common/styles/Container.module.css';

export const Goods = memo((): ReactElement => {
  const goods = useSelector<AppRootStateType, Array<ProductObjType>>(
    state => state.goods.data,
  );

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
