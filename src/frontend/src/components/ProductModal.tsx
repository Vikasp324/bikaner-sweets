import { ShoppingBag, Star, X } from "lucide-react";
import { useEffect, useRef } from "react";
import type { Sweet } from "../types";

interface ProductModalProps {
  sweet: Sweet;
  onClose: () => void;
}

export function ProductModal({ sweet, onClose }: ProductModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    dialog.showModal();
    document.body.style.overflow = "hidden";

    const handleClose = () => onClose();
    dialog.addEventListener("close", handleClose);

    return () => {
      dialog.removeEventListener("close", handleClose);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  const badgeStyles: Record<string, { bg: string; text: string }> = {
    saffron: { bg: "rgba(255,153,51,0.9)", text: "#fff" },
    gold: { bg: "rgba(255,215,0,0.9)", text: "#333" },
    red: { bg: "rgba(227,27,35,0.9)", text: "#fff" },
    green: { bg: "rgba(34,197,94,0.9)", text: "#fff" },
  };
  const badge = sweet.badgeColor ? badgeStyles[sweet.badgeColor] : null;

  const handleBackdropClick = (e: React.MouseEvent<HTMLDialogElement>) => {
    const rect = dialogRef.current?.getBoundingClientRect();
    if (
      rect &&
      (e.clientX < rect.left ||
        e.clientX > rect.right ||
        e.clientY < rect.top ||
        e.clientY > rect.bottom)
    ) {
      onClose();
    }
  };

  return (
    <dialog
      ref={dialogRef}
      className="p-0 rounded-3xl overflow-hidden shadow-2xl max-w-lg w-full m-auto backdrop:bg-black/65 backdrop:backdrop-blur-sm fade-in-up"
      style={{ border: "1px solid rgba(255,153,51,0.25)" }}
      data-ocid="product-modal-content"
      onClick={handleBackdropClick}
      onKeyDown={(e) => {
        if (e.key === "Escape") onClose();
      }}
    >
      {/* Image */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={sweet.image}
          alt={sweet.nameHindi}
          className="w-full h-full object-cover"
        />
        <div
          className="absolute bottom-0 left-0 right-0 h-20"
          style={{
            background: "linear-gradient(to top, rgba(0,0,0,0.5), transparent)",
          }}
        />
        {sweet.badge && badge && (
          <span
            className="absolute top-3 left-3 px-3 py-1 rounded-full text-sm font-body font-bold"
            style={{ background: badge.bg, color: badge.text }}
          >
            {sweet.badge}
          </span>
        )}
        {sweet.isPopular && (
          <div
            className="absolute top-3 right-12 flex items-center gap-1 rounded-full px-2 py-1"
            style={{ background: "rgba(0,0,0,0.7)" }}
          >
            <Star
              className="w-3.5 h-3.5 fill-current"
              style={{ color: "#FFD700" }}
            />
            <span className="text-xs font-bold" style={{ color: "#FFD700" }}>
              4.9
            </span>
          </div>
        )}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-3 right-3 w-9 h-9 rounded-full flex items-center justify-center transition-smooth hover:scale-110"
          style={{ background: "rgba(0,0,0,0.55)", color: "#fff" }}
          aria-label="बंद करें"
          data-ocid="modal-close-btn"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Content */}
      <div className="p-6 bg-card">
        <h2 className="font-display font-bold text-2xl text-foreground mb-1">
          {sweet.nameHindi}
        </h2>
        <p className="text-sm text-muted-foreground font-body italic mb-3">
          {sweet.nameEnglish}
        </p>
        <p className="font-body text-muted-foreground leading-relaxed mb-6">
          {sweet.description}
        </p>

        <div className="flex items-center justify-between pt-4 border-t border-border">
          <div>
            <span className="font-display font-bold text-3xl text-primary">
              ₹{sweet.price}
            </span>
            <span className="text-sm text-muted-foreground font-body ml-1">
              /{sweet.unit}
            </span>
          </div>
          <button
            type="button"
            onClick={() => {
              onClose();
              document
                .querySelector("#contact")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="flex items-center gap-2 px-6 py-3 gradient-warm rounded-full font-body font-bold text-base transition-smooth hover:opacity-90 hover:scale-105 shadow-md"
            style={{ color: "#fff" }}
            data-ocid="modal-order-btn"
          >
            <ShoppingBag className="w-5 h-5" />
            ऑर्डर करें
          </button>
        </div>
      </div>
    </dialog>
  );
}
