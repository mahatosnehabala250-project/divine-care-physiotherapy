"use client";

import { useState, useCallback, useRef, useSyncExternalStore } from "react";
import {
  Stethoscope,
  X,
  Phone,
  MessageCircle,
  Bone,
  Activity,
  HelpCircle,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// ─── useSyncExternalStore for mount detection ───────────────────────────────
const emptySubscribe = () => () => {};

function useIsMounted() {
  return useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );
}

// ─── Timed visibility: auto-show after 10 seconds ──────────────────────────
let _cachedShow = false;
const showListeners = new Set<() => void>();
let _showTimerStarted = false;

function subscribeShow(cb: () => void) {
  showListeners.add(cb);
  return () => showListeners.delete(cb);
}

function getSnapshotShow() {
  return _cachedShow;
}

function getServerSnapshotShow() {
  return false;
}

function startShowTimerIfNeeded() {
  if (_showTimerStarted) return;
  _showTimerStarted = true;
  setTimeout(() => {
    _cachedShow = true;
    showListeners.forEach((cb) => cb());
  }, 10000);
}

function useAutoShow() {
  startShowTimerIfNeeded();
  return useSyncExternalStore(
    subscribeShow,
    getSnapshotShow,
    getServerSnapshotShow
  );
}

// ─── WhatsApp URLs ──────────────────────────────────────────────────────────
const WHATSAPP_KNEE =
  "https://wa.me/919431757875?text=Namaste!%20Mujhe%20knee%20pain%20hai.%20Kya%20aap%20meri%20madad%20kar%20sakte%20hain?";

const WHATSAPP_BACK_NECK =
  "https://wa.me/919431757875?text=Namaste!%20Mujhe%20back/neck%20pain%20hai.%20Kya%20aap%20meri%20madad%20kar%20sakte%20hain?";

const WHATSAPP_OTHER =
  "https://wa.me/919431757875?text=Namaste!%20Mujhe%20apni%20problem%20ke%20baare%20mein%20baat%20karni%20hai.";

// ─── Quick question config ──────────────────────────────────────────────────
interface QuickQuestion {
  icon: React.ElementType;
  label: string;
  url: string;
}

const QUICK_QUESTIONS: QuickQuestion[] = [
  { icon: Bone, label: "Knee Pain hai?", url: WHATSAPP_KNEE },
  { icon: Activity, label: "Back/Neck Pain hai?", url: WHATSAPP_BACK_NECK },
  { icon: HelpCircle, label: "Koi aur problem?", url: WHATSAPP_OTHER },
];

