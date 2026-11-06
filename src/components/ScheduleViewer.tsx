import React, { useState } from 'react';
import { Calendar, Clock, MapPin, User, BookOpen, Printer } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { SCHEDULE_DATA } from '../data/instituteData';

export const ScheduleViewer: React.FC = () => {
  const { t } = useLanguage();
  const [selectedGroup, setSelectedGroup] = useState<string>('IT-22');
  const [selectedDay, setSelectedDay] = useState<string>('Дүйшөмбү');

  const days = ['Дүйшөмбү', 'Шейшемби', 'Шаршемби', 'Бейшемби', 'Жума'];
  const groupSchedules = SCHEDULE_DATA[selectedGroup] || {};
  const currentDayClasses = groupSchedules[selectedDay] || [];

  const handlePrint = () => {
    window.print();
  };

  return (
    <section id="schedule" className="py-20 bg-stone-50 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="text-xs font-bold tracking-widest uppercase text-stone-500 mb-2">
              {t('ОКУУ ПРОЦЕССИ', 'УЧЕБНЫЙ ПРОЦЕСС', 'ACADEMIC LIFE')}
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-stone-900 leading-tight">
              {t('Сабактардын жадыбалы', 'Интерактивное расписание занятий', 'Interactive Class Timetable')}
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 mt-2">
              {t(
                'Студенттер жана окутуучулар үчүн күн сайын жаңыланган расмий сабактар жадыбалы.',
                'Актуальное расписание лекций, практик и лабораторных занятий по группам.',
                'Daily updated lecture, lab, and seminar timetable for students and faculty.'
              )}
            </p>
          </div>

          <button
            onClick={handlePrint}
            className="cursor-pointer px-4 py-2 text-xs font-semibold bg-white hover:bg-stone-100 text-stone-800 border border-stone-300 rounded flex items-center gap-2 self-start md:self-auto shadow-2xs"
          >
            <Printer className="w-4 h-4 text-stone-600" />
            <span>{t('Жадыбалды басып чыгаруу', 'Распечатать расписание', 'Print Schedule')}</span>
          </button>
        </div>

        {/* Group Selector & Day Navigation */}
        <div className="bg-white rounded-lg border border-stone-200 p-6 shadow-xs mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-stone-200">
            <div className="flex items-center gap-3">
              <span className="text-xs font-semibold text-stone-700 whitespace-nowrap">
                {t('Окуу тобу:', 'Академическая группа:', 'Student Group:')}
              </span>
              <div className="flex items-center gap-1.5">
                {[
                  { id: 'IT-22', label: 'ИТ-22 (Компьютердик инженерия)' },
                  { id: 'PED-23', label: 'ПЕД-23 (Педагогика & Тилдер)' },
                  { id: 'LAW-21', label: 'ЮР-21 (Юриспруденция)' },
                ].map((grp) => (
                  <button
                    key={grp.id}
                    onClick={() => setSelectedGroup(grp.id)}
                    className={`cursor-pointer px-3 py-1.5 text-xs font-semibold rounded transition-colors ${
                      selectedGroup === grp.id
                        ? 'bg-[#0b2545] text-white shadow-2xs'
                        : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                    }`}
                  >
                    {grp.id}
                  </button>
                ))}
              </div>
            </div>

            <div className="text-xs text-stone-500">
              {t('2025-2026-окуу жылы, Жазгы семестр', '2025-2026 уч. год, Весенний семестр', 'Spring Semester 2025-2026')}
            </div>
          </div>

          {/* Days of the Week buttons */}
          <div className="flex items-center gap-2 pt-4 overflow-x-auto pb-1">
            {days.map((day) => (
              <button
                key={day}
                onClick={() => setSelectedDay(day)}
                className={`cursor-pointer px-4 py-2 text-xs font-medium rounded transition-colors whitespace-nowrap ${
                  selectedDay === day
                    ? 'bg-amber-100 text-amber-900 border border-amber-300 font-bold'
                    : 'text-stone-600 hover:bg-stone-100'
                }`}
              >
                {day}
              </button>
            ))}
          </div>
        </div>

        {/* Timetable Items */}
        <div className="space-y-3">
          {currentDayClasses.length > 0 ? (
            currentDayClasses.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg border border-stone-200 p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:border-[#0b2545]/40 transition-all shadow-2xs"
              >
                <div className="flex items-start sm:items-center gap-4">
                  {/* Time Badge */}
                  <div className="p-2.5 rounded bg-blue-50 text-[#0b2545] flex items-center gap-1.5 font-mono text-xs font-bold shrink-0">
                    <Clock className="w-4 h-4 text-amber-600" />
                    <span>{item.time}</span>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 text-xs text-stone-500 mb-1">
                      <span className="font-semibold text-amber-800">{item.type}</span>
                      <span aria-hidden="true">·</span>
                      <span className="flex items-center gap-1 text-stone-700">
                        <MapPin className="w-3.5 h-3.5 text-stone-400" />
                        {item.room}
                      </span>
                    </div>
                    <h4 className="text-base font-bold text-stone-900">
                      {item.subject}
                    </h4>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs text-stone-600 sm:border-l sm:border-stone-200 sm:pl-6 shrink-0">
                  <User className="w-4 h-4 text-stone-400" />
                  <span>{item.teacher}</span>
                </div>
              </div>
            ))
          ) : (
            <div className="bg-white p-8 rounded-lg border border-stone-200 text-center text-xs text-stone-500">
              {t('Бул күнгө сабак пландалган жок же өз алдынча иштөө күнү.', 'На этот день занятий не запланировано (день СРС).', 'No scheduled classes for this day.')}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
