import HomePage from "../src/Components/HomePage/HomePage";

export const metadata = {
  title: "Home | Mohammed Asraf Uddin — MERN Stack Developer",
  description:
    "Welcome to the portfolio of Mohammed Asraf Uddin — a MERN Stack Developer building performant, scalable web applications with React.js, Next.js, Node.js and MongoDB. Available for remote full-stack roles.",
  keywords: [
    "MERN stack developer portfolio",
    "React Next.js developer",
    "hire full stack developer remotely",
    "Mohammed Asraf Uddin portfolio",
    "JavaScript developer for hire",
  ],
  alternates: { canonical: "https://asrafuddin.vercel.app" },
  openGraph: {
    title: "Mohammed Asraf Uddin | MERN Stack Developer Portfolio",
    description:
      "Explore full-stack projects built with React, Next.js, Node.js and MongoDB by Mohammed Asraf Uddin. Open to remote opportunities worldwide.",
    url: "https://asrafuddin.vercel.app",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohammed Asraf Uddin | MERN Stack Developer",
    description: "Full-stack portfolio — React, Next.js, Node.js, MongoDB. Open to remote roles.",
    images: ["/og-image.png"],
  },
};


export default function Home() {
  return <HomePage />;
}
