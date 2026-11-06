export interface Specialty {
  id: string;
  code: string;
  name: {
    ky: string;
    ru: string;
    en: string;
  };
  facultyId: string;
  degree: 'bachelor' | 'college' | 'master';
  duration: string;
  budgetSeats: number;
  contractSeats: number;
  contractFeeSom: number;
  minOrtScore: number;
  format: string;
  description: {
    ky: string;
    ru: string;
    en: string;
  };
  careers: string[];
}

export interface NewsItem {
  id: string;
  title: {
    ky: string;
    ru: string;
    en: string;
  };
  date: string;
  category: 'academic' | 'science' | 'student' | 'announcement';
  summary: {
    ky: string;
    ru: string;
    en: string;
  };
  content: {
    ky: string;
    ru: string;
    en: string;
  };
  imageUrl?: string;
  important?: boolean;
}

export interface FacultyDepartment {
  id: string;
  name: {
    ky: string;
    ru: string;
    en: string;
  };
  headName: string;
  headTitle: string;
  email: string;
  phone: string;
  specialtyCount: number;
  description: {
    ky: string;
    ru: string;
    en: string;
  };
  keyDisciplines: string[];
}

export interface ScheduleItem {
  time: string;
  subject: string;
  teacher: string;
  room: string;
  type: 'Лекция' | 'Практика' | 'Лаборатория';
}

export interface LibraryResource {
  id: string;
  title: string;
  author: string;
  year: number;
  category: string;
  pages: number;
  fileSize: string;
  format: 'PDF' | 'DJVU';
}

export const IMAGES = {
  hero: '/src/assets/images/knu_talas_campus_hero_1793074978079.jpg',
  director: '/src/assets/images/knu_director_portrait_1793074978854.jpg',
  computerLab: '/src/assets/images/knu_students_computer_lab_1793074979212.jpg',
  library: '/src/assets/images/knu_library_study_hall_1793074979275.jpg',
  graduation: '/src/assets/images/knu_graduation_talas_1793074980891.jpg',
};

export const FACULTIES: FacultyDepartment[] = [
  {
    id: 'it-tech',
    name: {
      ky: 'Табигый-техникалык жана маалыматтык технологиялар бөлүмү',
      ru: 'Отделение естественно-технических и информационных технологий',
      en: 'Natural Technical & Information Technologies Department'
    },
    headName: 'Жумабеков Талантбек Садырович',
    headTitle: 'Техника илимдеринин кандидаты, доцент',
    email: 'it.takti@knu.kg',
    phone: '+996 (3422) 5-24-21',
    specialtyCount: 4,
    description: {
      ky: 'Заманбап IT лабораторияларында программалоо, веб-иштеп чыгуу, тармактык администрациялоо жана санариптик экосистемаларды өздөштүргөн жогорку квалификациялуу адистерди даярдайт.',
      ru: 'Подготовка квалифицированных кадров в сфере программной инженерии, веб-разработки, сетевого администрирования и цифровых систем.',
      en: 'Educating high-caliber specialists in software engineering, web development, network administration, and digital ecosystems.'
    },
    keyDisciplines: ['Программалоо (Python, C++, Java)', 'Веб жана мобилдик иштеп чыгуу', 'Маалыматтар базасы жана AI негиздери', 'Киберкоопсуздук жана тармактар']
  },
  {
    id: 'pedagogy',
    name: {
      ky: 'Педагогика жана гуманитардык билимдер бөлүмү',
      ru: 'Отделение педагогики и гуманитарных знаний',
      en: 'Department of Pedagogy & Humanities'
    },
    headName: 'Осмонова Нургүл Калыковна',
    headTitle: 'Филология илимдеринин кандидаты, доцент',
    email: 'pedagogy.takti@knu.kg',
    phone: '+996 (3422) 5-24-22',
    specialtyCount: 5,
    description: {
      ky: 'Талас облусунун жана бүтүндөй республиканын мектептери, лицейлери үчүн кыргыз тили, англис тили, орус тили жана башталгыч билим берүү мугалимдерин даярдоонун борбору.',
      ru: 'Ведущий центр подготовки учителей начальных классов, кыргызского, английского и русского языков для школ региона.',
      en: 'Center for training primary school teachers, Kyrgyz, English, and Russian language educators for regional schools.'
    },
    keyDisciplines: ['Педагогикалык психология', 'Инновациялык окутуу методикасы', 'Практикалык кыргыз жана англис тили', 'Балдар адабияты жана чечендик өнөр']
  },
  {
    id: 'economics-law',
    name: {
      ky: 'Экономика, башкаруу жана укук таануу бөлүмү',
      ru: 'Отделение экономики, управления и юриспруденции',
      en: 'Department of Economics, Management & Law'
    },
    headName: 'Базаркулов Бакыт Мелисович',
    headTitle: 'Экономика илимдеринин доктору, профессор',
    email: 'econ.takti@knu.kg',
    phone: '+996 (3422) 5-24-23',
    specialtyCount: 4,
    description: {
      ky: 'Мамлекеттик жана муниципалдык кызмат, каржы институттары, банктар жана юридикалык органдар үчүн беделдүү адистерди бүтүрүп чыгарат.',
      ru: 'Подготовка экономистов, бухгалтеров, менеджеров и юристов для государственных и финансовых структур.',
      en: 'Training economists, accountants, managers, and legal professionals for municipal, state, and private corporations.'
    },
    keyDisciplines: ['Бухгалтердик эсеп жана аудит', 'Банктык иш жана салыктар', 'Жарандык жана эмгек укугу', 'Стратегиялык менеджмент жана маркетинг']
  },
  {
    id: 'college',
    name: {
      ky: 'Орто кесиптик билим берүү бөлүмү (ТАКТИ Колледжи)',
      ru: 'Отделение среднего профессионального образования (Колледж ТАКТИ)',
      en: 'Vocational College Department of TRMI'
    },
    headName: 'Асанкулова Гүлмира Токтосуновна',
    headTitle: 'Билим берүүнүн мыктысы, ага окутуучу',
    email: 'college.takti@knu.kg',
    phone: '+996 (3422) 5-24-25',
    specialtyCount: 5,
    description: {
      ky: '9- жана 11-класстын базасында заманбап суроо-талапка ээ кесиптерди тездетилген жана сапаттуу өздөштүрүү мүмкүнчүлүгү. Бүтүрүүчүлөр КУУнун 2-3-курсуна түз улантууга укук алышат.',
      ru: 'Обучение на базе 9 и 11 классов с возможностью продолжения высшего образования в КНУ со 2-3 курса.',
      en: 'Vocational education for 9th and 11th grade graduates with direct transfer pathways to KNU bachelor programs.'
    },
    keyDisciplines: ['Компьютердик программалоо', 'Укук таануу негиздери', 'Башталгыч класста окутуу', 'Экономика жана финансылык сабаттуулук']
  }
];

