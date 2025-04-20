// src/components/smooth-scroll.tsx
"use client";

import React, { useEffect } from "react";
import { Lenis, useLenis } from "@/lib";

interface LenisProps {
  children: React.ReactNode;
  isInsideModal?: boolean;
}

function SmoothScroll({ children, isInsideModal = false }: LenisProps) {
  const lenis = useLenis(); // Remove empty callback if not needed

  useEffect(() => {
    if (lenis) {
      lenis.start();
      return () => lenis.stop(); // Cleanup on unmount
    }
  }, [lenis]);

  return (
    <Lenis
      root
      options={{
        duration: 2,
        prevent: (node: HTMLElement) => {
          if (isInsideModal) return true;
          const modalOpen = node.classList.contains("modall");
          return modalOpen;
        },
      }}
    >
      {children}
    </Lenis>
  );
}

export default SmoothScroll;