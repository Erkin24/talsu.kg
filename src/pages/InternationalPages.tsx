import React from 'react';
import {
  Globe,
  Award,
  BookOpen,
  Users,
  Building2,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useNavigation } from '../context/NavigationContext';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { PARTNERS, TALSU_IMAGES } from '../data/talsuData';

export const InternationalPages: React.FC = () => {
  const { lang, t } = useLanguage();
  const { currentPath, navigate } = useNavigation();

  const isSpecificSubpage = [
    '/international/partners',
    '/international/mobility',
    '/international/projects'
  ].includes(currentPath);

  return (
    <div className="bg-[#fcfbf9] min-h-screen pb-20">
      <Breadcrumbs />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        {/* SUBPAGE 1: OVERVIEW & COOPERATION (Default Fallback) */}
        {(!isSpecificSubpage) && (
          <div className="space-y-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7 space-y-5 text-stone-700 leading-relaxed text-base">
                <div className="text-xs font-bold uppercase tracking-wider text-amber-800">
                  {t('ЭЛ АРАЛЫК БАЙЛАНЫШТАР', 'МЕЖДУНАРОДНЫЕ СВЯЗИ', 'INTERNATIONAL RELATIONS')}
                </div>
                <h2 className="text-2xl sm:text-4xl font-serif font-bold text-[#102747]">
                  {t(
                    'ТалМУнун эл аралык аренадагы өнөктөштүгү жана дүйнөлүк интеграциясы',
                    'Международное сотрудничество и глобальная интеграция ТалГУ',
                    'Global Partnerships & International Academic Integration'
                  )}
                </h2>

                <p className="first-letter:text-5xl first-letter:font-serif first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:text-[#102747]">
                  {t(
                    'Талас мамлекеттик университети дүйнөнүн 20дан ашык алдыңкы университеттери жана эл аралык билим берүү уюмдары менен кызматташат. Студенттер жана окутуучулар Европа Биримдигинин Erasmus+, Түркиянын Mevlana программалары боюнча чет өлкөлөрдө семестрлик билим алууда.',
                    'ТалГУ активно сотрудничает с более чем 20 ведущими зарубежными университетами Германии, Турции, Казахстана, России и Китая в рамках программ Erasmus+ и академической мобильности.',
                    'TalSU partners with over 20 renowned institutions across Germany, Turkey, Kazakhstan, Russia, and China through Erasmus+ and bilateral academic agreements.'
                  )}
                </p>

                <div className="pt-2 flex flex-wrap gap-3">
                  <button
                    onClick={() => navigate('/international/partners')}
                    className="cursor-pointer px-4 py-2 bg-[#102747] text-white text-xs font-semibold rounded-lg hover:bg-[#174A80] transition-colors"
                  >
                    {t('Өнөктөш университеттердин тизмеси', 'Вузы-партнеры', 'Partner Universities')}
                  </button>
                  <button
                    onClick={() => navigate('/international/mobility')}
                    className="cursor-pointer px-4 py-2 bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs font-semibold rounded-lg transition-colors"
                  >
                    {t('Студенттик мобилдүүлүк (Erasmus+)', 'Студенческий обмен', 'Student Exchange')}
                  </button>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="rounded-2xl overflow-hidden border border-stone-200 shadow-md">
                  <img
                    src={TALSU_IMAGES.graduation}
                    alt="Эл аралык бүтүрүүчүлөр"
                    className="w-full h-full object-cover"
                  />
                  <div className="p-4 bg-white border-t border-stone-200 text-xs text-stone-600">
                    <span className="font-bold text-[#102747]">Эл аралык байланыштар бөлүмү:</span> iro.talsu@gmail.com
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* SUBPAGE 2: PARTNERS */}
        {currentPath === '/international/partners' && (
          <div className="space-y-8">
            <div className="max-w-3xl">
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#102747] mb-2">
                {t('Өнөктөш чет өлкөлүк университеттер', 'Зарубежные университеты-партнеры', 'Partner Universities')}
              </h2>
              <p className="text-xs sm:text-sm text-stone-600">
                {t('ТалМУ эки тараптуу келишимдер жана эл аралык меморандумдар аркылуу кызматташкан ЖОЖдор.', 'Университеты, с которыми заключены официальные соглашения о сотрудничестве.', 'Accredited international universities with active academic agreements and memoranda.')}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {PARTNERS.map((p) => (
                <div key={p.id} className="bg-white p-6 rounded-xl border border-stone-200 shadow-2xs space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl">{p.flag}</span>
                    <span className="text-xs font-bold text-amber-800 font-mono">{p.country}</span>
                  </div>
                  <h3 className="font-serif font-bold text-stone-900 text-base leading-snug">
                    {p.name}
                  </h3>
                  <div className="text-xs text-[#102747] font-semibold">
                    {p.program}
                  </div>
                  <p className="text-xs text-stone-600 leading-relaxed pt-1">
                    {p.scope[lang] || p.scope.ky}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* SUBPAGE 3: ACADEMIC MOBILITY (ERASMUS+) */}
        {currentPath === '/international/mobility' && (
          <div className="space-y-8">
            <div className="max-w-3xl">
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#102747] mb-2">
                {t('Академиялык мобилдүүлүк жана семестрлик алмашуу', 'Академическая мобильность (Erasmus+ и Mevlana)', 'Academic Mobility & Exchange')}
              </h2>
              <p className="text-xs sm:text-sm text-stone-600">
                {t('ТалМУнун студенттери жана окутуучулары үчүн чет өлкөлүк ЖОЖдордо гранттык негизде окуу мүмкүнчүлүктөрү.', 'Условия участия студентов и преподавателей в программах европейской мобильности.', 'Funded study semester opportunities for students and research staff abroad.')}
              </p>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-xl border border-stone-200 shadow-xs space-y-6 text-xs sm:text-sm text-stone-700 leading-relaxed">
              <h3 className="font-serif font-bold text-stone-900 text-base">
                {t('Студенттик алмашуу программасына катышуу талаптары:', 'Требования к кандидатам:', 'Eligibility Criteria:')}
              </h3>
              <ul className="space-y-2.5">
                <li>• <strong>Курс:</strong> ТалМУнун бакалавриатынын 2–3-курсунун же магистратурасынын студенттери</li>
                <li>• <strong>Академиялык жетишкендик (GPA):</strong> Орточо балл 3.5тен жогору («жакшы» жана «эң жакшы»)</li>
                <li>• <strong>Тил билүү деңгээли:</strong> Англис же немис тили B1-B2 деңгээлинде (интервью өткөрүлөт)</li>
                <li>• <strong>Гранттын шарттары:</strong> Чет өлкөдө жашоо, окуу акысы жана авиабилеттер эл аралык фонд тарабынан толук төлөнөт.</li>
              </ul>
            </div>
          </div>
        )}

        {/* SUBPAGE 4: INTERNATIONAL PROJECTS */}
        {currentPath === '/international/projects' && (
          <div className="space-y-8">
            <div className="max-w-3xl">
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#102747] mb-2">
                {t('Эл аралык гранттык долбоорлор', 'Международные грантовые программы', 'International Grants & Cooperation')}
              </h2>
              <p className="text-xs sm:text-sm text-stone-600">
                {t('Европа Биримдиги, DAAD, USAID жана KOICA фонддору менен биргеликте ишке ашырылып жаткан долбоорлор.', 'Грантовые проекты по модернизации образования и внедрению зеленых технологий.', 'Cross-border initiatives in higher education capacity building and sustainable ecology.')}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 bg-white rounded-xl border border-stone-200 shadow-2xs space-y-2 text-xs sm:text-sm">
                <span className="font-bold text-amber-800 text-xs">Европа Биримдиги (Erasmus+ CBHE)</span>
                <h3 className="font-serif font-bold text-stone-900 text-base">«AgroDigital-CA» Долбоору</h3>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Айыл чарба адистиктеринде окуган студенттерге санариптик геомаалыматтык системаларды (ГИС) жана дрондук мониторингди окутуу.
                </p>
              </div>

              <div className="p-6 bg-white rounded-xl border border-stone-200 shadow-2xs space-y-2 text-xs sm:text-sm">
                <span className="font-bold text-amber-800 text-xs">KOICA жана USAID демилгелери</span>
                <h3 className="font-serif font-bold text-stone-900 text-base">«Жаштардын санариптик көндүмдөрү»</h3>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Талас облусунун жаштары жана мектеп бүтүрүүчүлөрү үчүн IT жана программалоо боюнча акысыз сертификаттык курстар.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
