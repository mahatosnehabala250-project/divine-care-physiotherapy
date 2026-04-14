"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Quote, Award, Users, Stethoscope, Phone } from "lucide-react";

export default function DoctorMessage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-teal-50/50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header - Guide Positioning */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-flex items-center gap-2 text-teal-600 font-semibold text-sm uppercase tracking-wider mb-3">
            <Stethoscope className="h-4 w-4" />
            Your Guide to Recovery
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-teal-900">
            Aapka Dard, <span className="text-amber-600">Humara Mission</span>
          </h2>
          <p className="mt-3 text-teal-600 max-w-xl mx-auto">
            Hum samajhte hain ki dard kitna mushkil hota hai. Dr. Vikas ke saath, aap akela nahi hain.
          </p>
        </motion.div>

        {/* Doctor Profile */}
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/images/doctor-portrait.png"
                alt="Dr. Vikas Kr. Sahu - Physiotherapy Specialist"
                className="w-full h-[500px] object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-teal-900/40 via-transparent to-transparent" />
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl shadow-xl p-4 border border-teal-100">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center">
                  <Award className="h-6 w-6 text-amber-600" />
                </div>
                <div>
                  <p className="font-bold text-teal-900 text-lg">500+</p>
                  <p className="text-xs text-teal-600">Successful Treatments</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Message Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl font-bold text-teal-900">Dr. Vikas Kr. Sahu</h3>
              <p className="text-teal-600 font-medium">Founder & Chief Physiotherapist</p>
            </div>

            {/* Quote */}
            <div className="relative bg-teal-50 rounded-2xl p-6 border border-teal-100">
              <Quote className="absolute top-4 left-4 h-8 w-8 text-teal-200" />
              <p className="text-teal-800 leading-relaxed pl-8 italic">
                &ldquo;I welcome you to Divine Care. One of the unique clinic of its kind in Jamshedpur. Here, we have created a state of the art facilities to cater to Chronic disease. Our services are designed to international standards. We are thankful to the trust our clients have placed in us and happy that we have been able to deliver them. Our most important motto is a pleasant recuperation for the patients in an amicable environment. And We are glad that we have been able to achieve our motto with aplomb.&rdquo;
              </p>
            </div>

            {/* Authority Badges */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white rounded-xl p-4 border border-teal-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center">
                    <Award className="h-5 w-5 text-teal-600" />
                  </div>
                  <div>
                    <p className="font-bold text-teal-900">500+</p>
                    <p className="text-xs text-teal-600">Treatments Done</p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-xl p-4 border border-teal-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                    <Users className="h-5 w-5 text-amber-600" />
                  </div>
                  <div>
                    <p className="font-bold text-teal-900">10+</p>
                    <p className="text-xs text-teal-600">Expert Team</p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <a href="https://wa.me/9431757875" target="_blank" rel="noopener noreferrer">
              <Button className="bg-teal-600 hover:bg-teal-700 text-white rounded-xl px-8 h-12 shadow-lg hover:shadow-xl transition-all">
                <Phone className="h-4 w-4 mr-2" />
                Consult Dr. Vikas Today
              </Button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
