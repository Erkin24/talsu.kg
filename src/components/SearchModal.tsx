import React, { useState, useMemo } from 'react';
import { Search, X, BookOpen, GraduationCap, Building2, Newspaper, Clock, ArrowRight } from 'lucide-react';
import { useNavigation } from '../context/NavigationContext';
import { useLanguage } from '../context/LanguageContext';
import { FACULTIES, PROGRAMS_LIST, NEWS_DATA, ANNIVERSARY_MILESTONES, TALSU_INFO } from '../data/talsuData';

export const SearchModal: React.FC = () => {
  const { isSearchOpen, setIsSearchOpen, navigate } = useNavigation();
  const { lang, t } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');

  const searchResults = useMemo(() => {
    const q = searchTerm.trim().toLowerCase();
    if (!q || q.length < 2) return [];

    const results: {
      id: string;
      title: string;
      subtitle: string;
      type: 'page' | 'program' | 'faculty' | 'news' | 'anniversary';
      path: string;
    }[] = [];

    // Search Programs
    PROGRAMS_LIST.forEach((prog) => {
      const title = prog.title[lang] || prog.title.ky;
      const desc = prog.description[lang] || prog.description.ky;
      if (title.toLowerCase().includes(q) || prog.code.includes(q) || desc.toLowerCase().includes(q)) {
        results.push({
          id: prog.id,
          title: `[${prog.code}] ${title}`,
          subtitle: `${prog.duration} · ${prog.tuitionSom.toLocaleString()} сом`,
          type: 'program',
          path: '/admissions/programs'
        });
      }
    });

    // Search Faculties
    FACULTIES.forEach((fac) => {
      const name = fac.name[lang] || fac.name.ky;
      const desc = fac.description[lang] || fac.description.ky;
      if (name.toLowerCase().includes(q) || desc.toLowerCase().includes(q)) {
        results.push({
          id: fac.id,
          title: name,
          subtitle: `${fac.deanTitle} ${fac.dean}`,
          type: 'faculty',
          path: '/education/faculties'
        });
      }
    });

    // Search News
    NEWS_DATA.forEach((item) => {
      const title = item.title[lang] || item.title.ky;
      const sum = item.summary[lang] || item.summary.ky;
      if (title.toLowerCase().includes(q) || sum.toLowerCase().includes(q)) {
        results.push({
          id: item.id,
          title: title,
          subtitle: item.date,
          type: 'news',
          path: '/news'
        });
      }
    });

    // Search 30 Years Milestones
    ANNIVERSARY_MILESTONES.forEach((m) => {
      const title = m.title[lang] || m.title.ky;
      const desc = m.description[lang] || m.description.ky;
      if (title.toLowerCase().includes(q) || desc.toLowerCase().includes(q) || String(m.year).includes(q)) {
        results.push({
          id: `m-${m.year}`,
          title: `${m.year}-жыл: ${title}`,
          subtitle: desc.slice(0, 80) + '...',
          type: 'anniversary',
          path: '/30-years'
        });
      }
    });

    // Quick direct pages matching
    const pages = [
      { name: t('Университет жөнүндө', 'Об университете', 'About University'), path: '/university/about' },
      { name: t('Университеттин тарыхы', 'История университета', 'History'), path: '/university/history' },
      { name: t('Жетекчилик', 'Руководство', 'Leadership'), path: '/university/leadership' },
      { name: t('Кабыл алуу эрежелери', 'Правила приема', 'Admission Rules'), path: '/admissions/rules' },
      { name: t('Контракт акысы жана жеңилдиктер', 'Стоимость и льготы', 'Tuition Fees'), path: '/admissions/tuition' },
      { name: t('Сабактардын жадыбалы', 'Расписание занятий', 'Timetable'), path: '/students/schedule' },
      { name: t('Электрондук китепкана', 'Электронная библиотека', 'Library'), path: '/students/library' },
      { name: t('30 жылдык маараке (1996–2026)', '30-летний юбилей', '30th Anniversary'), path: '/30-years' },
      { name: t('Байланыш жана дарек', 'Контакты и адрес', 'Contacts'), path: '/contact' },
    ];

    pages.forEach((p, idx) => {
      if (p.name.toLowerCase().includes(q)) {
        results.push({
          id: `p-${idx}`,
          title: p.name,
          subtitle: t('Университеттин расмий бөлүмү', 'Официальный раздел', 'Official Section'),
          type: 'page',
          path: p.path
        });
      }
    });

    return results;
  }, [searchTerm, lang, t]);

  if (!isSearchOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-start justify-center pt-16 sm:pt-24 px-4">
      <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full border border-stone-200 overflow-hidden animate-in fade-in zoom-in-95 duration-150">
        {/* Search Input Bar */}
        <div className="p-4 sm:p-5 border-b border-stone-200 flex items-center gap-3">
          <Search className="w-5 h-5 text-stone-400 shrink-0" />
          <input
            type="text"
            autoFocus
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder={t(
              'ТалМУ порталы боюнча издөө (адистиктер, жетекчилик, жаңылыктар, 30 жылдык)...',
              'Поиск по сайту ТалГУ (специальности, факультеты, новости, 30-летие)...',
              'Search TalSU portal (majors, faculties, news, 30th anniversary)...'
            )}
            className="w-full text-sm sm:text-base text-stone-900 placeholder:text-stone-400 focus:outline-hidden"
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm('')}
              className="p-1 text-stone-400 hover:text-stone-700 text-xs font-semibold cursor-pointer"
            >
              {t('Тазалоо', 'Очистить', 'Clear')}
            </button>
          )}
          <button
            onClick={() => setIsSearchOpen(false)}
            className="p-1.5 rounded-md text-stone-400 hover:text-stone-800 hover:bg-stone-100 cursor-pointer"
            aria-label="Жабуу"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results Area */}
        <div className="max-h-96 overflow-y-auto p-4 divide-y divide-stone-100">
          {searchTerm.trim().length >= 2 ? (
            searchResults.length > 0 ? (
              searchResults.map((res) => (
                <div
                  key={res.id}
                  onClick={() => {
                    navigate(res.path);
                    setIsSearchOpen(false);
                    setSearchTerm('');
                  }}
                  className="py-3 px-3 hover:bg-stone-50 rounded-lg cursor-pointer transition-colors flex items-center justify-between group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-md bg-stone-100 text-stone-700 flex items-center justify-center shrink-0 group-hover:bg-[#102747] group-hover:text-amber-400 transition-colors">
                      {res.type === 'program' && <GraduationCap className="w-4 h-4" />}
                      {res.type === 'faculty' && <Building2 className="w-4 h-4" />}
                      {res.type === 'news' && <Newspaper className="w-4 h-4" />}
                      {res.type === 'anniversary' && <Clock className="w-4 h-4" />}
                      {res.type === 'page' && <BookOpen className="w-4 h-4" />}
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-stone-900 group-hover:text-[#102747] transition-colors">
                        {res.title}
                      </div>
                      <div className="text-xs text-stone-500 mt-0.5">
                        {res.subtitle}
                      </div>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-stone-400 group-hover:text-[#102747] group-hover:translate-x-1 transition-all shrink-0" />
                </div>
              ))
            ) : (
              <div className="py-8 text-center text-xs text-stone-500">
                {t('Сиздин сурооңуз боюнча эч нерсе табылган жок.', 'По вашему запросу ничего не найдено.', 'No matching results found.')}
              </div>
            )
          ) : (
            <div className="py-6 px-2">
              <div className="text-xs font-bold uppercase tracking-wider text-stone-400 mb-3">
                {t('Көп изделген багыттар:', 'Популярные разделы:', 'Quick Suggestions:')}
              </div>
              <div className="flex flex-wrap gap-2">
                {[
                  { name: t('30 жылдык маараке', '30-летие', '30th Anniversary'), path: '/30-years' },
                  { name: t('Программалык камсыздоо (IT)', 'Программная инженерия', 'Software Engineering'), path: '/admissions/programs' },
                  { name: t('Юриспруденция', 'Юриспруденция', 'Law'), path: '/admissions/programs' },
                  { name: t('Кабыл алуу эрежелери 2026', 'Прием 2026', 'Admissions 2026'), path: '/admissions/rules' },
                  { name: t('Контракт акысы', 'Контракт', 'Tuition'), path: '/admissions/tuition' },
                  { name: t('Ректорат жана жетекчилик', 'Ректорат', 'Leadership'), path: '/university/leadership' },
                ].map((s, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      navigate(s.path);
                      setIsSearchOpen(false);
                    }}
                    className="cursor-pointer px-3 py-1.5 bg-stone-100 hover:bg-[#102747] hover:text-white rounded-md text-xs font-medium text-stone-700 transition-colors"
                  >
                    {s.name}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer info bar */}
        <div className="p-3 bg-stone-50 border-t border-stone-200 text-center text-[11px] text-stone-500">
          {t('Жыйынтыкка өтүү үчүн үстүнөн басыңыз', 'Нажмите на результат для перехода', 'Click on any result to navigate')}
        </div>
      </div>
    </div>
  );
};
