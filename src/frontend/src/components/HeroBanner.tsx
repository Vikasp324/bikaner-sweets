import { ChevronDown, ShoppingBag } from "lucide-react";

export function HeroBanner() {
  const scrollToProducts = () =>
    document.querySelector("#products")?.scrollIntoView({ behavior: "smooth" });

  const scrollToContact = () =>
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="home"
      className="relative overflow-hidden min-h-[90vh] flex items-center"
      data-ocid="hero-section"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/assets/generated/hero-sweets-banner.dim_1400x600.jpg"
          alt="बिकानेर स्वीट्स"
          className="w-full h-full object-cover"
          fetchPriority="high"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-foreground/60" />
        {/* Gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(105deg, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.55) 55%, rgba(0,0,0,0.15) 100%)",
          }}
        />
        {/* Bottom fade */}
        <div
          className="absolute bottom-0 left-0 right-0 h-24"
          style={{
            background:
              "linear-gradient(to top, oklch(var(--background)), transparent)",
          }}
        />
      </div>

      <div className="relative container mx-auto px-4 py-16 md:py-28">
        <div className="max-w-2xl">
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 fade-in-up"
            style={{
              background: "rgba(255,153,51,0.25)",
              border: "1px solid rgba(255,153,51,0.5)",
              backdropFilter: "blur(6px)",
            }}
          >
            <span className="text-lg">🏆</span>
            <span
              className="text-sm font-body font-semibold"
              style={{ color: "#FFD700" }}
            >
              1985 से बिकानेर की नं॰ 1 मिठाई
            </span>
          </div>

          {/* Main heading */}
          <h1
            className="font-display font-bold text-4xl md:text-5xl lg:text-6xl leading-tight mb-4 fade-in-up"
            style={{ color: "#FFFDF5", animationDelay: "0.1s" }}
          >
            हर खुशी में <span style={{ color: "#FFD700" }}>मिठास –</span>
            <br />
            बिकानेर स्वीट्स
            <br />
            के साथ
          </h1>

          {/* Subtitle */}
          <p
            className="font-body text-base md:text-lg mb-8 leading-relaxed fade-in-up"
            style={{ color: "rgba(255,253,245,0.82)", animationDelay: "0.2s" }}
          >
            बिकानेर स्वीट्स में आपका स्वागत है – स्वाद और परंपरा का अनोखा संगम!
            <br className="hidden md:block" />
            शुद्ध देसी घी और ताज़े मेवों से बनी मिठाइयाँ। हर मौके को मीठा बनाएँ।
          </p>

          {/* CTA buttons */}
          <div
            className="flex flex-col sm:flex-row gap-4 fade-in-up"
            style={{ animationDelay: "0.3s" }}
          >
            <button
              type="button"
              onClick={scrollToContact}
              className="flex items-center justify-center gap-2 px-8 py-4 gradient-warm rounded-full font-body font-bold text-lg transition-smooth hover:opacity-90 hover:scale-105 shadow-xl"
              style={{ color: "#fff" }}
              data-ocid="hero-order-btn"
            >
              <ShoppingBag className="w-5 h-5" />
              अभी ऑर्डर करें
            </button>
            <button
              type="button"
              onClick={scrollToProducts}
              className="flex items-center justify-center gap-2 px-8 py-4 rounded-full font-body font-bold text-lg transition-smooth hover:bg-white/10"
              style={{
                border: "2px solid rgba(255,253,245,0.55)",
                color: "#FFFDF5",
              }}
              data-ocid="hero-explore-btn"
            >
              मिठाइयाँ देखें
              <ChevronDown className="w-5 h-5" />
            </button>
          </div>

          {/* Stats */}
          <div
            className="flex gap-8 mt-10 fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            {[
              { num: "40+", label: "वर्षों का अनुभव" },
              { num: "50+", label: "मिठाइयाँ" },
              { num: "10,000+", label: "खुश ग्राहक" },
            ].map(({ num, label }) => (
              <div key={label} className="text-center">
                <div
                  className="font-display font-bold text-2xl md:text-3xl"
                  style={{ color: "#FFD700" }}
                >
                  {num}
                </div>
                <div
                  className="text-xs font-body"
                  style={{ color: "rgba(255,253,245,0.7)" }}
                >
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative floating orbs */}
      <div
        className="absolute bottom-16 right-8 w-32 h-32 rounded-full float-gentle pointer-events-none hidden md:block"
        style={{
          background:
            "radial-gradient(circle, rgba(255,153,51,0.18), transparent 70%)",
        }}
      />
      <div
        className="absolute top-20 right-1/4 w-20 h-20 rounded-full float-gentle pointer-events-none hidden lg:block"
        style={{
          background:
            "radial-gradient(circle, rgba(255,215,0,0.14), transparent 70%)",
          animationDelay: "1.5s",
        }}
      />
    </section>
  );
}
