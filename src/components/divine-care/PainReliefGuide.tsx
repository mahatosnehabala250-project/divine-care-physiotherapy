"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Bone,
  CircleDot,
  Move,
  Activity,
  Brain,
  Disc3,
  ChevronDown,
  Clock,
  MessageCircle,
  Phone,
  Heart,
  AlertTriangle,
  Sparkles,
} from "lucide-react";

interface Exercise {
  name: string;
  description: string;
  duration: string;
}

interface PainArea {
  id: string;
  condition: string;
  badge: string;
  icon: React.ElementType;
  exercises: Exercise[];
  borderColor: string;
  bgColor: string;
  activeBg: string;
}

const painAreas: PainArea[] = [
  {
    id: "knee-pain",
    condition: "Knee Pain (Ghutne ka Dard)",
    badge: "Ghutna",
    icon: Bone,
    borderColor: "border-l-teal-500",
    bgColor: "bg-white",
    activeBg: "bg-teal-50/80",
    exercises: [
      {
        name: "Quad Stretch",
        description: "Pair seedha rakhein, ghutne ke neeche ke muscle ko 5 second tak stretch karein",
        duration: "30 seconds × 3",
      },
      {
        name: "Hamstring Curl",
        description: "Khade rehkar heel ko peeche ki taraf uthayein, 3 second hold karein",
        duration: "10 reps × 3",
      },
      {
        name: "Heel Slide",
        description: "Let kar heel ko dhire-dhire ghutne tak khischein, phir seedha karein",
        duration: "15 reps × 2",
      },
    ],
  },
  {
    id: "neck-pain",
    condition: "Neck Pain (Gardan ka Dard)",
    badge: "Gardan",
    icon: CircleDot,
    borderColor: "border-l-amber-500",
    bgColor: "bg-white",
    activeBg: "bg-amber-50/80",
    exercises: [
      {
        name: "Neck Tilt",
        description: "Kan ko shoulder ki taraf jhukayein, 10 second hold karein, dono taraf",
        duration: "30 seconds × 3",
      },
      {
        name: "Chin Tuck",
        description: "Thoda aage dekhte hue chin ko andar ki taraf kheenchein, double chin jaisa",
        duration: "10 seconds × 5",
      },
      {
        name: "Shoulder Roll",
        description: "Shoulder ko aage-peeche ghumayein, dhire-dhire circles banayein",
        duration: "10 circles × 3",
      },
    ],
  },
  {
    id: "shoulder-pain",
    condition: "Shoulder Pain (Shoulder ka Dard)",
    badge: "Shoulder",
    icon: Move,
    borderColor: "border-l-teal-500",
    bgColor: "bg-white",
    activeBg: "bg-teal-50/80",
    exercises: [
      {
        name: "Pendulum Swing",
        description: "Haath ko niche latka kar chhote circles banayein, gravity se movement",
        duration: "30 seconds × 3",
      },
      {
        name: "Wall Crawl",
        description: "Deewar ke saamne khade hokar ungliyon se dheere upar chadhein",
        duration: "10 reps × 3",
      },
      {
        name: "Doorway Stretch",
        description: "Darwaze ke frame par haath rakhein, dheere aage jhukhein chest stretch ke liye",
        duration: "20 seconds × 3",
      },
    ],
  },
  {
    id: "back-pain",
    condition: "Back Pain (Peeche ka Dard)",
    badge: "Back",
    icon: Activity,
    borderColor: "border-l-amber-500",
    bgColor: "bg-white",
    activeBg: "bg-amber-50/80",
    exercises: [
      {
        name: "Cat-Cow Stretch",
        description: "Haath-ghutne par pet niche = cow, pet upar = cat, dheere switch karein",
        duration: "10 reps × 2",
      },
      {
        name: "Child's Pose",
        description: "Haath aage faila kar baithhein, mathe ko zameen par rakhein, dheere saans lein",
        duration: "30 seconds × 3",
      },
      {
        name: "Knee to Chest",
        description: "Let kar ek ghutna chhati tak kheenchein, 20 second hold karein",
        duration: "20 seconds × 3 (each side)",
      },
    ],
  },
  {
    id: "stroke-rehab",
    condition: "Stroke Rehab (Stroke Recovery)",
    badge: "Stroke",
    icon: Brain,
    borderColor: "border-l-teal-500",
    bgColor: "bg-white",
    activeBg: "bg-teal-50/80",
    exercises: [
      {
        name: "Passive Range of Motion",
        description: "Dusra vyakti affected haath/Pair ko dheere ghumayein, har joint 5 baar",
        duration: "5 reps × 3 per joint",
      },
      {
        name: "Grip Strengthening",
        description: "Naram ball ya sponge ko haath mein dabayein, 5 second hold karein",
        duration: "10 squeezes × 3",
      },
      {
        name: "Balance Exercises",
        description: "Kursi pakad kar ek pair par 10 second stand karein, phir dusra pair",
        duration: "10 seconds × 3 (each leg)",
      },
    ],
  },
  {
    id: "disc-bulge",
    condition: "Disc Bulge (Disc ka Dard)",
    badge: "Disc",
    icon: Disc3,
    borderColor: "border-l-amber-500",
    bgColor: "bg-white",
    activeBg: "bg-amber-50/80",
    exercises: [
      {
        name: "Prone Lying",
        description: "Pet ke bal zameen par lete rahien, 5-10 minute, haath sides mein",
        duration: "5-10 minutes",
      },
      {
        name: "McKenzie Extension",
        description: "Pet par letkar haathon ke sahara se dheere upar uthhein, kamar ko stretch karein",
        duration: "10 reps × 3",
      },
      {
        name: "Avoid Forward Bending",
        description: "Agle kuch din aage jhukna bilkul avoid karein, seedha baithhein aur khade rahein",
        duration: "Continuous",
      },
    ],
  },
];

