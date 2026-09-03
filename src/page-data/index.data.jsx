import hero1cImage from '@/assets/images/hero-1c.webp'

import car1 from '@/assets/images/installation-examples/car1.webp'
import car2 from '@/assets/images/installation-examples/car2.webp'
import car3 from '@/assets/images/installation-examples/car3.webp'
import car4 from '@/assets/images/installation-examples/car4.webp'
import truck1 from '@/assets/images/installation-examples/truck1.webp'
import truck2 from '@/assets/images/installation-examples/truck2.jpg'
import truck3 from '@/assets/images/installation-examples/truck3.webp'
import truck4 from '@/assets/images/installation-examples/truck4.webp'
import bus1 from '@/assets/images/installation-examples/bus1.webp'
import bus2 from '@/assets/images/installation-examples/bus2.webp'
import bus3 from '@/assets/images/installation-examples/bus3.webp'
import bus4 from '@/assets/images/installation-examples/bus4.webp'
import spec1 from '@/assets/images/installation-examples/spec1.webp'
import spec2 from '@/assets/images/installation-examples/spec2.jpg'
import spec3 from '@/assets/images/installation-examples/spec3.jpg'
import spec4 from '@/assets/images/installation-examples/spec4.jpg'
import komm1 from '@/assets/images/installation-examples/komm1.webp'
import komm2 from '@/assets/images/installation-examples/komm2.webp'
import komm3 from '@/assets/images/installation-examples/komm3.webp'
import komm4 from '@/assets/images/installation-examples/komm4.webp'
import taxi1 from '@/assets/images/installation-examples/taxi1.webp'
import taxi2 from '@/assets/images/installation-examples/taxi2.jpg'
import taxi3 from '@/assets/images/installation-examples/taxi3.jpg'
import taxi4 from '@/assets/images/installation-examples/taxi4.jpg'
import onlineMonitoring from '@/assets/images/possibilities/online-monitoring.webp'
import geozon from '@/assets/images/possibilities/geozon.webp'
import drivers from '@/assets/images/possibilities/possibilities-drivers.webp'
import fuelControl from '@/assets/images/possibilities/fuel-control.webp'
import reports from '@/assets/images/possibilities/reports.webp'
import notifications from '@/assets/images/possibilities/notifications.webp'
import downtimeImage from '@/assets/images/main-problems/downtime.webp'
import driversImage from '@/assets/images/main-problems/problems-drivers.webp'
import fuelImage from '@/assets/images/main-problems/problems-fuel.webp'
import routesImage from '@/assets/images/main-problems/problems-routes.webp'
import phone from '@/assets/images/main-problems/problems-phone.webp'

export const heroContent = {
  title: (
    <>
      Мониторинг транспорта ГЛОНАСС / GPS
      <span className="hero__accent"> под ключ</span>
    </>
  ),
  description: (
    <>
      Производим монтаж ГЛОНАСС трекеров и маяков, датчиков контроля ГСМ и
      температуры по <span data-js-utm-replace-text="">всей России</span>
    </>
  ),
  items: [
    'Отслеживание техники 24/7',
    'Просмотр маршрутов, стоянок и отклонений',
    'Управление расходом и сливами',
    'Отчёты, уведомления и аналитика по автопарку',
  ],
  image: {
    src: '/src/assets/images/car.webp',
    alt: 'Мониторинг транспорта',
    width: 704,
    height: 469,
  },
  topIcons: [
    {
      iconId: 'routes',
      className: 'hero__icons-button--top hero__icons-button--top-1',
    },
    {
      iconId: 'graph',
      className: 'hero__icons-button--top hero__icons-button--top-2',
    },
    {
      iconId: 'settings',
      className: 'hero__icons-button--top hero__icons-button--top-3',
    },
  ],
}

