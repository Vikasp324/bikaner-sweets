import { ShoppingBag, Star } from "lucide-react";
import { useState } from "react";
import type { Sweet } from "../types";
import { ProductModal } from "./ProductModal";

interface ProductCardProps {
  sweet: Sweet;
  index: number;
  isVisible: boolean;
}

export function ProductCard({ sweet, index, isVisible }: ProductCardProps) {
  const [modalOpen, setModalOpen] = useState(false);

  const badgeStyles: Record<string, { bg: string; text: string }> = {
    saffron: { bg: "rgba(255,153,51,0.92)", text: "#fff" },
    gold: { bg: "rgba(255,215,0,0.92)", text: "#333" },
    red: { bg: "rgba(227,27,35,0.9)", text: "#fff" },
    green: { bg: "rgba(34,197,94,0.9)", text: "#fff" },
  };
  const badge = sweet.badgeColor ? badgeStyles[sweet.badgeColor] : null;

  return (
    <>
      <button
        type="button"
        className="bg-card rounded-2xl overflow-hidden shadow-md hover:shadow-xl border border-border group text-left w-full transition-smooth hover:-translate-y-2"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateY(0)" : "translateY(32px)",
          transition: `opacity 0.5s ease ${index * 0.1}s, transform 0.5s ease ${index * 0.1}s, box-shadow 0.3s ease`,
        }}
        onClick={() => setModalOpen(true)}
        data-ocid={`sweet-card-${sweet.id}`}
        aria-label={`${sweet.nameHindi} - ₹${sweet.price}/${sweet.unit} - विवरण देखें`}
      >
        {/* Image */}
        <div className="relative overflow-hidden h-52">
          <img
            src={sweet.image}
            alt={sweet.nameHindi}
            className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
            loading="lazy"
          />
          {/* Shimmer overlay on hover */}
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-smooth"
            style={{
              background:
                "linear-gradient(135deg, rgba(255,215,0,0.08) 0%, transparent 60%)",
            }}
          />
          {sweet.badge && badge && (
            <span
              className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs font-body font-bold shadow-sm"
              style={{ background: badge.bg, color: badge.text }}
            >
              {sweet.badge}
            </span>
          )}
          {sweet.isPopular && (
            <div
              className="absolute top-3 right-3 flex items-center gap-1 rounded-full px-2 py-1"
              style={{ background: "rgba(0,0,0,0.65)" }}
            >
              <Star
                className="w-3 h-3 fill-current"
                style={{ color: "#FFD700" }}
              />
              <span className="text-xs font-bold" style={{ color: "#FFD700" }}>
                4.9
              </span>
            </div>
          )}
          {/* Click hint overlay */}
          <div
            className="absolute bottom-0 left-0 right-0 py-2 text-center text-xs font-body font-semibold opacity-0 group-hover:opacity-100 transition-smooth"
            style={{
              background: "rgba(0,0,0,0.55)",
              color: "rgba(255,253,245,0.9)",
            }}
          >
            👁 विवरण देखें
          </div>
        </div>

        {/* Content */}
        <div className="p-4">
          <h3 className="font-display font-bold text-lg text-foreground leading-tight mb-1 truncate">
            {sweet.nameHindi}
          </h3>
          <p className="text-xs text-muted-foreground font-body mb-2 italic">
            {sweet.nameEnglish}
          </p>
          <p className="text-sm text-muted-foreground font-body line-clamp-2 mb-4 min-h-[2.5rem]">
            {sweet.description}
          </p>

          <div className="flex items-center justify-between">
            <div>
              <span className="font-display font-bold text-xl text-primary">
                ₹{sweet.price}
              </span>
              <span className="text-sm text-muted-foreground font-body">
                /{sweet.unit}
              </span>
            </div>
            <span
              className="flex items-center gap-2 px-4 py-2 gradient-warm rounded-full font-body font-bold text-sm shadow-sm"
              style={{ color: "#fff" }}
              aria-hidden="true"
            >
              <ShoppingBag className="w-4 h-4" />
              ऑर्डर करें
            </span>
          </div>
        </div>
      </button>

      {modalOpen && (
        <ProductModal sweet={sweet} onClose={() => setModalOpen(false)} />
      )}
    </>
  );
}
