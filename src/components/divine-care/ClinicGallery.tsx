"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Camera, MessageCircle, Phone, Sparkles, ArrowRight
} from "lucide-react";

const galleryItems = [
  {
    src: "/images/hero-clinic.png",
    alt: "Divine Care Clinic Reception Area",
    caption: "Modern Reception",
    description: "Comfortable waiting area with amicable environment",
    span: "col-span-2 row-span-2",
  },
  {
    src: "/images/hijama-cupping.png",
    alt: "Hijama Cupping Therapy Room",
    caption: "Hijama Room",
    description: "Specialized cupping therapy setup",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/images/acupuncture-treatment.png",
    alt: "Acupuncture Treatment Room",
    caption: "Acupuncture Suite",
    description: "Sterile, calm environment for healing",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/images/treatment-scene.png",
    alt: "Physiotherapy Treatment Area",
    caption: "Treatment Bay",
    description: "State-of-the-art physiotherapy equipment",
    span: "col-span-1 row-span-2",
  },
  {
    src: "/images/doctor-portrait.png",
    alt: "Dr. Vikas Kr. Sahu at Divine Care",
    caption: "Dr. Vikas",
    description: "8+ years of expertise",
    span: "col-span-1 row-span-1",
  },
];

export default function ClinicGallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 bg-white relative" ref={ref}>
      {/* Subtle decorative background */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal-100 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-100 rounded-full blur-[120px]" />
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
            <Camera className="h-4 w-4" />
            Our Clinic
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-teal-900">
            Apni <span className="text-amber-600">Aankhon</span> Se Dekhein
          </h2>
          <p className="mt-3 text-teal-600 max-w-xl mx-auto leading-relaxed">
            International standards ke according designed clinic — jahan aapko recovery ka har sukh milega.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[200px] sm:auto-rows-[240px]">
          {galleryItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative rounded-2xl overflow-hidden group cursor-pointer ${item.span}`}
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                loading="lazy"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-teal-950/80 via-teal-900/20 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300" />
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
                <Badge className="bg-amber-500 text-teal-900 border-0 text-xs mb-2 shadow-sm">
                  {item.caption}
                </Badge>
                <p className="text-white font-bold text-sm sm:text-base">{item.description}</p>
              </div>
              {/* Hover zoom icon */}
              <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <Camera className="h-4 w-4 text-white" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-10 text-center"
        >
          <div className="inline-flex flex-col items-center gap-4 bg-gradient-to-r from-teal-50 to-amber-50 rounded-2xl p-6 sm:p-8 border border-teal-100">
            <div className="flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-amber-500" />
              <p className="font-bold text-teal-900 text-lg">
                Clinic Ka Visit Karke Dekhein!
              </p>
              <Sparkles className="h-5 w-5 text-amber-500" />
            </div>
            <p className="text-teal-600 text-sm max-w-md">
              Walk-in welcome hain — Mon-Sat, 9AM-8PM. Aakar dekhein ki humari facilities kaisi hain, Dr. Vikas se baat karein — koi obligation nahi.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="https://wa.me/9431757875" target="_blank" rel="noopener noreferrer">
                <Button className="bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white rounded-xl shadow-lg btn-hover-scale">
                  <MessageCircle className="h-4 w-4 mr-2" />
                  Schedule a Visit
                </Button>
              </a>
              <a href="tel:9431757875">
                <Button variant="outline" className="border-teal-300 text-teal-700 hover:bg-teal-50 rounded-xl btn-hover-scale">
                  <Phone className="h-4 w-4 mr-2" />
                  Call: 9431757875
                </Button>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
