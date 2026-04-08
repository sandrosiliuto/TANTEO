import { motion } from "motion/react";
import { useLanguage } from "../context/LanguageContext";

export default function Gallery() {
  const { t } = useLanguage();
  const images = [
    { src: "https://picsum.photos/seed/medano-sea-4/800/1000", alt: "Plato de El Tanteo" },
    { src: "https://picsum.photos/seed/medano-sea-5/800/1000", alt: "Vistas al mar" },
    { src: "https://picsum.photos/seed/medano-sea-6/800/1000", alt: "Interior del local" },
    { src: "https://picsum.photos/seed/medano-sea-7/800/1000", alt: "Tapa elaborada" },
    { src: "https://picsum.photos/seed/medano-sea-8/800/1000", alt: "Montaña Roja" },
    { src: "https://picsum.photos/seed/medano-sea-9/800/1000", alt: "Detalles del local" },
  ];

  return (
    <section id="galeria" className="py-32 px-6 bg-dark-bg overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col gap-24">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-display font-bold text-ink mb-8 tracking-tighter">
            {t("nav.gallery")} <br />
            <span className="italic font-light text-cream/40">Visual</span>
          </h2>
          <p className="text-lg text-cream/60 leading-relaxed font-light">
            Un recorrido por nuestros platos, nuestras vistas y nuestro local.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="aspect-[4/5] overflow-hidden rounded-sm shadow-xl group border border-maroon/10"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
