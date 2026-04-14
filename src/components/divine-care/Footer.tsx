import { Phone, Mail, MapPin, MessageCircle, Heart, Clock, Instagram, Facebook, Youtube } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Conditions", href: "#conditions" },
  { label: "Pain Quiz", href: "#pain-quiz" },
  { label: "Contact", href: "#contact" },
];

const conditions = [
  "Knee Pain",
  "Neck Pain",
  "Shoulder Pain",
  "Back Pain",
  "Stroke Rehab",
  "Disc Bulge",
];

const socialLinks = [
  { icon: Instagram, label: "Instagram", href: "#" },
  { icon: Facebook, label: "Facebook", href: "#" },
  { icon: Youtube, label: "YouTube", href: "#" },
  { icon: MessageCircle, label: "WhatsApp", href: "https://wa.me/9431757875" },
];

export default function Footer() {
  return (
    <footer className="bg-teal-900 text-teal-100 mt-auto relative overflow-hidden">
      {/* Decorative top wave */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-400 via-amber-400 to-teal-400" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center shadow-md">
                <span className="text-white font-bold text-lg">D</span>
              </div>
              <div>
                <p className="font-bold text-white text-lg leading-tight">Divine Care</p>
                <p className="text-xs text-teal-300">Physiotherapy • Acupuncture • Hijama</p>
              </div>
            </div>
            <p className="text-sm text-teal-300 leading-relaxed mb-4">
              Jamshedpur ka unique clinic jahan Physiotherapy, Acupuncture aur Hijama teeno treatments ek saath available hain. Bina surgery ke, bina side effects ke — dard se azaadi.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-2 mb-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="w-9 h-9 rounded-lg bg-teal-800 hover:bg-teal-700 flex items-center justify-center text-teal-300 hover:text-white transition-all duration-200 hover:scale-110"
                  aria-label={social.label}
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>

            {/* WhatsApp quick link */}
            <a
              href="https://wa.me/9431757875"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-green-400 hover:text-green-300 transition-colors"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp: 9431757875
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white mb-4 text-base">Quick Links</h4>
            <nav className="space-y-2.5">
              {quickLinks.map((link) => (
                <a
                  key={link.href + link.label}
                  href={link.href}
                  className="block text-sm text-teal-300 hover:text-white hover:pl-1 transition-all duration-200"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Conditions */}
          <div>
            <h4 className="font-bold text-white mb-4 text-base">Conditions We Treat</h4>
            <div className="space-y-2.5">
              {conditions.map((condition) => (
                <a
                  key={condition}
                  href="#conditions"
                  className="block text-sm text-teal-300 hover:text-white hover:pl-1 transition-all duration-200"
                >
                  {condition}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-white mb-4 text-base">Contact Info</h4>
            <div className="space-y-3">
              <a href="tel:9431757875" className="flex items-start gap-2.5 text-sm text-teal-300 hover:text-white transition-colors group">
                <Phone className="h-4 w-4 mt-0.5 flex-shrink-0 group-hover:text-amber-400 transition-colors" />
                <span>9431757875 / 7903415819</span>
              </a>
              <a href="tel:06572230781" className="flex items-start gap-2.5 text-sm text-teal-300 hover:text-white transition-colors group">
                <Phone className="h-4 w-4 mt-0.5 flex-shrink-0 group-hover:text-amber-400 transition-colors" />
                <span>06572230781 (Office)</span>
              </a>
              <a href="mailto:divinecarejsr1@gmail.com" className="flex items-start gap-2.5 text-sm text-teal-300 hover:text-white transition-colors group">
                <Mail className="h-4 w-4 mt-0.5 flex-shrink-0 group-hover:text-amber-400 transition-colors" />
                <span>divinecarejsr1@gmail.com</span>
              </a>
              <div className="flex items-start gap-2.5 text-sm text-teal-300">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>4th Floor, Sulata Mala Complex, Pennar Road, Near Laxmi Vilash Bank, Sakchi, Jamshedpur – 831001</span>
              </div>
              <div className="flex items-start gap-2.5 text-sm text-teal-300">
                <Clock className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>Mon-Sat: 9:00 AM – 8:00 PM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-teal-800 pt-6">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <p className="text-sm text-teal-400">
              © {new Date().getFullYear()} Divine Care Physiotherapy Acupuncture & Hijama Centre. All rights reserved.
            </p>
            <p className="text-sm text-teal-400 flex items-center gap-1">
              Made with <Heart className="h-3.5 w-3.5 text-red-400 fill-red-400" /> in Jamshedpur
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
