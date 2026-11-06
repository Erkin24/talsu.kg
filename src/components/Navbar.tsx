import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface NavbarProps {
  onOpenApplyModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenApplyModal }) => {
  const { t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-stone-200 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-18">
          {/* Zone 1: Brand title, one line */}
          <a
            href="/"
            className="flex items-center gap-2.5 text-slate-900 whitespace-nowrap shrink-0 focus-visible:outline-hidden"
          >
            <div className="w-9 h-9 rounded-md bg-[#0b2545] text-amber-400 flex items-center justify-center font-bold text-sm tracking-tighter shadow-xs">
              КУУ
            </div>
            <span className="text-lg font-bold tracking-tight text-[#0b2545]">
              ТАКТИ КУУ
            </span>
          </a>

          {/* Zone 2: 4-5 concise single-line nav links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-stone-600">
            <a
              href="#about"
              className="hover:text-[#0b2545] transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-8"
            >
              {t('Институт', 'Об институте', 'About')}
            </a>
            <a
              href="#programs"
              className="hover:text-[#0b2545] transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-8"
            >
              {t('Адистиктер', 'Специальности', 'Programs')}
            </a>
            <a
              href="#admissions"
              className="hover:text-[#0b2545] transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-8"
            >
              {t('Абитуриент', 'Абитуриенту', 'Admissions')}
            </a>
            <a
              href="#schedule"
              className="hover:text-[#0b2545] transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-8"
            >
              {t('Жадыбал', 'Расписание', 'Schedule')}
            </a>
            <a
              href="#news"
              className="hover:text-[#0b2545] transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-8"
            >
              {t('Жаңылыктар', 'Новости', 'News')}
            </a>
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenApplyModal}
              className="cursor-pointer px-4.5 py-2.5 text-xs font-semibold text-white bg-[#0b2545] hover:bg-[#13315c] active:scale-[0.98] rounded-md transition-all shadow-xs whitespace-nowrap shrink-0"
            >
              {t('Онлайн арыз берүү', 'Подать заявку', 'Apply Online')}
            </button>

            {/* Mobile Hamburger toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-stone-700 hover:text-slate-900 rounded-md focus-visible:outline-hidden"
              aria-label="Навигацияны ачуу"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-stone-200 bg-white px-4 pt-3 pb-6 space-y-3">
          <a
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-base font-medium text-stone-800 hover:text-[#0b2545]"
          >
            {t('Институт жөнүндө', 'Об институте', 'About Institute')}
          </a>
          <a
            href="#programs"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-base font-medium text-stone-800 hover:text-[#0b2545]"
          >
            {t('Адистиктер жана багыттар', 'Специальности и программы', 'Academic Programs')}
          </a>
          <a
            href="#admissions"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-base font-medium text-stone-800 hover:text-[#0b2545]"
          >
            {t('Абитуриент-2026 кабыл алуу', 'Поступление Абитуриент-2026', 'Admissions 2026')}
          </a>
          <a
            href="#schedule"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-base font-medium text-stone-800 hover:text-[#0b2545]"
          >
            {t('Сабактардын жадыбалы', 'Расписание занятий', 'Class Schedule')}
          </a>
          <a
            href="#library"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-base font-medium text-stone-800 hover:text-[#0b2545]"
          >
            {t('Электрондук китепкана', 'Электронная библиотека', 'Digital Library')}
          </a>
          <a
            href="#news"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-base font-medium text-stone-800 hover:text-[#0b2545]"
          >
            {t('Жаңылыктар жана окуялар', 'Новости и события', 'News & Events')}
          </a>
          <a
            href="#map-location"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-base font-semibold text-amber-800 hover:text-[#0b2545]"
          >
            {t('Дарек жана Google Карта', 'Адрес и Google Карта', 'Location & Google Map')}
          </a>
          <a
            href="#contacts"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-base font-medium text-stone-800 hover:text-[#0b2545]"
          >
            {t('Байланыш жана дарек', 'Контакты и адрес', 'Contacts & Location')}
          </a>
          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenApplyModal();
              }}
              className="w-full py-2.5 text-center text-sm font-semibold text-white bg-[#0b2545] rounded-md shadow-xs"
            >
              {t('Онлайн арыз берүү', 'Подать заявку', 'Apply Online')}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