export const SPECIALTIES: Specialty[] = [
  {
    id: 'spec-it',
    code: '710100',
    name: {
      ky: 'Компьютердик лингвистика жана программалык камсыздоо',
      ru: 'Компьютерная лингвистика и программное обеспечение',
      en: 'Computational Linguistics & Software Engineering'
    },
    facultyId: 'it-tech',
    degree: 'bachelor',
    duration: '4 жыл',
    budgetSeats: 15,
    contractSeats: 40,
    contractFeeSom: 34000,
    minOrtScore: 115,
    format: 'Күндүзгү / Санариптик лабораториялар',
    description: {
      ky: 'Программалоо тилдерин өздөштүрүү менен катар санариптик тексттерди, AI алгоритмдерин жана веб-колдонмолорду куруу боюнча комплекстүү багыт.',
      ru: 'Комплексное направление по разработке веб-приложений, алгоритмов ИИ и языковых моделей.',
      en: 'Comprehensive program covering web development, AI language processing, and modern software architectures.'
    },
    careers: ['Fullstack Frontend/Backend Developer', 'IT адиси жана системалык админ', 'Дата-аналитик', 'Web/Mobile иштеп чыгуучу']
  },
  {
    id: 'spec-inf',
    code: '510200',
    name: {
      ky: 'Колдонмо информатика жана веб-инженерия',
      ru: 'Прикладная информатика и веб-инженерия',
      en: 'Applied Computer Science & Web Engineering'
    },
    facultyId: 'it-tech',
    degree: 'bachelor',
    duration: '4 жыл',
    budgetSeats: 12,
    contractSeats: 35,
    contractFeeSom: 32000,
    minOrtScore: 110,
    format: 'Күндүзгү',
    description: {
      ky: 'Ишканалардын маалыматтык системаларын автоматташтыруу, булуттук технологиялар жана корпоративдик тармактарды долбоорлоо.',
      ru: 'Автоматизация информационных систем предприятий, облачные решения и администрирование сетей.',
      en: 'Enterprise IT automation, cloud technologies, and corporate systems architecture.'
    },
    careers: ['Маалыматтык коопсуздук адиси', 'DevOps инженери', 'IT долбоор менеджер', 'Системалык архитектор']
  },
  {
    id: 'spec-kg-lang',
    code: '531100',
    name: {
      ky: 'Кыргыз тили жана адабияты (Педагогика)',
      ru: 'Кыргызский язык и литература (Педагогика)',
      en: 'Kyrgyz Language & Literature (Pedagogy)'
    },
    facultyId: 'pedagogy',
    degree: 'bachelor',
    duration: '4 жыл',
    budgetSeats: 25,
    contractSeats: 30,
    contractFeeSom: 28000,
    minOrtScore: 110,
    format: 'Күндүзгү / Сырттан окуу',
    description: {
      ky: 'Кыргыз элинин адабий мурасын, Манас таанууну жана заманбап тил илимин терең өздөштүргөн кесипкөй филолог-педагогдорду даярдоо.',
      ru: 'Подготовка учителей кыргызского языка, филологов и исследователей литературного наследия.',
      en: 'Educating Kyrgyz language teachers, philologists, and researchers of cultural heritage.'
    },
    careers: ['Орто жана жогорку мектеп мугалими', 'Редактор жана журналист', 'Мамлекеттик тил боюнча адис', 'Адабий кеңешчи']
  },
  {
    id: 'spec-eng-lang',
    code: '531200',
    name: {
      ky: 'Чет тили (Англис тили) жана маданияттар аралык байланыш',
      ru: 'Иностранный язык (Английский) и межкультурная коммуникация',
      en: 'Foreign Language (English) & Cross-Cultural Studies'
    },
    facultyId: 'pedagogy',
    degree: 'bachelor',
    duration: '4 жыл',
    budgetSeats: 15,
    contractSeats: 45,
    contractFeeSom: 33000,
    minOrtScore: 120,
    format: 'Күндүзгү',
    description: {
      ky: 'Англис тилин эл аралык деңгээлде өздөштүрүү, тил үйрөтүүнүн интерактивдүү методологиясы жана синхрондук котормо чеберчилиги.',
      ru: 'Глубокое изучение английского языка, международная коммуникация и методика преподавания.',
      en: 'Mastery of English, international communication, and communicative teaching methodologies.'
    },
    careers: ['Англис тили мугалими', 'Эл аралык долбоорлордун координатору', 'Котормочу-референт', 'Туризм жана дипломатия адиси']
  },
  {
    id: 'spec-primary-edu',
    code: '550700',
    name: {
      ky: 'Педагогика жана башталгыч билим берүүнүн усулу',
      ru: 'Педагогика и методика начального образования',
      en: 'Pedagogy & Primary Education Methodology'
    },
    facultyId: 'pedagogy',
    degree: 'bachelor',
    duration: '4 жыл',
    budgetSeats: 20,
    contractSeats: 35,
    contractFeeSom: 29000,
    minOrtScore: 110,
    format: 'Күндүзгү / Сырттан окуу',
    description: {
      ky: 'Башталгыч класстын окуучуларын ар тараптуу өнүктүрүүгө, инклюзивдик билим берүүгө жана STEAM ыкмаларына багытталган адистик.',
      ru: 'Подготовка учителей начальной школы с акцентом на современные инклюзивные методики и STEAM.',
      en: 'Preparing primary educators with emphasis on modern developmental child psychology and STEAM.'
    },
    careers: ['Башталгыч класс мугалими', 'Мектепке чейинки билим берүү координатору', 'Билим берүү борборунун директору', 'Репетитор']
  },
  {
    id: 'spec-econ',
    code: '580100',
    name: {
      ky: 'Экономика, бухгалтердик эсеп жана аудит',
      ru: 'Экономика, бухгалтерский учет и аудит',
      en: 'Economics, Accounting & Auditing'
    },
    facultyId: 'economics-law',
    degree: 'bachelor',
    duration: '4 жыл',
    budgetSeats: 10,
    contractSeats: 40,
    contractFeeSom: 32000,
    minOrtScore: 110,
    format: 'Күндүзгү / Сырттан окуу',
    description: {
      ky: '1С: Бухгалтерия, салык салуу, каржылык аналитика жана эл аралык каржылык отчеттуулук стандарттарын (МСФО) терең үйрөтүү.',
      ru: 'Обучение 1С бухгалтерии, налоговому учету, финансовому анализу и международным стандартам аудита.',
      en: 'Accounting standards, tax compliance, financial analytics, and auditing frameworks.'
    },
    careers: ['Башкы бухгалтер', 'Аудитор жана салык инспектору', 'Банктын насыялык адиси', 'Финансылык директор']
  },
  {
    id: 'spec-law',
    code: '530500',
    name: {
      ky: 'Юриспруденция (Мамлекеттик жана жарандык укук)',
      ru: 'Юриспруденция (Государственное и гражданское право)',
      en: 'Jurisprudence (Public & Civil Law)'
    },
    facultyId: 'economics-law',
    degree: 'bachelor',
    duration: '4 жыл',
    budgetSeats: 10,
    contractSeats: 50,
    contractFeeSom: 36000,
    minOrtScore: 120,
    format: 'Күндүзгү / Сырттан окуу',
    description: {
      ky: 'Кыргыз Республикасынын мыйзам чыгаруу базасы, соттук өндүрүш, нотариат жана укук коргоо органдарында иш алып барууга багытталган фундаменталдык юридикалык билим.',
      ru: 'Фундаментальная подготовка специалистов для правоохранительных органов, судов, юстиции и адвокатуры.',
      en: 'Fundamental legal education preparing specialists for civil courts, justice ministries, and corporate council.'
    },
    careers: ['Юрист-консультант', 'Сот адиси жана катчысы', 'Адвокат / Нотариус жардамчысы', 'Мамлекеттик орган кызматкери']
  },
  {
    id: 'col-it',
    code: '230109',
    name: {
      ky: 'Эсептөө техникасын жана автоматташтырылган системаларды программалык камсыздоо',
      ru: 'Программное обеспечение вычислительной техники и автоматизированных систем',
      en: 'Software of Computing & Automated Systems (College)'
    },
    facultyId: 'college',
    degree: 'college',
    duration: '2 жыл 10 ай (9-кл.) / 1 жыл 10 ай (11-кл.)',
    budgetSeats: 15,
    contractSeats: 35,
    contractFeeSom: 25000,
    minOrtScore: 0,
    format: 'Күндүзгү (Аттестаттын конкурсу менен)',
    description: {
      ky: 'Орто кесиптик деңгээлде IT адиси болуу. Компьютердик тармактарды тейлөө, веб-сайттарды түзүү жана программалоо негиздери.',
      ru: 'Быстрый старт в IT после 9 и 11 классов: разработка сайтов, настройка компьютеров и сетей.',
      en: 'Practical IT vocational program with immediate technician qualification.'
    },
    careers: ['Junior Web Developer', 'Компьютердик техник', 'Системалык оператор', 'КУУнун 2-курсуна өтүүчү']
  },
  {
    id: 'col-primary',
    code: '050709',
    name: {
      ky: 'Башталгыч класстарда окутуу (Колледж)',
      ru: 'Преподавание в начальных классах (Колледж)',
      en: 'Primary School Teaching (College)'
    },
    facultyId: 'college',
    degree: 'college',
    duration: '2 жыл 10 ай (9-кл.) / 1 жыл 10 ай (11-кл.)',
    budgetSeats: 20,
    contractSeats: 30,
    contractFeeSom: 23000,
    minOrtScore: 0,
    format: 'Күндүзгү',
    description: {
      ky: 'Талас аймагынын мектептери үчүн дипломдуу башталгыч класс мугалимдерин даярдоо. Жогорку окуу жайга сынаксыз өтүү артыкчылыгы.',
      ru: 'Подготовка дипломированных педагогов начальных классов с правом дальнейшего ускоренного бакалавриата.',
      en: 'Accredited diploma in primary teaching with advanced standing for degree studies.'
    },
    careers: ['Башталгыч класс мугалими', 'Тарбиячы', 'Өнүктүрүү борборунун педагогу']
  }
];

