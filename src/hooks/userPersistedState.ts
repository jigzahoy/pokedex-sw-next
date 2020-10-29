import { useState, useEffect } from "react";
/**
 *  Custom Hook by sulbekk
 * @param {string} key
 * @param {object} defaultValue
 */
export function usePersistedState<T>(key: string, defaultValue) {
  const [state, setState] = useState<T>(
    () => JSON.parse(window.localStorage.getItem(key)) || defaultValue
  );
  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);
  return [state, setState];
}
