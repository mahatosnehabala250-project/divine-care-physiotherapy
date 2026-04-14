# Task 3-a: BodyMap Component

## Summary
Created `/home/z/my-project/src/components/divine-care/BodyMap.tsx` — an interactive body map component for the Divine Care Physiotherapy website.

## What was built

### Component: `BodyMap`
- **File**: `/home/z/my-project/src/components/divine-care/BodyMap.tsx`
- **Section ID**: `body-map`
- **Title**: "Apna Dard Yahan Click Karein" (Hinglish)
- **Subtitle**: "Body ke kis hisse mein dard hai? Click karein aur jaayein kya karna hai"

### Features
1. **Interactive SVG Human Body** (desktop, ≥768px):
   - Full body outline with 7 clickable regions: Brain, Head/Neck, Left Shoulder, Right Shoulder, Back, Left Knee, Right Knee
   - Each region maps to conditions (Stroke Rehab, Neck Pain, Shoulder Pain, Back Pain, Disc Bulge, Knee Pain)
   - Hover: teal glow/pulse effect with animated pulse circles
   - Click: floating popover card next to the body part showing condition name, Hinglish description, and "Learn More" button
   - Framer Motion animations for hover, click, and popover transitions
   - Side legend (visible on lg+) showing all conditions with gradient icons

2. **Mobile Fallback** (mobile, <768px):
   - 2-column card grid with 5 body regions (deduplicated shoulders/knees)
   - Each card has icon, body part name, Hinglish label, condition description, and "Learn More" button
   - Staggered entrance animations

3. **Glass/Gradient Design**:
   - White/60 backdrop-blur container with teal border
   - Gradient accent bars (teal → amber → teal)
   - Teal primary (#0d9488), amber accent (#f59e0b) color scheme
   - Decorative background blur circles and dot grid pattern

4. **"Learn More" Integration**:
   - Scrolls to `#conditions` section
   - Attempts to find and click the matching condition card by `data-condition-id` attribute

### Data Structure
- `bodyRegions`: Array of 7 regions, each with `id`, `label`, `labelHinglish`, and `conditions[]`
- `regionPaths`: SVG path data for each clickable region with center coordinates for popover positioning
- `bodyOutline`: Full body silhouette SVG path

### Technical Notes
- Uses `useIsMobile()` hook for responsive switching
- Uses Framer Motion's `motion.path` for interactive SVG regions with `whileHover`/`whileTap`
- SVG filters: `tealGlow` for hover, `amberGlow` for selected state
- Animated pulse circles on each region using SVG `<animate>` elements
- Lint: passes cleanly (no errors/warnings)
- Dev server: compiles without errors
