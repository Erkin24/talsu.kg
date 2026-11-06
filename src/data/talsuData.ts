export interface MultilingualText {
  ky: string;
  ru: string;
  en: string;
}

export interface Faculty {
  id: string;
  name: MultilingualText;
  dean: string;
  deanTitle: string;
  phone: string;
  email: string;
  description: MultilingualText;
  departments: {
    id: string;
    name: MultilingualText;
    head: string;
    description: MultilingualText;
  }[];
  bachelorPrograms: string[];
  masterPrograms?: string[];
  studentCount: number;
  establishedYear: number;
}

export interface Program {
  id: string;
  code: string;
  title: MultilingualText;
  facultyId: string;
  degree: 'bachelor' | 'master' | 'college';
  duration: string;
  tuitionSom: number;
  budgetSeats: number;
  minOrt: number;
  description: MultilingualText;
  careers: string[];
}

export interface LeadershipMember {
  id: string;
  name: string;
  role: MultilingualText;
  degree: MultilingualText;
  phone: string;
  email: string;
  receptionHours: MultilingualText;
  bio: MultilingualText;
  image: string;
}

export interface NewsArticle {
  id: string;
  title: MultilingualText;
  date: string;
  category: 'university' | 'announcements' | 'events' | 'science' | 'anniversary';
  summary: MultilingualText;
  content: MultilingualText;
  image: string;
  featured?: boolean;
}

export interface AnniversaryMilestone {
  year: number;
  title: MultilingualText;
  description: MultilingualText;
  significance: MultilingualText;
}

export interface PartnerUniversity {
  id: string;
  name: string;
  country: string;
  flag: string;
  program: string;
  scope: MultilingualText;
}

export interface GalleryPhoto {
  id: string;
  title: MultilingualText;
  category: 'campus' | 'anniversary' | 'students' | 'science';
  url: string;
}

export const TALSU_IMAGES = {
  campusHero: '/src/assets/images/talsu_campus_hero_1793939957744.jpg',
  director: '/assets/aistudio/___________3643d193.jpg',
  rector: '/assets/aistudio/___________3643d193.jpg',
  anniversaryGala: '/src/assets/images/talsu_30_anniversary_gala_1793939958546.jpg',
  scienceLab: '/src/assets/images/talsu_science_innovations_1793939959048.jpg',
  computerLab: '/src/assets/images/knu_students_computer_lab_1793074979212.jpg',
  library: '/src/assets/images/knu_library_study_hall_1793074979275.jpg',
  graduation: '/src/assets/images/knu_graduation_talas_1793074980891.jpg'
};

export const TALSU_INFO = {
  name: {
    ky: 'Ж. Баласагын атындагы КУУнун Талас аймактык көп тармактуу институту',
    ru: 'Таласский региональный многопрофильный институт КНУ им. Ж. Баласагына',
    en: 'Talas Regional Multidisciplinary Institute of Jusup Balasagyn KNU'
  },
  shortName: {
    ky: 'ТАКТИ КУУ (ТалМУ)',
    ru: 'ТРМИ КНУ (ТалГУ)',
    en: 'TRMI KNU (TalSU)'
  },
  anniversarySlogan: {
    ky: '30 ЖЫЛ — БИЛИМГЕ, ИЛИМГЕ ЖАНА КЕЛЕЧЕККЕ!',
    ru: '30 ЛЕТ — ЗНАНИЯМ, НАУКЕ И БУДУЩЕМУ!',
    en: '30 YEARS OF KNOWLEDGE, SCIENCE AND PROGRESS!'
  },
  anniversarySubtitle: {
    ky: '1996–2026: Талас жергесиндеги жогорку билимдин 30 жылдык даңктуу жолу',
    ru: '1996–2026: 30-летие становления высшего образования в Таласском регионе',
    en: '1996–2026: 30 Glorious Years of Higher Education & Research in Talas'
  },
  foundingYear: 1996,
  decreeYear: 2000,
  address: {
    ky: 'Кыргызстан, Талас шаары, Кеңешбек Нуржанов көчөсү (гүлбагы), 25',
    ru: 'Кыргызстан, г. Талас, ул. Кенешбека Нуржанова (аллея), 25',
    en: '25 Keneshbek Nurzhanov St, Talas, Kyrgyz Republic'
  },
  postalCode: '724200',
  phones: {
    reception: '+996 (3422) 5-20-15',
    admissions: '+996 (3422) 5-41-94',
    admissionsMobile: '+996 (700) 25-19-96',
    studyDept: '+996 (3422) 5-22-38',
    accounting: '+996 (3422) 5-20-18'
  },
  emails: {
    official: 'info@talsu.kg',
    rectorate: 'talmu_rectorat@mail.ru',
    admissions: 'admission@talsu.kg',
    international: 'iro.talsu@gmail.com'
  },
  stats: [
    { value: '30', suffix: '', label: { ky: 'Жылдык даңктуу тарых (1996–2026)', ru: 'Лет академической истории (1996–2026)', en: 'Years of Excellence (1996–2026)' } },
    { value: '4', suffix: '', label: { ky: 'Профилдик факультет жана Колледж', ru: 'Профильных факультета и Колледж', en: 'Faculties, College & Lyceum' } },
    { value: '35', suffix: '+', label: { ky: 'Бакалавриат жана магистратура программасы', ru: 'Программ бакалавриата и магистратуры', en: 'Academic Programs & Degrees' } },
    { value: '4500', suffix: '+', label: { ky: 'Студенттер, магистранттар жана угуучулар', ru: 'Студентов и магистрантов', en: 'Active Students & Scholars' } },
    { value: '280', suffix: '+', label: { ky: 'Профессордук-окутуучулук курам', ru: 'Преподавателей и ученых', en: 'Faculty Members & Researchers' } },
    { value: '92', suffix: '%', label: { ky: 'Бүтүрүүчүлөрдүн ишке орношуу көрсөткүчү', ru: 'Трудоустройство выпускников', en: 'Graduate Employment Rate' } }
  ]
};