// ─── Component ──────────────────────────────────────────────────────────────
export default function QuickConsult() {
  const isMounted = useIsMounted();
  const autoShow = useAutoShow();
  const [isOpen, setIsOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  const toggleOpen = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const closePanel = useCallback(() => {
    setIsOpen(false);
  }, []);

  // Close on click outside
  const handleBackdropClick = useCallback(
    (e: React.MouseEvent) => {
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) {
        closePanel();
      }
    },
    [closePanel]
  );

  // Don't render until mounted + auto-show timer elapsed
  if (!isMounted || !autoShow) return null;

  return (
    <>
      {/* Backdrop to detect outside clicks */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="quick-consult-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="fixed inset-0 z-30"
            onClick={handleBackdropClick}
            aria-hidden="true"
          />
        )}
      </AnimatePresence>

      <div className="fixed bottom-24 right-6 z-30 flex flex-col items-end gap-3">
        {/* Expanded Panel */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              key="quick-consult-panel"
              ref={panelRef}
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.9 }}
              transition={{ type: "spring", stiffness: 350, damping: 25 }}
              className="w-80 max-w-[calc(100vw-3rem)] rounded-2xl shadow-2xl border border-teal-100 overflow-hidden bg-white/95 backdrop-blur-xl"
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-teal-500 to-teal-700 px-4 py-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Stethoscope className="h-5 w-5 text-white" />
                  <span className="text-white font-semibold text-sm">
                    Quick Consult
                  </span>
                </div>
                <button
                  onClick={closePanel}
                  className="text-white/80 hover:text-white transition-colors p-1 rounded-lg hover:bg-white/10"
                  aria-label="Close quick consult"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              {/* Body */}
              <div className="px-4 py-4 space-y-4">
                {/* Greeting */}
                <p className="text-sm text-gray-700 leading-relaxed">
                  Namaste! 👋 Kya aapko dard hai? Hum aapki madad kar sakte
                  hain.
                </p>

                {/* Quick Question Buttons */}
                <div className="space-y-2">
                  {QUICK_QUESTIONS.map((q) => {
                    const Icon = q.icon;
                    return (
                      <a
                        key={q.label}
                        href={q.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 w-full px-3 py-2.5 rounded-xl border-2 border-teal-200 hover:bg-teal-50 hover:border-teal-400 transition-all duration-200 group"
                      >
                        <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-teal-50 group-hover:bg-teal-100 transition-colors">
                          <Icon className="h-4 w-4 text-teal-600" />
                        </span>
                        <span className="text-sm font-medium text-gray-700 group-hover:text-teal-700 transition-colors">
                          {q.label}
                        </span>
                        <MessageCircle className="h-4 w-4 ml-auto text-teal-400 group-hover:text-teal-600 transition-colors" />
                      </a>
                    );
                  })}
                </div>

                {/* Phone */}
                <div className="flex items-center gap-2 pt-1">
                  <Phone className="h-4 w-4 text-teal-600 shrink-0" />
                  <span className="text-xs text-gray-500">
                    Ya seedha call karein:{" "}
                  </span>
                  <a
                    href="tel:9431757875"
                    className="text-sm font-semibold text-teal-700 hover:text-teal-900 transition-colors"
                  >
                    9431757875
                  </a>
                </div>
              </div>

              {/* Footer */}
              <div className="px-4 py-2.5 bg-teal-50/60 border-t border-teal-100">
                <p className="text-[11px] text-teal-600 text-center font-medium tracking-wide">
                  Free consultation &bull; No obligation
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Chat Bubble Button */}
        <motion.button
          onClick={toggleOpen}
          className="relative w-14 h-14 bg-gradient-to-br from-teal-500 to-teal-700 rounded-full shadow-xl shadow-teal-500/30 flex items-center justify-center text-white hover:shadow-teal-500/50 transition-shadow duration-300 group"
          aria-label="Quick Consult - Free!"
          animate={
            !isOpen
              ? {
                  y: [0, -6, 0],
                  transition: {
                    duration: 0.6,
                    repeat: Infinity,
                    repeatDelay: 4.4,
                    ease: "easeInOut",
                  },
                }
              : {}
          }
          title="Quick Consult - Free!"
        >
          {/* Glow ring */}
          {!isOpen && (
            <span className="absolute inset-0 rounded-full bg-teal-400/25 animate-ping pointer-events-none" />
          )}

          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.span
                key="close"
                initial={{ rotate: -90, scale: 0 }}
                animate={{ rotate: 0, scale: 1 }}
                exit={{ rotate: 90, scale: 0 }}
                transition={{ duration: 0.15 }}
              >
                <X className="h-6 w-6" />
              </motion.span>
            ) : (
              <motion.span
                key="stethoscope"
                initial={{ rotate: 90, scale: 0 }}
                animate={{ rotate: 0, scale: 1 }}
                exit={{ rotate: -90, scale: 0 }}
                transition={{ duration: 0.15 }}
              >
                <Stethoscope className="h-6 w-6" />
              </motion.span>
            )}
          </AnimatePresence>

          {/* Tooltip (visible on hover when panel is closed) */}
          {!isOpen && (
            <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-white text-teal-800 text-xs font-semibold px-3 py-1.5 rounded-lg shadow-md border border-teal-100 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
              Quick Consult &mdash; Free!
            </span>
          )}
        </motion.button>
      </div>
    </>
  );
}
