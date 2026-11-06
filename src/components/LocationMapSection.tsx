import React, { useState } from 'react';
import { MapPin, Navigation, Bus, Car, Phone, ExternalLink, Compass, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface LocationPoint {
  id: string;
  name: {
    ky: string;
    ru: string;
    en: string;
  };
  address: {
    ky: string;
    ru: string;
    en: string;
  };
  coords: { lat: number; lng: number };
  description: {
    ky: string;
    ru: string;
    en: string;
  };
  howToReach: {
    ky: string;
    ru: string;
    en: string;
  };
  googleMapsUrl: string;
  twoGisUrl: string;
  yandexUrl: string;
}

export const LocationMapSection: React.FC = () => {
  const { lang, t } = useLanguage();

  const locations: LocationPoint[] = [
    {
      id: 'main-campus',
      name: {
        ky: 'ТАКТИнин Башкы окуу имараты',
        ru: 'Главный учебный корпус ТАКТИ',
        en: 'TRMI Main Academic Campus'
      },
      address: {
        ky: 'Талас ш., Ч. Айтматов көчөсү 241',
        ru: 'г. Талас, ул. Ч. Айтматова 241',
        en: '241 Ch. Aitmatov St, Talas'
      },
      coords: { lat: 42.5228, lng: 72.2425 },
      description: {
        ky: 'Ректорат, кабыл алуу комиссиясы, IT-лабораториялар, китепкана жана лекциялык аудиториялар.',
        ru: 'Дирекция, приемная комиссия, IT-лаборатории, библиотека и лекционные залы.',
        en: 'Admissions office, IT laboratories, central library, and academic faculties.'
      },
      howToReach: {
        ky: 'Талас автобекетинен №1, №2, №4 маршруткалары менен «Университет» аялдамасына чейин (7 мүнөт).',
        ru: 'От автовокзала Таласа на маршрутках №1, 2, 4 до остановки «Университет» (7 минут).',
        en: 'From Talas Bus Station via minibuses #1, #2, #4 to “University” stop (7 min).'
      },
      googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=42.5228,72.2425',
      twoGisUrl: 'https://2gis.kg/talas/search/42.5228%2C72.2425',
      yandexUrl: 'https://yandex.com/maps/?pt=72.2425,42.5228&z=17&l=map'
    },
    {
      id: 'dormitory',
      name: {
        ky: 'ТАКТИ Студенттик жатаканасы',
        ru: 'Студенческое общежитие ТАКТИ',
        en: 'TRMI Student Residence Hall'
      },
      address: {
        ky: 'Талас ш., Б. Аманбаев көчөсү 18',
        ru: 'г. Талас, ул. Б. Аманбаева 18',
        en: '18 B. Amanbaev St, Talas'
      },
      coords: { lat: 42.5195, lng: 72.238 },
      description: {
        ky: '250 орундуу, толук оңдолгон студенттик жатакана, ашкана, окуу залы жана коопсуздук кызматы.',
        ru: 'Комфортабельное общежитие на 250 мест, кухни, читальный зал и охрана.',
        en: '250-bed residence with Wi-Fi, study lounges, laundry and 24/7 security.'
      },
      howToReach: {
        ky: 'Башкы окуу имаратынан жөө 5-7 мүнөттүк аралыкта жайгашкан.',
        ru: 'В 5-7 минутах пешком от главного учебного корпуса.',
        en: '5-7 minutes walking distance from the main campus.'
      },
      googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=42.5195,72.238',
      twoGisUrl: 'https://2gis.kg/talas/search/42.5195%2C72.238',
      yandexUrl: 'https://yandex.com/maps/?pt=72.238,42.5195&z=17&l=map'
    },
    {
      id: 'bus-station',
      name: {
        ky: 'Талас шаардык борбордук автобекети',
        ru: 'Центральный автовокзал г. Талас',
        en: 'Talas Central Bus Station'
      },
      address: {
        ky: 'Талас ш., Бердике Баатыр көчөсү 14',
        ru: 'г. Талас, ул. Бердике Баатыра 14',
        en: '14 Berdike Baatyr St, Talas'
      },
      coords: { lat: 42.526, lng: 72.235 },
      description: {
        ky: 'Бишкек, Ош, Жалал-Абад, Ысык-Көл, Нарын жана райондордон келген маршруткалар менен таксилердин токтоочу жайы.',
        ru: 'Пункт прибытия междугородних маршруток и такси из Бишкека, Оша и других областей.',
        en: 'Arrival terminal for intercity transport from Bishkek, Osh, and other regions.'
      },
      howToReach: {
        ky: 'Бул жерден ТАКТИнин кабыл алуу комиссиясына чейин шаардык такси (80-100 сом) же маршрутка бар.',
        ru: 'Отсюда до приемной комиссии ТАКТИ такси стоит 80-100 сом или на маршрутке.',
        en: 'Direct local transport or taxi (80-100 KGS) to TRMI.'
      },
      googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=42.526,72.235',
      twoGisUrl: 'https://2gis.kg/talas/search/42.526%2C72.235',
      yandexUrl: 'https://yandex.com/maps/?pt=72.235,42.526&z=17&l=map'
    }
  ];

  const [activeLocationId, setActiveLocationId] = useState<string>('main-campus');
  const activePoint = locations.find((l) => l.id === activeLocationId) || locations[0];

  return (
    <section id="map-location" className="py-20 bg-[#f8f7f4] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-bold tracking-widest uppercase text-amber-700 mb-2">
            {t('ДАРЕК ЖАНА КЕЛҮҮ МАРШРУТУ', 'АДРЕС И МАРШРУТЫ ПРОЕЗДА', 'CAMPUS LOCATION & DIRECTIONS')}
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-stone-900 leading-tight">
            {t(
              'Институттун дареги жана башка облустардан келүү жолдору',
              'Адрес института и как добраться из других областей Кыргызстана',
              'Institute Location & Regional Travel Guide'
            )}
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 mt-2">
            {t(
              'Башка облустардан (Бишкек, Чүй, Ош, Жалал-Абад, Ысык-Көл, Нарын, Баткен) келген абитуриенттер жана коноктор үчүн Google Карта жана толук жол көрсөтмөсү.',
              'Для абитуриентов и родителей, приезжающих из других областей: метки на карте, ссылки на навигаторы и маршруты междугороднего транспорта.',
              'Comprehensive guide for applicants traveling from Bishkek, Chuy, Osh, and other regions with Google Maps navigation.'
            )}
          </p>
        </div>

        {/* Location Point Selector Tabs */}
        <div className="flex items-center gap-2 mb-6 overflow-x-auto pb-2">
          {locations.map((loc) => {
            const isSelected = loc.id === activeLocationId;
            return (
              <button
                key={loc.id}
                onClick={() => setActiveLocationId(loc.id)}
                className={`cursor-pointer px-4 py-2.5 text-xs font-semibold rounded-lg transition-all flex items-center gap-2 whitespace-nowrap shadow-2xs ${
                  isSelected
                    ? 'bg-[#0b2545] text-white shadow-sm'
                    : 'bg-white text-stone-700 hover:bg-stone-100 border border-stone-200'
                }`}
              >
                <MapPin className={`w-3.5 h-3.5 ${isSelected ? 'text-amber-400' : 'text-stone-400'}`} />
                <span>{loc.name[lang] || loc.name.ky}</span>
              </button>
            );
          })}
        </div>

        {/* Map & Active Point Details Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-14">
          {/* Left Column: Interactive Map Frame */}
          <div className="lg:col-span-7 bg-white rounded-xl border border-stone-300 overflow-hidden shadow-xs flex flex-col justify-between">
            <div className="p-4 bg-stone-100/80 border-b border-stone-200 flex flex-wrap items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-2 text-stone-700">
                <Compass className="w-4 h-4 text-[#0b2545]" />
                <span className="font-semibold">{activePoint.name[lang] || activePoint.name.ky}</span>
                <span className="text-stone-400 font-mono">({activePoint.coords.lat}, {activePoint.coords.lng})</span>
              </div>
              <span className="text-[11px] text-emerald-700 font-semibold flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" />
                {t('Талас шаары', 'г. Талас', 'Talas City')}
              </span>
            </div>

            {/* Embedded Map Visual */}
            <div className="relative w-full h-84 sm:h-96 bg-stone-200">
              <iframe
                title="Институттун жайгашкан жери"
                width="100%"
                height="100%"
                className="w-full h-full border-0"
                loading="lazy"
                src={`https://www.openstreetmap.org/export/embed.html?bbox=${activePoint.coords.lng - 0.015}%2C${activePoint.coords.lat - 0.010}%2C${activePoint.coords.lng + 0.015}%2C${activePoint.coords.lat + 0.010}&layer=mapnik&marker=${activePoint.coords.lat}%2C${activePoint.coords.lng}`}
              />

              {/* Floating Map Navigation Badge */}
              <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-xs px-3 py-2 rounded-lg shadow-md border border-stone-200 text-xs">
                <div className="font-bold text-[#0b2545]">{activePoint.address[lang] || activePoint.address.ky}</div>
                <div className="text-[11px] text-stone-500">{t('Талас облусу, Кыргызстан', 'Таласская область, Кыргызстан', 'Talas Region, Kyrgyzstan')}</div>
              </div>
            </div>

            {/* Direct External Map Links Buttons Strip */}
            <div className="p-4 bg-stone-50 border-t border-stone-200 flex flex-wrap items-center justify-between gap-3">
              <span className="text-xs text-stone-600 font-medium">
                {t('Навигатор менен ачуу:', 'Открыть в навигаторе:', 'Open with Navigator:')}
              </span>

              <div className="flex flex-wrap items-center gap-2">
                <a
                  href={activePoint.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer px-3.5 py-2 bg-white hover:bg-stone-100 text-[#0b2545] border border-stone-300 rounded-md text-xs font-semibold flex items-center gap-1.5 shadow-2xs transition-all hover:border-[#0b2545]"
                >
                  <Navigation className="w-3.5 h-3.5 text-blue-600" />
                  <span>Google Maps</span>
                  <ExternalLink className="w-3 h-3 text-stone-400" />
                </a>

                <a
                  href={activePoint.twoGisUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer px-3 py-2 bg-white hover:bg-stone-100 text-stone-800 border border-stone-300 rounded-md text-xs font-semibold flex items-center gap-1.5 shadow-2xs transition-all hover:border-emerald-600"
                >
                  <span className="text-emerald-700 font-black">2GIS</span>
                  <ExternalLink className="w-3 h-3 text-stone-400" />
                </a>

                <a
                  href={activePoint.yandexUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer px-3 py-2 bg-white hover:bg-stone-100 text-stone-800 border border-stone-300 rounded-md text-xs font-semibold flex items-center gap-1.5 shadow-2xs transition-all hover:border-red-600"
                >
                  <span className="text-red-600 font-bold">Яндекс</span>
                  <ExternalLink className="w-3 h-3 text-stone-400" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Selected Location Details & Arrival Info */}
          <div className="lg:col-span-5 flex flex-col justify-between bg-white rounded-xl border border-stone-300 p-6 sm:p-7 shadow-xs">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold text-amber-700 uppercase tracking-wide mb-1">
                <MapPin className="w-4 h-4 text-amber-600" />
                <span>{t('ТАЛАС ШААРЫНДАГЫ ДАРЕК', 'АДРЕС В ГОРОДЕ ТАЛАС', 'CAMPUS ADDRESS')}</span>
              </div>

              <h3 className="text-xl font-serif font-bold text-stone-900 leading-snug">
                {activePoint.name[lang] || activePoint.name.ky}
              </h3>

              <div className="mt-2 text-xs text-stone-500 font-medium">
                {activePoint.address[lang] || activePoint.address.ky}
              </div>

              <p className="mt-4 text-xs sm:text-sm text-stone-700 leading-relaxed">
                {activePoint.description[lang] || activePoint.description.ky}
              </p>

              <div className="mt-5 p-4 bg-blue-50/80 rounded-lg border border-blue-200 text-xs text-blue-950 space-y-2">
                <div className="font-bold flex items-center gap-1.5 text-[#0b2545]">
                  <Car className="w-4 h-4 text-amber-600" />
                  <span>{t('Шаар ичинде жетүү жолу:', 'Как доехать по городу:', 'Local Transportation:')}</span>
                </div>
                <p className="leading-relaxed">
                  {activePoint.howToReach[lang] || activePoint.howToReach.ky}
                </p>
              </div>
            </div>

            {/* Assistance hotline for out-of-town students */}
            <div className="mt-6 pt-5 border-t border-stone-200">
              <div className="text-xs font-bold text-stone-900 mb-1">
                {t('Башка облустан келгендерге жардам кызматы:', 'Служба помощи иногородним абитуриентам:', 'Out-of-Town Applicants Support Desk:')}
              </div>
              <p className="text-xs text-stone-600 mb-3">
                {t(
                  'Эгер шаарды билбей жатсаңыз, кабыл алуу комиссиясынын кызматкерлери автобекеттен тосуп алууга жана жатаканага жайгаштырууга жардам беришет.',
                  'Если вы впервые в Таласе, сотрудники приемной комиссии помогут сориентироваться от автовокзала и заселиться в общежитие.',
                  'If visiting Talas for the first time, our admission coordinators provide directions from the station to dorms.'
                )}
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="tel:+996702456789"
                  className="cursor-pointer px-4 py-2 bg-[#0b2545] hover:bg-[#13315c] text-white text-xs font-semibold rounded flex items-center gap-2 shadow-2xs"
                >
                  <Phone className="w-3.5 h-3.5 text-amber-400" />
                  <span>+996 (702) 45-67-89</span>
                </a>
                <a
                  href="tel:+996342252418"
                  className="cursor-pointer px-4 py-2 bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs font-semibold rounded flex items-center gap-2"
                >
                  <Phone className="w-3.5 h-3.5 text-stone-600" />
                  <span>+996 (3422) 5-24-18</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Regional Route Guide from other Oblasts of Kyrgyzstan */}
        <div className="bg-white rounded-xl border border-stone-300 p-6 sm:p-8 shadow-xs">
          <div className="flex items-center gap-2.5 mb-6 text-[#0b2545]">
            <Bus className="w-5 h-5 text-amber-600" />
            <h3 className="text-lg sm:text-xl font-serif font-bold text-stone-900">
              {t(
                'Кыргызстандын башка облустарынан Таласка келүү маршруттары',
                'Маршруты проезда в Талас из других областей Кыргызстана',
                'Intercity Travel Guide from Other Regions of Kyrgyzstan'
              )}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Route 1: From Bishkek & Chuy */}
            <div className="p-4.5 bg-stone-50 rounded-lg border border-stone-200">
              <div className="text-xs font-bold text-amber-800 uppercase tracking-wide mb-1">
                {t('Бишкек шаары жана Чүй облусунан', 'Из Бишкека и Чуйской области', 'From Bishkek & Chuy')}
              </div>
              <div className="text-sm font-bold text-stone-900 mb-2">
                {t('Бишкек → Төө-Ашуу → Өтмөк → Талас', 'Бишкек → Тёо-Ашуу → Отмок → Талас', 'Bishkek → Too-Ashuu → Otmok → Talas')}
              </div>
              <ul className="text-xs text-stone-600 space-y-1.5 leading-relaxed">
                <li>• <strong>{t('Жөнөө жери:', 'Отправление:', 'Departure:')}</strong> Бишкек, Батыш автобекети же «Шлагбаум» аймагы.</li>
                <li>• <strong>{t('Транспорт:', 'Транспорт:', 'Transport:')}</strong> Такси (7-орундуу спринтер/жеңил авто) күн сайын саат 06:00дөн 21:00гө чейин тынымсыз чыгат.</li>
                <li>• <strong>{t('Жол убактысы жана аралык:', 'Время и расстояние:', 'Duration & Distance:')}</strong> 290 км, 4–5 саат.</li>
                <li>• <strong>{t('Болжолдуу жол кире:', 'Стоимость:', 'Approx Fare:')}</strong> 600 - 800 сом.</li>
              </ul>
            </div>

            {/* Route 2: From Osh, Jalal-Abad & Batken */}
            <div className="p-4.5 bg-stone-50 rounded-lg border border-stone-200">
              <div className="text-xs font-bold text-amber-800 uppercase tracking-wide mb-1">
                {t('Ош, Жалал-Абад жана Баткен облустарынан', 'Из Оша, Джалал-Абада и Баткена', 'From Osh, Jalal-Abad & Batken')}
              </div>
              <div className="text-sm font-bold text-stone-900 mb-2">
                {t('Токтогул — Суусамыр — Өтмөк же Бишкек аркылуу', 'Через Токтогул — Суусамыр или Бишкек', 'Via Toktogul — Suusamyr or Bishkek')}
              </div>
              <ul className="text-xs text-stone-600 space-y-1.5 leading-relaxed">
                <li>• <strong>{t('Маршрут 1:', 'Маршрут 1:', 'Route 1:')}</strong> Түндүк-Түштүк альтернативдик жолу аркылуу Суусамыр өрөөнүнө чыгып, Өтмөк ашуусу менен Таласка түз түшүү.</li>
                <li>• <strong>{t('Маршрут 2:', 'Маршрут 2:', 'Route 2:')}</strong> Бишкекке чейин келип, андан ары Таласка күнүмдүк таксилер менен өтүү.</li>
                <li>• <strong>{t('Кеңеш:', 'Совет:', 'Travel Tip:')}</strong> Алыстан келген абитуриенттерге жатакана ошол эле күнү берилет.</li>
              </ul>
            </div>

            {/* Route 3: From Issyk-Kul & Naryn */}
            <div className="p-4.5 bg-stone-50 rounded-lg border border-stone-200">
              <div className="text-xs font-bold text-amber-800 uppercase tracking-wide mb-1">
                {t('Ысык-Көл жана Нарын облустарынан', 'Из Иссык-Куля и Нарына', 'From Issyk-Kul & Naryn')}
              </div>
              <div className="text-sm font-bold text-stone-900 mb-2">
                {t('Каракол / Нарын → Балыкчы → Бишкек → Талас', 'Нарын / Балыкчы → Бишкек → Талас', 'Naryn / Balykchy → Bishkek → Talas')}
              </div>
              <ul className="text-xs text-stone-600 space-y-1.5 leading-relaxed">
                <li>• <strong>{t('Транзит:', 'Транзит:', 'Transit:')}</strong> Бишкектин Батыш автобекети аркылуу жеңил туташуу.</li>
                <li>• <strong>{t('Жалпы убакыт:', 'Общее время:', 'Total Time:')}</strong> Нарындан ~7-8 саат, Караколдон ~9 саат.</li>
                <li>• <strong>{t('Эртең менен келүү:', 'Прибытие:', 'Arrival:')}</strong> Түшкө чейин келип, документтерди тапшырууга толук жетишесиз.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