export const NEWS_ITEMS: NewsItem[] = [
  {
    id: 'news-1',
    title: {
      ky: '«Абитуриент-2026»: Талас аймактык институтунда Ачык эшиктер күнү өттү',
      ru: '«Абитуриент-2026»: В Таласском институте прошел День открытых дверей',
      en: '“Applicant-2026”: Open Doors Day Held at Talas Regional Institute'
    },
    date: '24-Март, 2026',
    category: 'academic',
    important: true,
    summary: {
      ky: 'Талас облусунун мектеп бүтүрүүчүлөрү заманбап лабораториялар менен таанышып, ЖРТга даярдануу боюнча кеңештерди алышты.',
      ru: 'Выпускники школ Таласской области ознакомились с аудиториями и получили консультации по ОРТ.',
      en: 'School graduates from Talas region explored laboratory facilities and received test preparation guidance.'
    },
    content: {
      ky: 'Иш-чарага 400дөн ашуун мектеп бүтүрүүчүлөрү, мугалимдер жана ата-энелер катышты. Институттун директору профессор А.С. Керимкулов бүтүрүүчүлөрдү куттуктап, КУУнун дипломдук бедели, бюджеттик орундар жана санариптик мүмкүнчүлүктөр тууралуу кенен маалымат берди. ЖРТ тесттерин тапшыруу боюнча акысыз мастер-класстар уюштурулду.',
      ru: 'В мероприятии приняли участие более 400 выпускников, учителей и родителей. Директор института профессор А.С. Керимкулов рассказал о преимуществах диплома КНУ и бюджетных квотах.',
      en: 'Over 400 graduates, teachers, and parents attended. Director Prof. A. Kerimkulov highlighted KNU degree prestige and budget quotas.'
    },
    imageUrl: IMAGES.hero
  },
  {
    id: 'news-2',
    title: {
      ky: 'Институтта жаңы заманбап жасалма интеллект жана IT лабораториясы ачылды',
      ru: 'В институте открылась новая передовая лаборатория искусственного интеллекта и IT',
      en: 'New State-of-the-Art AI and Software Engineering Lab Opened'
    },
    date: '18-Март, 2026',
    category: 'science',
    important: true,
    summary: {
      ky: '30 жаңы кубаттуу компьютер, интерактивдүү сенсордук панелдер жана жогорку ылдамдыктагы була-оптикалык интернет орнотулду.',
      ru: 'Установлены 30 современных мощных рабочих станций и интерактивные сенсорные панели для студентов.',
      en: 'Equipped with 30 high-performance workstations and touchscreens for programming and research.'
    },
    content: {
      ky: 'Жусуп Баласагын атындагы Кыргыз улуттук университетинин колдоосу менен Талас аймактык институтунун базасында жаңы IT-хаб ишке кирди. Студенттер бул жерде веб-программалоо, Python, маалыматтар аналитикасы жана санариптик долбоорлорду иштеп чыгышат.',
      ru: 'При поддержке ректората КНУ в Таласском институте запущен новый IT-хаб для обучения современным стекам разработки.',
      en: 'Backed by KNU rectorate, the new tech hub facilitates project-based learning in web engineering and machine learning.'
    },
    imageUrl: IMAGES.computerLab
  },
  {
    id: 'news-3',
    title: {
      ky: '«Манас таануу жана улуттук дөөлөттөр» аттуу аймактык илимий-практикалык конференция',
      ru: 'Региональная научно-практическая конференция «Манасоведение и национальное достояние»',
      en: 'Regional Scientific Conference on Epic Manas Heritage and Cultural Values'
    },
    date: '10-Март, 2026',
    category: 'science',
    summary: {
      ky: 'Окумуштуулар жана жаш изилдөөчүлөр Манас эпосунун педагогикалык жана тарыхый маанисин талкуулашты.',
      ru: 'Ученые и молодые исследователи обсудили педагогическое и историческое значение эпоса Манас.',
      en: 'Researchers discussed the pedagogical, historical, and philosophical dimensions of the Epic of Manas.'
    },
    content: {
      ky: 'Конференциянын алкагында студенттик илимий макалалардын жыйнагы жарык көрдү. Мыкты баяндама жасаган 5 студент институттун ардак грамоталары жана стипендиялык сыйлыктары менен сыйланды.',
      ru: 'По итогам конференции издан сборник студенческих статей. Победители отмечены почетными грамотами.',
      en: 'Conference proceedings published student papers, and top presentations received honors and stipends.'
    },
    imageUrl: IMAGES.library
  },
  {
    id: 'news-4',
    title: {
      ky: 'ТАКТИнин студенттери республикалык олимпиадада байгелүү 1-орундарды багындырышты',
      ru: 'Студенты ТАКТИ завоевали призовые места на республиканской предметной олимпиаде',
      en: 'TRMI Students Win Top Honors at the National Collegiate Olympiad'
    },
    date: '02-Март, 2026',
    category: 'student',
    summary: {
      ky: 'Информатика жана кыргыз филологиясы боюнча катышкан студенттерибиз Бишкекте өткөн финалда мыкты көрсөткүч көрсөтүштү.',
      ru: 'Студенты отделений информатики и кыргызской филологии показали наивысшие результаты в финале в Бишкеке.',
      en: 'Students in computer science and philology achieved outstanding results at the national finals in Bishkek.'
    },
    content: {
      ky: 'Институттун жетекчилиги жана жалпы жамааты жеңүүчүлөрдү жана алардын илимий жетекчилерин чын жүрөктөн куттуктайт. Бул жетишкендик — Талас аймактык институтунун билим берүү сапатынын айкын далили.',
      ru: 'Руководство института поздравляет победителей и научных руководителей с впечатляющим триумфом.',
      en: 'Leadership congratulates the student champions and their faculty advisors for this outstanding achievement.'
    },
    imageUrl: IMAGES.graduation
  }
];

