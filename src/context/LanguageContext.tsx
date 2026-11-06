import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'ky' | 'ru' | 'en';

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (ky: string, ru: string, en: string) => string;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: 'ky',
  setLang: () => {},
  t: (ky) => ky,
});

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLang] = useState<Language>('ky');

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const t = (ky: string, ru: string, en: string) => {
    if (lang === 'ru') return ru;
    if (lang === 'en') return en;
    return ky;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
