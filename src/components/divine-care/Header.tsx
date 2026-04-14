"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { Phone, Mail, Menu, MapPin, Clock } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Conditions", href: "#conditions" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Top Bar */}
      <div className="bg-teal-800 text-white text-xs sm:text-sm">
        <div className="max-w-7xl mx-auto px-4 py-2 flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-4 flex-wrap">
            <a href="tel:9431757875" className="flex items-center gap-1.5 hover:text-teal-200 transition-colors">
              <Phone className="h-3.5 w-3.5" />
              <span>9431757875 / 7903415819</span>
            </a>
            <a href="mailto:divinecarejsr1@gmail.com" className="hidden sm:flex items-center gap-1.5 hover:text-teal-200 transition-colors">
              <Mail className="h-3.5 w-3.5" />
              <span>divinecarejsr1@gmail.com</span>
            </a>
          </div>
          <div className="flex items-center gap-4 flex-wrap">
            <div className="hidden md:flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5" />
              <span>Sakchi, Jamshedpur</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5" />
              <span>Mon-Sat: 9AM - 8PM</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-teal-100"
            : "bg-white shadow-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => { e.preventDefault(); handleNavClick("#home"); }}
            className="flex items-center gap-2.5 group"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-500 to-teal-700 flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
              <span className="text-white font-bold text-lg">D</span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-teal-800 text-base leading-tight">Divine Care</span>
              <span className="text-[10px] text-teal-600 leading-tight hidden sm:block">Physiotherapy • Acupuncture • Hijama</span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                className="px-4 py-2 text-sm font-medium text-teal-700 hover:text-teal-900 hover:bg-teal-50 rounded-lg transition-all duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA + Mobile Menu */}
          <div className="flex items-center gap-3">
            <a
              href="https://wa.me/9431757875"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex"
            >
              <Button className="bg-teal-600 hover:bg-teal-700 text-white shadow-md hover:shadow-lg transition-all duration-200 rounded-xl px-5">
                <Phone className="h-4 w-4 mr-2" />
                Book Appointment
              </Button>
            </a>

            {/* Mobile Menu */}
            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon" className="text-teal-700">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-72 bg-white p-0">
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                <div className="p-6">
                  <div className="flex items-center gap-2.5 mb-8">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-500 to-teal-700 flex items-center justify-center">
                      <span className="text-white font-bold text-lg">D</span>
                    </div>
                    <span className="font-bold text-teal-800">Divine Care</span>
                  </div>
                  <nav className="flex flex-col gap-1">
                    {navLinks.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                        className="px-4 py-3 text-base font-medium text-teal-700 hover:text-teal-900 hover:bg-teal-50 rounded-xl transition-all"
                      >
                        {link.label}
                      </a>
                    ))}
                  </nav>
                  <div className="mt-8 space-y-3">
                    <a
                      href="https://wa.me/9431757875"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <Button className="w-full bg-teal-600 hover:bg-teal-700 text-white rounded-xl">
                        <Phone className="h-4 w-4 mr-2" />
                        Book Appointment
                      </Button>
                    </a>
                    <a href="tel:9431757875" className="block">
                      <Button variant="outline" className="w-full border-teal-300 text-teal-700 rounded-xl">
                        <Phone className="h-4 w-4 mr-2" />
                        Call: 9431757875
                      </Button>
                    </a>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </motion.header>
    </>
  );
}
