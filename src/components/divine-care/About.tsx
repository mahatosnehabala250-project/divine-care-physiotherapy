"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Target, Eye, Heart, Award, ShieldCheck, Users,
  Microscope, Globe, HandHeart, MessageCircle, Phone,
  Calendar, TrendingUp, Sparkles
} from "lucide-react";
import { Button } from "@/components/ui/button";

const timeline = [
  { year: "2016", title: "Divine Care Ki Shuruwat", description: "Dr. Vikas ne Jamshedpur mein apne clinic ki foundation rakhi — ek vision ke saath." },
  { year: "2018", title: "Acupuncture Integration", description: "Physiotherapy ke saath Acupuncture services jodi — unique combination ban gayi." },
  { year: "2020", title: "Hijama Therapy Added", description: "Jamshedpur mein pehli baar Hijama (Cupping) facility launch ki." },
  { year: "2022", title: "500+ Treatments", description: "500+ successful treatments ka milestone achieve kiya — trust badhta gaya." },
  { year: "2024", title: "10+ Expert Team", description: "Team expand ki — har specialty ke liye dedicated experts." },
];

const differentiators = [
  { icon: Microscope, text: "International standard instruments aur techniques", color: "teal" },
  { icon: Globe, text: "Physiotherapy + Acupuncture + Hijama — sab ek jagah", color: "amber" },
  { icon: HandHeart, text: "Har patient ke saath personal empathy aur care", color: "teal" },
  { icon: Award, text: "500+ successful treatments ka record", color: "amber" },
  { icon: Users, text: "10+ expert team members — har specialty ke liye", color: "teal" },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-teal-50/30 to-white relative overflow-hidden" ref={ref}>
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute top-0 right-0 w-96 h-96 bg-teal-100 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-100 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 text-teal-600 font-semibold text-sm uppercase tracking-wider mb-3">
            <Heart className="h-4 w-4" />
            About Divine Care
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-teal-900">
            Hum Kaun Hain Aur <span className="text-amber-600">Kyun</span>?
          </h2>
          <p className="mt-4 text-teal-600 max-w-2xl mx-auto leading-relaxed">
            Jamshedpur ka unique clinic jahan modern science aur traditional healing ka behtareen sangam hai — Dr. Vikas ke vision se bana, 500+ patients ke trust se badha.
          </p>
        </motion.div>

        {/* About Content - 3 Column Layout */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Left - Image + Doctor Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="lg:col-span-1 space-y-6"
          >
            {/* Treatment Image */}
            <div className="relative rounded-3xl overflow-hidden shadow-xl group">
              <img
                src="/images/treatment-scene.png"
                alt="Expert physiotherapy treatment at Divine Care"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-teal-900/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <Badge className="bg-teal-600 text-white border-0 shadow-md">State-of-the-Art Facility</Badge>
              </div>
            </div>

            {/* Doctor Intro Card */}
            <div className="bg-gradient-to-br from-teal-600 to-teal-800 rounded-2xl p-6 text-white shadow-xl relative overflow-hidden">
              <div className="absolute inset-0 opacity-10" style={{
                backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
                backgroundSize: '20px 20px'
              }} />
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center text-white font-bold text-xl shadow-lg border border-white/10">
                    VS
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">Dr. Vikas Kr. Sahu</h3>
                    <p className="text-teal-200 text-sm">Founder & Chief Physiotherapist</p>
                  </div>
                </div>
                <p className="text-teal-100 text-sm leading-relaxed">
                  Dr. Vikas ne Jamshedpur mein ek aisi clinic banayi hai jahan modern science aur traditional healing ka behtareen sangam hai. Unka vision hai ki har patient ko bina surgery ke, affordable rates mein best treatment mile.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Middle - Differentiators + Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-1 space-y-6"
          >
            {/* What Makes Us Different */}
            <Card className="border-2 border-amber-200 bg-gradient-to-br from-amber-50 to-white rounded-2xl shadow-md">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-teal-900 mb-4 flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-amber-600" />
                  Kya Humein Alag Banata Hai?
                </h3>
                <div className="space-y-3">
                  {differentiators.map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                      className="flex items-start gap-3 group"
                    >
                      <div className={`w-8 h-8 rounded-lg ${item.color === "teal" ? "bg-teal-100" : "bg-amber-100"} flex items-center justify-center flex-shrink-0 mt-0.5 transition-transform group-hover:scale-110`}>
                        <item.icon className={`h-4 w-4 ${item.color === "teal" ? "text-teal-600" : "text-amber-600"}`} />
                      </div>
                      <p className="text-sm text-teal-700 leading-relaxed">{item.text}</p>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* CTA */}
            <div className="flex flex-wrap gap-3">
              <a href="https://wa.me/919431757875" target="_blank" rel="noopener noreferrer">
                <Button className="bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white rounded-xl shadow-md btn-hover-scale">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Talk to Dr. Vikas
                </Button>
              </a>
              <a href="tel:9431757875">
                <Button variant="outline" className="border-teal-300 text-teal-700 rounded-xl btn-hover-scale">
                  <Phone className="h-4 w-4 mr-2" />
                  9431757875
                </Button>
              </a>
            </div>
          </motion.div>

          {/* Right - Timeline + Mission/Vision */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="lg:col-span-1 space-y-6"
          >
            {/* Timeline */}
            <Card className="rounded-2xl border border-teal-100 shadow-md">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold text-teal-900 mb-5 flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-teal-600" />
                  Hamara Safar
                </h3>
                <div className="relative">
                  {/* Timeline line */}
                  <div className="absolute left-[15px] top-2 bottom-2 w-0.5 bg-gradient-to-b from-teal-300 via-amber-300 to-teal-300" />

                  <div className="space-y-5">
                    {timeline.map((item, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: 20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
                        className="flex gap-4 items-start"
                      >
                        {/* Dot */}
                        <div className="flex-shrink-0 relative z-10">
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold shadow-sm ${
                            i === timeline.length - 1
                              ? "bg-amber-500 text-white badge-pulse"
                              : "bg-white border-2 border-teal-400 text-teal-600"
                          }`}>
                            <Calendar className="h-3.5 w-3.5" />
                          </div>
                        </div>

                        {/* Content */}
                        <div className="flex-1 min-w-0">
                          <span className="text-xs font-bold text-amber-600">{item.year}</span>
                          <p className="text-sm font-semibold text-teal-900 leading-snug">{item.title}</p>
                          <p className="text-xs text-teal-600 mt-0.5 leading-relaxed">{item.description}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Mission */}
            <Card className="rounded-2xl border border-teal-100 shadow-sm">
              <CardContent className="p-5">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-9 h-9 rounded-xl bg-teal-100 flex items-center justify-center">
                    <Target className="h-4 w-4 text-teal-600" />
                  </div>
                  <h3 className="text-base font-bold text-teal-900">Our Mission</h3>
                </div>
                <p className="text-teal-700 text-sm leading-relaxed italic pl-12">
                  &ldquo;To treat patients with courtesy, exceptional efficiency, with compassion extended individually.&rdquo;
                </p>
              </CardContent>
            </Card>

            {/* Vision */}
            <Card className="rounded-2xl border border-amber-100 shadow-sm">
              <CardContent className="p-5">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-9 h-9 rounded-xl bg-amber-100 flex items-center justify-center">
                    <Eye className="h-4 w-4 text-amber-600" />
                  </div>
                  <h3 className="text-base font-bold text-teal-900">Our Vision</h3>
                </div>
                <p className="text-teal-700 text-sm leading-relaxed italic pl-12">
                  &ldquo;To bring the highest standards of expertise at affordable rates to the common man.&rdquo;
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
