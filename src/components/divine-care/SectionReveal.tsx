"use client";

import { motion, useInView, type Variants } from "framer-motion";
import { useRef, type ReactNode } from "react";

interface SectionRevealProps {
  children: React.ReactNode;
  direction?: "up" | "left" | "right" | "fade";
  delay?: number;
  className?: string;
  id?: string;
}

const getVariants = (direction: SectionRevealProps["direction"]): Variants => {
  const offsets: Record<NonNullable<SectionRevealProps["direction"]>, { x: number; y: number }> = {
    up: { x: 0, y: 60 },
    left: { x: -60, y: 0 },
    right: { x: 60, y: 0 },
    fade: { x: 0, y: 0 },
  };

  const offset = offsets[direction ?? "up"];

  return {
    hidden: {
      opacity: 0,
      x: offset.x,
      y: offset.y,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
    },
  };
};

export default function SectionReveal({
  children,
  direction = "up",
  delay = 0,
  className,
  id,
}: SectionRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const variants = getVariants(direction);

  return (
    <motion.div
      ref={ref}
      id={id}
      className={className}
      variants={variants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{
        duration: 0.6,
        delay,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
}
