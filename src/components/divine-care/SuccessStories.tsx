"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star, MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const stories = [
  {
    name: "Sunita Devi",
    age: 58,
    condition: "Knee Pain",
    initials: "SD",
    before: "6 saal se ghutne ka dard, seedhi chadna impossible lagta tha. Mandir jaana bhi mushkil ho gaya tha.",
    after: "8 sessions mein pain-free! Ab mandir ki seedhiyan chadti hoon, bachchon ke saath khelti hoon. Pehle jaisi active zindagi!",
    rating: 5,
    sessions: 8,
    gradient: "from-rose-500 to-pink-600",
  },
  {
    name: "Rajesh Kumar",
    age: 45,
    condition: "Back Pain",
    initials: "RK",
    before: "3 saal se chronic back pain, raat ko neend nahi aati thi. Office mein bhi kaam nahi ho paata tha.",
    after: "4 sessions mein 70% relief! Ab poori neend aati hai, office mein full focus. Surgery se bach gaya!",
    rating: 5,
    sessions: 4,
    gradient: "from-blue-500 to-indigo-600",
  },
  {
    name: "Meera Tiwari",
    age: 52,
    condition: "Neck Pain",
    initials: "MT",
    before: "Gardan mein stiffness, sir ghoomta rehta tha. Poora din pareshan rehti thi, koi kaam nahi ho paata.",
    after: "5 sessions mein full mobility wapas! No more dizziness, ghar ka kaam normal. Dr. Vikas ki therapy magical hai!",
    rating: 5,
    sessions: 5,
    gradient: "from-violet-500 to-purple-600",
  },
  {
    name: "Anand Prasad",
    age: 60,
    condition: "Stroke Rehab",
    initials: "AP",
    before: "Stroke ke baad aadha body paralyzed tha. Daayre par dependent tha, confidence zero ho gaya tha.",
    after: "3 months mein walking independently! Self-care possible hai, confidence wapas aaya. Nayi zindagi mili!",
    rating: 5,
    sessions: 36,
    gradient: "from-teal-500 to-emerald-600",
  },
  {
    name: "Priya Sharma",
    age: 38,
    condition: "Shoulder Pain",
    initials: "PS",
    before: "Haath upar nahi uttha paati thi, choli pehenna mushkil tha. Daily activities impossible ho gayi thi.",
    after: "6 sessions mein full range of motion! Daily activities normal, ab sab kaam khud karti hoon. Bahut khush hoon!",
    rating: 5,
    sessions: 6,
    gradient: "from-amber-500 to-orange-600",
  },
  {
    name: "Mohammad Irfan",
    age: 50,
    condition: "Disc Bulge",
    initials: "MI",
    before: "Disc bulge se bed par tha, jhukna impossible. Current sa lagta tha, kaam se gaya tha.",
    after: "10 sessions mein walking normally! Ab kaam par jaate hain, family ke saath time spend karte hain. Shukriya!",
    rating: 5,
    sessions: 10,
    gradient: "from-emerald-500 to-teal-600",
  },
];

