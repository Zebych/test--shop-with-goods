import { useEffect, useState } from 'react';

export const useCartMediaHook = (): { matches: boolean } => {
  const [matches, setMatches] = useState(window.matchMedia('(min-width: 550px)').matches);

  useEffect(() => {
    const eventSetMatches = (e: MediaQueryListEvent): void => setMatches(e.matches);
    window.matchMedia('(min-width: 550px)').addEventListener('change', eventSetMatches);
  }, [matches]);

  return { matches };
};
