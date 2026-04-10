import { ShoppingBag } from "lucide-react";

export function FloatingOrderButton() {
  const scrollToContact = () =>
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });

  return (
    <button
      type="button"
      onClick={scrollToContact}
      className="fixed bottom-6 right-6 z-40 flex items-center gap-2 px-5 py-3 gradient-warm rounded-full font-body font-bold text-sm shadow-xl transition-smooth hover:opacity-95 hover:scale-105 hover:-translate-y-0.5 float-gentle"
      style={{ color: "#fff" }}
      data-ocid="floating-order-btn"
      aria-label="अभी ऑर्डर करें"
    >
      <ShoppingBag className="w-5 h-5" />
      <span>अभी ऑर्डर करें</span>
    </button>
  );
}
