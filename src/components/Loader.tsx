import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

interface Props {
  duration?: number;
  showContent: boolean;
}

export default function Loader({ duration = 1, showContent }: Props) {
  const [isVisible, setIsVisible] = useState(true);

  // Trigger exit animation when showContent becomes true
  useEffect(() => {
    if (showContent) {
      const timeout = setTimeout(() => setIsVisible(false), 0);
      return () => clearTimeout(timeout);
    }
  }, [showContent]);

  return (
    <AnimatePresence>
      {isVisible && (
        <React.Fragment key="loader">
          <motion.div
            className="fixed top-0 left-0 z-9999 h-screen w-1/2 bg-neutral-950"
            exit={{ x: "-100%" }}
            transition={{ duration: 1 }}
          />
          <motion.div
            className="fixed top-0 right-0 z-9999 h-screen w-1/2 bg-neutral-950"
            exit={{ x: "100%" }}
            transition={{ duration: 1 }}
          />

          <motion.div
            className="bg-foreground fixed top-1/2 left-1/2 z-9999 h-screen w-[2px] origin-center -translate-x-1/2 -translate-y-1/2"
            initial={{ scaleY: 0 }}
            animate={{
              scaleY: 1,
              transition: {
                duration: duration / 2,
                delay: duration / 2,
                ease: "easeInOut",
              },
            }}
            exit={{
              opacity: 0,
              transition: { duration: 0.2, ease: "easeInOut" },
            }}
          />
        </React.Fragment>
      )}
    </AnimatePresence>
  );
}
