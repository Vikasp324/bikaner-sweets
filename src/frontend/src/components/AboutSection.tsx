import { Award, Clock, Star, Truck } from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const features = [
  { icon: Award, title: "शुद्ध देसी घी", desc: "100% शुद्ध सामग्री" },
  { icon: Star, title: "पुरस्कार विजेता", desc: "राज्य स्तरीय सम्मान" },
  { icon: Truck, title: "होम डिलीवरी", desc: "बिकानेर में मुफ्त" },
  { icon: Clock, title: "ताज़ी मिठाई", desc: "रोज़ सुबह बनाई" },
];

const galleryImages = [
  { src: "/assets/generated/sweet-laddu.dim_400x400.jpg", alt: "लड्डू", cls: "" },
  {
    src: "/assets/generated/sweet-kaju-katli.dim_400x400.jpg",
    alt: "काजू कतली",
    cls: "mt-8",
  },
  {
    src: "/assets/generated/sweet-jalebi.dim_400x400.jpg",
    alt: "जलेबी",
    cls: "-mt-8",
  },
  {
    src: "/assets/generated/sweet-barfi.dim_400x400.jpg",
    alt: "बर्फी",
    cls: "",
  },
];

export function AboutSection() {
  const { ref: textRef, isVisible: textVisible } = useScrollAnimation();
  const { ref: imgRef, isVisible: imgVisible } = useScrollAnimation({
    threshold: 0.1,
  });

  return (
    <section
      id="about"
      className="py-16 md:py-24 bg-muted/40 relative overflow-hidden"
      data-ocid="about-section"
    >
      {/* Decorative pattern background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 50%, rgba(255,153,51,0.06) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255,215,0,0.06) 0%, transparent 40%)",
        }}
      />

      <div className="container mx-auto px-4 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <div
            ref={textRef}
            style={{
              opacity: textVisible ? 1 : 0,
              transform: textVisible ? "translateX(0)" : "translateX(-32px)",
              transition: "opacity 0.7s ease, transform 0.7s ease",
            }}
          >
            <div
              className="inline-block px-4 py-1 rounded-full font-body font-semibold text-sm mb-3"
              style={{
                background: "rgba(255,153,51,0.12)",
                color: "oklch(var(--primary))",
              }}
            >
              🏠 हमारे बारे में
            </div>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-6">
              40 साल से मिठास
              <br />
              का सफर
            </h2>
            <p className="font-body text-muted-foreground leading-relaxed mb-4">
              1985 में हमारे संस्थापक श्री रामलाल अग्रवाल ने बिकानेर के गांधी चौक में एक छोटी
              सी दुकान खोली। उनका सपना था — शुद्ध और स्वादिष्ट मिठाइयाँ हर घर तक
              पहुँचाना।
            </p>
            <p className="font-body text-muted-foreground leading-relaxed mb-6">
              आज 40 साल बाद, हम राजस्थान की सबसे भरोसेमंद मिठाई की दुकानों में से एक हैं।
              हमारी मिठाइयाँ पूरे देश में मशहूर हैं और हमारे ग्राहक हमारे परिवार का हिस्सा हैं।
            </p>

            {/* Feature grid */}
            <div className="grid grid-cols-2 gap-4">
              {features.map(({ icon: Icon, title, desc }, i) => (
                <div
                  key={title}
                  className="flex items-start gap-3 p-4 bg-card rounded-xl border border-border transition-smooth hover:shadow-md hover:-translate-y-0.5"
                  style={{
                    opacity: textVisible ? 1 : 0,
                    transform: textVisible
                      ? "translateY(0)"
                      : "translateY(16px)",
                    transition: `opacity 0.5s ease ${0.2 + i * 0.1}s, transform 0.5s ease ${0.2 + i * 0.1}s, box-shadow 0.3s ease`,
                  }}
                >
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ background: "rgba(255,153,51,0.12)" }}
                  >
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-body font-bold text-sm text-foreground">
                      {title}
                    </div>
                    <div className="font-body text-xs text-muted-foreground">
                      {desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Decorative border accent */}
            <div
              className="mt-8 p-4 rounded-xl border-l-4 font-body text-sm text-muted-foreground italic"
              style={{
                borderLeftColor: "oklch(var(--primary))",
                background: "rgba(255,153,51,0.06)",
              }}
            >
              "हमारी हर मिठाई में है दादी माँ का प्यार और पारंपरिक स्वाद का जादू।"
            </div>
          </div>

          {/* Image collage */}
          <div
            ref={imgRef}
            className="relative"
            style={{
              opacity: imgVisible ? 1 : 0,
              transform: imgVisible ? "translateX(0)" : "translateX(32px)",
              transition: "opacity 0.7s ease 0.15s, transform 0.7s ease 0.15s",
            }}
          >
            <div className="grid grid-cols-2 gap-4">
              {galleryImages.map(({ src, alt, cls }) => (
                <img
                  key={alt}
                  src={src}
                  alt={alt}
                  className={`rounded-2xl w-full h-44 object-cover shadow-md hover:scale-105 transition-smooth ${cls}`}
                  loading="lazy"
                />
              ))}
            </div>
            {/* Decorative overlay circle */}
            <div
              className="absolute -bottom-4 -right-4 w-28 h-28 rounded-full float-gentle pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle, rgba(255,153,51,0.25), transparent 70%)",
              }}
            />
            <div
              className="absolute -top-6 -left-6 w-20 h-20 rounded-full float-gentle pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle, rgba(255,215,0,0.2), transparent 70%)",
                animationDelay: "1.2s",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
