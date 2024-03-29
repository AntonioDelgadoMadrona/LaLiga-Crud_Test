// CUSTOM HOOK
import { useScreen } from "./useScreen";

interface WindowSize {
  width: number;
  height: number;
}

function useWindowSize(): WindowSize {
  const screen = useScreen();
  return {
    width: screen?.width || 0,
    height: screen?.height || 0,
  };
}

export { useWindowSize };
