import hero1cImage from '@/assets/images/hero-1c.webp'

import selection from '@/assets/images/structure/selection.webp'
import installation from '@/assets/images/structure/structure-installation.webp'
import settings from '@/assets/images/structure/settings.webp'
import launch from '@/assets/images/structure/launch.webp'

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

import logistic from '@/assets/images/industries/logistic.webp'
import agro from '@/assets/images/industries/agro.webp'
import building from '@/assets/images/industries/building.webp'
import company from '@/assets/images/industries/company.webp'
import delivery from '@/assets/images/industries/delivery.webp'
import taxi from '@/assets/images/industries/industries-taxi.webp'

export const heroContent = {
  title: (
    <>
      Установка ГЛОНАСС
      <span className="hero__accent"> под ключ</span>
    </>
  ),
  description: (
    <>
      Производим монтаж GPS/ГЛОНАСС трекеров и маяков, датчиков контроля топлива
      и температуры по <span data-js-utm-replace-text="">всей России</span>
    </>
  ),
  items: [
    'Контроль транспорта 24/7',
    'Мониторинг маршрутов, стоянок и отклонений',
    'Контроль расхода топлива и сливов',
    'Отчёты, уведомления и аналитика по автопарку',
  ],
  image: {
    src: '/src/assets/images/ustanovka-glonass-main.webp',
    alt: 'Установка ГЛОНАСС',
    width: 704,
    height: 469,
  },
  topIcons: [
    {
      iconId: 'routes',
      className:
        'hero__icons-button--top hero__icons-button--top-installation-1',
    },
    {
      iconId: 'graph',
      className:
        'hero__icons-button--top hero__icons-button--top-installation-2',
    },
    {
      iconId: 'settings',
      className:
        'hero__icons-button--top hero__icons-button--top-installation-3',
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

export const structures = {
  title: 'Что входит в установку ГЛОНАСС',
  titleId: 'structure-title',
  items: [
    {
      title: 'Подбор оборудования',
      description:
        'Подбираем трекер, датчики и модули под транспорт, задачи и особенности автопарка',
      image: selection,
      imageWidth: 291,
      imageHeight: 194,
      variant: 'yellow',
      number: '1',
    },
    {
      title: 'Монтаж на автомобиль',
      description:
        'Устанавливаем оборудование, подключаем питание и проверяем работу устройства',
      image: installation,
      imageWidth: 290,
      imageHeight: 182,
      variant: 'gray',
      number: '2',
    },
    {
      title: 'Настройка системы',
      description:
        'Добавляем транспорт в систему, настраиваем карту, события, уведомления и отчёты',
      image: settings,
      imageWidth: 375,
      imageHeight: 250,
      variant: 'gray',
      number: '3',
    },
    {
      title: 'Запуск и поддержка',
      description: 'Проверяем запуск, показываем систему и остаёмся на связи',
      image: launch,
      imageWidth: 381,
      imageHeight: 254,
      variant: 'blue',
      number: '4',
    },
  ],
  result: {
    description:
      'Вы получаете настроенную систему мониторинга транспорта под ключ',
    items: [
      'Контроль транспорта на карте в реальном времени',
      'Контроль топлива, заправок и сливов',
      'Отчёты по поездкам, пробегу, простоям и водителям',
    ],
  },
}

export const steps = {
  title: 'Установка ГЛОНАСС в 3 шага',
  titleId: 'steps-title',
  items: [
    {
      step: '1',
      title: 'Заявка',
      description:
        'Оставляете заявку — уточняем задачи и транспорт, фиксируем требования',
      time: '5 – 10 минут',
    },
    {
      step: '2',
      title: 'Подбор решения',
      description: 'Подбираем оборудование и конфигурацию под задачи и бюджет',
      time: 'В день обращения',
    },
    {
      step: '3',
      title: 'Выезд / установка',
      description:
        'Приезжаем, устанавливаем оборудование и настраиваем систему',
      time: '1 – 4 часа',
    },
  ],
  result: {
    title: 'Полный контроль',
    description: 'Вы получаете доступ к системе и полный контроль',
  },
}

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

    model: 'Автомобиль Geely Monjaro',
    tasksItems: [
      'Мониторинг местоположения автомобиля',
      'Контроль пробега и скорости',
      'Отслеживание состояния зажигания',
    ],
    equipment: ['GPS-трекер УМКА 312v2.R2'],
    time: '45 минут',
    description:
      'Был осуществлен выезд к клиенту и произведена установка ГЛОНАСС GPS мониторинга для базового контроля автомобиля',
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
      'Мониторинг местоположения',
      'Контроль топлива',
      'Отслеживание состояния зажигания',
    ],
    equipment: ['Датчик топлива ЭСКОРТ ТД-150', 'GPS-трекер УМКА 315.R2'],
    time: '2 часа 40 минут',
    description:
      'Был осуществлен выезд к клиенту и произведена установка ГЛОНАСС GPS системы мониторинга с контролем топлива, также проведена тарировка датчиков контроля ГСМ',
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
      'Мониторинг местоположения транспорта',
      'Контроль топлива',
      'Отслеживание состояния зажигания тс',
    ],
    equipment: ['GPS-трекер УМКА 315.R2', 'Датчик ЭСКОРТ ТД-150'],
    time: '2 часа 45 минут',
    description:
      'Был осуществлен выезд к месту, где находится транспорт и произведена установка ГЛОНАСС GPS мониторинга и контроль топлива, также проведена тарировка датчиков топлива',
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

    model: 'Автомобиль Haval F7',
    tasksItems: [
      'Мониторинг местоположения транспорта',
      'Блокировка двигателя',
      'Отслеживание состояния зажигания',
    ],
    equipment: ['GPS-трекер УМКА 315.R2', 'Реле блокировки двигателя'],
    time: '1 час',
    description:
      'Был осуществлен выезд к клиенту и произведена установка GPS/ГЛОНАСС мониторинга с возможностью удаленно заблокировать двигатель тс',
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

    model: 'Автомобиль Sollers Atlant',
    tasksItems: [
      'Мониторинг местоположения транспорта',
      'Контроль топлива',
      'Контроль температуры',
    ],
    equipment: ['GPS-трекер УМКА 315.R2', 'Датчик температуры ЭСКОРТ TL-BLE'],
    time: '2 часа 45 минут',
    description:
      'Был осуществлен выезд к клиенту и произведена установка GPS/ГЛОНАСС мониторинга с контролем температуры в рефрижераторе',
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
      'Мониторинг местоположения транспорта',
      'Соответствие ПП №2216',
      'тслеживание состояния зажигания автомобиля',
    ],
    equipment: ['GPS-трекер Navtelecom СИГНАЛ S-4752'],
    time: '50 минут',
    description:
      'Был осуществлен выезд к клиенту. На автомобиль произведена установка сертифицированного GPS/ГЛОНАСС трекера (АСН) для постановления №2216',
  },
]