export const SCHEDULE_DATA: Record<string, Record<string, ScheduleItem[]>> = {
  'IT-22': {
    'Дүйшөмбү': [
      { time: '08:30 - 09:50', subject: 'Веб-программалоо (React & TypeScript)', teacher: 'Доц. Жумабеков Т.С.', room: 'Лаб 102', type: 'Лаборатория' },
      { time: '10:05 - 11:25', subject: 'Маалыматтар базасын долбоорлоо (PostgreSQL)', teacher: 'Ага окут. Кемелова А.Б.', room: 'Лаб 104', type: 'Практика' },
      { time: '11:40 - 13:00', subject: 'Философия жана кесиптик этика', teacher: 'Проф. Мамбеталиев Э.К.', room: 'Ауд 302', type: 'Лекция' }
    ],
    'Шейшемби': [
      { time: '08:30 - 09:50', subject: 'Компьютердик тармактардын архитектурасы', teacher: 'Доц. Жумабеков Т.С.', room: 'Ауд 205', type: 'Лекция' },
      { time: '10:05 - 11:25', subject: 'Компьютердик тармактар (Практикум)', teacher: 'Окут. Токтогулов Н.Ж.', room: 'Лаб 102', type: 'Лаборатория' },
      { time: '11:40 - 13:00', subject: 'Кесиптик англис тили (Tech English)', teacher: 'Доц. Осмонова Н.К.', room: 'Ауд 208', type: 'Практика' }
    ],
    'Шаршемби': [
      { time: '08:30 - 09:50', subject: 'Алгоритмдер жана маалыматтар түзүмү', teacher: 'Ага окут. Кемелова А.Б.', room: 'Ауд 301', type: 'Лекция' },
      { time: '10:05 - 11:25', subject: 'Алгоритмдер (Python)', teacher: 'Окут. Токтогулов Н.Ж.', room: 'Лаб 104', type: 'Лаборатория' }
    ],
    'Бейшемби': [
      { time: '08:30 - 09:50', subject: 'Жасалма интеллект жана Machine Learning негиздери', teacher: 'Доц. Жумабеков Т.С.', room: 'Лаб 102', type: 'Практика' },
      { time: '10:05 - 11:25', subject: 'Кыргызстандын тарыхы', teacher: 'Доц. Садыков Б.А.', room: 'Чоң лекция залы', type: 'Лекция' }
    ],
    'Жума': [
      { time: '08:30 - 09:50', subject: 'Киберкоопсуздук жана криптография', teacher: 'Окут. Токтогулов Н.Ж.', room: 'Ауд 204', type: 'Лекция' },
      { time: '10:05 - 11:25', subject: 'Студенттик илимий семинар / Долбоордук иш', teacher: 'Проф. Керимкулов А.С.', room: 'Конференц-зал', type: 'Практика' }
    ]
  },
  'PED-23': {
    'Дүйшөмбү': [
      { time: '08:30 - 09:50', subject: 'Жалпы педагогика жана жаш өзгөчөлүк психологиясы', teacher: 'Проф. Керимкулов А.С.', room: 'Ауд 301', type: 'Лекция' },
      { time: '10:05 - 11:25', subject: 'Кыргыз тилинин практикалык курсу', teacher: 'Доц. Осмонова Н.К.', room: 'Ауд 202', type: 'Практика' },
      { time: '11:40 - 13:00', subject: 'Башталгыч билим берүүнүн заманбап усулдары', teacher: 'Ага окут. Асанкулова Г.Т.', room: 'Ауд 204', type: 'Практика' }
    ],
    'Шейшемби': [
      { time: '08:30 - 09:50', subject: 'Манас таануу жана кыргыз элинин фольклору', teacher: 'Доц. Садыков Б.А.', room: 'Ауд 302', type: 'Лекция' },
      { time: '10:05 - 11:25', subject: 'Билим берүүдөгү санариптик технологиялар', teacher: 'Окут. Токтогулов Н.Ж.', room: 'Лаб 104', type: 'Лаборатория' }
    ],
    'Шаршемби': [
      { time: '08:30 - 09:50', subject: 'Балдар адабияты жана көркөм окуу', teacher: 'Доц. Осмонова Н.К.', room: 'Ауд 206', type: 'Практика' },
      { time: '10:05 - 11:25', subject: 'Чет тили (Англис тили)', teacher: 'Окут. Исмаилова А.К.', room: 'Лингафон кабинети', type: 'Практика' }
    ],
    'Бейшемби': [
      { time: '08:30 - 09:50', subject: 'Инклюзивдик билим берүү негиздери', teacher: 'Проф. Керимкулов А.С.', room: 'Ауд 301', type: 'Лекция' },
      { time: '10:05 - 11:25', subject: 'Педагогикалык чеберчилик тренинги', teacher: 'Ага окут. Асанкулова Г.Т.', room: 'Ауд 202', type: 'Практика' }
    ],
    'Жума': [
      { time: '08:30 - 09:50', subject: 'Мектепте тарбиялык иштерди уюштуруу', teacher: 'Мамбеталиев Э.К.', room: 'Ауд 208', type: 'Практика' },
      { time: '10:05 - 11:25', subject: 'Дене тарбия жана сергек жашоо', teacher: 'Окут. Батырбеков С.', room: 'Спорт комплекс', type: 'Практика' }
    ]
  },
  'LAW-21': {
    'Дүйшөмбү': [
      { time: '08:30 - 09:50', subject: 'Жарандык укук жана процесс', teacher: 'Доц. Базаркулов Б.М.', room: 'Ауд 401', type: 'Лекция' },
      { time: '10:05 - 11:25', subject: 'Жазык укугу (КР Кылмыш-жаза кодекси)', teacher: 'Ага окут. Мусаев К.Р.', room: 'Ауд 402', type: 'Практика' }
    ],
    'Шейшемби': [
      { time: '08:30 - 09:50', subject: 'Мамлекет жана укук теориясы', teacher: 'Доц. Базаркулов Б.М.', room: 'Ауд 401', type: 'Лекция' },
      { time: '10:05 - 11:25', subject: 'Соттук өндүрүш жана моделдештирилген сот', teacher: 'Ага окут. Мусаев К.Р.', room: 'Сот залы (Модель)', type: 'Практика' }
    ],
    'Шаршемби': [
      { time: '08:30 - 09:50', subject: 'Эмгек укугу жана социалдык камсыздоо', teacher: 'Окут. Касымова Д.С.', room: 'Ауд 403', type: 'Лекция' },
      { time: '10:05 - 11:25', subject: 'Юридикалык документтерди түзүү', teacher: 'Окут. Касымова Д.С.', room: 'Ауд 403', type: 'Практика' }
    ],
    'Бейшемби': [
      { time: '08:30 - 09:50', subject: 'Криминалистика жана соттук экспертиза', teacher: 'Ага окут. Мусаев К.Р.', room: 'Криминалистика лаб', type: 'Лаборатория' },
      { time: '10:05 - 11:25', subject: 'Эл аралык укук', teacher: 'Доц. Базаркулов Б.М.', room: 'Ауд 401', type: 'Лекция' }
    ],
    'Жума': [
      { time: '08:30 - 09:50', subject: 'Нотариат жана адвокатура ишмердүүлүгү', teacher: 'Окут. Касымова Д.С.', room: 'Ауд 402', type: 'Практика' },
      { time: '10:05 - 11:25', subject: 'Укуктук клиника: Жарандарга консультация берүү', teacher: 'Мусаев К.Р.', room: 'Юридикалык клиника', type: 'Практика' }
    ]
  }
};

