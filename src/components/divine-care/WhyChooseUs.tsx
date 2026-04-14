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
    <section id="services" className="py-20 bg-gradient-to-b from-teal-50/50 to-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
          <p className="mt-3 text-teal-600 max-w-2xl mx-auto">
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
              >
                <Card className={`h-full rounded-2xl transition-all duration-300 hover:shadow-lg ${
                  feature.highlight
                    ? "border-2 border-amber-300 bg-gradient-to-br from-amber-50 to-white shadow-md"
                    : "border border-teal-100 hover:border-teal-200"
                }`}>
                  <CardContent className="p-5">
                    <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-3 ${
                      feature.highlight
                        ? "bg-amber-100 text-amber-600"
                        : "bg-teal-100 text-teal-600"
                    }`}>
                      <feature.icon className="h-5 w-5" />
                    </div>
                    {feature.highlight && (
                      <Badge className="mb-2 bg-amber-100 text-amber-700 border-amber-200 text-xs">
                        Unique in Jamshedpur
                      </Badge>
                    )}
                    <h3 className="font-bold text-teal-900 mb-1.5">{feature.title}</h3>
                    <p className="text-sm text-teal-600 leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Treatment Images */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="space-y-6"
          >
            {/* Hijama Image */}
            <div className="relative rounded-3xl overflow-hidden shadow-xl group">
              <img
                src="/images/hijama-cupping.png"
                alt="Hijama Cupping Therapy at Divine Care"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-teal-900/80 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <Badge className="bg-amber-500 text-teal-900 border-0 mb-2">Unique in Jamshedpur</Badge>
                <h4 className="text-white font-bold text-lg">Hijama (Cupping) Therapy</h4>
                <p className="text-teal-200 text-sm mt-1">Natural detox aur pain relief — bina kisi side effects ke</p>
              </div>
            </div>

            {/* Acupuncture Image */}
            <div className="relative rounded-3xl overflow-hidden shadow-xl group">
              <img
                src="/images/acupuncture-treatment.png"
                alt="Acupuncture Treatment at Divine Care"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-teal-900/80 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <Badge className="bg-teal-500 text-white border-0 mb-2">Ancient Wisdom + Modern Science</Badge>
                <h4 className="text-white font-bold text-lg">Acupuncture Therapy</h4>
                <p className="text-teal-200 text-sm mt-1">Body ke natural healing power ko activate karein</p>
              </div>
            </div>

            {/* Quick CTA */}
            <div className="bg-teal-800 rounded-2xl p-6 text-center">
              <p className="text-teal-200 mb-4">In dono treatments ke baare mein aur jaanein?</p>
              <div className="flex flex-wrap gap-3 justify-center">
                <a href="https://wa.me/9431757875" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-amber-500 hover:bg-amber-600 text-teal-900 font-bold rounded-xl">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    WhatsApp Now
                  </Button>
                </a>
                <a href="tel:9431757875">
                  <Button variant="outline" className="border-teal-500 text-teal-200 hover:bg-teal-700 rounded-xl">
                    <Phone className="h-4 w-4 mr-2" />
                    Call Us
                  </Button>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
