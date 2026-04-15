"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Sparkles, Heart, Shield, Zap, Leaf, HandHeart,
  Phone, MessageCircle, CheckCircle2
} from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "Hijama (Cupping) Therapy",
    description: "Jamshedpur mein unique — Hijama se blood circulation improve, toxins remove, aur chronic pain se naturally azaadi.",
    highlight: true,
  },
  {
    icon: Leaf,
    title: "Acupuncture",
    description: "Bina dawaai ke, bina side effects ke — acupuncture se body ke natural healing power ko activate karein.",
    highlight: true,
  },
  {
    icon: Shield,
    title: "No Surgery Required",
    description: "Hum maante hain ki surgery se pehle natural treatment try karna chahiye. 90% cases mein surgery ki zarurat nahi padti.",
    highlight: false,
  },
  {
    icon: Heart,
    title: "International Standards",
    description: "State-of-the-art facilities aur latest instruments — international standards ke according designed.",
    highlight: false,
  },
  {
    icon: Zap,
    title: "Fast Pain Relief",
    description: "Acute pain mein pehle session se hi fark mehsoos hota hai. Chronic pain mein 2-3 weeks mein major improvement.",
    highlight: false,
  },
  {
    icon: HandHeart,
    title: "Affordable Treatment",
    description: "Best treatment, affordable rates — kyunki hum maante hain ki health sabka adhikaar hai, kisi ek ka fayda nahi.",
    highlight: false,
  },
];

export default function WhyChooseUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-teal-50/50 to-white relative overflow-hidden stripe-pattern" ref={ref}>
      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute top-10 right-0 w-80 h-80 bg-amber-200 rounded-full blur-[120px]" />
        <div className="absolute bottom-10 left-0 w-80 h-80 bg-teal-200 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-flex items-center gap-2 text-teal-600 font-semibold text-sm uppercase tracking-wider mb-3">
            <Sparkles className="h-4 w-4" />
            Why Choose Divine Care
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-teal-900">
            Kya Humein <span className="text-amber-600">Alag</span> Banata Hai?
          </h2>
          <p className="mt-3 text-teal-600 max-w-2xl mx-auto leading-relaxed">
            Jamshedpur mein ek hi clinic jahan Physiotherapy, Acupuncture aur Hijama — teenon ek saath available hain.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Feature Cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="card-hover-lift group"
              >
                {feature.highlight ? (
                  /* Highlight card: animated gradient border + pulsing glow */
                  <div className="highlight-card-border glow-amber-pulse">
                    <Card className="h-full rounded-[14px] border-0 shadow-none bg-gradient-to-br from-amber-50 to-white shine-effect overflow-hidden">
                      <CardContent className="p-5 relative z-10">
                        <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-3 bg-amber-100 text-amber-600 shadow-sm transition-transform duration-300 group-hover:rotate-[8deg]">
                          <feature.icon className="h-6 w-6" />
                        </div>
                        <Badge className="mb-2 bg-amber-100 text-amber-700 border-amber-200 text-xs shadow-sm">
                          <CheckCircle2 className="h-3 w-3 mr-1" />
                          Unique in Jamshedpur
                        </Badge>
                        <h3 className="font-bold text-teal-900 mb-1.5 text-lg">{feature.title}</h3>
                        <p className="text-sm text-teal-600 leading-relaxed">{feature.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                ) : (
                  /* Regular card: gradient border wrapper */
                  <div className="rounded-2xl p-[2px] bg-gradient-to-br from-teal-200/50 via-teal-100/30 to-teal-200/50 hover:from-teal-300/60 hover:via-teal-200/40 hover:to-teal-300/60 transition-all duration-300">
                    <Card className="h-full rounded-[14px] border-0 shadow-none bg-white shine-effect overflow-hidden">
                      <CardContent className="p-5 relative z-10">
                        <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-3 bg-teal-100 text-teal-600 shadow-sm transition-transform duration-300 group-hover:rotate-[8deg]">
                          <feature.icon className="h-6 w-6" />
                        </div>
                        <h3 className="font-bold text-teal-900 mb-1.5 text-lg">{feature.title}</h3>
                        <p className="text-sm text-teal-600 leading-relaxed">{feature.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Treatment Images */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="space-y-5"
          >
            {/* Hijama Image */}
            <div className="relative rounded-3xl overflow-hidden shadow-xl group card-hover-lift">
              {/* Decorative corner accent - teal triangle */}
              <div className="absolute top-0 right-0 z-10 pointer-events-none">
                <div className="w-0 h-0 border-t-[44px] border-t-teal-500/80 border-l-[44px] border-l-transparent" />
              </div>
              <img
                src="/images/hijama-treatment-1.png"
                alt="Hijama Cupping Therapy at Divine Care — Real treatment in progress"
                className="w-full h-60 sm:h-72 object-cover object-center group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-teal-950/85 via-teal-900/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <Badge className="bg-amber-500 text-teal-900 border-0 mb-2 shadow-md">Unique in Jamshedpur</Badge>
                <h4 className="text-white font-bold text-xl">Hijama (Cupping) Therapy</h4>
                <p className="text-teal-200 text-sm mt-1 leading-relaxed">Natural detox aur pain relief — bina kisi side effects ke</p>
              </div>
            </div>

            {/* Acupuncture Image */}
            <div className="relative rounded-3xl overflow-hidden shadow-xl group card-hover-lift">
              {/* Decorative corner accent - teal triangle */}
              <div className="absolute top-0 right-0 z-10 pointer-events-none">
                <div className="w-0 h-0 border-t-[44px] border-t-teal-500/80 border-l-[44px] border-l-transparent" />
              </div>
              <img
                src="/images/doctor-treating-patient.png"
                alt="Acupuncture Treatment at Divine Care — Dr. Vikas treating a patient"
                className="w-full h-60 sm:h-72 object-cover object-top group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-teal-950/85 via-teal-900/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <Badge className="bg-teal-500 text-white border-0 mb-2 shadow-md">Ancient Wisdom + Modern Science</Badge>
                <h4 className="text-white font-bold text-xl">Acupuncture Therapy</h4>
                <p className="text-teal-200 text-sm mt-1 leading-relaxed">Body ke natural healing power ko activate karein</p>
              </div>
            </div>

            {/* Quick CTA */}
            <div className="bg-gradient-to-r from-teal-800 to-teal-700 rounded-2xl p-6 text-center shadow-xl relative overflow-hidden wave-ripple-bg">
              {/* Dot pattern */}
              <div className="absolute inset-0 opacity-10" style={{
                backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
                backgroundSize: '20px 20px'
              }} />
              <div className="relative z-10">
                <p className="text-teal-100 mb-4 font-medium">In dono treatments ke baare mein aur jaanein?</p>
                <div className="flex flex-wrap gap-3 justify-center">
                  <a href="https://wa.me/9431757875" target="_blank" rel="noopener noreferrer">
                    <Button className="bg-amber-500 hover:bg-amber-600 text-teal-900 font-bold rounded-xl shadow-lg transition-all hover:scale-105">
                      <MessageCircle className="h-4 w-4 mr-2" />
                      WhatsApp Now
                    </Button>
                  </a>
                  <a href="tel:9431757875">
                    <Button className="bg-white/15 hover:bg-white/25 text-white border-2 border-teal-300/50 hover:border-teal-200 rounded-xl transition-all hover:scale-105 font-bold backdrop-blur-sm">
                      <Phone className="h-4 w-4 mr-2" />
                      Call Us
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
