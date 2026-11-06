import React, { useState } from 'react';
import { Calculator, CheckCircle2, FileText, Calendar, AlertCircle, ArrowRight, Award, ShieldAlert } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { SPECIALTIES } from '../data/instituteData';

interface AdmissionSectionProps {
  onOpenApply: () => void;
  onSelectProgramToApply: (programId: string) => void;
}

export const AdmissionSection: React.FC<AdmissionSectionProps> = ({ onOpenApply, onSelectProgramToApply }) => {
  const { lang, t } = useLanguage();

  // Calculator State
  const [ortScore, setOrtScore] = useState<number>(125);
  const [discountType, setDiscountType] = useState<string>('none');

  const getDiscountPercent = (type: string) => {
    switch (type) {
      case 'orphan': return 50;
      case 'gold_medal': return 20;
      case 'sibling': return 15;
      case 'disability': return 30;
      default: return 0;
    }
  };

  const discountPercent = getDiscountPercent(discountType);

  return (
    <section id="admissions" className="py-20 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-bold tracking-widest uppercase text-amber-700 mb-2">
            {t('АБИТУРИЕНТ 2026', 'АБИТУРИЕНТ 2026', 'ADMISSION CAMPAIGN 2026')}
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-stone-900 leading-tight">
            {t(
              'ТАКТИге кабыл алуу эрежелери жана документтер',
              'Правила приема и документы для поступления в ТАКТИ',
              'Admission Regulations and Application Procedures'
            )}
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 mt-2">
            {t(
              'Жалпы республикалык тестирлөөнүн (ЖРТ) жана аттестаттын негизинде кабыл алуунун толук тартиби.',
              'Полный порядок зачисления на базе Общереспубликанского тестирования (ОРТ) и школьного аттестата.',
              'Comprehensive guidance on admission quotas, deadlines, and required documentation.'
            )}
          </p>
        </div>

        {/* 2 Columns: Required Docs & Admissions Rounds */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          {/* Column 1: Required Documents */}
          <div className="lg:col-span-7 bg-[#fcfbf9] rounded-lg border border-stone-200 p-6 sm:p-8">
            <div className="flex items-center gap-2 mb-4 text-[#0b2545]">
              <FileText className="w-5 h-5 text-amber-600" />
              <h3 className="text-lg font-serif font-bold text-stone-900">
                {t('Талап кылынган документтердин тизмеси', 'Перечень необходимых документов', 'Required Documents Checklist')}
              </h3>
            </div>

            <div className="space-y-3.5 text-xs sm:text-sm text-stone-700">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-stone-900">
                    {t('Паспорт же туулгандыгы тууралуу күбөлүк', 'Паспорт (ID-карта) или свидетельство о рождении', 'National ID Card or Passport')}
                  </span>
                  <p className="text-xs text-stone-500 mt-0.5">{t('Түп нускасы жана 2 даана көчүрмөсү', 'Оригинал и 2 копии', 'Original and 2 photocopies')}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-stone-900">
                    {t('Жалпы орто билим жөнүндө аттестат / диплом', 'Аттестат о среднем образовании или диплом колледжа', 'High school diploma or college certificate')}
                  </span>
                  <p className="text-xs text-stone-500 mt-0.5">{t('Түп нускасы милдеттүү түрдө тапшырылат', 'Подлинник документа об образовании', 'Original school leaving certificate')}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-stone-900">
                    {t('ЖРТнын түп нуска талону (Сертификат)', 'Оригинал сертификата ОРТ 2026', 'Original ORT test score certificate')}
                  </span>
                  <p className="text-xs text-stone-500 mt-0.5">{t('Бакалавриат багыттары үчүн негизги тест босого баллы менен', 'Для бакалавриата с пороговыми баллами', 'With threshold passing marks for degree studies')}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-stone-900">
                    {t('3x4 өлчөмүндөгү 6 даана сүрөт', '6 фотографий размером 3х4 см', '6 color passport photographs (3x4 cm)')}
                  </span>
                  <p className="text-xs text-stone-500 mt-0.5">{t('Акыркы 6 айда тартылган, түстүү', 'Сделанные за последние 6 месяцев', 'Recent color photos')}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-stone-900">
                    {t('Медициналык маалымкат (Форма 086-У)', 'Медицинская справка по форме 086-У', 'Medical Health Certificate (Form 086-U)')}
                  </span>
                  <p className="text-xs text-stone-500 mt-0.5">{t('Флюорография жана эмдөө картасы тиркелсин', 'С флюорографией и прививочной картой', 'With chest x-ray verification')}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-stone-900">
                    {t('Аскердик билет же каттоо күбөлүгү (приписное)', 'Приписное свидетельство или военный билет', 'Military registration certificate')}
                  </span>
                  <p className="text-xs text-stone-500 mt-0.5">{t('Уландар үчүн милдеттүү', 'Для юношей призывного возраста', 'Mandatory for male applicants')}</p>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-5 border-t border-stone-200 flex flex-wrap items-center justify-between gap-4">
              <span className="text-xs text-stone-500">
                {t('Кабыл алуу комиссиясы: Талас ш., Ч. Айтматов көч. 241', 'Приемная комиссия: г. Талас, ул. Ч. Айтматова 241', 'Admissions Office: 241 Ch. Aitmatov St, Talas')}
              </span>
              <button
                onClick={onOpenApply}
                className="cursor-pointer px-4 py-2 bg-[#0b2545] hover:bg-[#13315c] text-white text-xs font-semibold rounded shadow-xs"
              >
                {t('Онлайн арыз тапшыруу', 'Подать документы онлайн', 'Submit Documents Online')}
              </button>
            </div>
          </div>

          {/* Column 2: Rounds Timeline */}
          <div className="lg:col-span-5 flex flex-col justify-between bg-stone-50 rounded-lg border border-stone-200 p-6 sm:p-8">
            <div>
              <div className="flex items-center gap-2 mb-4 text-[#0b2545]">
                <Calendar className="w-5 h-5 text-amber-600" />
                <h3 className="text-lg font-serif font-bold text-stone-900">
                  {t('Кабыл алуу этаптары (2026)', 'Этапы зачисления (2026)', '2026 Admission Rounds')}
                </h3>
              </div>

              <div className="space-y-4">
                <div className="p-3.5 bg-white rounded border border-stone-200">
                  <div className="flex items-center justify-between text-xs font-bold text-stone-900">
                    <span className="text-amber-800 uppercase tracking-wide">{t('I Тур', 'I Тур', 'Round I')}</span>
                    <span className="text-stone-500 font-mono">14 - 19 Июль</span>
                  </div>
                  <p className="text-xs text-stone-600 mt-1">
                    {t(
                      'Бюджеттик гранттарды жана келишимдик орундарды бөлүштүрүүнүн биринчи негизги этабы.',
                      'Основной этап распределения бюджетных грантов и контрактных мест по талонам ОРТ.',
                      'Primary allocation of state grants and contract seats via ORT test coupons.'
                    )}
                  </p>
                </div>

                <div className="p-3.5 bg-white rounded border border-stone-200">
                  <div className="flex items-center justify-between text-xs font-bold text-stone-900">
                    <span className="text-amber-800 uppercase tracking-wide">{t('II Тур', 'II Тур', 'Round II')}</span>
                    <span className="text-stone-500 font-mono">21 - 26 Июль</span>
                  </div>
                  <p className="text-xs text-stone-600 mt-1">
                    {t(
                      'Биринчи турдан бош калган орундарга кошумча кабыл алуу.',
                      'Дополнительный тур на оставшиеся свободными бюджетные и контрактные места.',
                      'Secondary round for remaining available seats across all programs.'
                    )}
                  </p>
                </div>

                <div className="p-3.5 bg-white rounded border border-stone-200">
                  <div className="flex items-center justify-between text-xs font-bold text-stone-900">
                    <span className="text-amber-800 uppercase tracking-wide">{t('III Тур (Колледж & Келишим)', 'III Тур (Колледж & Контракт)', 'Round III')}</span>
                    <span className="text-stone-500 font-mono">28 Июль - 15 Август</span>
                  </div>
                  <p className="text-xs text-stone-600 mt-1">
                    {t(
                      'Колледжге аттестаттын негизинде кабыл алуу жана сырттан окуу багыттарына каттоо.',
                      'Зачисление в колледж по конкурсу аттестатов и оформление на заочное отделение.',
                      'Vocational college enrollment based on grade transcripts and distance learning.'
                    )}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 p-3 bg-amber-50 rounded border border-amber-200 text-xs text-amber-900 flex items-start gap-2.5">
              <AlertCircle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
              <span>
                {t(
                  'Эскертүү: ЖРТнын негизги тестинен 110 баллдан кем алган абитуриенттер бакалавриатка кабыл алынбайт, бирок ТАКТИнин колледжине аттестат менен өтүүгө толук мүмкүнчүлүгү бар!',
                  'Важно: Абитуриенты с баллом ОРТ ниже 110 не допускаются к бакалавриату, но могут поступить в колледж ТАКТИ без ОРТ!',
                  'Note: Scores below 110 are not eligible for bachelors, but qualify directly for TRMI College!'
                )}
              </span>
            </div>
          </div>
        </div>

        {/* Interactive Feature: ЖРТ Босого балл жана Келишим калькулятору */}
        <div id="admissions-calc" className="bg-[#0b2545] text-white rounded-xl p-6 sm:p-10 shadow-lg">
          <div className="max-w-3xl mb-8">
            <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider mb-2">
              <Calculator className="w-4 h-4" />
              <span>{t('ИНТЕРАКТИВДҮҮ КУРАЛ', 'ИНТЕРАКТИВНЫЙ ИНСТРУМЕНТ', 'INTERACTIVE TOOL')}</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-white">
              {t(
                'ЖРТ упайыңызды текшерип, мүмкүнчүлүгүңүздү жана жеңилдиктериңизди эсептеңиз',
                'Калькулятор шансов поступления по ОРТ и расчет скидок на контракт',
                'ORT Score Eligibility Checker & Tuition Discount Calculator'
              )}
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">
              {t(
                'ЖРТ негизги тестинен алган божомолу упайыңызды көрсөтүңүз — система сизге туура келген адистиктерди жана бюджетке өтүү мүмкүнчүлүгүн көрсөтөт.',
                'Укажите ваш балл по основному тесту ОРТ — система подберет подходящие специальности и определит вероятность прохождения на бюджет.',
                'Enter your expected ORT score to calculate eligible degree programs and scholarship chances.'
              )}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Input Controls */}
            <div className="lg:col-span-5 bg-white/10 backdrop-blur-xs p-6 rounded-lg border border-white/15 space-y-5">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs font-semibold text-slate-200">
                    {t('ЖРТ негизги тест упайы:', 'Балл основного теста ОРТ:', 'Main ORT Score:')}
                  </label>
                  <span className="font-mono text-xl font-bold text-amber-400 tabular-nums">
                    {ortScore} {t('балл', 'баллов', 'pts')}
                  </span>
                </div>
                <input
                  type="range"
                  min="80"
                  max="240"
                  value={ortScore}
                  onChange={(e) => setOrtScore(Number(e.target.value))}
                  className="w-full accent-amber-400 cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-slate-400 font-mono mt-1">
                  <span>80 (Мин)</span>
                  <span>110 (Босого балл)</span>
                  <span>140 (Орто)</span>
                  <span>180+ (Грант)</span>
                  <span>240</span>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-200 mb-2">
                  {t('Социалдык жеңилдиктер категориясы:', 'Категория социальных льгот:', 'Social Discount Category:')}
                </label>
                <select
                  value={discountType}
                  onChange={(e) => setDiscountType(e.target.value)}
                  className="w-full bg-[#07172b] border border-white/20 rounded p-2 text-xs text-white focus:outline-hidden"
                >
                  <option value="none">{t('Жеңилдик жок (Кадимки келишим)', 'Без льгот (стандартный контракт)', 'Standard contract (no discount)')}</option>
                  <option value="orphan">{t('Тоголок жетим (50% жеңилдик)', 'Круглая сирота (скидка 50%)', 'Full orphan (-50% discount)')}</option>
                  <option value="gold_medal">{t('Алтын тамга / Кызыл аттестат (20% жеңилдик)', 'Красный аттестат (скидка 20%)', 'Honors Diploma (-20% discount)')}</option>
                  <option value="sibling">{t('Бир үй-бүлөдөн 2+ студент (15% жеңилдик)', '2+ студента из одной семьи (скидка 15%)', 'Sibling enrolled (-15% discount)')}</option>
                  <option value="disability">{t('I-II топтогу майыптык (30% жеңилдик)', 'Инвалидность I-II групп (скидка 30%)', 'Special needs (-30% discount)')}</option>
                </select>
              </div>

              <div className="p-3 bg-white/5 rounded border border-white/10 text-xs">
                <div className="flex justify-between text-slate-300">
                  <span>{t('Сиздин жеңилдик өлчөмүңүз:', 'Ваша скидка:', 'Your Discount Rate:')}</span>
                  <span className="font-bold text-amber-400 font-mono">{discountPercent}%</span>
                </div>
                <p className="text-[11px] text-slate-400 mt-1">
                  {t(
                    'Жеңилдиктер келишимдик төлөмдүн жалпы суммасынан автоматтык түрдө эсептен чыгарылат.',
                    'Скидка вычитается из годовой контрактной суммы при подтверждении документов.',
                    'Discounts apply to annual tuition upon presenting verification documents.'
                  )}
                </p>
              </div>
            </div>

            {/* Results Grid */}
            <div className="lg:col-span-7 space-y-3">
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1">
                {t('Сиздин упайыңызга ылайыктуу багыттар:', 'Подходящие специальности для ваших баллов:', 'Programs Matching Your Score:')}
              </div>

              <div className="space-y-2.5 max-h-76 overflow-y-auto pr-1">
                {SPECIALTIES.map((spec) => {
                  const meetsThreshold = spec.minOrtScore === 0 || ortScore >= spec.minOrtScore;
                  const isBudgetCandidate = ortScore >= 165 && spec.budgetSeats > 0;
                  const originalFee = spec.contractFeeSom;
                  const finalFee = Math.round(originalFee * (1 - discountPercent / 100));

                  return (
                    <div
                      key={spec.id}
                      className={`p-3 rounded-lg border transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${
                        meetsThreshold
                          ? 'bg-white/10 border-white/20 hover:bg-white/15'
                          : 'bg-white/5 border-white/5 opacity-50'
                      }`}
                    >
                      <div>
                        <div className="flex items-center gap-2 text-[11px]">
                          <span className="font-mono text-amber-300 font-semibold">{spec.code}</span>
                          <span className="text-slate-400">·</span>
                          <span className="text-slate-300">{spec.duration}</span>
                          {isBudgetCandidate && (
                            <span className="text-emerald-300 font-bold ml-1">
                              ✓ {t('Бюджетке мүмкүнчүлүк жогору!', 'Высокий шанс на бюджет!', 'High budget chance!')}
                            </span>
                          )}
                        </div>
                        <div className="text-sm font-semibold text-white mt-0.5">
                          {spec.name[lang] || spec.name.ky}
                        </div>
                      </div>

                      <div className="flex items-center justify-between sm:justify-end gap-3 shrink-0">
                        <div className="text-right">
                          <div className="text-[10px] text-slate-400">
                            {discountPercent > 0 ? t('Жеңилдик менен:', 'Со скидкой:', 'Discounted:') : t('Контракт:', 'Контракт:', 'Tuition:')}
                          </div>
                          <div className="text-xs font-mono font-bold text-amber-400 tabular-nums">
                            {finalFee.toLocaleString()} {t('сом', 'сом', 'KGS')}
                          </div>
                        </div>

                        {meetsThreshold ? (
                          <button
                            onClick={() => onSelectProgramToApply(spec.id)}
                            className="cursor-pointer px-3 py-1.5 text-xs font-semibold bg-amber-400 hover:bg-amber-300 text-blue-950 rounded transition-colors whitespace-nowrap"
                          >
                            {t('Тандоо', 'Выбрать', 'Select')}
                          </button>
                        ) : (
                          <span className="text-[11px] text-rose-300 whitespace-nowrap">
                            {t('Босого балл жетпейт', 'Недостаточно баллов', 'Score insufficient')}
                          </span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
