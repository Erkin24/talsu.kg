import React, { createContext, useContext, useState, useEffect } from 'react';

export interface BreadcrumbItem {
  label: {
    ky: string;
    ru: string;
    en: string;
  };
  path: string;
}

interface NavigationContextType {
  currentPath: string;
  navigate: (path: string) => void;
  breadcrumbs: BreadcrumbItem[];
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  isSearchOpen: boolean;
  setIsSearchOpen: (open: boolean) => void;
  activeCategoryFilter: string | null;
  setActiveCategoryFilter: (cat: string | null) => void;
}

const NavigationContext = createContext<NavigationContextType>({
  currentPath: '/',
  navigate: () => {},
  breadcrumbs: [],
  searchQuery: '',
  setSearchQuery: () => {},
  isSearchOpen: false,
  setIsSearchOpen: () => {},
  activeCategoryFilter: null,
  setActiveCategoryFilter: () => {},
});

// Route-to-Breadcrumbs registry
const ROUTE_LABELS: Record<string, { ky: string; ru: string; en: string }> = {
  '/': { ky: 'Башкы бет', ru: 'Главная', en: 'Home' },
  '/30-years': { ky: '30 жылдык маараке (1996–2026)', ru: '30-летний юбилей (1996–2026)', en: '30th Anniversary (1996–2026)' },

  // University
  '/university': { ky: 'Университет', ru: 'Университет', en: 'University' },
  '/university/about': { ky: 'Университет жөнүндө', ru: 'Об университете', en: 'About University' },
  '/university/history': { ky: 'Университеттин тарыхы', ru: 'История университета', en: 'History of TalSU' },
  '/university/mission': { ky: 'Миссиясы жана стратегиясы', ru: 'Миссия и стратегия', en: 'Mission & Strategy' },
  '/university/leadership': { ky: 'Жетекчилик', ru: 'Руководство', en: 'Leadership' },
  '/university/structure': { ky: 'Университеттин түзүмү', ru: 'Структура университета', en: 'Structure & Units' },
  '/university/charter': { ky: 'Устав жана жоболор', ru: 'Устав и положения', en: 'Charter & Regulations' },
  '/university/contacts': { ky: 'Байланыш маалыматтары', ru: 'Контакты', en: 'Contact Details' },

  // Education
  '/education': { ky: 'Билим берүү', ru: 'Образование', en: 'Academics' },
  '/education/faculties': { ky: 'Факультеттер', ru: 'Факультеты', en: 'Faculties' },
  '/education/departments': { ky: 'Кафедралар', ru: 'Кафедры', en: 'Academic Departments' },
  '/education/bachelor': { ky: 'Бакалавриат', ru: 'Бакалавриат', en: 'Undergraduate Programs' },
  '/education/master': { ky: 'Магистратура', ru: 'Магистратура', en: 'Graduate Master Programs' },
  '/education/programs': { ky: 'Окуу программалары', ru: 'Учебные программы', en: 'Academic Programs' },
  '/education/calendar': { ky: 'Академиялык календарь', ru: 'Академический календарь', en: 'Academic Calendar' },
  '/education/schedule-plan': { ky: 'Окуу графиги', ru: 'График учебного процесса', en: 'Curriculum Schedule' },
  '/education/methodology': { ky: 'Окуу-усулдук иштер', ru: 'Учебно-методическая работа', en: 'Methodology & Syllabi' },

  // Science
  '/science': { ky: 'Илим', ru: 'Наука', en: 'Research & Science' },
  '/science/research': { ky: 'Илимий изилдөөлөр', ru: 'Научные исследования', en: 'Scientific Research' },
  '/science/projects': { ky: 'Илимий долбоорлор', ru: 'Научные проекты', en: 'Research Projects' },
  '/science/conferences': { ky: 'Конференциялар', ru: 'Конференции', en: 'Academic Conferences' },
  '/science/journals': { ky: 'Илимий журналдар (ТалМУ Жарчысы)', ru: 'Научные журналы (Вестник)', en: 'Scientific Journals' },
  '/science/publications': { ky: 'Жарыяланган эмгектер', ru: 'Публикации ученых', en: 'Faculty Publications' },

  // Admissions
  '/admissions': { ky: 'Абитуриент', ru: 'Абитуриент', en: 'Admissions' },
  '/admissions/rules': { ky: 'Кабыл алуу эрежелери', ru: 'Правила приема', en: 'Admission Regulations' },
  '/admissions/programs': { ky: 'Багыттар жана адистиктер', ru: 'Направления и специальности', en: 'Majors & Specialties' },
  '/admissions/committee': { ky: 'Кабыл алуу комиссиясы', ru: 'Приемная комиссия', en: 'Admissions Office' },
  '/admissions/tuition': { ky: 'Контракттык төлөмдөр жана жеңилдиктер', ru: 'Стоимость обучения и льготы', en: 'Tuition Fees & Grants' },
  '/admissions/faq': { ky: 'Көп берилүүчү суроолор', ru: 'Частые вопросы (FAQ)', en: 'Admissions FAQ' },

  // Students
  '/students': { ky: 'Студенттерге', ru: 'Студентам', en: 'Students' },
  '/students/life': { ky: 'Студенттик жашоо', ru: 'Студенческая жизнь', en: 'Campus Life' },
  '/students/schedule': { ky: 'Сабактардын жадыбалы', ru: 'Расписание занятий', en: 'Timetable' },
  '/students/library': { ky: 'Электрондук китепкана', ru: 'Электронная библиотека', en: 'Digital Library' },
  '/students/scholarships': { ky: 'Стипендиялар', ru: 'Стипендии', en: 'Scholarships & Grants' },
  '/students/council': { ky: 'Студенттик кеңеш', ru: 'Студенческий совет', en: 'Student Government' },
  '/students/career': { ky: 'Практика жана жумушка орношуу', ru: 'Практика и карьера', en: 'Career & Internships' },

  // International
  '/international': { ky: 'Эл аралык байланыштар', ru: 'Международное сотрудничество', en: 'International Affairs' },
  '/international/cooperation': { ky: 'Эл аралык кызматташтык', ru: 'Международные связи', en: 'Global Cooperation' },
  '/international/partners': { ky: 'Өнөктөш университеттер', ru: 'Вузы-партнеры', en: 'Partner Universities' },
  '/international/mobility': { ky: 'Академиялык мобилдүүлүк (Erasmus+)', ru: 'Академическая мобильность', en: 'Academic Mobility' },
  '/international/projects': { ky: 'Эл аралык долбоорлор', ru: 'Международные гранты', en: 'International Grants' },

  // News
  '/news': { ky: 'Жаңылыктар', ru: 'Новости', en: 'News & Media' },
  '/news/gallery': { ky: 'Фотогалерея', ru: 'Фотогалерея', en: 'Photo Gallery' },
  '/news/video': { ky: 'Видеоархив', ru: 'Видеоархив', en: 'Video Archive' },

  // Contact
  '/contact': { ky: 'Байланыш', ru: 'Контакты', en: 'Contacts & Location' },
};

