"use client";

import { useState, useRef, useCallback } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useIsMobile } from "@/hooks/use-mobile";
import {
  Brain,
  CircleDot,
  Move,
  Activity,
  Bone,
  Disc3,
  ArrowRight,
  MousePointerClick,
  Sparkles,
} from "lucide-react";

/* ────────────────────── Data ────────────────────── */

interface BodyRegion {
  id: string;
  label: string;
  labelHinglish: string;
  conditions: {
    id: string;
    title: string;
    icon: React.ElementType;
    description: string;
  }[];
}

const bodyRegions: BodyRegion[] = [
  {
    id: "brain",
    label: "Brain",
    labelHinglish: "Brain / Stroke",
    conditions: [
      {
        id: "stroke-rehab",
        title: "Stroke Rehab",
        icon: Brain,
        description: "Stroke ke baad motor recovery possible hai — rehab se azaadi paayein",
      },
    ],
  },
  {
    id: "head-neck",
    label: "Head / Neck",
    labelHinglish: "Gardan (Neck)",
    conditions: [
      {
        id: "neck-pain",
        title: "Neck Pain",
        icon: CircleDot,
        description: "Cervical pain aur stiffness se chhutkaara — bina surgery ke possible hai",
      },
    ],
  },
  {
    id: "left-shoulder",
    label: "Left Shoulder",
    labelHinglish: "Bayān Shoulder",
    conditions: [
      {
        id: "shoulder-pain",
        title: "Shoulder Pain",
        icon: Move,
        description: "Frozen shoulder aur rotator cuff injury — haath phir se upar uth paayenge",
      },
    ],
  },
  {
    id: "right-shoulder",
    label: "Right Shoulder",
    labelHinglish: "Dāyān Shoulder",
    conditions: [
      {
        id: "shoulder-pain",
        title: "Shoulder Pain",
        icon: Move,
        description: "Frozen shoulder aur rotator cuff injury — haath phir se upar uth paayenge",
      },
    ],
  },
  {
    id: "back",
    label: "Back",
    labelHinglish: "Peeth (Back)",
    conditions: [
      {
        id: "back-pain",
        title: "Back Pain",
        icon: Activity,
        description: "Sciatica aur poor posture ka dard — neend aur kaam dono wapas aayega",
      },
      {
        id: "disc-bulge",
        title: "Disc Bulge",
        icon: Disc3,
        description: "Disc bulge ka ilaaj bina surgery ke mumkin hai — hum proof hain",
      },
    ],
  },
  {
    id: "left-knee",
    label: "Left Knee",
    labelHinglish: "Bayān Ghutna",
    conditions: [
      {
        id: "knee-pain",
        title: "Knee Pain",
        icon: Bone,
        description: "Arthritis aur joint pain se azaadi — chalna phir se aasaan hoga",
      },
    ],
  },
  {
    id: "right-knee",
    label: "Right Knee",
    labelHinglish: "Dāyān Ghutna",
    conditions: [
      {
        id: "knee-pain",
        title: "Knee Pain",
        icon: Bone,
        description: "Arthritis aur joint pain se azaadi — chalna phir se aasaan hoga",
      },
    ],
  },
];

/* ────────────────────── SVG Body Paths ────────────────────── */

interface RegionPath {
  id: string;
  d: string;
  cx: number;
  cy: number;
}

