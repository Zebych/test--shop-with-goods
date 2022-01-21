// запрос данных состояния localStorage
import { ProductType } from 'api';

export const getLocalData = (keyToLocalData: string): Array<ProductType> => {
  const serializedState = localStorage.getItem(keyToLocalData);
  if (serializedState !== null) {
    return JSON.parse(serializedState).filter((product: ProductType) => product !== null);
  }
  return [];
};

// сохранение состояния в localStorage
export const saveCartContentsLocally = (
  state: Array<ProductType>,
  keyToLocalData: string,
): void => {
  const serializedState = JSON.stringify(state);
  localStorage.setItem(keyToLocalData, serializedState);
};
