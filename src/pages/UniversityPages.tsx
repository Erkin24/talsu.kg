import React, { useState } from 'react';
import {
  Building,
  Award,
  Users,
  ShieldCheck,
  FileText,
  Phone,
  Mail,
  MapPin,
  Clock,
  CheckCircle2,
  Calendar,
  Sparkles,
  ArrowRight,
  Download
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useNavigation } from '../context/NavigationContext';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { LEADERSHIP, FACULTIES, TALSU_INFO, TALSU_IMAGES } from '../data/talsuData';

export const UniversityPages: React.FC = () => {
  const { lang, t } = useLanguage();
  const { currentPath, navigate } = useNavigation();
  const [downloadToast, setDownloadToast] = useState<string | null>(null);

  const triggerDownload = (docName: string) => {
    setDownloadToast(docName);
    setTimeout(() => {
      setDownloadToast(null);
    }, 3000);
  };

  const isSpecificSubpage = [
    '/university/history',
    '/university/mission',
    '/university/leadership',
    '/university/structure',
    '/university/charter',
    '/university/contacts'
  ].includes(currentPath);

  return (
    <div className="bg-[#fcfbf9] min-h-screen pb-20 relative">
      <Breadcrumbs />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        {/* SUBPAGE 1: ABOUT UNIVERSITY (Default Fallback) */}
        {(!isSpecificSubpage) && (
          <div className="space-y-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7 space-y-5 text-stone-700 leading-relaxed text-base">
                <div className="text-xs font-bold uppercase tracking-wider text-amber-800">
                  {t('ТАЛАС МАМЛЕКЕТТИК УНИВЕРСИТЕТИ', 'ТАЛАССКИЙ ГОСУДАРСТВЕННЫЙ УНИВЕРСИТЕТ', 'TALAS STATE UNIVERSITY')}
                </div>
                <h2 className="text-2xl sm:text-4xl font-serif font-bold text-[#102747]">
                  {t(
                    'Талас өрөөнүндөгү классикалык жогорку билимдин туусу',
                    'Флагман классического высшего образования в Таласском регионе',
                    'The Flagship Institution of Higher Education in Talas'
                  )}
                </h2>

                <p className="first-letter:text-5xl first-letter:font-serif first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:text-[#102747]">
                  {t(
                    'Талас мамлекеттик университети (ТалМУ) — Кыргыз Республикасынын Президентинин 2000-жылдын 25-июлундагы №189 Жарлыгы менен негизделген мамлекеттик классикалык жогорку окуу жайы. Университеттин түптөлүшү 1996-жылдан башталып, быйыл өзүнүн 30 жылдык даңктуу мааракесин белгилөөдө.',
                    'Таласский государственный университет (ТалГУ) — государственный классический вуз, основанный Указом Президента Кыргызской Республики №189 от 25 июля 2000 года. Истоки университета берут начало в 1996 году, и в 2026 году вуз празднует свой 30-летний юбилей.',
                    'Talas State University (TalSU) is a public classical university founded by Presidential Decree #189 in 2000, tracing its academic roots to 1996 and celebrating 30 years of excellence in 2026.'
                  )}
                </p>

                <p>
                  {t(
                    'Университетте 4 профилдик факультет, көп тармактуу колледж, лицей жана илимий борборлор иштейт. 280ден ашуун профессордук-окутуучулук курам эмгектенип, 4500дөн ашык студент, магистрант билим алууда. Бүтүрүүчүлөргө мамлекеттик үлгүдөгү диплом берилет.',
                    'В структуре университета функционируют 4 профильных факультета, колледж, лицей и научно-исследовательские центры. Обучаются свыше 4500 студентов под руководством 280 преподавателей и ученых.',
                    'The university operates 4 academic faculties, a multidisciplinary college, lyceum, and research centers, serving over 4,500 students with 280 faculty scholars.'
                  )}
                </p>
              </div>

              <div className="lg:col-span-5">
                <div className="rounded-2xl overflow-hidden border border-stone-200 shadow-md">
                  <img
                    src={TALSU_IMAGES.campusHero}
                    alt="ТалМУ Башкы имараты"
                    className="w-full h-full object-cover"
                  />
                  <div className="p-4 bg-white border-t border-stone-200 text-xs text-stone-600">
                    <span className="font-bold text-[#102747]">ТалМУ Башкы корпусу:</span> Талас шаары, К. Нуржанов көчөсү 25
                  </div>
                </div>
              </div>
            </div>

            {/* Quick stats grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-stone-200">
              <div className="p-5 bg-white rounded-xl border border-stone-200">
                <Building className="w-6 h-6 text-amber-600 mb-2" />
                <div className="text-2xl font-bold font-mono text-[#102747]">4 Корпус</div>
                <div className="text-xs text-stone-600 mt-1">{t('Талас шаарындагы окуу корпустары', 'Учебных корпуса в г. Талас', 'Campus academic buildings')}</div>
              </div>
              <div className="p-5 bg-white rounded-xl border border-stone-200">
                <Users className="w-6 h-6 text-amber-600 mb-2" />
                <div className="text-2xl font-bold font-mono text-[#102747]">4,500+</div>
                <div className="text-xs text-stone-600 mt-1">{t('Студенттер жана магистранттар', 'Студентов и магистрантов', 'Active student community')}</div>
              </div>
              <div className="p-5 bg-white rounded-xl border border-stone-200">
                <Award className="w-6 h-6 text-amber-600 mb-2" />
                <div className="text-2xl font-bold font-mono text-[#102747]">35+</div>
                <div className="text-xs text-stone-600 mt-1">{t('Бакалавриат жана магистратура', 'Аккредитованных программ', 'Accredited degree programs')}</div>
              </div>
              <div className="p-5 bg-white rounded-xl border border-stone-200">
                <Sparkles className="w-6 h-6 text-amber-600 mb-2" />
                <div className="text-2xl font-bold font-mono text-amber-700">30 Жыл</div>
                <div className="text-xs text-stone-600 mt-1">{t('1996–2026 мааракелик тарых', 'Юбилейная история', 'Jubilee legacy')}</div>
              </div>
            </div>
          </div>
        )}

        {/* SUBPAGE 2: UNIVERSITY HISTORY */}
        {currentPath === '/university/history' && (
          <div className="space-y-8">
            <div className="max-w-3xl">
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#102747] mb-3">
                {t('Талас мамлекеттик университетинин түптөлүү тарыхы (1996–2026)', 'История становления Таласского государственного университета', 'History of Talas State University')}
              </h2>
              <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                {t(
                  '1996-жылы Талас жергесинде алгачкы университеттик филиалдар ачылгандан баштап, бүгүнкү күнгө чейинки тарыхый маалыматтар.',
                  'Архивные вехи развития университета с момента открытия первых филиалов в 1996 году до 30-летнего юбилея.',
                  'Documented archival history from the first 1996 university branches to the 30th anniversary in 2026.'
                )}
              </p>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-xl border border-stone-200 shadow-xs space-y-6 text-xs sm:text-sm text-stone-700 leading-relaxed">
              <div className="p-4 bg-amber-50 rounded-lg border border-amber-200 text-amber-900 font-medium">
                ⭐ <strong>1996-жыл:</strong> И. Арабаев атындагы КМПУнун жана Кыргыз архитектуралык-курулуш институтунун (КГУСТА) Таластагы филиалдары ачылып, алгачкы абитуриенттер кабыл алынган.
              </div>

              <div className="p-4 bg-stone-50 rounded-lg border border-stone-200">
                ⭐ <strong>1999-жыл:</strong> Кыргыз мамлекеттик улуттук университетинин (КМУУ) филиалы жана айыл чарба техникуму базага кошулуп, кесиптик орто жана жогорку билимдин фундаменталдык пайдубалы түптөлгөн.
              </div>

              <div className="p-4 bg-blue-50 rounded-lg border border-blue-200 text-blue-950 font-medium">
                ⭐ <strong>2000-жылдын 25-июлу:</strong> Кыргыз Республикасынын Президентинин №189 Жарлыгы жана Өкмөттүн токтому менен жогорудагы окуу жайлардын базасында өз алдынча <strong>Талас мамлекеттик университети (ТалМУ)</strong> расмий негизделген.
              </div>

              <div className="p-4 bg-stone-50 rounded-lg border border-stone-200">
                ⭐ <strong>2001–2016-жылдар:</strong> Профессор А.И. Жылкычиевдин жетекчилиги астында университеттин 4 окуу корпусу, жатаканасы, китепканасы жана коллежи калыптанган.
              </div>

              <div className="p-4 bg-stone-50 rounded-lg border border-stone-200">
                ⭐ <strong>2023–2025-жылдар:</strong> Техника илимдеринин доктору, профессор Ж.С. Шаршембиев жетектеп, окуу жайды санариптештирүү жана лабораторияларды жабдуу боюнча иштер аткарылган.
              </div>

              <div className="p-4 bg-emerald-50 rounded-lg border border-emerald-200 text-emerald-950 font-medium">
                ⭐ <strong>Бүгүнкү этап — ТАКТИ КУУ:</strong> Окуу жай Жусуп Баласагын атындагы Кыргыз улуттук университетинин курамындагы Талас аймактык көп тармактуу институту (ТАКТИ) болуп жаңыланып, институтка директор болуп педагогика илимдеринин доктору, профессор Ажибаева Айнура дайындалды. Институт өзүнүн 30 жылдык даңктуу тарыхы (1996–2026) менен жаңы академиялык бийиктиктерге умтулууда.
              </div>
            </div>

            <div className="pt-4 flex items-center justify-between">
              <button
                onClick={() => navigate('/30-years')}
                className="cursor-pointer px-5 py-2.5 bg-[#102747] hover:bg-[#174A80] text-amber-300 font-bold text-xs rounded-lg transition-all flex items-center gap-2"
              >
                <span>{t('30 жылдык маараке хроникасын толук көрүү', 'Смотреть хронологию 30-летия', 'View 30-Year Jubilee Chronology')}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* SUBPAGE 3: MISSION & STRATEGY */}
        {currentPath === '/university/mission' && (
          <div className="space-y-8">
            <div className="max-w-3xl">
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#102747] mb-3">
                {t('Миссиясы, баалуулуктары жана өнүгүү стратегиясы', 'Миссия, ценности и стратегия развития', 'Mission, Values & Strategic Plan')}
              </h2>
              <p className="text-xs sm:text-sm text-stone-600">
                {t('ТалМУнун 2026–2030-жылдарга карата стратегиялык максаттары жана артыкчылыктуу багыттары.', 'Стратегические приоритеты ТалГУ на 2026–2030 годы.', 'Strategic roadmap and institutional values of TalSU for 2026–2030.')}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 bg-white rounded-xl border border-stone-200 shadow-2xs">
                <div className="w-10 h-10 rounded-lg bg-blue-50 text-[#102747] flex items-center justify-center font-bold mb-4">
                  🎯
                </div>
                <h3 className="font-serif font-bold text-stone-900 text-lg mb-2">
                  {t('Миссиясы', 'Миссия', 'Mission')}
                </h3>
                <p className="text-xs text-stone-600 leading-relaxed">
                  {t(
                    'Азыркы коомдун жана эмгек рыногунун талабына жооп берген компетенттүү, атаандаштыкка жөндөмдүү, жогорку адеп-ахлактык маданияты бар адистерди даярдоо.',
                    'Подготовка компетентных, конкурентоспособных кадров с высокой культурой для современного общества и экономики.',
                    'Educating ethical, highly qualified, and globally competitive specialists who enrich society.'
                  )}
                </p>
              </div>

              <div className="p-6 bg-white rounded-xl border border-stone-200 shadow-2xs">
                <div className="w-10 h-10 rounded-lg bg-amber-50 text-amber-800 flex items-center justify-center font-bold mb-4">
                  💎
                </div>
                <h3 className="font-serif font-bold text-stone-900 text-lg mb-2">
                  {t('Баалуулуктары', 'Ценности', 'Core Values')}
                </h3>
                <ul className="text-xs text-stone-600 space-y-1.5 leading-relaxed">
                  <li>• Академиялык чынчылдык жана ачыктык</li>
                  <li>• Сапаттуу билим берүү жана инновациялар</li>
                  <li>• Студентке багытталган окутуу</li>
                  <li>• Улуттук дөөлөттөр жана Манас таануу</li>
                </ul>
              </div>

              <div className="p-6 bg-white rounded-xl border border-stone-200 shadow-2xs">
                <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-800 flex items-center justify-center font-bold mb-4">
                  🚀
                </div>
                <h3 className="font-serif font-bold text-stone-900 text-lg mb-2">
                  {t('2030 Стратегиясы', 'Стратегия 2030', 'Strategy 2030')}
                </h3>
                <p className="text-xs text-stone-600 leading-relaxed">
                  {t(
                    'Талас облусун санариптик жана агроинновациялык хабга айлантуу, жасалма интеллект лабораторияларын өндүрүш менен байланыштыруу жана эл аралык рейтингдерге кирүү.',
                    'Трансформация ТалГУ в инновационный научно-образовательный хаб с передовой IT-инфраструктурой.',
                    'Transforming TalSU into a regional innovation center with strong digital research and international recognition.'
                  )}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* SUBPAGE 4: LEADERSHIP */}
        {currentPath === '/university/leadership' && (
          <div className="space-y-8">
            <div className="max-w-3xl">
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#102747] mb-2">
                {t('Институттун жетекчилиги жана дирекциясы', 'Руководство и дирекция института', 'Institute Leadership & Directorate')}
              </h2>
              <p className="text-xs sm:text-sm text-stone-600">
                {t('Ж.Баласагын атындагы Талас аймактык көп тармактуу институтунун директору, орун басарлары жана жарандарды кабыл алуу сааттары.', 'Информация о директоре института, заместителях и часах приема граждан.', 'Executive leadership of the Institute, Director Prof. Ainura Ajibaeva, vice directors, and reception schedule.')}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {LEADERSHIP.map((leader) => (
                <div
                  key={leader.id}
                  className="bg-white rounded-xl border border-stone-200 overflow-hidden shadow-xs flex flex-col justify-between"
                >
                  <div>
                    <div className="aspect-4/3 overflow-hidden bg-stone-100">
                      <img
                        src={leader.image}
                        alt={leader.name}
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                    <div className="p-6">
                      <div className="text-xs font-bold uppercase tracking-wider text-amber-700 mb-1">
                        {leader.role[lang] || leader.role.ky}
                      </div>
                      <h3 className="text-lg font-serif font-bold text-stone-900 leading-snug">
                        {leader.name}
                      </h3>
                      <p className="text-xs text-stone-500 mt-1">
                        {leader.degree[lang] || leader.degree.ky}
                      </p>

                      <div className="mt-4 pt-4 border-t border-stone-100 space-y-2 text-xs text-stone-600">
                        <div className="flex items-center gap-2">
                          <Phone className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                          <span className="font-mono">{leader.phone}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Mail className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                          <span>{leader.email}</span>
                        </div>
                        <div className="flex items-start gap-2 pt-1 text-[11px] text-stone-500">
                          <Clock className="w-3.5 h-3.5 text-stone-400 shrink-0 mt-0.5" />
                          <span>{leader.receptionHours[lang] || leader.receptionHours.ky}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* SUBPAGE 5: STRUCTURE */}
        {currentPath === '/university/structure' && (
          <div className="space-y-8">
            <div className="max-w-3xl">
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#102747] mb-2">
                {t('Университеттин уюштуруу түзүмү', 'Организационная структура университета', 'University Organizational Structure')}
              </h2>
              <p className="text-xs sm:text-sm text-stone-600">
                {t('Ректорат, окумуштуулар кеңеши, факультеттер, колледж, бөлүмдөр жана кызматтар.', 'Ректорат, ученый совет, факультеты, колледж, центры и управления.', 'Academic senate, faculties, departments, and administrative divisions.')}
              </p>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-xl border border-stone-200 shadow-xs space-y-6">
              <div className="text-center p-4 bg-[#102747] text-white rounded-lg font-serif font-bold text-base">
                {t('ТалМУнун Окумуштуулар Кеңеши & Ректораты', 'Ученый совет и Ректорат ТалГУ', 'Academic Senate & Rectorate of TalSU')}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="p-4 bg-stone-50 rounded-lg border border-stone-200 text-center">
                  <div className="font-bold text-stone-900 text-sm mb-1">{t('Окуу-усулдук башкармалык', 'Учебно-методическое управление', 'Academic Affairs')}</div>
                  <div className="text-xs text-stone-500">Окуу пландары, ECTS, AVN</div>
                </div>
                <div className="p-4 bg-stone-50 rounded-lg border border-stone-200 text-center">
                  <div className="font-bold text-stone-900 text-sm mb-1">{t('Илимий бөлүм жана аспирантура', 'Научный отдел', 'Research Office')}</div>
                  <div className="text-xs text-stone-500">Изилдөөлөр, ТалМУ Жарчысы</div>
                </div>
                <div className="p-4 bg-stone-50 rounded-lg border border-stone-200 text-center">
                  <div className="font-bold text-stone-900 text-sm mb-1">{t('Эл аралык байланыштар бөлүмү', 'Международный отдел', 'International Office')}</div>
                  <div className="text-xs text-stone-500">Erasmus+, келишимдер</div>
                </div>
                <div className="p-4 bg-stone-50 rounded-lg border border-stone-200 text-center">
                  <div className="font-bold text-stone-900 text-sm mb-1">{t('Санариптик технологиялар борбору', 'Центр цифровых технологий', 'Digital IT Center')}</div>
                  <div className="text-xs text-stone-500">AI хаб, интернет, портал</div>
                </div>
              </div>

              <div className="pt-4 border-t border-stone-200">
                <h3 className="font-serif font-bold text-stone-900 text-base mb-3">
                  {t('Окуу бөлүмдөрү жана факультеттер:', 'Факультеты и подразделения:', 'Faculties & Academic Units:')}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-xs">
                  {FACULTIES.map((f) => (
                    <div key={f.id} className="p-3 bg-stone-50/70 border border-stone-200 rounded-md">
                      <div className="font-semibold text-stone-900">{f.name[lang] || f.name.ky}</div>
                      <div className="text-stone-500 mt-1">{f.departments.length} кафедра · Декан: {f.dean}</div>
                    </div>
                  ))}
                  <div className="p-3 bg-amber-50/70 border border-amber-200 rounded-md">
                    <div className="font-semibold text-amber-900">ТалМУнун Лицейи</div>
                    <div className="text-amber-800 mt-1">Профилдик мектептик даярдоо</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* SUBPAGE 6: CHARTER & REGULATIONS */}
        {currentPath === '/university/charter' && (
          <div className="space-y-8">
            <div className="max-w-3xl">
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#102747] mb-2">
                {t('Устав, лицензиялар жана нормативдик жоболор', 'Устав, лицензии и нормативные документы', 'Charter, Licenses & Official Regulations')}
              </h2>
              <p className="text-xs sm:text-sm text-stone-600">
                {t('Университеттин укуктук-ченемдик документтери жана мамлекеттик аккредитация сертификаттары.', 'Официальные учредительные документы, государственная лицензия и сертификаты аккредитации.', 'Official founding charter, accreditation certificates, and regulatory frameworks.')}
              </p>
            </div>

            <div className="bg-white rounded-xl border border-stone-200 divide-y divide-stone-100 shadow-xs">
              {[
                { title: 'Талас мамлекеттик университетинин Негизги Уставы (КР ББИМ бекиткен)', size: '2.4 MB', date: '2024-жыл' },
                { title: 'Мамлекеттик билим берүү ишмердүүлүгүн жүргүзүүгө Лицензия № LD180000421', size: '1.8 MB', date: 'Мөөнөтсүз' },
                { title: 'Көз карандысыз институционалдык аккредитациядан өткөндүгү жөнүндө Сертификат', size: '3.1 MB', date: '2022–2027-жж.' },
                { title: 'ТалМУнун кредиттик-модулдук (ECTS) системасы жөнүндө Жобосу', size: '1.2 MB', date: '2025-жыл' },
                { title: 'Академиялык чынчылдык жана этика Кодекси', size: '950 KB', date: '2024-жыл' },
                { title: 'Студенттик жатакананын ички тартип эрежелери жана жобосу', size: '820 KB', date: '2025-жыл' },
              ].map((doc, idx) => (
                <div key={idx} className="p-4 sm:p-5 flex items-center justify-between gap-4 hover:bg-stone-50 transition-colors">
                  <div className="flex items-center gap-3">
                    <FileText className="w-5 h-5 text-amber-600 shrink-0" />
                    <div>
                      <div className="text-sm font-semibold text-stone-900">{doc.title}</div>
                      <div className="text-xs text-stone-500 mt-0.5">{doc.date} · {doc.size} · PDF</div>
                    </div>
                  </div>
                  <button
                    onClick={() => triggerDownload(doc.title)}
                    className="cursor-pointer px-3 py-1.5 text-xs font-semibold bg-stone-100 hover:bg-[#102747] hover:text-white text-stone-700 rounded transition-colors whitespace-nowrap flex items-center gap-1.5"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>{t('Жүктөп алуу', 'Скачать PDF', 'Download')}</span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* SUBPAGE 7: CONTACT DETAILS */}
        {currentPath === '/university/contacts' && (
          <div className="space-y-8">
            <div className="max-w-3xl">
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#102747] mb-2">
                {t('Университеттин байланыш маалыматтары', 'Контакты и реквизиты университета', 'Contact Details & Directory')}
              </h2>
              <p className="text-xs sm:text-sm text-stone-600">
                {t('ТалМУнун ректораты, кабыл алуу комиссиясы, факультеттер жана корпустардын даректери.', 'Адреса учебных корпусов, телефоны деканатов и приемной комиссии.', 'Directory of campus academic buildings, deans offices, and hotline numbers.')}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl border border-stone-200 shadow-xs space-y-4 text-xs sm:text-sm">
                <h3 className="font-serif font-bold text-[#102747] text-base border-b border-stone-100 pb-2">
                  {t('Башкы корпус жана ректорат:', 'Главный корпус и ректорат:', 'Main Campus & Rectorate:')}
                </h3>
                <div className="flex items-start gap-3 text-stone-700">
                  <MapPin className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <span>{TALSU_INFO.address[lang] || TALSU_INFO.address.ky} (Почта индекси: 724200)</span>
                </div>
                <div className="flex items-center gap-3 text-stone-700">
                  <Phone className="w-4 h-4 text-amber-600 shrink-0" />
                  <a href={`tel:${TALSU_INFO.phones.reception}`} className="font-mono hover:text-[#102747]">
                    {TALSU_INFO.phones.reception} (Ректордун кабылдамасы)
                  </a>
                </div>
                <div className="flex items-center gap-3 text-stone-700">
                  <Phone className="w-4 h-4 text-amber-600 shrink-0" />
                  <a href={`tel:${TALSU_INFO.phones.admissions}`} className="font-mono hover:text-[#102747]">
                    {TALSU_INFO.phones.admissions} (Кабыл алуу комиссиясы)
                  </a>
                </div>
                <div className="flex items-center gap-3 text-stone-700">
                  <Mail className="w-4 h-4 text-amber-600 shrink-0" />
                  <a href={`mailto:${TALSU_INFO.emails.official}`} className="hover:text-[#102747]">
                    {TALSU_INFO.emails.official} / {TALSU_INFO.emails.rectorate}
                  </a>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl border border-stone-200 shadow-xs space-y-4 text-xs sm:text-sm">
                <h3 className="font-serif font-bold text-[#102747] text-base border-b border-stone-100 pb-2">
                  {t('Окуу корпустары жана жатакана:', 'Учебные корпуса и общежитие:', 'Campuses & Dormitory:')}
                </h3>
                <ul className="space-y-2 text-stone-700">
                  <li>• <strong>№1 Башкы корпус:</strong> К. Нуржанов көчөсү 25 (Ректорат, IT-факультет)</li>
                  <li>• <strong>№2 Окуу корпусу:</strong> Бердике Баатыр көчөсү 287 (Гуманитардык факультет)</li>
                  <li>• <strong>№3 Окуу корпусу:</strong> Карл Маркс көчөсү 14 (Педагогика факультети)</li>
                  <li>• <strong>№4 Окуу корпусу & Колледж:</strong> Ч. Айтматов көчөсү 241</li>
                  <li>• <strong>Студенттик жатакана:</strong> Б. Аманбаев көчөсү 18 (250 орундуу)</li>
                </ul>
                <button
                  onClick={() => navigate('/contact')}
                  className="cursor-pointer mt-2 text-xs font-bold text-[#102747] hover:underline flex items-center gap-1"
                >
                  <span>{t('Картадан көрүү жана онлайн кайрылуу →', 'Посмотреть на карте и написать обращение →', 'View Map & Send Message →')}</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Download Toast Notification */}
      {downloadToast && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-[#102747] text-white px-5 py-3 rounded-xl shadow-xl flex items-center gap-3 border border-amber-400 text-xs animate-in fade-in slide-in-from-bottom-4 duration-200">
          <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
          <span>
            {t('Документ ийгиликтүү жүктөлдү:', 'Файл успешно скачан:', 'Document downloaded successfully:')} <strong>{downloadToast}</strong>
          </span>
        </div>
      )}
    </div>
  );
};
