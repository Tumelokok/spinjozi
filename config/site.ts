export const siteConfig = {
  name: "SpinJozi",
  tagline: "360° of fun. One unforgettable event.",
  description: "Affordable 360° photo booth hire in Johannesburg and surrounding Gauteng areas. Perfect for weddings, birthdays, graduations, corporate events, parties and celebrations.",
  phone: "081 694 7953",
  whatsapp: "27816947953", // South Africa international format, digits only.
  email: "spinjozi@yahoo.com",
  serviceAreas: ["Johannesburg", "Midrand", "Sandton", "Randburg", "Fourways", "Roodepoort", "Soweto", "Kempton Park", "Bedfordview", "East Rand"],
  social: {
    instagram: "https://www.instagram.com/spinjozi/",
    tiktok: "https://www.tiktok.com/@spinjozi?_r=1&_t=ZS-9B03CNiaYke",
    facebook: "",
  },
  heroValues: ["Professional setup", "Unlimited videos during your booking", "Instant sharing", "Johannesburg & Gauteng events"],
  inclusions: [
    { title: "360° booth", confirmed: true },
    { title: "Professional setup", confirmed: true },
    { title: "On-site operator", confirmed: false },
    { title: "Unlimited videos during booking", confirmed: true },
    { title: "Custom video overlay", confirmed: false },
    { title: "Instant sharing", confirmed: true },
    { title: "LED lighting", confirmed: false },
    { title: "Setup & pack-down", confirmed: true },
  ],
  packages: [
    { hours: "2 HOURS", price: "R1,499", description: "Perfect for birthdays, small parties and celebrations.", featured: false },
    { hours: "3 HOURS", price: "R1,999", description: "Perfect for weddings, birthdays, graduations and private events.", featured: true },
    { hours: "4 HOURS", price: "R2,499", description: "Perfect for larger parties and corporate events.", featured: false },
    { hours: "6 HOURS", price: "R3,499", description: "Perfect for weddings, corporate functions and major celebrations.", featured: false },
  ],
} as const;

// Keep all media paths, alt text, and display dimensions here. Components show a
// branded fallback card if an uploaded asset is unavailable at runtime.
export const media = {
  openGraph: {
    src: "/images/og-image.jpg",
    alt: "SpinJozi 360 photo booth hire in Johannesburg",
    width: 1733,
    height: 907,
  },
  hero: {
    image: {
      src: "/images/hero-booth.jpg",
      alt: "SpinJozi 360 photo booth ready for guests at a Johannesburg event",
      width: 1448,
      height: 1086,
    },
    video: "/videos/hero-loop.mp4",
  },
  boothCloseup: {
    src: "/images/booth-closeup.jpg",
    alt: "Close-up of the SpinJozi 360 photo booth platform and lighting",
    width: 1254,
    height: 1254,
  },
  eventImages: {
    Weddings: { src: "/images/event-wedding.jpg", alt: "Illustrative wedding celebration with a 360 photo booth experience", width: 1448, height: 1086 },
    Birthdays: { src: "/images/event-birthday.jpg", alt: "Illustrative birthday party guests enjoying a 360 photo booth", width: 1086, height: 1448 },
    "Matric Balls": { src: "/images/event-matric-ball.svg", alt: "Illustrative matric ball celebration captured with a 360 photo booth", width: 1086, height: 1448 },
    "Corporate Events": { src: "/images/event-corporate.jpg", alt: "Illustrative corporate event with a 360 photo booth activation", width: 1086, height: 1448 },
    "Private Parties": { src: "/images/event-party.jpg", alt: "Illustrative private party guests enjoying a 360 photo booth", width: 1672, height: 941 },
  },
  gallery: [
    { src: "/images/gallery-02.jpg", alt: "Illustrative guests gathered around a 360 photo booth", width: 1672, height: 941 },
    { src: "/images/gallery-03.jpg", alt: "Illustrative lively event atmosphere for a SpinJozi booth booking", width: 1671, height: 941 },
    { src: "/images/gallery-04.jpg", alt: "Illustrative slow-motion style 360 booth moment", width: 1536, height: 1024 },
  ],
  galleryVideo: {
    src: "/videos/gallery-clip-01.mp4",
    poster: "/images/gallery-02.jpg",
    ariaLabel: "Short illustrative SpinJozi 360 booth video clip",
  },
} as const;

export const events = [
  ["Weddings", "Give your guests something they’ll actually want to post."],
  ["Birthdays", "Turn the party into content."],
  ["Matric Balls", "A fresh way to capture the big night."],
  ["Corporate Events", "Add an interactive experience your guests will remember."],
  ["Private Parties", "Make your get-together the one people talk about."],
] as const;

export const faqs = [
  ["How much does a 360 photo booth cost?", "Our launch packages start from R1,499. Browse the packages above, or message us if your event needs something tailored."],
  ["How many people can use the booth?", "This depends on the booth setup and your venue. Share your event details with us and we’ll help plan the right experience."],
  ["How much space does the booth need?", "Space needs can vary by setup and venue. We’ll confirm the practical requirements while planning your booking."],
  ["Do you provide an operator?", "Operator availability and service details should be confirmed with SpinJozi when booking."],
  ["Do you set up and pack down?", "Yes — setup and pack-down are included. We coordinate timing with your venue so you can focus on the event."],
  ["Do you travel outside Johannesburg?", "We serve Johannesburg, Midrand and surrounding Gauteng areas. Travel fees may apply depending on your venue location."],
  ["Can the videos be branded?", "Custom overlays can be discussed for your event. Let us know what you have in mind when you enquire."],
  ["How do guests receive their videos?", "Instant sharing is included. The exact sharing method will be confirmed when your booking is arranged."],
  ["How early do you arrive?", "Arrival timing is planned around your venue and event schedule. We’ll confirm this before your date."],
  ["What happens if it rains for an outdoor event?", "For outdoor events, please arrange a suitable covered backup space. We’ll discuss venue conditions when planning your booking."],
] as const;