export const LEADERSHIP: LeadershipMember[] = [
  {
    id: 'director',
    name: 'Ажибаева Айнура',
    role: {
      ky: 'Ж.Баласагын атындагы Талас аймактык көп тармактуу институтунун директору',
      ru: 'Директор Таласского регионального многопрофильного института КНУ им. Ж. Баласагына',
      en: 'Director of Talas Regional Multidisciplinary Institute of Jusup Balasagyn KNU'
    },
    degree: {
      ky: 'Педагогика илимдеринин доктору, профессор',
      ru: 'Доктор педагогических наук, профессор',
      en: 'Doctor of Pedagogical Sciences, Professor'
    },
    phone: '+996 (3422) 5-20-15',
    email: 'director@talsu.kg',
    receptionHours: {
      ky: 'Шейшемби, бейшемби: 14:00 – 17:00 (Башкы корпус, 201-каб.)',
      ru: 'Вторник, четверг: 14:00 – 17:00 (Главный корпус, каб. 201)',
      en: 'Tuesday, Thursday: 14:00 – 17:00 (Main Bldg, Room 201)'
    },
    bio: {
      ky: 'Институттун билим берүү жана илимий потенциалын арттыруу, педагогикалык заманбап усулдарды өздөштүрүү, квалификациялуу адистерди даярдоо жана Ж.Баласагын атындагы КУУнун алкагында аймактык инновациялык билим берүү хабын калыптандыруу боюнча жигердүү иш алып барууда.',
      ru: 'Руководит институтом, направляя образовательный и научный процесс на интеграцию передовых педагогических практик, укрепление кадрового потенциала и инновационное развитие Таласского региона в структуре КНУ им. Ж. Баласагына.',
      en: 'Directing the Institute with a strong focus on advanced pedagogical methodologies, quality faculty training, scientific innovation, and regional development within Jusup Balasagyn KNU.'
    },
    image: TALSU_IMAGES.director
  },
  {
    id: 'vice-academic',
    name: 'Сурапов Анаркул Кудайбердиевич',
    role: {
      ky: 'Окуу жана илимий иштер боюнча проректор',
      ru: 'Проректор по учебной и научной работе',
      en: 'Vice-Rector for Academic & Scientific Affairs'
    },
    degree: {
      ky: 'Педагогика илимдеринин кандидаты, доцент',
      ru: 'Кандидат педагогических наук, доцент',
      en: 'Candidate of Pedagogical Sciences, Associate Professor'
    },
    phone: '+996 (3422) 5-22-38',
    email: 'academic@talsu.kg',
    receptionHours: {
      ky: 'Дүйшөмбү, шаршемби: 15:00 – 17:00 (204-каб.)',
      ru: 'Понедельник, среда: 15:00 – 17:00 (каб. 204)',
      en: 'Mon, Wed: 15:00 – 17:00 (Room 204)'
    },
    bio: {
      ky: 'Окуу пландарын заманбап стандарттарга ылайыкташтыруу, кредиттик система (ECTS), билим сапатын камсыздоо жана илимий конференцияларды уюштуруу багытын көзөмөлдөйт.',
      ru: 'Курирует учебные планы по Болонской системе, контроль качества образования и проведение научных конференций.',
      en: 'Oversees curricular modernization, ECTS credit systems, educational quality assurance, and scientific conferences.'
    },
    image: TALSU_IMAGES.scienceLab
  },
  {
    id: 'vice-admin',
    name: 'Касымалиев Бактыбек Турдубаевич',
    role: {
      ky: 'Мамлекеттик тил, тарбия жана социалдык иштер боюнча проректор',
      ru: 'Проректор по государственному языку, воспитательной и социальной работе',
      en: 'Vice-Rector for State Language, Student Life & Welfare'
    },
    degree: {
      ky: 'Филология илимдеринин кандидаты, доцент',
      ru: 'Кандидат филологических наук, доцент',
      en: 'Candidate of Philological Sciences, Associate Professor'
    },
    phone: '+996 (3422) 5-24-11',
    email: 'social@talsu.kg',
    receptionHours: {
      ky: 'Жума: 14:00 – 17:00 (207-каб.)',
      ru: 'Пятница: 14:00 – 17:00 (каб. 207)',
      en: 'Friday: 14:00 – 17:00 (Room 207)'
    },
    bio: {
      ky: 'Мамлекеттик тилдин өнүгүшү, студенттик кеңеш, социалдык колдоо, маданий-эстетикалык иш-чаралар жана жатакана маселелери боюнча иш алып барат.',
      ru: 'Организует работу со студенческим сообществом, государственным языком, социальные программы и культурные инициативы.',
      en: 'Responsible for student council activities, Kyrgyz state language programs, campus culture, and social welfare.'
    },
    image: TALSU_IMAGES.anniversaryGala
  }
];

