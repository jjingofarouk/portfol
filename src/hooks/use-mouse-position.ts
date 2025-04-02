import React, { useEffect, useState } from "react";

export const useMousePosition = ({ smoothFactor = 1 } = {}) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition((prev) => ({
        x: prev.x + (event.clientX - prev.x) * smoothFactor,
        y: prev.y + (event.clientY - prev.y) * smoothFactor,
      }));
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [smoothFactor]);

  return mousePosition;
};