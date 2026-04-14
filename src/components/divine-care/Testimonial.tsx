"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, Quote, MessageCircle, Phone } from "lucide-react";

export default function Testimonial() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 bg-gradient-to-b from-teal-50/50 to-white" ref={ref}>
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
            Success Story
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-teal-900">
            Dard Se <span className="text-amber-600">Azaadi</span> — Real Story
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/images/success-story.png"
                alt="Patient recovery success story at Divine Care"
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-teal-900/60 via-transparent to-transparent" />
            </div>
            {/* Badge */}
            <div className="absolute -bottom-4 left-6 bg-white rounded-2xl shadow-xl p-4 border border-teal-100">
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className="h-5 w-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-xs text-teal-600 mt-1">5/5 Patient Rating</p>
            </div>
          </motion.div>

          {/* Testimonial Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <Card className="border-2 border-teal-100 rounded-3xl shadow-lg">
              <CardContent className="p-8">
                <Quote className="h-10 w-10 text-teal-200 mb-4" />

                {/* Before */}
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-3 h-3 rounded-full bg-red-400" />
                    <span className="text-sm font-semibold text-red-600 uppercase tracking-wider">Before Treatment</span>
                  </div>
                  <p className="text-teal-800 leading-relaxed italic">
                    &ldquo;Mujhe 3 saal se back pain tha. Subah uthna mushkil tha, office jaana ek azaab ban gaya tha. Bachchon ke saath park mein jaana chhod diya tha. Doctor ne surgery bola, lekin main darta tha. Lagta tha ab aisi hi zindagi katni hai.&rdquo;
                  </p>
                </div>

                {/* After */}
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-3 h-3 rounded-full bg-green-400" />
                    <span className="text-sm font-semibold text-green-600 uppercase tracking-wider">After Treatment</span>
                  </div>
                  <p className="text-teal-800 leading-relaxed italic">
                    &ldquo;Dr. Vikas ne sirf 6 sessions mein itna fark kar diya jo 3 saal se koi nahi kar paaya! Ab main subah 6 baje uth kar walk pe jaata hoon. Bachchon ke saath cricket khel leta hoon. Surgery ki zarurat bhi nahi padi! Divine Care ne meri zindagi wapas di.&rdquo;
                  </p>
                </div>

                {/* Patient Info */}
                <div className="flex items-center gap-4 pt-4 border-t border-teal-100">
                  <div className="w-12 h-12 rounded-full bg-teal-600 flex items-center justify-center text-white font-bold text-lg">
                    RK
                  </div>
                  <div>
                    <p className="font-bold text-teal-900">Ramesh Kumar</p>
                    <p className="text-sm text-teal-600">Age 52, Sakchi, Jamshedpur</p>
                    <p className="text-xs text-amber-600 font-medium">Back Pain → Pain-Free in 6 Sessions</p>
                  </div>
                </div>

                {/* CTA */}
                <div className="mt-6 flex flex-wrap gap-3">
                  <a href="https://wa.me/9431757875" target="_blank" rel="noopener noreferrer">
                    <Button className="bg-teal-600 hover:bg-teal-700 text-white rounded-xl">
                      <MessageCircle className="h-4 w-4 mr-2" />
                      Meri Bari — Book Now
                    </Button>
                  </a>
                  <a href="tel:9431757875">
                    <Button variant="outline" className="border-teal-300 text-teal-700 rounded-xl">
                      <Phone className="h-4 w-4 mr-2" />
                      Call Now
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