export const FACULTIES: Faculty[] = [
  {
    id: 'humanities-law',
    name: {
      ky: 'Гуманитардык-юридикалык факультет',
      ru: 'Гуманитарно-юридический факультет',
      en: 'Faculty of Humanities & Law'
    },
    dean: 'Эгембердиев Мелис Асанович',
    deanTitle: 'Юридика илимдеринин кандидаты, доцент',
    phone: '+996 (3422) 5-28-14',
    email: 'law.humanities@talsu.kg',
    studentCount: 1200,
    establishedYear: 1996,
    description: {
      ky: 'Талас облусунун жана республиканын сот, укук коргоо органдары, нотариат, мектептер, массалык маалымат каражаттары жана мамлекеттик кызмат үчүн жогорку квалификациялуу юристтерди, тилчилерди жана тарыхчыларды даярдайт.',
      ru: 'Подготовка юристов, филологов, историков и переводчиков для правоохранительных органов, юстиции, школ и госслужбы.',
      en: 'Educating lawyers, linguists, historians, and legal consultants for public administration, judiciary, and education.'
    },
    departments: [
      {
        id: 'dept-law',
        name: { ky: 'Юриспруденция кафедрасы', ru: 'Кафедра юриспруденции', en: 'Department of Jurisprudence' },
        head: 'Доц. Токтогулова А.М.',
        description: { ky: 'Жарандык, жазык жана мамлекеттик укук тармактары боюнча тереңдетилген билим.', ru: 'Гражданское, уголовное и конституционное право.', en: 'Civil, criminal, and constitutional law.' }
      },
      {
        id: 'dept-kg-lang',
        name: { ky: 'Кыргыз тили жана адабияты кафедрасы', ru: 'Кафедра кыргызского языка и литературы', en: 'Department of Kyrgyz Language & Literature' },
        head: 'Проф. Мамбеталиев Э.К.',
        description: { ky: 'Кыргыз тил илими, Манас таануу жана улуттук фольклорду изилдөө.', ru: 'Кыргызское языкознание, манасоведение и фольклор.', en: 'Kyrgyz linguistics, Manas studies, and literature.' }
      },
      {
        id: 'dept-foreign',
        name: { ky: 'Чет тилдери (Англис, Немис тили) кафедрасы', ru: 'Кафедра иностранных языков', en: 'Department of Foreign Languages' },
        head: 'Доц. Осмоналиева Н.К.',
        description: { ky: 'Эл аралык деңгээлдеги тил үйрөтүү жана синхрондук котормо чеберчилиги.', ru: 'Преподавание английского и немецкого языков, переводоведение.', en: 'English & German language training and translation.' }
      },
      {
        id: 'dept-history',
        name: { ky: 'Тарых жана коомдук илимдер кафедрасы', ru: 'Кафедра истории и общественных наук', en: 'Department of History & Social Sciences' },
        head: 'Доц. Садыков Б.А.',
        description: { ky: 'Ата Мекен тарыхы, археология жана коомдук процесстер.', ru: 'Отечественная история, археология и политология.', en: 'Kyrgyz history, archaeology, and social sciences.' }
      }
    ],
    bachelorPrograms: ['Юриспруденция (530500)', 'Кыргыз тили жана адабияты (531100)', 'Чет тили: Англис тили (531200)', 'Тарых (530600)'],
    masterPrograms: ['Юриспруденция: Жарандык укук', 'Филологиялык билим берүү']
  },
  {
    id: 'it-tech-econ',
    name: {
      ky: 'Маалыматтык технологиялар, техника жана экономика факультети',
      ru: 'Факультет информационных технологий, техники и экономики',
      en: 'Faculty of Information Technologies, Engineering & Economics'
    },
    dean: 'Абдылдаев Таалайбек Сейитказиевич',
    deanTitle: 'Техника илимдеринин кандидаты, доцент',
    phone: '+996 (3422) 5-31-02',
    email: 'tech.econ@talsu.kg',
    studentCount: 1450,
    establishedYear: 1996,
    description: {
      ky: 'Санариптик доордун талабына жооп берген IT адистерин, программисттерди, экономисттерди, бухгалтерлерди жана инженер-технологдорду даярдаган ТалМУнун заманбап флагмандык факультети.',
      ru: 'Флагманский факультет ТалГУ по подготовке разработчиков ПО, веб-инженеров, финансистов, бухгалтеров и менеджеров.',
      en: 'TalSU’s flagship engineering faculty preparing software engineers, IT specialists, economists, and enterprise managers.'
    },
    departments: [
      {
        id: 'dept-cs',
        name: { ky: 'Компьютердик инженерия жана колдонмо информатика кафедрасы', ru: 'Кафедра компьютерной инженерии и прикладной информатики', en: 'Department of Computer Engineering & Applied IT' },
        head: 'Доц. Жумабеков Т.С.',
        description: { ky: 'Python, C++, Java, веб жана мобилдик иштеп чыгуу, AI жана маалыматтар базасы.', ru: 'Программирование, ИИ, веб-разработка и базы данных.', en: 'Fullstack software development, AI, cloud systems.' }
      },
      {
        id: 'dept-econ',
        name: { ky: 'Экономика, эсеп жана каржы кафедрасы', ru: 'Кафедра экономики, учета и финансов', en: 'Department of Economics, Accounting & Finance' },
        head: 'Проф. Базаркулов Б.М.',
        description: { ky: '1С-бухгалтерия, салык салуу, аудит жана банктык иш.', ru: '1С-бухгалтерия, финансовый анализ и аудит.', en: 'Corporate finance, auditing, banking, and accounting.' }
      },
      {
        id: 'dept-management',
        name: { ky: 'Менеджмент жана бизнес башкаруу кафедрасы', ru: 'Кафедра менеджмента и бизнес-администрирования', en: 'Department of Management & Business Administration' },
        head: 'Доц. Касымова Д.С.',
        description: { ky: 'Чакан жана орто бизнести башкаруу, маркетинг, логистика.', ru: 'Управление проектами, маркетинг и предпринимательство.', en: 'Strategic management, digital marketing, enterprise logistics.' }
      }
    ],
    bachelorPrograms: ['Программалык камсыздоо инженериясы (710100)', 'Колдонмо информатика (510200)', 'Экономика жана аудит (580100)', 'Менеджмент (580200)'],
    masterPrograms: ['Колдонмо информатика жана чоң маалыматтар (Big Data)', 'Бизнес-экономика']
  },
  {
    id: 'pedagogy-training',
    name: {
      ky: 'Педагогика жана мугалимдердин квалификациясын жогорулатуу факультети',
      ru: 'Факультет педагогики и повышения квалификации учителей',
      en: 'Faculty of Pedagogy & Teacher Professional Development'
    },
    dean: 'Байгазиева Гульмира Токтосуновна',
    deanTitle: 'Педагогика илимдеринин кандидаты, доцент',
    phone: '+996 (3422) 5-29-45',
    email: 'pedagogy@talsu.kg',
    studentCount: 980,
    establishedYear: 1997,
    description: {
      ky: 'Талас жергесиндеги мектептердин башталгыч билим берүү, математика, физика, психология боюнча мугалимдерин даярдоо жана иштеп жаткан мугалимдердин кесиптик чеберчилигин арттыруу борбору.',
      ru: 'Центр подготовки учителей начальных классов, математики, физики и непрерывного повышения квалификации педагогов региона.',
      en: 'Regional center for preparing primary educators, STEM teachers, and providing continuous professional educator growth.'
    },
    departments: [
      {
        id: 'dept-primary',
        name: { ky: 'Башталгыч билим берүүнүн педагогикасы жана усулу кафедрасы', ru: 'Кафедра педагогики и методики начального образования', en: 'Department of Primary Education Pedagogy' },
        head: 'Ага окут. Асанкулова Г.Т.',
        description: { ky: 'STEAM технологиялары, балдар психологиясы жана инновациялык окутуу.', ru: 'STEAM-методики, инклюзия и психология младших школьников.', en: 'Modern STEAM methods, developmental child psychology.' }
      },
      {
        id: 'dept-math-phys',
        name: { ky: 'Математика, физика жана окутуу технологиялары кафедрасы', ru: 'Кафедра математики, физики и технологий обучения', en: 'Department of Mathematics, Physics & Educational Tech' },
        head: 'Доц. Кемелова А.Б.',
        description: { ky: 'Жогорку математика, мектепте так илимдерди интерактивдүү окутуу.', ru: 'Высшая математика и методика преподавания точных наук.', en: 'Higher mathematics and STEM pedagogy.' }
      }
    ],
    bachelorPrograms: ['Педагогика жана башталгыч билим берүү (550700)', 'Математика мугалими (510100)', 'Мектепке чейинки билим берүү (550800)'],
    masterPrograms: ['Педагогикалык менеджмент']
  },
  {
    id: 'agrobusiness-tourism',
    name: {
      ky: 'Агробизнес, биоэкология жана туризм факультети',
      ru: 'Факультет агробизнеса, биоэкологии и туризма',
      en: 'Faculty of Agribusiness, Bioecology & Tourism'
    },
    dean: 'Исмаилов Бакыт Кеңешбекович',
    deanTitle: 'Айыл чарба илимдеринин кандидаты, доцент',
    phone: '+996 (3422) 5-33-19',
    email: 'agro.tourism@talsu.kg',
    studentCount: 820,
    establishedYear: 2000,
    description: {
      ky: 'Талас өрөөнүнүн бай жаратылышын, органикалык айыл чарбасын, төө буурчак жана мал чарба өндүрүшүн, ошондой эле Манас-Ордо тарыхый-этнографиялык туризмин өнүктүрүүгө багытталган адистерди чыгарат.',
      ru: 'Подготовка агрономов, экологов, ветеринаров и специалистов экотуризма с акцентом на региональные особенности Таласской долины.',
      en: 'Educating agronomists, ecologists, food processing technicians, and cultural tourism managers in the Talas region.'
    },
    departments: [
      {
        id: 'dept-agro',
        name: { ky: 'Агрономия жана өсүмдүктөрдү коргоо кафедрасы', ru: 'Кафедра агрономии и защиты растений', en: 'Department of Agronomy & Crop Protection' },
        head: 'Доц. Жунушов К.М.',
        description: { ky: 'Органикалык дыйканчылык, төө буурчак өндүрүшү жана тамчылатып сугаруу.', ru: 'Органическое земледелие и современные агротехнологии.', en: 'Organic farming, bean cultivation, modern irrigation.' }
      },
      {
        id: 'dept-tourism',
        name: { ky: 'Туризм, биоэкология жана табият пайдалануу кафедрасы', ru: 'Кафедра туризма, биоэкологии и природопользования', en: 'Department of Tourism, Bioecology & Environmental Studies' },
        head: 'Доц. Чороев Т.К.',
        description: { ky: 'Экотуризм, коруктарды изилдөө, «Манас-Ордо» туристтик маршруттары.', ru: 'Экологический и этнографический туризм Таласского региона.', en: 'Ecotourism, environmental preservation, ethno-tourism.' }
      }
    ],
    bachelorPrograms: ['Агрономия (740100)', 'Экология жана табиятты коргоо (520800)', 'Туризм жана меймандостук (600200)', 'Ветеринария (750100)'],
    masterPrograms: ['Агроэкология жана органикалык өндүрүш']
  },
  {
    id: 'talsu-college',
    name: {
      ky: 'ТалМУнун көп тармактуу Колледжи',
      ru: 'Многопрофильный колледж ТалГУ',
      en: 'TalSU Multidisciplinary Vocational College'
    },
    dean: 'Асанова Гүлсара Айтматовна',
    deanTitle: 'Билим берүүнүн мыктысы, директор',
    phone: '+996 (3422) 5-41-20',
    email: 'college@talsu.kg',
    studentCount: 950,
    establishedYear: 1999,
    description: {
      ky: '9- жана 11-класстын базасында орто кесиптик билим берүү. Бүтүрүүчүлөр жогорку окуу жайга сынаксыз, тездетилген программа боюнча 2-3-курска которулуу укугуна ээ болушат.',
      ru: 'Среднее профессиональное образование на базе 9 и 11 классов с прямой траекторией поступления на 2-3 курс бакалавриата ТалГУ.',
      en: 'Vocational diploma education after 9th and 11th grades with guaranteed direct entry to 2nd-3rd year university degree programs.'
    },
    departments: [
      {
        id: 'dept-col-tech',
        name: { ky: 'Техникалык жана IT адистиктер бөлүмү', ru: 'Техническое и IT отделение', en: 'Technical & IT Division' },
        head: 'Ага окут. Сүйөркулов А.С.',
        description: { ky: 'Компьютердик системалар жана программалоо.', ru: 'Программное обеспечение и компьютерные сети.', en: 'Software engineering and computing systems.' }
      },
      {
        id: 'dept-col-ped',
        name: { ky: 'Педагогикалык жана гуманитардык бөлүм', ru: 'Педагогическое и гуманитарное отделение', en: 'Pedagogical & Humanities Division' },
        head: 'Ага окут. Сатыбалдиева Р.М.',
        description: { ky: 'Башталгыч класстарда окутуу жана укук таануу.', ru: 'Преподавание в начальных классах и правоведение.', en: 'Primary school teaching and legal studies.' }
      }
    ],
    bachelorPrograms: ['Программалык камсыздоо (230109)', 'Укук таануу (030503)', 'Башталгыч класста окутуу (050709)', 'Экономика жана бухгалтердик эсеп (080106)'],
    masterPrograms: []
  }
];