export const NavigationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    // Check if initial URL has a path or hash
    if (window.location.hash && window.location.hash.startsWith('#/')) {
      return window.location.hash.slice(1);
    }
    const path = window.location.pathname;
    return path && path !== '' ? path : '/';
  });

  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [activeCategoryFilter, setActiveCategoryFilter] = useState<string | null>(null);

  useEffect(() => {
    const handlePopState = () => {
      if (window.location.hash && window.location.hash.startsWith('#/')) {
        setCurrentPath(window.location.hash.slice(1));
      } else {
        setCurrentPath(window.location.pathname || '/');
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (path: string) => {
    // If it's an external link or anchor on page, handle accordingly
    if (path.startsWith('http://') || path.startsWith('https://') || path.startsWith('tel:') || path.startsWith('mailto:')) {
      const link = document.createElement('a');
      link.href = path;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      link.click();
      return;
    }

    // Update state and window history with hash fallback for static/dev hosting
    setCurrentPath(path);
    window.location.hash = path;
    try {
      window.history.pushState({}, '', '#' + path);
    } catch {
      // safe fallback
    }

    // Scroll smoothly to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Build breadcrumbs dynamically from currentPath
  const buildBreadcrumbs = (path: string): BreadcrumbItem[] => {
    if (path === '/') {
      return [{ label: ROUTE_LABELS['/'], path: '/' }];
    }

    const segments = path.split('/').filter(Boolean);
    const crumbs: BreadcrumbItem[] = [{ label: ROUTE_LABELS['/'], path: '/' }];

    let accumulatedPath = '';
    for (let i = 0; i < segments.length; i++) {
      accumulatedPath += `/${segments[i]}`;
      const label = ROUTE_LABELS[accumulatedPath] || {
        ky: segments[i].charAt(0).toUpperCase() + segments[i].slice(1),
        ru: segments[i].charAt(0).toUpperCase() + segments[i].slice(1),
        en: segments[i].charAt(0).toUpperCase() + segments[i].slice(1),
      };
      crumbs.push({ label, path: accumulatedPath });
    }

    return crumbs;
  };

  return (
    <NavigationContext.Provider
      value={{
        currentPath,
        navigate,
        breadcrumbs: buildBreadcrumbs(currentPath),
        searchQuery,
        setSearchQuery,
        isSearchOpen,
        setIsSearchOpen,
        activeCategoryFilter,
        setActiveCategoryFilter,
      }}
    >
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigation = () => useContext(NavigationContext);
