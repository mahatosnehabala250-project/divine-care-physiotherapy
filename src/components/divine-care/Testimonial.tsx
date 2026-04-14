"use client";

import { useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, Quote, MessageCircle, Phone, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Ramesh Kumar",
    initials: "RK",
    age: "Age 52",
    location: "Sakchi, Jamshedpur",
    condition: "Back Pain → Pain-Free in 6 Sessions",
    before: "Mujhe 3 saal se back pain tha. Subah uthna mushkil tha, office jaana ek azaab ban gaya tha. Bachchon ke saath park mein jaana chhod diya tha. Doctor ne surgery bola, lekin main darta tha. Lagta tha ab aisi hi zindagi katni hai.",
    after: "Dr. Vikas ne sirf 6 sessions mein itna fark kar diya jo 3 saal se koi nahi kar paaya! Ab main subah 6 baje uth kar walk pe jaata hoon. Bachchon ke saath cricket khel leta hoon. Surgery ki zarurat bhi nahi padi! Divine Care ne meri zindagi wapas di.",
    rating: 5,
  },
  {
    name: "Sunita Devi",
    initials: "SD",
    age: "Age 45",
    location: "Bistupur, Jamshedpur",
    condition: "Knee Pain → Walking Again in 8 Sessions",
    before: "Ghutne ka dard itna badh gaya tha ki seedhi chadna impossible ho gaya tha. Doctor ne knee replacement surgery bola. Main bahut dar gayi thi — kharcha bhi bahut tha aur recovery time bhi.",
    after: "Acupuncture aur physiotherapy se 8 sessions mein itna relief mila ki main ab khud chal kar market jaati hoon! Surgery ki zarurat hi nahi padi. Dr. Vikas ke treatment ne meri aazaadi wapas di.",
    rating: 5,
  },
  {
    name: "Amit Sharma",
    initials: "AS",
    age: "Age 35",
    location: "Mango, Jamshedpur",
    condition: "Neck Pain → Pain-Free in 4 Sessions",
    before: "IT job ke kaam ke waqt constant neck pain rehta tha. Headache itna hota tha ki kaam nahi ho paata. Sleep bhi disturbed tha. Painkillers se temporary relief milta tha lekin dard wapas aata tha.",
    after: "Sirf 4 sessions mein headache bilkul khatam ho gaya! Posture correction aur acupuncture se permanent relief mila. Ab main bina dard ke poora din kaam kar paata hoon. Best decision ever!",
    rating: 5,
  },
  {
    name: "Prakash Singh",
    initials: "PS",
    age: "Age 60",
    location: "Sakchi, Jamshedpur",
    condition: "Stroke Rehab → Walking Independently in 3 Months",
    before: "Stroke ke baad mera aadha badan chala nahi paata tha. Bachchon par dependent ho gaya tha. Khana khana, chalna — sab mushkil tha. Bahut hopeless feel hota tha.",
    after: "3 mahine ki rehab ke baad main khud chal sakta hoon! Gait training aur FES therapy ne miracle jaisa effect kiya. Ab daily park mein walk pe jaata hoon. Dr. Vikas ka team ne meri himmat wapas di.",
    rating: 5,
  },
];

