import About from "../../src/Components/AboutPage/About";

export const metadata = {
  title: "About Me | Mohammed Asraf Uddin — MERN Stack Developer",
  description:
    "Learn about Mohammed Asraf Uddin — a MERN Stack Developer with 2+ years of experience in React.js, Next.js, Node.js, Express.js and MongoDB. Passionate about clean code, performance, and building impactful web products. Open to remote roles.",
  keywords: [
    "about Mohammed Asraf Uddin",
    "MERN stack developer biography",
    "full stack web developer profile",
    "React Next.js developer experience",
    "hire experienced web developer",
    "remote developer available",
    "web developer Bangladesh",
  ],
  alternates: { canonical: "https://asrafuddin.vercel.app/about" },
  openGraph: {
    title: "About Mohammed Asraf Uddin | MERN Stack Developer",
    description:
      "2+ years building full-stack apps with React, Next.js, Node.js & MongoDB. Clean code. Great UX. Open to remote opportunities.",
    url: "https://asrafuddin.vercel.app/about",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "About | Mohammed Asraf Uddin",
    description: "MERN Stack Dev. 2+ yrs experience. React, Next.js, Node.js, MongoDB. Available remotely.",
    images: ["/og-image.png"],
  },
};


export default function AboutPage() {
  return <About />;
}
