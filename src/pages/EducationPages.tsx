import React, { useState } from 'react';
import {
  GraduationCap,
  BookOpen,
  Calendar,
  Clock,
  Search,
  Filter,
  CheckCircle2,
  Download,
  Building2,
  FileText,
  ArrowRight
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useNavigation } from '../context/NavigationContext';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { FACULTIES, PROGRAMS_LIST, Faculty, Program } from '../data/talsuData';

export const EducationPages: React.FC = () => {
  const { lang, t } = useLanguage();
  const { currentPath, navigate } = useNavigation();

  const [degreeFilter, setDegreeFilter] = useState<'all' | 'bachelor' | 'master' | 'college'>('all');
  const [facultyFilter, setFacultyFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProgramModal, setSelectedProgramModal] = useState<Program | null>(null);
  const [downloadToast, setDownloadToast] = useState<string | null>(null);

  const triggerDownload = (docName: string) => {
    setDownloadToast(docName);
    setTimeout(() => {
      setDownloadToast(null);
    }, 3000);
  };

  const isSpecificSubpage = [
    '/education/departments',
    '/education/bachelor',
    '/education/master',
    '/education/programs',
    '/education/calendar',
    '/education/schedule-plan',
    '/education/methodology'
  ].includes(currentPath);

  const filteredPrograms = PROGRAMS_LIST.filter((p) => {
    if (degreeFilter !== 'all' && p.degree !== degreeFilter) return false;
    if (facultyFilter !== 'all' && p.facultyId !== facultyFilter) return false;
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const title = (p.title[lang] || p.title.ky).toLowerCase();
      const code = p.code.toLowerCase();
      return title.includes(q) || code.includes(q);
    }
    return true;
  });

  return (
    <div className="bg-[#fcfbf9] min-h-screen pb-20 relative">
      <Breadcrumbs />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        {/* SUBPAGE 1: FACULTIES (Default Fallback) */}
        {(!isSpecificSubpage) && (
          <div className="space-y-8">
            <div className="max-w-3xl">
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#102747] mb-2">
                {t('ТалМУнун факультеттери жана коллежи', 'Факультеты и колледж ТалГУ', 'Faculties & Vocational College')}
              </h2>
              <p className="text-xs sm:text-sm text-stone-600">
                {t('Университеттин 4 профилдик факультети, көп тармактуу коллежи жана лицейи жөнүндө кеңири маалымат.', 'Подробная информация о 4 факультетах, колледже и кафедрах университета.', 'Comprehensive information about TalSU faculties, divisions, and deaneries.')}
              </p>
            </div>

            <div className="space-y-8">
              {FACULTIES.map((fac) => (
                <div
                  key={fac.id}
                  className="bg-white rounded-xl border border-stone-200 p-6 sm:p-8 shadow-xs space-y-6"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-stone-100">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-amber-700">
                        {fac.establishedYear}-жылы негизделген · {fac.studentCount}+ студент
                      </span>
                      <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#102747] mt-1">
                        {fac.name[lang] || fac.name.ky}
                      </h3>
                    </div>
                    <div className="text-xs text-stone-600 sm:text-right">
                      <div className="font-semibold text-stone-900">{fac.dean}</div>
                      <div className="text-stone-500">{fac.deanTitle}</div>
                      <div className="text-stone-500 font-mono mt-0.5">{fac.phone}</div>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                    {fac.description[lang] || fac.description.ky}
                  </p>

                  {/* Departments List */}
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500 mb-3">
                      {t('Факультеттин курамындагы кафедралар:', 'Кафедры факультета:', 'Academic Departments:')}
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                      {fac.departments.map((dept) => (
                        <div key={dept.id} className="p-3 bg-stone-50 rounded-lg border border-stone-200">
                          <div className="font-bold text-stone-900">{dept.name[lang] || dept.name.ky}</div>
                          <div className="text-amber-800 font-medium text-[11px] mt-0.5">{t('Башчысы:', 'Зав. кафедрой:', 'Head:')} {dept.head}</div>
                          <div className="text-stone-600 mt-1 text-[11px]">{dept.description[lang] || dept.description.ky}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Programs */}
                  <div className="pt-2 flex flex-wrap items-center justify-between gap-4">
                    <div className="flex flex-wrap gap-1.5">
                      {fac.bachelorPrograms.map((prog, pIdx) => (
                        <span key={pIdx} className="text-xs bg-stone-100 text-stone-800 px-2.5 py-1 rounded-md border border-stone-200">
                          {prog}
                        </span>
                      ))}
                    </div>
                    <button
                      onClick={() => navigate('/admissions/programs')}
                      className="cursor-pointer text-xs font-bold text-[#102747] hover:underline flex items-center gap-1 shrink-0"
                    >
                      <span>{t('Адистикке тапшыруу →', 'Подать документы →', 'Apply for major →')}</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* SUBPAGE 2: DEPARTMENTS */}
        {currentPath === '/education/departments' && (
          <div className="space-y-8">
            <div className="max-w-3xl">
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#102747] mb-2">
                {t('Университеттин кафедралары', 'Кафедры университета', 'Academic Departments')}
              </h2>
              <p className="text-xs sm:text-sm text-stone-600">
                {t('ТалМУнун 14 негизги жана профилдик кафедраларынын тизмеси жана жетекчилери.', 'Список и профили 14 кафедр Таласского государственного университета.', 'Complete directory of departments, research foci, and department heads.')}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {FACULTIES.flatMap((f) => f.departments.map((d) => ({ ...d, facultyName: f.name }))).map((d) => (
                <div key={d.id} className="bg-white p-5 rounded-xl border border-stone-200 shadow-2xs space-y-2">
                  <div className="text-[11px] font-semibold text-amber-800 uppercase tracking-wider">
                    {d.facultyName[lang] || d.facultyName.ky}
                  </div>
                  <h3 className="text-base font-serif font-bold text-stone-900">
                    {d.name[lang] || d.name.ky}
                  </h3>
                  <div className="text-xs text-stone-600 font-medium">
                    {t('Кафедра башчысы:', 'Заведующий:', 'Head of Department:')} <span className="text-stone-900 font-semibold">{d.head}</span>
                  </div>
                  <p className="text-xs text-stone-600 leading-relaxed pt-1">
                    {d.description[lang] || d.description.ky}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* SUBPAGE 3: BACHELOR / MASTER / PROGRAMS */}
        {(currentPath === '/education/bachelor' ||
          currentPath === '/education/master' ||
          currentPath === '/education/programs') && (
          <div className="space-y-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div className="max-w-3xl">
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#102747] mb-2">
                  {currentPath === '/education/bachelor'
                    ? t('Бакалавриат багыттары', 'Программы бакалавриата', 'Undergraduate Programs')
                    : currentPath === '/education/master'
                    ? t('Магистратура программалары', 'Программы магистратуры', 'Graduate Master Programs')
                    : t('Окуу программаларынын каталогу', 'Каталог образовательных программ', 'Academic Programs Catalog')}
                </h2>
                <p className="text-xs sm:text-sm text-stone-600">
                  {t('Бакалавриат, магистратура жана орто кесиптик колледж программалары, контракт акысы жана карьералык мүмкүнчүлүктөр.', 'Направления подготовки бакалавров, магистров и специалистов СПО.', 'Degree majors, curriculum durations, tuition fees, and career outcomes.')}
                </p>
              </div>

              {/* Search */}
              <div className="relative w-full md:w-64">
                <Search className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={t('Адистикти издөө...', 'Поиск программы...', 'Search major...')}
                  className="w-full pl-9 pr-3 py-2 bg-white text-xs border border-stone-300 rounded-lg focus:outline-hidden focus:border-[#102747]"
                />
              </div>
            </div>

            {/* Program Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPrograms.map((p) => (
                <div
                  key={p.id}
                  className="bg-white rounded-xl border border-stone-200 p-6 flex flex-col justify-between hover:shadow-md hover:border-[#102747]/40 transition-all"
                >
                  <div>
                    <div className="flex items-center justify-between text-xs text-stone-500 mb-2">
                      <span className="font-mono font-bold text-amber-800">{p.code}</span>
                      <span className="font-semibold uppercase text-stone-600">{p.duration}</span>
                    </div>

                    <h3 className="text-base font-serif font-bold text-stone-900 leading-snug mb-2">
                      {p.title[lang] || p.title.ky}
                    </h3>

                    <p className="text-xs text-stone-600 line-clamp-3 leading-relaxed mb-4">
                      {p.description[lang] || p.description.ky}
                    </p>

                    <div className="space-y-1.5 py-3 border-y border-stone-100 text-xs">
                      <div className="flex justify-between">
                        <span className="text-stone-500">{t('Окуу акысы:', 'Контракт:', 'Tuition:')}</span>
                        <span className="font-bold text-[#102747] font-mono tabular-nums">{p.tuitionSom.toLocaleString()} сом/жыл</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-stone-500">{t('Бюджеттик орун:', 'Бюджет:', 'Budget seats:')}</span>
                        <span className="font-semibold text-emerald-700">{p.budgetSeats} орун</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 flex items-center justify-between">
                    <button
                      onClick={() => setSelectedProgramModal(p)}
                      className="cursor-pointer text-xs font-semibold text-stone-600 hover:text-[#102747]"
                    >
                      {t('Кененирээк', 'Подробнее', 'Details')}
                    </button>
                    <button
                      onClick={() => navigate('/admissions/rules')}
                      className="cursor-pointer px-3.5 py-1.5 bg-[#102747] hover:bg-[#174A80] text-white text-xs font-semibold rounded-md transition-colors"
                    >
                      {t('Арыз берүү', 'Подать заявку', 'Apply')}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* SUBPAGE 4: ACADEMIC CALENDAR & SCHEDULE PLAN */}
        {(currentPath === '/education/calendar' || currentPath === '/education/schedule-plan') && (
          <div className="space-y-8">
            <div className="max-w-3xl">
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#102747] mb-2">
                {t('2025–2026-окуу жылынын академиялык календары', 'Академический календарь на 2025–2026 уч. год', 'Academic Calendar 2025–2026')}
              </h2>
              <p className="text-xs sm:text-sm text-stone-600">
                {t('Семестрлердин мөөнөтү, экзамендик сессиялар, кышкы жана жайкы каникулдар, бүтүрүүчү курстардын мамлекеттик аттестациясы.', 'Сроки семестров, экзаменационных сессий, каникул и итоговой государственной аттестации.', 'Semester timelines, examination periods, recesses, and graduation dates.')}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Fall Semester */}
              <div className="bg-white p-6 rounded-xl border border-stone-200 shadow-xs space-y-4">
                <div className="flex items-center gap-2 pb-3 border-b border-stone-100">
                  <Calendar className="w-5 h-5 text-amber-600" />
                  <h3 className="font-serif font-bold text-stone-900 text-base">
                    {t('I Күзгү Семестр (2025)', 'I Осенний семестр (2025)', 'Fall Semester (2025)')}
                  </h3>
                </div>
                <ul className="space-y-2.5 text-xs text-stone-700">
                  <li>• <strong>1-Сентябрь:</strong> Билим күнү жана окуу жылынын башталышы</li>
                  <li>• <strong>20-25-Октябрь:</strong> 1-модулдук текшерүү жумалыгы</li>
                  <li>• <strong>8-13-Декабрь:</strong> 2-модулдук текшерүү жумалыгы</li>
                  <li>• <strong>22-Декабрь — 10-Январь:</strong> Күзгү экзамендик сессия</li>
                  <li>• <strong>12-25-Январь:</strong> Кышкы студенттик каникул (2 жума)</li>
                </ul>
              </div>

              {/* Spring Semester */}
              <div className="bg-white p-6 rounded-xl border border-stone-200 shadow-xs space-y-4">
                <div className="flex items-center gap-2 pb-3 border-b border-stone-100">
                  <Calendar className="w-5 h-5 text-amber-600" />
                  <h3 className="font-serif font-bold text-stone-900 text-base">
                    {t('II Жазгы Семестр (2026 — Мааракелик жыл)', 'II Весенний семестр (2026 — Юбилейный год)', 'Spring Semester (2026 — Jubilee Year)')}
                  </h3>
                </div>
                <ul className="space-y-2.5 text-xs text-stone-700">
                  <li>• <strong>26-Январь:</strong> Жазгы семестрдин сабактарынын башталышы</li>
                  <li>• <strong>16-21-Март:</strong> 1-модулдук текшерүү жумалыгы</li>
                  <li>• <strong>18-24-Апрель:</strong> ТалМУнун 30 жылдык мааракелик жумалыгы</li>
                  <li>• <strong>11-16-Май:</strong> 2-модулдук текшерүү</li>
                  <li>• <strong>25-Май — 20-Июнь:</strong> Жазгы экзамендик сессия</li>
                  <li>• <strong>1-Июль — 31-Август:</strong> Жайкы каникул</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* SUBPAGE 5: METHODOLOGY */}
        {currentPath === '/education/methodology' && (
          <div className="space-y-8">
            <div className="max-w-3xl">
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#102747] mb-2">
                {t('Окуу-усулдук комплекстер жана силлабустар', 'Учебно-методическая работа и силлабусы', 'Curriculum Methodology & Syllabi')}
              </h2>
              <p className="text-xs sm:text-sm text-stone-600">
                {t('Окутуучулардын усулдук колдонмолору, окуу пландары жана Болон системасы боюнча силлабустар.', 'Учебно-методические материалы, рабочие программы дисциплин и силлабусы.', 'Course specifications, pedagogical syllabi, and competency frameworks.')}
              </p>
            </div>

            <div className="bg-white rounded-xl border border-stone-200 divide-y divide-stone-100">
              {[
                { name: 'Кыргыз тилин ЖОЖдо окутуунун заманбап усулдары (ОУК)', author: 'Проф. Э.К. Мамбеталиев', faculty: 'Гуманитардык факультет', size: '3.4 MB' },
                { name: 'Программалык камсыздоо инженериясы: Силлабус жана практикалык тапшырмалар', author: 'Доц. Т.С. Жумабеков', faculty: 'IT-факультет', size: '4.8 MB' },
                { name: 'Жарандык укук боюнча кейс-стади жана практикалык колдонмо', author: 'Доц. М.А. Эгембердиев', faculty: 'Юриспруденция', size: '5.1 MB' },
                { name: 'Талас өрөөнүнүн агротехнологиялары боюнча усулдук көрсөтмө', author: 'Доц. К.М. Жунушов', faculty: 'Агробизнес', size: '2.9 MB' },
              ].map((item, idx) => (
                <div key={idx} className="p-4 sm:p-5 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <FileText className="w-5 h-5 text-amber-600 shrink-0" />
                    <div>
                      <div className="text-sm font-semibold text-stone-900">{item.name}</div>
                      <div className="text-xs text-stone-500 mt-0.5">{item.author} · {item.faculty} · {item.size}</div>
                    </div>
                  </div>
                  <button
                    onClick={() => triggerDownload(item.name)}
                    className="cursor-pointer px-3 py-1.5 text-xs font-semibold bg-stone-100 hover:bg-[#102747] hover:text-white text-stone-700 rounded transition-colors whitespace-nowrap flex items-center gap-1.5"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>{t('Жүктөө', 'Скачать', 'Download')}</span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Program Detail Modal */}
      {selectedProgramModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-xl max-w-xl w-full p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex items-start justify-between gap-4 mb-4">
              <div>
                <span className="text-xs font-mono font-bold text-amber-800">{selectedProgramModal.code}</span>
                <h3 className="text-xl font-serif font-bold text-stone-900 mt-1">
                  {selectedProgramModal.title[lang] || selectedProgramModal.title.ky}
                </h3>
              </div>
              <button
                onClick={() => setSelectedProgramModal(null)}
                className="text-stone-400 hover:text-stone-800 p-1 cursor-pointer"
              >
                ✕
              </button>
            </div>

            <p className="text-xs sm:text-sm text-stone-700 leading-relaxed mb-6">
              {selectedProgramModal.description[lang] || selectedProgramModal.description.ky}
            </p>

            <div className="p-4 bg-stone-50 rounded-lg border border-stone-200 space-y-2 text-xs mb-6">
              <div className="flex justify-between">
                <span className="text-stone-500">{t('Окуу мөөнөтү:', 'Срок обучения:', 'Duration:')}</span>
                <span className="font-semibold text-stone-900">{selectedProgramModal.duration}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-500">{t('Контракт акысы:', 'Стоимость:', 'Tuition:')}</span>
                <span className="font-bold text-[#102747] font-mono tabular-nums">{selectedProgramModal.tuitionSom.toLocaleString()} сом / жыл</span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-500">{t('Бюджеттик гранттар:', 'Бюджетных мест:', 'Budget seats:')}</span>
                <span className="font-semibold text-emerald-700">{selectedProgramModal.budgetSeats} орун</span>
              </div>
            </div>

            <div className="mb-6">
              <div className="text-xs font-bold uppercase tracking-wider text-stone-500 mb-2">
                {t('Бүтүрүүчүлөр кайсы тармактарда иштешет:', 'Кем работают выпускники:', 'Career Outcomes:')}
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-stone-700">
                {selectedProgramModal.careers.map((c, idx) => (
                  <div key={idx} className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>{c}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-stone-200 flex justify-end gap-3">
              <button
                onClick={() => setSelectedProgramModal(null)}
                className="px-4 py-2 text-xs font-semibold text-stone-600 hover:text-stone-900 cursor-pointer"
              >
                {t('Жабуу', 'Закрыть', 'Close')}
              </button>
              <button
                onClick={() => {
                  setSelectedProgramModal(null);
                  navigate('/admissions/rules');
                }}
                className="px-5 py-2 text-xs font-bold text-white bg-[#102747] hover:bg-[#174A80] rounded-lg cursor-pointer"
              >
                {t('Бул адистикке тапшыруу', 'Подать заявку', 'Apply for this program')}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Download Toast Notification */}
      {downloadToast && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-[#102747] text-white px-5 py-3 rounded-xl shadow-xl flex items-center gap-3 border border-amber-400 text-xs animate-in fade-in slide-in-from-bottom-4 duration-200">
          <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
          <span>
            {t('Окуу-усулдук файл жүктөлдү:', 'Файл успешно скачан:', 'File downloaded successfully:')} <strong>{downloadToast}</strong>
          </span>
        </div>
      )}
    </div>
  );
};
