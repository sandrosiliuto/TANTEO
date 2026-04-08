import { motion } from "motion/react";
import info from "../data/info.json";
import { useLanguage } from "../context/LanguageContext";
import { Instagram, Phone, MapPin, Clock } from "lucide-react";

export default function Contact() {
  const { language, t } = useLanguage();
  const currentInfo = (info as any)[language];

  return (
    <section id="contacto" className="py-32 px-6 bg-dark-bg border-t border-maroon/10">
      <div className="max-w-7xl mx-auto flex flex-col gap-24 items-center text-center">
        {/* Header */}
        <div className="flex flex-col gap-8 max-w-3xl">
          <h2 className="text-5xl md:text-8xl font-display font-bold text-ink mb-8 tracking-tighter">
            {t("contact.title")} <br />
            <span className="italic font-light text-cream/40">{t("contact.subtitle")}</span>
          </h2>
          <div className="editorial-line mx-auto max-w-xs" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 w-full">
          {/* Phone */}
          <div className="flex flex-col items-center gap-4">
            <div className="flex items-center gap-2 text-maroon">
              <Phone size={18} />
              <span className="text-[10px] uppercase tracking-widest font-bold">{t("contact.phone")}</span>
            </div>
            <a href={`tel:${info.phone.replace(/\s/g, "")}`} className="text-2xl font-display font-bold hover:text-maroon transition-colors">
              {info.phone}
            </a>
          </div>

          {/* Instagram */}
          <div className="flex flex-col items-center gap-4">
            <div className="flex items-center gap-2 text-maroon">
              <Instagram size={18} />
              <span className="text-[10px] uppercase tracking-widest font-bold">{t("contact.instagram")}</span>
            </div>
            <a href={`https://instagram.com/${info.instagram}`} target="_blank" rel="noopener noreferrer" className="text-2xl font-display font-bold hover:text-maroon transition-colors">
              @{info.instagram}
            </a>
          </div>

          {/* Address */}
          <div className="flex flex-col items-center gap-4">
            <div className="flex items-center gap-2 text-maroon">
              <MapPin size={18} />
              <span className="text-[10px] uppercase tracking-widest font-bold">{t("contact.location")}</span>
            </div>
            <p className="text-lg text-cream/60 leading-relaxed font-light">
              {info.address}
            </p>
          </div>

          {/* Hours */}
          <div className="flex flex-col items-center gap-4">
            <div className="flex items-center gap-2 text-maroon">
              <Clock size={18} />
              <span className="text-[10px] uppercase tracking-widest font-bold">{t("contact.hours")}</span>
            </div>
            <div className="flex flex-col gap-2">
              {currentInfo.hours.map((h: any) => (
                <div key={h.days} className="flex flex-col gap-1 text-sm">
                  <span className="font-bold text-cream/80 uppercase tracking-tighter">{h.days}</span>
                  <span className="text-cream/40 font-light">{h.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href={`https://wa.me/${info.whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-maroon text-ink px-16 py-6 text-xl font-display font-bold italic hover:bg-maroon/90 transition-all shadow-2xl border border-maroon/20 mt-12"
        >
          {t("contact.reserve_btn")}
        </motion.a>
      </div>
    </section>
  );
}
