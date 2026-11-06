/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { NavigationProvider, useNavigation } from './context/NavigationContext';
import { HeaderNavbar } from './components/HeaderNavbar';
import { SearchModal } from './components/SearchModal';
import { FooterTalSU } from './components/FooterTalSU';

// Multi-Page Views
import { HomePage } from './pages/HomePage';
import { AnniversaryPage } from './pages/AnniversaryPage';
import { UniversityPages } from './pages/UniversityPages';
import { EducationPages } from './pages/EducationPages';
import { SciencePages } from './pages/SciencePages';
import { AdmissionsPages } from './pages/AdmissionsPages';
import { StudentPages } from './pages/StudentPages';
import { InternationalPages } from './pages/InternationalPages';
import { NewsPages } from './pages/NewsPages';
import { ContactPage } from './pages/ContactPage';

import { ArrowUp, Sparkles, PhoneCall } from 'lucide-react';

const AppContent: React.FC = () => {
  const { currentPath, navigate } = useNavigation();
  const { t } = useLanguage();
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 350) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Route Dispatcher
  const renderCurrentPage = () => {
    if (currentPath === '/30-years') {
      return <AnniversaryPage />;
    }
    if (currentPath.startsWith('/university')) {
      return <UniversityPages />;
    }
    if (currentPath.startsWith('/education')) {
      return <EducationPages />;
    }
    if (currentPath.startsWith('/science')) {
      return <SciencePages />;
    }
    if (currentPath.startsWith('/admissions')) {
      return <AdmissionsPages />;
    }
    if (currentPath.startsWith('/students')) {
      return <StudentPages />;
    }
    if (currentPath.startsWith('/international')) {
      return <InternationalPages />;
    }
    if (currentPath.startsWith('/news')) {
      return <NewsPages />;
    }
    if (currentPath.startsWith('/contact')) {
      return <ContactPage />;
    }
    // Default Home Page
    return <HomePage />;
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8F9FA] text-[#102747] selection:bg-amber-100 selection:text-[#102747]">
      {/* Search Modal */}
      <SearchModal />

      {/* Main Header & 9-Menu Navbar */}
      <HeaderNavbar />

      {/* Dynamic Route Content */}
      <main className="flex-1">
        {renderCurrentPage()}
      </main>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 z-30 flex flex-col items-end gap-3 pointer-events-none">
        {/* 30th Anniversary Quick Trigger */}
        <button
          onClick={() => navigate('/30-years')}
          className="cursor-pointer pointer-events-auto group flex items-center gap-2 px-3.5 py-2.5 bg-gradient-to-r from-[#102747] to-[#174A80] text-amber-300 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all border border-amber-400/50"
          title={t('ТалМУ 30 жылдык мааракеси', '30-летний юбилей ТалГУ', 'TalSU 30th Anniversary')}
        >
          <Sparkles className="w-4 h-4 text-amber-400 group-hover:rotate-12 transition-transform" />
          <span className="text-xs font-bold hidden sm:inline">1996–2026 (30 жыл)</span>
        </button>

        {/* Admissions Quick Hotline */}
        <button
          onClick={() => navigate('/admissions/rules')}
          className="cursor-pointer pointer-events-auto group flex items-center gap-2 px-3.5 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all"
          title={t('Абитуриент-2026 кабыл алуу', 'Поступление 2026', 'Admissions 2026')}
        >
          <PhoneCall className="w-4 h-4 text-emerald-200" />
          <span className="text-xs font-bold hidden sm:inline">{t('Кабыл алуу', 'Прием 2026', 'Admissions')}</span>
        </button>

        {/* Back to top button */}
        {showBackToTop && (
          <button
            onClick={scrollToTop}
            className="cursor-pointer pointer-events-auto p-3 bg-white/95 text-[#102747] hover:bg-[#102747] hover:text-white rounded-full shadow-md border border-stone-200 hover:border-transparent transition-all active:scale-95"
            aria-label={t('Жогору чыгуу', 'Наверх', 'Scroll to top')}
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        )}
      </div>

      {/* Official TalSU Footer */}
      <FooterTalSU />
    </div>
  );
};

export default function App() {
  return (
    <LanguageProvider>
      <NavigationProvider>
        <AppContent />
      </NavigationProvider>
    </LanguageProvider>
  );
}
