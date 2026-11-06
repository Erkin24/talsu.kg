import React, { useState } from 'react';
import {
  FileText,
  Calculator,
  HelpCircle,
  Phone,
  Mail,
  MapPin,
  CheckCircle2,
  Calendar,
  AlertCircle,
  GraduationCap,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useNavigation } from '../context/NavigationContext';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { PROGRAMS_LIST, TALSU_INFO, Program } from '../data/talsuData';

export const AdmissionsPages: React.FC = () => {
  const { lang, t } = useLanguage();
  const { currentPath, navigate } = useNavigation();

  // Tuition discount calculator state
  const [ortScore, setOrtScore] = useState<number>(130);
  const [discountType, setDiscountType] = useState<string>('none');
  const [selectedMajorId, setSelectedMajorId] = useState<string>('prog-se');

  const discountPercent = (() => {
    switch (discountType) {
      case 'orphan': return 50;
      case 'honors': return 25;
      case 'sibling': return 15;
      case 'disability': return 35;
      default: return 0;
    }
  })();

  const currentProgram = PROGRAMS_LIST.find((p) => p.id === selectedMajorId) || PROGRAMS_LIST[0];
  const discountedFee = Math.round(currentProgram.tuitionSom * (1 - discountPercent / 100));

  // Online quick application state
  const [applicantName, setApplicantName] = useState('');
  const [applicantPhone, setApplicantPhone] = useState('');
  const [applicantMajor, setApplicantMajor] = useState(PROGRAMS_LIST[0].id);
  const [applicantSubmitted, setApplicantSubmitted] = useState(false);
  const [submittedRegId, setSubmittedRegId] = useState('');

  const handleQuickApply = (e: React.FormEvent) => {
    e.preventDefault();
    if (!applicantName.trim() || !applicantPhone.trim()) return;

    const code = `TALSU-2026-${Math.floor(1000 + Math.random() * 9000)}`;
    setSubmittedRegId(code);
    setApplicantSubmitted(true);
  };

  const isSpecificSubpage = [
    '/admissions/programs',
    '/admissions/committee',
    '/admissions/tuition',
    '/admissions/faq'
  ].includes(currentPath);

  return (
    <div className="bg-[#fcfbf9] min-h-screen pb-20">
      <Breadcrumbs />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        {/* SUBPAGE 1: ADMISSION RULES (Default Fallback) */}
        {(!isSpecificSubpage) && (
          <div className="space-y-8">
            <div className="max-w-3xl">
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#102747] mb-2">
                {t('ТалМУга кабыл алуу эрежелери — 2026', 'Правила приема в ТалГУ — 2026', 'Admissions Regulations 2026')}
              </h2>
              <p className="text-xs sm:text-sm text-stone-600">
                {t('ЖРТнын негизинде бакалавриатка жана аттестаттын негизинде колледжге тапшыруунун расмий тартиби.', 'Порядок поступления на бакалавриат по ОРТ и в колледж по конкурсу аттестатов.', 'Official admission guidelines, threshold marks, and document requirements.')}
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Required Documents */}
              <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-xl border border-stone-200 shadow-xs space-y-4">
                <div className="flex items-center gap-2 pb-3 border-b border-stone-100 text-[#102747]">
                  <FileText className="w-5 h-5 text-amber-600" />
                  <h3 className="font-serif font-bold text-base sm:text-lg text-stone-900">
                    {t('Талап кылынуучу документтердин тизмеси:', 'Список документов для поступления:', 'Required Documents Checklist:')}
                  </h3>
                </div>

                <ul className="space-y-3 text-xs sm:text-sm text-stone-700">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-stone-900">Паспорт же ID-карта</span>
                      <p className="text-xs text-stone-500">Түп нускасы жана 2 даана көчүрмөсү</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-stone-900">Жалпы орто билим жөнүндө аттестат же диплом</span>
                      <p className="text-xs text-stone-500">Түп нускасы (подлинник) милдеттүү түрдө</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-stone-900">ЖРТ сертификатынын түп нускасы (2026-жыл)</span>
                      <p className="text-xs text-stone-500">Негизги тесттин босого балы 110 баллдан жогору</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-stone-900">3х4 өлчөмүндөгү 6 даана түстүү сүрөт</span>
                      <p className="text-xs text-stone-500">Акыркы 6 айда тартылган</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-stone-900">Медициналык маалымкат (Форма 086-У)</span>
                      <p className="text-xs text-stone-500">Флюорография жана эмдөө картасы менен</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-stone-900">Аскердик билет же каттоо күбөлүгү (приписное)</span>
                      <p className="text-xs text-stone-500">Уландар үчүн</p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Admission Timeline / Rounds */}
              <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-xl border border-stone-200 shadow-xs space-y-4 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 pb-3 border-b border-stone-100 text-[#102747]">
                    <Calendar className="w-5 h-5 text-amber-600" />
                    <h3 className="font-serif font-bold text-base sm:text-lg text-stone-900">
                      {t('Кабыл алуу турлары (2026):', 'Этапы зачисления (2026):', 'Admission Rounds (2026):')}
                    </h3>
                  </div>

                  <div className="space-y-3 pt-2 text-xs">
                    <div className="p-3 bg-stone-50 rounded-lg border border-stone-200">
                      <div className="flex justify-between font-bold text-stone-900">
                        <span>I Тур:</span>
                        <span className="text-amber-800 font-mono">14 – 19 Июль</span>
                      </div>
                      <p className="text-stone-600 mt-1">Бюджеттик гранттарды жана келишимдик орундарды бөлүштүрүү.</p>
                    </div>

                    <div className="p-3 bg-stone-50 rounded-lg border border-stone-200">
                      <div className="flex justify-between font-bold text-stone-900">
                        <span>II Тур:</span>
                        <span className="text-amber-800 font-mono">21 – 26 Июль</span>
                      </div>
                      <p className="text-stone-600 mt-1">Бош калган орундарга кошумча талондорду каттоо.</p>
                    </div>

                    <div className="p-3 bg-stone-50 rounded-lg border border-stone-200">
                      <div className="flex justify-between font-bold text-stone-900">
                        <span>III Тур (Колледж & Келишим):</span>
                        <span className="text-amber-800 font-mono">28 Июль – 15 Август</span>
                      </div>
                      <p className="text-stone-600 mt-1">Колледжге аттестат менен жана сырттан окуу багыттарына кабыл алуу.</p>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => navigate('/admissions/committee')}
                  className="cursor-pointer w-full py-2.5 bg-[#102747] hover:bg-[#174A80] text-white text-xs font-bold rounded-lg transition-colors flex items-center justify-center gap-2"
                >
                  <span>{t('Кабыл алуу комиссиясына арыз берүү', 'Подать онлайн-заявку', 'Apply Online to Committee')}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* SUBPAGE 2: PROGRAMS & SPECIALTIES */}
        {currentPath === '/admissions/programs' && (
          <div className="space-y-8">
            <div className="max-w-3xl">
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#102747] mb-2">
                {t('Багыттар жана адистиктер (2026–2027)', 'Направления и специальности (2026–2027)', 'Majors & Programs (2026–2027)')}
              </h2>
              <p className="text-xs sm:text-sm text-stone-600">
                {t('Бардык адистиктер боюнча коддор, ЖРТ босого баллы, окуу мөөнөтү жана бюджеттик гранттар.', 'Коды специальностей, пороговые баллы ОРТ, стоимость и бюджетные места.', 'All degree codes, minimum scores, duration, and state quotas.')}
              </p>
            </div>

            <div className="bg-white rounded-xl border border-stone-200 overflow-x-auto shadow-xs">
              <table className="w-full text-left text-xs">
                <thead className="bg-[#102747] text-white font-serif">
                  <tr>
                    <th className="p-3.5">Код</th>
                    <th className="p-3.5">Адистиктин аталышы</th>
                    <th className="p-3.5">Деңгээл</th>
                    <th className="p-3.5">Мөөнөтү</th>
                    <th className="p-3.5">Бюджет</th>
                    <th className="p-3.5">Контракт (сом)</th>
                    <th className="p-3.5 text-right">Аракет</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-100 text-stone-800">
                  {PROGRAMS_LIST.map((prog) => (
                    <tr key={prog.id} className="hover:bg-stone-50 transition-colors">
                      <td className="p-3.5 font-mono font-bold text-amber-800">{prog.code}</td>
                      <td className="p-3.5 font-semibold text-stone-900">{prog.title[lang] || prog.title.ky}</td>
                      <td className="p-3.5 uppercase text-[11px] font-bold text-stone-600">{prog.degree}</td>
                      <td className="p-3.5 text-stone-600">{prog.duration}</td>
                      <td className="p-3.5 font-semibold text-emerald-700 font-mono">{prog.budgetSeats} орун</td>
                      <td className="p-3.5 font-mono font-bold text-[#102747] tabular-nums">{prog.tuitionSom.toLocaleString()}</td>
                      <td className="p-3.5 text-right">
                        <button
                          onClick={() => navigate('/admissions/committee')}
                          className="cursor-pointer px-3 py-1 bg-stone-100 hover:bg-[#102747] hover:text-white rounded text-xs font-semibold transition-colors"
                        >
                          Тандоо
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* SUBPAGE 3: ADMISSIONS COMMITTEE & ONLINE REGISTRATION */}
        {currentPath === '/admissions/committee' && (
          <div className="space-y-8">
            <div className="max-w-3xl">
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#102747] mb-2">
                {t('Кабыл алуу комиссиясы жана онлайн каттоо', 'Приемная комиссия и онлайн регистрация', 'Admissions Office & Online Registration')}
              </h2>
              <p className="text-xs sm:text-sm text-stone-600">
                {t('ТалМУга тапшыруу үчүн арызды онлайн толтуруңуз же комиссиянын кеңсесине кайрылыңыз.', 'Подайте заявку онлайн или обратитесь лично в приемную комиссию университета.', 'Submit application online or visit our admissions headquarters in Talas.')}
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Online Form */}
              <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-xl border border-stone-200 shadow-xs">
                {applicantSubmitted ? (
                  <div className="text-center py-8 space-y-4">
                    <div className="w-14 h-14 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <div className="text-xs font-bold uppercase tracking-wider text-emerald-800">
                      АРЫЗ ИЙГИЛИКТҮҮ КАТТАЛДЫ!
                    </div>
                    <h3 className="text-xl font-serif font-bold text-stone-900">
                      {applicantName}
                    </h3>
                    <div className="p-4 bg-stone-50 rounded-lg border border-stone-200 text-xs text-stone-700 max-w-sm mx-auto">
                      <div>Каттоо номери: <span className="font-mono font-bold text-[#102747]">{submittedRegId}</span></div>
                      <div className="text-stone-500 mt-1">Биздин адис 24 сааттын ичинде байланышат.</div>
                    </div>
                    <button
                      onClick={() => setApplicantSubmitted(false)}
                      className="cursor-pointer px-4 py-2 bg-stone-100 hover:bg-stone-200 text-xs font-semibold rounded-md"
                    >
                      Жаңы арыз толтуруу
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleQuickApply} className="space-y-4">
                    <h3 className="font-serif font-bold text-base sm:text-lg text-stone-900 pb-2 border-b border-stone-100">
                      {t('Абитуриенттин онлайн каттоо формасы', 'Форма онлайн-регистрации абитуриента', 'Online Registration Form')}
                    </h3>

                    <div>
                      <label className="block text-xs font-semibold text-stone-700 mb-1">
                        Толук аты-жөнүңүз (Ф.И.О.): *
                      </label>
                      <input
                        type="text"
                        required
                        value={applicantName}
                        onChange={(e) => setApplicantName(e.target.value)}
                        placeholder="Мисалы: Асанов Бакыт Айтматович"
                        className="w-full p-2.5 bg-stone-50 text-xs border border-stone-300 rounded-lg focus:bg-white focus:border-[#102747] focus:outline-hidden"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-stone-700 mb-1">
                          Телефон номери: *
                        </label>
                        <input
                          type="tel"
                          required
                          value={applicantPhone}
                          onChange={(e) => setApplicantPhone(e.target.value)}
                          placeholder="+996 700 12-34-56"
                          className="w-full p-2.5 bg-stone-50 text-xs border border-stone-300 rounded-lg focus:bg-white focus:border-[#102747] focus:outline-hidden font-mono"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-stone-700 mb-1">
                          Аяктаган мектеби же лицейи:
                        </label>
                        <input
                          type="text"
                          placeholder="№1 орто мектеби"
                          className="w-full p-2.5 bg-stone-50 text-xs border border-stone-300 rounded-lg focus:bg-white focus:border-[#102747] focus:outline-hidden"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-stone-700 mb-1">
                        Тандаган адистигиңиз:
                      </label>
                      <select
                        value={applicantMajor}
                        onChange={(e) => setApplicantMajor(e.target.value)}
                        className="w-full p-2.5 bg-stone-50 text-xs border border-stone-300 rounded-lg focus:bg-white focus:border-[#102747] focus:outline-hidden"
                      >
                        {PROGRAMS_LIST.map((p) => (
                          <option key={p.id} value={p.id}>
                            [{p.code}] {p.title[lang] || p.title.ky} ({p.tuitionSom.toLocaleString()} сом)
                          </option>
                        ))}
                      </select>
                    </div>

                    <button
                      type="submit"
                      className="cursor-pointer w-full py-3 bg-[#102747] hover:bg-[#174A80] text-amber-300 font-bold text-xs rounded-lg transition-all shadow-xs flex items-center justify-center gap-2"
                    >
                      <span>{t('Арызды кабыл алуу комиссиясына жөнөтүү', 'Отправить заявление в комиссию', 'Submit Application')}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </form>
                )}
              </div>

              {/* Office Details */}
              <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-xl border border-stone-200 shadow-xs space-y-4 text-xs sm:text-sm">
                <h3 className="font-serif font-bold text-stone-900 text-base pb-2 border-b border-stone-100">
                  {t('Комиссиянын байланыштары:', 'Контакты комиссии:', 'Admissions Contacts:')}
                </h3>

                <div className="flex items-start gap-3 text-stone-700">
                  <MapPin className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                  <span>Талас ш., К. Нуржанов көч. 25 (Башкы корпус, 105-каб.)</span>
                </div>

                <div className="flex items-center gap-3 text-stone-700">
                  <Phone className="w-4 h-4 text-amber-600 shrink-0" />
                  <a href={`tel:${TALSU_INFO.phones.admissions}`} className="font-mono hover:text-[#102747]">
                    {TALSU_INFO.phones.admissions} / {TALSU_INFO.phones.admissionsMobile}
                  </a>
                </div>

                <div className="flex items-center gap-3 text-stone-700">
                  <Mail className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>{TALSU_INFO.emails.admissions}</span>
                </div>

                <div className="p-3 bg-amber-50 rounded-lg border border-amber-200 text-xs text-amber-900">
                  {t('Иш убактысы: Дүйшөмбү – Ишемби, саат 08:30дан 18:00гө чейин тыныгуусуз.', 'Режим работы: Пн – Сб, с 08:30 до 18:00 без перерыва.', 'Hours: Mon – Sat, 08:30 to 18:00 without break.')}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* SUBPAGE 4: TUITION FEES & DISCOUNT CALCULATOR */}
        {currentPath === '/admissions/tuition' && (
          <div className="space-y-8">
            <div className="max-w-3xl">
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#102747] mb-2">
                {t('Окуу акысы жана жеңилдиктер калькулятору', 'Стоимость обучения и калькулятор скидок', 'Tuition Fees & Discount Calculator')}
              </h2>
              <p className="text-xs sm:text-sm text-stone-600">
                {t('ЖРТ упайыңызга жана социалдык категорияңызга жараша контракттын суммасын түз эсептеңиз.', 'Рассчитайте сумму оплаты за обучение с учетом ваших социальных льгот и баллов ОРТ.', 'Calculate tuition fees and applicable discounts based on merit and social categories.')}
              </p>
            </div>

            <div className="bg-[#102747] text-white p-6 sm:p-10 rounded-2xl shadow-md">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Inputs */}
                <div className="lg:col-span-7 space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-stone-300 mb-1">
                      1. Тандалган багыт:
                    </label>
                    <select
                      value={selectedMajorId}
                      onChange={(e) => setSelectedMajorId(e.target.value)}
                      className="w-full p-2.5 bg-[#0b1b31] border border-white/20 rounded-lg text-xs text-white focus:outline-hidden"
                    >
                      {PROGRAMS_LIST.map((p) => (
                        <option key={p.id} value={p.id}>
                          {p.title[lang] || p.title.ky} ({p.tuitionSom.toLocaleString()} сом)
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs text-stone-300 mb-1">
                      <span>2. ЖРТ негизги тест упайы:</span>
                      <span className="font-mono font-bold text-amber-400">{ortScore} балл</span>
                    </div>
                    <input
                      type="range"
                      min="90"
                      max="240"
                      value={ortScore}
                      onChange={(e) => setOrtScore(Number(e.target.value))}
                      className="w-full accent-amber-400 cursor-pointer"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-300 mb-1">
                      3. Жеңилдик категориясы:
                    </label>
                    <select
                      value={discountType}
                      onChange={(e) => setDiscountType(e.target.value)}
                      className="w-full p-2.5 bg-[#0b1b31] border border-white/20 rounded-lg text-xs text-white focus:outline-hidden"
                    >
                      <option value="none">Жеңилдик жок (Кадимки келишим)</option>
                      <option value="orphan">Тоголок жетим (50% жеңилдик)</option>
                      <option value="honors">Алтын тамга / Кызыл аттестат (25% жеңилдик)</option>
                      <option value="disability">I же II топтогу майыптык (35% жеңилдик)</option>
                      <option value="sibling">Бир үй-бүлөдөн 2+ студент окуса (15% жеңилдик)</option>
                    </select>
                  </div>
                </div>

                {/* Calculation Output Card */}
                <div className="lg:col-span-5 bg-white/10 backdrop-blur-xs p-6 rounded-xl border border-white/20 text-center space-y-3">
                  <div className="text-xs font-bold uppercase tracking-wider text-amber-400">
                    Эсептөө жыйынтыгы
                  </div>
                  <div className="text-3xl font-serif font-bold text-white font-mono tabular-nums">
                    {discountedFee.toLocaleString()} сом
                  </div>
                  <div className="text-xs text-stone-300">
                    {discountPercent > 0 ? (
                      <span className="text-emerald-400 font-bold">({discountPercent}% жеңилдик колдонулду)</span>
                    ) : (
                      'Стандарттык жылдык акы'
                    )}
                  </div>
                  <div className="text-[11px] text-stone-400 border-t border-white/10 pt-2">
                    {ortScore >= 165 && (
                      <span className="text-amber-300 font-semibold block">
                        ★ {ortScore} балл менен мамлекеттик грантка (акысыз окууга) конкурска катышууга толук мүмкүнчүлүгүңүз бар!
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* SUBPAGE 5: FAQ */}
        {currentPath === '/admissions/faq' && (
          <div className="space-y-8">
            <div className="max-w-3xl">
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#102747] mb-2">
                {t('Көп берилүүчү суроолор жана жооптор (FAQ)', 'Часто задаваемые вопросы абитуриентов', 'Frequently Asked Questions')}
              </h2>
              <p className="text-xs sm:text-sm text-stone-600">
                {t('Абитуриенттер жана ата-энелер көп кайрылган негизги суроолор боюнча расмий жооптор.', 'Ответы на самые частые вопросы поступающих в Таласский госуниверситет.', 'Common admissions, hostel, diploma, and exam score queries.')}
              </p>
            </div>

            <div className="space-y-3">
              {[
                {
                  q: 'Колледжге тапшыруу үчүн ЖРТ керекпи?',
                  a: 'Жок! ТалМУнун колледжине 9- жана 11-класстын базасында ЖРТсыз, мектептик аттестаттын же күбөлүктүн орточо балы боюнча гана кабыл алынат.'
                },
                {
                  q: 'Бакалавриат үчүн босого балл канча?',
                  a: '2026-жылдагы эрежелер боюнча негизги тесттин босого балы 110 баллды түзөт. Педагогикалык жана так илимдер багыттары үчүн тиешелүү предметтик тесттер талап кылынат.'
                },
                {
                  q: 'Башка облустан келген студенттерге жатакана берилеби?',
                  a: 'Ооба, университеттин Талас шаарында 250 орундуу, толук оңдолгон, Wi-Fi жана бардык шарты бар заманбап студенттик жатаканасы бар.'
                },
                {
                  q: 'Колледжди бүтүргөндөн кийин ТалМУнун жогорку курсуна өтүүгө болобу?',
                  a: 'Ооба, колледждин бүтүрүүчүлөрү ЖРТсыз эле өз адистиги боюнча ТалМУнун бакалавриатына 2-3-курска түз кабыл алынып, кыскартылган мөөнөттө жогорку билим алышат.'
                }
              ].map((faq, idx) => (
                <div key={idx} className="bg-white p-5 rounded-xl border border-stone-200 shadow-2xs space-y-2">
                  <h3 className="font-serif font-bold text-stone-900 text-sm sm:text-base flex items-center gap-2">
                    <HelpCircle className="w-4 h-4 text-amber-600 shrink-0" />
                    <span>{faq.q}</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed pl-6">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