export const PROGRAMS_LIST: Program[] = [
  {
    id: 'prog-se',
    code: '710100',
    title: { ky: 'Программалык камсыздоо инженериясы', ru: 'Программная инженерия', en: 'Software Engineering' },
    facultyId: 'it-tech-econ',
    degree: 'bachelor',
    duration: '4 жыл (күндүзгү)',
    tuitionSom: 36000,
    budgetSeats: 20,
    minOrt: 115,
    description: {
      ky: 'Веб, мобилдик жана булуттук колдонмолорду түзүү, жасалма интеллект негиздери, Python, C++, Java, React жана киберкоопсуздук.',
      ru: 'Разработка веб, мобильных систем, алгоритмы искусственного интеллекта и архитектура программного обеспечения.',
      en: 'Fullstack web & mobile development, cloud systems, AI algorithms, and software testing.'
    },
    careers: ['Frontend / Backend Developer', 'DevOps Engineer', 'Mobile App Creator', 'IT Project Manager']
  },
  {
    id: 'prog-app-it',
    code: '510200',
    title: { ky: 'Колдонмо информатика (Экономика жана башкарууда)', ru: 'Прикладная информатика в экономике', en: 'Applied Computer Science in Economics' },
    facultyId: 'it-tech-econ',
    degree: 'bachelor',
    duration: '4 жыл',
    tuitionSom: 33000,
    budgetSeats: 15,
    minOrt: 110,
    description: {
      ky: 'Бизнес-процесстерди автоматташтыруу, маалыматтык коопсуздук, финансылык моделдерди программалоо жана чоң маалыматтар анализи.',
      ru: 'Автоматизация бизнес-процессов, аналитика баз данных и внедрение корпоративных ERP-систем.',
      en: 'Enterprise ERP management, business data analytics, and database engineering.'
    },
    careers: ['Data Analyst', 'ERP Administrator', 'Системалык аналитик', 'IT-консультант']
  },
  {
    id: 'prog-law',
    code: '530500',
    title: { ky: 'Юриспруденция (Соттук, жарандык жана жазык укугу)', ru: 'Юриспруденция (Судебное, гражданское и уголовное право)', en: 'Jurisprudence & Legal Practice' },
    facultyId: 'humanities-law',
    degree: 'bachelor',
    duration: '4 жыл / 5 жыл сырттан',
    tuitionSom: 38000,
    budgetSeats: 12,
    minOrt: 120,
    description: {
      ky: 'КР мыйзамдары, сот өндүрүшү, криминалистика, прокуратура, нотариат жана жарандардын укуктарын коргоо боюнча фундаменталдык билим.',
      ru: 'Классическое юридическое образование для работы в судах, органах прокуратуры, нотариате и адвокатуре.',
      en: 'Rigorous legal education preparing civil advocates, magistrates, and corporate legal counselors.'
    },
    careers: ['Юрист-консультант', 'Сот катчысы жана жардамчысы', 'Адвокат', 'Мамлекеттик кызматчы']
  },
  {
    id: 'prog-kg-lang',
    code: '531100',
    title: { ky: 'Кыргыз тили жана адабияты (Педагогика)', ru: 'Кыргызский язык и литература', en: 'Kyrgyz Philology & Literature' },
    facultyId: 'humanities-law',
    degree: 'bachelor',
    duration: '4 жыл',
    tuitionSom: 28000,
    budgetSeats: 30,
    minOrt: 110,
    description: {
      ky: 'Эне тилдин грамматикасын, көркөм адабиятты, Манас таанууну жана заманбап окутуу усулдарын терең өздөштүргөн педагог-филологдорду даярдоо.',
      ru: 'Подготовка филологов, исследователей эпоса Манас, редакторов и преподавателей кыргызского языка.',
      en: 'Training educators of Kyrgyz national literature, Manas cultural heritage, and linguistics.'
    },
    careers: ['Кыргыз тили мугалими', 'Редактор / Журналист', 'Мамлекеттик тил боюнча адис', 'Илимий кызматкер']
  },
  {
    id: 'prog-eng',
    code: '531200',
    title: { ky: 'Чет тили (Англис тили) жана маданияттар аралык байланыш', ru: 'Иностранный язык (Английский язык)', en: 'English Philology & Intercultural Studies' },
    facultyId: 'humanities-law',
    degree: 'bachelor',
    duration: '4 жыл',
    tuitionSom: 34000,
    budgetSeats: 20,
    minOrt: 115,
    description: {
      ky: 'Англис тилин эл аралык деңгээлде өздөштүрүү, синхрондук жана жазма котормо, заманбап интерактивдүү методикалар.',
      ru: 'Английский язык международного уровня, синхронный перевод и современные интерактивные методики преподавания.',
      en: 'English fluency, academic writing, simultaneous translation, and communicative language teaching.'
    },
    careers: ['Англис тили мугалими', 'Котормочу-референт', 'Эл аралык уюмдардын координатору', 'Туризм адиси']
  },
  {
    id: 'prog-primary-ed',
    code: '550700',
    title: { ky: 'Педагогика жана башталгыч билим берүүнүн методикасы', ru: 'Педагогика и методика начального образования', en: 'Primary Education Pedagogy' },
    facultyId: 'pedagogy-training',
    degree: 'bachelor',
    duration: '4 жыл',
    tuitionSom: 29000,
    budgetSeats: 25,
    minOrt: 110,
    description: {
      ky: 'Башталгыч класстын окуучуларын ар тараптуу өнүктүрүү, инклюзивдик билим берүү, STEAM эксперименттери жана лидерлик тарбия.',
      ru: 'Методика преподавания в начальной школе с применением инновационных интерактивных технологий.',
      en: 'Contemporary primary education pedagogy, STEM child laboratories, and inclusive classroom practices.'
    },
    careers: ['Башталгыч класс мугалими', 'Мектеп жетекчиси', 'Билим берүү борборунун директору', 'Репетитор']
  },
  {
    id: 'prog-econ',
    code: '580100',
    title: { ky: 'Экономика, бухгалтердик эсеп жана каржы', ru: 'Экономика, бухгалтерский учет и финансы', en: 'Economics, Accounting & Corporate Finance' },
    facultyId: 'it-tech-econ',
    degree: 'bachelor',
    duration: '4 жыл',
    tuitionSom: 34000,
    budgetSeats: 15,
    minOrt: 110,
    description: {
      ky: 'Каржылык талдоо, 1С бухгалтерия, эл аралык финансылык отчеттуулук (МСФО), салык системасы жана инвестицияларды башкаруу.',
      ru: 'Финансовый анализ, аудит по международным стандартам МСФО, банковское дело и налоги.',
      en: 'Financial analytics, international auditing (IFRS), banking operations, and tax strategy.'
    },
    careers: ['Башкы бухгалтер', 'Финансылык талдоочу', 'Банктын кредиттик менеджери', 'Салык инспектору']
  },
  {
    id: 'prog-agro',
    code: '740100',
    title: { ky: 'Агрономия жана органикалык айыл чарба', ru: 'Агрономия и органическое сельское хозяйство', en: 'Agronomy & Sustainable Agriculture' },
    facultyId: 'agrobusiness-tourism',
    degree: 'bachelor',
    duration: '4 жыл',
    tuitionSom: 28000,
    budgetSeats: 25,
    minOrt: 105,
    description: {
      ky: 'Талас аймагынын бренди болгон төө буурчак, мөмө-жемиш жана органикалык эгиндерди заманбап агротехнологиялар менен өстүрүү.',
      ru: 'Агрономия, защита растений, селекция и современные технологии выращивания бобовых и плодоовощных культур.',
      en: 'Agronomy, crop science, organic farming, and bean production technologies.'
    },
    careers: ['Башкы агроном', 'Агробизнес жетекчиси', 'Үрөнчүлүк боюнча адис', 'Айыл чарба инспектору']
  },
  {
    id: 'prog-master-law',
    code: 'M-530500',
    title: { ky: 'Магистратура: Жарандык жана эл аралык укук', ru: 'Магистратура: Гражданское и международное право', en: 'Master of Laws: Civil & International Law' },
    facultyId: 'humanities-law',
    degree: 'master',
    duration: '2 жыл',
    tuitionSom: 42000,
    budgetSeats: 8,
    minOrt: 0,
    description: {
      ky: 'Жогорку квалификациялуу юристтер жана илимий изилдөөчүлөр үчүн тереңдетилген юридикалык программа.',
      ru: 'Углубленная магистерская программа для судебных экспертов, юрисконсультов и исследователей.',
      en: 'Advanced Master of Laws program focusing on transnational civil disputes and commercial law.'
    },
    careers: ['Сот', 'ЖОЖдун окутуучусу', 'Башкы юрисконсульт', 'Эл аралык укук коргоочу']
  },
  {
    id: 'prog-master-cs',
    code: 'M-510200',
    title: { ky: 'Магистратура: Колдонмо информатика жана интеллектуалдык системалар', ru: 'Магистратура: Прикладная информатика и ИИ', en: 'Master of Science in Applied Computing & AI' },
    facultyId: 'it-tech-econ',
    degree: 'master',
    duration: '2 жыл',
    tuitionSom: 40000,
    budgetSeats: 10,
    minOrt: 0,
    description: {
      ky: 'Маалыматтар инженериясы, Machine Learning моделдери, булуттук архитектура жана илимий изилдөө методологиясы.',
      ru: 'Магистерская программа по машинному обучению, аналитике больших данных и ИИ-системам.',
      en: 'Postgraduate research in machine learning, distributed cloud systems, and applied intelligent agents.'
    },
    careers: ['Lead Software Architect', 'AI Researcher', 'IT-директор (CIO)', 'ЖОЖдун доценти']
  }
];

