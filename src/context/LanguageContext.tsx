import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'es' | 'en' | 'de';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  es: {
    "nav.about": "Sobre nosotros",
    "nav.experience": "Experiencia",
    "nav.menu": "Carta",
    "nav.gallery": "Galería",
    "nav.contact": "Contacto",
    "nav.reserve": "Reservar",
    "hero.discover": "Descubrir",
    "contact.title": "Contacto",
    "contact.subtitle": "y Reservas",
    "contact.phone": "Teléfono",
    "contact.instagram": "Instagram",
    "contact.location": "Ubicación",
    "contact.hours": "Horario",
    "contact.reserve_btn": "Reservar mesa por WhatsApp",
    "footer.tagline": "Cocina honesta en un entorno único",
    "experience.title": "La Experiencia",
    "experience.subtitle": "El Tanteo",
    "experience.desc": "Un lugar donde comer bien, sin prisas, con vistas inmejorables."
  },
  en: {
    "nav.about": "About us",
    "nav.experience": "Experience",
    "nav.menu": "Menu",
    "nav.gallery": "Gallery",
    "nav.contact": "Contact",
    "nav.reserve": "Reserve",
    "hero.discover": "Discover",
    "contact.title": "Contact",
    "contact.subtitle": "& Reservations",
    "contact.phone": "Phone",
    "contact.instagram": "Instagram",
    "contact.location": "Location",
    "contact.hours": "Hours",
    "contact.reserve_btn": "Book a table via WhatsApp",
    "footer.tagline": "Honest cuisine in a unique setting",
    "experience.title": "The Experience",
    "experience.subtitle": "El Tanteo",
    "experience.desc": "A place to eat well, without rushing, with unbeatable views."
  },
  de: {
    "nav.about": "Über uns",
    "nav.experience": "Erlebnis",
    "nav.menu": "Karte",
    "nav.gallery": "Galerie",
    "nav.contact": "Kontakt",
    "nav.reserve": "Reservieren",
    "hero.discover": "Entdecken",
    "contact.title": "Kontakt",
    "contact.subtitle": "& Reservierungen",
    "contact.phone": "Telefon",
    "contact.instagram": "Instagram",
    "contact.location": "Standort",
    "contact.hours": "Öffnungszeiten",
    "contact.reserve_btn": "Tisch über WhatsApp reservieren",
    "footer.tagline": "Ehrliche Küche in einer einzigartigen Umgebung",
    "experience.title": "Das Erlebnis",
    "experience.subtitle": "El Tanteo",
    "experience.desc": "Ein Ort, um gut zu essen, ohne Eile, mit unschlagbarer Aussicht."
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('es');

  const t = (key: string) => {
    return (translations[language] as any)[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