export const industries = {
  title: 'Для каких сфер деятельности подходит установка ГЛОНАСС',
  titleId: 'industries-title',
  items: [
    {
      title: 'Логистика и грузоперевозки',
      image: logistic,
      imageWidth: 407,
      imageHeight: 289,
      variant: 'featured',
    },
    {
      title: 'Курьерские службы и доставка',
      image: delivery,
      imageWidth: 286,
      imageHeight: 171,
      variant: 'wide-top',
    },
    {
      title: 'Строительство и ЖКХ',
      image: building,
      imageWidth: 288,
      imageHeight: 171,
      variant: 'wide-middle',
    },
    {
      title: 'Такси и аренда',
      image: taxi,
      imageWidth: 240,
      imageHeight: 209,
      variant: 'compact-start',
    },
    {
      title: 'Служебные автомобили',
      image: company,
      imageWidth: 244,
      imageHeight: 209,
      variant: 'compact-center',
    },
    {
      title: 'Сельское хозяйство',
      image: agro,
      imageWidth: 244,
      imageHeight: 199,
      variant: 'compact-end',
    },
  ],
  actionItems: {
    actionTitle: 'Нет вашей сферы деятельности?',
    actionDescription:
      'Подберём решение под ваши задачи для максимальной эффективности',
  },
}

export const actionBanner = {
  title: 'Установим ГЛОНАСС в день обращения!',
  description:
    'Установим систему мониторинга за 1 день на вашей территории. Покажем, как отслеживать транспорт в реальном времени, контролировать топливо, маршруты и работу водителей. Настроим отчёты и уведомления под ваши задачи.',
}

