import React, { useState } from 'react';
import { BookOpen, Search, Download, Eye, FileText, CheckCircle2, Bookmark } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { DIGITAL_LIBRARY_BOOKS, LibraryResource, IMAGES } from '../data/instituteData';

export const DigitalLibrary: React.FC = () => {
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [readingBook, setReadingBook] = useState<LibraryResource | null>(null);
  const [downloadSuccessMessage, setDownloadSuccessMessage] = useState<string | null>(null);

  const categories = [
    'all',
    'Филология жана тилдер',
    'Информатика жана IT',
    'Педагогика жана усул',
    'Юриспруденция',
    'Тарых жана Манас таануу',
    'Экономика жана каржы'
  ];

  const filteredBooks = DIGITAL_LIBRARY_BOOKS.filter((b) => {
    if (selectedCategory !== 'all' && b.category !== selectedCategory) return false;
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      return b.title.toLowerCase().includes(q) || b.author.toLowerCase().includes(q);
    }
    return true;
  });

  const handleDownload = (book: LibraryResource) => {
    setDownloadSuccessMessage(book.title);
    setTimeout(() => {
      setDownloadSuccessMessage(null);
    }, 4000);
  };

  return (
    <section id="library" className="py-20 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Library photo peek */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-12">
          <div className="lg:col-span-8">
            <div className="text-xs font-bold tracking-widest uppercase text-stone-500 mb-2">
              {t('ИЛИМИЙ РЕСУРСТАР', 'НАУЧНЫЕ РЕСУРСЫ', 'ACADEMIC RESOURCES')}
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-stone-900 leading-tight">
              {t(
                'ТАКТИнин санариптик китепканасы жана электрондук репозиторийи',
                'Электронная библиотека и репозиторий трудов преподавателей ТАКТИ',
                'TRMI Digital Academic Library & Faculty Repository'
              )}
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 mt-2 max-w-2xl">
              {t(
                'Институттун окутуучулары жана профессорлору тарабынан жазылган окуу куралдары, илимий макалалар жана силлабустар студенттерге акысыз сунушталат.',
                'Учебные пособия, монографии и учебно-методические комплексы, изданные преподавателями ТАКТИ КНУ.',
                'Open-access textbooks, monographs, and syllabi authored by KNU Talas Institute professors.'
              )}
            </p>
          </div>

          <div className="lg:col-span-4">
            <div className="relative rounded-lg overflow-hidden border border-stone-200 shadow-xs aspect-16/10">
              <img
                src={IMAGES.library}
                alt="ТАКТИ китепкана залы"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-4">
                <span className="text-xs text-white font-medium">
                  {t('Институттун 45 000+ китеп фондусу бар залы', 'Фонд библиотеки свыше 45 000 изданий', 'Library hall with 45,000+ volumes')}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Search & Category Tabs */}
        <div className="bg-[#fcfbf9] rounded-lg border border-stone-200 p-5 mb-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-4">
            <div className="relative w-full sm:w-80">
              <Search className="w-4 h-4 text-stone-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={t('Китеп же автор боюнча издөө...', 'Поиск по названию или автору...', 'Search by title or author...')}
                className="w-full pl-9 pr-4 py-2 bg-white text-xs border border-stone-300 rounded focus:border-[#0b2545] focus:outline-hidden"
              />
            </div>

            <div className="text-xs text-stone-500 font-mono">
              {t('Жеткиликтүү:', 'Доступно:', 'Available:')} {filteredBooks.length} {t('басылма', 'изданий', 'titles')}
            </div>
          </div>

          <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`cursor-pointer px-3 py-1.5 text-xs rounded transition-colors whitespace-nowrap ${
                  selectedCategory === cat
                    ? 'bg-[#0b2545] text-white font-semibold shadow-2xs'
                    : 'bg-white text-stone-700 hover:bg-stone-200 border border-stone-200'
                }`}
              >
                {cat === 'all' ? t('Бардык тармактар', 'Все разделы', 'All Subjects') : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Download Alert Notification */}
        {downloadSuccessMessage && (
          <div className="mb-6 p-4 bg-emerald-50 border border-emerald-200 rounded-lg flex items-center justify-between gap-4 text-xs text-emerald-900">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>
                <strong>«{downloadSuccessMessage}»</strong> {t('жүктөлүп алынууда...', 'успешно скачивается...', 'is downloading...')}
              </span>
            </div>
            <span className="text-[11px] text-emerald-700">{t('PDF форматында', 'В формате PDF', 'PDF Format')}</span>
          </div>
        )}

        {/* Books List Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredBooks.map((book) => (
            <div
              key={book.id}
              className="bg-white rounded-lg border border-stone-200 p-6 flex flex-col justify-between hover:shadow-md hover:border-[#0b2545]/40 transition-all"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-stone-500 mb-2">
                  <span className="font-semibold text-amber-800">{book.category}</span>
                  <span className="font-mono">{book.year}</span>
                </div>

                <h3 className="text-base font-serif font-bold text-stone-900 leading-snug mb-2">
                  {book.title}
                </h3>

                <p className="text-xs text-stone-600 mb-4">
                  <span className="font-medium text-stone-800">{t('Авторлор:', 'Авторы:', 'Authors:')}</span> {book.author}
                </p>

                <div className="flex items-center gap-3 text-xs text-stone-500 py-2 border-t border-stone-100 font-mono">
                  <span>{book.pages} {t('бет', 'стр.', 'pages')}</span>
                  <span>·</span>
                  <span>{book.fileSize}</span>
                  <span>·</span>
                  <span className="font-bold text-stone-700">{book.format}</span>
                </div>
              </div>

              <div className="pt-4 mt-2 border-t border-stone-100 flex items-center justify-between gap-3">
                <button
                  onClick={() => setReadingBook(book)}
                  className="cursor-pointer text-xs font-semibold text-stone-700 hover:text-[#0b2545] flex items-center gap-1.5 transition-colors"
                >
                  <Eye className="w-3.5 h-3.5 text-stone-500" />
                  <span>{t('Окуу', 'Читать', 'Preview')}</span>
                </button>

                <button
                  onClick={() => handleDownload(book)}
                  className="cursor-pointer px-3 py-1.5 text-xs font-semibold bg-stone-100 hover:bg-stone-200 text-stone-900 rounded transition-colors flex items-center gap-1.5"
                >
                  <Download className="w-3.5 h-3.5 text-stone-600" />
                  <span>{t('Жүктөп алуу', 'Скачать PDF', 'Download')}</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Book Reader Modal */}
      {readingBook && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-2xl w-full p-6 sm:p-8 shadow-2xl max-h-[90vh] flex flex-col justify-between">
            <div>
              <div className="flex items-start justify-between gap-4 pb-4 border-b border-stone-200">
                <div>
                  <span className="text-xs text-amber-700 font-semibold">{readingBook.category}</span>
                  <h3 className="text-lg font-serif font-bold text-stone-900 mt-1">
                    {readingBook.title}
                  </h3>
                  <p className="text-xs text-stone-600 mt-1">{readingBook.author} ({readingBook.year})</p>
                </div>
                <button
                  onClick={() => setReadingBook(null)}
                  className="text-stone-400 hover:text-stone-800 p-1 cursor-pointer"
                  aria-label="Жабуу"
                >
                  ✕
                </button>
              </div>

              {/* Reader Preview Simulation */}
              <div className="my-6 p-6 bg-stone-50 rounded border border-stone-200 text-xs sm:text-sm text-stone-700 leading-relaxed max-h-72 overflow-y-auto">
                <div className="text-center font-serif font-bold text-base text-stone-900 mb-4">
                  КИРИШҮҮ ЖАНА АКАДЕМИЯЛЫК СИЛЛАБУС
                </div>
                <p className="mb-4">
                  Бул окуу куралы Жусуп Баласагын атындагы Кыргыз улуттук университетинин Талас аймактык көп тармактуу институтунун окумуштуулар кеңешинин чечими менен бакалавриат жана колледж студенттерине сунушталган.
                </p>
                <p className="mb-4">
                  Китептин негизги максаты — студенттерге теориялык фундаменталдык билимди практикалык көндүмдөр менен айкалыштырып берүү. Ар бир бөлүм тесттик суроолор, кейс-стади жана өз алдынча иштөө үчүн практикалык тапшырмалар менен коштолгон.
                </p>
                <p className="text-stone-500 italic text-xs">
                  Толук версиясын офлайн окуу үчүн төмөнкү баскыч аркылуу акысыз жүктөп алсаңыз болот.
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-stone-200 flex items-center justify-between">
              <span className="text-xs text-stone-500 font-mono">
                {readingBook.pages} {t('бет', 'стр.', 'pages')} · {readingBook.fileSize}
              </span>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setReadingBook(null)}
                  className="px-4 py-2 text-xs font-medium text-stone-600 hover:text-stone-900 cursor-pointer"
                >
                  {t('Жабуу', 'Закрыть', 'Close')}
                </button>
                <button
                  onClick={() => {
                    handleDownload(readingBook);
                    setReadingBook(null);
                  }}
                  className="px-5 py-2 text-xs font-semibold bg-[#0b2545] hover:bg-[#13315c] text-white rounded cursor-pointer flex items-center gap-2"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>{t('Толук китепти жүктөө', 'Скачать книгу полностью', 'Download Full Book')}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
