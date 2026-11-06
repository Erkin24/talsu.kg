import React, { useState } from 'react';
import { Sparkles, X, ChevronRight, HelpCircle, Phone, MessageSquare, Send } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { FAQS } from '../data/instituteData';

interface VirtualAdvisorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenApply: () => void;
}

export const VirtualAdvisorModal: React.FC<VirtualAdvisorModalProps> = ({
  isOpen,
  onClose,
  onOpenApply,
}) => {
  const { lang, t } = useLanguage();
  const [selectedFaqIndex, setSelectedFaqIndex] = useState<number | null>(0);
  const [userQuery, setUserQuery] = useState('');
  const [customReply, setCustomReply] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleAskQuestion = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userQuery.trim()) return;

    const q = userQuery.toLowerCase();
    if (q.includes('жатакана') || q.includes('комната') || q.includes('dorm') || q.includes('орун')) {
      setCustomReply(
        t(
          'Институттун карамагында 250 орундуу толук жабдылган жатакана бар. Айлык акысы минималдуу, бекер Wi-Fi жана кир жуучу жай каралган. Арызды кабыл алуу комиссиясынан бере аласыз.',
          'В ТАКТИ имеется общежитие на 250 мест с Wi-Fi и кухнями. Заявка оформляется при поступлении.',
          'The institute provides a 250-bed residence with Wi-Fi and kitchens. You can apply during admission.'
        )
      );
    } else if (q.includes('балл') || q.includes('жрт') || q.includes('орт') || q.includes('score')) {
      setCustomReply(
        t(
          'Бакалавриат үчүн ЖРТнын босого балы 110 баллдан башталат. Ал эми колледжибизге 9- жана 11-класстын базасында ЖРТсыз, аттестаттын орточо баллы менен кабыл алынат!',
          'Порог ОРТ для бакалавриата — от 110 баллов. В колледж принимаем без ОРТ по аттестату!',
          'Min ORT threshold for bachelor is 110. For college, admission is based on school diploma without ORT!'
        )
      );
    } else if (q.includes('диплом') || q.includes('diploma')) {
      setCustomReply(
        t(
          'Бүтүрүүчүлөргө Жусуп Баласагын атындагы Кыргыз улуттук университетинин (КУУ) мамлекеттик үлгүдөгү расмий диплому берилет. Диплом бардык мамлекеттерде таанылат.',
          'Выпускникам выдается государственный диплом Кыргызского национального университета им. Ж. Баласагына (КНУ).',
          'Graduates receive the state diploma of Jusup Balasagyn Kyrgyz National University.'
        )
      );
    } else {
      setCustomReply(
        t(
          `Сиздин сурооңуз боюнча («${userQuery}»): Толук маалымат алуу үчүн ТАКТИнин кабыл алуу комиссиясына чалсаңыз болот: +996 (3422) 5-24-18 же жеке кабыл алууга келиңиз (Талас ш., Ч. Айтматов көч. 241).`,
          `По вашему вопросу рекомендуем обратиться в приемную комиссию по телефону +996 (3422) 5-24-18.`,
          `For detailed inquiries regarding your question, please contact admissions at +996 (3422) 5-24-18.`
        )
      );
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/65 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl max-h-[90vh] flex flex-col justify-between">
        <div>
          {/* Header */}
          <div className="flex items-start justify-between gap-4 pb-4 border-b border-stone-200">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded bg-amber-100 text-amber-800">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-serif font-bold text-stone-900">
                  {t('ТАКТИ Интерактивдүү Кеңешчиси', 'Виртуальный консультант ТАКТИ', 'TRMI Virtual Advisor')}
                </h3>
                <p className="text-xs text-stone-500">
                  {t('Кабыл алуу жана окуу процесси боюнча тез жооптор', 'Быстрые ответы по поступлению и учебе', 'Instant answers regarding admissions & campus')}
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="text-stone-400 hover:text-stone-800 p-1 cursor-pointer"
              aria-label="Жабуу"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Interactive Question Input */}
          <form onSubmit={handleAskQuestion} className="my-5">
            <div className="relative">
              <input
                type="text"
                value={userQuery}
                onChange={(e) => setUserQuery(e.target.value)}
                placeholder={t(
                  'Мисалы: Жатакана барбы? Жеңилдиктер кандай? ЖРТ канча балл?',
                  'Например: Есть ли общежитие? Какой проходной балл?',
                  'E.g. Is there a dorm? What is the passing score?'
                )}
                className="w-full pl-4 pr-10 py-2.5 bg-stone-50 text-xs border border-stone-300 rounded focus:bg-white focus:border-[#0b2545] focus:outline-hidden"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 text-[#0b2545] hover:text-amber-600 cursor-pointer"
                aria-label="Жөнөтүү"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </form>

          {/* Custom Reply Box */}
          {customReply && (
            <div className="mb-5 p-4 bg-amber-50/80 border border-amber-200 rounded-lg text-xs text-amber-950 flex items-start gap-3">
              <MessageSquare className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
              <div>
                <div className="font-semibold mb-1">{t('Кеңешчинин жообу:', 'Ответ консультанта:', 'Advisor Response:')}</div>
                <p className="leading-relaxed">{customReply}</p>
              </div>
            </div>
          )}

          {/* Frequent FAQs Accordion */}
          <div className="text-xs font-bold uppercase tracking-wider text-stone-500 mb-2">
            {t('Көп берилүүчү суроолор:', 'Часто задаваемые вопросы:', 'Frequently Asked Questions:')}
          </div>

          <div className="space-y-2 max-h-56 overflow-y-auto pr-1">
            {FAQS.map((faq, idx) => {
              const isSelected = selectedFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="rounded border border-stone-200 overflow-hidden bg-white text-xs"
                >
                  <button
                    onClick={() => setSelectedFaqIndex(isSelected ? null : idx)}
                    className="w-full p-3 text-left font-semibold text-stone-800 hover:text-[#0b2545] flex items-center justify-between gap-2 cursor-pointer transition-colors"
                  >
                    <span>{faq.q[lang] || faq.q.ky}</span>
                    <ChevronRight className={`w-3.5 h-3.5 text-stone-400 shrink-0 transition-transform ${isSelected ? 'rotate-90' : ''}`} />
                  </button>
                  {isSelected && (
                    <div className="px-3 pb-3 pt-1 text-stone-600 bg-stone-50/70 border-t border-stone-100 leading-relaxed">
                      {faq.a[lang] || faq.a.ky}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Actions */}
        <div className="pt-4 mt-4 border-t border-stone-200 flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs text-stone-600">
            <Phone className="w-3.5 h-3.5 text-amber-600" />
            <span>+996 (3422) 5-24-18</span>
          </div>
          <div className="flex gap-2">
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-medium text-stone-600 hover:text-stone-900 cursor-pointer"
            >
              {t('Жабуу', 'Закрыть', 'Close')}
            </button>
            <button
              onClick={() => {
                onClose();
                onOpenApply();
              }}
              className="px-4 py-2 text-xs font-semibold bg-[#0b2545] hover:bg-[#13315c] text-white rounded cursor-pointer"
            >
              {t('Арыз берүү', 'Подать заявку', 'Apply Now')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