export const faq = {
  title: 'Вопросы про установку ГЛОНАСС',
  items: [
    {
      question: 'Сколько времени занимает установка ГЛОНАСС?',
      answer:
        'Обычно установка одного терминала занимает от 1 до 2 часов. Время зависит от типа транспорта, места монтажа и необходимости подключения дополнительных датчиков.',
    },
    {
      question: 'Что входит в услугу установки ГЛОНАСС?',
      answer:
        'В услугу входит монтаж терминала, подключение к питанию, настройка оборудования, проверка связи со спутниками и тестирование передачи данных в систему мониторинга.',
    },
    {
      question: 'Вы выполняете установку с выездом?',
      answer:
        'Да, специалисты могут выехать на вашу территорию: в автопарк, гараж, сервисную зону или на стоянку техники. Это удобно, если нужно оборудовать несколько машин без их перегонки.',
    },
    {
      question: 'Нужно ли надолго снимать транспорт с работы?',
      answer:
        'Нет, при стандартной установке техника простаивает недолго. Чаще всего достаточно заранее согласовать удобное время и выделить 1-2 часа на один автомобиль.',
    },
    {
      question:
        'Можно ли установить ГЛОНАСС на грузовики, автобусы и спецтехнику?',
      answer:
        'Да, оборудование устанавливается на легковой и грузовой транспорт, автобусы, строительную, коммунальную, сельскохозяйственную и другую спецтехнику.',
    },
    {
      question: 'Можно ли демонтировать старое оборудование?',
      answer:
        'Да, при необходимости можно снять старый терминал или устаревшую систему мониторинга, а затем установить и настроить новое оборудование.',
    },
    {
      question: 'Можно ли перенести терминал ГЛОНАСС на другую машину?',
      answer:
        'Да, терминал можно демонтировать с одного транспортного средства и установить на другое. После переноса выполняется повторная настройка и проверка корректной передачи данных.',
    },
    {
      question: 'Можно ли вместе с ГЛОНАСС подключить датчик топлива?',
      answer:
        'Да, при установке можно дополнительно подключить датчик уровня топлива. Это позволит контролировать заправки, сливы и фактический расход топлива.',
    },
    {
      question: 'Даёте ли вы гарантию на установку?',
      answer:
        'Да, на монтажные работы предоставляется гарантия. Если после установки возникнут вопросы по подключению или работе оборудования, специалисты проверят систему и устранят неисправность.',
    },
    {
      question: 'Что будет доступно после установки ГЛОНАСС?',
      answer:
        'После установки вы сможете отслеживать местоположение транспорта, маршруты, скорость, остановки, пробег и другие параметры. Доступный набор данных зависит от оборудования и подключенных датчиков.',
    },
  ],
}

export const seoText = {
  title: 'Почему стоит установить ГЛОНАСС?',
  firstParagraph:
    'Установка ГЛОНАСС нужна компаниям, которые хотят видеть транспорт на карте, контролировать маршруты, пробег, скорость, остановки и работу водителей без ручных звонков и сверок. На автомобиль монтируется навигационный терминал, при необходимости подключаются датчики топлива, зажигания, температуры или другое оборудование, после чего данные передаются в онлайн-систему мониторинга.',
  secondParagraph:
    'Грамотный монтаж важен не меньше выбора трекера: оборудование должно стабильно получать координаты, корректно передавать события и не мешать штатной электрике автомобиля. После установки специалисты проверяют связь, настраивают отчеты и показывают, как использовать систему для ежедневного контроля автопарка, снижения лишнего пробега и планирования обслуживания техники.',
  items: [
    {
      label: 'Контроль транспорта.',
      description:
        'В системе видно местоположение машин, историю маршрутов, скорость, остановки и пробег.',
    },
    {
      label: 'Аккуратный монтаж.',
      description:
        'Терминал устанавливается с учетом модели автомобиля, условий эксплуатации и требований к надежности.',
    },
    {
      label: 'Быстрый запуск.',
      description:
        'После подключения оборудование проверяется, а транспорт добавляется в систему мониторинга.',
    },
    {
      label: 'Подключение датчиков.',
      description:
        'К ГЛОНАСС можно подключить контроль топлива, зажигания, температуры и другие параметры.',
    },
    {
      label: 'Понятные отчеты.',
      description:
        'Руководитель получает данные по рейсам, пробегу, простоям, моточасам и нарушениям.',
    },
    {
      label: 'Работа с автопарками.',
      description:
        'Решение подходит для грузового транспорта, спецтехники, легковых автомобилей и выездных бригад.',
    },
  ],
}

export const tagTiles = [
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
