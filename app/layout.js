import "./globals.css";
import { inter, spaceGrotesk, jetbrainsMono } from "./fonts";
import Menu from "../src/Components/MenuBar/Menu";
import Footer from "../src/Components/ShearedFolder/Footer/Footer";
import ClientEffects from "./ClientEffects";
import { ThemeProvider } from "../src/Components/ThemeProvider/ThemeProvider";
import { LanguageProvider } from "../src/Components/LanguageProvider/LanguageProvider";
import MouseSpotlight from "../src/Components/MouseSpotlight/MouseSpotlight";
import ScrollToTop from "../src/Components/ScrollToTop/ScrollToTop";

export const metadata = {
  // ── Core ──────────────────────────────────────────────────────────────────
  metadataBase: new URL("https://asrafuddin.vercel.app"),
  title: {
    default: "Mohammed Asraf Uddin | MERN Stack Developer",
    template: "%s | Mohammed Asraf Uddin",
  },
  description:
    "Mohammed Asraf Uddin is a MERN Stack Developer specialising in React.js, Next.js, Node.js, Express.js and MongoDB. Available for remote full-stack web development roles worldwide.",
  keywords: [
    // Stack
    "MERN stack developer",
    "full stack web developer",
    "React developer",
    "Next.js developer",
    "Node.js developer",
    "Express.js developer",
    "MongoDB developer",
    "JavaScript developer",
    "TypeScript developer",
    // Remote / hiring signals
    "remote web developer",
    "freelance web developer",
    "hire MERN developer",
    "hire React developer",
    "hire full stack developer",
    "remote JavaScript developer",
    "available for work",
    // Portfolio / personal brand
    "Mohammed Asraf Uddin",
    "Asraf portfolio",
    "web developer Bangladesh",
    "developer portfolio",
    "software engineer portfolio",
    // Skills
    "REST API developer",
    "Prisma ORM",
    "PostgreSQL developer",
    "TailwindCSS",
    "Stripe integration",
    "JWT authentication",
    "Firebase developer",
    "web performance optimisation",
    "responsive web design",
  ],
  authors: [{ name: "Mohammed Asraf Uddin", url: "https://asrafuddin.vercel.app" }],
  creator: "Mohammed Asraf Uddin",
  category: "Technology",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-snippet": -1 },
  },
  // ── Open Graph ────────────────────────────────────────────────────────────
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://asrafuddin.vercel.app",
    siteName: "Mohammed Asraf Uddin — Portfolio",
    title: "Mohammed Asraf Uddin | MERN Stack Developer",
    description:
      "Full-stack web developer specialising in React.js, Next.js, Node.js and MongoDB. Building fast, scalable web apps. Open to remote opportunities.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Mohammed Asraf Uddin — MERN Stack Developer Portfolio",
      },
    ],
  },
  // ── Twitter / X Card ──────────────────────────────────────────────────────
  twitter: {
    card: "summary_large_image",
    title: "Mohammed Asraf Uddin | MERN Stack Developer",
    description:
      "Full-stack dev building React, Next.js & Node.js apps. Open to remote roles.",
    images: ["/og-image.png"],
    creator: "@asrafuddin_dev",
  },
  // ── Canonical ─────────────────────────────────────────────────────────────
  alternates: {
    canonical: "https://asrafuddin.vercel.app",
  },
};


const themeInitScript = `(function(){try{var t=localStorage.getItem("theme")||"dark";document.documentElement.setAttribute("data-theme",t)}catch(e){document.documentElement.setAttribute("data-theme","dark")}})()`;

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className={inter.className}>
        <ThemeProvider>
          <LanguageProvider>
            <MouseSpotlight />
            <ScrollToTop />
            <Menu />
            <main>{children}</main>
            <Footer />
            <ClientEffects />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

