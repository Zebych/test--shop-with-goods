import { useCartMediaHook } from './useCartMediaHook';

export const useMediaStyleHook = (): { mediaStyle: { display: string } } => {
  const { matches } = useCartMediaHook();

  const mediaStyle = matches ? { display: 'flex' } : { display: 'block' };

  return { mediaStyle };
};
