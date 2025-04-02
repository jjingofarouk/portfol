"use client";
import React, { useEffect, useState, useCallback } from "react";
import { motion, AnimatePresence, useAnimationControls } from "framer-motion";
import { cn } from "@/lib/utils";
import { useMousePosition } from "../hooks/use-mouse-position"; // Assuming your fancy mouse hook is available

// Configuration for futuristic flair
const TRAIL_COLORS = ["#00ffcc", "#ff00cc", "#33ccff", "#ffcc00", "#cc00ff"];
const MAX_CATS = 10; // Limit for performance
const SPAWN_INTERVAL = 3000; // Auto-spawn every 3s

interface NyanEntity {
  id: string;
  speed: number;
  hue: string;
  trailLength: number;
}

const NyanCat = () => {
  const [entities, setEntities] = useState<NyanEntity[]>([]);
  const mousePosition = useMousePosition(); // No arguments

  // Generate a new Nyan entity
  const spawnEntity = useCallback(() => {
    if (entities.length >= MAX_CATS) return;
    const newEntity: NyanEntity = {
      id: `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
      speed: Math.random() * 3 + 2, // 2 to 5 seconds
      hue: TRAIL_COLORS[Math.floor(Math.random() * TRAIL_COLORS.length)],
      trailLength: Math.floor(Math.random() * 20) + 10, // 10 to 30 particles
    };
    setEntities((prev) => [...prev, newEntity]);
  }, [entities]);

  // Auto-spawn and keyboard trigger
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "n") spawnEntity();
    };

    window.addEventListener("keydown", handleKeyDown);
    const interval = setInterval(spawnEntity, SPAWN_INTERVAL);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      clearInterval(interval);
    };
  }, [spawnEntity]);

  return (
    <div className="fixed inset-0 w-screen h-screen overflow-hidden z-[-1] pointer-events-none">
      <motion.div
        className="fixed top-4 left-4 text-xs font-mono text-white bg-black/50 px-2 py-1 rounded-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        Nyan Entities: {entities.length}/{MAX_CATS}
      </motion.div>

      <AnimatePresence>
        {entities.map((entity) => (
          <NyanEntity
            key={entity.id}
            entity={entity}
            mousePosition={mousePosition}
            onComplete={() => setEntities((prev) => prev.filter((e) => e.id !== entity.id))}
          />
        ))}
      </AnimatePresence>
    </div>
  );
};

const NyanEntity = ({
  entity,
  mousePosition,
  onComplete,
}: {
  entity: NyanEntity;
  mousePosition: { x: number; y: number; velocity: number };
  onComplete: () => void;
}) => {
  const controls = useAnimationControls();
  const [isPaused, setIsPaused] = useState(false);

  // Random starting Y position with futuristic offset
  const initialY = Math.random() * (window.innerHeight * 0.8);

  // Animation with dynamic path influenced by mouse
  useEffect(() => {
    const animation = async () => {
      await controls.start({
        x: window.innerWidth + 100,
        y: initialY + Math.sin(mousePosition.x * 0.01) * 50, // Wavy path based on mouse X
        transition: { duration: entity.speed, ease: "linear" },
      });
      onComplete();
    };
    animation();
  }, [controls, entity.speed, initialY, mousePosition.x, onComplete]);

  // Pause/resume on click
  const togglePause = () => {
  setIsPaused((prev) => {
    if (prev) {
      controls.start("running");  // Pass the name of the animation or keyframe
    } else {
      controls.stop();  // Stop the animation
    }
    return !prev;
  });
};

  return (
    <motion.div
      className="absolute pointer-events-auto"
      initial={{ x: -200, y: initialY }}
      animate={controls}
      onClick={togglePause}
      whileHover={{ scale: 1.1 }}
    >
      {/* Nyan Cat with Neon Glow */}
      <motion.img
        src="/assets/nyan-cat.gif"
        alt="Nyan Entity"
        className={cn("h-24 w-auto z-10")}
        style={{ filter: `hue-rotate(${entity.hue}deg) drop-shadow(0 0 10px ${entity.hue})` }}
        animate={{ rotate: isPaused ? 0 : [0, 5, -5, 0] }}
        transition={{ repeat: Infinity, duration: 0.5 }}
      />

      {/* Particle Trail */}
      {Array.from({ length: entity.trailLength }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            background: entity.hue,
            width: `${10 - i * 0.3}px`,
            height: `${10 - i * 0.3}px`,
            left: `-${i * 15}px`,
            opacity: 1 - i / entity.trailLength,
          }}
          animate={{
            x: [-10, -20],
            scale: [1, 0.5],
            opacity: [0.8, 0],
          }}
          transition={{ duration: entity.speed / 2, repeat: Infinity }}
        />
      ))}
    </motion.div>
  );
};

export default NyanCat;