export const ANNIVERSARY_MILESTONES: AnniversaryMilestone[] = [
  {
    year: 1996,
    title: {
      ky: 'Талас өрөөнүндө жогорку билимдин түптөлүшү',
      ru: 'Зарождение высшего образования в Таласской долине',
      en: 'Foundation of Higher Education in Talas'
    },
    description: {
      ky: 'И. Арабаев атындагы КМПУнун жана Кыргыз архитектуралык-курулуш институтунун (КГУСТА) Таластагы филиалдары ачылып, алгачкы студенттер кабыл алынган.',
      ru: 'Открытие первых филиалов республиканских вузов (КГПУ им. Арабаева и КГУСТА) в Таласе.',
      en: 'Opening of the initial university branches in Talas, providing local youth access to university faculties.'
    },
    significance: {
      ky: 'Аймактагы жаштарга Бишкекке барбай эле өз жеринде билим алуунун башаты салынды.',
      ru: 'Начало подготовки собственных квалифицированных кадров для региона.',
      en: 'Paved the way for regional academic self-sufficiency in Talas.'
    }
  },
  {
    year: 1999,
    title: {
      ky: 'Окуу базасынын кеңейиши жана техникалык колледж',
      ru: 'Расширение образовательной базы и техникум',
      en: 'Campus Expansion & Technical Programs'
    },
    description: {
      ky: 'КМУУнун филиалы, айыл чарба техникуму жана атайын адистиктер кошулуп, академиялык инфраструктура түзүлгөн.',
      ru: 'Присоединение сельскохозяйственного техникума и филиала КГНУ, создание единой образовательной базы.',
      en: 'Consolidation of agricultural, pedagogical, and national university branch assets.'
    },
    significance: {
      ky: 'Көп тармактуу окуу жайынын материалык-техникалык базасы чыңдалды.',
      ru: 'Создание предпосылок для открытия самостоятельного университета.',
      en: 'Solidified the infrastructure required for independent university status.'
    }
  },
  {
    year: 2000,
    title: {
      ky: 'Талас мамлекеттик университетинин расмий негизделиши',
      ru: 'Официальное учреждение Таласского государственного университета',
      en: 'Official Charter as Talas State University'
    },
    description: {
      ky: 'Кыргыз Республикасынын Президентинин 2000-жылдын 25-июлундагы №189 Жарлыгы жана Өкмөттүн токтому менен Талас мамлекеттик университети (ТалМУ) расмий түзүлдү.',
      ru: 'Указом Президента Кыргызской Республики №189 от 25 июля 2000 года учрежден самостоятельный Таласский государственный университет.',
      en: 'Chartered as an autonomous public state university by Presidential Decree #189.'
    },
    significance: {
      ky: 'Талас облусунун башкы илимий-билим берүүчү автономиялуу флагманы жаралды.',
      ru: 'Университет стал главным научно-образовательным центром региона.',
      en: 'Established Talas State University as the flagship academic pillar of the province.'
    }
  },
  {
    year: 2008,
    title: {
      ky: 'Болон процессине өтүү жана кредиттик технологиялар',
      ru: 'Переход на Болонскую систему и ECTS',
      en: 'Adoption of the Bologna Process & ECTS'
    },
    description: {
      ky: 'Окуу процессинде 2 баскычтуу билим берүү (бакалавриат жана магистратура) системасы, кредиттик сааттар жана санариптик көзөмөл киргизилген.',
      ru: 'Внедрение двухуровневой системы образования (бакалавриат/магистратура) и европейской системы ECTS.',
      en: 'Implementation of the two-tier bachelor/master degree structure and European ECTS credits.'
    },
    significance: {
      ky: 'ТалМУнун дипломдору эл аралык деңгээлде таанылууга жол ачты.',
      ru: 'Интеграция в общемировое образовательное пространство.',
      en: 'Opened international recognition and student mobility pathways.'
    }
  },
  {
    year: 2016,
    title: {
      ky: '20 жылдык маараке жана Эл аралык аккредитация',
      ru: '20-летний юбилей и независимая аккредитация',
      en: '20th Anniversary & Independent Accreditation'
    },
    description: {
      ky: 'Университет көз карандысыз эл аралык аккредитациялык агенттиктердин (БАК, Сапаттуу Билим) 5 жылдык институционалдык сертификатына ээ болгон.',
      ru: 'Успешное прохождение международной и национальной институциональной аккредитации всех программ.',
      en: 'Successful institutional and program accreditation by independent quality assurance agencies.'
    },
    significance: {
      ky: 'Билим берүүнүн сапаты жогорку мамлекеттик талаптарга дал келери тастыкталды.',
      ru: 'Подтверждение соответствия высочайшим образовательным стандартам.',
      en: 'Verified high quality benchmark across all faculties and research institutes.'
    }
  },
  {
    year: 2021,
    title: {
      ky: 'Санариптик трансформация жана Эразмус+ долбоорлору',
      ru: 'Цифровизация и участие в программах Erasmus+',
      en: 'Digital Transformation & European Erasmus+ Programs'
    },
    description: {
      ky: 'Электрондук деканат, AVN маалыматтык системасы, заманбап компьютердик хабдар жана Европа өлкөлөрү менен академиялык мобилдүүлүк ишке ашты.',
      ru: 'Внедрение цифрового деканата, системы AVN, открытие современных лабораторий и студенческий обмен по Erasmus+.',
      en: 'Full rollout of AVN digital campus, e-learning management, and Erasmus+ exchanges with EU universities.'
    },
    significance: {
      ky: 'Студенттер чет өлкөлөрдө акысыз семестрлик билим алууга мүмкүнчүлүк алышты.',
      ru: 'Студенты и преподаватели получили доступ к европейским грантам и стажировкам.',
      en: 'Empowered faculty and students with funded international study semesters in Europe.'
    }
  },
  {
    year: 2026,
    title: {
      ky: '30 ЖЫЛДЫК ДАҢКТУУ МААРАКЕ (1996–2026)',
      ru: '30-ЛЕТНИЙ ВЕЛИКИЙ ЮБИЛЕЙ (1996–2026)',
      en: '30th JUBILEE ANNIVERSARY (1996–2026)'
    },
    description: {
      ky: '«30 жыл билимге, илимге жана келечекке!» урааны астында 30 жылдык маараке кеңири эл аралык деңгээлде белгиленүүдө. Окуу жай Жусуп Баласагын атындагы КУУнун Талас аймактык көп тармактуу институту катары директор, профессор Айнура Ажибаеванын жетекчилиги астында жаңы AI-борборлору, инновациялык билим берүү программалары менен салтанатты тосуп алууда.',
      ru: 'Торжественное празднование 30-летия высшего образования в Таласе. В статусе Таласского регионального многопрофильного института КНУ им. Ж. Баласагына под руководством директора, профессора Айнуры Ажибаевой открываются новые лаборатории и научно-образовательные горизонты.',
      en: 'Grand celebration of 30 years of higher education in Talas. Operating as the Talas Regional Multidisciplinary Institute of Jusup Balasagyn KNU under Director Prof. Ainura Ajibaeva, the institution expands AI labs and research partnerships.'
    },
    significance: {
      ky: '30 жылдык тарыхый басып өткөн жол жана жаңы он жылдыктагы санариптик, илимий бийиктиктерге багыт.',
      ru: '30 лет славной истории и уверенный старт в следующее технологическое десятилетие.',
      en: 'Honoring three decades of transformative education while charting the next era of innovation.'
    }
  }
];

