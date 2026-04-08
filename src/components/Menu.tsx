import { motion } from "motion/react";
import menu from "../data/menu.json";
import { useLanguage } from "../context/LanguageContext";

export default function Menu() {
  const { language } = useLanguage();
  const currentMenu = (menu as any)[language];

  return (
    <section id="carta" className="py-32 px-6 bg-dark-bg">
      <div className="max-w-7xl mx-auto flex flex-col gap-24">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-sm uppercase tracking-[0.5em] font-bold text-maroon mb-6 block">
            {currentMenu.title}
          </span>
          <h2 className="text-5xl md:text-7xl font-display font-bold text-ink mb-8 tracking-tighter">
            {currentMenu.subtitle.split(' ')[0]} <br />
            <span className="italic font-light text-cream/40">{currentMenu.subtitle.split(' ').slice(1).join(' ')}</span>
          </h2>
          <p className="text-lg text-cream/60 leading-relaxed font-light">
            {currentMenu.description}
          </p>
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-24 gap-y-32">
          {currentMenu.categories.map((category: any, catIndex: number) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: catIndex * 0.1 }}
              className="flex flex-col gap-12"
            >
              {/* Category Header */}
              <div className="flex flex-col gap-4">
                <h3 className="text-4xl font-display font-bold text-maroon tracking-tighter">
                  {category.title}
                </h3>
                <div className="editorial-line" />
              </div>

              {/* Items */}
              <div className="flex flex-col gap-10">
                {category.items.map((item: any) => (
                  <div key={item.name} className="flex flex-col gap-2 group">
                    <div className="flex items-baseline justify-between gap-4">
                      <h4 className="text-xl font-display font-bold text-ink group-hover:text-maroon transition-colors">
                        {item.name}
                      </h4>
                      <span className="text-sm font-bold text-maroon/60 tabular-nums">
                        {item.price}
                      </span>
                    </div>
                    <p className="text-sm text-cream/40 leading-relaxed italic font-light">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="text-center mt-12">
          <p className="text-[10px] uppercase tracking-[0.4em] font-bold text-maroon/40">
            {currentMenu.footerNote}
          </p>
        </div>
      </div>
    </section>
  );
}
