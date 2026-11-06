import React, { useState } from 'react';
import {
  Microscope,
  BookOpen,
  Calendar,
  FileText,
  Download,
  Award,
  Globe,
  ArrowRight,
  Sparkles,
  CheckCircle2
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useNavigation } from '../context/NavigationContext';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { TALSU_IMAGES } from '../data/talsuData';

export const SciencePages: React.FC = () => {
  const { lang, t } = useLanguage();
  const { currentPath, navigate } = useNavigation();
  const [downloadToast, setDownloadToast] = useState<string | null>(null);

  const triggerToast = (msg: string) => {
    setDownloadToast(msg);
    setTimeout(() => {
      setDownloadToast(null);
    }, 3000);
  };

  const isSpecificSubpage = [
    '/science/projects',
    '/science/conferences',
    '/science/journals',
    '/science/publications'
  ].includes(currentPath);

  return (
    <div className="bg-[#fcfbf9] min-h-screen pb-20 relative">
      <Breadcrumbs />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        {/* SUBPAGE 1: SCIENTIFIC RESEARCH & OVERVIEW (Default Fallback) */}
        {(!isSpecificSubpage) && (
          <div className="space-y-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7 space-y-5 text-stone-700 leading-relaxed text-base">
                <div className="text-xs font-bold uppercase tracking-wider text-amber-800">
                  {t('ИЛИМ ЖАНА ИННОВАЦИЯЛАР', 'НАУКА И ИННОВАЦИИ', 'RESEARCH & INNOVATION')}
                </div>
                <h2 className="text-2xl sm:text-4xl font-serif font-bold text-[#102747]">
                  {t(
                    'Талас аймагынын өнүгүүсүнө кызмат кылган фундаменталдык жана колдонмо илим',
                    'Фундаментальная и прикладная наука на службе развития региона',
                    'Fundamental & Applied Research Driving Regional Progress'
                  )}
                </h2>

                <p className="first-letter:text-5xl first-letter:font-serif first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:text-[#102747]">
                  {t(
                    'Талас мамлекеттик университетинин илимий изилдөө ишмердүүлүгү аймактык актуалдуу маселелерди чечүүгө багытталган. Университетте 12 илимдин доктору, 65тен ашуун илимдин кандидаты жана ондогон жаш окумуштуулар эмгектенет.',
                    'Научно-исследовательская деятельность ТалГУ сфокусирована на решении актуальных социально-экономических, экологических и технологических задач Таласской долины.',
                    'Research at TalSU integrates regional economic priorities, sustainable agriculture, environmental bio-monitoring, and applied software engineering.'
                  )}
                </p>

                <div className="space-y-3 pt-2">
                  <div className="p-3 bg-white rounded-lg border border-stone-200">
                    <span className="font-bold text-stone-900">1. IT жана жасалма интеллект:</span> Региондун билим берүү мекемелерин жана чакан бизнести санариптештирүү алгоритмдери.
                  </div>
                  <div className="p-3 bg-white rounded-lg border border-stone-200">
                    <span className="font-bold text-stone-900">2. Агробиология жана экология:</span> Талас өрөөнүнүн төө буурчак сортторунун түшүмдүүлүгүн арттыруу жана органикалык жер семирткичтерди өндүрүү.
                  </div>
                  <div className="p-3 bg-white rounded-lg border border-stone-200">
                    <span className="font-bold text-stone-900">3. Гуманитардык жана Манас таануу:</span> Талас салтындагы Манас эпосун, улуттук фольклорду жана Ч. Айтматовдун адабий мурасын изилдөө.
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="rounded-2xl overflow-hidden border border-stone-200 shadow-md">
                  <img
                    src={TALSU_IMAGES.scienceLab}
                    alt="ТалМУ Илимий лабораториясы"
                    className="w-full h-full object-cover"
                  />
                  <div className="p-4 bg-white border-t border-stone-200 text-xs text-stone-600">
                    <span className="font-bold text-[#102747]">ТалМУ Инновациялык лабораториясы:</span> Окумуштуулар жана студенттер изилдөө жүргүзүүдө
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* SUBPAGE 2: RESEARCH PROJECTS */}
        {currentPath === '/science/projects' && (
          <div className="space-y-8">
            <div className="max-w-3xl">
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#102747] mb-2">
                {t('Илимий гранттык долбоорлор', 'Научно-исследовательские проекты', 'Research Projects & Grants')}
              </h2>
              <p className="text-xs sm:text-sm text-stone-600">
                {t('Кыргыз Республикасынын Билим берүү жана илим министрлиги жана эл аралык фонддор тарабынан каржыланган изилдөө долбоорлору.', 'Проекты, финансируемые Министерством образования и науки КР и международными партнерами.', 'State-funded and international research programs addressing environmental and technical innovations.')}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 bg-white rounded-xl border border-stone-200 shadow-2xs space-y-3">
                <div className="text-xs font-bold text-amber-800 uppercase tracking-wide">
                  КР ББИМ гранты (2024–2026)
                </div>
                <h3 className="font-serif font-bold text-stone-900 text-lg">
                  «Талас өрөөнүндөгү органикалык төө буурчактын селекциялык сортторун климаттык өзгөрүүлөргө ылайыкташтыруу»
                </h3>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Илимий жетекчиси: доцент К.М. Жунушов. Долбоор суу ресурстарын үнөмдөө жана түшүмдүүлүктү 25%га жогорулатуу максатын көздөйт.
                </p>
              </div>

              <div className="p-6 bg-white rounded-xl border border-stone-200 shadow-2xs space-y-3">
                <div className="text-xs font-bold text-amber-800 uppercase tracking-wide">
                  Erasmus+ долбоору (2023–2026)
                </div>
                <h3 className="font-serif font-bold text-stone-900 text-lg">
                  «Борбордук Азиядагы университеттерде санариптик айыл чарба билимдерин өнүктүрүү»
                </h3>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Германиянын HSWT университети менен биргеликте айыл чарбасында дрондорду, сенсорлорду жана маалыматтар аналитикасын колдонуу лабораториясы түзүлгөн.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* SUBPAGE 3: CONFERENCES */}
        {currentPath === '/science/conferences' && (
          <div className="space-y-8">
            <div className="max-w-3xl">
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#102747] mb-2">
                {t('Илимий конференциялар жана симпозиумдар', 'Научные конференции и симпозиумы', 'Academic Conferences & Symposia')}
              </h2>
              <p className="text-xs sm:text-sm text-stone-600">
                {t('ТалМУнун 30 жылдыгына арналган эл аралык жана республикалык илимий-практикалык конференциялар.', 'Международные и республиканские конференции, приуроченные к 30-летию университета.', 'Schedule of jubilee scientific conferences and call for academic papers.')}
              </p>
            </div>

            <div className="space-y-4">
              <div className="p-6 bg-white rounded-xl border border-amber-300 shadow-xs space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-amber-800">
                  <Sparkles className="w-4 h-4 text-amber-500" />
                  <span>ТАЛМУнун 30 ЖЫЛДЫГЫНА АРНАЛГАН НЕГИЗГИ КОНФЕРЕНЦИЯ</span>
                </div>
                <h3 className="font-serif font-bold text-stone-900 text-xl">
                  «Аймактык билим берүү жана туруктуу өнүгүү: 30 жылдык тажрыйба жана келечек»
                </h3>
                <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                  Өтүүчү күнү: 2026-жылдын 24-25-Апрели. Өтүүчү орду: ТалМУнун Башкы корпусунун чоң жыйындар залы. Катышуучулар: Кыргызстандын жана чет өлкөлөрдүн окумуштуулары.
                </p>
                <div className="pt-2 flex items-center gap-3">
                  <button
                    onClick={() => triggerToast(t('Конференциянын маалымат каты жүктөлдү (PDF)', 'Информационное письмо успешно скачано (PDF)', 'Call for papers downloaded (PDF)'))}
                    className="cursor-pointer px-4 py-2 bg-[#102747] text-white text-xs font-semibold rounded-md hover:bg-[#174A80] transition-colors flex items-center gap-1.5"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>{t('Маалымат катты жүктөө (Информ. письмо)', 'Информационное письмо', 'Download Call for Papers')}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* SUBPAGE 4: JOURNALS */}
        {currentPath === '/science/journals' && (
          <div className="space-y-8">
            <div className="max-w-3xl">
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#102747] mb-2">
                {t('«ТалМУнун Жарчысы» илимий журналы', 'Научный журнал «Вестник ТалГУ»', 'Scientific Journal “Bulletin of TalSU”')}
              </h2>
              <p className="text-xs sm:text-sm text-stone-600">
                {t('КР Улуттук аттестациялык комиссиясы (ВАК) тарабынан таанылган рецензиялануучу мезгилдүү илимий басылма.', 'Периодическое научное издание, включенное в Перечень рецензируемых журналов ВАК КР.', 'Peer-reviewed academic journal indexed by the National Higher Attestation Commission.')}
              </p>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-xl border border-stone-200 shadow-xs space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-stone-100">
                <div>
                  <h3 className="font-serif font-bold text-stone-900 text-lg">
                    {t('«ТалМУнун Жарчысы» журналынын чыгарылыштары', 'Выпуски журнала «Вестник ТалГУ»', 'Journal Issues')}
                  </h3>
                  <div className="text-xs text-stone-500 mt-1">ISSN: 1694-8254 · Жылына 4 жолу чыгат (Мезгилдүүлүгү: квартал сайын)</div>
                </div>
                <button
                  onClick={() => triggerToast(t('Авторлор үчүн талаптар жүктөлдү (PDF)', 'Требования к авторам скачаны (PDF)', 'Author guidelines downloaded (PDF)'))}
                  className="cursor-pointer px-4 py-2 bg-stone-100 hover:bg-[#102747] hover:text-white text-xs font-bold text-stone-800 rounded-md transition-colors flex items-center gap-1.5"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>{t('Авторлор үчүн талаптар', 'Требования к авторам', 'Author Guidelines')}</span>
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                {[
                  { title: 'Вестник ТалГУ №1 (2026) — Юбилейный выпуск', articles: '24 илимий макала', size: '6.4 MB' },
                  { title: 'Вестник ТалГУ №4 (2025) — Педагогика жана тил илими', articles: '18 илимий макала', size: '5.8 MB' },
                  { title: 'Вестник ТалГУ №3 (2025) — Техника жана экономика', articles: '22 илимий макала', size: '6.1 MB' },
                  { title: 'Вестник ТалГУ №2 (2025) — Агрардык илимдер жана экология', articles: '19 илимий макала', size: '5.5 MB' },
                ].map((j, idx) => (
                  <div key={idx} className="p-4 bg-stone-50 rounded-lg border border-stone-200 flex items-center justify-between">
                    <div>
                      <div className="font-bold text-stone-900">{j.title}</div>
                      <div className="text-stone-500 mt-0.5">{j.articles} · {j.size} · PDF</div>
                    </div>
                    <button
                      onClick={() => triggerToast(`${j.title} ${t('жүктөлдү', 'скачан', 'downloaded')}`)}
                      className="cursor-pointer text-xs font-semibold text-[#102747] hover:underline flex items-center gap-1"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>{t('Жүктөө', 'Скачать', 'Download')}</span>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* SUBPAGE 5: PUBLICATIONS */}
        {currentPath === '/science/publications' && (
          <div className="space-y-8">
            <div className="max-w-3xl">
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#102747] mb-2">
                {t('Окумуштуулардын жарыяланган эмгектери жана монографиялары', 'Публикации и монографии ученых ТалГУ', 'Faculty Publications & Monographs')}
              </h2>
              <p className="text-xs sm:text-sm text-stone-600">
                {t('Scopus, Web of Science, РИНЦ жана жергиликтүү илимий басылмалардагы макалалар.', 'Статьи ученых ТалГУ в международных базах цитирования и монографии.', 'Monographs, textbooks, and peer-reviewed articles by university researchers.')}
              </p>
            </div>

            <div className="bg-white rounded-xl border border-stone-200 divide-y divide-stone-100">
              {[
                { title: 'Шаршембиев Ж.С. «Инновационные цифровые методы в управлении региональными системами» // Бишкек, 2025.', cat: 'Монография' },
                { title: 'Сурапов А.К. «Кредиттик технологиялар шартында болочок мугалимдерди даярдоонун педагогикалык негиздери» // Талас, 2024.', cat: 'Окуу куралы' },
                { title: 'Мамбеталиев Э.К. «Манас таануу: Талас салтынын көркөм поэтикасы жана тилдик өзгөчөлүктөрү» // 2025.', cat: 'Илимий эмгек' },
                { title: 'Жумабеков Т.С. «Machine Learning Applications in Soil Quality Analysis of Central Asian Valleys» // Scopus, 2025.', cat: 'Scopus макала' },
              ].map((pub, idx) => (
                <div key={idx} className="p-4 sm:p-5 flex items-center justify-between gap-4 text-xs">
                  <div>
                    <span className="font-bold text-amber-800 uppercase tracking-wide text-[11px]">{pub.cat}</span>
                    <div className="font-semibold text-stone-900 mt-0.5">{pub.title}</div>
                  </div>
                  <button
                    onClick={() => triggerToast(`${pub.title} (${t('толук маалымат ачылды', 'открыто', 'opened')})`)}
                    className="cursor-pointer text-xs font-bold text-[#102747] hover:underline whitespace-nowrap"
                  >
                    {t('Көрүү', 'Смотреть', 'View')}
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Download Toast Notification */}
      {downloadToast && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-[#102747] text-white px-5 py-3 rounded-xl shadow-xl flex items-center gap-3 border border-amber-400 text-xs animate-in fade-in slide-in-from-bottom-4 duration-200">
          <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
          <span>{downloadToast}</span>
        </div>
      )}
    </div>
  );
};
