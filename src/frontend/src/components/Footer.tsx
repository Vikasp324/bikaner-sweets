import {
  Clock,
  Facebook,
  Instagram,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";
import { NAV_ITEMS } from "../data/sweets";

export function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";

  const handleNav = (href: string) => {
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-foreground text-background" data-ocid="footer">
      {/* Decorative top border */}
      <div className="h-1 gradient-warm" />

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full gradient-warm flex items-center justify-center shadow-md">
                <span className="text-2xl">🪔</span>
              </div>
              <div>
                <div
                  className="font-display font-bold text-xl"
                  style={{ color: "#FFD700" }}
                >
                  बिकानेर स्वीट्स
                </div>
                <div className="text-sm opacity-70">हर खुशी में मिठास</div>
              </div>
            </div>
            <p className="font-body text-sm opacity-80 leading-relaxed mb-4 max-w-xs">
              1985 से बिकानेर की सबसे प्रसिद्ध मिठाई की दुकान। पारंपरिक स्वाद और आधुनिक
              गुणवत्ता का अनूठा संगम।
            </p>
            <div className="flex gap-3">
              {[
                { icon: <Instagram className="w-4 h-4" />, label: "Instagram" },
                { icon: <Facebook className="w-4 h-4" />, label: "Facebook" },
                { icon: <Twitter className="w-4 h-4" />, label: "Twitter" },
              ].map(({ icon, label }) => (
                <button
                  type="button"
                  key={label}
                  aria-label={label}
                  className="w-9 h-9 rounded-full border border-background/20 flex items-center justify-center hover:bg-primary/80 transition-smooth"
                >
                  {icon}
                </button>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h3
              className="font-display font-bold text-lg mb-4"
              style={{ color: "#FFD700" }}
            >
              त्वरित लिंक
            </h3>
            <ul className="space-y-2">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <button
                    type="button"
                    onClick={() => handleNav(item.href)}
                    className="font-body text-sm opacity-80 hover:opacity-100 hover:text-primary transition-smooth text-left"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3
              className="font-display font-bold text-lg mb-4"
              style={{ color: "#FFD700" }}
            >
              संपर्क जानकारी
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm opacity-80">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary" />
                <span className="font-body">
                  Gol Chowk, Rohnipuram, DDU Nagar, Amanaka, Raipur,
                  Chhattisgarh 492013
                </span>
              </li>
              <li className="flex items-center gap-2 text-sm opacity-80">
                <Phone className="w-4 h-4 flex-shrink-0 text-primary" />
                <a
                  href="tel:+919109300209"
                  className="font-body hover:opacity-100 transition-smooth"
                >
                  +91 91093 00209
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm opacity-80">
                <Clock className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary" />
                <span className="font-body">
                  सोम–शनि: सुबह 8 बजे – रात 9 बजे
                  <br />
                  रविवार: सुबह 9 बजे – शाम 6 बजे
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-background/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs opacity-60">
          <p className="font-body">© {year} बिकानेर स्वीट्स। सर्वाधिकार सुरक्षित।</p>
          <p className="font-body">
            Built with love using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:opacity-100 transition-smooth"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
