import { useState, useEffect } from "react";

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