import info from "../data/info.json";
import { useLanguage } from "../context/LanguageContext";

export default function Footer() {
  const { language, t } = useLanguage();

  return (
    <footer className="bg-dark-bg text-cream py-32 px-6 overflow-hidden relative border-t border-maroon/10">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-16 relative z-10">
        {/* Landscape Element (Montaña Roja) */}
        <div className="w-full max-w-2xl opacity-10 text-maroon">
          <svg
            viewBox="0 0 1000 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-auto"
          >
            <path
              d="M0 200H1000V180C900 175 800 160 750 140C700 120 650 60 600 40C550 20 500 80 450 100C400 120 300 160 200 175C100 190 0 180 0 180V200Z"
              fill="currentColor"
            />
          </svg>
        </div>

        {/* Logo */}
        <div className="flex flex-col items-center gap-4">
          <h2 className="text-6xl md:text-8xl font-display font-bold tracking-tighter text-maroon">
            TANTEO
          </h2>
          <span className="text-xs uppercase tracking-[0.5em] font-bold opacity-40">
            {(info as any)[language].location}
          </span>
        </div>

        {/* Links */}
        <div className="flex flex-wrap justify-center gap-12 text-[10px] uppercase tracking-[0.2em] font-bold opacity-60">
          <a href="#sobre-nosotros" className="hover:text-maroon transition-colors">{t("nav.about")}</a>
          <a href="#carta" className="hover:text-maroon transition-colors">{t("nav.menu")}</a>
          <a href="#contacto" className="hover:text-maroon transition-colors">{t("nav.contact")}</a>
          <a href={`https://instagram.com/${info.instagram}`} target="_blank" rel="noopener noreferrer" className="hover:text-maroon transition-colors">Instagram</a>
        </div>

        {/* Copyright */}
        <div className="flex flex-col items-center gap-4 text-[10px] uppercase tracking-[0.2em] font-bold opacity-30">
          <p>© {new Date().getFullYear()} El Tanteo · El Médano, Tenerife</p>
          <p>{t("footer.tagline")}</p>
        </div>
      </div>

      {/* Decorative Background Element */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[150%] h-full bg-gradient-to-b from-maroon/5 to-transparent pointer-events-none" />
    </footer>
  );
}
