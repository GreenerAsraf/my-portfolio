import "./globals.css";
import Menu from "../src/Components/MenuBar/Menu";
import Footer from "../src/Components/ShearedFolder/Footer/Footer";
import ClientEffects from "./ClientEffects";
import { ThemeProvider } from "../src/Components/ThemeProvider/ThemeProvider";
import MouseSpotlight from "../src/Components/MouseSpotlight/MouseSpotlight";
import ScrollToTop from "../src/Components/ScrollToTop/ScrollToTop";

export const metadata = {
  title: "Mohammed Asraf Uddin — Portfolio",
  description:
    "A self-motivated and enthusiastic MERN Stack Developer with a deep interest in JavaScript and modern web technologies.",
  keywords: ["portfolio", "web developer", "MERN", "React", "Next.js", "JavaScript"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <MouseSpotlight />
          <ScrollToTop />
          <Menu />
          <main>{children}</main>
          <Footer />
          <ClientEffects />
        </ThemeProvider>
      </body>
    </html>
  );
}
