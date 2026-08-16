import ArticelPage from "../../src/Components/ArticelPage/ArticelPage";

export const metadata = {
  title: "Blog | Mohammed Asraf Uddin — Web Development Articles",
  description:
    "Read articles and tutorials on JavaScript, React.js, Next.js, Node.js and modern web development by Mohammed Asraf Uddin. Practical insights for developers at every level.",
  keywords: [
    "web development blog",
    "JavaScript tutorials",
    "React.js articles",
    "Next.js tips",
    "Node.js blog",
    "MERN stack tutorials",
    "full stack developer blog",
    "Mohammed Asraf Uddin blog",
  ],
  alternates: { canonical: "https://asrafuddin.netlify.app/blog" },
  openGraph: {
    title: "Blog | Mohammed Asraf Uddin — Web Development Articles",
    description:
      "Practical articles on JavaScript, React, Next.js, Node.js and more by Mohammed Asraf Uddin.",
    url: "https://asrafuddin.netlify.app/blog",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | Mohammed Asraf Uddin",
    description: "Dev articles: JavaScript, React, Next.js, Node.js & more.",
    images: ["/og-image.png"],
  },
};


export default function Blog() {
  return <ArticelPage />;
}
