import { motion } from "motion/react";
import info from "../data/info.json";
import { useLanguage } from "../context/LanguageContext";
import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

export default function Hero() {
  const { language, t } = useLanguage();
  const currentInfo = (info as any)[language];
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  const toggleMute = () => {
    if (audioRef.current) {
      if (isMuted) {
        audioRef.current.play().catch(() => {});
      } else {
        audioRef.current.pause();
      }
      setIsMuted(!isMuted);
    }
  };

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://picsum.photos/seed/montana-roja-medano/1920/1080"
          alt="Montaña Roja, El Médano"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        {/* Dark overlay with maroon tint */}
        <div className="absolute inset-0 bg-dark-bg/60 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-transparent to-transparent opacity-90" />
      </div>

      {/* Audio Element */}
      <audio
        ref={audioRef}
        src="https://www.soundjay.com/nature/ocean-waves-1.mp3"
        loop
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <span className="text-sm uppercase tracking-[0.5em] font-bold text-maroon mb-6 block">
            {currentInfo.location}
          </span>
          <h1 className="text-7xl md:text-9xl font-display font-bold text-ink mb-8 tracking-tighter">
            {info.name}
          </h1>
          <p className="text-xl md:text-2xl font-sans font-light text-cream/80 mb-12 max-w-2xl mx-auto tracking-wide">
            {currentInfo.tagline}
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={`https://wa.me/${info.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-maroon text-ink px-12 py-4 text-sm uppercase tracking-[0.3em] font-bold shadow-2xl hover:bg-maroon/90 transition-all border border-maroon/20"
            >
              {t("nav.reserve")}
            </motion.a>
            
            <button
              onClick={toggleMute}
              className="flex items-center gap-3 text-cream/40 hover:text-maroon transition-colors text-xs uppercase tracking-widest font-bold"
            >
              {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
              <span>{isMuted ? "Sound Off" : "Sound On"}</span>
            </button>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-widest font-bold text-maroon/60">{t("hero.discover")}</span>
        <div className="w-px h-12 bg-maroon/30" />
      </motion.div>
    </section>
  );
}
