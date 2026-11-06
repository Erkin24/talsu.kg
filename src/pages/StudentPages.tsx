import React, { useState } from 'react';
import {
  Users,
  Clock,
  BookOpen,
  Award,
  Briefcase,
  Printer,
  Search,
  Download,
  Eye,
  CheckCircle2,
  Building,
  HeartHandshake
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useNavigation } from '../context/NavigationContext';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { TALSU_IMAGES } from '../data/talsuData';

export const StudentPages: React.FC = () => {
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
    '/students/schedule',
    '/students/library',
    '/students/scholarships',
    '/students/council',
    '/students/career'
  ].includes(currentPath);

  // Schedule State
  const [selectedGroup, setSelectedGroup] = useState<string>('ИТ-22');
  const [selectedDay, setSelectedDay] = useState<string>('Дүйшөмбү');

  const days = ['Дүйшөмбү', 'Шейшемби', 'Шаршемби', 'Бейшемби', 'Жума'];

  const scheduleMock: Record<string, Record<string, { time: string; subject: string; teacher: string; room: string; type: string }[]>> = {
    'ИТ-22': {
      'Дүйшөмбү': [
        { time: '08:30 - 09:50', subject: 'Веб-программалоо (React & TypeScript)', teacher: 'Доц. Жумабеков Т.С.', room: '№1 Корпус, Лаб 102', type: 'Лаборатория' },
        { time: '10:05 - 11:25', subject: 'Маалыматтар базасын башкаруу (PostgreSQL)', teacher: 'Ага окут. Кемелова А.Б.', room: 'Лаб 104', type: 'Практика' },
        { time: '11:40 - 13:00', subject: 'Философия жана кесиптик этика', teacher: 'Проф. Мамбеталиев Э.К.', room: 'Ауд 302', type: 'Лекция' },
      ],
      'Шейшемби': [
        { time: '08:30 - 09:50', subject: 'Жасалма интеллект жана Machine Learning', teacher: 'Доц. Жумабеков Т.С.', room: 'Лаб 102', type: 'Практика' },
        { time: '10:05 - 11:25', subject: 'Компьютердик тармактардын коопсуздугу', teacher: 'Окут. Токтогулов Н.Ж.', room: 'Ауд 205', type: 'Лекция' },
      ],
      'Шаршемби': [
        { time: '08:30 - 09:50', subject: 'Алгоритмдер жана маалыматтар структурасы', teacher: 'Ага окут. Кемелова А.Б.', room: 'Ауд 301', type: 'Лекция' },
        { time: '10:05 - 11:25', subject: 'Кесиптик англис тили (Tech English)', teacher: 'Доц. Осмоналиева Н.К.', room: 'Ауд 208', type: 'Практика' },
      ],
      'Бейшемби': [
        { time: '08:30 - 09:50', subject: 'Булуттук архитектуралар (Cloud Computing)', teacher: 'Доц. Жумабеков Т.С.', room: 'Лаб 104', type: 'Лаборатория' },
        { time: '10:05 - 11:25', subject: 'Кыргызстандын тарыхы', teacher: 'Доц. Садыков Б.А.', room: 'Чоң лекция залы', type: 'Лекция' },
      ],
      'Жума': [
        { time: '08:30 - 09:50', subject: 'Киберкоопсуздук негиздери', teacher: 'Окут. Токтогулов Н.Ж.', room: 'Ауд 204', type: 'Лекция' },
        { time: '10:05 - 11:25', subject: 'Студенттик илимий семинар / Стартап-долбоор', teacher: 'Проф. Шаршембиев Ж.С.', room: 'Конференц-зал', type: 'Практика' },
      ]
    },
    'ЮР-23': {
      'Дүйшөмбү': [
        { time: '08:30 - 09:50', subject: 'КР Жарандык укугу', teacher: 'Доц. Эгембердиев М.А.', room: '№2 Корпус, Ауд 201', type: 'Лекция' },
        { time: '10:05 - 11:25', subject: 'Жазык укугу жана криминалистика', teacher: 'Ага окут. Мусаев К.Р.', room: 'Ауд 203', type: 'Практика' },
      ],
      'Шейшемби': [
        { time: '08:30 - 09:50', subject: 'Мамлекет жана укук теориясы', teacher: 'Доц. Эгембердиев М.А.', room: 'Ауд 201', type: 'Лекция' },
        { time: '10:05 - 11:25', subject: 'Моделдештирилген соттук өндүрүш', teacher: 'Ага окут. Мусаев К.Р.', room: 'Сот залы', type: 'Практика' },
      ],
      'Шаршемби': [
        { time: '08:30 - 09:50', subject: 'Эмгек укугу', teacher: 'Окут. Касымова Д.С.', room: 'Ауд 204', type: 'Лекция' },
      ],
      'Бейшемби': [
        { time: '08:30 - 09:50', subject: 'Нотариат жана адвокатура', teacher: 'Окут. Касымова Д.С.', room: 'Ауд 204', type: 'Практика' },
      ],
      'Жума': [
        { time: '08:30 - 09:50', subject: 'Юридикалык клиника: Калкка акысыз кеңеш берүү', teacher: 'Доц. Эгембердиев М.А.', room: 'Юрклиника', type: 'Практика' },
      ]
    }
  };

  const currentClasses = scheduleMock[selectedGroup]?.[selectedDay] || [];

  return (
    <div className="bg-[#fcfbf9] min-h-screen pb-20 relative">
      <Breadcrumbs />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        {/* SUBPAGE 1: STUDENT LIFE (Default Fallback) */}
        {(!isSpecificSubpage) && (
          <div className="space-y-12">
            <div className="max-w-3xl">
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#102747] mb-2">
                {t('ТалМУнун студенттик жашоосу жана кампусу', 'Студенческая жизнь и кампус ТалГУ', 'Student Life & Campus Facilities')}
              </h2>
              <p className="text-xs sm:text-sm text-stone-600">
                {t('Студенттик кеңеш, 250 орундуу жатакана, спорт ийримдери, маданий фестивалдар жана дебат клубу.', 'Общежитие, спорт, дебатный клуб, самоуправление и творческие секции.', 'Vibrant campus community, dormitory facilities, varsity sports, and leadership councils.')}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="p-6 bg-white rounded-xl border border-stone-200 shadow-2xs space-y-3">
                <Building className="w-6 h-6 text-amber-600" />
                <h3 className="font-serif font-bold text-stone-900 text-lg">
                  {t('Студенттик жатакана (250 орун)', 'Общежитие на 250 мест', 'Student Dormitory')}
                </h3>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Талас ш., Б. Аманбаев көч. 18 дарегинде жайгашкан. Акысыз Wi-Fi, ашкана, кир жуучу жай, окуу бөлмөлөрү жана 24/7 күзөт кызматы менен толук камсыздалган.
                </p>
              </div>

              <div className="p-6 bg-white rounded-xl border border-stone-200 shadow-2xs space-y-3">
                <Award className="w-6 h-6 text-amber-600" />
                <h3 className="font-serif font-bold text-stone-900 text-lg">
                  {t('Спорт жана сергек жашоо', 'Спорт и здоровье', 'Athletics & Fitness')}
                </h3>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Чоң спорт зал, футбол талаасы, күрөш, волейбол, баскетбол жана кыргыздын улуттук оюну — тогуз коргоол секциялары иштейт.
                </p>
              </div>

              <div className="p-6 bg-white rounded-xl border border-stone-200 shadow-2xs space-y-3">
                <Users className="w-6 h-6 text-amber-600" />
                <h3 className="font-serif font-bold text-stone-900 text-lg">
                  {t('«Манас» дебат клубу', 'Дебатный клуб «Манас»', 'Debate Society')}
                </h3>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Жаштардын оратордук чеберчилигин, критикалык ой жүгүртүүсүн жана лидерлик сапаттарын өстүрүүчү республикалык деңгээлдеги клуб.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* SUBPAGE 2: TIMETABLE & SCHEDULE */}
        {currentPath === '/students/schedule' && (
          <div className="space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div className="max-w-3xl">
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#102747] mb-2">
                  {t('Сабактардын жадыбалы (Жазгы семестр — 2026)', 'Расписание занятий (Весенний семестр — 2026)', 'Class Timetable (Spring 2026)')}
                </h2>
                <p className="text-xs sm:text-sm text-stone-600">
                  {t('Академиялык тайпалар жана жума күндөрү боюнча лекция, практика жана лабораториялар.', 'Расписание по группам и дням недели.', 'Interactive schedule with room numbers, instructors, and class types.')}
                </p>
              </div>

              <button
                onClick={() => window.print()}
                className="cursor-pointer px-4 py-2 bg-white hover:bg-stone-100 text-stone-800 border border-stone-300 rounded-lg text-xs font-semibold flex items-center gap-2 shadow-2xs self-start sm:self-auto"
              >
                <Printer className="w-4 h-4 text-stone-600" />
                <span>{t('Жадыбалды басып чыгаруу (Печать)', 'Распечатать', 'Print')}</span>
              </button>
            </div>

            {/* Select Group & Day */}
            <div className="bg-white p-6 rounded-xl border border-stone-200 shadow-xs space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-stone-100">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-semibold text-stone-700">Тайпа (Группа):</span>
                  <div className="flex gap-2">
                    {['ИТ-22', 'ЮР-23'].map((grp) => (
                      <button
                        key={grp}
                        onClick={() => setSelectedGroup(grp)}
                        className={`cursor-pointer px-3 py-1.5 rounded text-xs font-bold transition-colors ${
                          selectedGroup === grp
                            ? 'bg-[#102747] text-white shadow-2xs'
                            : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                        }`}
                      >
                        {grp}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="text-xs text-stone-500 font-mono">
                  2025–2026-окуу жылы, Мааракелик семестр
                </div>
              </div>

              <div className="flex gap-2 overflow-x-auto pb-1">
                {days.map((day) => (
                  <button
                    key={day}
                    onClick={() => setSelectedDay(day)}
                    className={`cursor-pointer px-4 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${
                      selectedDay === day
                        ? 'bg-amber-100 text-amber-900 border border-amber-300 font-bold'
                        : 'text-stone-600 hover:bg-stone-100'
                    }`}
                  >
                    {day}
                  </button>
                ))}
              </div>
            </div>

            {/* Classes List */}
            <div className="space-y-3">
              {currentClasses.length > 0 ? (
                currentClasses.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-5 bg-white rounded-xl border border-stone-200 shadow-2xs flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:border-[#102747]/40 transition-all"
                  >
                    <div className="flex items-start sm:items-center gap-4">
                      <div className="p-2.5 rounded-lg bg-blue-50 text-[#102747] font-mono text-xs font-bold flex items-center gap-1.5 shrink-0">
                        <Clock className="w-4 h-4 text-amber-600" />
                        <span>{item.time}</span>
                      </div>
                      <div>
                        <div className="flex items-center gap-2 text-xs text-stone-500 mb-0.5">
                          <span className="font-semibold text-amber-800">{item.type}</span>
                          <span>·</span>
                          <span className="text-stone-700 font-medium">{item.room}</span>
                        </div>
                        <h4 className="text-sm sm:text-base font-bold text-stone-900">
                          {item.subject}
                        </h4>
                      </div>
                    </div>
                    <div className="text-xs text-stone-600 sm:border-l sm:border-stone-200 sm:pl-6 shrink-0">
                      {item.teacher}
                    </div>
                  </div>
                ))
              ) : (
                <div className="p-8 text-center text-xs text-stone-500 bg-white rounded-xl border border-stone-200">
                  {t('Бул күнгө сабак пландалган жок же өз алдынча иштөө күнү.', 'На этот день занятий нет.', 'No classes scheduled for this day.')}
                </div>
              )}
            </div>
          </div>
        )}

        {/* SUBPAGE 3: DIGITAL LIBRARY */}
        {currentPath === '/students/library' && (
          <div className="space-y-8">
            <div className="max-w-3xl">
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#102747] mb-2">
                {t('ТалМУнун электрондук китепканасы жана репозиторийи', 'Электронная библиотека ТалГУ', 'Digital Academic Library')}
              </h2>
              <p className="text-xs sm:text-sm text-stone-600">
                {t('Университеттин 45 000ден ашуун китеп фонду, электрондук окуу куралдары жана силлабустары.', 'Электронный каталог изданий, учебников и научных трудов преподавателей ТалГУ.', 'Open-access faculty textbooks, monographs, and academic repository.')}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: 'Кыргыз тили жана кеп маданияты', author: 'Проф. Э.К. Мамбеталиев', year: 2025, size: '4.8 MB', cat: 'Филология' },
                { title: 'Веб-программалоо жана маалыматтар базасы', author: 'Доц. Т.С. Жумабеков', year: 2026, size: '6.2 MB', cat: 'Информатика' },
                { title: 'КР Жарандык укугу: Практикум', author: 'Доц. М.А. Эгембердиев', year: 2024, size: '7.1 MB', cat: 'Юриспруденция' },
                { title: 'Талас өрөөнүнүн агроэкологиясы', author: 'Доц. К.М. Жунушов', year: 2025, size: '5.5 MB', cat: 'Агрономия' },
                { title: 'Манас таануу: Талас салты', author: 'Доц. Б.А. Садыков', year: 2024, size: '3.9 MB', cat: 'Тарых' },
                { title: 'Башталгыч билим берүүнүн инновациялык усулу', author: 'Г.Т. Асанкулова', year: 2025, size: '4.1 MB', cat: 'Педагогика' },
              ].map((book, idx) => (
                <div key={idx} className="bg-white p-6 rounded-xl border border-stone-200 shadow-2xs flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between text-xs text-stone-500 mb-2">
                      <span className="font-bold text-amber-800">{book.cat}</span>
                      <span className="font-mono">{book.year}</span>
                    </div>
                    <h3 className="font-serif font-bold text-stone-900 text-base mb-1">
                      {book.title}
                    </h3>
                    <p className="text-xs text-stone-600 mb-4">{book.author}</p>
                  </div>
                  <div className="pt-3 border-t border-stone-100 flex items-center justify-between text-xs">
                    <span className="font-mono text-stone-400">{book.size} · PDF</span>
                    <button
                      onClick={() => triggerToast(`«${book.title}» ${t('ийгиликтүү жүктөлдү (PDF)', 'успешно скачано (PDF)', 'downloaded successfully (PDF)')}`)}
                      className="cursor-pointer font-bold text-[#102747] hover:underline flex items-center gap-1"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>{t('Жүктөө', 'Скачать', 'Download')}</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* SUBPAGE 4: SCHOLARSHIPS & WELFARE */}
        {currentPath === '/students/scholarships' && (
          <div className="space-y-8">
            <div className="max-w-3xl">
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#102747] mb-2">
                {t('Стипендиялар жана социалдык колдоо', 'Стипендии и социальная поддержка', 'Scholarships & Student Welfare')}
              </h2>
              <p className="text-xs sm:text-sm text-stone-600">
                {t('Мамлекеттик академикалык стипендия, Ректордук стипендия жана социалдык жеңилдиктер.', 'Виды стипендий: государственная, ректорская, именные и социальные льготы.', 'Merit scholarships, Rector grants, and financial assistance programs.')}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs sm:text-sm">
              <div className="bg-white p-6 rounded-xl border border-stone-200 shadow-2xs space-y-2">
                <div className="font-bold text-amber-800 uppercase tracking-wide text-xs">Мамлекеттик грант</div>
                <h3 className="font-serif font-bold text-stone-900 text-base">Академиялык стипендия</h3>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Сессияны «эң жакшы» жана «жакшы» бааларга тапшырган бюджеттик негизде окуган студенттерге ай сайын төлөнөт.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl border border-amber-300 shadow-2xs space-y-2">
                <div className="font-bold text-amber-800 uppercase tracking-wide text-xs">Өзгөчө ийгиликтер үчүн</div>
                <h3 className="font-serif font-bold text-stone-900 text-base">ТалМУнун Ректордук стипендиясы</h3>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Окууда, илимде жана коомдук иштерде өзгөчөлөнгөн лидер студенттерге ректораттын чечими менен берилүүчү жогорулатылган стипендия.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl border border-stone-200 shadow-2xs space-y-2">
                <div className="font-bold text-amber-800 uppercase tracking-wide text-xs">Аталыштагы сыйлыктар</div>
                <h3 className="font-serif font-bold text-stone-900 text-base">«Ч. Айтматов» жана «Манас» стипендиясы</h3>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Филология, тарых жана маданият тармагында илимий эмгектери жарыяланган мыкты студенттер үчүн жыл сайын ыйгарылат.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* SUBPAGE 5: STUDENT COUNCIL */}
        {currentPath === '/students/council' && (
          <div className="space-y-8">
            <div className="max-w-3xl">
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#102747] mb-2">
                {t('Студенттик өзүн-өзү башкаруу кеңеши', 'Студенческий совет ТалГУ', 'Student Government Council')}
              </h2>
              <p className="text-xs sm:text-sm text-stone-600">
                {t('Студенттердин укуктарын коргоо, маданий иш-чараларды уюштуруу жана жаштар демилгелери.', 'Защита прав студентов, культурная жизнь и волонтерское движение университета.', 'Advocating for student interests, organizing university galas, and leading volunteer projects.')}
              </p>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-xl border border-stone-200 shadow-xs space-y-4 text-xs sm:text-sm text-stone-700 leading-relaxed">
              <p>
                ТалМУнун Студенттик кеңеши — университеттин бардык факультеттеринин жана колледжинин активдүү студенттерин бириктирген коомдук уюм. Кеңеш ректораттын жыйындарына катышып, студенттик демилгелерди колдойт, жатакана маселелерин чечүүгө көмөктөшөт.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-stone-100">
                <div className="p-3 bg-stone-50 rounded-lg">
                  <div className="font-bold text-stone-900">Маданий-массалык сектор</div>
                  <div className="text-xs text-stone-500 mt-1">Фестивалдар, Нооруз, бүтүрүү кечелери</div>
                </div>
                <div className="p-3 bg-stone-50 rounded-lg">
                  <div className="font-bold text-stone-900">Ыктыярчылар кызматы</div>
                  <div className="text-xs text-stone-500 mt-1">Кайрымдуулук, экологиялык акциялар</div>
                </div>
                <div className="p-3 bg-stone-50 rounded-lg">
                  <div className="font-bold text-stone-900">Интеллектуалдык клуб</div>
                  <div className="text-xs text-stone-500 mt-1">Брейн-ринг, «Эмне? Кайда? Качан?»</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* SUBPAGE 6: CAREER & INTERNSHIP */}
        {currentPath === '/students/career' && (
          <div className="space-y-8">
            <div className="max-w-3xl">
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#102747] mb-2">
                {t('Практика жана бүтүрүүчүлөрдүн карьерасы', 'Практика и трудоустройство выпускников', 'Internships & Career Center')}
              </h2>
              <p className="text-xs sm:text-sm text-stone-600">
                {t('Өндүрүштүк практика, иш берүүчүлөр менен байланыш жана резюме даярдоо борбору.', 'Сотрудничество с работодателями региона, базы практик и ярмарки вакансий.', 'Corporate partnerships, internship placements, and employment support for graduates.')}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm">
              <div className="bg-white p-6 rounded-xl border border-stone-200 shadow-2xs space-y-3">
                <h3 className="font-serif font-bold text-stone-900 text-base">
                  {t('ТалМУнун практикалык базалары:', 'Базы практик:', 'Internship Bases:')}
                </h3>
                <ul className="space-y-2 text-stone-700">
                  <li>• Талас облустук жана райондук соттору, Юстиция башкармалыгы</li>
                  <li>• Талас облусунун мектептери, гимназиялары жана лицейлери</li>
                  <li>• «Айыл Банк», «РСК Банк», «Бакай Банк» филиалдары</li>
                  <li>• Жергиликтүү IT-компаниялар жана санариптик борборлор</li>
                  <li>• «Альянс Алтын» жана өнөр жай ишканалары</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-xl border border-stone-200 shadow-2xs space-y-3">
                <h3 className="font-serif font-bold text-stone-900 text-base">
                  {t('Карьера борборунун кызматы:', 'Услуги центра карьеры:', 'Career Center Services:')}
                </h3>
                <ul className="space-y-2 text-stone-700">
                  <li>• Резюме (CV) жазуу жана интервьюга даярдануу боюнча мастер-класстар</li>
                  <li>• Жыл сайын өтүүчү республикалык Бош орундар жарманкеси (Ярмарка вакансий)</li>
                  <li>• Бүтүрүүчүлөрдүн жумушка орношуусуна мониторинг (92% ишке орношуу)</li>
                </ul>
              </div>
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