export const NEWS_DATA: NewsArticle[] = [
  {
    id: 'news-anniversary-launch',
    title: {
      ky: 'ТалМУ 30 жылдык мааракесине карата салтанаттуу иш-чаралардын планын жарыялады',
      ru: 'ТалГУ объявил программу торжественных мероприятий к 30-летию университета',
      en: 'TalSU Announces 30th Anniversary Commemorative Gala & Scientific Forum Schedule'
    },
    date: '2026-жыл, 18-Апрель',
    category: 'anniversary',
    featured: true,
    summary: {
      ky: '1996-жылдан 2026-жылга чейинки 30 жылдык даңктуу жолго арналган эл аралык илимий-практикалык конференция, бүтүрүүчүлөрдүн курултайы жана маданий фестиваль өтөт.',
      ru: 'В рамках 30-летия пройдут международная конференция, форум выдающихся выпускников и фестиваль студенческого творчества.',
      en: 'International scientific symposium, alumni summit, and cultural festivities marking 30 years from 1996 to 2026.'
    },
    content: {
      ky: 'Ж.Баласагын атындагы Талас аймактык көп тармактуу институтунун директору, педагогика илимдеринин доктору, профессор Айнура Ажибаева жетектеген уюштуруу комитетинин кеңешмесинде 30 жылдык юбилейлик иш-чаралардын кеңири планы бекитилди. Салтанатка Кыргыз Республикасынын Билим берүү жана илим министрлигинин өкүлдөрү, чет өлкөлүк өнөктөш ЖОЖдордун ректорлору, өрөөндүн ардагер окутуучулары жана миңдеген бүтүрүүчүлөр чакырылды. Маараке алкагында «30 жыл билимге жана келечекке» аттуу фотоальбом жана монография жарык көрөт.',
      ru: 'Оргкомитет под председательством директора Таласского регионального многопрофильного института КНУ им. Ж. Баласагына, д.п.н., профессора Айнуры Ажибаевой утвердил генеральный план юбилейных торжеств 30-летия.',
      en: 'Chaired by Institute Director Prof. Ainura Ajibaeva, the organizing board ratified the official 30-year jubilee itinerary, inviting international university leaders, state dignitaries, and thousands of accomplished alumni.'
    },
    image: TALSU_IMAGES.anniversaryGala
  },
  {
    id: 'news-it-ai-hub',
    title: {
      ky: 'ТалМУда жасалма интеллект жана заманбап программалоо борбору ачылды',
      ru: 'В ТалГУ открылся передовой центр искусственного интеллекта и программной инженерии',
      en: 'New Artificial Intelligence & Advanced Computing Center Inaugurated at TalSU'
    },
    date: '2026-жыл, 12-Апрель',
    category: 'science',
    featured: true,
    summary: {
      ky: 'Маалыматтык технологиялар факультетинде 40 күчтүү жумушчу станция, жогорку ылдамдыктагы була-оптика жана сенсордук экрандар менен жабдылган жаңы лаборатория ишке кирди.',
      ru: 'Установлены 40 мощных рабочих станций для обучения машинному обучению, аналитике данных и мобильной разработке.',
      en: 'Equipped with 40 high-performance workstations for machine learning, data engineering, and mobile app design.'
    },
    content: {
      ky: 'Жаңы AI лабораториясы студенттерге заманбап Python, нейрондук тармактар, чоң маалыматтар (Big Data) жана веб-архитектуралар боюнча практикалык долбоорлорду иштеп чыгууга шарт түзөт. Ошондой эле борбор Талас облусунун мектептеринин информатика мугалимдери үчүн акысыз квалификацияны жогорулатуу курстарын өткөрөт.',
      ru: 'Центр послужит площадкой для проектного обучения студентов и проведения тренингов для учителей информатики школ региона.',
      en: 'The tech hub powers project-based student training in deep learning and provides certification workshops for regional teachers.'
    },
    image: TALSU_IMAGES.scienceLab
  },
  {
    id: 'news-admissions-open',
    title: {
      ky: '«Абитуриент-2026»: ТалМУга кабыл алуунун жаңы эрежелери жана бюджеттик гранттар',
      ru: '«Абитуриент-2026»: Правила приема и бюджетные гранты в Таласский госуниверситет',
      en: '“Admissions 2026”: Guidelines & State Scholarships at Talas State University'
    },
    date: '2026-жыл, 05-Апрель',
    category: 'announcements',
    summary: {
      ky: 'ЖРТнын негизинде 250дөн ашуун мамлекеттик бюджеттик орундар, келишимдик жеңилдиктер жана онлайн каттоо порталы жөнүндө маалымат.',
      ru: 'Более 250 бюджетных грантов, льготы для отличников и сирот, старт онлайн-регистрации абитуриентов.',
      en: 'Over 250 state merit scholarships, social tuition discounts, and online registration portal launched for applicants.'
    },
    content: {
      ky: 'Кабыл алуу комиссиясы 2026–2027-окуу жылына карата бакалавриаттын 18 багыты, магистратуранын 6 программасы жана колледждин 5 кесиби боюнча абитуриенттерди кабыл алууга даяр. Колледжге 9- жана 11-класстын базасында ЖРТсыз, аттестаттын конкурсу менен кабыл алуу жүргүзүлөт.',
      ru: 'Приемная комиссия объявляет набор на очное и заочное отделения. Поступление в колледж на базе 9 и 11 классов без результатов ОРТ.',
      en: 'Admissions opened across 18 undergraduate majors and 5 vocational college diploma tracks with flexible pathways.'
    },
    image: TALSU_IMAGES.campusHero
  },
  {
    id: 'news-erasmus-mobility',
    title: {
      ky: 'ТалМУнун студенттери жана окутуучулары Европанын алдыңкы ЖОЖдорунда семестрлик стажировкадан өтүштү',
      ru: 'Студенты ТалГУ завершили семестровое обучение в европейских вузах-партнерах по Erasmus+',
      en: 'TalSU Scholars Complete Academic Exchange Semesters at European Partner Universities'
    },
    date: '2026-жыл, 28-Март',
    category: 'university',
    summary: {
      ky: 'Эразмус+ программасынын алкагында Германия, Польша жана Түркиянын университеттеринде билим алган студенттер дипломдорун коргошту.',
      ru: 'В рамках программы академической мобильности студенты прошли семестр в вузах Польши, Германии и Турции.',
      en: 'Students completed semester exchanges across Poland, Germany, and Turkey under the European Erasmus+ mobility program.'
    },
    content: {
      ky: 'Эл аралык байланыштар бөлүмү билдиргендей, ТалМУнун 12 студенти жана 4 окутуучусу өнөктөш европалык университеттерде билим алып, эл аралык ECTS кредиттерин ийгиликтүү которушту. Кийинки семестрге жаңы сынак жарыяланды.',
      ru: 'Отдел международных связей подвел итоги весеннего семестра мобильности и объявил новый конкурс грантов для студентов.',
      en: 'International Office celebrated successful credit transfer for 12 exchange students and opened the new grant round.'
    },
    image: TALSU_IMAGES.graduation
  },
  {
    id: 'news-anniversary-spartakiad',
    title: {
      ky: '30 жылдык мааракеге арналган республикалык студенттик спартакиада жана волейбол турнири өттү',
      ru: 'В ТалГУ состоялась студенческая республиканская спартакиада к 30-летию вуза',
      en: '30th Anniversary Inter-University Athletics & Volleyball Cup Held at TalSU'
    },
    date: '2026-жыл, 22-Март',
    category: 'events',
    summary: {
      ky: 'Кыргызстандын 12 жогорку окуу жайынан келген 350дөн ашуун студент спорттун 6 түрү боюнча күч сынашышты.',
      ru: 'Более 350 студентов из 12 вузов Кыргызстана состязались в волейболе, футболе, шахматах и легкой атлетике.',
      en: 'Over 350 student athletes from 12 universities competed in volleyball, chess, football, and track and field.'
    },
    content: {
      ky: 'ТалМУнун спорт комплексинде өткөн салтанаттуу турнирде Талас мамлекеттик университетинин курама командасы волейбол жана шахмат боюнча биринчи орунду багындырды. Жеңүүчүлөргө 30 жылдык мааракелик кубоктор жана акчалай сыйлыктар тапшырылды.',
      ru: 'Команда ТалГУ завоевала золото в турнирах по волейболу и шахматам. Победители награждены памятными кубками 30-летия университета.',
      en: 'TalSU varsity teams secured championship trophies in volleyball and chess amidst celebratory jubilee fanfare.'
    },
    image: TALSU_IMAGES.computerLab
  },
  {
    id: 'news-ecology-science-grant',
    title: {
      ky: 'ТалМУнун окумуштуулары Талас өрөөнүнүн экосистемасын сактоо боюнча эл аралык грантты утуп алышты',
      ru: 'Ученые ТалГУ выиграли международный грант по изучению биоразнообразия Таласской долины',
      en: 'TalSU Faculty Wins International Environmental Research Grant for Talas Watershed'
    },
    date: '2026-жыл, 15-Март',
    category: 'science',
    summary: {
      ky: 'Биология жана агробизнес кафедрасынын изилдөөчүлөрү тоолуу суу ресурстарын жана органикалык үрөнчүлүктү изилдөө үчүн $45,000 өлчөмүндө каржылоо алышты.',
      ru: 'Проект по мониторингу водных ресурсов и устойчивому семеноводству получил международную поддержку.',
      en: '$45,000 grant awarded for soil biodiversity, glacial runoff modeling, and endemic flora conservation in Talas.'
    },
    content: {
      ky: 'Долбоор Талас дарыясынын бассейниндеги суунун тазалыгын мониторингдөөгө жана климаттын өзгөрүүсүнө туруктуу жергиликтүү буурчак сортторун тандоого багытталган. Жыйынтыктар «ТалМУ Жарчысы» журналында жана эл аралык Scopus басылмаларында жарыяланат.',
      ru: 'Исследование нацелено на экологический мониторинг бассейна реки Талас и селекцию засухоустойчивых сортов фасоли. Результаты будут опубликованы в журналах Scopus.',
      en: 'The project focuses on long-term watershed monitoring and developing drought-resilient legumes, with papers slated for Scopus-indexed journals.'
    },
    image: TALSU_IMAGES.scienceLab
  },
  {
    id: 'news-campus-media-center',
    title: {
      ky: 'ТалМУнун башкы кампусунда жаңы санариптик медиа-борбор жана телестудия ачылды',
      ru: 'В главном кампусе ТалГУ открылись цифровая медиа-студия и студенческий пресс-центр',
      en: 'Modern Digital Media Center & Broadcasting Studio Opens at TalSU Main Campus'
    },
    date: '2026-жыл, 02-Март',
    category: 'university',
    summary: {
      ky: 'Журналистика жана тилдер багытындагы студенттер үчүн кесипкөй 4K камералар, монтаждоо станциялары жана подкаст жабдуулары орнотулду.',
      ru: 'Студенты получили доступ к профессиональным видеокамерам, монтажным станциям и оборудованию для записи подкастов.',
      en: 'Equipped with 4K broadcast cameras, acoustic podcast booths, and video editing suites for communication students.'
    },
    content: {
      ky: 'Медиа-борбор университеттин күнүмдүк жаңылыктарын чагылдыруу, «ТалМУ 30 жыл» подкасттарын чыгаруу жана студенттерге заманбап мультимедиалык көндүмдөрдү үйрөтүү максатында түзүлдү. Борбордун расмий ачылышына облустук ММК өкүлдөрү катышты.',
      ru: 'Студия позволит выпускать подкасты к 30-летию вуза, вести трансляции лекций и готовить студенческие выпуски новостей.',
      en: 'The studio will produce official university podcasts, jubilee interviews, and live event webcasts while training digital journalists.'
    },
    image: TALSU_IMAGES.library
  }
];

