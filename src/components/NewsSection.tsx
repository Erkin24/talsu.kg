import React, { useState } from 'react';
import { Calendar, ArrowRight, Share2, Check, BookOpen } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { NEWS_ITEMS, NewsItem } from '../data/instituteData';

export const NewsSection: React.FC = () => {
  const { lang, t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeNewsModal, setActiveNewsModal] = useState<NewsItem | null>(null);
  const [copiedLink, setCopiedLink] = useState(false);

  const filteredNews = NEWS_ITEMS.filter((item) => {
    if (selectedCategory === 'all') return true;
    return item.category === selectedCategory;
  });

  const handleShare = (item: NewsItem) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    }
  };

  return (
    <section id="news" className="py-20 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="text-xs font-bold tracking-widest uppercase text-stone-500 mb-2">
              {t('ЖАҢЫЛЫКТАР ЖАНА ОКУЯЛАР', 'НОВОСТИ И СОБЫТИЯ', 'NEWS & ANNOUNCEMENTS')}
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-stone-900 leading-tight">
              {t('Институттун акыркы кабарлары', 'Новости института и события региона', 'Latest Institute News & Events')}
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 mt-2">
              {t(
                'Академиялык жетишкендиктер, илимий конференциялар жана маанилүү кулактандыруулар.',
                'Академические достижения, научные конференции и важные объявления.',
                'Academic breakthroughs, research seminars, and official notifications.'
              )}
            </p>
          </div>

          {/* Category filter tabs */}
          <div className="flex items-center gap-1 p-1 bg-stone-100 rounded-md">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`cursor-pointer px-3 py-1.5 text-xs font-medium rounded transition-colors ${
                selectedCategory === 'all'
                  ? 'bg-white text-stone-900 shadow-2xs font-semibold'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              {t('Бардыгы', 'Все', 'All')}
            </button>
            <button
              onClick={() => setSelectedCategory('academic')}
              className={`cursor-pointer px-3 py-1.5 text-xs font-medium rounded transition-colors ${
                selectedCategory === 'academic'
                  ? 'bg-white text-stone-900 shadow-2xs font-semibold'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              {t('Окуу процесси', 'Учебные', 'Academic')}
            </button>
            <button
              onClick={() => setSelectedCategory('science')}
              className={`cursor-pointer px-3 py-1.5 text-xs font-medium rounded transition-colors ${
                selectedCategory === 'science'
                  ? 'bg-white text-stone-900 shadow-2xs font-semibold'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              {t('Илим & IT', 'Наука и IT', 'Science & IT')}
            </button>
            <button
              onClick={() => setSelectedCategory('student')}
              className={`cursor-pointer px-3 py-1.5 text-xs font-medium rounded transition-colors ${
                selectedCategory === 'student'
                  ? 'bg-white text-stone-900 shadow-2xs font-semibold'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              {t('Студенттик', 'Студенческие', 'Student')}
            </button>
          </div>
        </div>

        {/* News Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredNews.map((item) => {
            const title = item.title[lang] || item.title.ky;
            const summary = item.summary[lang] || item.summary.ky;

            return (
              <article
                key={item.id}
                className="bg-white rounded-lg border border-stone-200 overflow-hidden shadow-2xs hover:shadow-md hover:border-[#0b2545]/40 transition-all flex flex-col justify-between"
              >
                <div>
                  {item.imageUrl && (
                    <div className="aspect-16/10 w-full overflow-hidden bg-stone-100">
                      <img
                        src={item.imageUrl}
                        alt={title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  )}

                  <div className="p-5">
                    {/* Unboxed clean metadata */}
                    <div className="flex items-center gap-2 text-xs text-stone-500 mb-2">
                      <span className="font-medium text-amber-800">
                        {item.category === 'academic' && t('Окуу', 'Учеба', 'Academic')}
                        {item.category === 'science' && t('Илим & IT', 'Наука', 'Science')}
                        {item.category === 'student' && t('Студенттер', 'Студенты', 'Students')}
                      </span>
                      <span aria-hidden="true">·</span>
                      <span className="font-mono">{item.date}</span>
                    </div>

                    <h3 className="text-sm font-serif font-bold text-stone-900 leading-snug mb-2 line-clamp-2">
                      {title}
                    </h3>

                    <p className="text-xs text-stone-600 leading-relaxed line-clamp-3">
                      {summary}
                    </p>
                  </div>
                </div>

                <div className="p-5 pt-0">
                  <button
                    onClick={() => setActiveNewsModal(item)}
                    className="cursor-pointer text-xs font-semibold text-[#0b2545] hover:text-amber-600 transition-colors flex items-center gap-1.5"
                  >
                    <span>{t('Толук окуу', 'Читать далее', 'Read More')}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {/* News Detail Lightbox */}
      {activeNewsModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex items-start justify-between gap-4 mb-4">
              <div>
                <div className="text-xs text-stone-500 font-mono mb-1">
                  {activeNewsModal.date}
                </div>
                <h3 className="text-xl font-serif font-bold text-stone-900 leading-snug">
                  {activeNewsModal.title[lang] || activeNewsModal.title.ky}
                </h3>
              </div>
              <button
                onClick={() => setActiveNewsModal(null)}
                className="text-stone-400 hover:text-stone-800 p-1 cursor-pointer"
                aria-label="Жабуу"
              >
                ✕
              </button>
            </div>

            {activeNewsModal.imageUrl && (
              <div className="aspect-16/9 rounded overflow-hidden my-4">
                <img
                  src={activeNewsModal.imageUrl}
                  alt={activeNewsModal.title.ky}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            <div className="text-xs sm:text-sm text-stone-700 leading-relaxed space-y-3 my-4">
              <p className="font-semibold text-stone-900">
                {activeNewsModal.summary[lang] || activeNewsModal.summary.ky}
              </p>
              <p>
                {activeNewsModal.content[lang] || activeNewsModal.content.ky}
              </p>
            </div>

            <div className="pt-4 border-t border-stone-200 flex items-center justify-between">
              <button
                onClick={() => handleShare(activeNewsModal)}
                className="text-xs text-stone-600 hover:text-stone-900 flex items-center gap-1.5 cursor-pointer"
              >
                {copiedLink ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Share2 className="w-3.5 h-3.5" />}
                <span>{copiedLink ? t('Шилтеме көчүрүлдү!', 'Ссылка скопирована!', 'Link Copied!') : t('Бөлүшүү', 'Поделиться', 'Share')}</span>
              </button>

              <button
                onClick={() => setActiveNewsModal(null)}
                className="px-4 py-2 text-xs font-semibold bg-stone-100 hover:bg-stone-200 text-stone-800 rounded cursor-pointer"
              >
                {t('Жабуу', 'Закрыть', 'Close')}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