export default function Testimonial() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[activeIndex];

  return (
    <section className="py-20 bg-gradient-to-b from-teal-50/50 to-white relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-flex items-center gap-2 text-teal-600 font-semibold text-sm uppercase tracking-wider mb-3">
            <Star className="h-4 w-4" />
            Success Stories
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-teal-900">
            Dard Se <span className="text-amber-600">Azaadi</span> — Real Stories
          </h2>
          <p className="mt-3 text-teal-600 max-w-xl mx-auto">
            Yeh real log hain jinhone Dr. Vikas ke treatment se apni zindagi wapas paayi.
          </p>
        </motion.div>

        {/* Main Testimonial Card */}
        <div className="grid lg:grid-cols-5 gap-8 items-start">
          {/* Left - Testimonial Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="lg:col-span-3"
          >
            <Card className="border-2 border-teal-100 rounded-3xl shadow-lg overflow-hidden">
              <CardContent className="p-6 sm:p-8">
                <div className="flex items-start justify-between mb-4">
                  <Quote className="h-10 w-10 text-teal-200" />
                  {/* Rating */}
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} className={`h-4 w-4 ${s <= current.rating ? "fill-amber-400 text-amber-400" : "text-gray-200"}`} />
                    ))}
                  </div>
                </div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Before */}
                    <div className="mb-5">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="w-3 h-3 rounded-full bg-red-400" />
                        <span className="text-sm font-semibold text-red-600 uppercase tracking-wider">Before Treatment</span>
                      </div>
                      <p className="text-teal-800 leading-relaxed italic text-sm sm:text-base">
                        &ldquo;{current.before}&rdquo;
                      </p>
                    </div>

                    {/* After */}
                    <div className="mb-5">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="w-3 h-3 rounded-full bg-green-400" />
                        <span className="text-sm font-semibold text-green-600 uppercase tracking-wider">After Treatment</span>
                      </div>
                      <p className="text-teal-800 leading-relaxed italic text-sm sm:text-base">
                        &ldquo;{current.after}&rdquo;
                      </p>
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Patient Info */}
                <div className="flex items-center gap-4 pt-4 border-t border-teal-100">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-teal-500 to-teal-700 flex items-center justify-center text-white font-bold text-lg shadow-md">
                    {current.initials}
                  </div>
                  <div className="flex-1">
                    <p className="font-bold text-teal-900">{current.name}</p>
                    <p className="text-sm text-teal-600">{current.age}, {current.location}</p>
                    <p className="text-xs text-amber-600 font-medium">{current.condition}</p>
                  </div>
                </div>

                {/* Navigation + CTA */}
                <div className="flex items-center justify-between mt-6 pt-4 border-t border-teal-50">
                  <div className="flex items-center gap-2">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={prevTestimonial}
                      className="h-9 w-9 rounded-full border border-teal-200 text-teal-600 hover:bg-teal-50"
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </Button>
                    <span className="text-xs text-teal-500 font-medium">{activeIndex + 1} / {testimonials.length}</span>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={nextTestimonial}
                      className="h-9 w-9 rounded-full border border-teal-200 text-teal-600 hover:bg-teal-50"
                    >
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="flex gap-2">
                    <a href="https://wa.me/9431757875" target="_blank" rel="noopener noreferrer">
                      <Button size="sm" className="bg-teal-600 hover:bg-teal-700 text-white rounded-xl">
                        <MessageCircle className="h-3.5 w-3.5 mr-1.5" />
                        Meri Bari
                      </Button>
                    </a>
                    <a href="tel:9431757875">
                      <Button size="sm" variant="outline" className="border-teal-300 text-teal-700 rounded-xl">
                        <Phone className="h-3.5 w-3.5 mr-1.5" />
                        Call
                      </Button>
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Right - Mini Testimonial List + Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-2 space-y-4"
          >
            {/* Success Image */}
            <div className="relative rounded-3xl overflow-hidden shadow-xl">
              <img
                src="/images/success-story.png"
                alt="Patient recovery success story at Divine Care"
                className="w-full h-48 sm:h-56 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-teal-900/70 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <div className="flex items-center gap-1 mb-1">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-white text-sm font-medium">500+ Happy Patients</p>
              </div>
            </div>

            {/* Mini testimonial selector */}
            <div className="space-y-2">
              {testimonials.map((t, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`w-full flex items-center gap-3 p-3 rounded-2xl border-2 transition-all duration-200 text-left ${
                    i === activeIndex
                      ? "border-teal-300 bg-teal-50 shadow-md"
                      : "border-teal-50 bg-white hover:border-teal-100 hover:bg-teal-50/50"
                  }`}
                >
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 ${
                    i === activeIndex
                      ? "bg-gradient-to-br from-teal-500 to-teal-700 text-white shadow-md"
                      : "bg-teal-100 text-teal-600"
                  }`}>
                    {t.initials}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className={`text-sm font-semibold truncate ${i === activeIndex ? "text-teal-900" : "text-teal-700"}`}>
                      {t.name}
                    </p>
                    <p className="text-xs text-amber-600 truncate">{t.condition}</p>
                  </div>
                  {i === activeIndex && (
                    <div className="w-2 h-2 rounded-full bg-teal-500 flex-shrink-0" />
                  )}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
