import { useEffect, useState, useCallback } from "react";

interface MousePosition {
  x: number;              // Absolute X position
  y: number;              // Absolute Y position
  normalizedX: number;    // Normalized X (0 to 1, relative to window width)
  normalizedY: number;    // Normalized Y (0 to 1, relative to window height)
  isTouch: boolean;       // Indicates if the input is from a touch event
  velocity: number;       // Movement speed (pixels per frame)
}

export function useFancyMousePosition(
  options: {
    debounceMs?: number;  // Debounce delay in milliseconds (default: 0)
    smoothFactor?: number; // Smoothing factor for animation (0 to 1, default: 0.1)
  } = {}
): MousePosition {
  const { debounceMs = 0, smoothFactor = 0.1 } = options;

  const [mousePosition, setMousePosition] = useState<MousePosition>({
    x: 0,
    y: 0,
    normalizedX: 0,
    normalizedY: 0,
    isTouch: false,
    velocity: 0,
  });

  // Debounce utility to limit update frequency
  const debounce = useCallback(
    (fn: (...args: any[]) => void, delay: number) => {
      let timeoutId: NodeJS.Timeout;
      return (...args: any[]) => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => fn(...args), delay);
      };
    },
    []
  );

  useEffect(() => {
    let lastX = 0;
    let lastY = 0;
    let lastTime = performance.now();
    let animationFrameId: number;

    // Smoothly interpolate position using requestAnimationFrame
    const updatePosition = (targetX: number, targetY: number, isTouch: boolean) => {
      const update = () => {
        setMousePosition((prev) => {
          const newX = prev.x + (targetX - prev.x) * smoothFactor;
          const newY = prev.y + (targetY - prev.y) * smoothFactor;
          const timeNow = performance.now();
          const deltaTime = (timeNow - lastTime) / 1000; // Seconds
          const distance = Math.sqrt((newX - lastX) ** 2 + (newY - lastY) ** 2);
          const velocity = distance / deltaTime;

          lastX = newX;
          lastY = newY;
          lastTime = timeNow;

          return {
            x: newX,
            y: newY,
            normalizedX: newX / window.innerWidth,
            normalizedY: newY / window.innerHeight,
            isTouch,
            velocity,
          };
        });
      };

      cancelAnimationFrame(animationFrameId);
      animationFrameId = requestAnimationFrame(update);
    };

    // Handle mouse movement
    const handleMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event;
      updatePosition(clientX, clientY, false);
    };

    // Handle touch movement (for mobile devices)
    const handleTouchMove = (event: TouchEvent) => {
      const touch = event.touches[0];
      updatePosition(touch.clientX, touch.clientY, true);
    };

    // Debounced versions if debounceMs is set
    const debouncedMouseMove = debounceMs > 0 ? debounce(handleMouseMove, debounceMs) : handleMouseMove;
    const debouncedTouchMove = debounceMs > 0 ? debounce(handleTouchMove, debounceMs) : handleTouchMove;

    // Add event listeners
    window.addEventListener("mousemove", debouncedMouseMove);
    window.addEventListener("touchmove", debouncedTouchMove, { passive: true });

    // Cleanup
    return () => {
      window.removeEventListener("mousemove", debouncedMouseMove);
      window.removeEventListener("touchmove", debouncedTouchMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [debounceMs, smoothFactor, debounce]);

  return mousePosition;
}

// Example usage:
/*
const { x, y, normalizedX, normalizedY, isTouch, velocity } = useFancyMousePosition({
  debounceMs: 10,    // Slight debounce for performance
  smoothFactor: 0.2, // Smooth but responsive animation
});
*/