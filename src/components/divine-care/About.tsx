"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Target, Eye, Heart, Award, ShieldCheck, Users,
  Microscope, Globe, HandHeart, MessageCircle, Phone
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-flex items-center gap-2 text-teal-600 font-semibold text-sm uppercase tracking-wider mb-3">
            <Heart className="h-4 w-4" />
            About Divine Care
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-teal-900">
            Hum Kaun Hain Aur <span className="text-amber-600">Kyun</span>?
          </h2>
        </motion.div>

        {/* About Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Images & Credentials */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            {/* Treatment Image */}
            <div className="relative rounded-3xl overflow-hidden shadow-xl">
              <img
                src="/images/treatment-scene.png"
                alt="Expert physiotherapy treatment at Divine Care"
                className="w-full h-72 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-teal-900/50 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <Badge className="bg-teal-600 text-white border-0">State-of-the-Art Facility</Badge>
              </div>
            </div>

            {/* What Makes Us Different */}
            <Card className="border-2 border-amber-200 bg-gradient-to-br from-amber-50 to-white rounded-2xl">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-teal-900 mb-4 flex items-center gap-2">
                  <ShieldCheck className="h-5 w-5 text-amber-600" />
                  Kya Humein Alag Banata Hai?
                </h3>
                <div className="space-y-3">
                  {[
                    { icon: Microscope, text: "International standard instruments aur techniques" },
                    { icon: Globe, text: "Physiotherapy + Acupuncture + Hijama — sab ek jagah" },
                    { icon: HandHeart, text: "Har patient ke saath personal empathy aur care" },
                    { icon: Award, text: "500+ successful treatments ka record" },
                    { icon: Users, text: "10+ expert team members — har specialty ke liye" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-amber-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <item.icon className="h-4 w-4 text-amber-600" />
                      </div>
                      <p className="text-sm text-teal-700">{item.text}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Right Side - Mission, Vision */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Doctor Intro */}
            <div className="bg-teal-50 rounded-2xl p-6 border border-teal-100">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-teal-500 to-teal-700 flex items-center justify-center text-white font-bold text-xl shadow-md">
                  VS
                </div>
                <div>
                  <h3 className="text-lg font-bold text-teal-900">Dr. Vikas Kr. Sahu</h3>
                  <p className="text-sm text-teal-600">Founder & Chief Physiotherapist</p>
                </div>
              </div>
              <p className="text-teal-700 text-sm leading-relaxed">
                Dr. Vikas ne Jamshedpur mein ek aisi clinic banayi hai jahan modern science aur traditional healing ka behtareen sangam hai. Unka vision hai ki har patient ko bina surgery ke, affordable rates mein best treatment mile.
              </p>
            </div>

            {/* Mission */}
            <Card className="rounded-2xl border border-teal-100">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-teal-100 flex items-center justify-center">
                    <Target className="h-5 w-5 text-teal-600" />
                  </div>
                  <h3 className="text-lg font-bold text-teal-900">Our Mission</h3>
                </div>
                <p className="text-teal-700 text-sm leading-relaxed italic">
                  &ldquo;To treat patients with courtesy, exceptional efficiency, with compassion extended individually, associated with prompt and timely service and sympathetic education of the patients regarding their health needs.&rdquo;
                </p>
              </CardContent>
            </Card>

            {/* Vision */}
            <Card className="rounded-2xl border border-amber-100">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center">
                    <Eye className="h-5 w-5 text-amber-600" />
                  </div>
                  <h3 className="text-lg font-bold text-teal-900">Our Vision</h3>
                </div>
                <p className="text-teal-700 text-sm leading-relaxed italic">
                  &ldquo;To bring the highest standards of expertise and skill involved in the treatment of patients, using the most recent sophisticated instrument techniques available currently in the world and to bring the benefit of these at affordable rates to the common man.&rdquo;
                </p>
              </CardContent>
            </Card>

            {/* CTA */}
            <div className="flex flex-wrap gap-3">
              <a href="https://wa.me/9431757875" target="_blank" rel="noopener noreferrer">
                <Button className="bg-teal-600 hover:bg-teal-700 text-white rounded-xl">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Talk to Dr. Vikas
                </Button>
              </a>
              <a href="tel:9431757875">
                <Button variant="outline" className="border-teal-300 text-teal-700 rounded-xl">
                  <Phone className="h-4 w-4 mr-2" />
                  9431757875
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
