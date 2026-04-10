import { OFFERS } from "../data/sweets";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

export function OffersSection() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation({
    threshold: 0.1,
  });

  return (
    <section
      id="offers"
      className="py-16 md:py-24 relative overflow-hidden"
      data-ocid="offers-section"
      style={{
        background:
          "linear-gradient(135deg, oklch(0.97 0.04 40) 0%, oklch(0.97 0.03 55) 50%, oklch(0.97 0.03 20) 100%)",
      }}
    >
      {/* Decorative background blobs */}
      <div
        className="absolute top-0 left-0 w-72 h-72 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(255,153,51,0.1) 0%, transparent 70%)",
          transform: "translate(-30%, -30%)",
        }}
      />
      <div
        className="absolute bottom-0 right-0 w-80 h-80 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(255,215,0,0.1) 0%, transparent 70%)",
          transform: "translate(30%, 30%)",
        }}
      />

      <div className="container mx-auto px-4 relative">
        {/* Heading */}
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
              background: "rgba(227,27,35,0.12)",
              color: "oklch(var(--accent))",
            }}
          >
            🎁 विशेष ऑफर
          </div>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-3">
            आज के खास ऑफर
          </h2>
          <p className="text-muted-foreground font-body max-w-xl mx-auto">
            हमारे विशेष ऑफर का लाभ उठाएँ और अपनी मनपसंद मिठाइयाँ सस्ती दर पर पाएँ।
          </p>
        </div>

        {/* Offer cards */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
        >
          {OFFERS.map((offer, i) => (
            <div
              key={offer.id}
              className="relative bg-card border border-border rounded-2xl p-6 shadow-md hover:shadow-xl transition-smooth hover:-translate-y-2 overflow-hidden"
              style={{
                opacity: cardsVisible ? 1 : 0,
                transform: cardsVisible ? "translateY(0)" : "translateY(32px)",
                transition: `opacity 0.5s ease ${i * 0.15}s, transform 0.5s ease ${i * 0.15}s, box-shadow 0.3s ease`,
                borderTop: "3px solid oklch(var(--primary))",
              }}
              data-ocid={`offer-card-${offer.id}`}
            >
              {/* Decorative circle */}
              <div
                className="absolute -top-8 -right-8 w-28 h-28 rounded-full pointer-events-none"
                style={{
                  background:
                    "radial-gradient(circle, rgba(255,153,51,0.15) 0%, transparent 70%)",
                }}
              />

              <div className="text-5xl mb-4">{offer.icon}</div>
              <h3 className="font-display font-bold text-lg text-foreground mb-2">
                {offer.title}
              </h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4">
                {offer.description}
              </p>

              <div className="flex items-center justify-between pt-4 border-t border-border">
                <div>
                  <div className="font-display font-bold text-primary text-xl">
                    {offer.discount}
                  </div>
                  <div className="text-xs text-muted-foreground font-body">
                    वैध: {offer.validTill}
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() =>
                    document
                      .querySelector("#contact")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="px-4 py-2 gradient-warm rounded-full font-body font-bold text-sm transition-smooth hover:opacity-90 hover:scale-105 shadow-sm"
                  style={{ color: "#fff" }}
                  data-ocid={`offer-claim-${offer.id}`}
                >
                  अभी पाएँ
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
