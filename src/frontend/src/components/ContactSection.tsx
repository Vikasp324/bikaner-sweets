import { Clock, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

interface FormState {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const contactInfo = [
  {
    icon: MapPin,
    label: "पता",
    value:
      "Gol Chowk, Rohnipuram\nDDU Nagar, Amanaka, Raipur, Chhattisgarh 492013",
  },
  {
    icon: Phone,
    label: "फोन",
    value: "91093 00209",
  },
  {
    icon: Clock,
    label: "समय",
    value: "सोम–शनि: सुबह 8 – रात 9\nरविवार: सुबह 9 – शाम 6",
  },
];

function validate(form: FormState): FormErrors {
  const errors: FormErrors = {};
  if (!form.name.trim()) errors.name = "नाम ज़रूरी है";
  if (!form.email.trim()) {
    errors.email = "ईमेल ज़रूरी है";
  } else if (!/\S+@\S+\.\S+/.test(form.email)) {
    errors.email = "सही ईमेल पता दर्ज करें";
  }
  if (!form.message.trim()) errors.message = "संदेश ज़रूरी है";
  return errors;
}

export function ContactSection() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [sent, setSent] = useState(false);

  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation({
    threshold: 0.05,
  });

  const handleBlur = (field: keyof FormState) => {
    setTouched((t) => ({ ...t, [field]: true }));
    setErrors(validate(form));
  };

  const handleChange = (field: keyof FormState, value: string) => {
    const updated = { ...form, [field]: value };
    setForm(updated);
    if (touched[field]) setErrors(validate(updated));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const allTouched = { name: true, email: true, message: true };
    setTouched(allTouched);
    const errs = validate(form);
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      setSent(true);
    }
  };

  return (
    <section
      id="contact"
      className="py-16 md:py-24 bg-muted/40"
      data-ocid="contact-section"
    >
      <div className="container mx-auto px-4">
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
              background: "rgba(255,153,51,0.12)",
              color: "oklch(var(--primary))",
            }}
          >
            📞 संपर्क करें
          </div>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-3">
            हमसे बात करें
          </h2>
          <p className="text-muted-foreground font-body max-w-xl mx-auto">
            ऑर्डर करने के लिए या किसी भी जानकारी के लिए हमसे संपर्क करें। हम खुशी से मदद
            करेंगे।
          </p>
        </div>

        <div
          ref={contentRef}
          className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-5xl mx-auto"
          style={{
            opacity: contentVisible ? 1 : 0,
            transform: contentVisible ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.7s ease 0.1s, transform 0.7s ease 0.1s",
          }}
        >
          {/* Info column */}
          <div>
            <div className="bg-card rounded-2xl border border-border p-6 shadow-md mb-6">
              <h3 className="font-display font-bold text-xl text-foreground mb-4">
                दुकान की जानकारी
              </h3>
              <div className="space-y-4">
                {contactInfo.map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex items-start gap-3">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ background: "rgba(255,153,51,0.12)" }}
                    >
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground font-body">
                        {label}
                      </div>
                      <div className="font-body font-semibold text-foreground whitespace-pre-line text-sm">
                        {value}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Map link */}
            <div className="bg-card rounded-2xl border border-border overflow-hidden h-40 flex items-center justify-center shadow-md">
              <div className="text-center text-muted-foreground">
                <MapPin className="w-10 h-10 mx-auto mb-2 text-primary" />
                <p className="font-body text-sm text-foreground font-semibold">
                  Gol Chowk, Rohnipuram, DDU Nagar
                </p>
                <a
                  href="https://maps.google.com/?q=Gol+Chowk+Rohnipuram+Raipur+Chhattisgarh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-primary underline hover:opacity-80 transition-smooth font-body"
                  data-ocid="map-link"
                >
                  Google Maps पर देखें
                </a>
              </div>
            </div>
          </div>

          {/* Form column */}
          <div className="bg-card rounded-2xl border border-border p-6 shadow-md">
            <h3 className="font-display font-bold text-xl text-foreground mb-6">
              ऑर्डर / संदेश भेजें
            </h3>

            {sent ? (
              <div className="text-center py-10" data-ocid="contact-success">
                <div className="text-6xl mb-4">🎉</div>
                <h3 className="font-display font-bold text-2xl text-primary mb-2">
                  धन्यवाद!
                </h3>
                <p className="text-muted-foreground font-body">
                  आपका संदेश मिल गया। हम जल्द ही संपर्क करेंगे।
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSent(false);
                    setForm({ name: "", email: "", message: "" });
                    setTouched({});
                    setErrors({});
                  }}
                  className="mt-6 px-6 py-2 gradient-warm rounded-full font-body font-bold text-sm transition-smooth hover:opacity-90"
                  style={{ color: "#fff" }}
                  data-ocid="send-another-btn"
                >
                  और संदेश भेजें
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="space-y-5"
                data-ocid="contact-form"
                noValidate
              >
                {/* Name */}
                <div>
                  <label
                    htmlFor="contact-name-input"
                    className="block text-sm font-body font-semibold text-foreground mb-1"
                  >
                    आपका नाम <span className="text-accent">*</span>
                  </label>
                  <input
                    id="contact-name-input"
                    type="text"
                    value={form.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    onBlur={() => handleBlur("name")}
                    placeholder="जैसे: रामेश्वर शर्मा"
                    className="w-full px-4 py-3 bg-background border rounded-xl font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 transition-smooth"
                    style={{
                      borderColor:
                        errors.name && touched.name
                          ? "oklch(var(--accent))"
                          : "oklch(var(--input))",
                    }}
                    data-ocid="contact-name"
                    aria-invalid={!!(errors.name && touched.name)}
                    aria-describedby={
                      errors.name && touched.name ? "name-error" : undefined
                    }
                  />
                  {errors.name && touched.name && (
                    <p
                      id="name-error"
                      className="text-xs mt-1 font-body"
                      style={{ color: "oklch(var(--accent))" }}
                    >
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="contact-email-input"
                    className="block text-sm font-body font-semibold text-foreground mb-1"
                  >
                    ईमेल पता <span className="text-accent">*</span>
                  </label>
                  <input
                    id="contact-email-input"
                    type="email"
                    value={form.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    onBlur={() => handleBlur("email")}
                    placeholder="example@gmail.com"
                    className="w-full px-4 py-3 bg-background border rounded-xl font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 transition-smooth"
                    style={{
                      borderColor:
                        errors.email && touched.email
                          ? "oklch(var(--accent))"
                          : "oklch(var(--input))",
                    }}
                    data-ocid="contact-email"
                    aria-invalid={!!(errors.email && touched.email)}
                    aria-describedby={
                      errors.email && touched.email ? "email-error" : undefined
                    }
                  />
                  {errors.email && touched.email && (
                    <p
                      id="email-error"
                      className="text-xs mt-1 font-body"
                      style={{ color: "oklch(var(--accent))" }}
                    >
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="contact-message-input"
                    className="block text-sm font-body font-semibold text-foreground mb-1"
                  >
                    आपका संदेश <span className="text-accent">*</span>
                  </label>
                  <textarea
                    id="contact-message-input"
                    rows={4}
                    value={form.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                    onBlur={() => handleBlur("message")}
                    placeholder="कौन सी मिठाई चाहिए, कितनी मात्रा, कब चाहिए..."
                    className="w-full px-4 py-3 bg-background border rounded-xl font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 transition-smooth resize-none"
                    style={{
                      borderColor:
                        errors.message && touched.message
                          ? "oklch(var(--accent))"
                          : "oklch(var(--input))",
                    }}
                    data-ocid="contact-message"
                    aria-invalid={!!(errors.message && touched.message)}
                    aria-describedby={
                      errors.message && touched.message
                        ? "msg-error"
                        : undefined
                    }
                  />
                  {errors.message && touched.message && (
                    <p
                      id="msg-error"
                      className="text-xs mt-1 font-body"
                      style={{ color: "oklch(var(--accent))" }}
                    >
                      {errors.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 gradient-warm rounded-full font-body font-bold text-base transition-smooth hover:opacity-90 hover:scale-105 shadow-md"
                  style={{ color: "#fff" }}
                  data-ocid="contact-submit"
                >
                  <Send className="w-5 h-5" />
                  संदेश भेजें
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