export const PARTNERS: PartnerUniversity[] = [
  {
    id: 'p-turkey',
    name: 'Кастамону университети (Kastamonu University)',
    country: 'Түркия',
    flag: '🇹🇷',
    program: 'Мевлана жана эки тараптуу келишим',
    scope: { ky: 'Академиялык мобилдүүлүк, биргелешкен илимий макалалар жана стажировкалар.', ru: 'Академическая мобильность и совместные публикации.', en: 'Faculty exchange, joint publications, and student internships.' }
  },
  {
    id: 'p-germany',
    name: 'Вайенштефан-Трисдорф колдонмо илимдер университети (HSWT)',
    country: 'Германия',
    flag: '🇩🇪',
    program: 'Erasmus+ жана айыл чарба технологиялары',
    scope: { ky: 'Агрономия, биоэкология жана туруктуу өнүгүү боюнча биргелешкен долбоорлор.', ru: 'Проекты в сфере агроэкологии и устойчивого развития.', en: 'Collaborative projects in sustainable agriculture and bioecology.' }
  },
  {
    id: 'p-kazakhstan',
    name: 'М.Х. Дулати атындагы Тараз мамлекеттик университети',
    country: 'Казакстан',
    flag: '🇰🇿',
    program: 'Аймактык трансчек аралык кызматташтык',
    scope: { ky: 'Студенттик олимпиадалар, илимий конференциялар жана архивдик изилдөөлөр.', ru: 'Студенческие олимпиады и научно-практические конференции.', en: 'Cross-border conferences, student Olympiads, and joint symposia.' }
  },
  {
    id: 'p-russia',
    name: 'Россия мамлекеттик гуманитардык университети (РГГУ)',
    country: 'Россия',
    flag: '🇷🇺',
    program: 'Славян таануу жана филология',
    scope: { ky: 'Орус тили жана адабияты мугалимдеринин квалификациясын жогорулатуу.', ru: 'Повышение квалификации преподавателей русского языка.', en: 'Professional workshops in philology and teacher training.' }
  },
  {
    id: 'p-china',
    name: 'Синьцзян педагогикалык университети',
    country: 'Кытай',
    flag: '🇨🇳',
    program: 'Жибек Жолу билим берүү демилгеси',
    scope: { ky: 'Кытай тилин окутуу, маданий алмашуу жана онлайн курстар.', ru: 'Преподавание китайского языка и культурный обмен.', en: 'Chinese language courses, cultural exchanges, and online curricula.' }
  }
];

