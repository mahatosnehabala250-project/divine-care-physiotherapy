# Task 8-a: HealthInsurance Component

## Agent: Main Agent
## Status: Completed

## Summary
Created `/home/z/my-project/src/components/divine-care/HealthInsurance.tsx` — a "use client" component for the Divine Care Physiotherapy website addressing payment flexibility and insurance/EMI options.

## What was built
- **Section ID**: `insurance`
- **Section title**: "Ilaje Affordable Hai" with amber highlight on "Affordable"
- **Subtitle**: "Paisa na aaye raaste mein — hum samajhte hain aur solution dete hain"
- **Badge**: "Flexible Payment" with Wallet icon

### Left side — 3 payment option cards:
1. **Cashless Insurance** — Shield icon, teal color scheme
2. **Easy EMI Options** — CreditCard icon, amber color scheme
3. **Cash & UPI Payment** — Smartphone icon, teal color scheme

### Right side — Trust-building card:
- Heading: "Pehle Treatment, Baad Mein Payment"
- Description about flexible payment plans
- Green checkmark list: No hidden charges, Transparent pricing, Free consultation, Receipt for insurance claim
- CTA: "Payment Options Jaanein" → WhatsApp link

### Design details:
- Background: gradient from white via teal-50/20 to white with decorative blur blobs
- Payment cards: rounded-2xl, border-2, gradient icon circles, hover lift (whileHover y:-4), icon scale+rotate on hover
- Trust card: glass-card with amber gradient top bar, subtle glow effect
- Framer Motion: staggered fade-in from bottom (cards delay: 0.15 + i*0.12, trust card delay: 0.4, checkmarks delay: 0.6 + i*0.1)
- Mobile: single column stack (lg:grid-cols-2)
- useRef + useInView for scroll animations

## Lint result
Passed with zero errors.
