"use client";
import React, { useEffect, useState, useCallback, useMemo } from "react";
import { motion, AnimatePresence, useAnimationControls } from "framer-motion";
import { cn } from "@/lib/utils";
import { useMousePosition } from "../hooks/use-mouse-position";

// Enhanced configuration for spectacular visual flair
const TRAIL_COLORS = [
  { color: "#00ffcc", glow: "0 0 15px #00ffcc" },
  { color: "#ff00cc", glow: "0 0 15px #ff00cc" },
  { color: "#33ccff", glow: "0 0 15px #33ccff" },
  { color: "#ffcc00", glow: "0 0 15px #ffcc00" },
  { color: "#cc00ff", glow: "0 0 15px #cc00ff" },
  { color: "#ff3300", glow: "0 0 15px #ff3300" },
];

const MAX_CATS = 12; // Increased for more spectacular effect
const SPAWN_INTERVAL = 3000;
const TRAIL_VARIATIONS = ["stars", "dots", "squares", "diamonds"];

interface NyanEntity {
  id: string;
  speed: number;
  colorScheme: { color: string; glow: string };
  trailLength: number;
  size: number;
  trailType: string;
  rotationFactor: number;
  bounceFactor: number;
}

const NyanCat = () => {
  const [entities, setEntities] = useState<NyanEntity[]>([]);
  const mousePosition = useMousePosition();
  const [showControls, setShowControls] = useState(false);
  const [autoSpawn, setAutoSpawn] = useState(true);
  
  // Generate a new enhanced Nyan entity
  const spawnEntity = useCallback(() => {
    if (entities.length >= MAX_CATS) return;
    
    const colorScheme = TRAIL_COLORS[Math.floor(Math.random() * TRAIL_COLORS.length)];
    const trailType = TRAIL_VARIATIONS[Math.floor(Math.random() * TRAIL_VARIATIONS.length)];
    
    const newEntity: NyanEntity = {
      id: `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
      speed: Math.random() * 4 + 3, // 3 to 7 seconds for crossing
      colorScheme,
      trailLength: Math.floor(Math.random() * 30) + 15, // 15 to 45 particles
      size: Math.random() * 0.5 + 0.8, // Size variation between 0.8x and 1.3x
      trailType,
      rotationFactor: (Math.random() * 10) - 5, // Random rotation between -5 and 5 degrees
      bounceFactor: Math.random() * 100 + 50, // Random bounce height
    };
    
    setEntities((prev) => [...prev, newEntity]);
  }, [entities.length]);

  // Auto-spawn and keyboard triggers
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "n") spawnEntity();
      if (e.key === "c") setShowControls(prev => !prev);
      if (e.key === "x") setEntities([]);
    };

    window.addEventListener("keydown", handleKeyDown);
    
    let interval: NodeJS.Timeout | null = null;
    if (autoSpawn) {
      interval = setInterval(spawnEntity, SPAWN_INTERVAL);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      if (interval) clearInterval(interval);
    };
  }, [spawnEntity, autoSpawn]);

  // Dynamic background effect based on entities
  const backgroundStyle = useMemo(() => {
    if (entities.length === 0) return {};
    
    // Create a gradient based on active entities
    const colors = entities.map(e => e.colorScheme.color).slice(0, 3);
    if (colors.length < 2) colors.push("#000");
    
    return {
      background: `radial-gradient(circle, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.95) 100%), 
                  linear-gradient(45deg, ${colors.join(', ')})`,
      backgroundBlendMode: 'overlay',
      transition: 'all 1s ease-in-out'
    };
  }, [entities]);

  return (
    <div 
      className="fixed inset-0 w-screen h-screen overflow-hidden z-[-1] pointer-events-none"
      style={backgroundStyle}
    >
      {/* Starfield effect */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 50 }).map((_, i) => (
          <motion.div
            key={`star-${i}`}
            className="absolute bg-white rounded-full"
            style={{
              width: Math.random() * 3 + 1,
              height: Math.random() * 3 + 1,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              repeat: Infinity,
              duration: Math.random() * 3 + 2,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      {/* Controls Panel */}
      <AnimatePresence>
        {showControls && (
          <motion.div
            className="fixed top-4 right-4 bg-black/80 p-4 rounded-lg border border-white/20 text-white font-mono text-sm backdrop-blur-md pointer-events-auto"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <h3 className="text-lg mb-2 font-bold text-cyan-400">Nyan Controls</h3>
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-center">
                <span>Auto-spawn:</span>
                <button 
                  onClick={() => setAutoSpawn(prev => !prev)}
                  className={`px-2 py-1 rounded ${autoSpawn ? 'bg-green-500' : 'bg-red-500'}`}
                >
                  {autoSpawn ? 'ON' : 'OFF'}
                </button>
              </div>
              <div className="flex justify-between items-center">
                <span>Entities:</span>
                <span>{entities.length}/{MAX_CATS}</span>
              </div>
              <div className="flex gap-2 mt-2">
                <button 
                  onClick={spawnEntity}
                  className="px-2 py-1 bg-blue-500 rounded hover:bg-blue-600 flex-1"
                >
                  Spawn Cat
                </button>
                <button 
                  onClick={() => setEntities([])}
                  className="px-2 py-1 bg-red-500 rounded hover:bg-red-600 flex-1"
                >
                  Clear All
                </button>
              </div>
              <div className="text-xs mt-2 text-gray-400">
                Keyboard: [N] Spawn, [C] Toggle Panel, [X] Clear
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Small indicator */}
      <motion.div
        className="fixed bottom-4 left-4 text-xs font-mono text-white bg-black/50 px-3 py-1.5 rounded-full flex items-center gap-2 border border-white/10 backdrop-blur-sm cursor-pointer pointer-events-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        onClick={() => setShowControls(prev => !prev)}
        whileHover={{ scale: 1.05 }}
      >
        <div className={`w-2 h-2 rounded-full ${entities.length ? 'bg-green-400' : 'bg-gray-400'}`} />
        <span>{entities.length}/{MAX_CATS}</span>
      </motion.div>

      {/* Nyan entities */}
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
  const [isHovered, setIsHovered] = useState(false);

  // Random starting Y position with futuristic offset
  const initialY = Math.random() * (window.innerHeight * 0.8);

  // Animation with dynamic path influenced by mouse
  useEffect(() => {
    if (isPaused) return;
    
    const animation = async () => {
      await controls.start({
        x: window.innerWidth + 200,
        y: [
          initialY,
          initialY + Math.sin(Date.now() * 0.001) * entity.bounceFactor,
          initialY - Math.sin(Date.now() * 0.002) * entity.bounceFactor,
          initialY,
        ],
        transition: { 
          duration: entity.speed, 
          ease: "linear",
          y: {
            repeat: Infinity,
            duration: entity.speed / 2,
            ease: "easeInOut"
          }
        },
      });
      onComplete();
    };
    
    animation();
    
    return () => {
      controls.stop();
    };
  }, [controls, entity.speed, entity.bounceFactor, initialY, isPaused, onComplete]);

  // Pause/resume on click
  const togglePause = () => {
    setIsPaused((prev) => {
      if (prev) {
        controls.start({
          x: window.innerWidth + 200,
          transition: { duration: entity.speed, ease: "linear" },
        });
      } else {
        controls.stop();
      }
      return !prev;
    });
  };

  // Determine trail shape based on entity type
  const getTrailShape = (index: number) => {
    const baseSize = 12 - index * 0.3;
    const opacity = 1 - index / entity.trailLength;
    
    switch (entity.trailType) {
      case "stars":
        return {
          clipPath: "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
          width: `${baseSize}px`,
          height: `${baseSize}px`,
        };
      case "squares":
        return {
          borderRadius: "2px",
          width: `${baseSize}px`,
          height: `${baseSize}px`,
          transform: `rotate(${index * 15}deg)`,
        };
      case "diamonds":
        return {
          width: `${baseSize}px`,
          height: `${baseSize}px`,
          transform: `rotate(45deg)`,
        };
      default: // dots
        return {
          width: `${baseSize}px`,
          height: `${baseSize}px`,
          borderRadius: "50%",
        };
    }
  };

  return (
    <motion.div
      className="absolute pointer-events-auto cursor-pointer"
      initial={{ x: -200, y: initialY }}
      animate={controls}
      onClick={togglePause}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      style={{ zIndex: isHovered ? 10 : 1 }}
    >
      {/* Interactive info tooltip */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: -40 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 bg-black/70 text-white text-xs px-2 py-1 rounded whitespace-nowrap backdrop-blur-sm border border-white/10"
          >
            {isPaused ? "▶️ Resume" : "⏸️ Pause"} Nyan
          </motion.div>
        )}
      </AnimatePresence>

      {/* Nyan Cat with Enhanced Neon Glow */}
      <motion.div
        className="relative"
        style={{ 
          transform: `scale(${entity.size})`,
          filter: isPaused ? "grayscale(80%)" : "none",
        }}
        whileHover={{ scale: entity.size * 1.2 }}
      >
        <motion.img
          src="/assets/nyan-cat.gif"
          alt="Nyan Entity"
          className={cn("h-24 w-auto z-10")}
          style={{ 
            filter: `hue-rotate(${entity.colorScheme.color}deg) drop-shadow(${entity.colorScheme.glow})`,
            opacity: isPaused ? 0.7 : 1
          }}
          animate={{ 
            rotate: isPaused ? 0 : [0, entity.rotationFactor, -entity.rotationFactor, 0] 
          }}
          transition={{ repeat: Infinity, duration: 0.8 }}
        />
        
        {/* Glow effect */}
        {!isPaused && (
          <motion.div
            className="absolute inset-0 z-5 rounded-full blur-md"
            style={{ 
              background: entity.colorScheme.color,
              opacity: 0.4,
            }}
            animate={{ opacity: [0.2, 0.4, 0.2] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          />
        )}
      </motion.div>

      {/* Enhanced Particle Trail */}
      {Array.from({ length: entity.trailLength }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            background: entity.colorScheme.color,
            left: `-${i * 10}px`,
            top: `${Math.sin(i * 0.3) * 5}px`,
            opacity: isPaused ? 0.3 : 1 - i / entity.trailLength,
            boxShadow: isPaused ? "none" : entity.colorScheme.glow,
            ...getTrailShape(i),
          }}
          animate={{
            y: isPaused ? 0 : [0, Math.sin(i * 0.5) * 8, 0],
            scale: isPaused ? 0.5 : [1, 0.8, 1],
            opacity: isPaused ? 0.3 : [0.8 - i * 0.02, 0.4 - i * 0.02],
          }}
          transition={{ 
            duration: isPaused ? 0 : entity.speed / 5, 
            repeat: Infinity,
            delay: i * 0.02,
          }}
        />
      ))}
    </motion.div>
  );
};

export default NyanCat;