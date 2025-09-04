import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

export default function CustomCursor() {
  const mouseX = useMotionValue(-50);
  const mouseY = useMotionValue(-50);
  const scale = useMotionValue(1);

  // Add spring physics for smoother scaling
  const springScale = useSpring(scale, { stiffness: 300, damping: 30 });

  // Track current state to avoid unnecessary updates
  const isInteractiveRef = useRef(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      const target = e.target as HTMLElement;
      const interactive = target.closest(
        "a, button, input, textarea, [role='button'], [data-interactive]",
      );

      const shouldScale = !!interactive;

      // Only update scale if state actually changed
      if (shouldScale !== isInteractiveRef.current) {
        isInteractiveRef.current = shouldScale;
        scale.set(shouldScale ? 2.5 : 1);
      }
    };

    const handleMouseLeave = () => {
      // Hide cursor when leaving viewport
      scale.set(0);
    };

    const handleMouseEnter = () => {
      // Show cursor when entering viewport
      scale.set(1);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [mouseX, mouseY, scale]);

  return (
    <motion.div
      style={{
        x: mouseX,
        y: mouseY,
        scale: springScale,
      }}
      className="custom-cursor pointer-events-none fixed top-0 left-0 z-[9999] h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white mix-blend-difference"
    />
  );
}
