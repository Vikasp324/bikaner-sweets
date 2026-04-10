import { SWEETS } from "../data/sweets";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { ProductCard } from "./ProductCard";

export function ProductsSection() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation({
    threshold: 0.05,
  });

  return (
    <section
      id="products"
      className="py-16 md:py-24 bg-background"
      data-ocid="products-section"
    >
      <div className="container mx-auto px-4">
        {/* Section heading */}
        <div
          ref={titleRef}
          className="text-center mb-12"
          style={{
            opacity: titleVisible ? 1 : 0,
            transform: titleVisible ? "translateY(0)" : "translateY(28px)",
            transition: "opacity 0.6s ease, transform 0.6s ease",
          }}
        >
          <div
            className="inline-block px-4 py-1 rounded-full font-body font-semibold text-sm mb-3"
            style={{
              background: "rgba(255,153,51,0.12)",
              color: "oklch(var(--primary))",
            }}
          >
            🍬 हमारे उत्पाद
          </div>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-3">
            हमारी विशेष मिठाइयाँ
          </h2>
          <p className="text-muted-foreground font-body max-w-xl mx-auto">
            शुद्ध देसी घी, ताज़े मेवे और पारंपरिक विधि से तैयार — हर मिठाई एक अनुभव है। किसी
            भी कार्ड पर क्लिक करें पूरी जानकारी देखने के लिए।
          </p>
        </div>

        {/* Products grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {SWEETS.map((sweet, i) => (
            <ProductCard
              key={sweet.id}
              sweet={sweet}
              index={i}
              isVisible={gridVisible}
            />
          ))}
        </div>

        <div
          className="text-center mt-10"
          style={{
            opacity: gridVisible ? 1 : 0,
            transition: "opacity 0.6s ease 0.6s",
          }}
        >
          <p className="text-sm text-muted-foreground font-body">
            * सभी मिठाइयाँ ताज़ी बनाई जाती हैं। कीमतें मौसम के अनुसार बदल सकती हैं।
          </p>
        </div>
      </div>
    </section>
  );
}
