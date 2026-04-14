# Task 7-b: QuickConsult Component

## Summary
Created `/home/z/my-project/src/components/divine-care/QuickConsult.tsx` — a floating "Quick Consult" chat widget for the Divine Care Physiotherapy website.

## What was built
- **Floating chat bubble button** at `fixed bottom-24 right-6 z-30` (above WhatsApp button at bottom-6)
- **Teal gradient circle** (w-14 h-14) with Stethoscope icon and subtle bounce animation every ~5s
- **Tooltip on hover**: "Quick Consult — Free!"
- **Auto-show after 10 seconds** using `useSyncExternalStore` (no useEffect+setState)
- **Expanded panel** with slide-up spring animation via Framer Motion:
  - Header with "Quick Consult" + Stethoscope icon + close button
  - Hindi greeting: "Namaste! 👋 Kya aapko dard hai? Hum aapki madad kar sakte hain."
  - 3 quick question buttons linking to WhatsApp with pre-filled messages:
    - "Knee Pain hai?" (Bone icon)
    - "Back/Neck Pain hai?" (Activity icon)
    - "Koi aur problem?" (HelpCircle icon)
  - Phone CTA: "Ya seedha call karein: 9431757875"
  - Footer: "Free consultation • No obligation"
- **Click-outside detection** to close the panel
- **AnimatePresence** for smooth open/close transitions
- **Icon swap** between Stethoscope (closed) and X (open) with rotation animation

## Key Decisions
- Used `useSyncExternalStore` for both mount detection and auto-show timer (per requirement: no useEffect+setState)
- Created external store pattern for the 10-second auto-show to avoid React hooks rules violations
- Quick question buttons are `<a>` tags opening WhatsApp in new tabs (not buttons) for proper link semantics
- Backdrop overlay captures outside clicks to close the panel
- Glow ping animation on bubble when panel is closed for attention

## Lint Result
✅ `bun run lint` passed with no errors
