import React from 'react';
import { ChevronRight, Home, Sparkles } from 'lucide-react';
import { useNavigation } from '../context/NavigationContext';
import { useLanguage } from '../context/LanguageContext';

interface BreadcrumbsProps {
  title?: string;
  subtitle?: string;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ title, subtitle }) => {
  const { breadcrumbs, navigate, currentPath } = useNavigation();
  const { lang, t } = useLanguage();

  if (currentPath === '/') return null;

  const currentCrumb = breadcrumbs[breadcrumbs.length - 1];
  const displayTitle = title || (currentCrumb ? currentCrumb.label[lang] || currentCrumb.label.ky : '');

  const isAnniversaryRoute = currentPath === '/30-years';

  return (
    <div className={`border-b ${isAnniversaryRoute ? 'bg-gradient-to-r from-[#102747] to-[#174A80] text-white border-amber-500/30' : 'bg-stone-50 border-stone-200 text-stone-800'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        {/* Breadcrumb Trail */}
        <nav aria-label="Breadcrumb" className="flex items-center flex-wrap gap-1.5 text-xs mb-3">
          <button
            onClick={() => navigate('/')}
            className={`cursor-pointer flex items-center gap-1 transition-colors ${
              isAnniversaryRoute ? 'text-amber-300 hover:text-white' : 'text-stone-500 hover:text-[#102747]'
            }`}
          >
            <Home className="w-3.5 h-3.5" />
            <span>{t('Башкы бет', 'Главная', 'Home')}</span>
          </button>

          {breadcrumbs.slice(1).map((crumb, idx) => {
            const isLast = idx === breadcrumbs.length - 2;
            const label = crumb.label[lang] || crumb.label.ky;

            return (
              <React.Fragment key={crumb.path}>
                <ChevronRight className={`w-3.5 h-3.5 ${isAnniversaryRoute ? 'text-amber-400/60' : 'text-stone-400'}`} />
                {isLast ? (
                  <span className={`font-semibold ${isAnniversaryRoute ? 'text-white' : 'text-stone-900'}`}>
                    {label}
                  </span>
                ) : (
                  <button
                    onClick={() => navigate(crumb.path)}
                    className={`cursor-pointer transition-colors ${
                      isAnniversaryRoute ? 'text-stone-300 hover:text-white' : 'text-stone-500 hover:text-[#102747]'
                    }`}
                  >
                    {label}
                  </button>
                )}
              </React.Fragment>
            );
          })}
        </nav>

        {/* Page Title & Subtitle */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            {isAnniversaryRoute && (
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-amber-400/20 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-2 border border-amber-400/30">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>1996 — 2026</span>
              </div>
            )}
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold tracking-tight leading-tight">
              {displayTitle}
            </h1>
            {subtitle && (
              <p className={`text-xs sm:text-sm mt-2 max-w-3xl leading-relaxed ${isAnniversaryRoute ? 'text-stone-200' : 'text-stone-600'}`}>
                {subtitle}
              </p>
            )}
          </div>

          {/* Quick Back Action */}
          <button
            onClick={() => {
              // Navigate one level up
              const lastSlash = currentPath.lastIndexOf('/');
              if (lastSlash > 0) {
                navigate(currentPath.substring(0, lastSlash));
              } else {
                navigate('/');
              }
            }}
            className={`cursor-pointer text-xs font-semibold px-3 py-1.5 rounded transition-colors self-start md:self-auto ${
              isAnniversaryRoute
                ? 'bg-white/10 hover:bg-white/20 text-white border border-white/20'
                : 'bg-white hover:bg-stone-200 text-stone-700 border border-stone-300'
            }`}
          >
            ← {t('Артка кайтуу', 'Назад', 'Back')}
          </button>
        </div>
      </div>
    </div>
  );
};
