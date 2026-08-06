import ContactPage from "../../src/Components/ContactPage/ContactPage";

export const metadata = {
  title: "Contact | Mohammed Asraf Uddin — Hire a MERN Stack Developer",
  description:
    "Looking to hire a full-stack developer? Get in touch with Mohammed Asraf Uddin — available for remote web development projects, freelance contracts, and full-time roles in React.js, Next.js, Node.js and MongoDB.",
  keywords: [
    "hire MERN stack developer",
    "contact full stack developer",
    "freelance React developer for hire",
    "remote web developer contact",
    "Mohammed Asraf Uddin contact",
    "web development inquiry",
  ],
  alternates: { canonical: "https://asrafuddin.vercel.app/contact" },
  openGraph: {
    title: "Contact Mohammed Asraf Uddin | Hire a MERN Stack Developer",
    description:
      "Available for remote full-stack projects, freelance contracts and full-time roles. Let's build something great together.",
    url: "https://asrafuddin.vercel.app/contact",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact | Mohammed Asraf Uddin",
    description: "Open to remote roles & freelance projects. Let's connect!",
    images: ["/og-image.png"],
  },
};

export default function Contact() {
  return <ContactPage />;
}
