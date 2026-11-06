import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, AlertCircle, FileText, ArrowRight, Printer, Sparkles, Building } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { SPECIALTIES } from '../data/instituteData';

interface OnlineApplicationModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedProgramId?: string | null;
}

export const OnlineApplicationModal: React.FC<OnlineApplicationModalProps> = ({
  isOpen,
  onClose,
  preselectedProgramId
}) => {
  const { lang, t } = useLanguage();

  const [step, setStep] = useState<number>(1);
  const [formData, setFormData] = useState({
    fullName: '',
    pin: '',
    phone: '',
    email: '',
    region: 'Талас шаары',
    schoolName: '',
    graduationYear: '2026',
    ortCertificateNumber: '',
    ortScore: '130',
    specialtyId: preselectedProgramId || 'spec-it',
    studyMode: 'Күндүзгү',
    studyType: 'contract', // budget or contract
    discountCategory: 'none'
  });

  const [regId, setRegId] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    if (preselectedProgramId) {
      setFormData((prev) => ({ ...prev, specialtyId: preselectedProgramId }));
    }
  }, [preselectedProgramId]);

  if (!isOpen) return null;

  const handleNextStep = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    if (step === 1) {
      if (!formData.fullName.trim() || formData.fullName.length < 5) {
        setErrorMessage(t('Сураныч, толук аты-жөнүңүздү (Ф.И.О.) жазыңыз', 'Пожалуйста, укажите полное ФИО', 'Please enter your full name'));
        return;
      }
      if (!formData.phone.trim()) {
        setErrorMessage(t('Байланыш телефон номерин жазыңыз', 'Укажите контактный номер телефона', 'Please enter your phone number'));
        return;
      }
      setStep(2);
    } else if (step === 2) {
      if (!formData.schoolName.trim()) {
        setErrorMessage(t('Мектеп же окуу жайыңыздын атын жазыңыз', 'Укажите название школы или учебного заведения', 'Please enter school name'));
        return;
      }
      setStep(3);
    } else if (step === 3) {
      // Complete registration
      const randomNum = Math.floor(1000 + Math.random() * 9000);
      const generatedId = `TAKTI-2026-${randomNum}`;
      setRegId(generatedId);
      setStep(4);
    }
  };

  const handlePrintReceipt = () => {
    window.print();
  };

  const selectedSpec = SPECIALTIES.find((s) => s.id === formData.specialtyId);

  return (
    <div className="fixed inset-0 z-50 bg-black/65 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl max-h-[92vh] overflow-y-auto">
        {/* Top Header */}
        <div className="flex items-start justify-between gap-4 pb-4 border-b border-stone-200">
          <div>
            <div className="text-xs font-mono font-bold text-amber-700 uppercase tracking-wider">
              {t('КАБЫЛ АЛУУ 2026', 'ПРИЕМ 2026', 'ADMISSION 2026')}
            </div>
            <h3 className="text-xl font-serif font-bold text-stone-900 mt-0.5">
              {t(
                'ТАКТИге онлайн каттоо жана арыз берүү',
                'Онлайн подача заявления на поступление в ТАКТИ',
                'TRMI Online Admission Application Form'
              )}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="text-stone-400 hover:text-stone-800 p-1 rounded cursor-pointer"
            aria-label="Жабуу"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Step Indicator */}
        {step < 4 && (
          <div className="flex items-center justify-between my-5 text-xs">
            <div className="flex items-center gap-2">
              <span className={`w-6 h-6 rounded-full flex items-center justify-center font-bold font-mono ${step >= 1 ? 'bg-[#0b2545] text-white' : 'bg-stone-200 text-stone-600'}`}>
                1
              </span>
              <span className={step === 1 ? 'font-bold text-stone-900' : 'text-stone-500'}>
                {t('Жеке маалымат', 'Личные данные', 'Personal')}
              </span>
            </div>
            <div className="h-0.5 w-8 bg-stone-200" />
            <div className="flex items-center gap-2">
              <span className={`w-6 h-6 rounded-full flex items-center justify-center font-bold font-mono ${step >= 2 ? 'bg-[#0b2545] text-white' : 'bg-stone-200 text-stone-600'}`}>
                2
              </span>
              <span className={step === 2 ? 'font-bold text-stone-900' : 'text-stone-500'}>
                {t('Билими & ЖРТ', 'Образование и ОРТ', 'Education')}
              </span>
            </div>
            <div className="h-0.5 w-8 bg-stone-200" />
            <div className="flex items-center gap-2">
              <span className={`w-6 h-6 rounded-full flex items-center justify-center font-bold font-mono ${step >= 3 ? 'bg-[#0b2545] text-white' : 'bg-stone-200 text-stone-600'}`}>
                3
              </span>
              <span className={step === 3 ? 'font-bold text-stone-900' : 'text-stone-500'}>
                {t('Адистикти тандоо', 'Выбор программы', 'Program')}
              </span>
            </div>
          </div>
        )}

        {errorMessage && (
          <div className="mb-4 p-3 bg-rose-50 border border-rose-200 rounded text-xs text-rose-800 flex items-center gap-2">
            <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
            <span>{errorMessage}</span>
          </div>
        )}

        {/* Multi-step Form Body */}
        {step === 1 && (
          <form onSubmit={handleNextStep} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-stone-700 mb-1">
                {t('Абитуриенттин толук аты-жөнү (Ф.И.О.): *', 'ФИО абитуриента полностью: *', 'Applicant Full Name: *')}
              </label>
              <input
                type="text"
                required
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                placeholder="Мисалы: Асанов Бакыт Айтматович"
                className="w-full p-2.5 bg-stone-50 text-xs border border-stone-300 rounded focus:bg-white focus:border-[#0b2545] focus:outline-hidden"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">
                  {t('ПИН (Жеке идентификациялык номери 14 сандуу):', 'ПИН (14 цифр в паспорте):', 'National PIN (14 digits):')}
                </label>
                <input
                  type="text"
                  maxLength={14}
                  value={formData.pin}
                  onChange={(e) => setFormData({ ...formData, pin: e.target.value })}
                  placeholder="20512199801234"
                  className="w-full p-2.5 bg-stone-50 text-xs border border-stone-300 rounded focus:bg-white focus:border-[#0b2545] focus:outline-hidden font-mono"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">
                  {t('Байланыш телефону: *', 'Контактный телефон: *', 'Phone Number: *')}
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+996 700 12-34-56"
                  className="w-full p-2.5 bg-stone-50 text-xs border border-stone-300 rounded focus:bg-white focus:border-[#0b2545] focus:outline-hidden font-mono"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">
                  {t('Электрондук почта (Email):', 'Электронная почта:', 'Email Address:')}
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="student@example.kg"
                  className="w-full p-2.5 bg-stone-50 text-xs border border-stone-300 rounded focus:bg-white focus:border-[#0b2545] focus:outline-hidden"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">
                  {t('Жашаган аймагы (Район):', 'Район проживания:', 'District / Town:')}
                </label>
                <select
                  value={formData.region}
                  onChange={(e) => setFormData({ ...formData, region: e.target.value })}
                  className="w-full p-2.5 bg-stone-50 text-xs border border-stone-300 rounded focus:bg-white focus:border-[#0b2545] focus:outline-hidden"
                >
                  <option value="Талас шаары">Талас шаары</option>
                  <option value="Талас району">Талас району</option>
                  <option value="Бакай-Ата району">Бакай-Ата району</option>
                  <option value="Айтматов (Кара-Буура) району">Айтматов (Кара-Буура) району</option>
                  <option value="Манас району">Манас району</option>
                  <option value="Башка аймактар">Башка аймак / Республика</option>
                </select>
              </div>
            </div>

            <div className="pt-4 flex justify-end gap-3 border-t border-stone-200">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-xs font-medium text-stone-600 hover:text-stone-900 cursor-pointer"
              >
                {t('Жокко чыгаруу', 'Отмена', 'Cancel')}
              </button>
              <button
                type="submit"
                className="px-5 py-2 text-xs font-semibold bg-[#0b2545] hover:bg-[#13315c] text-white rounded cursor-pointer flex items-center gap-1.5"
              >
                <span>{t('Улантуу', 'Далее', 'Next')}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </form>
        )}

        {step === 2 && (
          <form onSubmit={handleNextStep} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-stone-700 mb-1">
                {t('Аяктаган мектеп же орто окуу жайынын аталышы: *', 'Название оконченной школы или колледжа: *', 'School Name: *')}
              </label>
              <input
                type="text"
                required
                value={formData.schoolName}
                onChange={(e) => setFormData({ ...formData, schoolName: e.target.value })}
                placeholder="Мисалы: №1 А.С. Пушкин атындагы орто мектеби"
                className="w-full p-2.5 bg-stone-50 text-xs border border-stone-300 rounded focus:bg-white focus:border-[#0b2545] focus:outline-hidden"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">
                  {t('Аяктаган жылы:', 'Год окончания:', 'Graduation Year:')}
                </label>
                <select
                  value={formData.graduationYear}
                  onChange={(e) => setFormData({ ...formData, graduationYear: e.target.value })}
                  className="w-full p-2.5 bg-stone-50 text-xs border border-stone-300 rounded focus:bg-white focus:border-[#0b2545] focus:outline-hidden font-mono"
                >
                  <option value="2026">2026</option>
                  <option value="2025">2025</option>
                  <option value="2024">2024</option>
                  <option value="2023">2023 же андан мурда</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">
                  {t('ЖРТ сертификатынын номери (бар болсо):', 'Номер сертификата ОРТ:', 'ORT Certificate #:')}
                </label>
                <input
                  type="text"
                  value={formData.ortCertificateNumber}
                  onChange={(e) => setFormData({ ...formData, ortCertificateNumber: e.target.value })}
                  placeholder="№ 26004512"
                  className="w-full p-2.5 bg-stone-50 text-xs border border-stone-300 rounded focus:bg-white focus:border-[#0b2545] focus:outline-hidden font-mono"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-stone-700 mb-1">
                {t('ЖРТ негизги тест баллы (Колледжге тапшыргандар «0» коет):', 'Балл основного теста ОРТ (для колледжа «0»):', 'ORT Main Test Score:')}
              </label>
              <input
                type="number"
                min="0"
                max="240"
                value={formData.ortScore}
                onChange={(e) => setFormData({ ...formData, ortScore: e.target.value })}
                className="w-full p-2.5 bg-stone-50 text-xs border border-stone-300 rounded focus:bg-white focus:border-[#0b2545] focus:outline-hidden font-mono"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-stone-700 mb-1">
                {t('Социалдык жеңилдиктер категориясы (жеңилдик алуу үчүн):', 'Льготная категория:', 'Tuition Discount Category:')}
              </label>
              <select
                value={formData.discountCategory}
                onChange={(e) => setFormData({ ...formData, discountCategory: e.target.value })}
                className="w-full p-2.5 bg-stone-50 text-xs border border-stone-300 rounded focus:bg-white focus:border-[#0b2545] focus:outline-hidden"
              >
                <option value="none">{t('Жеңилдик жок (Жөнөкөй)', 'Без льгот', 'None')}</option>
                <option value="orphan">{t('Тоголок жетим (50-100% жеңилдик)', 'Круглая сирота (скидка до 100%)', 'Orphan')}</option>
                <option value="disability">{t('I же II топтогу майыптык', 'Инвалидность I-II группы', 'Disability')}</option>
                <option value="gold_medal">{t('«Алтын тамга» же артыкчылык аттестат', 'Красный аттестат', 'Honors Medal')}</option>
                <option value="sibling">{t('Үй-бүлөдөн 2 же андан көп студент окуйт', '2+ студента из семьи', 'Sibling discount')}</option>
              </select>
            </div>

            <div className="pt-4 flex justify-between gap-3 border-t border-stone-200">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="px-4 py-2 text-xs font-medium text-stone-600 hover:text-stone-900 cursor-pointer"
              >
                {t('Артка', 'Назад', 'Back')}
              </button>
              <button
                type="submit"
                className="px-5 py-2 text-xs font-semibold bg-[#0b2545] hover:bg-[#13315c] text-white rounded cursor-pointer flex items-center gap-1.5"
              >
                <span>{t('Улантуу', 'Далее', 'Next')}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </form>
        )}

        {step === 3 && (
          <form onSubmit={handleNextStep} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-stone-700 mb-1">
                {t('Тапшырууну каалаган адистигиңизди тандаңыз: *', 'Выберите специальность для поступления: *', 'Select Academic Program: *')}
              </label>
              <select
                value={formData.specialtyId}
                onChange={(e) => setFormData({ ...formData, specialtyId: e.target.value })}
                className="w-full p-2.5 bg-stone-50 text-xs border border-stone-300 rounded focus:bg-white focus:border-[#0b2545] focus:outline-hidden"
              >
                {SPECIALTIES.map((spec) => (
                  <option key={spec.id} value={spec.id}>
                    [{spec.code}] {spec.name[lang] || spec.name.ky} ({spec.degree === 'college' ? t('Колледж', 'Колледж', 'College') : t('Бакалавр', 'Бакалавр', 'Bachelor')})
                  </option>
                ))}
              </select>
            </div>

            {selectedSpec && (
              <div className="p-3.5 bg-stone-50 rounded border border-stone-200 text-xs space-y-1.5">
                <div className="flex justify-between">
                  <span className="text-stone-500">{t('Окуу мөөнөтү:', 'Срок обучения:', 'Duration:')}</span>
                  <span className="font-semibold text-stone-900">{selectedSpec.duration}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-500">{t('Келишим баасы:', 'Стоимость:', 'Tuition:')}</span>
                  <span className="font-bold text-[#0b2545] font-mono tabular-nums">
                    {selectedSpec.contractFeeSom.toLocaleString()} {t('сом / жыл', 'сом / год', 'KGS / year')}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-500">{t('Бюджеттик орун:', 'Бюджетных мест:', 'Budget Seats:')}</span>
                  <span className="font-semibold text-emerald-700">{selectedSpec.budgetSeats} {t('орун', 'мест', 'seats')}</span>
                </div>
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">
                  {t('Окутуу формасы:', 'Форма обучения:', 'Study Mode:')}
                </label>
                <select
                  value={formData.studyMode}
                  onChange={(e) => setFormData({ ...formData, studyMode: e.target.value })}
                  className="w-full p-2.5 bg-stone-50 text-xs border border-stone-300 rounded focus:bg-white focus:border-[#0b2545] focus:outline-hidden"
                >
                  <option value="Күндүзгү">{t('Күндүзгү (Очное)', 'Дневная (Очно)', 'Full-time')}</option>
                  <option value="Сырттан">{t('Сырттан окуу (Заочное)', 'Заочная форма', 'Part-time / Distance')}</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">
                  {t('Талапкердин макамы:', 'Статус участия:', 'Application Channel:')}
                </label>
                <select
                  value={formData.studyType}
                  onChange={(e) => setFormData({ ...formData, studyType: e.target.value })}
                  className="w-full p-2.5 bg-stone-50 text-xs border border-stone-300 rounded focus:bg-white focus:border-[#0b2545] focus:outline-hidden"
                >
                  <option value="contract">{t('Келишимдик негизде (Контракт)', 'На контрактной основе', 'Contract basis')}</option>
                  <option value="budget">{t('Мамлекеттик грант (Бюджет сынак)', 'Бюджетный грант (по конкурсу)', 'State Scholarship competition')}</option>
                </select>
              </div>
            </div>

            <div className="p-3 bg-blue-50/70 rounded border border-blue-200 text-xs text-blue-950">
              <span className="font-semibold">✓ {t('Маалымат текшерилди:', 'Подтверждение:', 'Confirmation:')}</span>{' '}
              {t(
                'Арыз катталгандан кийин кабыл алуу комиссиясынын электрондук реестрине түшөт жана сизге расмий каттоо талону берилет.',
                'После отправки заявление регистрируется в единой базе приемной комиссии института.',
                'Your application will be officially recorded in the admissions registry.'
              )}
            </div>

            <div className="pt-4 flex justify-between gap-3 border-t border-stone-200">
              <button
                type="button"
                onClick={() => setStep(2)}
                className="px-4 py-2 text-xs font-medium text-stone-600 hover:text-stone-900 cursor-pointer"
              >
                {t('Артка', 'Назад', 'Back')}
              </button>
              <button
                type="submit"
                className="px-6 py-2.5 text-xs font-bold bg-[#0b2545] hover:bg-[#13315c] text-white rounded cursor-pointer flex items-center gap-2 shadow-xs"
              >
                <span>{t('Арызды расмий каттоо', 'Зарегистрировать заявление', 'Submit Application')}</span>
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              </button>
            </div>
          </form>
        )}

        {/* Step 4: Success Receipt */}
        {step === 4 && (
          <div className="space-y-6 text-center py-4">
            <div className="w-14 h-14 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-emerald-700">
                {t('АРЫЗ ИЙГИЛИКТҮҮ КАТТАЛДЫ!', 'ЗАЯВЛЕНИЕ УСПЕШНО ЗАРЕГИСТРИРОВАНО!', 'APPLICATION REGISTERED SUCCESSFULLY!')}
              </div>
              <h3 className="text-xl font-serif font-bold text-stone-900 mt-1">
                {formData.fullName}
              </h3>
              <p className="text-xs text-stone-600 mt-1">
                {t(
                  'Сиздин документтериңиз ТАКТИнин кабыл алуу комиссиясына келип түштү.',
                  'Ваши документы поступили в приемную комиссию института.',
                  'Your application has been received by the TRMI Admissions Board.'
                )}
              </p>
            </div>

            {/* Official Registration Receipt Card */}
            <div className="bg-[#fcfbf9] rounded-lg border border-stone-300 p-5 text-left text-xs space-y-2.5 shadow-2xs">
              <div className="flex items-center justify-between pb-2 border-b border-stone-200">
                <span className="font-semibold text-stone-500">{t('Каттоо номери:', 'Регистрационный номер:', 'Registration ID:')}</span>
                <span className="font-mono font-bold text-base text-[#0b2545]">{regId}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-500">{t('Тандалган багыт:', 'Выбранная специальность:', 'Selected Program:')}</span>
                <span className="font-semibold text-stone-900 text-right max-w-xs">{selectedSpec?.name[lang] || selectedSpec?.name.ky}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-500">{t('Байланыш телефону:', 'Телефон:', 'Phone:')}</span>
                <span className="font-mono font-medium text-stone-800">{formData.phone}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-500">{t('ЖРТ упайы:', 'Балл ОРТ:', 'ORT Score:')}</span>
                <span className="font-mono font-medium text-stone-800">{formData.ortScore} балл</span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-500">{t('Катталган күнү:', 'Дата регистрации:', 'Date:')}</span>
                <span className="font-mono text-stone-800">2026-жыл, 26-Март, 14:30</span>
              </div>
            </div>

            <p className="text-xs text-stone-500 max-w-md mx-auto">
              {t(
                'Каттоо номериңизди сактап коюңуз. Кабыл алуу комиссиясынын адиси 24 сааттын ичинде сиз менен байланышат.',
                'Сохраните ваш регистрационный номер. Специалист свяжется с вами в течение 24 часов.',
                'Keep your registration number handy. An admissions officer will contact you within 24 hours.'
              )}
            </p>

            <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
              <button
                onClick={handlePrintReceipt}
                className="cursor-pointer px-4 py-2 bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs font-semibold rounded flex items-center gap-2"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>{t('Квитанцияны басып чыгаруу', 'Распечатать квитанцию', 'Print Receipt')}</span>
              </button>
              <button
                onClick={onClose}
                className="cursor-pointer px-6 py-2 bg-[#0b2545] hover:bg-[#13315c] text-white text-xs font-semibold rounded"
              >
                {t('Бүттү / Жабуу', 'Готово / Закрыть', 'Done / Close')}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
