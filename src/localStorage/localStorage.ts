// запрос данных состояния localStorage
import { ProductObjType } from 'api';

export const getLocalData = (): any => {
  try {
    const serializedState = localStorage.getItem('addedProduct');
    if (serializedState !== null) {
      return JSON.parse(serializedState).filter((l: any) => l !== null);
    }
    return [];
  } catch {
    return null;
    // ignore write errors
  }
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
