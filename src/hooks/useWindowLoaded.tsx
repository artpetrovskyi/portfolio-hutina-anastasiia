import { useEffect, useState } from "react";

export function useWindowLoaded(): boolean {
  const [loaded, setLoaded] = useState<boolean>(
    document.readyState === "complete",
  );

  useEffect(() => {
    if (loaded) {
      return; // already loaded
    }

    function handleLoad() {
      setLoaded(true);
    }

    window.addEventListener("load", handleLoad);
    return () => window.removeEventListener("load", handleLoad);
  }, [loaded]);

  return loaded;
}
