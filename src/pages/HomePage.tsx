import React, { useState, useEffect, useCallback } from 'react';
import {
  ArrowRight,
  Sparkles,
  BookOpen,
  GraduationCap,
  Award,
  Users,
  Building,
  Calendar,
  CheckCircle2,
  Newspaper,
  Compass,
  Phone,
  Laptop,
  ZoomIn,
  X,
  ChevronLeft,
  ChevronRight,
  ExternalLink
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useNavigation } from '../context/NavigationContext';
import {
  TALSU_INFO,
  TALSU_IMAGES,
  FACULTIES,
  NEWS_DATA,
  ANNIVERSARY_MILESTONES,
  GALLERY_PHOTOS,
  GalleryPhoto
} from '../data/talsuData';

export const HomePage: React.FC = () => {
  const { lang, t } = useLanguage();
  const { navigate } = useNavigation();

  // Full-screen Lightbox state
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  const handleOpenLightbox = (index: number) => {
    setActiveLightboxIndex(index);
  };

  const handleCloseLightbox = () => {
    setActiveLightboxIndex(null);
  };

  const handleNextPhoto = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    setActiveLightboxIndex((prev) => (prev !== null ? (prev + 1) % GALLERY_PHOTOS.length : 0));
  }, []);

  const handlePrevPhoto = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    setActiveLightboxIndex((prev) => (prev !== null ? (prev - 1 + GALLERY_PHOTOS.length) % GALLERY_PHOTOS.length : GALLERY_PHOTOS.length - 1));
  }, []);

  // Keyboard navigation for Lightbox (Arrow keys & Escape)
  useEffect(() => {
    if (activeLightboxIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleCloseLightbox();
      } else if (e.key === 'ArrowRight') {
        handleNextPhoto();
      } else if (e.key === 'ArrowLeft') {
        handlePrevPhoto();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [activeLightboxIndex, handleNextPhoto, handlePrevPhoto]);

  return (
    <div className="space-y-0">
      {/* 1. HERO SECTION WITH ANNIVERSARY EMBLEM */}
      <section className="relative overflow-hidden bg-[#102747] text-white">
        {/* Background Image with Dark Gradient Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={TALSU_IMAGES.campusHero}
            alt="Талас мамлекеттик университетинин Башкы корпусу"
            className="w-full h-full object-cover object-center scale-[1.01]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0d1f38]/95 via-[#102747]/85 to-black/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#102747] via-transparent to-black/30" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-20 sm:pt-20 sm:pb-24">
          <div className="max-w-3xl">
            {/* Special Golden Anniversary Ribbon */}
            <div
              onClick={() => navigate('/30-years')}
              className="cursor-pointer inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/20 border border-amber-400 text-amber-300 text-xs font-bold uppercase tracking-wider mb-5 hover:bg-amber-500/30 transition-all group"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-400 group-hover:rotate-45 transition-transform" />
              <span>30 ЖЫЛ — 1996–2026: БИЛИМГЕ, ИЛИМГЕ ЖАНА КЕЛЕЧЕККЕ!</span>
              <span className="underline ml-1">Толук маалымат →</span>
            </div>

            {/* University Main Title */}
            <h1 className="text-3xl sm:text-5xl lg:text-5xl font-serif font-extrabold tracking-tight text-white leading-[1.18] mb-6 text-balance">
              {TALSU_INFO.name[lang] || TALSU_INFO.name.ky}
            </h1>

            <p className="text-base sm:text-lg text-stone-200 leading-relaxed font-light mb-8 max-w-2xl">
              {t(
                'Талас өрөөнүнүн башкы мамлекеттик классикалык университети. Мамлекеттик үлгүдөгү диплом, 4 заманбап факультет, колледж, 35тен ашуун аккредитацияланган багыттар жана бюджеттик гранттар.',
                'Главный государственный классический университет Таласского региона. Диплом государственного образца, 4 современных факультета, колледж и свыше 35 аккредитованных программ.',
                'The premier public state university of the Talas region. State-accredited diploma, 4 modern faculties, vocational college, and over 35 degree programs.'
              )}
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 mb-10">
              <button
                onClick={() => navigate('/university/about')}
                className="cursor-pointer px-6 py-3.5 bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 hover:to-amber-300 text-[#102747] font-bold text-xs sm:text-sm rounded-lg shadow-md hover:shadow-lg transition-all flex items-center gap-2"
              >
                <span>{t('Университет жөнүндө', 'Об университете', 'About University')}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => navigate('/admissions/rules')}
                className="cursor-pointer px-5 py-3.5 bg-white/10 hover:bg-white/20 text-white font-semibold text-xs sm:text-sm rounded-lg backdrop-blur-xs border border-white/20 transition-all flex items-center gap-2"
              >
                <GraduationCap className="w-4 h-4 text-amber-300" />
                <span>{t('Абитуриенттер үчүн 2026', 'Абитуриенту-2026', 'Admissions 2026')}</span>
              </button>

              <button
                onClick={() => navigate('/30-years')}
                className="cursor-pointer px-4.5 py-3.5 text-amber-300 hover:text-white text-xs sm:text-sm font-semibold transition-colors flex items-center gap-1.5"
              >
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>{t('30 жылдык маараке барагы', 'Юбилейный раздел', '30th Anniversary Page')}</span>
              </button>
            </div>

            {/* Accreditations Trust Ribbon */}
            <div className="pt-6 border-t border-white/15 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-stone-300">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{t('Мамлекеттик институционалдык аккредитация', 'Государственная институциональная аккредитация', 'State Institutional Accreditation')}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Award className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{t('Эл аралык диплом жана ECTS кредиттик системасы', 'Международный диплом и кредиты ECTS', 'International Diploma & ECTS')}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Verified Stats Strip */}
        <div className="relative z-10 bg-[#0d1f38] border-t border-[#174A80]/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="grid grid-cols-2 md:grid-cols-6 gap-6 divide-y md:divide-y-0 md:divide-x divide-white/10">
              {TALSU_INFO.stats.map((stat, idx) => (
                <div key={idx} className={`pt-3 md:pt-0 ${idx > 0 ? 'md:pl-6' : ''}`}>
                  <div className="text-2xl sm:text-3xl font-extrabold text-amber-400 font-mono tabular-nums">
                    {stat.value}{stat.suffix}
                  </div>
                  <div className="text-xs text-stone-300 mt-1 leading-snug">
                    {stat.label[lang] || stat.label.ky}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. DIRECTOR'S WELCOME & 30-YEAR JUBILEE BANNER */}
      <section className="py-20 bg-white border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left: Director Photo Card */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden border border-amber-200 bg-stone-50 shadow-sm">
                <div className="aspect-4/3 overflow-hidden bg-stone-200">
                  <img
                    src={TALSU_IMAGES.director}
                    alt="Институттун директору, профессор Ажибаева Айнура"
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 bg-white">
                  <div className="text-xs font-bold uppercase tracking-wider text-amber-700">
                    {t('Институттун Директору', 'Директор института', 'Director of Institute')}
                  </div>
                  <h3 className="text-xl font-serif font-bold text-stone-900 mt-0.5">
                    Ажибаева Айнура
                  </h3>
                  <p className="text-xs text-stone-600 mt-1 font-medium">
                    {t('Педагогика илимдеринин доктору, профессор', 'Доктор педагогических наук, профессор', 'Doctor of Pedagogical Sciences, Professor')}
                  </p>
                  <p className="text-[11px] text-stone-400 mt-0.5">
                    {t('Ж.Баласагын атындагы Талас аймактык көп тармактуу институту', 'Таласский региональный многопрофильный институт КНУ им. Ж. Баласагына', 'Talas Regional Multidisciplinary Institute of Jusup Balasagyn KNU')}
                  </p>
                  <div className="mt-4 pt-4 border-t border-stone-100 flex items-center justify-between text-xs text-stone-600">
                    <span>{t('Кабыл алуу:', 'Приемные дни:', 'Office hours:')} Шейшемби, Бейшемби</span>
                    <button
                      onClick={() => navigate('/university/leadership')}
                      className="cursor-pointer text-[#102747] font-bold hover:underline"
                    >
                      {t('Толук маалымат →', 'Подробнее →', 'Bio →')}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Curatorial Narrative & 30-Year Jubilee Overview */}
            <div className="lg:col-span-7 space-y-5 text-stone-700 text-base leading-relaxed">
              <div className="text-xs font-bold tracking-widest uppercase text-amber-800">
                {t('КОШ КЕЛИҢИЗДЕР!', 'ДОБРО ПОЖАЛОВАТЬ!', 'WELCOME TO TALSU!')}
              </div>

              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#102747] leading-tight">
                {t(
                  '30 жылдык даңктуу салт жана заманбап билим берүүнүн туусу',
                  '30 лет академических традиций и лидерства в образовании',
                  'Three Decades of Academic Excellence and Regional Leadership'
                )}
              </h2>

              <p className="first-letter:text-5xl first-letter:font-serif first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:text-[#102747]">
                {t(
                  '1996-жылы Талас жергесинде негизделген окуу жайыбыз 30 жыл аралыгында он миңдеген кесипкөй адистерди тартуулады. Бүгүнкү күндө Жусуп Баласагын атындагы Кыргыз улуттук университетинин Талас аймактык көп тармактуу институту катары жаңы сапаттык баскычка көтөрүлүп, заманбап билимдин жана инновациянын флагманы болуп кызмат кылууда.',
                  'Основанное в 1996 году учебное заведение за 30 лет подготовило десятки тысяч специалистов. Сегодня, в статусе Таласского регионального многопрофильного института КНУ им. Ж. Баласагына, институт динамично развивается как флагман инноваций и науки.',
                  'Founded in 1996, the institution has trained tens of thousands of skilled professionals over 30 years. Today, as the Talas Regional Multidisciplinary Institute of Jusup Balasagyn KNU, it continues to lead academic innovation.'
                )}
              </p>

              <blockquote className="p-4 bg-stone-100/80 border-l-3 border-amber-500 rounded-r-lg font-serif italic text-stone-800 text-sm sm:text-base">
                «{t(
                  'Институттун башкы миссиясы — Ж.Баласагын атындагы Кыргыз улуттук университетинин алкагында заманбап педагогикалык жана илимий-технологиялык тажрыйбаларды өздөштүргөн, аймактык жана дүйнөлүк деңгээлде атаандаштыкка туруктуу кесипкөй адистерди тарбиялоо.',
                  'Главная миссия института — качественная подготовка конкурентоспособных специалистов в структуре КНУ им. Ж. Баласагына, внедрение передовых педагогических практик и поддержка регионального развития.',
                  'Our primary mission within Jusup Balasagyn KNU is to empower students through cutting-edge pedagogical methods, rigorous research, and regional economic innovation.'
                )}»
              </blockquote>

              <div className="pt-2 flex flex-wrap gap-3">
                <button
                  onClick={() => navigate('/university/history')}
                  className="cursor-pointer px-4 py-2 bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs font-semibold rounded-lg transition-colors"
                >
                  {t('Университеттин тарыхы', 'История университета', 'University History')}
                </button>
                <button
                  onClick={() => navigate('/university/mission')}
                  className="cursor-pointer px-4 py-2 bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs font-semibold rounded-lg transition-colors"
                >
                  {t('Миссия жана өнүгүү стратегиясы', 'Миссия и стратегия', 'Mission & Strategy')}
                </button>
                <button
                  onClick={() => navigate('/30-years')}
                  className="cursor-pointer px-4 py-2 bg-amber-100 hover:bg-amber-200 text-amber-900 text-xs font-bold rounded-lg transition-colors flex items-center gap-1.5"
                >
                  <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                  <span>{t('30 жылдык маараке хроникасы', 'Хроника 30-летия', '30-Year Chronology')}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FACULTIES & ACADEMIC UNITS CARDS */}
      <section className="py-20 bg-stone-50 border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <div className="text-xs font-bold tracking-widest uppercase text-amber-800 mb-2">
                {t('ФАКУЛЬТЕТТЕР ЖАНА БӨЛҮМДӨР', 'ФАКУЛЬТЕТЫ И СТРУКТУРА', 'ACADEMIC FACULTIES')}
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#102747]">
                {t('ТалМУнун окуу жана илимий түзүмү', 'Образовательные подразделения университета', 'Academic Faculties & Divisions')}
              </h2>
            </div>
            <button
              onClick={() => navigate('/education/faculties')}
              className="cursor-pointer text-xs font-bold text-[#174A80] hover:text-[#102747] flex items-center gap-1 self-start md:self-auto"
            >
              <span>{t('Бардык факультеттерди көрүү', 'Все факультеты', 'View All Faculties')}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FACULTIES.map((fac) => (
              <div
                key={fac.id}
                className="bg-white rounded-xl border border-stone-200 p-6 flex flex-col justify-between hover:shadow-md hover:border-amber-400/80 transition-all"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-stone-500 mb-2">
                    <span className="font-semibold text-amber-800">
                      {fac.establishedYear}-жылдан бери
                    </span>
                    <span className="font-mono">{fac.studentCount}+ студент</span>
                  </div>

                  <h3 className="text-lg font-serif font-bold text-stone-900 leading-snug mb-2">
                    {fac.name[lang] || fac.name.ky}
                  </h3>

                  <p className="text-xs text-stone-600 line-clamp-3 leading-relaxed mb-4">
                    {fac.description[lang] || fac.description.ky}
                  </p>

                  <div className="space-y-1.5 py-3 border-t border-stone-100 text-xs">
                    <div className="text-stone-500 font-medium">
                      {t('Декан:', 'Декан:', 'Dean:')} <span className="text-stone-800 font-semibold">{fac.dean}</span>
                    </div>
                    <div className="text-stone-500">
                      {t('Кафедралар саны:', 'Кафедр:', 'Departments:')} <span className="font-bold text-stone-800">{fac.departments.length}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-stone-100 flex items-center justify-between">
                  <button
                    onClick={() => navigate('/education/faculties')}
                    className="cursor-pointer text-xs font-bold text-[#174A80] hover:text-[#102747] flex items-center gap-1"
                  >
                    <span>{t('Кафедралар жана багыттар', 'Подробнее', 'Explore')}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => navigate('/admissions/programs')}
                    className="cursor-pointer px-3 py-1 bg-stone-100 hover:bg-[#102747] hover:text-white text-stone-800 text-xs rounded transition-colors"
                  >
                    {t('Адистиктер', 'Специальности', 'Programs')}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. LATEST NEWS & EVENTS */}
      <section className="py-20 bg-white border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <div className="text-xs font-bold tracking-widest uppercase text-amber-800 mb-2">
                {t('ЖАҢЫЛЫКТАР ЖАНА ИШ-ЧАРАЛАР', 'НОВОСТИ И СОБЫТИЯ', 'NEWS & EVENTS')}
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#102747]">
                {t('Университеттин акыркы окуялары', 'Главные события университета', 'Latest University Happenings')}
              </h2>
            </div>
            <button
              onClick={() => navigate('/news')}
              className="cursor-pointer text-xs font-bold text-[#174A80] hover:text-[#102747] flex items-center gap-1 self-start md:self-auto"
            >
              <span>{t('Бардык жаңылыктар архиви', 'Все новости', 'All News')}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {NEWS_DATA.map((article) => (
              <article
                key={article.id}
                className="bg-white rounded-xl border border-stone-200 overflow-hidden shadow-2xs hover:shadow-md hover:border-[#102747]/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="aspect-16/10 overflow-hidden bg-stone-100">
                    <img
                      src={article.image}
                      alt={article.title[lang] || article.title.ky}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-2 text-xs text-stone-500 mb-2">
                      <span className="font-semibold text-amber-800 font-mono">
                        {article.date}
                      </span>
                    </div>
                    <h3 className="text-sm font-serif font-bold text-stone-900 leading-snug line-clamp-2 mb-2">
                      {article.title[lang] || article.title.ky}
                    </h3>
                    <p className="text-xs text-stone-600 line-clamp-3 leading-relaxed">
                      {article.summary[lang] || article.summary.ky}
                    </p>
                  </div>
                </div>

                <div className="p-5 pt-0">
                  <button
                    onClick={() => navigate('/news')}
                    className="cursor-pointer text-xs font-bold text-[#102747] hover:text-amber-700 flex items-center gap-1.5 transition-colors"
                  >
                    <span>{t('Толук окуу', 'Читать далее', 'Read More')}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 5. 30TH ANNIVERSARY PROMO CALLOUT */}
      <section className="py-16 bg-gradient-to-r from-[#102747] via-[#174A80] to-[#102747] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 bg-white/5 border border-amber-400/30 rounded-2xl p-8 sm:p-12 backdrop-blur-xs">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-amber-400/20 text-amber-300 text-xs font-bold mb-3 border border-amber-400/30">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>1996–2026: 30 ЖЫЛДЫК МААРАКЕ</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-serif font-bold text-white mb-3">
                {t(
                  'ТалМУнун 30 жылдык мааракесине арналган атайын портал',
                  'Специальный раздел к 30-летию Таласского госуниверситета',
                  'Dedicated 30th Jubilee Anniversary Portal'
                )}
              </h2>
              <p className="text-xs sm:text-sm text-stone-200 leading-relaxed">
                {t(
                  'Тарыхый фотоархив, 30 жылдык маанилүү жетишкендиктер, ректордун куттуктоосу, ардагер окутуучулардын эскерүүлөрү жана каалоо-тилектер тактасы.',
                  'Хроника ключевых вех, архивные фотографии, поздравления ректора и выпускников за 30 лет созидания.',
                  'Archival photos, historic milestones from 1996 to 2026, greetings from alumni and faculty.'
                )}
              </p>
            </div>

            <div className="shrink-0 flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => navigate('/30-years')}
                className="cursor-pointer px-6 py-3.5 bg-gradient-to-r from-amber-500 to-amber-400 text-[#102747] font-bold text-xs sm:text-sm rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all flex items-center justify-center gap-2 whitespace-nowrap"
              >
                <span>{t('30 жылдык барагына өтүү', 'Перейти к 30-летию', 'Explore 30 Years')}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 6. PHOTO GALLERY PREVIEW */}
      <section className="py-20 bg-stone-50 border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <div className="text-xs font-bold tracking-widest uppercase text-amber-800 mb-2">
                {t('ФОТОГАЛЕРЕЯ', 'ФОТОГАЛЕРЕЯ', 'PHOTO GALLERY')}
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#102747]">
                {t('Кампус, илим жана студенттик көз ирмемдер', 'Кампус, наука и студенческая жизнь', 'Campus Life & Scientific Discovery')}
              </h2>
            </div>
            <button
              onClick={() => navigate('/news/gallery')}
              className="cursor-pointer text-xs font-bold text-[#174A80] hover:text-[#102747] flex items-center gap-1"
            >
              <span>{t('Толук галереяны ачуу', 'Вся галерея', 'Full Gallery')}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {GALLERY_PHOTOS.map((g, idx) => (
              <div
                key={g.id}
                onClick={() => handleOpenLightbox(idx)}
                className="group relative aspect-square rounded-xl overflow-hidden border border-stone-200 shadow-2xs hover:shadow-lg hover:border-amber-400 cursor-pointer bg-stone-200 transition-all"
                title={t('Толук экранда ачуу', 'Увеличить фото', 'Expand photo')}
              >
                <img
                  src={g.url}
                  alt={g.title[lang] || g.title.ky}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-between p-2.5 text-white">
                  <div className="self-end p-1.5 rounded-full bg-white/20 backdrop-blur-xs text-white">
                    <ZoomIn className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="inline-block px-1.5 py-0.5 rounded text-[9px] font-bold uppercase tracking-wider bg-amber-500/90 text-[#102747] mb-1">
                      {g.category}
                    </span>
                    <p className="text-[11px] font-semibold leading-tight line-clamp-2">
                      {g.title[lang] || g.title.ky}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FULL-SCREEN LIGHTBOX MODAL */}
      {activeLightboxIndex !== null && (
        <div
          onClick={handleCloseLightbox}
          className="fixed inset-0 z-50 bg-black/92 backdrop-blur-md flex items-center justify-center p-4 select-none animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
        >
          {/* Top Bar: Counter, Title, and Close Button */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="absolute top-0 inset-x-0 p-4 sm:p-6 flex items-center justify-between text-white z-20 bg-gradient-to-b from-black/75 to-transparent"
          >
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-white/15 text-amber-300 border border-white/20">
                {activeLightboxIndex + 1} / {GALLERY_PHOTOS.length}
              </span>
              <span className="hidden sm:inline text-xs text-stone-300 font-medium truncate max-w-md">
                {GALLERY_PHOTOS[activeLightboxIndex].title[lang] || GALLERY_PHOTOS[activeLightboxIndex].title.ky}
              </span>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => {
                  handleCloseLightbox();
                  navigate('/news/gallery');
                }}
                className="cursor-pointer hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-semibold text-stone-200 hover:text-white transition-colors border border-white/15"
              >
                <span>{t('Медиа архив', 'Медиа архив', 'All Photos')}</span>
                <ExternalLink className="w-3 h-3 text-amber-400" />
              </button>
              <button
                onClick={handleCloseLightbox}
                className="cursor-pointer p-2 rounded-full bg-white/15 hover:bg-white/25 text-white transition-colors"
                aria-label={t('Жабуу', 'Закрыть', 'Close')}
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Left Navigation Arrow */}
          <button
            onClick={handlePrevPhoto}
            className="cursor-pointer absolute left-3 sm:left-6 z-20 p-2.5 sm:p-3.5 rounded-full bg-black/50 hover:bg-black/80 text-white transition-all hover:scale-110 border border-white/15 active:scale-95"
            aria-label={t('Мурунку сүрөт', 'Предыдущее фото', 'Previous photo')}
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Right Navigation Arrow */}
          <button
            onClick={handleNextPhoto}
            className="cursor-pointer absolute right-3 sm:right-6 z-20 p-2.5 sm:p-3.5 rounded-full bg-black/50 hover:bg-black/80 text-white transition-all hover:scale-110 border border-white/15 active:scale-95"
            aria-label={t('Кийинки сүрөт', 'Следующее фото', 'Next photo')}
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Centered High-Resolution Image & Caption Box */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-5xl w-full max-h-[85vh] flex flex-col items-center justify-center"
          >
            <img
              src={GALLERY_PHOTOS[activeLightboxIndex].url}
              alt={GALLERY_PHOTOS[activeLightboxIndex].title[lang] || GALLERY_PHOTOS[activeLightboxIndex].title.ky}
              className="max-w-full max-h-[75vh] object-contain rounded-xl shadow-2xl border border-white/10"
            />

            {/* Bottom Caption Bar */}
            <div className="mt-3.5 px-4 py-2.5 rounded-xl bg-black/65 backdrop-blur-sm border border-white/10 text-center max-w-2xl text-white">
              <div className="text-xs sm:text-sm font-serif font-bold text-amber-300">
                {GALLERY_PHOTOS[activeLightboxIndex].title[lang] || GALLERY_PHOTOS[activeLightboxIndex].title.ky}
              </div>
              <div className="flex flex-wrap items-center justify-center gap-2 mt-1 text-[11px] text-stone-300">
                <span className="uppercase tracking-wider font-semibold text-amber-400">ТалМУ — 30 жыл (1996–2026)</span>
                <span>·</span>
                <span className="capitalize">{GALLERY_PHOTOS[activeLightboxIndex].category}</span>
                <span>·</span>
                <span className="text-stone-400 font-mono hidden sm:inline">{t('Жебелер (← / →) же Esc баскычы', 'Стрелки (← / →) или Esc', 'Arrows (← / →) or Esc')}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
