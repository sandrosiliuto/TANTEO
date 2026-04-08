import { motion } from "motion/react";
import { Menu, X, Globe } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  const navItems = [
    { name: t("nav.about"), href: "#sobre-nosotros" },
    { name: t("nav.experience"), href: "#experiencia" },
    { name: t("nav.menu"), href: "#carta" },
    { name: t("nav.gallery"), href: "#galeria" },
    { name: t("nav.contact"), href: "#contacto" },
  ];

  const languages: { code: 'es' | 'en' | 'de'; label: string }[] = [
    { code: 'es', label: 'ES' },
    { code: 'en', label: 'EN' },
    { code: 'de', label: 'DE' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-dark-bg/80 backdrop-blur-md border-b border-maroon/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <a href="#" className="text-2xl font-display font-bold text-maroon tracking-tighter">
          TANTEO
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-[11px] uppercase tracking-[0.2em] font-bold text-cream/60 hover:text-maroon transition-colors"
            >
              {item.name}
            </a>
          ))}
          
          {/* Language Switcher */}
          <div className="flex items-center gap-3 border-l border-maroon/20 pl-8 ml-4">
            <Globe size={14} className="text-maroon" />
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => setLanguage(lang.code)}
                className={`text-[10px] font-bold tracking-widest transition-colors ${
                  language === lang.code ? "text-maroon" : "text-cream/40 hover:text-cream"
                }`}
              >
                {lang.label}
              </button>
            ))}
          </div>

          <a
            href="https://wa.me/34613050619"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-maroon text-ink px-6 py-2 text-[11px] uppercase tracking-widest font-bold hover:bg-maroon/90 transition-all"
          >
            {t("nav.reserve")}
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="lg:hidden text-maroon" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={isOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
        className="lg:hidden overflow-hidden bg-dark-bg border-b border-maroon/10"
      >
        <div className="flex flex-col p-6 gap-6">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-xl font-display font-bold text-cream"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </a>
          ))}
          
          <div className="flex items-center gap-6 py-4 border-t border-maroon/10">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => {
                  setLanguage(lang.code);
                  setIsOpen(false);
                }}
                className={`text-sm font-bold tracking-widest ${
                  language === lang.code ? "text-maroon" : "text-cream/40"
                }`}
              >
                {lang.label}
              </button>
            ))}
          </div>

          <a
            href="https://wa.me/34613050619"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-maroon text-ink px-6 py-4 text-center text-sm uppercase tracking-widest font-bold"
            onClick={() => setIsOpen(false)}
          >
            {t("nav.reserve")}
          </a>
        </div>
      </motion.div>
    </nav>
  );
}