export const GALLERY_PHOTOS: GalleryPhoto[] = [
  { id: 'g1', title: { ky: 'ТалМУнун Башкы окуу имараты жана сейил багы', ru: 'Главный корпус ТалГУ и студенческий сквер', en: 'TalSU Main Academic Palace & Green Boulevard' }, category: 'campus', url: TALSU_IMAGES.campusHero },
  { id: 'g2', title: { ky: '30 жылдык мааракелик салтанаттуу ассамблея', ru: 'Торжественное собрание к 30-летию университета', en: '30th Anniversary Celebratory Gala Assembly' }, category: 'anniversary', url: TALSU_IMAGES.anniversaryGala },
  { id: 'g3', title: { ky: 'Заманбап илимий изилдөө лабораториясы', ru: 'Современная исследовательская лаборатория', en: 'Modern Research Laboratory & Innovation Hub' }, category: 'science', url: TALSU_IMAGES.scienceLab },
  { id: 'g4', title: { ky: 'IT жана компьютердик инженерия сабагы', ru: 'Занятия по IT и компьютерной инженерии', en: 'Computer Engineering & Applied Software Lab' }, category: 'students', url: TALSU_IMAGES.computerLab },
  { id: 'g5', title: { ky: 'Академиялык китепкананын окуу залы', ru: 'Читальный зал академической библиотеки', en: 'Central Academic Reading Hall & Archives' }, category: 'campus', url: TALSU_IMAGES.library },
  { id: 'g6', title: { ky: 'Бүтүрүүчүлөрдүн салтанаттуу диплому', ru: 'Торжественный выпуск студентов ТалГУ', en: 'TalSU Degree Conferral & Graduation Ceremony' }, category: 'students', url: TALSU_IMAGES.graduation }
];

export interface CampusBuilding {
  id: string;
  name: MultilingualText;
  address: MultilingualText;
  description: MultilingualText;
}

export const CAMPUS_BUILDINGS: CampusBuilding[] = [
  {
    id: 'building-1',
    name: {
      ky: 'Башкы корпус №1 (Ректорат)',
      ru: 'Главный корпус №1 (Ректорат)',
      en: 'Main Academic Campus #1 (Rectorate)'
    },
    address: {
      ky: 'Талас шаары, К. Нуржанов көчөсү 25 (аллея)',
      ru: 'г. Талас, ул. К. Нуржанова 25 (аллея)',
      en: '25 K. Nurzhanov St, Talas'
    },
    description: {
      ky: 'Ректорат, окуу-усулдук башкармалык, илимий бөлүм, жыйындар залы, башкы китепкана жана Табият таануу жана педагогика факультети.',
      ru: 'Ректорат, учебно-методическое управление, научный отдел, конференц-зал, главная библиотека и факультет естествознания и педагогики.',
      en: 'University rectorate, academic administration, research division, conference hall, main library, and pedagogy faculty.'
    }
  },
  {
    id: 'building-2',
    name: {
      ky: 'Окуу корпусу №2',
      ru: 'Учебный корпус №2',
      en: 'Academic Campus #2'
    },
    address: {
      ky: 'Талас шаары, Бердике Баатыр көчөсү 287',
      ru: 'г. Талас, ул. Бердике Баатыра 287',
      en: '287 Berdike Baatyr St, Talas'
    },
    description: {
      ky: 'Экономика, укук таануу жана гуманитардык багыттагы дарсканалар, заманбап компьютердик класстар жана тил үйрөнүү борбору.',
      ru: 'Аудитории экономики, юриспруденции и гуманитарных наук, современные компьютерные классы и лингафонный кабинет.',
      en: 'Economics, law, and humanities lecture halls, modern computer classrooms, and language laboratories.'
    }
  },
  {
    id: 'building-3',
    name: {
      ky: 'Окуу корпусу №3',
      ru: 'Учебный корпус №3',
      en: 'Academic Campus #3'
    },
    address: {
      ky: 'Талас шаары, К. Маркс көчөсү 14',
      ru: 'г. Талас, ул. К. Маркса 14',
      en: '14 K. Marx St, Talas'
    },
    description: {
      ky: 'Инженердик-технологиялык лабораториялар, физика-химия изилдөө борбору, өндүрүштүк цехтер жана спорт залы.',
      ru: 'Инженерно-технологические лаборатории, физико-химический центр, учебные мастерские и спортивный зал.',
      en: 'Engineering and tech laboratories, physics and chemistry research center, workshops, and indoor gymnasium.'
    }
  },
  {
    id: 'building-4',
    name: {
      ky: 'Окуу корпусу №4 (ТалМУ Колледжи)',
      ru: 'Учебный корпус №4 (Колледж ТалГУ)',
      en: 'Campus #4 (TalSU College)'
    },
    address: {
      ky: 'Талас шаары, Ч. Айтматов көчөсү 241',
      ru: 'г. Талас, ул. Ч. Айтматова 241',
      en: '241 Ch. Aitmatov St, Talas'
    },
    description: {
      ky: 'ТалМУнун көп тармактуу орто кесиптик колледжинин негизги имараты, медиа-борбор, ашкана жана кеңири окуу залдары.',
      ru: 'Главное здание многопрофильного средне-профессионального колледжа ТалГУ, медиа-центр, столовая и учебные аудитории.',
      en: 'Main building of TalSU Multidisciplinary Vocational College, media center, cafeteria, and lecture rooms.'
    }
  },
  {
    id: 'building-5',
    name: {
      ky: 'Студенттик жатакана №5',
      ru: 'Студенческое общежитие №5',
      en: 'Student Dormitory #5'
    },
    address: {
      ky: 'Талас шаары, Б. Аманбаев көчөсү 18',
      ru: 'г. Талас, ул. Б. Аманбаева 18',
      en: '18 B. Amanbaev St, Talas'
    },
    description: {
      ky: 'Алыскы райондордон жана башка облустардан келген студенттер үчүн бардык шарты бар (Wi-Fi, ашкана, окуу залы, кир жуучу жай) жатакана.',
      ru: 'Благоустроенное общежитие для студентов из отдаленных районов и других областей со всеми удобствами (Wi-Fi, кухня, прачечная).',
      en: 'Fully equipped student residence hall for out-of-town students featuring high-speed Wi-Fi, study halls, kitchen, and laundry.'
    }
  }
];

