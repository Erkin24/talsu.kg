import React from 'react';
import { Phone, Mail, MapPin, Globe } from 'lucide-react';
import { useLanguage, Language } from '../context/LanguageContext';

export const TopUtilityBar: React.FC = () => {
  const { lang, setLang, t } = useLanguage();

  return (
    <div className="bg-[#0b2545] text-slate-200 text-xs border-b border-blue-950/60 hidden sm:block">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <a href="#map-location" className="flex items-center gap-2 hover:text-white transition-colors group">
            <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0 group-hover:scale-110 transition-transform" />
            <span className="text-slate-300 group-hover:underline">
              {t('Талас шаары, Ч. Айтматов көч. 241 (Карта)', 'г. Талас, ул. Ч. Айтматова 241 (Карта)', '241 Ch. Aitmatov St, Talas (Map)')}
            </span>
          </a>
          <div className="flex items-center gap-2">
            <Phone className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            <a href="tel:+996342252418" className="hover:text-white transition-colors">
              +996 (3422) 5-24-18
            </a>
          </div>
          <div className="hidden lg:flex items-center gap-2">
            <Mail className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            <a href="mailto:takti@knu.kg" className="hover:text-white transition-colors">
              takti@knu.kg
            </a>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5 text-slate-400">
            <Globe className="w-3.5 h-3.5" />
            <div className="flex items-center text-[11px] font-medium tracking-wide">
              <button
                onClick={() => setLang('ky')}
                className={`px-1.5 py-0.5 rounded transition-colors ${
                  lang === 'ky' ? 'text-amber-400 font-bold bg-blue-900/50' : 'hover:text-white'
                }`}
              >
                КЫР
              </button>
              <span className="text-slate-600">/</span>
              <button
                onClick={() => setLang('ru')}
                className={`px-1.5 py-0.5 rounded transition-colors ${
                  lang === 'ru' ? 'text-amber-400 font-bold bg-blue-900/50' : 'hover:text-white'
                }`}
              >
                РУС
              </button>
              <span className="text-slate-600">/</span>
              <button
                onClick={() => setLang('en')}
                className={`px-1.5 py-0.5 rounded transition-colors ${
                  lang === 'en' ? 'text-amber-400 font-bold bg-blue-900/50' : 'hover:text-white'
                }`}
              >
                ENG
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
