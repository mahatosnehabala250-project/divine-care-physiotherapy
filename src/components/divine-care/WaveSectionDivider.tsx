"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

type WaveVariant = "wave1" | "wave2" | "wave3" | "curve" | "slant";

interface WaveSectionDividerProps {
  variant?: WaveVariant;
  flip?: boolean;
  className?: string;
  color?: string;
}

const wavePaths: Record<WaveVariant, string> = {
  wave1:
    "M0,64 C120,20 240,100 360,48 C480,0 600,80 720,48 C840,16 960,64 1080,32 C1200,0 1320,48 1440,32 L1440,120 L0,120 Z",
  wave2:
    "M0,48 C180,100 360,0 540,64 C720,128 900,16 1080,80 C1260,48 1380,96 1440,64 L1440,120 L0,120 Z",
  wave3:
    "M0,80 C80,32 160,96 320,48 C480,0 560,80 720,64 C880,48 960,112 1120,48 C1280,0 1360,64 1440,32 L1440,120 L0,120 Z",
  curve:
    "M0,96 C360,0 720,128 1080,32 C1260,0 1380,64 1440,48 L1440,120 L0,120 Z",
  slant:
    "M0,80 L1440,20 L1440,120 L0,120 Z",
};

export default function WaveSectionDivider({
  variant = "wave1",
  flip = false,
  className = "",
  color = "#f0fdfa",
}: WaveSectionDividerProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div
      ref={ref}
      className={`w-full relative ${flip ? "rotate-180" : ""} ${className}`}
      style={{ marginTop: "-1px", marginBottom: "-1px" }}
      aria-hidden="true"
    >
      <motion.svg
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8 }}
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        className="w-full h-[60px] sm:h-[80px]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d={wavePaths[variant]} fill={color} />
      </motion.svg>
    </div>
  );
}
