"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const sections = [
  { id: "home", label: "Home" },
  { id: "doctor", label: "Dr. Vikas" },
  { id: "conditions", label: "Conditions" },
  { id: "services", label: "Services" },
  { id: "plan", label: "Treatment Plan" },
  { id: "treatment-timeline", label: "Journey" },
  { id: "pain-quiz", label: "Pain Quiz" },
  { id: "results", label: "Results" },
  { id: "success-stories", label: "Stories" },
  { id: "about", label: "About" },
  { id: "faq", label: "FAQ" },
  { id: "contact", label: "Contact" },
];

export default function PageNavDots() {
  const [activeSection, setActiveSection] = useState<string>("home");
  const [visible, setVisible] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -60% 0px" }
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  const handleClick = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.nav
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 20 }}
          transition={{ duration: 0.3 }}
          className="hidden lg:flex fixed right-4 top-1/2 -translate-y-1/2 z-40 flex-col items-center gap-3"
          aria-label="Section navigation"
        >
          <TooltipProvider delayDuration={200}>
            {sections.map(({ id, label }) => {
              const isActive = activeSection === id;
              return (
                <Tooltip key={id}>
                  <TooltipTrigger asChild>
                    <button
                      onClick={() => handleClick(id)}
                      aria-label={`Navigate to ${label} section`}
                      className="focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 rounded-full p-1"
                    >
                      <motion.span
                        layout
                        initial={false}
                        animate={
                          isActive
                            ? { width: 12, height: 12, scale: 1 }
                            : { width: 8, height: 8, scale: 1 }
                        }
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 25,
                        }}
                        className={
                          isActive
                            ? "block w-3 h-3 bg-teal-500 rounded-full shadow-md shadow-teal-500/30"
                            : "block w-2 h-2 bg-gray-300 hover:bg-teal-300 rounded-full transition-all duration-300"
                        }
                      />
                    </button>
                  </TooltipTrigger>
                  <TooltipContent side="left" sideOffset={8}>
                    <p>{label}</p>
                  </TooltipContent>
                </Tooltip>
              );
            })}
          </TooltipProvider>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
