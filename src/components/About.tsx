import { motion } from "motion/react";
import info from "../data/info.json";
import { useLanguage } from "../context/LanguageContext";

export default function About() {
  const { language } = useLanguage();
  const currentInfo = (info as any)[language];

  return (
    <section id="sobre-nosotros" className="py-32 px-6 bg-dark-bg overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="flex flex-col gap-10"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-px bg-maroon" />
            <span className="text-sm uppercase tracking-[0.3em] font-bold text-maroon">
              {currentInfo.about.title}
            </span>
          </div>
          <h2 className="text-5xl md:text-7xl font-display font-bold text-ink leading-tight tracking-tighter">
            Cocina honesta <br />
            <span className="italic font-light text-cream/40">en un entorno único</span>
          </h2>
          <p className="text-xl md:text-2xl font-sans font-light italic text-cream/80 leading-relaxed max-w-xl">
            {currentInfo.about.highlight}
          </p>
          <p className="text-lg text-cream/60 leading-relaxed max-w-xl font-light">
            {currentInfo.about.content}
          </p>
        </motion.div>

        {/* Image Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative"
        >
          <div className="aspect-[4/5] overflow-hidden rounded-sm shadow-2xl border border-maroon/10">
            <img
              src="https://picsum.photos/seed/medano-beach-1/800/1000"
              alt="Playa de El Médano"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          {/* Floating Element */}
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-12 -left-12 bg-maroon p-12 text-ink hidden md:block shadow-2xl border border-maroon/20"
          >
            <p className="text-3xl font-display font-bold italic mb-2">"El Médano"</p>
            <p className="text-xs uppercase tracking-widest font-bold opacity-70">Tenerife, Spain</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