export const DIGITAL_LIBRARY_BOOKS: LibraryResource[] = [
  {
    id: 'b-1',
    title: 'Кыргыз тили жана кеп маданияты: ЖОЖдор үчүн окуу куралы',
    author: 'Проф. А.С. Керимкулов, Доц. Н.К. Осмонова',
    year: 2025,
    category: 'Филология жана тилдер',
    pages: 324,
    fileSize: '4.8 MB',
    format: 'PDF'
  },
  {
    id: 'b-2',
    title: 'Веб-программалоо жана маалыматтар базасын башкаруу системалары',
    author: 'Доц. Т.С. Жумабеков',
    year: 2026,
    category: 'Информатика жана IT',
    pages: 280,
    fileSize: '6.2 MB',
    format: 'PDF'
  },
  {
    id: 'b-3',
    title: 'Башталгыч класстын окуучуларын тарбиялоодогу инновациялык ыкмалар',
    author: 'Г.Т. Асанкулова',
    year: 2024,
    category: 'Педагогика жана усул',
    pages: 216,
    fileSize: '3.4 MB',
    format: 'PDF'
  },
  {
    id: 'b-4',
    title: 'Кыргыз Республикасынын жарандык укугу: Практикум жана кейстер',
    author: 'Проф. Б.М. Базаркулов',
    year: 2025,
    category: 'Юриспруденция',
    pages: 390,
    fileSize: '7.1 MB',
    format: 'PDF'
  },
  {
    id: 'b-5',
    title: 'Манас таануу: Талас салты жана тарыхый булактар',
    author: 'Доц. Б.А. Садыков',
    year: 2024,
    category: 'Тарых жана Манас таануу',
    pages: 310,
    fileSize: '5.5 MB',
    format: 'PDF'
  },
  {
    id: 'b-6',
    title: 'Аймактык экономика жана чакан бизнести башкаруу',
    author: 'к.э.н. Т.С. Жумабеков, Проф. Б.М. Базаркулов',
    year: 2025,
    category: 'Экономика жана каржы',
    pages: 260,
    fileSize: '4.1 MB',
    format: 'PDF'
  }
];