const regionPaths: RegionPath[] = [
  {
    id: "brain",
    d: "M150 35 C150 35 138 20 130 28 C122 36 118 38 120 50 C122 62 128 65 130 65 C132 65 138 62 140 58 C142 54 150 54 160 58 C162 62 168 65 170 65 C172 65 178 62 180 50 C182 38 178 36 170 28 C162 20 150 35 150 35Z",
    cx: 150,
    cy: 42,
  },
  {
    id: "head-neck",
    d: "M130 70 C128 75 125 85 128 95 C130 100 135 108 140 110 L160 110 C165 108 170 100 172 95 C175 85 172 75 170 70 L130 70Z",
    cx: 150,
    cy: 90,
  },
  {
    id: "left-shoulder",
    d: "M85 115 C80 118 70 128 65 140 C62 148 65 155 75 158 L95 155 L110 145 L112 120 L105 115 L85 115Z",
    cx: 88,
    cy: 137,
  },
  {
    id: "right-shoulder",
    d: "M215 115 C220 118 230 128 235 140 C238 148 235 155 225 158 L205 155 L190 145 L188 120 L195 115 L215 115Z",
    cx: 212,
    cy: 137,
  },
  {
    id: "back",
    d: "M115 145 C112 155 110 175 112 200 C114 215 118 225 122 235 L150 245 L178 235 C182 225 186 215 188 200 C190 175 188 155 185 145 L165 135 L150 132 L135 135 L115 145Z",
    cx: 150,
    cy: 190,
  },
  {
    id: "left-knee",
    d: "M118 285 C115 290 112 305 114 315 C116 325 120 330 125 332 L145 335 L148 315 L145 295 L135 285 L118 285Z",
    cx: 131,
    cy: 310,
  },
  {
    id: "right-knee",
    d: "M182 285 C185 290 188 305 186 315 C184 325 180 330 175 332 L155 335 L152 315 L155 295 L165 285 L182 285Z",
    cx: 169,
    cy: 310,
  },
];

/* Full body outline path */
const bodyOutline = `M150 15
  C140 15 130 25 128 35 C126 45 125 55 128 68 C130 72 132 75 130 80
  C125 82 100 88 82 100 C70 108 60 120 55 135
  C52 148 55 158 62 162 C68 165 78 162 88 158
  L98 152 L105 148 L108 140 L110 155
  C108 170 106 190 108 210 C110 225 115 240 120 252
  L130 268 L132 280 L130 295 C128 308 130 320 135 330
  L140 340 L142 360 L140 380 L138 395 L135 410 L140 420 L148 425
  L152 425 L160 420 L165 410 L162 395 L160 380 L158 360 L160 340
  L165 330 C170 320 172 308 170 295 L168 280 L170 268
  L180 252 C185 240 190 225 192 210 C194 190 192 170 190 155
  L192 140 L195 148 L202 152 L212 158
  C222 162 232 165 238 162 C245 158 248 148 245 135
  C240 120 230 108 218 100 C200 88 175 82 170 80
  C168 75 170 72 172 68 C175 55 174 45 172 35
  C170 25 160 15 150 15Z`;

/* ────────────────────── Popover Card ────────────────────── */

