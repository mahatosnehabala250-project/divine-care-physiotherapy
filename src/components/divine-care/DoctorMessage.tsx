"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Quote, Award, Users, Stethoscope, Phone, GraduationCap, Hospital } from "lucide-react";

export default function DoctorMessage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-teal-50/50 relative" ref={ref}>
      {/* Subtle decorative elements */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-0 left-0 w-64 h-64 bg-teal-100 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-amber-100 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
          <p className="mt-3 text-teal-600 max-w-xl mx-auto leading-relaxed">
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
            <div className="relative rounded-3xl overflow-hidden shadow-2xl glow-teal">
              <img
                src="/images/doctor-portrait.png"
                alt="Dr. Vikas Kr. Sahu - Physiotherapy Specialist"
                className="w-full h-[480px] sm:h-[520px] object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-teal-950/50 via-transparent to-transparent" />
            </div>
            {/* Floating Badge 1 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="absolute -bottom-4 -right-4 bg-white rounded-2xl shadow-xl p-4 border border-teal-100"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center">
                  <Award className="h-6 w-6 text-amber-600" />
                </div>
                <div>
                  <p className="font-bold text-teal-900 text-lg">500+</p>
                  <p className="text-xs text-teal-600">Successful Treatments</p>
                </div>
              </div>
            </motion.div>
            {/* Floating Badge 2 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="absolute top-4 -left-4 bg-white rounded-2xl shadow-xl p-3 border border-teal-100"
            >
              <div className="flex items-center gap-2">
                <div className="w-9 h-9 bg-teal-100 rounded-lg flex items-center justify-center">
                  <GraduationCap className="h-4 w-4 text-teal-600" />
                </div>
                <div>
                  <p className="font-bold text-teal-900 text-sm">Expert</p>
                  <p className="text-[10px] text-teal-600">Physiotherapist</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Message Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="space-y-6"
          >
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Hospital className="h-5 w-5 text-teal-500" />
                <span className="text-teal-500 font-medium text-sm">Divine Care Physiotherapy</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-teal-900">Dr. Vikas Kr. Sahu</h3>
              <p className="text-teal-600 font-medium mt-1">Founder & Chief Physiotherapist</p>
            </div>

            {/* Quote */}
            <div className="relative bg-gradient-to-br from-teal-50 to-white rounded-2xl p-6 border border-teal-100 shadow-sm">
              <div className="absolute top-3 left-4">
                <Quote className="h-10 w-10 text-teal-200/60" />
              </div>
              <p className="text-teal-800 leading-[1.8] pl-6 pr-2 italic text-[15px]">
                &ldquo;I welcome you to Divine Care. One of the unique clinic of its kind in Jamshedpur. Here, we have created a state of the art facilities to cater to Chronic disease. Our services are designed to international standards. We are thankful to the trust our clients have placed in us and happy that we have been able to deliver them. Our most important motto is a pleasant recuperation for the patients in an amicable environment. And We are glad that we have been able to achieve our motto with aplomb.&rdquo;
              </p>
            </div>

            {/* Authority Badges */}
            <div className="grid grid-cols-3 gap-3">
              <div className="bg-white rounded-xl p-3 border border-teal-100 shadow-sm card-hover-lift text-center">
                <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <Award className="h-5 w-5 text-teal-600" />
                </div>
                <p className="font-bold text-teal-900 text-lg">500+</p>
                <p className="text-[10px] text-teal-600">Treatments</p>
              </div>
              <div className="bg-white rounded-xl p-3 border border-amber-100 shadow-sm card-hover-lift text-center">
                <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <Users className="h-5 w-5 text-amber-600" />
                </div>
                <p className="font-bold text-teal-900 text-lg">10+</p>
                <p className="text-[10px] text-teal-600">Expert Team</p>
              </div>
              <div className="bg-white rounded-xl p-3 border border-teal-100 shadow-sm card-hover-lift text-center">
                <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <GraduationCap className="h-5 w-5 text-teal-600" />
                </div>
                <p className="font-bold text-teal-900 text-lg">8+</p>
                <p className="text-[10px] text-teal-600">Years Exp.</p>
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-wrap gap-3 pt-2">
              <a href="https://wa.me/9431757875" target="_blank" rel="noopener noreferrer">
                <Button className="bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white rounded-xl px-7 h-12 shadow-lg shadow-teal-600/20 hover:shadow-xl transition-all">
                  <Phone className="h-4 w-4 mr-2" />
                  Consult Dr. Vikas Today
                </Button>
              </a>
              <a href="tel:9431757875">
                <Button variant="outline" className="border-teal-300 text-teal-700 hover:bg-teal-50 rounded-xl h-12">
                  <Phone className="h-4 w-4 mr-2" />
                  Call: 9431757875
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
