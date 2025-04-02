"use client";
import React, { useEffect, useCallback } from "react";
import { AnimatePresence } from "framer-motion";
import { useDevToolsOpen } from "@/hooks/use-devtools-open";
import NyanCat from "./nyan-cat";

// Utility to type console messages with delay
const typeConsoleMessage = (
  message: string,
  style: string,
  delayMs: number = 50
) => {
  let i = 0;
  const interval = setInterval(() => {
    if (i <= message.length) {
      console.clear();
      console.log(`%c${message.slice(0, i)}`, style);
      i++;
    } else {
      clearInterval(interval);
    }
  }, delayMs);
};

const EasterEggs = () => {
  const { isDevToolsOpen } = useDevToolsOpen();

  // Handle console Easter egg logic
  const triggerEasterEgg = useCallback(() => {
    if (typeof console === "undefined") return;

    console.clear();
    const introMessage =
      "Whoa, look at you! 🕵️‍♂️\n" +
      "You’ve unlocked the secret console! 🔍\n" +
      "Type my first name ('Farouk') for some magic! ✨\n" +
      "Or press 'n' in the viewport for a surprise! 🐱";
    typeConsoleMessage(
      introMessage,
      "color: #00FFCC; font-size: 16px; font-family: 'Courier New', monospace; background: linear-gradient(90deg, #1a1a1a, #2a2a2a); padding: 15px; border-radius: 8px; box-shadow: 0 0 10px rgba(0, 255, 204, 0.5);",
      30
    );

    // Define Easter egg for typing "Farouk"
    ["farouk", "Farouk", "FAROUK"].forEach((name) => {
      if (Object.hasOwn(window, name)) return;
      Object.defineProperty(window, name, {
        get() {
          console.clear();
          const magicMessage =
            "✨ Quantum Code Activated! ✨\n" +
            "You’ve summoned Farouk’s magic! 🧙‍♂️\n" +
            "Portfolio power level: OVER 9000! 💻⚡\n" +
            "Check the viewport for a feline surprise... 😺";
          typeConsoleMessage(
            magicMessage,
            "color: #FF007A; font-size: 18px; font-family: 'Courier New', monospace; background: linear-gradient(90deg, #1a1a1a, #2a2a2a); padding: 15px; border-radius: 8px; box-shadow: 0 0 15px rgba(255, 0, 122, 0.7);",
            25
          );
          return "";
        },
      });
    });
  }, []);

  useEffect(() => {
    if (!isDevToolsOpen) return;
    triggerEasterEgg();
  }, [isDevToolsOpen, triggerEasterEgg]);

  return (
    <AnimatePresence>
      <NyanCat />
    </AnimatePresence>
  );
};

export default EasterEggs;