function ConditionPopover({
  region,
  onClose,
  onLearnMore,
  position,
}: {
  region: BodyRegion;
  onClose: () => void;
  onLearnMore: (conditionId: string) => void;
  position: { x: number; y: number };
}) {
  const isLeft = position.x < 200;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 10 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.8, y: 10 }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
      className={`absolute z-30 w-64 ${
        isLeft ? "left-[280px]" : "right-[280px]"
      }`}
      style={{ top: position.y - 20 }}
    >
      <Card className="border-2 border-teal-200 rounded-2xl shadow-2xl shadow-teal-900/10 bg-white/95 backdrop-blur-lg overflow-hidden">
        {/* Accent top bar */}
        <div className="h-1 bg-gradient-to-r from-teal-400 via-amber-400 to-teal-400" />

        <CardContent className="p-4">
          <div className="flex items-center justify-between mb-3">
            <Badge className="bg-teal-100 text-teal-700 border-teal-200 text-xs">
              {region.labelHinglish}
            </Badge>
            <button
              onClick={onClose}
              className="w-6 h-6 rounded-full bg-teal-50 hover:bg-teal-100 flex items-center justify-center text-teal-500 hover:text-teal-700 transition-colors text-xs"
            >
              ✕
            </button>
          </div>

          <div className="space-y-3">
            {region.conditions.map((condition) => (
              <div key={condition.id} className="group/cond">
                <div className="flex items-center gap-2 mb-1.5">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-teal-500 to-teal-600 flex items-center justify-center shadow-sm">
                    <condition.icon className="h-4 w-4 text-white" />
                  </div>
                  <h4 className="font-bold text-teal-900 text-sm">{condition.title}</h4>
                </div>
                <p className="text-xs text-teal-600 leading-relaxed mb-2 ml-10">
                  {condition.description}
                </p>
                <Button
                  size="sm"
                  onClick={() => onLearnMore(condition.id)}
                  className="ml-10 h-7 text-xs bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white rounded-lg shadow-sm"
                >
                  Learn More
                  <ArrowRight className="h-3 w-3 ml-1" />
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

/* ────────────────────── Mobile Card List ────────────────────── */

function MobileBodyList({
  onLearnMore,
}: {
  onLearnMore: (conditionId: string) => void;
}) {
  const mobileRegions = bodyRegions.filter(
    (r) => r.id !== "right-shoulder" && r.id !== "right-knee"
  );

  const regionIconMap: Record<string, React.ElementType> = {
    brain: Brain,
    "head-neck": CircleDot,
    "left-shoulder": Move,
    back: Activity,
    "left-knee": Bone,
  };

  return (
    <div className="grid grid-cols-2 gap-3">
      {mobileRegions.map((region, i) => {
        const Icon = regionIconMap[region.id] || Activity;
        return (
          <motion.div
            key={region.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
          >
            <Card className="h-full border-2 border-teal-100 hover:border-amber-300 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer group">
              <div className="h-1 bg-gradient-to-r from-teal-400 via-amber-400 to-teal-400 opacity-50 group-hover:opacity-100 transition-opacity" />
              <CardContent className="p-4">
                <div className="flex items-center gap-2.5 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-500 to-teal-600 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                    <Icon className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-teal-900 text-sm leading-tight">{region.label}</h4>
                    <p className="text-[11px] text-teal-500">{region.labelHinglish}</p>
                  </div>
                </div>
                <div className="space-y-2">
                  {region.conditions.map((condition) => (
                    <div key={condition.id}>
                      <p className="text-xs text-teal-700 leading-relaxed mb-1.5">
                        {condition.description}
                      </p>
                      <Button
                        size="sm"
                        onClick={() => onLearnMore(condition.id)}
                        className="h-6 text-[10px] bg-teal-100 text-teal-700 hover:bg-teal-600 hover:text-white rounded-md transition-colors"
                      >
                        Learn More <ArrowRight className="h-2.5 w-2.5 ml-0.5" />
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        );
      })}
    </div>
  );
}

/* ────────────────────── Main Component ────────────────────── */

export default function BodyMap() {
  const isMobile = useIsMobile();
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [hoveredRegion, setHoveredRegion] = useState<string | null>(null);
  const [selectedRegion, setSelectedRegion] = useState<BodyRegion | null>(null);
  const [popoverPosition, setPopoverPosition] = useState({ x: 0, y: 0 });

  const handleRegionClick = useCallback(
    (regionId: string) => {
      const region = bodyRegions.find((r) => r.id === regionId);
      if (!region) return;

      const path = regionPaths.find((p) => p.id === regionId);
      if (!path) return;

      if (selectedRegion?.id === regionId) {
        setSelectedRegion(null);
        return;
      }

      setSelectedRegion(region);
      setPopoverPosition({ x: path.cx, y: path.cy });
    },
    [selectedRegion]
  );

  const handleLearnMore = useCallback((conditionId: string) => {
    setSelectedRegion(null);
    const el = document.getElementById("conditions");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      // Small delay to allow scroll, then try to find and click the matching condition card
      setTimeout(() => {
        const conditionCards = el.querySelectorAll("[data-condition-id]");
        conditionCards.forEach((card) => {
          if (card.getAttribute("data-condition-id") === conditionId) {
            (card as HTMLElement).click();
          }
        });
      }, 600);
    }
  }, []);

  return (
    <section
      id="body-map"
      className="py-20 bg-gradient-to-b from-teal-50/30 to-white relative overflow-hidden w-full"
      ref={sectionRef}
    >
      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-teal-100/40 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-amber-100/30 rounded-full blur-[120px]" />
        {/* Subtle dot grid */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: "radial-gradient(circle, #0d9488 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 text-teal-600 font-semibold text-sm uppercase tracking-wider mb-3">
            <MousePointerClick className="h-4 w-4" />
            Interactive Body Map
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-teal-900">
            {"Apna Dard"} <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-amber-600">Yahan Click Karein</span>
          </h2>
          <p className="mt-3 text-teal-600 max-w-2xl mx-auto leading-relaxed">
            Body ke kis hisse mein dard hai? Click karein aur jaayein kya karna
            hai
          </p>
        </motion.div>

        {/* Desktop: SVG Body Map */}
        {!isMobile && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative flex justify-center"
          >
            {/* Glass container */}
            <div className="relative bg-white/60 backdrop-blur-xl border-2 border-teal-100/60 rounded-3xl shadow-xl shadow-teal-900/5 p-6 sm:p-10 max-w-full overflow-hidden">
              {/* Instruction hint */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="absolute -top-3 left-1/2 -translate-x-1/2"
              >
                <Badge className="bg-gradient-to-r from-teal-600 to-teal-700 text-white border-0 px-4 py-1 shadow-lg shadow-teal-600/20">
                  <Sparkles className="h-3 w-3 mr-1.5" />
                  Click on body part to explore
                </Badge>
              </motion.div>

              <div className="relative">
                <svg
                  viewBox="0 0 300 440"
                  className="w-full max-w-[320px] h-auto mx-auto"
                  role="img"
                  aria-label="Interactive human body map showing clickable regions for different pain conditions"
                >
                  <defs>
                    {/* Teal glow filter */}
                    <filter id="tealGlow" x="-50%" y="-50%" width="200%" height="200%">
                      <feGaussianBlur stdDeviation="4" result="blur" />
                      <feFlood floodColor="#0d9488" floodOpacity="0.4" result="color" />
                      <feComposite in="color" in2="blur" operator="in" result="glow" />
                      <feMerge>
                        <feMergeNode in="glow" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                    {/* Amber glow for selected */}
                    <filter id="amberGlow" x="-50%" y="-50%" width="200%" height="200%">
                      <feGaussianBlur stdDeviation="5" result="blur" />
                      <feFlood floodColor="#f59e0b" floodOpacity="0.5" result="color" />
                      <feComposite in="color" in2="blur" operator="in" result="glow" />
                      <feMerge>
                        <feMergeNode in="glow" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                    {/* Pulse animation */}
                    <radialGradient id="pulseGrad" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#0d9488" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="#0d9488" stopOpacity="0" />
                    </radialGradient>
                  </defs>

                  {/* Body outline */}
                  <path
                    d={bodyOutline}
                    fill="none"
                    stroke="#99f6e4"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    opacity="0.5"
                  />

                  {/* Body fill - subtle */}
                  <path
                    d={bodyOutline}
                    fill="#f0fdfa"
                    stroke="none"
                    opacity="0.4"
                  />

                  {/* Interactive regions */}
                  {regionPaths.map((rp) => {
                    const isHovered = hoveredRegion === rp.id;
                    const isSelected = selectedRegion?.id === rp.id;

                    return (
                      <g key={rp.id}>
                        {/* Pulse indicator circle */}
                        <circle
                          cx={rp.cx}
                          cy={rp.cy}
                          r="8"
                          fill="url(#pulseGrad)"
                          className="pointer-events-none"
                        >
                          {isHovered && (
                            <animate
                              attributeName="r"
                              values="8;14;8"
                              dur="1.5s"
                              repeatCount="indefinite"
                            />
                          )}
                          <animate
                            attributeName="opacity"
                            values="0.6;1;0.6"
                            dur="2s"
                            repeatCount="indefinite"
                          />
                        </circle>

                        {/* Clickable region path */}
                        <motion.path
                          d={rp.d}
                          fill={isSelected ? "rgba(245,158,11,0.15)" : isHovered ? "rgba(13,148,136,0.15)" : "rgba(13,148,136,0.06)"}
                          stroke={isSelected ? "#f59e0b" : isHovered ? "#0d9488" : "#5eead4"}
                          strokeWidth={isSelected ? 2.5 : isHovered ? 2 : 1.5}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          filter={isHovered ? "url(#tealGlow)" : isSelected ? "url(#amberGlow)" : undefined}
                          className="cursor-pointer"
                          style={{ transition: "fill 0.2s, stroke 0.2s" }}
                          tabIndex={0}
                          role="button"
                          aria-label={`${bodyRegions.find((r) => r.id === rp.id)?.labelHinglish || rp.id} - click to see conditions`}
                          onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); handleRegionClick(rp.id); } }}
                          onHoverStart={() => setHoveredRegion(rp.id)}
                          onHoverEnd={() => setHoveredRegion(null)}
                          onClick={() => handleRegionClick(rp.id)}
                          whileHover={{ scale: 1.03 }}
                          whileTap={{ scale: 0.97 }}
                        />

                        {/* Center dot */}
                        <circle
                          cx={rp.cx}
                          cy={rp.cy}
                          r={isSelected ? 4 : isHovered ? 3.5 : 2.5}
                          fill={isSelected ? "#f59e0b" : isHovered ? "#0d9488" : "#5eead4"}
                          className="pointer-events-none"
                          style={{ transition: "r 0.2s, fill 0.2s" }}
                        />

                        {/* Region label on hover */}
                        {(isHovered || isSelected) && (
                          <motion.text
                            x={rp.cx}
                            y={rp.cy - 14}
                            textAnchor="middle"
                            className="text-[9px] font-bold fill-teal-700 pointer-events-none"
                            initial={{ opacity: 0, y: 4 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.15 }}
                          >
                            {bodyRegions.find((r) => r.id === rp.id)?.labelHinglish || rp.id}
                          </motion.text>
                        )}
                      </g>
                    );
                  })}

                  {/* Decorative: Small connection lines for visual appeal */}
                  <line x1="150" y1="65" x2="150" y2="70" stroke="#99f6e4" strokeWidth="1" opacity="0.4" />
                  <line x1="150" y1="110" x2="150" y2="115" stroke="#99f6e4" strokeWidth="1" opacity="0.4" />
                  <line x1="112" y1="150" x2="108" y2="155" stroke="#99f6e4" strokeWidth="1" opacity="0.4" />
                  <line x1="188" y1="150" x2="192" y2="155" stroke="#99f6e4" strokeWidth="1" opacity="0.4" />
                </svg>

                {/* Popover Card */}
                <AnimatePresence>
                  {selectedRegion && (
                    <ConditionPopover
                      region={selectedRegion}
                      onClose={() => setSelectedRegion(null)}
                      onLearnMore={handleLearnMore}
                      position={popoverPosition}
                    />
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Side legend */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="hidden lg:flex flex-col gap-2 ml-8 self-center"
            >
              <p className="text-xs font-semibold text-teal-600 uppercase tracking-wider mb-2">
                Conditions
              </p>
              {[
                { icon: Brain, label: "Stroke Rehab", color: "from-purple-500 to-purple-600" },
                { icon: CircleDot, label: "Neck Pain", color: "from-teal-500 to-teal-600" },
                { icon: Move, label: "Shoulder Pain", color: "from-sky-500 to-sky-600" },
                { icon: Activity, label: "Back Pain", color: "from-emerald-500 to-emerald-600" },
                { icon: Disc3, label: "Disc Bulge", color: "from-amber-500 to-amber-600" },
                { icon: Bone, label: "Knee Pain", color: "from-rose-500 to-rose-600" },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.3, delay: 0.8 + i * 0.08 }}
                  className="flex items-center gap-2.5 group cursor-pointer"
                  onClick={() => handleLearnMore(item.label.toLowerCase().replace(" ", "-"))}
                >
                  <div
                    className={`w-7 h-7 rounded-lg bg-gradient-to-br ${item.color} flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform`}
                  >
                    <item.icon className="h-3.5 w-3.5 text-white" />
                  </div>
                  <span className="text-sm text-teal-700 group-hover:text-teal-900 font-medium transition-colors">
                    {item.label}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}

        {/* Mobile: Card Grid */}
        {isMobile && (
          <MobileBodyList onLearnMore={handleLearnMore} />
        )}
      </div>
    </section>
  );
}
