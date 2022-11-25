import "../styles/globals.css";

import About from "../components/About";
import CtaSection from "../components/CtaSection";
import Features from "../components/Features";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import Testimonials from "../components/Testimonials";
import Blog from "../components/Blog";
import AboutTwo from "../components/AboutTwo";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="dark">
      <head />
      <body className="bg-gray-300 dark:bg-gray-900 dark:text-white">
        <div className="min-h-screen">
          <Header />
          <HeroSection />
          <Features />
          <About />
          <AboutTwo />
          <Blog />
          <Testimonials />
          <CtaSection />
          <Footer />
          {children}
        </div>
      </body>
    </html>
  );
}