export default function SuccessStories() {
  const [current, setCurrent] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const startAutoPlay = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % stories.length);
    }, 5000);
  }, []);

  const stopAutoPlay = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  useEffect(() => {
    if (isAutoPlaying) {
      startAutoPlay();
    } else {
      stopAutoPlay();
    }
    return stopAutoPlay;
  }, [isAutoPlaying, startAutoPlay, stopAutoPlay]);

  const goTo = (index: number) => {
    setCurrent(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goPrev = () => goTo((current - 1 + stories.length) % stories.length);
  const goNext = () => goTo((current + 1) % stories.length);

  const story = stories[current];

  return (
    <section
      id="success-stories"
      className="py-20 bg-gradient-to-b from-teal-50/50 via-white to-amber-50/30 relative overflow-hidden"
      ref={ref}
    >
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-72 h-72 bg-teal-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-amber-200/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-flex items-center gap-2 text-amber-600 font-semibold text-sm uppercase tracking-wider mb-3">
            <Star className="h-4 w-4 fill-amber-500" />
            SUCCESS STORIES
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-teal-900">
            Inke Dard Ki Kahani,{" "}
            <span className="text-amber-600">Unki Jeet Ki Kahani</span>
          </h2>
          <p className="mt-3 text-teal-600 max-w-2xl mx-auto leading-relaxed">
            500+ patients ne apni pain-free zindagi wapas paayi — unki kahaniyan sunke aapko bhi
            ummeed badhegi.
          </p>
        </motion.div>

        {/* Main Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          {/* Navigation Arrows */}
          <button
            onClick={goPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 z-20 w-11 h-11 rounded-full bg-white shadow-lg border border-teal-100 flex items-center justify-center text-teal-600 hover:bg-teal-50 hover:text-teal-800 transition-all duration-200 hover:scale-110 hidden sm:flex"
            aria-label="Previous story"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={goNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 z-20 w-11 h-11 rounded-full bg-white shadow-lg border border-teal-100 flex items-center justify-center text-teal-600 hover:bg-teal-50 hover:text-teal-800 transition-all duration-200 hover:scale-110 hidden sm:flex"
            aria-label="Next story"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          {/* Story Card */}
          <div className="max-w-4xl mx-auto px-4 sm:px-12">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden"
              >
                <div className="p-6 sm:p-10">
                  <div className="flex flex-col sm:flex-row gap-6 sm:gap-8">
                    {/* Patient Info */}
                    <div className="flex sm:flex-col items-center sm:items-center gap-4 sm:gap-3 sm:min-w-[140px]">
                      <div
                        className={`w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br ${story.gradient} flex items-center justify-center shadow-lg`}
                      >
                        <span className="text-white font-bold text-xl sm:text-2xl">
                          {story.initials}
                        </span>
                      </div>
                      <div className="sm:text-center">
                        <h3 className="font-bold text-teal-900 text-lg">{story.name}</h3>
                        <p className="text-sm text-teal-500">Age: {story.age}</p>
                        <Badge className="mt-1 bg-teal-100 text-teal-700 border-teal-200 text-xs font-semibold">
                          {story.condition}
                        </Badge>
                      </div>
                    </div>

                    {/* Story Content */}
                    <div className="flex-1 space-y-5">
                      {/* Quote Icon + Stars */}
                      <div className="flex items-center justify-between">
                        <Quote className="h-8 w-8 text-teal-200 fill-teal-200" />
                        <div className="flex items-center gap-0.5">
                          {Array.from({ length: story.rating }).map((_, i) => (
                            <Star
                              key={i}
                              className="h-4 w-4 text-amber-400 fill-amber-400"
                            />
                          ))}
                        </div>
                      </div>

                      {/* Before */}
                      <div className="bg-rose-50 border border-rose-100 rounded-xl p-4 relative">
                        <div className="absolute -top-2.5 left-3 bg-rose-100 text-rose-600 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full">
                          Pehle (Before)
                        </div>
                        <p className="text-rose-700 leading-relaxed text-sm sm:text-base pt-1">
                          {story.before}
                        </p>
                      </div>

                      {/* Arrow */}
                      <div className="flex justify-center">
                        <motion.div
                          animate={{ y: [0, 4, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          <div className="w-8 h-8 rounded-full bg-teal-100 flex items-center justify-center">
                            <ChevronRight className="h-4 w-4 text-teal-600 rotate-90" />
                          </div>
                        </motion.div>
                      </div>

                      {/* After */}
                      <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-4 relative">
                        <div className="absolute -top-2.5 left-3 bg-emerald-100 text-emerald-600 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full">
                          Baad Mein (After)
                        </div>
                        <p className="text-emerald-700 leading-relaxed text-sm sm:text-base pt-1">
                          {story.after}
                        </p>
                      </div>

                      {/* Sessions info */}
                      <div className="flex items-center gap-2 text-sm text-teal-500">
                        <div className="w-5 h-5 rounded-full bg-teal-100 flex items-center justify-center">
                          <span className="text-teal-600 text-xs font-bold">✓</span>
                        </div>
                        <span>
                          <strong className="text-teal-700">{story.sessions} sessions</strong> mein
                          results
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Dot Indicators */}
            <div className="flex items-center justify-center gap-2 mt-8">
              {stories.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className={`transition-all duration-300 rounded-full ${
                    i === current
                      ? "w-8 h-3 bg-teal-500 shadow-md shadow-teal-500/30"
                      : "w-3 h-3 bg-teal-200 hover:bg-teal-300"
                  }`}
                  aria-label={`Go to story ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-14"
        >
          <div className="bg-gradient-to-r from-teal-800 to-teal-700 rounded-2xl p-8 sm:p-10 text-center shadow-xl relative overflow-hidden">
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
                backgroundSize: "20px 20px",
              }}
            />
            <div className="relative z-10">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                Kya aap bhi apni jeet ki kahani likhna chahte hain?
              </h3>
              <p className="text-teal-200 mb-6 max-w-lg mx-auto">
                Aaj hi free consultation lein aur apni pain-free zindagi ki shuruwat karein.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a
                  href="https://wa.me/9431757875"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="bg-amber-500 hover:bg-amber-600 text-teal-900 font-bold rounded-xl shadow-lg transition-all hover:scale-105">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Free Consultation
                  </Button>
                </a>
                <a href="tel:9431757875">
                  <Button
                    variant="outline"
                    className="border-teal-400 text-teal-100 hover:bg-teal-600 rounded-xl transition-all hover:scale-105"
                  >
                    <Phone className="h-4 w-4 mr-2" />
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
