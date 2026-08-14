// Central site configuration — edit here to update brand-wide values.
export const siteConfig = {
  name: "Dr. Nature Holistic Panchkarma",
  tagline: "Authentic Ayurveda • Panchkarma • Wellness",
  city: "Jaipur",
  description:
    "Dr. Nature Holistic Panchkarma is an Ayurvedic wellness centre offering authentic Panchkarma therapies, detox, rejuvenation and natural healing under expert supervision.",
  url: "https://drnaturepanchkarma.com",

  // Verified real values.
  email: "info@drnaturewellness.com",
  phone: "+91 6375594364",
  whatsapp: "916375594364",
  address: "Reg. H.O.: 46, Katewa Nagar, Gujar Ki Thadi, New Sanganer Road, Jaipur - 302019, Rajasthan, India",

  hours: {
    weekday: "Monday – Saturday: 10:00 AM – 06:00 PM",
    sunday: "Sunday: Closed",
  },

  offer: "🌿 SALE — 10% Discount on All Packages this Month!",

  social: {
    facebook: "https://www.facebook.com/share/1GAmcJDhxi/",
    instagram: "https://www.instagram.com/officialdnwpanchkarma?igsh=cGpuZW1zb2E2Mm9z",
    youtube: "https://youtube.com/@officialdnwpanchkarma?si=9to84WSAE_2k2Kup",
  },
} as const;

export const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/treatments", label: "Treatments" },
  { to: "/therapies", label: "Therapies" },
  { to: "/wellness-packages", label: "Wellness Packages" },
  { to: "/consultation", label: "Consultation" },
  { to: "/testimonials", label: "Testimonials" },
  { to: "/location", label: "Location" },
  { to: "/contact", label: "Contact" },
] as const;
