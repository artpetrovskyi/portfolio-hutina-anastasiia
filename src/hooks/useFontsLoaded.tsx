import { useEffect, useState } from "react";

export function useFontsLoaded() {
  const [fontsReady, setFontsReady] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (document as any).fonts?.ready.then(() => setFontsReady(true));
  }, []);

  return fontsReady;
}
