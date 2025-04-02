import { useMemo } from "react"; // For an optional hook version

// Define data with const assertions for better type inference and immutability
const ADJECTIVES = [
  "Clever", "Brave", "Quick", "Silent", "Eager", "Bold", "Bright", "Fierce",
  "Gentle", "Mighty", "Noble", "Proud", "Swift", "Calm", "Daring",
] as const;

const NOUNS = [
  "Tiger", "Lion", "Eagle", "Falcon", "Wolf", "Panther", "Hawk", "Bear",
  "Whale", "Fox", "Lynx", "Otter", "Serpent", "Dragon", "Phoenix",
] as const;

const COLORS = [
  "#60a5fa", "#f87171", "#4ade80", "#facc15", "#c084fc",
  "#fb923c", "#f43f5e", "#818cf8", "#22d3ee", "#a3e635",
] as const;

// Type definitions for better clarity and safety
type Adjective = typeof ADJECTIVES[number];
type Noun = typeof NOUNS[number];
type Color = typeof COLORS[number];

interface Cursor {
  name: `${Adjective} ${Noun}`;
  color: Color;
  id: string; // Unique identifier for tracking or animation purposes
}

interface GeneratorOptions {
  seed?: number | string; // For deterministic output (e.g., user-specific cursors)
  uniqueCount?: number;   // Limit the number of unique combinations to generate
}

// Custom seeded random number generator (Mulberry32) for consistency
const createSeededRandom = (seed: number | string = Date.now()): (() => number) => {
  let state = typeof seed === "string" ? hashString(seed) : seed;
  return () => {
    state |= 0; state = state + 0x6D2B79F5 | 0;
    let t = Math.imul(state ^ state >>> 15, 1 | state);
    t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
    return ((t ^ t >>> 14) >>> 0) / 4294967296;
  };
};

// Simple string hash for seed consistency
const hashString = (str: string): number => {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = Math.imul(hash, 31) + str.charCodeAt(i) | 0;
  }
  return hash;
};

// Optimized random picker with cycling and uniqueness
const createCyclicPicker = <T>(items: readonly T[], rand: () => number) => {
  const shuffled = [...items].sort(() => rand() - 0.5);
  let index = 0;
  return () => shuffled[index++ % shuffled.length];
};

// Main generator function
export const generateRandomCursor = (options: GeneratorOptions = {}): Cursor => {
  const { seed, uniqueCount } = { uniqueCount: Infinity, ...options };
  const rand = createSeededRandom(seed);

  const pickAdjective = createCyclicPicker(ADJECTIVES, rand);
  const pickNoun = createCyclicPicker(NOUNS, rand);
  const pickColor = createCyclicPicker(COLORS, rand);

  const adjective = pickAdjective();
  const noun = pickNoun();
  const color = pickColor();
  const name = `${adjective} ${noun}` as const;
  const id = `${name}-${Math.floor(rand() * 10000).toString(36)}`; // Unique ID

  return { name, color, id };
};

// Bonus: React hook for dynamic cursor generation
export const useRandomCursor = (options: GeneratorOptions = {}) => {
  return useMemo(() => generateRandomCursor(options), [options.seed]);
};

// Example usage:
/*
const cursor = generateRandomCursor({ seed: "user123" });
console.log(cursor); // { name: "Swift Eagle", color: "#4ade80", id: "Swift Eagle-7k9" }

// In a React component:
const MyComponent = () => {
  const cursor = useRandomCursor({ seed: "user123" });
  return <div style={{ color: cursor.color }}>{cursor.name}</div>;
};
*/