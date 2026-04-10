import { Menu, ShoppingBag, X } from "lucide-react";
import { useEffect, useState } from "react";
import { NAV_ITEMS } from "../data/sweets";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const handleNav = (href: string) => {
    setIsOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${
        scrolled
          ? "bg-card shadow-md border-b border-border"
          : "bg-card/95 backdrop-blur-sm border-b border-primary/20"
      }`}
      data-ocid="navbar"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <button
            type="button"
            onClick={() => handleNav("#home")}
            className="flex items-center gap-3 group"
            aria-label="बिकानेर स्वीट्स - होम"
            data-ocid="nav-logo"
          >
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full gradient-warm flex items-center justify-center shadow-md group-hover:scale-105 transition-smooth">
              <span className="text-xl md:text-2xl">🪔</span>
            </div>
            <div className="text-left">
              <div className="font-display font-bold text-primary text-lg md:text-xl leading-tight">
                बिकानेर स्वीट्स
              </div>
              <div className="text-xs text-muted-foreground hidden sm:block">
                हर खुशी में मिठास
              </div>
            </div>
          </button>

          {/* Desktop Nav */}
          <nav
            className="hidden md:flex items-center gap-1"
            aria-label="मुख्य नेविगेशन"
          >
            {NAV_ITEMS.map((item) => (
              <button
                type="button"
                key={item.href}
                onClick={() => handleNav(item.href)}
                className="px-4 py-2 font-body font-semibold text-foreground hover:text-primary hover:bg-primary/10 rounded-lg transition-smooth text-sm"
                data-ocid={`nav-${item.href.replace("#", "")}`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => handleNav("#contact")}
              className="hidden sm:flex items-center gap-2 px-4 py-2 gradient-warm text-primary-foreground rounded-full font-body font-bold text-sm transition-smooth hover:opacity-90 hover:scale-105 shadow-md"
              data-ocid="nav-order-cta"
            >
              <ShoppingBag className="w-4 h-4" />
              ऑर्डर करें
            </button>
            <button
              type="button"
              className="md:hidden p-2 rounded-lg hover:bg-muted transition-smooth"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "मेनू बंद करें" : "मेनू खोलें"}
              aria-expanded={isOpen}
              data-ocid="nav-mobile-toggle"
            >
              {isOpen ? (
                <X className="w-6 h-6 text-foreground" />
              ) : (
                <Menu className="w-6 h-6 text-foreground" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className="md:hidden bg-card border-t border-border shadow-lg"
          data-ocid="nav-mobile-menu"
        >
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-1">
            {NAV_ITEMS.map((item) => (
              <button
                type="button"
                key={item.href}
                onClick={() => handleNav(item.href)}
                className="text-left px-4 py-3 font-body font-semibold text-foreground hover:text-primary hover:bg-primary/10 rounded-lg transition-smooth"
                data-ocid={`nav-mobile-${item.href.replace("#", "")}`}
              >
                {item.label}
              </button>
            ))}
            <button
              type="button"
              onClick={() => handleNav("#contact")}
              className="mt-2 flex items-center justify-center gap-2 px-4 py-3 gradient-warm text-primary-foreground rounded-full font-body font-bold transition-smooth"
              data-ocid="nav-mobile-order-cta"
            >
              <ShoppingBag className="w-4 h-4" />
              अभी ऑर्डर करें
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
