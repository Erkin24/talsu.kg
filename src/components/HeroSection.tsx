import React from 'react';
import { ArrowRight, Sparkles, BookOpen, Calculator, GraduationCap, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { IMAGES, STATS } from '../data/instituteData';

interface HeroSectionProps {
  onOpenApply: () => void;
  onOpenAdvisor: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenApply, onOpenAdvisor }) => {
  const { lang, t } = useLanguage();

  return (
    <section className="relative overflow-hidden bg-stone-900 text-white">
      {/* Background Image with Dark Vignette Gradient */}
      <div className="absolute inset-0 z-0">
        <img
          src={IMAGES.hero}
          alt="Ж. Баласагын атындагы КУУнун Талас аймактык институтунун имараты"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center scale-[1.02] transform transition-transform duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#07172b]/95 via-[#0b2545]/85 to-black/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#07172b] via-transparent to-black/40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20 lg:pt-24 lg:pb-28">
        <div className="max-w-3xl">
          {/* Subtle institutional kicker */}
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-amber-400 mb-4">
            <span className="w-2 h-2 rounded-full bg-amber-400" />
            <span>
              {t(
                'Кыргыз Республикасынын Билим берүү жана илим министрлиги',
                'Министерство образования и науки Кыргызской Республики',
                'Ministry of Education & Science of the Kyrgyz Republic'
              )}
            </span>
          </div>

          {/* Primary Institutional Title */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.18] font-serif mb-6 text-balance">
            {t(
              'Жусуп Баласагын атындагы Кыргыз улуттук университетинин Талас аймактык көп тармактуу институту',
              'Таласский региональный многопрофильный институт Кыргызского национального университета им. Ж. Баласагына',
              'Talas Regional Multidisciplinary Institute of Jusup Balasagyn Kyrgyz National University'
            )}
          </h1>

          <p className="text-base sm:text-lg text-stone-200 leading-relaxed max-w-2xl mb-8">
            {t(
              'Талас жергесиндеги өлкөнүн башкы улуттук университетинин расмий институту. Мамлекеттик үлгүдөгү диплом, заманбап санариптик лабораториялар, кесипкөй профессордук курам жана бюджеттик орундар.',
              'Официальный флагманский институт главного национального университета страны в Таласском регионе. Государственный диплом КНУ, передовые лаборатории, бюджетные квоты и трудоустройство.',
              'The official regional institute of the flagship national university in Talas. State-accredited KNU diploma, modern digital laboratories, scholarship quotas, and career integration.'
            )}
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-3.5 mb-10">
            <button
              onClick={onOpenApply}
              className="cursor-pointer px-6 py-3.5 bg-amber-500 hover:bg-amber-400 text-blue-950 font-bold text-sm rounded-md shadow-md hover:shadow-lg transition-all flex items-center gap-2 whitespace-nowrap shrink-0"
            >
              <span>{t('Онлайн арыз берүү 2026', 'Подать заявку 2026', 'Online Admission 2026')}</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href="#programs"
              className="cursor-pointer px-5 py-3.5 bg-white/10 hover:bg-white/20 text-white font-medium text-sm rounded-md backdrop-blur-xs border border-white/20 transition-all flex items-center gap-2 whitespace-nowrap shrink-0"
            >
              <BookOpen className="w-4 h-4 text-amber-300" />
              <span>{t('Адистиктер тизмеси', 'Список специальностей', 'Explore Programs')}</span>
            </a>

            <button
              onClick={onOpenAdvisor}
              className="cursor-pointer px-4.5 py-3.5 text-stone-200 hover:text-amber-300 text-sm font-medium transition-colors flex items-center gap-2 whitespace-nowrap shrink-0"
            >
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>{t('Виртуалдык кеңешчи', 'Виртуальный помощник', 'Interactive Advisor')}</span>
            </button>
          </div>

          {/* Operational notice ribbon */}
          <div className="pt-6 border-t border-white/15 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-stone-300">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
              <span>{t('Мамлекеттик аккредитациядан толук өткөн', 'Полная государственная аккредитация', 'Fully State Accredited')}</span>
            </div>
            <div className="flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-amber-400 shrink-0" />
              <span>{t('КУУнун борбордук диплому ыйгарылат', 'Выдается диплом КНУ им. Ж. Баласагына', 'Conferred KNU State Diploma')}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Full-width Stats Strip */}
      <div className="relative z-10 bg-[#07172b]/95 border-t border-blue-950/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 divide-y md:divide-y-0 md:divide-x divide-white/10">
            {STATS.map((stat, idx) => {
              const label = lang === 'ru' ? stat.labelRu : lang === 'en' ? stat.labelEn : stat.labelKy;
              return (
                <div key={idx} className={`pt-4 md:pt-0 ${idx > 0 ? 'md:pl-6' : ''}`}>
                  <div className="text-2xl lg:text-3xl font-extrabold text-amber-400 font-mono tabular-nums">
                    {stat.value}
                  </div>
                  <div className="text-xs text-stone-300 mt-1 leading-snug">
                    {label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
