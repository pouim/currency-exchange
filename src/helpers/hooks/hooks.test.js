import { renderHook } from "@testing-library/react";
import { useIsDesktop } from "./index";

describe("useIsDesktop", () => {
  it("should return true for desktop devices", () => {
    window.matchMedia = jest.fn().mockImplementation((query) => {
      return {
        matches: true,
        media: query,
        onchange: null,
        addListener: jest.fn(),
        removeListener: jest.fn(),
      };
    });

    const { result } = renderHook(() => useIsDesktop());
    expect(result.current).toBe(true);
  });

  it("should return false for mobile devices", () => {
    window.matchMedia = jest.fn().mockImplementation((query) => {
      return {
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(),
        removeListener: jest.fn(),
      };
    });

    const { result } = renderHook(() => useIsDesktop());
    expect(result.current).toBe(false);
  });
});
