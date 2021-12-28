// запрос данных состояния localStorage
import { ProductObjType } from 'api';

export const getLocalData = (keyToLocalData: string): Array<ProductObjType> => {
  const serializedState = localStorage.getItem(keyToLocalData);
  if (serializedState !== null) {
    return JSON.parse(serializedState).filter(
      (product: ProductObjType) => product !== null,
    );
  }
  return [];
};

// сохранение состояния в localStorage
export const saveCartContentsLocally = (
  state: Array<ProductObjType>,
  keyToLocalData: string,
): void => {
  const serializedState = JSON.stringify(state);
  localStorage.setItem(keyToLocalData, serializedState);
};
