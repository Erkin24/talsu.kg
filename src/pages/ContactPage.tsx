import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  Navigation,
  Car,
  Bus,
  CheckCircle2,
  Building2,
  Globe2,
  ExternalLink,
  Info
} from 'lucide-react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { useLanguage } from '../context/LanguageContext';
import { TALSU_INFO, CAMPUS_BUILDINGS, CampusBuilding } from '../data/talsuData';

export const ContactPage: React.FC = () => {
  const { lang, t } = useLanguage();

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    department: 'general',
    subject: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [activeBuildingTab, setActiveBuildingTab] = useState(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.message) return;
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-stone-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <Breadcrumbs />

        {/* Page Header */}
        <div className="bg-white rounded-2xl p-8 border border-stone-200 shadow-xs">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-[#102747]/10 text-[#102747] mb-3">
                {t('Расмий байланыш жана даректер', 'Официальные контакты и адреса', 'Official Contacts & Locations')}
              </span>
              <h1 className="text-3xl sm:text-4xl font-serif font-black text-[#102747]">
                {t('Байланыш маалыматтары', 'Контактная информация', 'Contact Information')}
              </h1>
              <p className="text-stone-600 mt-2 text-sm sm:text-base max-w-2xl">
                {t(
                  'Талас мамлекеттик университетинин ректораты, факультеттери, кабыл алуу комиссиясы жана окуу имараттары боюнча толук маалымат.',
                  'Полная информация о ректорате, факультетах, приемной комиссии и учебных корпусах Таласского государственного университета.',
                  'Full information about the TalSU rectorate, academic faculties, admissions office, and university campus buildings.'
                )}
              </p>
            </div>

            {/* 30-Year Jubilee Badge */}
            <div className="px-5 py-4 rounded-xl bg-gradient-to-br from-amber-500/10 via-[#102747]/5 to-[#174A80]/10 border border-amber-300 text-[#102747] flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#102747] text-amber-400 font-bold flex items-center justify-center text-sm">
                30
              </div>
              <div>
                <div className="text-xs font-bold text-amber-800 uppercase tracking-wider">
                  {t('Мааракелик байланыш', 'Юбилейный портал', 'Jubilee Hotline')}
                </div>
                <div className="text-sm font-black text-[#102747]">
                  1996 — 2026
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Top Quick Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-xl border border-stone-200 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-[#102747]/10 text-[#102747] flex items-center justify-center mb-4">
                <MapPin className="w-5 h-5 text-[#102747]" />
              </div>
              <h3 className="font-bold text-stone-900 text-sm mb-1">{t('Башкы дарек', 'Главный адрес', 'Main Address')}</h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                {t('Талас шаары, К. Нуржанов көчөсү 25 (аллея)', 'г. Талас, ул. К. Нуржанова 25 (аллея)', '25 K. Nurzhanov St, Talas')}
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-stone-100 text-[11px] text-amber-700 font-medium">
              {t('Башкы корпус №1 (Ректорат)', 'Главный корпус №1 (Ректорат)', 'Campus 1 (Rectorate)')}
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl border border-stone-200 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center mb-4">
                <Phone className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-stone-900 text-sm mb-1">{t('Байланыш телефондору', 'Телефоны ректората', 'Telephone Directory')}</h3>
              <div className="text-xs text-stone-700 space-y-1 font-mono">
                <div>+996 (3422) 5-20-15</div>
                <div>+996 (3422) 5-24-18</div>
              </div>
            </div>
            <div className="mt-4 pt-3 border-t border-stone-100 text-[11px] text-stone-500">
              {t('Кабыл алуу бөлмөсү', 'Приемная ректората', 'Rectorate Office')}
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl border border-stone-200 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-blue-50 text-[#174A80] flex items-center justify-center mb-4">
                <Mail className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-stone-900 text-sm mb-1">{t('Электрондук почта', 'Электронная почта', 'E-mail Inquiries')}</h3>
              <div className="text-xs text-stone-700 space-y-1">
                <div className="font-medium text-[#174A80]">info@talsu.kg</div>
                <div className="font-medium text-stone-600">priem@talsu.kg</div>
              </div>
            </div>
            <div className="mt-4 pt-3 border-t border-stone-100 text-[11px] text-stone-500">
              {t('Расмий каттар үчүн', 'Для официальных писем', 'Official correspondence')}
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl border border-stone-200 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-amber-50 text-amber-700 flex items-center justify-center mb-4">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-stone-900 text-sm mb-1">{t('Иш убактысы', 'График работы', 'Working Hours')}</h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                {t('Дүйшөмбү – Жума: 08:30 – 17:30', 'Понедельник – Пятница: 08:30 – 17:30', 'Mon – Fri: 08:30 – 17:30')}
              </p>
              <p className="text-[11px] text-stone-500 mt-0.5">
                {t('Тыныгуу: 12:30 – 13:30', 'Обед: 12:30 – 13:30', 'Lunch: 12:30 – 13:30')}
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-stone-100 text-[11px] text-emerald-700 font-medium">
              {t('Ишемби, жекшемби — дем алыш', 'Суббота, воскресенье — выходной', 'Sat & Sun — Weekend')}
            </div>
          </div>
        </div>

        {/* Interactive Campus Buildings Selector */}
        <div className="bg-white rounded-2xl p-8 border border-stone-200 shadow-xs">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div>
              <h2 className="text-2xl font-serif font-bold text-[#102747]">
                {t('ТалМУнун окуу имараттары жана жатаканасы', 'Учебные корпуса и общежитие ТалГУ', 'TalSU Campus Buildings & Dormitory')}
              </h2>
              <p className="text-xs sm:text-sm text-stone-500 mt-1">
                {t('Талас шаарындагы университеттин 5 негизги объектиси', '5 основных объектов университета в городе Талас', '5 main university campus facilities across Talas')}
              </p>
            </div>

            {/* Quick Map Directions Buttons */}
            <div className="flex items-center gap-2">
              <a
                href="https://maps.google.com/?q=Talas+State+University"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-stone-200 bg-stone-50 hover:bg-stone-100 text-xs font-semibold text-stone-700 transition-colors"
              >
                <Globe2 className="w-3.5 h-3.5 text-blue-600" />
                <span>Google Maps</span>
                <ExternalLink className="w-3 h-3 text-stone-400" />
              </a>
              <a
                href="https://2gis.kg/talas"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-stone-200 bg-stone-50 hover:bg-stone-100 text-xs font-semibold text-stone-700 transition-colors"
              >
                <Navigation className="w-3.5 h-3.5 text-emerald-600" />
                <span>2GIS Талас</span>
                <ExternalLink className="w-3 h-3 text-stone-400" />
              </a>
            </div>
          </div>

          {/* Building Tabs */}
          <div className="flex flex-wrap gap-2 mb-6 border-b border-stone-100 pb-3">
            {CAMPUS_BUILDINGS.map((building: CampusBuilding, idx: number) => (
              <button
                key={idx}
                onClick={() => setActiveBuildingTab(idx)}
                className={`cursor-pointer px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                  activeBuildingTab === idx
                    ? 'bg-[#102747] text-white shadow-xs'
                    : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                }`}
              >
                {building.name[lang] || building.name.ky}
              </button>
            ))}
          </div>

          {/* Selected Building Details */}
          {(() => {
            const b = CAMPUS_BUILDINGS[activeBuildingTab];
            return (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 bg-stone-50 p-6 rounded-xl border border-stone-200">
                <div className="lg:col-span-2 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[#102747] text-amber-400 font-bold flex items-center justify-center shrink-0">
                      <Building2 className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[#102747]">
                        {b.name[lang] || b.name.ky}
                      </h3>
                      <p className="text-xs text-stone-600 flex items-center gap-1 mt-0.5">
                        <MapPin className="w-3.5 h-3.5 text-amber-600" />
                        <span>{b.address[lang] || b.address.ky}</span>
                      </p>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                    {b.description[lang] || b.description.ky}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3 border-t border-stone-200 text-xs">
                    <div>
                      <span className="text-stone-500 block mb-0.5">{t('Шаардык транспорт:', 'Городской транспорт:', 'Public transport:')}</span>
                      <span className="font-semibold text-stone-800">
                        {t('Маршрут №1, №3, №5, №7', 'Маршрутка №1, №3, №5, №7', 'Minibuses #1, #3, #5, #7')}
                      </span>
                    </div>
                    <div>
                      <span className="text-stone-500 block mb-0.5">{t('Ориентир:', 'Ориентир:', 'Landmark:')}</span>
                      <span className="font-semibold text-stone-800">
                        {activeBuildingTab === 0
                          ? t('Борбордук аллея, мэрияга жакын', 'Центральная аллея, рядом с мэрией', 'Central avenue, near Mayor office')
                          : activeBuildingTab === 3
                          ? t('ТалМУ Колледжи, Ч. Айтматов көчөсү', 'Колледж ТалГУ, ул. Ч. Айтматова', 'TalSU College, Aitmatov St')
                          : t('Талас шаарынын борбору', 'Центр города Талас', 'Talas City Center')}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-5 rounded-lg border border-stone-200 flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="text-xs font-bold text-amber-800 uppercase tracking-wider">
                      {t('Маршрут түзүү', 'Проложить маршрут', 'Get Directions')}
                    </div>
                    <p className="text-xs text-stone-600 leading-relaxed">
                      {t(
                        'Навигатор аркылуу оңой табуу үчүн Google Maps же 2GIS тиркемесинде ачыңыз.',
                        'Откройте в Google Maps или 2GIS для быстрого построения маршрута.',
                        'Open in Google Maps or 2GIS for turn-by-turn navigation.'
                      )}
                    </p>
                  </div>

                  <div className="mt-4 space-y-2">
                    <a
                      href={`https://maps.google.com/?q=${encodeURIComponent('Talas State University ' + (b.address.ky || ''))}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cursor-pointer w-full py-2 px-3 bg-[#102747] hover:bg-[#174A80] text-white rounded-lg text-xs font-bold flex items-center justify-center gap-2 transition-colors"
                    >
                      <Navigation className="w-3.5 h-3.5 text-amber-400" />
                      <span>{t('Google Картада ачуу', 'Открыть на Google Карте', 'Open in Google Maps')}</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })()}
        </div>

        {/* Travel Guide for Other Oblasts */}
        <div className="bg-white rounded-2xl p-8 border border-stone-200 shadow-xs">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-lg bg-amber-500/15 text-amber-800 flex items-center justify-center">
              <Car className="w-5 h-5 text-amber-600" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#102747]">
                {t(
                  'Башка облустардан келген абитуриенттер жана коноктор үчүн жол көрсөткүч',
                  'Памятка для абитуриентов и гостей из других областей Кыргызстана',
                  'Travel Guide for Students & Visitors Arriving from Other Regions'
                )}
              </h2>
              <p className="text-xs text-stone-500">
                {t('Бишкек, Чүй, Ош, Жалал-Абад, Ысык-Көл, Нарын, Баткенден Таласка жетүү', 'Как добраться в Талас со всех регионов Кыргызстана', 'How to reach Talas from Bishkek, Osh, Jalal-Abad, and beyond')}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 rounded-xl border border-stone-200 bg-stone-50/50 space-y-3">
              <div className="flex items-center gap-2 font-bold text-sm text-[#102747]">
                <Bus className="w-4 h-4 text-amber-600" />
                <span>{t('Бишкек жана Чүй облусунан', 'Из Бишкека и Чуйской области', 'From Bishkek & Chuy')}</span>
              </div>
              <p className="text-xs text-stone-600 leading-relaxed">
                {t(
                  'Бишкектеги Батыш автобекетинен күн сайын таңкы саат 07:00дөн 18:00гө чейин таксилер жана маршруттук таксилер жөнөйт. Жол Төө-Ашуу жана Өтмөк ашуулары аркылуу өтүп, болжол менен 4–5 саатты түзөт (аралыгы 290 км).',
                  'С Западного автовокзала г. Бишкек ежедневно курсируют микроавтобусы и такси. Маршрут пролегает через перевалы Төө-Ашуу и Отмөк (около 4-5 часов пути, 290 км).',
                  'Taxis and minibuses run daily from Bishkek West Bus Station via Too-Ashuu and Otmok mountain passes (approx. 4–5 hours, 290 km).'
                )}
              </p>
            </div>

            <div className="p-5 rounded-xl border border-stone-200 bg-stone-50/50 space-y-3">
              <div className="flex items-center gap-2 font-bold text-sm text-[#102747]">
                <Car className="w-4 h-4 text-amber-600" />
                <span>{t('Ош, Жалал-Абад жана Баткенден', 'Из Оша, Джалал-Абада и Баткена', 'From Southern Regions')}</span>
              </div>
              <p className="text-xs text-stone-600 leading-relaxed">
                {t(
                  'Суусамыр өрөөнүнө чыгып, Париж / Суусамыр кесилиши аркылуу Өтмөк ашуусу менен Таласка түз түшүүгө болот. Же болбосо Бишкек багытындагы каттамдар аркылуу жетүүгө шарт бар.',
                  'Через Суусамырскую долину и перевал Отмөк напрямую в Талас, либо с пересадкой в Суусамыре/Бишкеке.',
                  'Travel via Suusamyr Valley directly across Otmok Pass into Talas, or transfer at the Suusamyr junction.'
                )}
              </p>
            </div>

            <div className="p-5 rounded-xl border border-stone-200 bg-stone-50/50 space-y-3">
              <div className="flex items-center gap-2 font-bold text-sm text-[#102747]">
                <Building2 className="w-4 h-4 text-amber-600" />
                <span>{t('Талас шаарынын ичинде', 'Внутри города Талас', 'Inside Talas City')}</span>
              </div>
              <p className="text-xs text-stone-600 leading-relaxed">
                {t(
                  'Талас автобекетинен ТалМУнун башкы корпусуна чейин №1 же №5 маршруттук таксилер менен 10 мүнөттө же жөө 20 мүнөттө жетүүгө болот. Студенттер үчүн жатакана Б. Аманбаев көчөсү 18 дарегинде жайгашкан.',
                  'От автовокзала Таласа до Главного корпуса ТалГУ — 10 минут на маршрутках №1 или №5. Студенческое общежитие находится на ул. Б. Аманбаева 18.',
                  'From Talas Central Bus Station to TalSU Main Campus: 10 mins via minibuses #1 or #5. Dormitory is on B. Amanbaev St 18.'
                )}
              </p>
            </div>
          </div>
        </div>

        {/* Contact Form & Department Directory */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Direct Feedback Form */}
          <div className="bg-white rounded-2xl p-8 border border-stone-200 shadow-xs">
            <h2 className="text-xl font-serif font-bold text-[#102747] mb-2">
              {t('Суроо же кайрылуу жөнөтүү', 'Отправить обращение или вопрос', 'Send Message / Inquiry')}
            </h2>
            <p className="text-xs text-stone-500 mb-6">
              {t(
                'Ректоратка, кабыл алуу комиссиясына же окуу бөлүмүнө электрондук кат жөнөтүңүз.',
                'Отправьте электронное обращение в ректорат, приемную комиссию или учебный отдел.',
                'Send an inquiry to the Rectorate, Admissions Committee, or Academic Affairs.'
              )}
            </p>

            {isSubmitted ? (
              <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-xl text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                <h4 className="font-bold text-emerald-900 text-base">
                  {t('Кайрылууңуз кабыл алынды!', 'Ваше обращение принято!', 'Inquiry Submitted Successfully!')}
                </h4>
                <p className="text-xs text-emerald-700 leading-relaxed">
                  {t(
                    'Рахмат! Сиздин катыңыз тиешелүү бөлүмгө жөнөтүлдү. Биздин адистер сиз көрсөткөн телефон же электрондук почта аркылуу жакын арада байланышат.',
                    'Спасибо! Ваше письмо направлено в соответствующий отдел. Специалисты свяжутся с вами в ближайшее время.',
                    'Thank you! Your message has been routed to the appropriate department. Our team will contact you shortly.'
                  )}
                </p>
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({ name: '', phone: '', email: '', department: 'general', subject: '', message: '' });
                  }}
                  className="mt-3 px-4 py-2 bg-emerald-700 text-white text-xs font-bold rounded-lg cursor-pointer"
                >
                  {t('Жаңы кат жөнөтүү', 'Отправить новое сообщение', 'Send another message')}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    {t('Аты-жөнүңүз *', 'Ваше ФИО *', 'Full Name *')}
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder={t('Мисалы: Асанов Арсен', 'Например: Асанов Арсен', 'e.g. Arsen Asanov')}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-stone-200 text-xs focus:ring-2 focus:ring-[#102747] focus:outline-hidden"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-stone-700 mb-1">
                      {t('Телефон номериңиз *', 'Номер телефона *', 'Phone Number *')}
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+996 (___) __-__-__"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-stone-200 text-xs focus:ring-2 focus:ring-[#102747] focus:outline-hidden font-mono"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-stone-700 mb-1">
                      {t('Электрондук почта', 'E-mail адрес', 'Email Address')}
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="example@mail.kg"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-stone-200 text-xs focus:ring-2 focus:ring-[#102747] focus:outline-hidden"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    {t('Кайсы бөлүмгө кайрыласыз? *', 'Кому адресовано обращение? *', 'Select Recipient Department *')}
                  </label>
                  <select
                    value={formData.department}
                    onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-stone-200 text-xs focus:ring-2 focus:ring-[#102747] focus:outline-hidden bg-white"
                  >
                    <option value="general">{t('Ректорат / Жалпы бөлүм', 'Ректорат / Общий отдел', 'General / Rectorate')}</option>
                    <option value="admissions">{t('Кабыл алуу комиссиясы (Абитуриент-2026)', 'Приемная комиссия (Абитуриент-2026)', 'Admissions Office (2026)')}</option>
                    <option value="academic">{t('Окуу-усулдук бөлүмү', 'Учебно-методический отдел', 'Academic Affairs')}</option>
                    <option value="science">{t('Илимий бөлүм жана магистратура', 'Научный отдел и магистратура', 'Research & Graduate School')}</option>
                    <option value="international">{t('Эл аралык байланыштар бөлүмү', 'Отдел международных связей', 'International Relations')}</option>
                    <option value="college">{t('ТалМУ көп тармактуу Колледжи', 'Многопрофильный колледж ТалГУ', 'TalSU Vocational College')}</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    {t('Кайрылуунун темасы *', 'Тема сообщения *', 'Subject *')}
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder={t('Мисалы: Контракт төлөмү боюнча маалымат', 'Например: Вопрос о поступлении и контракте', 'e.g. Admissions and tuition inquiry')}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-stone-200 text-xs focus:ring-2 focus:ring-[#102747] focus:outline-hidden"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 mb-1">
                    {t('Билдирүү / Сурооңуз *', 'Ваш вопрос или текст обращения *', 'Your Message *')}
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder={t('Сурооңузду толук жазыңыз...', 'Подробно опишите ваш вопрос...', 'Please provide details...')}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-stone-200 text-xs focus:ring-2 focus:ring-[#102747] focus:outline-hidden"
                  />
                </div>

                <button
                  type="submit"
                  className="cursor-pointer w-full py-3 bg-[#102747] hover:bg-[#174A80] text-white text-xs font-bold rounded-lg shadow-sm flex items-center justify-center gap-2 transition-colors"
                >
                  <Send className="w-4 h-4 text-amber-400" />
                  <span>{t('Кайрылууну жөнөтүү', 'Отправить обращение', 'Submit Inquiry')}</span>
                </button>
              </form>
            )}
          </div>

          {/* Department Directory Table */}
          <div className="bg-white rounded-2xl p-8 border border-stone-200 shadow-xs flex flex-col justify-between">
            <div>
              <h2 className="text-xl font-serif font-bold text-[#102747] mb-2">
                {t('Университеттин түзүмдүк бөлүмдөрү', 'Контакты структурных подразделений', 'University Department Contacts')}
              </h2>
              <p className="text-xs text-stone-500 mb-6">
                {t('Түз байланыш номерлери жана электрондук почталар', 'Прямые телефоны и почтовые ящики', 'Direct phone extensions and email addresses')}
              </p>

              <div className="space-y-3 divide-y divide-stone-100 text-xs">
                <div className="pt-2 flex items-center justify-between">
                  <div>
                    <div className="font-bold text-stone-900">{t('Ректордун кабыл алуу бөлүмү', 'Приемная ректора', 'Rector Office')}</div>
                    <div className="text-[11px] text-stone-500">Башкы корпус, 2-кабат, №201</div>
                  </div>
                  <div className="font-mono text-stone-700 font-semibold">+996 (3422) 5-20-15</div>
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <div>
                    <div className="font-bold text-stone-900">{t('Окуу жана илимий иштер боюнча проректор', 'Проректор по учебной и научной работе', 'Vice-Rector')}</div>
                    <div className="text-[11px] text-stone-500">Башкы корпус, №205</div>
                  </div>
                  <div className="font-mono text-stone-700 font-semibold">+996 (3422) 5-24-18</div>
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <div>
                    <div className="font-bold text-stone-900">{t('Кабыл алуу комиссиясы (Абитуриент-2026)', 'Приемная комиссия', 'Admissions Office')}</div>
                    <div className="text-[11px] text-amber-700 font-medium">priem@talsu.kg</div>
                  </div>
                  <div className="font-mono text-stone-700 font-semibold">+996 (702) 45-67-89</div>
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <div>
                    <div className="font-bold text-stone-900">{t('Окуу-усулдук бөлүмү (ОУБ)', 'Учебно-методический отдел', 'Academic Affairs')}</div>
                    <div className="text-[11px] text-stone-500">Башкы корпус, №210</div>
                  </div>
                  <div className="font-mono text-stone-700 font-semibold">+996 (3422) 5-30-44</div>
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <div>
                    <div className="font-bold text-stone-900">{t('Эл аралык байланыштар бөлүмү', 'Отдел международных связей', 'International Relations')}</div>
                    <div className="text-[11px] text-stone-500">iro@talsu.kg</div>
                  </div>
                  <div className="font-mono text-stone-700 font-semibold">+996 (3422) 5-11-20</div>
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <div>
                    <div className="font-bold text-stone-900">{t('ТалМУ Колледжинин дирекциясы', 'Дирекция Колледжа ТалГУ', 'College Directorate')}</div>
                    <div className="text-[11px] text-stone-500">Ч. Айтматов көч. 241</div>
                  </div>
                  <div className="font-mono text-stone-700 font-semibold">+996 (3422) 5-62-31</div>
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <div>
                    <div className="font-bold text-stone-900">{t('Студенттик жатакана башчысы', 'Комендант общежития', 'Dormitory Administration')}</div>
                    <div className="text-[11px] text-stone-500">Б. Аманбаев көч. 18</div>
                  </div>
                  <div className="font-mono text-stone-700 font-semibold">+996 (3422) 5-18-90</div>
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 rounded-xl bg-amber-50/60 border border-amber-200 text-xs text-amber-900 flex items-start gap-2.5">
              <Info className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
              <span>
                {t(
                  'Мааракелик иш-чараларга карата байланыш жана сунуштарды ректораттын info@talsu.kg почтасына «ТалМУ — 30 жыл» темасы менен жөнөтсөңүз болот.',
                  'Предложения и поздравления к 30-летию направляйте на info@talsu.kg с темой «ТалГУ — 30 лет».',
                  'Suggestions and greetings for the 30th anniversary can be sent to info@talsu.kg with the subject "TalSU — 30 Years".'
                )}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
