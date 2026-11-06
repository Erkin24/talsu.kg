import React, { useState, useEffect, useMemo } from 'react';
import {
  Calendar,
  Share2,
  Check,
  Eye,
  Sparkles,
  ArrowRight,
  Filter,
  X,
  Search,
  Building2,
  FlaskConical,
  Trophy,
  Megaphone,
  Layers,
  Clock,
  ChevronRight,
  Tag
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useNavigation } from '../context/NavigationContext';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { NEWS_DATA, GALLERY_PHOTOS, NewsArticle, GalleryPhoto } from '../data/talsuData';

interface CategoryFilterOption {
  id: string;
  label: { ky: string; ru: string; en: string };
  icon: React.ComponentType<{ className?: string }>;
  color: {
    bg: string;
    text: string;
    border: string;
    badge: string;
  };
}

export const NewsPages: React.FC = () => {
  const { lang, t } = useLanguage();
  const { currentPath, activeCategoryFilter, setActiveCategoryFilter, navigate } = useNavigation();

  // Category filter state synced with NavigationContext
  const [selectedCategory, setSelectedCategory] = useState<string>(activeCategoryFilter || 'all');
  const [searchKeyword, setSearchKeyword] = useState<string>('');
  const [selectedArticleModal, setSelectedArticleModal] = useState<NewsArticle | null>(null);
  const [activeLightboxPhoto, setActiveLightboxPhoto] = useState<GalleryPhoto | null>(null);
  const [copied, setCopied] = useState(false);

  // Sync when activeCategoryFilter changes externally (e.g. from Header dropdowns)
  useEffect(() => {
    if (activeCategoryFilter) {
      setSelectedCategory(activeCategoryFilter);
    }
  }, [activeCategoryFilter]);

  // Define Category Filter Config
  const CATEGORIES: CategoryFilterOption[] = useMemo(() => [
    {
      id: 'all',
      label: { ky: 'Бардык жаңылыктар', ru: 'Все новости', en: 'All Updates' },
      icon: Layers,
      color: {
        bg: 'bg-stone-100',
        text: 'text-stone-800',
        border: 'border-stone-300',
        badge: 'bg-stone-200 text-stone-700'
      }
    },
    {
      id: 'university',
      label: { ky: 'Университет жана кампус', ru: 'Новости кампуса', en: 'Campus News' },
      icon: Building2,
      color: {
        bg: 'bg-blue-50',
        text: 'text-blue-800',
        border: 'border-blue-200',
        badge: 'bg-blue-100 text-blue-800'
      }
    },
    {
      id: 'science',
      label: { ky: 'Илим жана изилдөө', ru: 'Наука и исследования', en: 'Research & Science' },
      icon: FlaskConical,
      color: {
        bg: 'bg-emerald-50',
        text: 'text-emerald-800',
        border: 'border-emerald-200',
        badge: 'bg-emerald-100 text-emerald-800'
      }
    },
    {
      id: 'events',
      label: { ky: 'Иш-чаралар жана спорт', ru: 'События и спорт', en: 'Events & Culture' },
      icon: Trophy,
      color: {
        bg: 'bg-purple-50',
        text: 'text-purple-800',
        border: 'border-purple-200',
        badge: 'bg-purple-100 text-purple-800'
      }
    },
    {
      id: 'announcements',
      label: { ky: 'Жарыялар', ru: 'Объявления', en: 'Announcements' },
      icon: Megaphone,
      color: {
        bg: 'bg-amber-50',
        text: 'text-amber-800',
        border: 'border-amber-200',
        badge: 'bg-amber-100 text-amber-800'
      }
    },
    {
      id: 'anniversary',
      label: { ky: '30 жылдык маараке', ru: '30-летний юбилей', en: '30th Anniversary' },
      icon: Sparkles,
      color: {
        bg: 'bg-gradient-to-r from-amber-500/10 to-amber-600/10',
        text: 'text-amber-900',
        border: 'border-amber-400',
        badge: 'bg-amber-400/20 text-amber-900'
      }
    }
  ], []);

  // Compute article count per category
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { all: NEWS_DATA.length };
    NEWS_DATA.forEach((item) => {
      counts[item.category] = (counts[item.category] || 0) + 1;
    });
    return counts;
  }, []);

  // Filtered articles list based on selected category & search keyword
  const filteredArticles = useMemo(() => {
    return NEWS_DATA.filter((item) => {
      // Category match
      if (selectedCategory !== 'all' && item.category !== selectedCategory) {
        return false;
      }
      // Search keyword match
      if (searchKeyword.trim() !== '') {
        const query = searchKeyword.toLowerCase();
        const titleMatch = (item.title[lang] || item.title.ky).toLowerCase().includes(query);
        const summaryMatch = (item.summary[lang] || item.summary.ky).toLowerCase().includes(query);
        const contentMatch = (item.content[lang] || item.content.ky).toLowerCase().includes(query);
        if (!titleMatch && !summaryMatch && !contentMatch) {
          return false;
        }
      }
      return true;
    });
  }, [selectedCategory, searchKeyword, lang]);

  const handleSelectCategory = (catId: string) => {
    setSelectedCategory(catId);
    setActiveCategoryFilter(catId === 'all' ? null : catId);
  };

  const handleClearFilters = () => {
    setSelectedCategory('all');
    setSearchKeyword('');
    setActiveCategoryFilter(null);
  };

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  // Helper to get category details for badge rendering
  const getCategoryMeta = (catId: string) => {
    return CATEGORIES.find((c) => c.id === catId) || CATEGORIES[0];
  };

  return (
    <div className="bg-[#fcfbf9] min-h-screen pb-20">
      <Breadcrumbs />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        {/* ======================================================== */}
        {/* SUBPAGE 1: MAIN NEWS FEED WITH COMPREHENSIVE FILTERS     */}
        {/* ======================================================== */}
        {(currentPath === '/news' || (!currentPath.startsWith('/news/gallery') && !currentPath.startsWith('/news/video'))) && (
          <div className="space-y-8">
            {/* Header Title & Intro Banner */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200 shadow-2xs">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-[#102747]/10 text-[#102747]">
                      {t('Расмий маалыматтык лента', 'Официальная лента новостей', 'Official University Newsfeed')}
                    </span>
                    <span className="text-stone-300">·</span>
                    <span className="text-xs text-amber-800 font-bold flex items-center gap-1">
                      <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                      1996–2026 (30 жыл)
                    </span>
                  </div>
                  <h1 className="text-2xl sm:text-3xl font-serif font-bold text-[#102747]">
                    {t('Университеттин жаңылыктары жана окуялары', 'Новости и события ТалГУ', 'University News & Updates')}
                  </h1>
                  <p className="text-xs sm:text-sm text-stone-600 mt-1 max-w-2xl leading-relaxed">
                    {t(
                      'Талас мамлекеттик университетинин кампусундагы акыркы окуялар, илимий ачылыштар, иш-чаралар жана 30 жылдык мааракеге арналган маалыматтар.',
                      'Актуальные новости кампуса, научные исследования, спортивные и культурные мероприятия, а также летопись 30-летнего юбилея ТалГУ.',
                      'Stay informed with the latest campus updates, breakthrough scientific research, academic announcements, and 30th anniversary celebrations.'
                    )}
                  </p>
                </div>

                {/* Sub-navigation links between News / Photo Gallery / Video */}
                <div className="flex items-center gap-2 self-start lg:self-auto shrink-0 bg-stone-100 p-1.5 rounded-xl border border-stone-200">
                  <button
                    onClick={() => navigate('/news')}
                    className="cursor-pointer px-3 py-1.5 rounded-lg text-xs font-bold bg-[#102747] text-white shadow-2xs"
                  >
                    {t('Жаңылыктар', 'Новости', 'News')}
                  </button>
                  <button
                    onClick={() => navigate('/news/gallery')}
                    className="cursor-pointer px-3 py-1.5 rounded-lg text-xs font-bold text-stone-600 hover:text-stone-900 transition-colors"
                  >
                    {t('Фотогалерея', 'Фотогалерея', 'Photos')}
                  </button>
                  <button
                    onClick={() => navigate('/news/video')}
                    className="cursor-pointer px-3 py-1.5 rounded-lg text-xs font-bold text-stone-600 hover:text-stone-900 transition-colors"
                  >
                    {t('Видеоархив', 'Видеоархив', 'Videos')}
                  </button>
                </div>
              </div>
            </div>

            {/* ======================================================== */}
            {/* INTERACTIVE CATEGORY FILTER CONTROL BAR                   */}
            {/* ======================================================== */}
            <div className="bg-white rounded-2xl p-6 border border-stone-200 shadow-2xs space-y-5">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                {/* Filter section label with active counter */}
                <div className="flex items-center gap-2">
                  <Filter className="w-4 h-4 text-amber-600 shrink-0" />
                  <span className="text-xs font-bold uppercase tracking-wider text-stone-700">
                    {t('Категориялар боюнча чыпкалоо:', 'Фильтр по категориям:', 'Filter by Category:')}
                  </span>
                  <span className="text-xs text-stone-500 font-medium">
                    ({filteredArticles.length} {t('жаңылык табылды', 'новостей найдено', 'articles found')})
                  </span>
                </div>

                {/* Live Keyword Search Input */}
                <div className="relative w-full md:w-72">
                  <Search className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={searchKeyword}
                    onChange={(e) => setSearchKeyword(e.target.value)}
                    placeholder={t('Жаңылыктардан издөө...', 'Поиск по новостям...', 'Search updates...')}
                    className="w-full pl-9 pr-8 py-2 text-xs rounded-lg border border-stone-200 focus:outline-hidden focus:ring-2 focus:ring-[#102747] focus:border-transparent bg-stone-50/50"
                  />
                  {searchKeyword && (
                    <button
                      onClick={() => setSearchKeyword('')}
                      className="cursor-pointer absolute right-2.5 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-700"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              </div>

              {/* Category Pills / Chips */}
              <div className="flex flex-wrap items-center gap-2 pt-1">
                {CATEGORIES.map((cat) => {
                  const Icon = cat.icon;
                  const isSelected = selectedCategory === cat.id;
                  const count = categoryCounts[cat.id] || 0;

                  return (
                    <button
                      key={cat.id}
                      onClick={() => handleSelectCategory(cat.id)}
                      className={`cursor-pointer group flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold transition-all border ${
                        isSelected
                          ? 'bg-[#102747] text-white border-[#102747] shadow-sm scale-[1.02]'
                          : 'bg-stone-50 text-stone-700 border-stone-200 hover:bg-stone-100 hover:border-stone-300'
                      }`}
                    >
                      <Icon className={`w-3.5 h-3.5 ${isSelected ? 'text-amber-400' : 'text-stone-500 group-hover:text-stone-800'}`} />
                      <span>{cat.label[lang] || cat.label.ky}</span>
                      <span
                        className={`text-[10px] px-1.5 py-0.5 rounded-full font-mono font-bold transition-colors ${
                          isSelected
                            ? 'bg-[#174A80] text-amber-300'
                            : 'bg-stone-200 text-stone-600 group-hover:bg-stone-300'
                        }`}
                      >
                        {count}
                      </span>
                    </button>
                  );
                })}

                {/* Reset Filters Button (appears if active) */}
                {(selectedCategory !== 'all' || searchKeyword.trim() !== '') && (
                  <button
                    onClick={handleClearFilters}
                    className="cursor-pointer flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold text-rose-700 hover:text-rose-900 hover:bg-rose-50 transition-colors ml-auto"
                  >
                    <X className="w-3.5 h-3.5" />
                    <span>{t('Чыпканы тазалоо', 'Сбросить фильтр', 'Clear Filters')}</span>
                  </button>
                )}
              </div>
            </div>

            {/* ======================================================== */}
            {/* ARTICLES GRID / EMPTY STATE                              */}
            {/* ======================================================== */}
            {filteredArticles.length === 0 ? (
              <div className="bg-white rounded-2xl p-12 text-center border border-stone-200 space-y-4">
                <div className="w-16 h-16 rounded-full bg-stone-100 text-stone-400 flex items-center justify-center mx-auto">
                  <Search className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-bold text-stone-900 font-serif">
                  {t('Бир да жаңылык табылган жок', 'Новостей не найдено', 'No Articles Found')}
                </h3>
                <p className="text-xs text-stone-500 max-w-md mx-auto">
                  {t(
                    'Тандалган категорияда же издөө сурамы боюнча маалымат табылган жок. Башка категорияны тандап көрүңүз же чыпканы тазалаңыз.',
                    'По заданным критериям фильтрации или поисковому запросу ничего не найдено. Попробуйте сбросить фильтр.',
                    'No updates match your selected category or search keyword. Try clearing filters to view all university news.'
                  )}
                </p>
                <button
                  onClick={handleClearFilters}
                  className="cursor-pointer inline-flex items-center gap-2 px-4 py-2 bg-[#102747] text-white rounded-lg text-xs font-bold hover:bg-[#174A80] transition-colors"
                >
                  <span>{t('Бардык жаңылыктарды көрсөтүү', 'Показать все новости', 'Show All Articles')}</span>
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredArticles.map((article) => {
                  const meta = getCategoryMeta(article.category);
                  const MetaIcon = meta.icon;

                  return (
                    <article
                      key={article.id}
                      className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-2xs hover:shadow-lg hover:border-[#102747]/30 transition-all flex flex-col justify-between group"
                    >
                      <div>
                        {/* Image Preview with Category Tag Overlay */}
                        <div className="relative aspect-16/10 overflow-hidden bg-stone-100">
                          <img
                            src={article.image}
                            alt={article.title[lang] || article.title.ky}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute top-3 left-3">
                            <button
                              onClick={() => handleSelectCategory(article.category)}
                              className={`cursor-pointer inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-bold shadow-xs backdrop-blur-xs transition-transform hover:scale-105 ${meta.color.badge}`}
                              title={t('Ушул категориядагы жаңылыктарды көрүү', 'Фильтровать по этой категории', 'Filter by this category')}
                            >
                              <MetaIcon className="w-3 h-3" />
                              <span>{meta.label[lang] || meta.label.ky}</span>
                            </button>
                          </div>
                        </div>

                        {/* Article Text Content */}
                        <div className="p-5 sm:p-6">
                          <div className="flex items-center gap-2 text-[11px] text-stone-500 mb-2.5">
                            <Calendar className="w-3.5 h-3.5 text-amber-600" />
                            <span className="font-semibold text-stone-600 font-mono">
                              {article.date}
                            </span>
                          </div>

                          <h3 className="text-base font-serif font-bold text-[#102747] group-hover:text-[#174A80] leading-snug line-clamp-2 mb-2 transition-colors">
                            {article.title[lang] || article.title.ky}
                          </h3>

                          <p className="text-xs text-stone-600 line-clamp-3 leading-relaxed">
                            {article.summary[lang] || article.summary.ky}
                          </p>
                        </div>
                      </div>

                      {/* Footer Actions */}
                      <div className="p-5 sm:p-6 pt-0 border-t border-stone-100 mt-2 flex items-center justify-between">
                        <button
                          onClick={() => setSelectedArticleModal(article)}
                          className="cursor-pointer text-xs font-bold text-[#102747] hover:text-amber-700 flex items-center gap-1.5 transition-colors group/btn"
                        >
                          <span>{t('Толук окуу', 'Читать далее', 'Read More')}</span>
                          <ArrowRight className="w-3.5 h-3.5 text-amber-600 group-hover/btn:translate-x-1 transition-transform" />
                        </button>

                        <span className="text-[11px] font-mono text-stone-400">
                          ТалМУ — 30 жыл
                        </span>
                      </div>
                    </article>
                  );
                })}
              </div>
            )}
          </div>
        )}

        {/* ======================================================== */}
        {/* SUBPAGE 2: PHOTO GALLERY WITH LIGHTBOX                   */}
        {/* ======================================================== */}
        {currentPath === '/news/gallery' && (
          <div className="space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-6 sm:p-8 rounded-2xl border border-stone-200">
              <div className="max-w-3xl">
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#102747] mb-2">
                  {t('ТалМУнун фотогалереясы жана медиа архиви', 'Фотогалерея и медиа архив ТалГУ', 'Photo Gallery & Media Archive')}
                </h2>
                <p className="text-xs sm:text-sm text-stone-600">
                  {t('Кампус, илимий лабораториялар, студенттик мааракелер жана 30 жылдык салтанаттын сүрөттөрү.', 'Фотохроника университетской жизни, кампуса и 30-летнего юбилея.', 'High-resolution photography showcasing campus grounds, laboratories, and celebrations.')}
                </p>
              </div>

              {/* Sub-nav buttons */}
              <div className="flex items-center gap-2 self-start sm:self-auto shrink-0 bg-stone-100 p-1.5 rounded-xl border border-stone-200">
                <button
                  onClick={() => navigate('/news')}
                  className="cursor-pointer px-3 py-1.5 rounded-lg text-xs font-bold text-stone-600 hover:text-stone-900 transition-colors"
                >
                  {t('Жаңылыктар', 'Новости', 'News')}
                </button>
                <button
                  onClick={() => navigate('/news/gallery')}
                  className="cursor-pointer px-3 py-1.5 rounded-lg text-xs font-bold bg-[#102747] text-white shadow-2xs"
                >
                  {t('Фотогалерея', 'Фотогалерея', 'Photos')}
                </button>
                <button
                  onClick={() => navigate('/news/video')}
                  className="cursor-pointer px-3 py-1.5 rounded-lg text-xs font-bold text-stone-600 hover:text-stone-900 transition-colors"
                >
                  {t('Видеоархив', 'Видеоархив', 'Videos')}
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {GALLERY_PHOTOS.map((photo) => (
                <div
                  key={photo.id}
                  onClick={() => setActiveLightboxPhoto(photo)}
                  className="group relative rounded-2xl overflow-hidden border border-stone-200 bg-white shadow-2xs cursor-pointer hover:shadow-lg transition-all"
                >
                  <div className="aspect-16/10 overflow-hidden bg-stone-100">
                    <img
                      src={photo.url}
                      alt={photo.title[lang] || photo.title.ky}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4 flex items-center justify-between">
                    <div>
                      <h4 className="text-xs sm:text-sm font-serif font-bold text-stone-900 group-hover:text-[#102747] transition-colors">
                        {photo.title[lang] || photo.title.ky}
                      </h4>
                      <p className="text-[11px] text-amber-700 mt-0.5">ТалМУ — 30 жыл (1996–2026)</p>
                    </div>
                    <div className="p-2 rounded-full bg-stone-100 text-stone-600 group-hover:bg-[#102747] group-hover:text-white transition-colors shrink-0">
                      <Eye className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ======================================================== */}
        {/* SUBPAGE 3: VIDEO ARCHIVE                                 */}
        {/* ======================================================== */}
        {currentPath === '/news/video' && (
          <div className="space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-6 sm:p-8 rounded-2xl border border-stone-200">
              <div className="max-w-3xl">
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#102747] mb-2">
                  {t('Университеттин видеоархиви', 'Видеоархив ТалГУ', 'Video Archive')}
                </h2>
                <p className="text-xs sm:text-sm text-stone-600">
                  {t('ТалМУнун 30 жылдыгына арналган даректүү тасмалар, жаңылыктык репортаждар жана студенттик подкасттар.', 'Документальные фильмы к 30-летию университета, репортажи и телепередачи.', 'Documentary features, anniversary reports, and student spotlights.')}
                </p>
              </div>

              {/* Sub-nav buttons */}
              <div className="flex items-center gap-2 self-start sm:self-auto shrink-0 bg-stone-100 p-1.5 rounded-xl border border-stone-200">
                <button
                  onClick={() => navigate('/news')}
                  className="cursor-pointer px-3 py-1.5 rounded-lg text-xs font-bold text-stone-600 hover:text-stone-900 transition-colors"
                >
                  {t('Жаңылыктар', 'Новости', 'News')}
                </button>
                <button
                  onClick={() => navigate('/news/gallery')}
                  className="cursor-pointer px-3 py-1.5 rounded-lg text-xs font-bold text-stone-600 hover:text-stone-900 transition-colors"
                >
                  {t('Фотогалерея', 'Фотогалерея', 'Photos')}
                </button>
                <button
                  onClick={() => navigate('/news/video')}
                  className="cursor-pointer px-3 py-1.5 rounded-lg text-xs font-bold bg-[#102747] text-white shadow-2xs"
                >
                  {t('Видеоархив', 'Видеоархив', 'Videos')}
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: '«ТалМУ — 30 жыл билимге жана келечекке!» (Даректүү фильм)',
                  desc: '1996-жылдан берки университеттин түптөлүшү, ректорлордун жана ардагер мугалимдердин эскерүүлөрү.',
                  duration: '28 мүнөт',
                  thumb: GALLERY_PHOTOS[1].url
                },
                {
                  title: 'ТалМУда жасалма интеллект жана IT лабораториясынын ачылышы',
                  desc: 'КТРК жана жергиликтүү медианын атайын репортажы.',
                  duration: '8 мүнөт',
                  thumb: GALLERY_PHOTOS[2].url
                },
                {
                  title: 'Абитуриент-2026: Эмне үчүн ТалМУну тандоо керек?',
                  desc: 'Факультеттер, бюджеттик гранттар жана заманбап лабораториялар тууралуу студенттердин баяны.',
                  duration: '12 мүнөт',
                  thumb: GALLERY_PHOTOS[0].url
                },
                {
                  title: 'Бүтүрүүчүлөрдүн 30 жылдык мааракелик куттуктоосу',
                  desc: 'Дүйнөнүн ар кайсы бурчунда иштеп жаткан ТалМУнун бүтүрүүчүлөрүнүн видеокайрылуусу.',
                  duration: '15 мүнөт',
                  thumb: GALLERY_PHOTOS[5].url
                }
              ].map((v, idx) => (
                <div key={idx} className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-2xs space-y-3">
                  <div className="relative aspect-16/9 bg-stone-900 overflow-hidden">
                    <img src={v.thumb} alt={v.title} className="w-full h-full object-cover opacity-80" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-amber-500/90 text-[#102747] flex items-center justify-center font-bold shadow-lg hover:scale-110 transition-transform cursor-pointer">
                        ▶
                      </div>
                    </div>
                    <span className="absolute bottom-2 right-2 bg-black/70 text-white font-mono text-[11px] px-2 py-0.5 rounded">
                      {v.duration}
                    </span>
                  </div>
                  <div className="p-5 sm:p-6">
                    <h3 className="font-serif font-bold text-stone-900 text-base mb-1">{v.title}</h3>
                    <p className="text-xs text-stone-600 leading-relaxed">{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* ======================================================== */}
      {/* LIGHTBOX MODAL                                           */}
      {/* ======================================================== */}
      {activeLightboxPhoto && (
        <div
          onClick={() => setActiveLightboxPhoto(null)}
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-xs flex items-center justify-center p-4 cursor-pointer"
        >
          <div className="max-w-4xl w-full max-h-[90vh]">
            <img
              src={activeLightboxPhoto.url}
              alt={activeLightboxPhoto.title[lang] || activeLightboxPhoto.title.ky}
              className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
            />
            <div className="text-center text-white text-sm font-serif mt-3">
              {activeLightboxPhoto.title[lang] || activeLightboxPhoto.title.ky}
            </div>
          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* ARTICLE DETAIL MODAL                                     */}
      {/* ======================================================== */}
      {selectedArticleModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex items-start justify-between gap-4 pb-4 border-b border-stone-200">
              <div>
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="text-xs font-mono font-bold text-amber-800">
                    {selectedArticleModal.date}
                  </span>
                  <span className="text-stone-300">·</span>
                  <span className={`text-[10px] px-2 py-0.5 rounded font-bold uppercase tracking-wider ${getCategoryMeta(selectedArticleModal.category).color.badge}`}>
                    {getCategoryMeta(selectedArticleModal.category).label[lang] || getCategoryMeta(selectedArticleModal.category).label.ky}
                  </span>
                </div>
                <h3 className="text-xl font-serif font-bold text-stone-900 leading-snug">
                  {selectedArticleModal.title[lang] || selectedArticleModal.title.ky}
                </h3>
              </div>
              <button
                onClick={() => setSelectedArticleModal(null)}
                className="text-stone-400 hover:text-stone-800 p-1 cursor-pointer"
              >
                ✕
              </button>
            </div>

            <div className="aspect-16/9 rounded-xl overflow-hidden my-4 bg-stone-100">
              <img
                src={selectedArticleModal.image}
                alt={selectedArticleModal.title.ky}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-stone-700 leading-relaxed my-4">
              <p className="font-semibold text-stone-900">
                {selectedArticleModal.summary[lang] || selectedArticleModal.summary.ky}
              </p>
              <p>
                {selectedArticleModal.content[lang] || selectedArticleModal.content.ky}
              </p>
            </div>

            <div className="pt-4 border-t border-stone-200 flex items-center justify-between">
              <button
                onClick={handleShare}
                className="cursor-pointer text-xs font-semibold text-stone-600 hover:text-[#102747] flex items-center gap-1.5"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Share2 className="w-3.5 h-3.5" />}
                <span>{copied ? t('Көчүрүлдү!', 'Скопировано!', 'Copied!') : t('Бөлүшүү', 'Поделиться', 'Share')}</span>
              </button>
              <button
                onClick={() => setSelectedArticleModal(null)}
                className="cursor-pointer px-4 py-2 bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs font-bold rounded-lg"
              >
                {t('Жабуу', 'Закрыть', 'Close')}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
