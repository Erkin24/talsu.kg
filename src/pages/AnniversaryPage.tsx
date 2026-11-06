import React, { useState } from 'react';
import { Sparkles, Calendar, Award, Building, BookOpen, Users, Clock, ArrowRight, Heart, Share2, Check } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useNavigation } from '../context/NavigationContext';
import { ANNIVERSARY_MILESTONES, TALSU_IMAGES, TALSU_INFO, GALLERY_PHOTOS } from '../data/talsuData';

export const AnniversaryPage: React.FC = () => {
  const { lang, t } = useLanguage();
  const { navigate } = useNavigation();
  const [selectedMilestone, setSelectedMilestone] = useState(ANNIVERSARY_MILESTONES[0]);
  const [copiedLink, setCopiedLink] = useState(false);

  // Community congratulations messages (verified format)
  const [greetings, setGreetings] = useState([
    {
      id: 1,
      author: 'Аскар Исаевич Жылкычиев',
      role: 'ТалМУнун тунгуч ректору (2001–2016), профессор',
      text: 'Талас мамлекеттик университетинин 30 жылдык мааракеси — бүтүндөй Талас элинин, кыргыз илим-билиминин чоң майрамы! 1996-жылы алгачкы филиалдар түптөлүп жатканда кыйынчылыктар көп болгон, бирок жамааттын ынтымагы жана эмгеги менен бүгүн ТалМУ эл аралык деңгээлдеги авторитеттүү ЖОЖго айланды. Маараке кут болсун!',
      date: '2026-жыл, 15-Апрель'
    },
    {
      id: 2,
      author: 'Ажибаева Айнура',
      role: 'Ж.Баласагын атындагы Талас аймактык көп тармактуу институтунун директору, педагогика илимдеринин доктору, профессор',
      text: '30 жыл аралыгында бул билим очогу он миңдеген жогорку билимдүү адистерди уясынан учурду. Бүгүн Жусуп Баласагын атындагы Кыргыз улуттук университетинин курамындагы Талас аймактык көп тармактуу институту катары заманбап педагогикалык технологияларга, илимий инновацияларга жана сапаттуу билим берүүгө карай ишенимдүү кадам шилтейбиз. 30 жылдык маараке кут болсун!',
      date: '2026-жыл, 20-Апрель'
    },
    {
      id: 3,
      author: 'Нурбек Касымалиев',
      role: '2014-жылкы бүтүрүүчүсү, IT-компаниянын жетекчиси',
      text: 'ТалМУ мага сапаттуу фундаменталдык билим жана чоң турмушка жолдомо берди. Азыркы учурда дүйнөлүк долбоорлордо иштеп жүрүп, өз окуу жайымдын 30 жылдыгын зор кубаныч менен белгилейм. ТалМУ ар дайым алдыда болсун!',
      date: '2026-жыл, 22-Апрель'
    }
  ]);

  const [newAuthor, setNewAuthor] = useState('');
  const [newRole, setNewRole] = useState('');
  const [newMessage, setNewMessage] = useState('');
  const [submittedGreeting, setSubmittedGreeting] = useState(false);

  const handleSubmitGreeting = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newAuthor.trim() || !newMessage.trim()) return;

    setGreetings([
      {
        id: Date.now(),
        author: newAuthor,
        role: newRole || t('ТалМУнун бүтүрүүчүсү / досу', 'Выпускник / друг ТалГУ', 'TalSU Alumni / Friend'),
        text: newMessage,
        date: '2026-жыл, жакында'
      },
      ...greetings
    ]);

    setNewAuthor('');
    setNewRole('');
    setNewMessage('');
    setSubmittedGreeting(true);
    setTimeout(() => setSubmittedGreeting(false), 5000);
  };

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    }
  };

  return (
    <div className="bg-[#fcfbf9] min-h-screen">
      {/* 1. ANNIVERSARY JUBILEE HERO */}
      <section className="relative overflow-hidden bg-[#102747] text-white">
        <div className="absolute inset-0 z-0">
          <img
            src={TALSU_IMAGES.anniversaryGala}
            alt="ТалМУнун 30 жылдык салтанаты"
            className="w-full h-full object-cover object-center opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#102747] via-[#102747]/95 to-[#174A80]/85" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#102747] via-transparent to-black/40" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20 sm:pt-24 sm:pb-28">
          <div className="max-w-3xl">
            {/* Elegant Golden Anniversary Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/20 border border-amber-400 text-amber-300 text-xs font-bold uppercase tracking-wider mb-6">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>1996 — 2026: 30 ЖЫЛДЫК ДАҢКТУУ МААРАКЕ</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-extrabold tracking-tight text-white leading-tight mb-6">
              {t(
                'ТалМУ — 30 жыл билимге, илимге жана келечекке!',
                'ТалГУ — 30 лет знаниям, науке и будущему!',
                'TALSU — 30 Years of Knowledge, Science and Progress!'
              )}
            </h1>

            <p className="text-base sm:text-xl text-stone-200 leading-relaxed font-light mb-8">
              {t(
                '1996-жылы Талас жергесинде түптөлгөн алгачкы университеттик филиалдардан бүгүнкү заманбап, көп тармактуу классикалык мамлекеттик университетке чейинки даңктуу 30 жылдык басып өткөн жол.',
                'Славный 30-летний путь от открытия первых вузовских филиалов в 1996 году до современного флагманского государственного университета региона.',
                'The proud 30-year legacy from the first university branches in 1996 to the comprehensive, modern state university of today.'
              )}
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#timeline"
                className="cursor-pointer px-6 py-3.5 bg-gradient-to-r from-amber-500 to-amber-400 text-[#102747] font-bold text-sm rounded-lg shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2"
              >
                <span>{t('Тарыхый баскычтар (1996–2026)', 'Хроника 30 лет', 'Explore 30-Year Milestones')}</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#greetings"
                className="cursor-pointer px-5 py-3.5 bg-white/10 hover:bg-white/20 text-white font-semibold text-sm rounded-lg border border-white/20 backdrop-blur-xs transition-colors flex items-center gap-2"
              >
                <Heart className="w-4 h-4 text-rose-400" />
                <span>{t('Куттуктоолор жана каалоолор', 'Поздравления', 'Greetings & Wishes')}</span>
              </a>

              <button
                onClick={handleShare}
                className="cursor-pointer px-4 py-3.5 text-stone-300 hover:text-white text-xs font-semibold flex items-center gap-1.5"
              >
                {copiedLink ? <Check className="w-4 h-4 text-emerald-400" /> : <Share2 className="w-4 h-4 text-stone-300" />}
                <span>{copiedLink ? t('Шилтеме көчүрүлдү!', 'Скопировано!', 'Copied!') : t('Бөлүшүү', 'Поделиться', 'Share')}</span>
              </button>
            </div>
          </div>
        </div>

        {/* 30-Year Numerical Highlights */}
        <div className="relative z-10 bg-[#0b1b31]/95 border-t border-amber-500/20 py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-white/10">
              <div className="pt-2 md:pt-0">
                <div className="text-3xl sm:text-4xl font-extrabold text-amber-400 font-mono">1996</div>
                <div className="text-xs text-stone-300 mt-1">{t('Жогорку билимдин башаты', 'Начало высшего образования', 'Origin Year')}</div>
              </div>
              <div className="pt-4 md:pt-0">
                <div className="text-3xl sm:text-4xl font-extrabold text-amber-400 font-mono">30,000+</div>
                <div className="text-xs text-stone-300 mt-1">{t('Даярдалган дипломдуу адистер', 'Выпускников с дипломом', 'Alumni Graduated')}</div>
              </div>
              <div className="pt-4 md:pt-0">
                <div className="text-3xl sm:text-4xl font-extrabold text-amber-400 font-mono">2000</div>
                <div className="text-xs text-stone-300 mt-1">{t('№189 Президенттик Жарлык', 'Указ Президента №189', 'Presidential Charter')}</div>
              </div>
              <div className="pt-4 md:pt-0">
                <div className="text-3xl sm:text-4xl font-extrabold text-amber-400 font-mono">2026</div>
                <div className="text-xs text-stone-300 mt-1">{t('30 жылдык мааракелик жыл', 'Юбилейный год побед', 'Jubilee Year of Progress')}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. DIRECTOR'S JUBILEE ADDRESS */}
      <section className="py-16 sm:py-20 border-b border-stone-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Director Portrait */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden border border-amber-200/80 shadow-md bg-stone-50">
                <div className="aspect-4/3 overflow-hidden">
                  <img
                    src={TALSU_IMAGES.director}
                    alt="Институттун директору, профессор Ажибаева Айнура"
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-6 bg-white border-t border-stone-200">
                  <div className="text-xs font-bold uppercase tracking-wider text-amber-700">
                    {t('Институттун Директорунун мааракелик кайрылуусу', 'Юбилейное обращение Директора института', 'Director’s Jubilee Address')}
                  </div>
                  <h3 className="text-xl font-serif font-bold text-stone-900 mt-1">
                    Ажибаева Айнура
                  </h3>
                  <p className="text-xs text-stone-600 mt-1 font-medium">
                    {t('Педагогика илимдеринин доктору, профессор', 'Доктор педагогических наук, профессор', 'Doctor of Pedagogical Sciences, Professor')}
                  </p>
                  <p className="text-[11px] text-stone-400 mt-0.5">
                    {t('Ж.Баласагын атындагы Талас аймактык көп тармактуу институту', 'Таласский региональный многопрофильный институт КНУ им. Ж. Баласагына', 'Talas Regional Multidisciplinary Institute of Jusup Balasagyn KNU')}
                  </p>
                </div>
              </div>
            </div>

            {/* Address Prose */}
            <div className="lg:col-span-7 space-y-5 text-stone-700 text-base leading-relaxed">
              <div className="text-xs font-bold tracking-widest uppercase text-amber-800">
                {t('УРМАТТУУ ТАЛМУНУН ЖАМААТЫ, СТУДЕНТТЕРИ ЖАНА БҮТҮРҮҮЧҮЛӨРҮ!', 'ДОРОГИЕ ПРЕПОДАВАТЕЛИ, СТУДЕНТЫ И ВЫПУСКНИКИ!', 'DEAR FACULTY, STUDENTS, AND ALUMNI!')}
              </div>

              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#102747] leading-snug">
                {t(
                  '«ТалМУнун 30 жылдыгы — бул миңдеген тагдырларды өзгөрткөн илим менен эмгектин жеңиши»',
                  '«30-летие ТалГУ — это триумф науки, преданного труда и тысяч состоявшихся судеб»',
                  '“TalSU’s 30th Anniversary Celebrates the Triumph of Science, Dedication and Empowered Generations”'
                )}
              </h2>

              <p className="first-letter:text-5xl first-letter:font-serif first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:text-[#102747]">
                {t(
                  '1996-жылы Талас өрөөнүндө жогорку окуу жайынын филиалдары ачылганда, бул аймактын жаштары үчүн тарыхый бурулуш болгон. 2000-жылы мамлекет башчысынын жарлыгы менен Талас мамлекеттик университети түзүлүп, чейрек кылымдан ашуун убакыттан бери өлкөбүздүн социалдык-экономикалык, руханий өнүгүшүнө зор салым кошуп келет.',
                  'Открытие первых университетских структур в 1996 году и создание самостоятельного государственного университета в 2000 году открыло новую веху в истории Таласской долины.',
                  'The opening of the first university structures in 1996 and the official state charter in 2000 transformed the educational landscape of Talas.'
                )}
              </p>

              <blockquote className="my-6 p-4 bg-amber-50/70 border-l-4 border-amber-500 rounded-r-lg italic font-serif text-stone-800 text-sm sm:text-base">
                «{t(
                  'Бүгүн биз 30 жылдык мааракени майрамдап жатып, келечекке чечкиндүү карайбыз: жасалма интеллект, заманбап IT, экологиялык таза агротехнологиялар жана эл аралык байланыштар ТалМУнун жаңы бийиктиктерин аныктайт.',
                  'Сегодня, празднуя 30-летие, мы уверенно смотрим в будущее: искусственный интеллект, современные IT, чистые агротехнологии и международные альянсы определяют наши новые горизонты.',
                  'Today, celebrating 30 years, we boldly look ahead: artificial intelligence, advanced computing, sustainable agrotechnologies, and global alliances chart our future.'
                )}»
              </blockquote>

              <p>
                {t(
                  'Маараке менен жалпы профессордук-окутуучулук курамды, эмгек ардагерлерин, студенттерди жана бүтүрүүчүлөрдү чын дилимден куттуктайм! Талас мамлекеттик университети өсүп-өнүгө берсин!',
                  'Сердечно поздравляю профессорско-преподавательский состав, ветеранов труда, студентов и выпускников со славным юбилеем! Процветания нашему родному университету!',
                  'I warmly congratulate our distinguished professors, staff veterans, students, and alumni on this momentous jubilee!'
                )}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. HISTORICAL TIMELINE: 1996 TO 2026 */}
      <section id="timeline" className="py-20 bg-stone-50 border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="text-xs font-bold tracking-widest uppercase text-amber-800 mb-2">
              {t('ТАЛМУНУН ТАРЫХЫЙ ХРОНИКАСЫ', 'ХРОНОЛОГИЯ 30 ЛЕТ', 'HISTORICAL CHRONOLOGY')}
            </div>
            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-[#102747]">
              {t('1996–2026: 30 жылдык басып өткөн негизги этаптар', '1996–2026: Ключевые вехи становления университета', '1996–2026: Milestones of 30 Years of Progress')}
            </h2>
            <div className="w-16 h-1 bg-amber-500 mx-auto mt-4" />
          </div>

          {/* Timeline Cards Grid */}
          <div className="relative border-l-2 border-amber-400/80 ml-4 sm:ml-32 space-y-12">
            {ANNIVERSARY_MILESTONES.map((m) => {
              const isSelected = selectedMilestone.year === m.year;
              return (
                <div key={m.year} className="relative pl-6 sm:pl-10">
                  {/* Year marker */}
                  <div className="absolute -left-3.5 sm:-left-[7.5rem] top-0 flex items-center gap-2">
                    <span className="hidden sm:inline-block font-mono font-extrabold text-base text-[#102747] bg-white px-2 py-0.5 rounded shadow-2xs border border-stone-200">
                      {m.year}
                    </span>
                    <div className="w-7 h-7 rounded-full bg-[#102747] text-amber-400 border-2 border-amber-400 flex items-center justify-center text-xs font-bold shadow-xs">
                      ★
                    </div>
                  </div>

                  {/* Card Content */}
                  <div
                    onClick={() => setSelectedMilestone(m)}
                    className={`p-6 rounded-xl border transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-white border-amber-500 shadow-md ring-1 ring-amber-400/40'
                        : 'bg-white/80 border-stone-200 hover:border-stone-400 shadow-2xs'
                    }`}
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <span className="sm:hidden font-mono font-bold text-amber-800 text-sm">
                        {m.year}-жыл
                      </span>
                      <span className="text-xs font-bold uppercase tracking-wider text-amber-700">
                        {t('Тарыхый этап', 'Исторический этап', 'Milestone Phase')}
                      </span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-serif font-bold text-stone-900 mb-2">
                      {m.title[lang] || m.title.ky}
                    </h3>

                    <p className="text-xs sm:text-sm text-stone-700 leading-relaxed mb-3">
                      {m.description[lang] || m.description.ky}
                    </p>

                    <div className="pt-3 border-t border-stone-100 flex items-center gap-2 text-xs text-[#174A80] font-semibold">
                      <span>✓ {t('Мааниси:', 'Значение:', 'Significance:')}</span>
                      <span className="text-stone-600 font-normal">{m.significance[lang] || m.significance.ky}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. PHOTO ARCHIVE: 30 YEARS IN PICTURES */}
      <section className="py-20 bg-white border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <div className="text-xs font-bold tracking-widest uppercase text-amber-800 mb-2">
                {t('ФОТОАРХИВ ЖАНА ЭСТЕЛИК КӨЗ ИРМЕМДЕР', 'ФОТОАРХИВ 30 ЛЕТ', 'PHOTO ARCHIVE')}
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#102747]">
                {t('ТалМУнун 30 жылдык фотолетописи', 'Фотолетопись университета за три десятилетия', '30 Years of Visual Legacy')}
              </h2>
            </div>
            <button
              onClick={() => navigate('/news/gallery')}
              className="cursor-pointer text-xs font-bold text-[#174A80] hover:text-[#102747] flex items-center gap-1.5 self-start md:self-auto"
            >
              <span>{t('Толук фотогалереяны көрүү', 'Вся фотогалерея', 'View Full Gallery')}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {GALLERY_PHOTOS.map((photo) => (
              <div
                key={photo.id}
                className="group relative rounded-xl overflow-hidden border border-stone-200 shadow-2xs bg-stone-100"
              >
                <div className="aspect-16/10 overflow-hidden">
                  <img
                    src={photo.url}
                    alt={photo.title[lang] || photo.title.ky}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-4 bg-white">
                  <div className="text-xs font-serif font-bold text-stone-900 group-hover:text-[#102747] transition-colors">
                    {photo.title[lang] || photo.title.ky}
                  </div>
                  <div className="text-[11px] text-amber-700 font-medium mt-1">
                    {t('30 жылдык алтын фонду', 'Золотой фонд юбилея', 'Jubilee Archive')}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. GREETINGS & CONGRATULATIONS WALL */}
      <section id="greetings" className="py-20 bg-[#f8f9fa] border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="text-xs font-bold tracking-widest uppercase text-amber-800 mb-2">
              {t('МААРАКЕЛИК КУТТУКТООЛОР ТАКТАСЫ', 'СТЕНА ПОЗДРАВЛЕНИЙ', 'CONGRATULATIONS WALL')}
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#102747]">
              {t('Бүтүрүүчүлөрдүн, студенттердин жана коомчулуктун каалоо-тилектери', 'Поздравления выпускников, профессоров и друзей ТалГУ', 'Greetings from Alumni, Faculty & Friends')}
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 mt-2">
              {t(
                'Сиз дагы Талас мамлекеттик университетинин 30 жылдыгына карата ак тилек каалооңузду калтырсаңыз болот.',
                'Вы также можете оставить свое поздравление и теплые пожелания родному университету.',
                'Share your commemorative wishes and memories for the 30th anniversary.'
              )}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Greetings Cards */}
            <div className="lg:col-span-7 space-y-4 max-h-[600px] overflow-y-auto pr-2">
              {greetings.map((g) => (
                <div key={g.id} className="p-6 bg-white rounded-xl border border-stone-200 shadow-2xs space-y-3">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="font-serif font-bold text-stone-900 text-base">
                        {g.author}
                      </div>
                      <div className="text-xs text-amber-800 font-medium">
                        {g.role}
                      </div>
                    </div>
                    <span className="text-[11px] text-stone-400 font-mono">
                      {g.date}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-stone-700 leading-relaxed italic">
                    «{g.text}»
                  </p>
                </div>
              ))}
            </div>

            {/* Leave a greeting form */}
            <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-xl border border-amber-300 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-xs font-bold text-amber-800 uppercase tracking-wide mb-2">
                  <Heart className="w-4 h-4 text-rose-500 fill-rose-500" />
                  <span>{t('КУТТУКТОО КАЛТЫРУУ', 'ОСТАВИТЬ ПОЖЕЛАНИЕ', 'LEAVE A WISH')}</span>
                </div>
                <h3 className="text-lg font-serif font-bold text-stone-900 mb-4">
                  {t('ТалМУну 30 жылдыгы менен куттуктаңыз!', 'Поздравьте ТалГУ с 30-летием!', 'Congratulate TalSU on 30 Years!')}
                </h3>

                {submittedGreeting && (
                  <div className="mb-4 p-3 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-lg text-xs flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600" />
                    <span>{t('Сиздин куттуктооңуз ийгиликтүү кошулду!', 'Ваше поздравление успешно опубликовано!', 'Your greeting has been published!')}</span>
                  </div>
                )}

                <form onSubmit={handleSubmitGreeting} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      {t('Сиздин аты-жөнүңүз (Ф.И.О.): *', 'Ваше ФИО: *', 'Your Name: *')}
                    </label>
                    <input
                      type="text"
                      required
                      value={newAuthor}
                      onChange={(e) => setNewAuthor(e.target.value)}
                      placeholder="Мисалы: Алмазбек Сатыбалдиев"
                      className="w-full p-2.5 bg-stone-50 text-xs border border-stone-300 rounded-lg focus:bg-white focus:border-[#102747] focus:outline-hidden"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      {t('Сиздин макамыңыз же кесибиңиз:', 'Ваш статус или профессия:', 'Role / Graduation Year:')}
                    </label>
                    <input
                      type="text"
                      value={newRole}
                      onChange={(e) => setNewRole(e.target.value)}
                      placeholder="Мисалы: 2018-жылкы бүтүрүүчүсү, мугалим"
                      className="w-full p-2.5 bg-stone-50 text-xs border border-stone-300 rounded-lg focus:bg-white focus:border-[#102747] focus:outline-hidden"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      {t('Сиздин мааракелик куттуктооңуз: *', 'Текст поздравления: *', 'Your Jubilee Message: *')}
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={newMessage}
                      onChange={(e) => setNewMessage(e.target.value)}
                      placeholder={t('Университетке каалооңузду жана жылуу сөздөрүңүздү жазыңыз...', 'Напишите теплые слова родному университету...', 'Share your memories and wishes...')}
                      className="w-full p-2.5 bg-stone-50 text-xs border border-stone-300 rounded-lg focus:bg-white focus:border-[#102747] focus:outline-hidden"
                    />
                  </div>

                  <button
                    type="submit"
                    className="cursor-pointer w-full py-3 bg-[#102747] hover:bg-[#174A80] text-amber-300 font-bold text-xs rounded-lg transition-all shadow-xs flex items-center justify-center gap-2"
                  >
                    <span>{t('Куттуктоону жарыялоо', 'Опубликовать поздравление', 'Publish Greeting')}</span>
                    <Sparkles className="w-4 h-4 text-amber-400" />
                  </button>
                </form>
              </div>

              <div className="pt-4 mt-4 border-t border-stone-200 text-center text-[11px] text-stone-400">
                {t('Мааракелик тарыхый эстелик катары сакталат', 'Сохраняется в архиве 30-летия', 'Preserved in the 30-year archival registry')}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
