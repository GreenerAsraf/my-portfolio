import PricingPage from "../../src/Components/PricingPage/PricingPage";

export const metadata = {
  title: "Pricing | Mohammed Asraf Uddin — Freelance Web Development Rates",
  description:
    "Transparent freelance web development pricing by Mohammed Asraf Uddin. Affordable MERN stack, React.js and Next.js development plans for startups, SMEs, and individuals. Request a custom quote.",
  keywords: [
    "freelance web developer pricing",
    "MERN stack developer rates",
    "hire React developer cost",
    "Next.js development pricing",
    "affordable full stack developer",
    "web development packages",
    "Mohammed Asraf Uddin pricing",
  ],
  alternates: { canonical: "https://asrafuddin.vercel.app/pricing" },
  openGraph: {
    title: "Pricing | Mohammed Asraf Uddin — Freelance Web Development Rates",
    description:
      "Clear, affordable pricing for MERN stack, React.js and Next.js web development projects. Get a custom quote today.",
    url: "https://asrafuddin.vercel.app/pricing",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pricing | Mohammed Asraf Uddin",
    description: "Affordable React & MERN stack dev rates. Get a custom quote.",
    images: ["/og-image.png"],
  },
};


export default function Pricing() {
  return <PricingPage />;
}