export const FAQS = [
  {
    q: {
      ky: 'ТАКТИге тапшыруу үчүн ЖРТнын босого баллы канча болушу керек?',
      ru: 'Каков пороговый балл ОРТ для поступления в ТАКТИ?',
      en: 'What is the minimum ORT score required for admission?'
    },
    a: {
      ky: 'Бакалавриат багыттары үчүн негизги тест боюнча босого балл 110 баллдан жогору болушу шарт (педагогикалык жана IT адистиктеринде кошумча предметтер талап кылынышы мүмкүн). Ал эми колледжге 9- жана 11-класстын базасында ЖРТсыз, аттестаттын орточо баллы менен кабыл алынат.',
      ru: 'Для бакалавриата пороговый балл основного теста ОРТ составляет от 110 баллов. В колледж на базе 9 и 11 классов прием осуществляется без ОРТ, по конкурсу аттестатов.',
      en: 'For bachelor degree programs, min score is 110+ on the main test. For the vocational college, admission is based on school diploma grades without ORT.'
    }
  },
  {
    q: {
      ky: 'Бүтүрүүчүлөргө кандай диплом берилет?',
      ru: 'Какой диплом выдается выпускникам?',
      en: 'What diploma do graduates receive?'
    },
    a: {
      ky: 'Бардык бүтүрүүчүлөргө Жусуп Баласагын атындагы Кыргыз улуттук университетинин (КУУ) мамлекеттик үлгүдөгү расмий диплому ыйгарылат. Диплом эл аралык деңгээлде таанылат жана бүткүл дүйнөдө легалдаштырылат.',
      ru: 'Выпускникам выдается государственный диплом Кыргызского национального университета им. Ж. Баласагына (КНУ), имеющий международное признание.',
      en: 'Graduates receive the state diploma of Jusup Balasagyn Kyrgyz National University (KNU), recognized internationally.'
    }
  },
  {
    q: {
      ky: 'Алыскы райондордон келген студенттерге жатакана берилеби?',
      ru: 'Предоставляется ли общежитие иногородним студентам?',
      en: 'Is dormitory accommodation provided for out-of-town students?'
    },
    a: {
      ky: 'Ооба! Институттун карамагында 250 орундуу, жакында капиталдык оңдоодон өткөн студенттик жатакана бар. Жатаканада акысыз Wi-Fi, китепканалык окуу залы, ашкана, кир жуучу жай жана 24/7 коопсуздук кызматы каралган.',
      ru: 'Да, институт располагает комфортабельным общежитием на 250 мест с бесплатным Wi-Fi, кухнями, прачечной и охраной 24/7.',
      en: 'Yes, the institute has a newly renovated 250-bed student residence equipped with high-speed Wi-Fi, study halls, and 24/7 security.'
    }
  },
  {
    q: {
      ky: 'Келишим баасына кандай жеңилдиктер (скидкалар) каралган?',
      ru: 'Какие льготы и скидки предусмотрены по оплате контракта?',
      en: 'What tuition discounts and social benefits are available?'
    },
    a: {
      ky: 'Институтта жеңилдиктер системасы иштейт: тоголок жетимдерге жана I-II топтогу майыптарга — 50-100% чейин жеңилдик; бир үй-бүлөдөн эки же андан көп студент окуса — 15% жеңилдик; окуудагы жана коомдук иштердеги өзгөчө ийгиликтер үчүн КУУнун ректордук стипендиясы каралган.',
      ru: 'Предусмотрены льготы до 100% сиротам, 15% семьям с 2+ студентами, а также ректорские стипендии отличникам.',
      en: 'Tuition discounts up to 100% for orphans and special needs students, 15% sibling discount, and rector merit scholarships.'
    }
  },
  {
    q: {
      ky: 'Колледжди аяктагандан кийин КУУнун жогорку курсуна өтүүгө болобу?',
      ru: 'Можно ли после колледжа поступить сразу на старшие курсы КНУ?',
      en: 'Can college graduates transfer directly to advanced university courses?'
    },
    a: {
      ky: 'Ооба, колледждин бүтүрүүчүлөрү өз кесиби боюнча тиешелүү багыттарга ЖРТсыз, ички аңгемелешүүнүн негизинде КУУнун 2-3-курсуна түз которулуп, кыскартылган мөөнөттө жогорку билим алышат.',
      ru: 'Да, выпускники колледжа ТАКТИ имеют право поступать на 2-3 курс бакалавриата КНУ по ускоренной программе без сдачи ОРТ.',
      en: 'Yes, TRMI college graduates can matriculate directly into 2nd or 3rd year bachelor degree programs without ORT testing.'
    }
  }
];

export const STATS = [
  { value: '30+', labelKy: 'Жылдык академиялык тажрыйба', labelRu: 'Лет академического опыта', labelEn: 'Years of academic excellence' },
  { value: '2,800+', labelKy: 'Студент жана угуучу', labelRu: 'Студентов и слушателей', labelEn: 'Active students & scholars' },
  { value: '18+', labelKy: 'Заманбап багыттар жана адистиктер', labelRu: 'Направлений и специальностей', labelEn: 'Academic majors & degrees' },
  { value: '120+', labelKy: 'Окутуучулар жана профессорлор', labelRu: 'Преподавателей и профессоров', labelEn: 'Distinguished faculty members' },
  { value: '94%', labelKy: 'Бүтүрүүчүлөрдүн ишке орношуусу', labelRu: 'Трудоустройство выпускников', labelEn: 'Graduate employment rate' }
];
