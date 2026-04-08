import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Menu from "./components/Menu";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { LanguageProvider } from "./context/LanguageContext";

export default function App() {
  return (
    <LanguageProvider>
      <main className="min-h-screen bg-dark-bg selection:bg-maroon selection:text-ink">
        <Navbar />
        <Hero />
        <About />
        <Experience />
        <Menu />
        <Gallery />
        <Contact />
        <Footer />
      </main>
    </LanguageProvider>
  );
}