export const heroIntegrations = [
  {
    variant: 'rnis',
    iconId: 'rnis',
  },
  {
    variant: 'advantum',
    iconId: 'advantum',
  },
  {
    variant: '1C',
    imageSrc: hero1cImage,
    imageAlt: 'Интеграция 1С',
    imageWidth: 74,
    imageHeight: 50,
  },
]

export const installationExamples = [
  {
    label: 'Легковой',
    id: 'tab-one',
    contentId: 'tab-content-one',
    checked: true,

    gallery: [
      {
        image: car4,
        alt: 'Мониторинг транспорта на Geely Monjaro',
        variant: 'large',
        imageWidth: 650,
        imageHeight: 363,
      },
      {
        image: car2,
        alt: 'Монтаж трекера УМКА 312v2.R2 в Geely Monjaro',
      },
      {
        image: car3,
        alt: 'Подключение оборудования мониторинга в легковом автомобиле',
      },
      {
        image: car1,
        alt: 'Пример установленного ГЛОНАСС оборудования на Geely Monjaro',
      },
    ],

    model: 'Geely Monjaro',
    tasksItems: [
      'Мониторинг местоположения',
      'Контроль пробега и скорости',
      'Отслеживание состояния зажигания',
    ],
    equipment: ['Датчик УМКА 312v2.R2'],
    time: '45 минут',
    description:
      'Был осуществлен выезд к клиенту и произведен монтаж мониторинга для базового контроля автомобиля',
  },
  {
    label: 'Грузовой',
    id: 'tab-two',
    contentId: 'tab-content-two',

    gallery: [
      {
        image: truck1,
        alt: 'Мониторинг транспорта на КАМАЗ КМУ бортовой',
        variant: 'large',
        imageWidth: 650,
        imageHeight: 363,
      },
      {
        image: truck2,
        alt: 'Монтаж трекера УМКА 312v2.R2 в КАМАЗ КМУ бортовой',
      },
      {
        image: truck3,
        alt: 'Подключение оборудования мониторинга топлива в грузовом автомобиле',
      },
      {
        image: truck4,
        alt: 'Пример установленного датчика топлива на КАМАЗ КМУ бортовой',
      },
    ],

    model: 'КАМАЗ КМУ бортовой',
    tasksItems: [
      'Отслеживание местоположения',
      'Контроль топлива',
      'Отслеживание состояния зажигания',
    ],
    equipment: ['Датчик топлива ЭСКОРТ ТД-150', 'Датчик УМКА 315.R2'],
    time: '2 часа 40 минут',
    description:
      'Был осуществлен выезд к клиенту и произведен монтаж мониторинга с контролем ГСМ, также проведена тарировка датчиков',
  },
  {
    label: 'Спецтехника',
    id: 'tab-three',
    contentId: 'tab-content-three',

    gallery: [
      {
        image: spec1,
        alt: 'Мониторинг транспорта на John Deere 325j',
        variant: 'large',
        imageWidth: 650,
        imageHeight: 363,
      },
      {
        image: spec2,
        alt: 'Монтаж трекера УМКА 312v2.R2 в John Deere 325j',
      },
      {
        image: spec3,
        alt: 'Подключение оборудования мониторинга на спецтехнику',
      },
      {
        image: spec4,
        alt: 'Пример установленного датчика топлива на John Deere 325j',
      },
    ],

    model: 'John Deere 325j',
    tasksItems: [
      'Отслеживание местоположения',
      'Контроль топлива',
      'Отслеживание состояния зажигания',
    ],
    equipment: ['Датчик УМКА 312v2.R2', 'Датчик ЭСКОРТ ТД-150'],
    time: '2 часа 45 минут',
    description:
      'Был осуществлен выезд к клиенту и произведена установка ГЛОНАСС мониторинга с контролем топлива, также проведена тарировка датчиков',
  },
  {
    label: 'Такси',
    id: 'tab-four',
    contentId: 'tab-content-four',

    gallery: [
      {
        image: taxi1,
        alt: 'Мониторинг транспорта на Haval F7',
        variant: 'large',
        imageWidth: 650,
        imageHeight: 363,
      },
      {
        image: taxi2,
        alt: 'Монтаж трекера УМКА 312v2.R2 в Haval F7',
      },
      {
        image: taxi3,
        alt: 'Подключение оборудования мониторинга в автомобиле такси',
      },
      {
        image: taxi4,
        alt: 'Пример установленного реле блокировки двигателя на Haval F7',
      },
    ],

    model: 'Haval F7',
    tasksItems: [
      'Отслеживание местоположения',
      'Блокировка двигателя',
      'Отслеживание состояния зажигания',
    ],
    equipment: ['Датчик УМКА 312v2.R2', 'Реле блокировки двигателя'],
    time: '1 час',
    description:
      'Был осуществлен выезд к клиенту и произведен монтаж ГЛОНАСС мониторинга с возможностью удаленно заблокировать двигатель',
  },
  {
    label: 'Коммерческий',
    id: 'tab-five',
    contentId: 'tab-content-five',

    gallery: [
      {
        image: komm1,
        alt: 'Мониторинг транспорта на Sollers Atlant',
        variant: 'large',
        imageWidth: 650,
        imageHeight: 363,
      },
      {
        image: komm2,
        alt: 'Монтаж трекера УМКА 312v2.R2 в Sollers Atlant',
      },
      {
        image: komm3,
        alt: 'Подключение оборудования мониторинга в коммерческом автомобиле',
      },
      {
        image: komm4,
        alt: 'Пример установленного датчика контроля температуры на Sollers Atlant',
      },
    ],

    model: 'Sollers Atlant',
    tasksItems: [
      'Отслеживание местоположения',
      'Контроль топлива',
      'Контроль температуры',
    ],
    equipment: ['Датчик УМКА 312v2.R2', 'Датчик температуры ЭСКОРТ TL-BLE'],
    time: '2 часа 45 минут',
    description:
      'Был осуществлен выезд к клиенту и произведена установка ГЛОНАСС мониторинга с контролем температуры в рефрижераторе',
  },
  {
    label: 'Пассажирский',
    id: 'tab-six',
    contentId: 'tab-content-six',

    gallery: [
      {
        image: bus1,
        alt: 'Мониторинг транспорта на Вектор Некст',
        variant: 'large',
        imageWidth: 650,
        imageHeight: 363,
      },
      {
        image: bus2,
        alt: 'Монтаж трекера Navtelecom СИГНАЛ S-4752 в Вектор Некст',
      },
      {
        image: bus3,
        alt: 'Подключение оборудования мониторинга на пассажирский транспорт',
      },
      {
        image: bus4,
        alt: 'Пример установленного датчика СИГНАЛ S-4752 на Вектор Некст',
      },
    ],

    model: 'Вектор Некст',
    tasksItems: [
      'Отслеживание местоположения',
      'Соответствие ПП №2216',
      'Отслеживание состояния зажигания',
    ],
    equipment: ['Трекер Navtelecom СИГНАЛ S-4752'],
    time: '50 минут',
    description:
      'Был осуществлен выезд к клиенту и произведена установка сертифицированного ГЛОНАСС трекера (АСН) для постановления №2216',
  },
]

