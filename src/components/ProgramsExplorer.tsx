import React, { useState } from 'react';
import { Search, GraduationCap, Briefcase, Clock, Coins, CheckCircle, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { SPECIALTIES, Specialty, FACULTIES } from '../data/instituteData';

interface ProgramsExplorerProps {
  onSelectProgramToApply: (programId: string) => void;
}

export const ProgramsExplorer: React.FC<ProgramsExplorerProps> = ({ onSelectProgramToApply }) => {
  const { lang, t } = useLanguage();
  const [degreeFilter, setDegreeFilter] = useState<'all' | 'bachelor' | 'college'>('all');
  const [facultyFilter, setFacultyFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedSpecialtyModal, setSelectedSpecialtyModal] = useState<Specialty | null>(null);

  const filteredSpecialties = SPECIALTIES.filter((spec) => {
    if (degreeFilter !== 'all' && spec.degree !== degreeFilter) return false;
    if (facultyFilter !== 'all' && spec.facultyId !== facultyFilter) return false;
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const name = (spec.name[lang] || spec.name.ky).toLowerCase();
      const code = spec.code.toLowerCase();
      const desc = (spec.description[lang] || spec.description.ky).toLowerCase();
      if (!name.includes(q) && !code.includes(q) && !desc.includes(q)) {
        return false;
      }
    }
    return true;
  });

  return (
    <section id="programs" className="py-20 bg-stone-50/50 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <div className="text-xs font-bold tracking-widest uppercase text-stone-500 mb-2">
              {t('БИЛИМ БЕРҮҮ БАГЫТТАРЫ', 'ОБРАЗОВАТЕЛЬНЫЕ ПРОГРАММЫ', 'ACADEMIC PROGRAMS')}
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-stone-900">
              {t('Адистиктер жана багыттар каталогу', 'Каталог специальностей и направлений', 'Majors & Specialties Catalog')}
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 mt-2 max-w-xl">
              {t(
                'Бакалавриат жана колледж деңгээлиндеги заманбап билим берүү. Бюджеттик орундар жана келишимдик негизде окутуу.',
                'Программы бакалавриата и среднего профессионального образования. Бюджетные места и гибкие условия оплаты.',
                'Bachelor degree and vocational college programs with state scholarships and career opportunities.'
              )}
            </p>
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72 shrink-0">
            <Search className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t('Адистикти издөө...', 'Поиск специальности...', 'Search programs...')}
              className="w-full pl-9 pr-4 py-2 bg-white text-xs text-stone-900 border border-stone-300 rounded-md focus:border-[#0b2545] focus:outline-hidden"
            />
          </div>
        </div>

        {/* Filters Bar: Segmented controls for degree and departments */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-4 border-b border-stone-200">
          {/* Degree Tabs (Functional buttons) */}
          <div className="flex items-center gap-1 p-1 bg-stone-200/70 rounded-md">
            <button
              onClick={() => setDegreeFilter('all')}
              className={`cursor-pointer px-3 py-1.5 text-xs font-medium rounded transition-colors whitespace-nowrap ${
                degreeFilter === 'all'
                  ? 'bg-white text-stone-900 shadow-2xs font-semibold'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              {t('Бардык адистиктер', 'Все специальности', 'All Programs')} ({SPECIALTIES.length})
            </button>
            <button
              onClick={() => setDegreeFilter('bachelor')}
              className={`cursor-pointer px-3 py-1.5 text-xs font-medium rounded transition-colors whitespace-nowrap ${
                degreeFilter === 'bachelor'
                  ? 'bg-white text-stone-900 shadow-2xs font-semibold'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              {t('Бакалавриат (ЖОЖ)', 'Бакалавриат (ВУЗ)', 'Bachelors')} (7)
            </button>
            <button
              onClick={() => setDegreeFilter('college')}
              className={`cursor-pointer px-3 py-1.5 text-xs font-medium rounded transition-colors whitespace-nowrap ${
                degreeFilter === 'college'
                  ? 'bg-white text-stone-900 shadow-2xs font-semibold'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              {t('Колледж (СПО)', 'Колледж (СПО)', 'College (Vocational)')} (2)
            </button>
          </div>

          {/* Department Selector */}
          <div className="flex items-center gap-2">
            <span className="text-xs text-stone-500 whitespace-nowrap hidden sm:inline">
              {t('Бөлүм:', 'Отделение:', 'Dept:')}
            </span>
            <select
              value={facultyFilter}
              onChange={(e) => setFacultyFilter(e.target.value)}
              aria-label={t('Бөлүм боюнча чыпкалоо', 'Фильтр по отделению', 'Filter by department')}
              className="text-xs bg-white border border-stone-300 rounded px-2.5 py-1.5 text-stone-800 focus:outline-hidden"
            >
              <option value="all">{t('Бардык бөлүмдөр', 'Все отделения', 'All Departments')}</option>
              {FACULTIES.map((fac) => (
                <option key={fac.id} value={fac.id}>
                  {fac.name[lang] || fac.name.ky}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Program Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSpecialties.map((spec) => {
            const name = spec.name[lang] || spec.name.ky;
            const desc = spec.description[lang] || spec.description.ky;
            const isCollege = spec.degree === 'college';

            return (
              <div
                key={spec.id}
                className="bg-white rounded-lg border border-stone-200 p-6 flex flex-col justify-between hover:shadow-md hover:border-[#0b2545]/40 transition-all"
              >
                <div>
                  {/* Clean unboxed metadata kicker */}
                  <div className="flex items-center gap-2 text-xs text-stone-500 mb-2">
                    <span className="font-mono text-stone-700 font-semibold">{spec.code}</span>
                    <span aria-hidden="true">·</span>
                    <span className="text-amber-800 font-medium">
                      {isCollege ? t('Колледж СПО', 'Колледж СПО', 'College') : t('Бакалавриат', 'Бакалавриат', 'Bachelor')}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span>{spec.duration}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-base sm:text-lg font-serif font-bold text-stone-900 leading-snug mb-3">
                    {name}
                  </h3>

                  <p className="text-xs text-stone-600 line-clamp-3 leading-relaxed mb-4">
                    {desc}
                  </p>

                  {/* Metrics Definitions */}
                  <div className="space-y-2 py-3 border-y border-stone-100 text-xs">
                    <div className="flex items-center justify-between text-stone-600">
                      <span>{t('Келишим акысы:', 'Стоимость контракта:', 'Tuition Fee:')}</span>
                      <span className="font-bold text-stone-900 font-mono tabular-nums">
                        {spec.contractFeeSom.toLocaleString()} {t('сом / жыл', 'сом / год', 'KGS / year')}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-stone-600">
                      <span>{t('ЖРТ босого баллы:', 'Порог ОРТ:', 'Min ORT Score:')}</span>
                      <span className="font-semibold text-stone-900 font-mono tabular-nums">
                        {spec.minOrtScore > 0 ? `${spec.minOrtScore}+ балл` : t('Аттестат сынак', 'Конкурс аттестатов', 'School diploma')}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-stone-600">
                      <span>{t('Бюджеттик орундар:', 'Бюджетных мест:', 'Budget Seats:')}</span>
                      <span className="font-semibold text-emerald-700 font-mono tabular-nums">
                        {spec.budgetSeats} {t('орун', 'мест', 'seats')}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Bottom Action Strip */}
                <div className="pt-4 flex items-center justify-between gap-3">
                  <button
                    onClick={() => setSelectedSpecialtyModal(spec)}
                    className="cursor-pointer text-xs font-semibold text-stone-600 hover:text-[#0b2545] transition-colors"
                  >
                    {t('Кененирээк маалымат', 'Подробнее', 'View Details')}
                  </button>

                  <button
                    onClick={() => onSelectProgramToApply(spec.id)}
                    className="cursor-pointer px-3.5 py-2 text-xs font-semibold bg-[#0b2545] hover:bg-[#13315c] text-white rounded transition-colors flex items-center gap-1.5"
                  >
                    <span>{t('Арыз берүү', 'Подать заявку', 'Apply')}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Empty state if search found nothing */}
        {filteredSpecialties.length === 0 && (
          <div className="text-center py-12 bg-white rounded-lg border border-stone-200">
            <GraduationCap className="w-10 h-10 text-stone-300 mx-auto mb-3" />
            <div className="text-sm font-semibold text-stone-700">
              {t('Сурооңуз боюнча эч нерсе табылган жок', 'По вашему запросу ничего не найдено', 'No programs found')}
            </div>
            <button
              onClick={() => {
                setDegreeFilter('all');
                setFacultyFilter('all');
                setSearchQuery('');
              }}
              className="mt-3 text-xs text-[#0b2545] font-semibold hover:underline cursor-pointer"
            >
              {t('Бардык чыпкаларды тазалоо', 'Сбросить фильтры', 'Reset all filters')}
            </button>
          </div>
        )}
      </div>

      {/* Program Details Modal */}
      {selectedSpecialtyModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-xl w-full p-6 sm:p-8 shadow-xl max-h-[90vh] overflow-y-auto">
            <div className="flex items-start justify-between gap-4 mb-4">
              <div>
                <span className="text-xs font-mono font-bold text-amber-700">
                  {selectedSpecialtyModal.code}
                </span>
                <h3 className="text-xl font-serif font-bold text-stone-900 mt-1">
                  {selectedSpecialtyModal.name[lang] || selectedSpecialtyModal.name.ky}
                </h3>
              </div>
              <button
                onClick={() => setSelectedSpecialtyModal(null)}
                className="text-stone-400 hover:text-stone-800 p-1 cursor-pointer"
                aria-label="Жабуу"
              >
                ✕
              </button>
            </div>

            <p className="text-xs sm:text-sm text-stone-700 leading-relaxed mb-6">
              {selectedSpecialtyModal.description[lang] || selectedSpecialtyModal.description.ky}
            </p>

            <div className="bg-stone-50 rounded p-4 space-y-2 text-xs mb-6 border border-stone-200">
              <div className="flex justify-between">
                <span className="text-stone-500">{t('Окуу мөөнөтү:', 'Срок обучения:', 'Duration:')}</span>
                <span className="font-semibold text-stone-900">{selectedSpecialtyModal.duration}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-500">{t('Келишим баасы:', 'Стоимость контракта:', 'Tuition:')}</span>
                <span className="font-bold text-[#0b2545] font-mono tabular-nums">
                  {selectedSpecialtyModal.contractFeeSom.toLocaleString()} {t('сом / жыл', 'сом / год', 'KGS/yr')}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-500">{t('Бюджеттик гранттар:', 'Бюджетные места:', 'State Grants:')}</span>
                <span className="font-semibold text-emerald-700">{selectedSpecialtyModal.budgetSeats} {t('орун', 'мест', 'seats')}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-500">{t('Окутуу форматы:', 'Формат обучения:', 'Study Mode:')}</span>
                <span className="font-semibold text-stone-800">{selectedSpecialtyModal.format}</span>
              </div>
            </div>

            <div className="mb-6">
              <div className="text-xs font-bold uppercase tracking-wider text-stone-600 mb-2">
                {t('Бүтүрүүчүнүн келечектеги кесиптери:', 'Кем работают выпускники:', 'Future Careers:')}
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-stone-700">
                {selectedSpecialtyModal.careers.map((career, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>{career}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 border-t border-stone-200 flex justify-end gap-3">
              <button
                onClick={() => setSelectedSpecialtyModal(null)}
                className="px-4 py-2 text-xs font-medium text-stone-600 hover:text-stone-900 cursor-pointer"
              >
                {t('Жабуу', 'Закрыть', 'Close')}
              </button>
              <button
                onClick={() => {
                  const id = selectedSpecialtyModal.id;
                  setSelectedSpecialtyModal(null);
                  onSelectProgramToApply(id);
                }}
                className="px-5 py-2 text-xs font-semibold text-white bg-[#0b2545] hover:bg-[#13315c] rounded cursor-pointer"
              >
                {t('Бул адистикке арыз таштоо', 'Подать заявку на специальность', 'Apply for this program')}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
