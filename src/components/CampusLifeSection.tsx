import React, { useState } from 'react';
import { Building2, Users2, Trophy, HeartHandshake, Eye } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { IMAGES } from '../data/instituteData';

export const CampusLifeSection: React.FC = () => {
  const { t } = useLanguage();
  const [activeImagePreview, setActiveImagePreview] = useState<string | null>(null);

  const galleryItems = [
    {
      src: IMAGES.hero,
      title: t('Башкы окуу имараты жана кампус аянты', 'Главный учебный корпус и площадь кампуса', 'Main Academic Building & Plaza'),
      caption: t('Талас шаары, заманбап окуу корпусу', 'г. Талас, современный учебный комплекс', 'Talas city campus with Ala-Too mountain backdrop')
    },
    {
      src: IMAGES.computerLab,
      title: t('Жаңы IT жана жасалма интеллект лабораториясы', 'Новая лаборатория IT и искусственного интеллекта', 'State-of-the-Art IT & Software Lab'),
      caption: t('Студенттер программалоо жана веб-иштеп чыгуу сабагында', 'Практические занятия по веб-разработке и Python', 'Software development and algorithms class')
    },
    {
      src: IMAGES.library,
      title: t('Академиялык китепкана жана окуу залы', 'Академическая библиотека и читальный зал', 'Academic Reading Hall & Library'),
      caption: t('Тынч жана ыңгайлуу чөйрөдөгү өз алдынча билим алуу', 'Комфортная атмосфера для научной работы', 'Quiet and focused learning environment')
    },
    {
      src: IMAGES.graduation,
      title: t('Бүтүрүүчүлөрдүн КУУнун дипломун тапшыруу аземи', 'Торжественное вручение дипломов выпускникам КНУ', 'Graduation Ceremony with KNU Diplomas'),
      caption: t('Келечекке кадам таштаган жаш адистерибиз', 'Наши выпускники — гордость Таласского региона', 'Proud graduates embarking on professional careers')
    }
  ];

  return (
    <section className="py-20 bg-[#fcfbf9] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-bold tracking-widest uppercase text-stone-500 mb-2">
            {t('СТУДЕНТТИК ЖАШОО', 'СТУДЕНЧЕСКАЯ ЖИЗНЬ', 'STUDENT LIFE & CAMPUS')}
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-stone-900 leading-tight">
            {t(
              'Институттун кампусу жана студенттик чөйрөсү',
              'Кампус института и студенческая атмосфера',
              'Institute Campus & Dynamic Student Community'
            )}
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 mt-2">
            {t(
              'Сапаттуу билим гана эмес, жаштардын ар тараптуу инсандык өсүшүнө жана чыгармачылыгына арналган чөйрө.',
              'Всестороннее развитие личности: студенческий совет, дебатный клуб, спорт и творчество.',
              'Fostering personal leadership, scientific exploration, debates, and community service.'
            )}
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {galleryItems.map((item, idx) => (
            <div
              key={idx}
              className="group relative rounded-lg overflow-hidden border border-stone-200 bg-white shadow-xs cursor-pointer"
              onClick={() => setActiveImagePreview(item.src)}
            >
              <div className="aspect-16/10 w-full overflow-hidden bg-stone-100">
                <img
                  src={item.src}
                  alt={item.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4 bg-white flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-bold text-stone-900 group-hover:text-[#0b2545] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-stone-500 mt-0.5">
                    {item.caption}
                  </p>
                </div>
                <div className="p-2 rounded-full bg-stone-100 text-stone-600 group-hover:bg-[#0b2545] group-hover:text-white transition-colors shrink-0">
                  <Eye className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Campus Life Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-10 border-t border-stone-200">
          <div className="p-5 bg-white rounded-lg border border-stone-200 shadow-2xs">
            <Building2 className="w-6 h-6 text-amber-600 mb-3" />
            <h4 className="text-sm font-bold text-stone-900 mb-1">
              {t('250 орундуу жатакана', 'Комфортабельное общежитие', '250-Bed Residence')}
            </h4>
            <p className="text-xs text-stone-600 leading-relaxed">
              {t('Таза бөлмөлөр, акысыз Wi-Fi, ашкана, эс алуу бөлмөлөрү жана 24/7 коопсуздук күзөтү.', 'Отремонтированные комнаты, Wi-Fi, кухни, прачечная и охрана.', 'Renovated rooms, high-speed Wi-Fi, kitchens and 24/7 security.')}
            </p>
          </div>

          <div className="p-5 bg-white rounded-lg border border-stone-200 shadow-2xs">
            <Trophy className="w-6 h-6 text-amber-600 mb-3" />
            <h4 className="text-sm font-bold text-stone-900 mb-1">
              {t('Спорт жана ден соолук', 'Спорт и здоровье', 'Sports & Fitness')}
            </h4>
            <p className="text-xs text-stone-600 leading-relaxed">
              {t('Чоң спорт зал, футбол талаасы, волейбол, күрөш жана тогуз коргоол ийримдери.', 'Спортивный комплекс, футбол, волейбол, борьба и тогуз коргоол.', 'Full sports hall, football pitch, wrestling, and traditional games.')}
            </p>
          </div>

          <div className="p-5 bg-white rounded-lg border border-stone-200 shadow-2xs">
            <Users2 className="w-6 h-6 text-amber-600 mb-3" />
            <h4 className="text-sm font-bold text-stone-900 mb-1">
              {t('Студенттик дебат клубу', 'Студенческий дебатный клуб', 'Debate & Oratory Club')}
            </h4>
            <p className="text-xs text-stone-600 leading-relaxed">
              {t('Чечендик өнөр, лидерлик сапаттар жана коомдук иштер боюнча активдүү жаштар коому.', 'Развитие ораторского искусства, критического мышления и лидерства.', 'Fostering public speaking, critical reasoning, and leadership.')}
            </p>
          </div>

          <div className="p-5 bg-white rounded-lg border border-stone-200 shadow-2xs">
            <HeartHandshake className="w-6 h-6 text-amber-600 mb-3" />
            <h4 className="text-sm font-bold text-stone-900 mb-1">
              {t('Академиялык мобилдүүлүк', 'Академическая мобильность', 'Academic Exchange')}
            </h4>
            <p className="text-xs text-stone-600 leading-relaxed">
              {t('КУУнун борбордук факультеттери (Бишкек) жана өнөктөш чет өлкөлүк ЖОЖдор менен семестрдик алмашуу.', 'Возможность семестрового обучения на факультетах КНУ в Бишкеке.', 'Semester exchange with KNU central faculties in Bishkek.')}
            </p>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeImagePreview && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-xs flex items-center justify-center p-4 cursor-pointer"
          onClick={() => setActiveImagePreview(null)}
        >
          <div className="relative max-w-4xl w-full max-h-[90vh]">
            <img
              src={activeImagePreview}
              alt="Сүрөт"
              referrerPolicy="no-referrer"
              className="w-full h-auto max-h-[85vh] object-contain rounded-lg"
            />
            <button
              onClick={() => setActiveImagePreview(null)}
              className="absolute top-3 right-3 text-white bg-black/50 hover:bg-black/80 rounded-full w-8 h-8 flex items-center justify-center text-sm"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