export const faq = {
  title: 'Вопросы о мониторинге транспорта',
  items: [
    {
      question: 'Что показывает система мониторинга?',
      answer:
        'Система мониторинга транспорта позволяет в реальном времени видеть местоположение автомобилей, маршруты, стоянки и отклонения. При необходимости подключаем контроль топлива, температуры и другие датчики под задачи вашего автопарка.',
    },
    {
      question: 'Где можно смотреть транспорт и все параметры?',
      answer:
        'Следить за транспортом можно через браузер на компьютере и с телефона через мобильное приложение для Android и iOS. В системе доступны удобные карты: Яндекс.Карты, Google Maps, 2GIS, OpenStreetMap и Bing.',
    },
    {
      question: 'Для какой техники подходит GPS/ГЛОНАСС мониторинг?',
      answer:
        'Решение подходит для легкового, грузового, пассажирского и специального транспорта. Подбираем решения под конкретные задачи бизнеса: от базового контроля маршрутов до контроля температуры и дополнительных параметров.',
    },
    {
      question: 'Работаете ли вы по всей России?',
      answer:
        'Да, наши филиалы представлены по всей территории Российской Федерации: в Москве, Санкт-Петербурге, Краснодаре, Екатеринбурге, Челябинске, Тюмени, Нижнем Новгороде, Ростове-на-Дону, Казани, Уфе, Саратове, Самаре, Перми, Новосибирске, Волгограде и Воронеже. Также выезжаем в командировки в любой регион.',
    },
    {
      question: 'Нужно ли привозить транспорт на установку?',
      answer:
        'Для проведения монтажа оборудования никуда гнать технику не требуется. У нас выездные специалисты, которые работают на удобной вам территории.',
    },
    {
      question: 'Сколько времени занимает установка мониторинга транспорта?',
      answer:
        'Установка занимает от 40 минут до 6 часов, в зависимости от устанавливаемого оборудования. Например, базовая установка GPS-трекера занимает в среднем 40-50 минут, а установка датчиков уровня топлива на 2 бака с проведением тарировочных работ займет около 6 часов.',
    },
    {
      question: 'Как быстро можно подключить транспорт к системе?',
      answer:
        'Скорость согласования зависит от способа оплаты. Если вы юридическое лицо, мы работаем по 100% предоплате, после получения платежного поручения согласуем удобную дату и время, в среднем это 1-3 дня. Если вы физическое лицо, оплату можно провести по факту установки и проверки оборудования, поэтому выезд согласовывается сразу после обращения.',
    },
    {
      question: 'Есть ли техническая поддержка после установки?',
      answer:
        'Да, у нас есть отдел технической поддержки, который ежедневно с 8:00 до 21:00 помогает по вопросам оборудования и работы системы мониторинга.',
    },
    {
      question: 'Можно ли подключить уже установленное оборудование?',
      answer:
        'Если вы хотите перейти к нам на обслуживание, то есть два варианта: если ваше оборудование совместимо с нашей системой, мы без проблем приедем и перенастроим его. В случае несовместимости потребуется установить новое оборудование.',
    },
  ],
}

