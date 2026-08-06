import PortfolioPage from "../../src/Components/PortfolioPage/PortfolioPage";

export const metadata = {
  title: "Projects | Mohammed Asraf Uddin — MERN Stack Developer",
  description:
    "Explore full-stack web development projects by Mohammed Asraf Uddin — including Next.js SaaS platforms, MERN applications, Stripe integrations, and community portals. Real-world solutions built for scale.",
  keywords: [
    "web development portfolio",
    "MERN stack projects",
    "Next.js projects",
    "React projects portfolio",
    "full stack developer projects",
    "Mohammed Asraf Uddin projects",
    "Stripe integration Next.js",
    "PostgreSQL web app",
    "Node.js API projects",
  ],
  alternates: { canonical: "https://asrafuddin.vercel.app/portfolio" },
  openGraph: {
    title: "Projects | Mohammed Asraf Uddin — MERN Stack Developer",
    description:
      "Real-world full-stack apps — SaaS platforms, e-commerce, community portals — built with React, Next.js, Node.js & MongoDB.",
    url: "https://asrafuddin.vercel.app/portfolio",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects | Mohammed Asraf Uddin",
    description: "Full-stack web projects — React, Next.js, Node.js, Stripe & more.",
    images: ["/og-image.png"],
  },
};


export default function Portfolio() {
  return <PortfolioPage />;
}