export default function PainReliefGuide() {
  const [openId, setOpenId] = useState<string | null>(null);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  const toggleAccordion = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="pain-relief-guide"
      className="py-20 relative overflow-hidden"
      style={{ backgroundColor: "#f0fdfa" }}
      ref={sectionRef}
    >
      {/* Dot pattern background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage: "radial-gradient(circle, #0d9488 0.8px, transparent 0.8px)",
          backgroundSize: "24px 24px",
        }}
      />

      {/* Decorative blur blobs */}
      <div className="absolute inset-0 pointer-events-none opacity-25">
        <div className="absolute top-20 -left-20 w-72 h-72 bg-teal-200 rounded-full blur-[100px]" />
        <div className="absolute bottom-20 -right-20 w-72 h-72 bg-amber-200 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-flex items-center gap-2 text-teal-600 font-semibold text-sm uppercase tracking-wider mb-3">
            <Heart className="h-4 w-4" />
            At-Home Pain Relief
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-teal-900 mb-4">
            Ghar Baithye <span className="text-amber-600">Relief</span> Paayein
          </h2>
          <p className="text-teal-600 max-w-2xl mx-auto leading-relaxed">
            Jab tak aap clinic aayein, yeh simple techniques se temporary relief paayein
          </p>
        </motion.div>

        {/* Accordion Cards */}
        <div className="space-y-4">
          {painAreas.map((area, index) => {
            const isOpen = openId === area.id;
            const Icon = area.icon;

            return (
              <motion.div
                key={area.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`
                  rounded-2xl border-l-4 ${area.borderColor}
                  ${isOpen ? area.activeBg : area.bgColor}
                  border border-gray-200/80 shadow-md
                  hover:shadow-xl hover:-translate-y-0.5
                  transition-all duration-300 cursor-pointer overflow-hidden
                `}
                onClick={() => toggleAccordion(area.id)}
              >
                {/* Accordion Header */}
                <div className="flex items-center justify-between p-5 sm:p-6">
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div
                      className={`w-11 h-11 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center shrink-0 transition-colors duration-300 ${
                        isOpen
                          ? "bg-teal-100 text-teal-700"
                          : "bg-gray-100 text-gray-500"
                      }`}
                    >
                      <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-teal-900 text-base sm:text-lg leading-tight">
                        {area.condition}
                      </h3>
                      <Badge
                        className={`mt-1 text-xs font-semibold ${
                          index % 2 === 0
                            ? "bg-teal-100 text-teal-700 border-teal-200"
                            : "bg-amber-100 text-amber-700 border-amber-200"
                        }`}
                      >
                        {area.badge}
                      </Badge>
                    </div>
                  </div>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="shrink-0 ml-2"
                  >
                    <ChevronDown className="h-5 w-5 text-teal-500" />
                  </motion.div>
                </div>

                {/* Accordion Content */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 sm:px-6 pb-5 sm:pb-6">
                        <div className="border-t border-gray-200/60 pt-4 space-y-3">
                          {area.exercises.map((exercise, exIdx) => (
                            <motion.div
                              key={exercise.name}
                              initial={{ opacity: 0, x: -15 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{
                                duration: 0.3,
                                delay: exIdx * 0.08,
                              }}
                              className="flex items-start gap-3 p-3 rounded-xl bg-white/70 border border-gray-100"
                            >
                              <div
                                className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 text-xs font-bold ${
                                  index % 2 === 0
                                    ? "bg-teal-100 text-teal-700"
                                    : "bg-amber-100 text-amber-700"
                                }`}
                              >
                                {exIdx + 1}
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center justify-between gap-2 flex-wrap">
                                  <h4 className="font-semibold text-teal-900 text-sm sm:text-base">
                                    {exercise.name}
                                  </h4>
                                  <span className="inline-flex items-center gap-1 text-xs font-medium text-gray-500 whitespace-nowrap">
                                    <Clock className="h-3 w-3" />
                                    {exercise.duration}
                                  </span>
                                </div>
                                <p className="text-sm text-gray-600 mt-1 leading-relaxed">
                                  {exercise.description}
                                </p>
                              </div>
                            </motion.div>
                          ))}
                        </div>

                        {/* Disclaimer */}
                        <div className="mt-4 p-3 rounded-xl bg-amber-50 border border-amber-200/60">
                          <p className="text-xs sm:text-sm text-amber-700 flex items-start gap-2">
                            <AlertTriangle className="h-4 w-4 shrink-0 mt-0.5" />
                            <span>
                              Yeh temporary relief ke liye hain. Permanent solution ke liye{" "}
                              <strong>Dr. Vikas</strong> se milein.
                            </span>
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-14"
        >
          <div className="bg-gradient-to-r from-teal-800 to-teal-700 rounded-2xl p-8 sm:p-10 text-center shadow-xl relative overflow-hidden">
            {/* Decorative pattern */}
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage:
                  "radial-gradient(circle, white 1px, transparent 1px)",
                backgroundSize: "20px 20px",
              }}
            />
            <div className="relative z-10">
              <span className="inline-flex items-center gap-2 bg-amber-500/20 text-amber-300 font-semibold text-sm px-4 py-1.5 rounded-full mb-4">
                <Sparkles className="h-4 w-4" />
                Permanent Relief Chahiye?
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                Book Appointment — Abhi!
              </h3>
              <p className="text-teal-200 mb-6 max-w-lg mx-auto">
                Ghar ke upaay sirf temporary hain. Dr. Vikas ke treatment se pain-free zindagi paayein.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a
                  href="https://wa.me/9431757875"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="bg-green-600 hover:bg-green-700 text-white font-bold rounded-xl shadow-lg transition-all hover:scale-105 h-12 px-6">
                    <MessageCircle className="h-5 w-5 mr-2" />
                    WhatsApp Karein
                  </Button>
                </a>
                <a href="tel:9431757875">
                  <Button
                    variant="outline"
                    className="border-teal-400 text-teal-100 hover:bg-teal-600 rounded-xl transition-all hover:scale-105 h-12 px-6"
                  >
                    <Phone className="h-5 w-5 mr-2" />
                    Call: 9431757875
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
