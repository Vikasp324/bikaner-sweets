import type { NavItem, Offer, Sweet } from "../types";

export const NAV_ITEMS: NavItem[] = [
  { label: "होम", href: "#home" },
  { label: "मिठाइयाँ", href: "#products" },
  { label: "हमारे बारे में", href: "#about" },
  { label: "विशेष ऑफर", href: "#offers" },
  { label: "संपर्क", href: "#contact" },
];

export const SWEETS: Sweet[] = [
  {
    id: "motichoor-laddu",
    nameHindi: "मोतीचूर लड्डू",
    nameEnglish: "Motichoor Laddu",
    description:
      "बेसन के बारीक बूंदी से बना मीठा और मुलायम लड्डू, केसर और इलायची के सुगंध से भरपूर।",
    price: 520,
    unit: "किलो",
    image: "/assets/generated/sweet-laddu.dim_400x400.jpg",
    badge: "सबसे लोकप्रिय",
    badgeColor: "saffron",
    isPopular: true,
  },
  {
    id: "kaju-katli",
    nameHindi: "काजू कतली",
    nameEnglish: "Kaju Katli",
    description:
      "शुद्ध काजू से बनी हीरे के आकार की मिठाई, चाँदी वर्क से सजी। त्योहारों की खास पसंद।",
    price: 960,
    unit: "किलो",
    image: "/assets/generated/sweet-kaju-katli.dim_400x400.jpg",
    badge: "प्रीमियम",
    badgeColor: "gold",
    isPopular: true,
  },
  {
    id: "jalebi",
    nameHindi: "ताज़ी जलेबी",
    nameEnglish: "Fresh Jalebi",
    description:
      "कुरकुरी और रसीली जलेबी, गरम-गरम परोसी जाती है। चाशनी में डूबी, बेहद स्वादिष्ट।",
    price: 280,
    unit: "किलो",
    image: "/assets/generated/sweet-jalebi.dim_400x400.jpg",
    badge: "ताज़ी",
    badgeColor: "red",
  },
  {
    id: "gulab-jamun",
    nameHindi: "गुलाब जामुन",
    nameEnglish: "Gulab Jamun",
    description: "मावे से बने मुलायम गुलाब जामुन, गुलाब जल और केसर की चाशनी में भीगे हुए।",
    price: 380,
    unit: "किलो",
    image: "/assets/generated/sweet-gulab-jamun.dim_400x400.jpg",
    isPopular: true,
  },
  {
    id: "rasgulla",
    nameHindi: "रसगुल्ला",
    nameEnglish: "Rasgulla",
    description:
      "छेने के नरम और स्पंजी गोले, हल्की मीठी चाशनी में डूबे। बंगाल की मशहूर मिठाई।",
    price: 320,
    unit: "किलो",
    image: "/assets/generated/sweet-rasgulla.dim_400x400.jpg",
  },
  {
    id: "barfi",
    nameHindi: "मलाई बर्फी",
    nameEnglish: "Malai Barfi",
    description:
      "शुद्ध मलाई और मावे से बनी बर्फी, पिस्ता और गुलाब की पंखुड़ियों से सजी। मुँह में घुल जाए।",
    price: 480,
    unit: "किलो",
    image: "/assets/generated/sweet-barfi.dim_400x400.jpg",
    badge: "नया",
    badgeColor: "green",
  },
];

export const OFFERS: Offer[] = [
  {
    id: "festival",
    title: "🎉 त्योहार विशेष",
    description:
      "दीपावली, होली और ईद पर 500 रुपये से अधिक के ऑर्डर पर 15% की छूट पाएँ।",
    discount: "15% छूट",
    validTill: "31 दिसंबर 2026",
    icon: "🪔",
  },
  {
    id: "bulk",
    title: "📦 थोक ऑर्डर",
    description: "5 किलो या अधिक के ऑर्डर पर मुफ्त होम डिलीवरी और 10% की विशेष छूट।",
    discount: "10% + मुफ्त डिलीवरी",
    validTill: "हमेशा उपलब्ध",
    icon: "🎁",
  },
  {
    id: "morning",
    title: "🌅 सुबह की ताज़गी",
    description: "सुबह 8 से 10 बजे के बीच ऑर्डर करें और गरमा-गरम ताज़ी मिठाइयाँ पाएँ।",
    discount: "ताज़ी गारंटी",
    validTill: "हर दिन",
    icon: "☀️",
  },
];
