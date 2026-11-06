import React from 'react';
import { Award, BookOpen, Users, Building, Laptop, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { IMAGES, FACULTIES } from '../data/instituteData';

export const AboutSection: React.FC = () => {
  const { lang, t } = useLanguage();

  return (
    <section id="about" className="py-20 bg-[#fcfbf9] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-bold tracking-widest uppercase text-stone-500 mb-2">
            {t('ИНСТИТУТ ЖӨНҮНДӨ', 'ОБ ИНСТИТУТЕ', 'ABOUT THE INSTITUTE')}
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-stone-900 leading-tight">
            {t(
              'Улуттук билимдин туусун бийик көтөргөн Талас институту',
              'Таласский институт — флагман национального образования в регионе',
              'Upholding the Standard of National Higher Education in Talas'
            )}
          </h2>
          <div className="w-16 h-1 bg-amber-500 mt-4" />
        </div>

        {/* 2-Column Split: Director Welcome & Heritage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          {/* Column 1: Director Card with Portrait */}
          <div className="lg:col-span-5">
            <div className="relative rounded-lg overflow-hidden border border-stone-200 bg-white shadow-xs">
              <div className="aspect-4/3 w-full bg-stone-100 overflow-hidden">
                <img
                  src={IMAGES.director}
                  alt="ТАКТИ директору проф. А.С. Керимкулов"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="text-xs font-semibold uppercase tracking-wider text-amber-700 mb-1">
                  {t('Институттун жетекчиси', 'Руководитель института', 'Institute Director')}
                </div>
                <h3 className="text-xl font-serif font-bold text-stone-900">
                  Керимкулов Адылбек Сапарбаевич
                </h3>
                <p className="text-xs text-stone-500 mt-0.5">
                  {t(
                    'Педагогика илимдеринин доктору, КУУнун профессору',
                    'Доктор педагогических наук, профессор КНУ',
                    'Doctor of Pedagogical Sciences, Professor'
                  )}
                </p>
                <div className="mt-4 pt-4 border-t border-stone-100 text-xs text-stone-600 flex items-center justify-between">
                  <span>{t('Кабыл алуу сааттары:', 'Приемные часы:', 'Office Hours:')} Шейшемби 14:00 - 17:00</span>
                  <span className="font-semibold text-[#0b2545]">{t('Кабинет 201', 'Кабинет 201', 'Room 201')}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Curatorial Narrative & Quote */}
          <div className="lg:col-span-7">
            <div className="space-y-5 text-stone-700 leading-relaxed text-base">
              <p className="first-letter:text-5xl first-letter:font-serif first-letter:font-bold first-letter:float-left first-letter:mr-3 first-letter:text-[#0b2545]">
                {t(
                  'Жусуп Баласагын атындагы Кыргыз улуттук университетинин Талас аймактык көп тармактуу институту (ТАКТИ) — Талас жергесиндеги жаштарга борбор калаага барбастан, өз туулган жеринде жогорку сапаттагы мамлекеттик дипломдуу билим алууга мүмкүнчүлүк түзгөн ири академиялык борбор.',
                  'Таласский региональный многопрофильный институт Кыргызского национального университета им. Ж. Баласагына (ТАКТИ) — ведущий образовательный центр региона, предоставляющий молодежи возможность получить престижный государственный диплом национального университета непосредственно в Таласской области.',
                  'The Talas Regional Multidisciplinary Institute of Jusup Balasagyn Kyrgyz National University (TRMI) is a premier academic institution in the Talas region, giving students direct access to prestigious national university degrees in their home area.'
                )}
              </p>

              <blockquote className="my-6 py-4 px-6 bg-stone-100/70 border-l-3 border-amber-500 rounded-r-md italic text-stone-800 font-serif">
                «{t(
                  'Биздин башкы максатыбыз — ар бир студентке терең кесиптик билим, заманбап санариптик көндүмдөрдү жана улуттук адеп-ахлактык баалуулуктарды берүү. Бүгүнкү күндө бүтүрүүчүлөрүбүз облустун гана эмес, бүтүндөй республиканын мамлекеттик жана жеке секторлорунда ийгиликтүү эмгектенип жатышат.',
                  'Наша главная цель — дать каждому студенту глубокие профессиональные знания, практические цифровые навыки и верность высоким этическим стандартам.',
                  'Our primary mission is to equip every student with rigorous professional knowledge, practical digital skills, and moral leadership.'
                )}»
              </blockquote>

              <p>
                {t(
                  'Институтта 120дан ашык квалификациялуу окутуучулар, илимдин докторлору жана кандидаттары эмгектенет. Студенттер үчүн заманбап компьютердик класстар, акысыз жогорку ылдамдыктагы интернет, бай фондулуу китепкана, 250 орундуу жайлуу жатакана жана спорттук комплекс толук кандуу кызмат көрсөтөт.',
                  'В институте преподают более 120 квалифицированных преподавателей, докторов и кандидатов наук. Действуют современные компьютерные классы, богатая библиотека, общежитие на 250 мест и спортивный комплекс.',
                  'Over 120 professors and PhD researchers teach at TRMI. Students enjoy modern computer laboratories, a comprehensive library, a 250-bed student residence, and sports grounds.'
                )}
              </p>
            </div>

            {/* Feature highlights grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 pt-6 border-t border-stone-200">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded bg-blue-50 text-[#0b2545] shrink-0">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-stone-900">
                    {t('КУУнун мамлекеттик диплому', 'Гос. диплом КНУ им. Ж. Баласагына', 'Accredited KNU Diploma')}
                  </h4>
                  <p className="text-xs text-stone-600 mt-0.5">
                    {t('Эл аралык деңгээлде таанылган документ', 'Признается во всех странах мира', 'Internationally recognized qualification')}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded bg-amber-50 text-amber-800 shrink-0">
                  <Laptop className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-stone-900">
                    {t('Жаңы IT жана AI лабораториялары', 'Новые лаборатории IT и ИИ', 'Modern IT & AI Laboratories')}
                  </h4>
                  <p className="text-xs text-stone-600 mt-0.5">
                    {t('Заманбап техника жана программалык камсыздоо', 'Передовые рабочие станции и софт', 'High-speed fiber and workstations')}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded bg-emerald-50 text-emerald-800 shrink-0">
                  <Building className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-stone-900">
                    {t('250 орундуу студенттик жатакана', 'Общежитие на 250 мест', '250-Bed Student Residence')}
                  </h4>
                  <p className="text-xs text-stone-600 mt-0.5">
                    {t('Алыскы райондордун жаштары үчүн', 'Комфортные условия для иногородних', 'Equipped with Wi-Fi and kitchens')}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded bg-purple-50 text-purple-800 shrink-0">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-stone-900">
                    {t('Бюджеттик орундар жана жеңилдиктер', 'Бюджетные места и льготы', 'Scholarships & Tuition Aid')}
                  </h4>
                  <p className="text-xs text-stone-600 mt-0.5">
                    {t('ЖРТнын жыйынтыгы менен мамлекеттик гранттар', 'Гранты по результатам ОРТ', 'Merit-based state grants')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Faculties & Departments Overview Cards */}
        <div className="mt-16 pt-12 border-t border-stone-200">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <div className="text-xs font-bold tracking-wider uppercase text-stone-500 mb-1">
                {t('ИНСТИТУТТУН ТҮЗҮМҮ', 'СТРУКТУРА ИНСТИТУТА', 'INSTITUTE STRUCTURE')}
              </div>
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-stone-900">
                {t('Бөлүмдөр жана кафедралар', 'Отделения и кафедры', 'Academic Departments')}
              </h3>
            </div>
            <p className="text-xs text-stone-600 max-w-md">
              {t(
                'ТАКТИнин курамында 4 негизги окуу бөлүмү жана колледж иштеп, көп багыттуу билим берүүнү камсыздайт.',
                'В структуру института входят 4 профильных отделения и многопрофильный колледж.',
                '4 specialized academic departments and the vocational college deliver targeted degrees.'
              )}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {FACULTIES.map((fac) => {
              const name = fac.name[lang] || fac.name.ky;
              const desc = fac.description[lang] || fac.description.ky;
              return (
                <div
                  key={fac.id}
                  className="bg-white p-6 rounded-lg border border-stone-200 shadow-xs hover:border-[#0b2545]/40 hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="text-xs font-semibold text-amber-700 uppercase tracking-wider mb-2">
                      {fac.specialtyCount} {t('адистик', 'специальности', 'programs')}
                    </div>
                    <h4 className="text-base font-bold text-stone-900 leading-snug mb-3">
                      {name}
                    </h4>
                    <p className="text-xs text-stone-600 leading-relaxed mb-4">
                      {desc}
                    </p>
                  </div>
                  <div className="pt-4 border-t border-stone-100">
                    <div className="text-[11px] text-stone-500">
                      {t('Бөлүм башчысы:', 'Заведующий:', 'Department Head:')}
                    </div>
                    <div className="text-xs font-medium text-stone-900 mt-0.5">
                      {fac.headName}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
