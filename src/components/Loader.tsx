import { useEffect } from "react";
import { motion, useMotionValue, useTransform, animate } from "motion/react";

interface Props {
  duration?: number;
  panelDuration?: number;
  onComplete?: () => void;
}

export default function Loader({
  duration = 1,
  panelDuration = 0.5,
  onComplete,
}: Props) {
  const progress = useMotionValue(0);
  const panels = useMotionValue(0);

  const lineScale = useTransform(
    progress,
    [0, 20, 50, 80, 100],
    [0, 0.1, 0.6, 0.9, 1],
  );
  const lineOpacity = useTransform(progress, [95, 100], [1, 0]);

  const leftX = useTransform(panels, [0, 100], ["0%", "-100%"]);
  const rightX = useTransform(panels, [0, 100], ["0%", "100%"]);

  useEffect(() => {
    const body = document.body;
    const html = document.documentElement;

    // Calculate scrollbar width
    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;

    // Store original styles
    const originalBodyOverflow = body.style.overflow;
    const originalBodyPaddingRight = body.style.paddingRight;
    const originalHtmlOverflow = html.style.overflow;

    // Prevent scroll and compensate for scrollbar
    body.style.overflow = "hidden";
    body.style.paddingRight = `${scrollbarWidth}px`;
    html.style.overflow = "hidden";

    const lineControls = animate(progress, 100, {
      duration,
      ease: "easeInOut",
      onComplete: () => {
        animate(panels, 100, {
          duration: panelDuration,
          ease: "easeInOut",
          onComplete: () => {
            // Restore original styles
            body.style.overflow = originalBodyOverflow;
            body.style.paddingRight = originalBodyPaddingRight;
            html.style.overflow = originalHtmlOverflow;

            if (onComplete) {
              onComplete();
            }
          },
        });
      },
    });

    return () => {
      lineControls.stop();
      // Cleanup on unmount
      body.style.overflow = originalBodyOverflow;
      body.style.paddingRight = originalBodyPaddingRight;
      html.style.overflow = originalHtmlOverflow;
    };
  }, [duration, panelDuration, onComplete, progress, panels]);

  return (
    <>
      <motion.div
        style={{ x: leftX }}
        className="bg-input/30 fixed top-0 left-0 z-9999 h-screen w-1/2"
      />
      <motion.div
        style={{ scaleY: lineScale, opacity: lineOpacity }}
        className="bg-foreground fixed top-1/2 left-1/2 z-9999 h-screen w-[2px] origin-center -translate-x-1/2 -translate-y-1/2"
      />
      <motion.div
        style={{ x: rightX }}
        className="bg-input/30 fixed top-0 right-0 z-9999 h-screen w-1/2"
      />
    </>
  );
}
