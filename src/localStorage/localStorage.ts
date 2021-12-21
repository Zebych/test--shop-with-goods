// запрос данных состояния localStorage
import { ProductObjType } from 'api';

export const getLocalData = (): Array<ProductObjType> => {
  const serializedState = localStorage.getItem('addedProduct');
  if (serializedState !== null) {
    return JSON.parse(serializedState).filter(
      (product: ProductObjType) => product !== null,
    );
  }
  return [];
};

// сохранение состояния в localStorage
export const saveAddedCartToLocalStorage = (state: Array<ProductObjType>): void => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('addedProduct', serializedState);
  } catch {
    // ignore write errors
  }
};