export const seoText = {
  title: 'Почему стоит использовать мониторинг транспорта',
  firstParagraph:
    'Мониторинг транспорта помогает видеть работу автопарка в реальном времени: где находится техника, по каким маршрутам она движется, сколько проходит за смену и как расходует топливо. GPS/ГЛОНАСС система собирает данные с трекеров и датчиков, а руководитель получает понятные отчеты без постоянных звонков водителям и ручных сверок.',
  secondParagraph:
    'Использовать мониторинг транспорта стоит компаниям, которым важны контроль рейсов, снижение расходов и прозрачная работа водителей. После установки оборудования проще находить отклонения от маршрута, сокращать лишний пробег, контролировать простои, заправки, сливы и планировать обслуживание техники по фактической нагрузке.',
  items: [
    {
      label: 'Снижение расходов.',
      description:
        'Мониторинг транспорта показывает лишний пробег, простои и перерасход топлива.',
    },
    {
      label: 'Контроль водителей.',
      description:
        'Вы видите скорость, маршруты, остановки и соблюдение графика в онлайн-системе.',
    },
    {
      label: 'Защита от сливов.',
      description:
        'Датчики фиксируют заправки, резкие изменения уровня топлива и подозрительные операции.',
    },
    {
      label: 'Быстрая реакция.',
      description:
        'Диспетчер понимает, где находится машина, и может оперативно скорректировать маршрут.',
    },
    {
      label: 'Понятные отчеты.',
      description:
        'Система формирует данные по пробегу, моточасам, стоянкам, рейсам и топливу.',
    },
    {
      label: 'Плановое обслуживание.',
      description:
        'Технику проще обслуживать по реальному пробегу и нагрузке, а не по примерным срокам.',
    },
  ],
}

