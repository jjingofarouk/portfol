import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion"; // For animations
import { footer } from "./config";
import { Button } from "../ui/button";
import SocialMediaButtons from "../social/social-media-icons";
import { config } from "@/data/config";
import { cn } from "@/lib/utils"; // Assuming you have a utility for classNames

function Footer() {
  const year = new Date().getFullYear();
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  // Animation variants for links
  const linkVariants = {
    idle: { scale: 1, y: 0 },
    hover: { scale: 1.05, y: -2, transition: { type: "spring", stiffness: 300 } },
  };

  // Subtle glow effect for the footer
  const glowVariants = {
    initial: { opacity: 0.2 },
    animate: { opacity: 0.5, transition: { duration: 1.5, yoyo: Infinity } },
  };

  return (
    <footer className="relative w-full shrink-0 px-4 py-8 md:px-6 bg-gradient-to-t from-gray-100 to-white dark:from-gray-900 dark:to-black border-t border-border overflow-hidden">
      {/* Background Glow Effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-transparent pointer-events-none"
        variants={glowVariants}
        initial="initial"
        animate="animate"
      />

      <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between max-w-7xl mx-auto relative z-10">
        {/* Left Section: Copyright with Flair */}
        <motion.p
          className="text-xs text-gray-500 dark:text-gray-400 font-mono"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          © {year} <span className="text-purple-600 dark:text-purple-400">{config.author}</span>. 
          Crafted with <span className="text-red-500 animate-pulse">♥</span> for code & creativity.
        </motion.p>

        {/* Center: Social Media with Hover Effects */}
        <SocialMediaButtons className="flex gap-4" />

        {/* Right Section: Navigation with Animation */}
        <nav className="flex gap-6 z-10">
          {footer.map((link, index) => {
            const { title, href, description } = link;

            return (
              <motion.div
                key={`l_${index}`}
                variants={linkVariants}
                initial="idle"
                animate={hoveredLink === title ? "hover" : "idle"}
                onHoverStart={() => setHoveredLink(title)}
                onHoverEnd={() => setHoveredLink(null)}
                className="relative"
              >
                <Link href={href} className="text-xs underline-offset-4">
                  <Button
                    variant="ghost"
                    className={cn(
                      "relative px-0 text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400",
                      hoveredLink === title && "text-purple-600 dark:text-purple-400"
                    )}
                  >
                    {title}
                    {/* Tooltip-like description on hover */}
                    {hoveredLink === title && description && (
                      <motion.span
                        className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded shadow"
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                      >
                        {description}
                      </motion.span>
                    )}
                  </Button>
                </Link>
              </motion.div>
            );
          })}
        </nav>
      </div>

      {/* Bonus: Subtle Divider Line */}
      <motion.div
        className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent mt-6"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      />
    </footer>
  );
}

export default Footer;