import React, { useState, useRef, useEffect } from 'react';
import {
  Menu,
  X,
  ChevronDown,
  Search,
  Sparkles,
  Phone,
  Mail,
  MapPin,
  Globe,
  GraduationCap
} from 'lucide-react';
import { useNavigation } from '../context/NavigationContext';
import { useLanguage, Language } from '../context/LanguageContext';
import { TALSU_INFO } from '../data/talsuData';

interface MenuItem {
  title: { ky: string; ru: string; en: string };
  path: string;
  children?: { title: { ky: string; ru: string; en: string }; path: string }[];
}

export const HeaderNavbar: React.FC = () => {
  const { currentPath, navigate, setIsSearchOpen, setActiveCategoryFilter } = useNavigation();
  const { lang, setLang, t } = useLanguage();

  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileExpandedSection, setMobileExpandedSection] = useState<number | null>(null);

  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (idx: number) => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setActiveDropdown(idx);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  const navMenuItems: MenuItem[] = [
    {
      title: { ky: 'БАШКЫ БЕТ', ru: 'ГЛАВНАЯ', en: 'HOME' },
      path: '/'
    },
    {
      title: { ky: 'УНИВЕРСИТЕТ', ru: 'УНИВЕРСИТЕТ', en: 'UNIVERSITY' },
      path: '/university/about',
      children: [
        { title: { ky: 'Университет жөнүндө', ru: 'Об университете', en: 'About University' }, path: '/university/about' },
        { title: { ky: 'Университеттин тарыхы', ru: 'История университета', en: 'History of TalSU' }, path: '/university/history' },
        { title: { ky: 'Миссиясы жана стратегиясы', ru: 'Миссия и стратегия', en: 'Mission & Strategy' }, path: '/university/mission' },
        { title: { ky: 'Жетекчилик', ru: 'Руководство', en: 'Leadership' }, path: '/university/leadership' },
        { title: { ky: 'Университеттин түзүмү', ru: 'Структура университета', en: 'Structure & Units' }, path: '/university/structure' },
        { title: { ky: 'Устав жана жоболор', ru: 'Устав и положения', en: 'Charter & Regulations' }, path: '/university/charter' },
        { title: { ky: 'Байланыш маалыматтары', ru: 'Контактная информация', en: 'Contact Details' }, path: '/university/contacts' },
      ]
    },
    {
      title: { ky: 'БИЛИМ БЕРҮҮ', ru: 'ОБРАЗОВАНИЕ', en: 'ACADEMICS' },
      path: '/education/faculties',
      children: [
        { title: { ky: 'Факультеттер', ru: 'Факультеты', en: 'Faculties' }, path: '/education/faculties' },
        { title: { ky: 'Кафедралар', ru: 'Кафедры', en: 'Departments' }, path: '/education/departments' },
        { title: { ky: 'Бакалавриат', ru: 'Бакалавриат', en: 'Undergraduate' }, path: '/education/bachelor' },
        { title: { ky: 'Магистратура', ru: 'Магистратура', en: 'Master Degrees' }, path: '/education/master' },
        { title: { ky: 'Окуу программалары', ru: 'Учебные программы', en: 'Academic Programs' }, path: '/education/programs' },
        { title: { ky: 'Академиялык календарь', ru: 'Академический календарь', en: 'Academic Calendar' }, path: '/education/calendar' },
        { title: { ky: 'Окуу графиги', ru: 'График учебного процесса', en: 'Academic Timetable' }, path: '/education/schedule-plan' },
        { title: { ky: 'Окуу-усулдук иштер', ru: 'Учебно-методическая работа', en: 'Methodology & Syllabi' }, path: '/education/methodology' },
      ]
    },
    {
      title: { ky: 'ИЛИМ', ru: 'НАУКА', en: 'RESEARCH' },
      path: '/science/research',
      children: [
        { title: { ky: 'Илимий изилдөөлөр', ru: 'Научные исследования', en: 'Scientific Research' }, path: '/science/research' },
        { title: { ky: 'Илимий долбоорлор', ru: 'Научные проекты', en: 'Research Projects' }, path: '/science/projects' },
        { title: { ky: 'Конференциялар', ru: 'Конференции', en: 'Conferences' }, path: '/science/conferences' },
        { title: { ky: 'Илимий журналдар (ТалМУ Жарчысы)', ru: 'Научные журналы (Вестник)', en: 'Scientific Journals' }, path: '/science/journals' },
        { title: { ky: 'Жарыяланган эмгектер', ru: 'Публикации', en: 'Publications' }, path: '/science/publications' },
      ]
    },
    {
      title: { ky: 'АБИТУРИЕНТ', ru: 'АБИТУРИЕНТ', en: 'ADMISSIONS' },
      path: '/admissions/rules',
      children: [
        { title: { ky: 'Кабыл алуу эрежелери', ru: 'Правила приема', en: 'Admission Rules' }, path: '/admissions/rules' },
        { title: { ky: 'Багыттар жана адистиктер', ru: 'Направления и специальности', en: 'Majors & Specialties' }, path: '/admissions/programs' },
        { title: { ky: 'Кабыл алуу комиссиясы', ru: 'Приемная комиссия', en: 'Admissions Office' }, path: '/admissions/committee' },
        { title: { ky: 'Контракттык төлөмдөр', ru: 'Стоимость обучения', en: 'Tuition Fees' }, path: '/admissions/tuition' },
        { title: { ky: 'Көп берилүүчү суроолор', ru: 'Частые вопросы (FAQ)', en: 'Admissions FAQ' }, path: '/admissions/faq' },
      ]
    },
    {
      title: { ky: 'СТУДЕНТТЕРГЕ', ru: 'СТУДЕНТАМ', en: 'STUDENTS' },
      path: '/students/life',
      children: [
        { title: { ky: 'Студенттик жашоо', ru: 'Студенческая жизнь', en: 'Student Life' }, path: '/students/life' },
        { title: { ky: 'Сабактардын жадыбалы', ru: 'Расписание занятий', en: 'Timetable' }, path: '/students/schedule' },
        { title: { ky: 'Электрондук китепкана', ru: 'Электронная библиотека', en: 'Digital Library' }, path: '/students/library' },
        { title: { ky: 'Стипендиялар', ru: 'Стипендии', en: 'Scholarships' }, path: '/students/scholarships' },
        { title: { ky: 'Студенттик кеңеш', ru: 'Студенческий совет', en: 'Student Council' }, path: '/students/council' },
        { title: { ky: 'Практика жана жумушка орношуу', ru: 'Практика и карьера', en: 'Career & Internships' }, path: '/students/career' },
      ]
    },
    {
      title: { ky: 'ЭЛ АРАЛЫК БАЙЛАНЫШТАР', ru: 'МЕЖДУНАРОДНЫЕ СВЯЗИ', en: 'INTERNATIONAL' },
      path: '/international/cooperation',
      children: [
        { title: { ky: 'Эл аралык кызматташтык', ru: 'Международное сотрудничество', en: 'International Cooperation' }, path: '/international/cooperation' },
        { title: { ky: 'Өнөктөш университеттер', ru: 'Вузы-партнеры', en: 'Partner Universities' }, path: '/international/partners' },
        { title: { ky: 'Академиялык мобилдүүлүк', ru: 'Академическая мобильность', en: 'Academic Mobility' }, path: '/international/mobility' },
        { title: { ky: 'Эл аралык долбоорлор', ru: 'Международные проекты', en: 'Global Grants' }, path: '/international/projects' },
      ]
    },
    {
      title: { ky: 'ЖАҢЫЛЫКТАР', ru: 'НОВОСТИ', en: 'NEWS' },
      path: '/news',
      children: [
        { title: { ky: 'Университет жаңылыктары', ru: 'Новости университета', en: 'University News' }, path: '/news?cat=university' },
        { title: { ky: 'Жарыялар', ru: 'Объявления', en: 'Announcements' }, path: '/news?cat=announcements' },
        { title: { ky: 'Иш-чаралар', ru: 'События', en: 'Events' }, path: '/news?cat=events' },
        { title: { ky: 'Фотогалерея', ru: 'Фотогалерея', en: 'Photo Gallery' }, path: '/news/gallery' },
        { title: { ky: 'Видеоархив', ru: 'Видеоархив', en: 'Video Archive' }, path: '/news/video' },
      ]
    },
    {
      title: { ky: 'БАЙЛАНЫШ', ru: 'КОНТАКТЫ', en: 'CONTACT' },
      path: '/contact'
    }
  ];

  return (
    <header className="sticky top-0 z-40 bg-white shadow-xs">
      {/* 1. TOP UTILITY BAR (Navy Blue) */}
      <div className="bg-[#102747] text-stone-200 text-xs border-b border-[#174A80]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-between">
          {/* Left: Address & Contacts */}
          <div className="flex items-center gap-6">
            <button
              onClick={() => navigate('/contact')}
              className="cursor-pointer flex items-center gap-1.5 hover:text-amber-300 transition-colors text-left"
            >
              <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span className="hidden sm:inline text-stone-300">
                {t('Талас шаары, К. Нуржанов көч. 25', 'г. Талас, ул. К. Нуржанова 25', '25 K. Nurzhanov St, Talas')}
              </span>
              <span className="sm:hidden text-stone-300">Талас, ТалМУ</span>
            </button>

            <div className="hidden md:flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <a href="tel:+996342252015" className="hover:text-white transition-colors font-mono">
                +996 (3422) 5-20-15
              </a>
            </div>

            <div className="hidden lg:flex items-center gap-2">
              <Mail className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <a href="mailto:info@talsu.kg" className="hover:text-white transition-colors">
                info@talsu.kg
              </a>
            </div>
          </div>

          {/* Right: 30-Year Celebration Badge & Language Switcher */}
          <div className="flex items-center gap-4 sm:gap-6">
            {/* 30th Anniversary Link Banner */}
            <button
              onClick={() => navigate('/30-years')}
              className="cursor-pointer group flex items-center gap-1.5 py-0.5 px-2.5 rounded bg-amber-500/15 hover:bg-amber-500/25 border border-amber-400/40 text-amber-300 hover:text-amber-200 transition-all text-[11px] font-bold"
            >
              <Sparkles className="w-3 h-3 text-amber-400 group-hover:rotate-12 transition-transform" />
              <span className="hidden sm:inline">ТАЛМУ — 30 ЖЫЛ!</span>
              <span className="font-mono text-amber-400">1996–2026</span>
            </button>

            {/* Language Switcher */}
            <div className="flex items-center gap-1 text-[11px] font-semibold text-stone-300">
              <Globe className="w-3.5 h-3.5 text-stone-400" />
              <button
                onClick={() => setLang('ky')}
                className={`px-1.5 py-0.5 rounded transition-colors ${
                  lang === 'ky' ? 'text-amber-300 font-bold bg-[#174A80]' : 'hover:text-white'
                }`}
              >
                КЫР
              </button>
              <span className="text-stone-500">/</span>
              <button
                onClick={() => setLang('ru')}
                className={`px-1.5 py-0.5 rounded transition-colors ${
                  lang === 'ru' ? 'text-amber-300 font-bold bg-[#174A80]' : 'hover:text-white'
                }`}
              >
                РУС
              </button>
              <span className="text-stone-500">/</span>
              <button
                onClick={() => setLang('en')}
                className={`px-1.5 py-0.5 rounded transition-colors ${
                  lang === 'en' ? 'text-amber-300 font-bold bg-[#174A80]' : 'hover:text-white'
                }`}
              >
                ENG
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 2. MAIN BRAND LOGO & ACTION BAR */}
      <div className="border-b border-stone-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between gap-6">
          {/* University Identity Brand Lockup */}
          <div
            onClick={() => navigate('/')}
            className="cursor-pointer flex items-center gap-3.5 group select-none"
          >
            {/* TalSU Round Seal Emblem */}
            <div className="w-12 h-12 rounded-full bg-[#102747] border-2 border-amber-400 text-amber-400 flex flex-col items-center justify-center font-bold text-xs tracking-tighter shadow-sm group-hover:scale-105 transition-transform shrink-0">
              <span className="text-[11px] font-black leading-none">ТАКТИ</span>
              <span className="text-[8px] font-mono font-semibold text-stone-300 mt-0.5">КУУ · 1996</span>
            </div>

            {/* University Title & 30 Year Banner */}
            <div>
              <div className="text-base sm:text-lg font-serif font-bold tracking-tight text-[#102747] group-hover:text-[#174A80] transition-colors leading-tight">
                {TALSU_INFO.name[lang] || TALSU_INFO.name.ky}
              </div>
              <div className="text-[11px] sm:text-xs text-amber-700 font-medium flex items-center gap-1.5 mt-0.5">
                <span className="font-bold text-amber-800">1996–2026</span>
                <span className="text-stone-300">·</span>
                <span>{TALSU_INFO.anniversarySlogan[lang] || TALSU_INFO.anniversarySlogan.ky}</span>
              </div>
            </div>
          </div>

          {/* Right Header Controls: Search & Primary Action */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Quick Search Button */}
            <button
              onClick={() => setIsSearchOpen(true)}
              className="cursor-pointer p-2.5 rounded-lg border border-stone-200 text-stone-600 hover:text-[#102747] hover:border-stone-400 hover:bg-stone-50 transition-all flex items-center gap-2"
              title={t('Порталдан издөө', 'Поиск по сайту', 'Search website')}
            >
              <Search className="w-4 h-4 text-stone-500" />
              <span className="text-xs font-semibold hidden md:inline">{t('Издөө...', 'Поиск...', 'Search...')}</span>
            </button>

            {/* 30th Anniversary Special Gold CTA */}
            <button
              onClick={() => navigate('/30-years')}
              className="cursor-pointer hidden lg:flex items-center gap-2 px-3.5 py-2.5 rounded-lg bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 text-[#102747] font-bold text-xs shadow-xs hover:shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all border border-amber-300"
            >
              <Sparkles className="w-4 h-4 text-[#102747]" />
              <span>{t('30 жылдык маараке', '30-летний юбилей', '30th Anniversary')}</span>
            </button>

            {/* Admissions Application CTA */}
            <button
              onClick={() => navigate('/admissions/rules')}
              className="cursor-pointer px-4.5 py-2.5 text-xs font-bold text-white bg-[#102747] hover:bg-[#174A80] rounded-lg transition-all shadow-xs whitespace-nowrap"
            >
              {t('Абитуриент-2026', 'Абитуриент-2026', 'Apply 2026')}
            </button>

            {/* Mobile Menu Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 text-stone-700 hover:text-[#102747] rounded-lg hover:bg-stone-100 cursor-pointer"
              aria-label="Меню"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* 3. MAIN NAVIGATION BAR (Desktop 9-Menu with Hover Dropdowns) */}
      <nav className="hidden xl:block bg-[#102747] border-b border-[#174A80]/60 select-none">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ul className="flex items-center justify-between text-xs font-bold text-white tracking-wide">
            {navMenuItems.map((item, idx) => {
              const label = item.title[lang] || item.title.ky;
              const hasChildren = item.children && item.children.length > 0;
              const isCurrent = currentPath === item.path || (item.children && item.children.some(c => c.path === currentPath));

              return (
                <li
                  key={idx}
                  className="relative group py-3.5"
                  onMouseEnter={() => handleMouseEnter(idx)}
                  onMouseLeave={handleMouseLeave}
                >
                  <button
                    onClick={() => {
                      navigate(item.path);
                      setActiveDropdown(null);
                    }}
                    className={`cursor-pointer flex items-center gap-1 hover:text-amber-300 transition-colors py-1 ${
                      isCurrent ? 'text-amber-400 border-b-2 border-amber-400' : 'text-stone-100'
                    }`}
                  >
                    <span>{label}</span>
                    {hasChildren && (
                      <ChevronDown className="w-3.5 h-3.5 text-stone-300 group-hover:rotate-180 transition-transform" />
                    )}
                  </button>

                  {/* Desktop Dropdown Menu */}
                  {hasChildren && activeDropdown === idx && (
                    <div className="absolute top-full left-0 w-64 bg-white text-stone-800 shadow-xl rounded-b-lg border border-stone-200 py-2 z-50 animate-in fade-in zoom-in-95 duration-150">
                      <div className="px-4 py-2 border-b border-stone-100 text-[11px] font-bold uppercase tracking-wider text-amber-800 bg-stone-50/50">
                        {label}
                      </div>
                      <div className="py-1">
                        {item.children?.map((child, cIdx) => (
                          <button
                            key={cIdx}
                            onClick={() => {
                              if (child.path.includes('?cat=')) {
                                const cat = child.path.split('?cat=')[1];
                                setActiveCategoryFilter(cat);
                                navigate('/news');
                              } else {
                                navigate(child.path);
                              }
                              setActiveDropdown(null);
                            }}
                            className={`cursor-pointer w-full text-left px-4 py-2 text-xs transition-colors flex items-center justify-between hover:bg-amber-50 hover:text-[#102747] ${
                              currentPath === child.path ? 'font-bold text-[#102747] bg-stone-50' : 'text-stone-700 font-medium'
                            }`}
                          >
                            <span>{child.title[lang] || child.title.ky}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </nav>

      {/* 4. MOBILE DRAWER (Full responsive collapsible accordion) */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-b border-stone-200 max-h-[80vh] overflow-y-auto px-4 py-5 shadow-lg">
          {/* 30th Anniversary Golden Mobile Banner */}
          <button
            onClick={() => {
              navigate('/30-years');
              setMobileMenuOpen(false);
            }}
            className="cursor-pointer w-full mb-4 p-3 rounded-lg bg-gradient-to-r from-[#102747] to-[#174A80] text-amber-300 flex items-center justify-between font-bold text-xs shadow-xs border border-amber-400/40"
          >
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>ТАЛМУ — 30 ЖЫЛ! (1996–2026)</span>
            </div>
            <span className="underline">{t('Ачуу', 'Открыть', 'View')} →</span>
          </button>

          {/* Menu Accordion Items */}
          <div className="space-y-1 divide-y divide-stone-100">
            {navMenuItems.map((item, idx) => {
              const label = item.title[lang] || item.title.ky;
              const hasChildren = item.children && item.children.length > 0;
              const isExpanded = mobileExpandedSection === idx;

              return (
                <div key={idx} className="pt-2">
                  <div className="flex items-center justify-between py-2.5">
                    <button
                      onClick={() => {
                        if (hasChildren) {
                          setMobileExpandedSection(isExpanded ? null : idx);
                        } else {
                          navigate(item.path);
                          setMobileMenuOpen(false);
                        }
                      }}
                      className="cursor-pointer text-sm font-bold text-stone-900 hover:text-[#102747] text-left flex-1 flex items-center justify-between"
                    >
                      <span>{label}</span>
                      {hasChildren && (
                        <ChevronDown className={`w-4 h-4 text-stone-500 transition-transform ${isExpanded ? 'rotate-180 text-[#102747]' : ''}`} />
                      )}
                    </button>
                  </div>

                  {/* Submenu links */}
                  {hasChildren && isExpanded && (
                    <div className="pl-3 pb-2 space-y-1.5 border-l-2 border-amber-400 ml-1 mt-1">
                      {item.children?.map((child, cIdx) => (
                        <button
                          key={cIdx}
                          onClick={() => {
                            if (child.path.includes('?cat=')) {
                              const cat = child.path.split('?cat=')[1];
                              setActiveCategoryFilter(cat);
                              navigate('/news');
                            } else {
                              navigate(child.path);
                            }
                            setMobileMenuOpen(false);
                          }}
                          className="cursor-pointer block w-full text-left py-1.5 text-xs text-stone-600 hover:text-[#102747] font-medium"
                        >
                          {child.title[lang] || child.title.ky}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="pt-5 mt-4 border-t border-stone-200">
            <button
              onClick={() => {
                navigate('/admissions/rules');
                setMobileMenuOpen(false);
              }}
              className="w-full py-2.5 text-center text-xs font-bold text-white bg-[#102747] hover:bg-[#174A80] rounded-lg shadow-xs"
            >
              {t('Абитуриент-2026: Кабыл алуу', 'Поступление 2026', 'Admissions 2026')}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