export const tagTiles = [
  {
    label: 'Установка ГЛОНАСС',
    href: '/ustanovka-glonass',
  },
  {
    label: 'Контроль расхода топлива',
    href: '/kontrol-rashoda-topliva',
  },
  {
    label: 'Установка GPS трекера',
    href: '/ustanovka-gps-trekera',
  },
  {
    label: 'Адвантум',
    href: '/advantum',
  },
  {
    label: 'РНИС',
    href: '/rnis',
  },
  {
    label: 'Мониторинг грузового транспорта',
    href: '/resheniya/monitoring-gruzovogo-transporta',
  },
  {
    label: 'Мониторинг такси',
    href: '/resheniya/monitoring-taksi',
  },
  {
    label: 'Мониторинг спецтехники',
    href: '/resheniya/monitoring-spectehniki',
  },
]

export const mainPossibilities = {
  title: 'Возможности системы мониторинга транспорта',
  titleId: 'main-possibilities-title',
  items: [
    {
      title: 'Онлайн мониторинг транспорта',
      description:
        'Отслеживайте местоположение в режиме онлайн через систему контроля',
      image: onlineMonitoring,
    },
    {
      title: 'Геозоны и маршруты',
      description:
        'Настраивайте геозоны и контролируйте отклонения, остановки и маршруты',
      image: geozon,
    },
    {
      title: 'Контроль топлива и датчики',
      description: 'Получайте точные данные о расходе, заправках и отклонениях',
      image: fuelControl,
    },
    {
      title: 'Отслеживание водителей и стиль вождения',
      description: 'Анализируйте поведение водителей и контролируйте нарушения',
      image: drivers,
    },
    {
      title: 'Отчёты и аналитика',
      description: 'Формируйте отчёты по поездкам, пробегу и работе транспорта',
      image: reports,
    },
    {
      title: 'Уведомления и события',
      description: 'Получайте уведомления о ключевых событиях и отклонениях',
      image: notifications,
    },
  ],
}

export const mainProblems = {
  title: 'Какие задачи автопарка решает мониторинг транспорта',
  titleId: 'main-problems-title',
  items: [
    {
      title: 'Снижение затрат на\u00a0топливо',
      description:
        'Позволяет контролировать расход, заправки и отклонения, снижая перерасход и\u00a0сливы',
      image: fuelImage,
      imageWidth: 265,
      imageHeight: 177,
      variant: 'yellow',
    },
    {
      title: 'Контроль водителей и дисциплины',
      description:
        'Контролируйте скорость, нарушения, отклонения от маршрута и\u00a0дисциплину водителей',
      image: driversImage,
      imageWidth: 265,
      imageHeight: 177,
      variant: 'blue',
    },
    {
      title: 'Контроль маршрутов и\u00a0поездок',
      description:
        'Система мониторинга транспорта показывает маршруты, отклонения, остановки и\u00a0лишние рейсы',
      image: routesImage,
      imageWidth: 265,
      imageHeight: 177,
      variant: 'blue',
    },
    {
      type: 'action',
    },
    {
      title: 'Сокращение лишних рейсов и\u00a0простоев',
      description:
        'Выявляйте простои, нецелевые перемещения и\u00a0неэффективное использование техники',
      image: downtimeImage,
      imageWidth: 265,
      imageHeight: 177,
      variant: 'gray',
    },
  ],
  actionElements: {
    actionItems: [
      'С любого устройства',
      'В режиме реального времени',
      'Уведомления о событиях',
    ],
    actionTitle: 'Наблюдение 24/7',
    actionDescription:
      'Мониторинг транспорта обеспечивает круглосуточное наблюдение:',
    actionImage: phone,
  },
}
