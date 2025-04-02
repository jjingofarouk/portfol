import React, { useEffect, useState } from "react";

export const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0, velocity: 0 });
  const [lastPosition, setLastPosition] = useState({ x: 0, y: 0 });
  const [lastTime, setLastTime] = useState(performance.now());

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const currentTime = performance.now();
      const timeDiff = currentTime - lastTime;

      const distance = Math.sqrt(
        Math.pow(event.clientX - lastPosition.x, 2) + 
        Math.pow(event.clientY - lastPosition.y, 2)
      );

      const velocity = timeDiff > 0 ? distance / timeDiff : 0;

      setMousePosition({ x: event.clientX, y: event.clientY, velocity });
      setLastPosition({ x: event.clientX, y: event.clientY });
      setLastTime(currentTime);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [lastPosition, lastTime]);

  return mousePosition;
};