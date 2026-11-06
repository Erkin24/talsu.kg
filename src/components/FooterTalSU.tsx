import React from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Sparkles,
  ChevronRight,
  ShieldCheck
} from 'lucide-react';
import { useNavigation } from '../context/NavigationContext';
import { useLanguage } from '../context/LanguageContext';
import { TALSU_INFO } from '../data/talsuData';

export const FooterTalSU: React.FC = () => {
  const { navigate } = useNavigation();
  const { lang, t } = useLanguage();

  return (
    <footer className="bg-[#0b1c33] text-stone-300 text-xs border-t border-[#174A80]/50 select-none">
      {/* 30th Anniversary Golden Top Strip */}
      <div className="bg-gradient-to-r from-amber-600 via-amber-400 to-amber-600 text-[#102747] py-3 font-bold">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#102747] animate-pulse" />
            <span className="text-xs uppercase tracking-wider font-black">
              {t(
                'ТАЛАС МАМЛЕКЕТТИК УНИВЕРСИТЕТИ — 30 ЖЫЛДЫК МААРАКЕ (1996–2026)',
                'ТАЛАССКИЙ ГОСУДАРСТВЕННЫЙ УНИВЕРСИТЕТ — 30-ЛЕТНИЙ ЮБИЛЕЙ (1996–2026)',
                'TALAS STATE UNIVERSITY — 30TH ANNIVERSARY JUBILEE (1996–2026)'
              )}
            </span>
          </div>
          <button
            onClick={() => navigate('/30-years')}
            className="cursor-pointer px-3.5 py-1 rounded bg-[#102747] text-amber-300 hover:text-white text-xs font-bold transition-all shadow-xs"
          >
            {t('Юбилейлик бетти көрүү →', 'Юбилейный портал →', 'Anniversary Portal →')}
          </button>
        </div>
      </div>

      {/* Main 4-Column Academic Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Col 1: University Identity */}
          <div className="space-y-4">
            <div
              onClick={() => navigate('/')}
              className="cursor-pointer flex items-center gap-3 group inline-flex"
            >
              <div className="w-11 h-11 rounded-full bg-[#102747] border-2 border-amber-400 text-amber-400 flex flex-col items-center justify-center font-bold text-xs tracking-tighter shrink-0 shadow-sm group-hover:scale-105 transition-transform">
                <span className="font-black text-xs leading-none">ТАКТИ</span>
                <span className="text-[8px] font-mono text-stone-300 mt-0.5">КУУ · 1996</span>
              </div>
              <div>
                <div className="font-bold text-white text-sm tracking-tight font-serif leading-tight">
                  {TALSU_INFO.name[lang] || TALSU_INFO.name.ky}
                </div>
                <div className="text-[11px] text-amber-400 font-medium">
                  {TALSU_INFO.anniversarySlogan[lang] || TALSU_INFO.anniversarySlogan.ky}
                </div>
              </div>
            </div>

            <p className="text-stone-400 text-xs leading-relaxed">
              {t(
                'Кыргыз Республикасынын Билим берүү жана илим министрлигинин карамагындагы аккредитацияланган мамлекеттик жогорку окуу жайы. 30 жылдык тарыхы бар билим жана илим ордосу.',
                'Государственное высшее учебное заведение Кыргызской Республики с государственной аккредитацией. Центр науки и высшего образования Таласской области с 1996 года.',
                'Accredited state higher educational institution in the Kyrgyz Republic. A leading hub of regional academic and scientific excellence since 1996.'
              )}
            </p>

            <div className="pt-2 flex items-center gap-2 text-stone-400">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span className="text-[11px]">
                {t('Мамлекеттик аккредитация № AL-2023-018', 'Государственная аккредитация № AL-2023-018', 'State Accreditation # AL-2023-018')}
              </span>
            </div>
          </div>

          {/* Col 2: University Navigation */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 font-serif text-amber-400">
              {t('Университет', 'Университет', 'University')}
            </h4>
            <ul className="space-y-2.5">
              <li>
                <button onClick={() => navigate('/university/about')} className="cursor-pointer text-stone-300 hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-amber-500" />
                  <span>{t('Университет жөнүндө', 'Об университете', 'About University')}</span>
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/university/history')} className="cursor-pointer text-stone-300 hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-amber-500" />
                  <span>{t('Университеттин тарыхы', 'История университета', 'History')}</span>
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/university/leadership')} className="cursor-pointer text-stone-300 hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-amber-500" />
                  <span>{t('Жетекчилик (Ректорат)', 'Руководство (Ректорат)', 'Leadership')}</span>
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/university/structure')} className="cursor-pointer text-stone-300 hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-amber-500" />
                  <span>{t('Түзүм жана бөлүмдөр', 'Структура университета', 'Structure')}</span>
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/30-years')} className="cursor-pointer text-amber-300 font-bold hover:text-amber-200 transition-colors flex items-center gap-1.5">
                  <Sparkles className="w-3 h-3 text-amber-400" />
                  <span>{t('30 жылдык маараке (1996–2026)', '30-летний юбилей (1996–2026)', '30th Anniversary')}</span>
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/university/charter')} className="cursor-pointer text-stone-300 hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-amber-500" />
                  <span>{t('Устав жана жоболор', 'Устав и положения', 'Charter & Regulations')}</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Academics & Admissions */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 font-serif text-amber-400">
              {t('Билим жана абитуриент', 'Образование и поступление', 'Academics & Admissions')}
            </h4>
            <ul className="space-y-2.5">
              <li>
                <button onClick={() => navigate('/education/faculties')} className="cursor-pointer text-stone-300 hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-amber-500" />
                  <span>{t('Факультеттер жана кафедралар', 'Факультеты и кафедры', 'Faculties & Departments')}</span>
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/admissions/programs')} className="cursor-pointer text-stone-300 hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-amber-500" />
                  <span>{t('Багыттар жана адистиктер', 'Направления подготовки', 'Majors & Programs')}</span>
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/admissions/rules')} className="cursor-pointer text-stone-300 hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-amber-500" />
                  <span>{t('Кабыл алуу эрежелери (ОРТ)', 'Правила приема (ОРТ)', 'Admissions Rules')}</span>
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/students/schedule')} className="cursor-pointer text-stone-300 hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-amber-500" />
                  <span>{t('Сабактардын жадыбалы', 'Расписание занятий', 'Class Timetable')}</span>
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/students/library')} className="cursor-pointer text-stone-300 hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-amber-500" />
                  <span>{t('Электрондук китепкана', 'Электронная библиотека', 'Digital Library')}</span>
                </button>
              </li>
              <li>
                <button onClick={() => navigate('/science/journals')} className="cursor-pointer text-stone-300 hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-amber-500" />
                  <span>{t('Илимий журнал («ТалМУ Жарчысы»)', 'Научный журнал «Вестник ТалГУ»', 'Scientific Journal')}</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Contacts & Campus */}
          <div className="space-y-3.5">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 font-serif text-amber-400">
              {t('Байланыш', 'Контакты', 'Contact Details')}
            </h4>

            <button
              onClick={() => navigate('/contact')}
              className="cursor-pointer flex items-start gap-2.5 text-stone-300 hover:text-white transition-colors text-left group"
            >
              <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
              <span className="group-hover:underline">
                {t(
                  'Кыргыз Республикасы, Талас облусу, Талас шаары, К. Нуржанов көчөсү 25 (Башкы корпус)',
                  'Кыргызская Республика, Таласская область, г. Талас, ул. К. Нуржанова 25 (Главный корпус)',
                  '25 K. Nurzhanov St, Talas City, Kyrgyz Republic (Main Campus)'
                )}
              </span>
            </button>

            <div className="flex items-center gap-2.5">
              <Phone className="w-4 h-4 text-amber-400 shrink-0" />
              <a href="tel:+996342252015" className="hover:text-white font-mono text-stone-300">
                +996 (3422) 5-20-15 (Ректорат)
              </a>
            </div>

            <div className="flex items-center gap-2.5">
              <Phone className="w-4 h-4 text-amber-400 shrink-0" />
              <a href="tel:+996702456789" className="hover:text-white font-mono text-stone-300">
                +996 (702) 45-67-89 (Кабыл алуу)
              </a>
            </div>

            <div className="flex items-center gap-2.5">
              <Mail className="w-4 h-4 text-amber-400 shrink-0" />
              <a href="mailto:info@talsu.kg" className="hover:text-white text-stone-300">
                info@talsu.kg
              </a>
            </div>

            <div className="flex items-center gap-2.5 text-stone-400 pt-1">
              <Clock className="w-4 h-4 text-amber-400 shrink-0" />
              <span>{t('Дүйшөмбү – Жума: 08:30 – 17:30', 'Пн – Пт: 08:30 – 17:30', 'Mon – Fri: 08:30 – 17:30')}</span>
            </div>
          </div>
        </div>

        {/* Bottom Hairline & Legal Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-stone-400">
          <div>
            © 1996 – 2026 {t(
              'Талас мамлекеттик университети (ТалМУ). 30 жылдык маараке. Бардык укуктар корголгон.',
              'Таласский государственный университет (ТалГУ). 30-летний юбилей. Все права защищены.',
              'Talas State University (TalSU). 30th Anniversary. All rights reserved.'
            )}
          </div>
          <div className="flex items-center gap-4 text-stone-500">
            <button onClick={() => navigate('/university/charter')} className="cursor-pointer hover:text-stone-300">
              {t('Купуялуулук саясаты', 'Политика конфиденциальности', 'Privacy')}
            </button>
            <span>·</span>
            <button onClick={() => navigate('/university/charter')} className="cursor-pointer hover:text-stone-300">
              {t('Устав', 'Устав', 'Charter')}
            </button>
            <span>·</span>
            <span className="text-amber-400 font-bold">1996–2026</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
