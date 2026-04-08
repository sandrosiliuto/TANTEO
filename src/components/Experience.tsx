import { motion } from "motion/react";
import { useLanguage } from "../context/LanguageContext";

export default function Experience() {
  const { language, t } = useLanguage();

  const highlights = [
    {
      title: language === 'es' ? "Tapas Elaboradas" : language === 'en' ? "Crafted Tapas" : "Hausgemachte Tapas",
      description: language === 'es' ? "Nuestra selección de tapas fusiona la tradición española con técnicas modernas." : language === 'en' ? "Our selection of tapas fuses Spanish tradition with modern techniques." : "Unsere Auswahl an Tapas verbindet spanische Tradition mit modernen Techniken.",
      image: "https://picsum.photos/seed/medano-sea-1/600/800",
    },
    {
      title: language === 'es' ? "Producto de Calidad" : language === 'en' ? "Quality Product" : "Qualitätsprodukt",
      description: language === 'es' ? "Seleccionamos los mejores ingredientes locales y de temporada." : language === 'en' ? "We select the best local and seasonal ingredients." : "Wir wählen die besten lokalen und saisonalen Zutaten aus.",
      image: "https://picsum.photos/seed/medano-sea-2/600/800",
    },
    {
      title: language === 'es' ? "Vistas Únicas" : language === 'en' ? "Unique Views" : "Einzigartige Aussichten",
      description: language === 'es' ? "Disfruta de una cena inolvidable con vistas a la Montaña Roja." : language === 'en' ? "Enjoy an unforgettable dinner with views of the Red Mountain." : "Genießen Sie ein unvergessliches Abendessen mit Blick auf den Roten Berg.",
      image: "https://picsum.photos/seed/medano-sea-3/600/800",
    },
  ];

  return (
    <section id="experiencia" className="py-32 px-6 bg-dark-bg">
      <div className="max-w-7xl mx-auto flex flex-col gap-24">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-display font-bold text-ink mb-8 tracking-tighter">
            {t("experience.title")} <br />
            <span className="italic font-light text-cream/40">{t("experience.subtitle")}</span>
          </h2>
          <p className="text-lg text-cream/60 leading-relaxed font-light">
            {t("experience.desc")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="flex flex-col gap-8 group"
            >
              <div className="aspect-[3/4] overflow-hidden rounded-sm shadow-xl border border-maroon/10">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex flex-col gap-4">
                <h3 className="text-3xl font-display font-bold text-maroon tracking-tight">
                  {item.title}
                </h3>
                <p className="text-lg text-cream/60 leading-relaxed font-light">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
