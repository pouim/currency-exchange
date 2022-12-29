import { isAllValuesTruthy } from "helpers/function";
import { useState, useEffect, useRef } from "react";

/**
 * @description custom hook to check is it desktop device or not.
 * @function useIsDesktop
 * @returns { boolean }
 */
export function useIsDesktop() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 701px)");
    setIsDesktop(mediaQuery.matches);

    const handleMediaQueryChange = () => setIsDesktop(mediaQuery.matches);
    mediaQuery.addListener(handleMediaQueryChange);

    return () => {
      mediaQuery.removeListener(handleMediaQueryChange);
    };
  }, []);

  return isDesktop;
}

/**
 * @description custom hook that check if object is changed.
 * @function useIfObjectChanged
 * @param { Record<string, unknown> } value 
 * @param { CallableFunction } callback 
 */
export function useIfObjectChanged(
  value: Record<string, unknown>,
  callback: CallableFunction
) {
  const ref = useRef<Record<string, unknown>>({});

  useEffect(() => {
    if (
      JSON.stringify(value) !== JSON.stringify(ref.current) &&
      isAllValuesTruthy(value)
    ) {
      callback();
    }
    ref.current = value;
  }, [value, callback]);
}
