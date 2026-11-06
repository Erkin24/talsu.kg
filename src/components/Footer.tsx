import React from 'react';
import { MapPin, Phone, Mail, Clock, ShieldCheck, Landmark } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer id="contacts" className="bg-[#07172b] text-slate-300 text-xs border-t border-blue-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Col 1: Institute Brand & Identity */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded bg-[#0b2545] border border-amber-400/40 text-amber-400 flex items-center justify-center font-bold text-base tracking-tighter">
                КУУ
              </div>
              <div>
                <div className="font-bold text-white text-sm tracking-tight">
                  ТАКТИ КУУ
                </div>
                <div className="text-[11px] text-amber-400/90 font-serif">
                  Талас институту
                </div>
              </div>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed">
              {t(
                'Жусуп Баласагын атындагы Кыргыз улуттук университетинин Талас аймактык көп тармактуу институту. Жогорку жана орто кесиптик мамлекеттик билим берүү флагманы.',
                'Таласский региональный многопрофильный институт Кыргызского национального университета им. Ж. Баласагына. Флагман государственного образования региона.',
                'Talas Regional Multidisciplinary Institute of Jusup Balasagyn Kyrgyz National University. Official regional higher education institution.'
              )}
            </p>
            <div className="pt-2 flex items-center gap-2 text-stone-400">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span className="text-[11px]">
                {t('Мамлекеттик лицензия № LD180000421', 'Гос. лицензия № LD180000421', 'State License # LD180000421')}
              </span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 font-serif">
              {t('Бөлүмдөр', 'Навигация', 'Quick Links')}
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a href="#about" className="hover:text-amber-400 transition-colors">
                  {t('Институт жөнүндө жана жетекчилик', 'Об институте и руководство', 'About & Leadership')}
                </a>
              </li>
              <li>
                <a href="#programs" className="hover:text-amber-400 transition-colors">
                  {t('Адистиктер жана багыттар', 'Специальности и колледж', 'Academic Programs')}
                </a>
              </li>
              <li>
                <a href="#admissions" className="hover:text-amber-400 transition-colors">
                  {t('Абитуриент-2026: Кабыл алуу эрежелери', 'Абитуриент-2026: Правила приема', 'Admissions 2026')}
                </a>
              </li>
              <li>
                <a href="#schedule" className="hover:text-amber-400 transition-colors">
                  {t('Сабактардын жадыбалы', 'Расписание занятий', 'Class Schedule')}
                </a>
              </li>
              <li>
                <a href="#library" className="hover:text-amber-400 transition-colors">
                  {t('Электрондук китепкана', 'Электронная библиотека', 'Digital Library')}
                </a>
              </li>
              <li>
                <a href="#news" className="hover:text-amber-400 transition-colors">
                  {t('Жаңылыктар жана окуялар', 'Новости и события', 'News & Events')}
                </a>
              </li>
              <li>
                <a href="#map-location" className="hover:text-amber-400 transition-colors font-semibold text-amber-300">
                  {t('Дарек жана Google Карта', 'Адрес и Google Карта', 'Location & Google Map')}
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Academic Faculties */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 font-serif">
              {t('Факультеттер', 'Отделения', 'Departments')}
            </h4>
            <ul className="space-y-2.5 text-slate-400">
              <li>{t('Маалыматтык технологиялар & IT', 'Информационные технологии и IT', 'IT & Software Engineering')}</li>
              <li>{t('Педагогика жана тилдер бөлүмү', 'Педагогика и языки', 'Pedagogy & Languages')}</li>
              <li>{t('Экономика жана укук таануу', 'Экономика и юриспруденция', 'Economics & Law')}</li>
              <li>{t('ТАКТИ көп тармактуу Колледжи', 'Многопрофильный колледж ТАКТИ', 'Vocational College')}</li>
              <li>{t('Сырттан жана кечки окуу бөлүмү', 'Заочное отделение', 'Distance Education')}</li>
            </ul>
          </div>

          {/* Col 4: Contacts & Official Hours */}
          <div className="space-y-3.5">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 font-serif">
              {t('Байланыш', 'Контакты', 'Contact')}
            </h4>
            <a href="#map-location" className="flex items-start gap-2.5 hover:text-white transition-colors group">
              <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
              <span className="group-hover:underline">
                {t(
                  'Кыргыз Республикасы, Талас облусу, Талас шаары, Ч. Айтматов көчөсү 241',
                  'Кыргызская Республика, Таласская область, г. Талас, ул. Ч. Айтматова 241',
                  '241 Ch. Aitmatov St, Talas, Kyrgyz Republic'
                )}
              </span>
            </a>
            <div className="flex items-center gap-2.5">
              <Phone className="w-4 h-4 text-amber-400 shrink-0" />
              <a href="tel:+996342252418" className="hover:text-white font-mono">
                +996 (3422) 5-24-18
              </a>
            </div>
            <div className="flex items-center gap-2.5">
              <Phone className="w-4 h-4 text-amber-400 shrink-0" />
              <a href="tel:+996702456789" className="hover:text-white font-mono">
                +996 (702) 45-67-89 (Кабыл алуу)
              </a>
            </div>
            <div className="flex items-center gap-2.5">
              <Mail className="w-4 h-4 text-amber-400 shrink-0" />
              <a href="mailto:takti@knu.kg" className="hover:text-white">
                takti@knu.kg
              </a>
            </div>
            <div className="flex items-center gap-2.5 text-slate-400 pt-1">
              <Clock className="w-4 h-4 text-amber-400 shrink-0" />
              <span>{t('Дүйшөмбү - Жума: 08:30 - 17:30', 'Пн - Пт: 08:30 - 17:30', 'Mon - Fri: 08:30 - 17:30')}</span>
            </div>
          </div>
        </div>

        {/* Bottom Hairline & Legal Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <div>
            © 1996 - {new Date().getFullYear()} {t(
              'Ж. Баласагын атындагы Кыргыз улуттук университетинин Талас аймактык көп тармактуу институту (ТАКТИ КУУ). Бардык укуктар корголгон.',
              'Таласский региональный многопрофильный институт КНУ им. Ж. Баласагына. Все права защищены.',
              'Talas Regional Multidisciplinary Institute of Jusup Balasagyn Kyrgyz National University. All rights reserved.'
            )}
          </div>
          <div className="flex items-center gap-4 text-slate-500">
            <span>{t('Талас шаары', 'г. Талас', 'Talas City')}</span>
            <span>·</span>
            <span>{t('Кыргыз Республикасы', 'Кыргызская Республика', 'Kyrgyz Republic')}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
