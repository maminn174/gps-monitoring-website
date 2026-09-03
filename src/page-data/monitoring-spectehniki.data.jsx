import logging from '@/assets/images/industries/logging-truck-transport.webp'
import bulldozer from '@/assets/images/industries/bulldozer-transport.webp'
import forklift from '@/assets/images/industries/forklift-truck-transport.webp'
import combine from '@/assets/images/industries/combine-transport.webp'
import municipal from '@/assets/images/industries/municipal-transport.webp'
import excavator from '@/assets/images/industries/excavator-transport.webp'

import specialMainProblems1 from '@/assets/images/main-problems/special/special-main-problems-1.webp'
import specialMainProblems2 from '@/assets/images/main-problems/special/special-main-problems-2.webp'
import specialMainProblems3 from '@/assets/images/main-problems/special/special-main-problems-3.webp'
import specialMainProblems4 from '@/assets/images/main-problems/special/special-main-problems-4.webp'
import specialMainProblemsPhone from '@/assets/images/main-problems/special/special-main-problems-phone.webp'

import onlineMonitoring from '@/assets/images/possibilities/online-monitoring.webp'
import geozon from '@/assets/images/possibilities/geozon.webp'
import reports from '@/assets/images/possibilities/reports.webp'
import notifications from '@/assets/images/possibilities/notifications.webp'

import tracker from '@/assets/images/structure/fuel/tracker-fuel-strucutre.webp'
import dut from '@/assets/images/fuel-control-variant/dut-fuel-control-variant.webp'
import system from '@/assets/images/structure/fuel/system-fuel-strucutre.webp'
import dutAndDun from '@/assets/images/structure/dut-and-dun.webp'
import structureReports from '@/assets/images/structure/fuel/reports-fuel-strucutre.webp'
import fuelControl from '@/assets/images/possibilities/fuel-control.webp'
import drivers from '@/assets/images/possibilities/possibilities-drivers.webp'
import basicTracker from '@/assets/images/structure/installation-gps-tracker/basic-tracker.webp'
import canTracker from '@/assets/images/structure/installation-gps-tracker/can-tracker.webp'
import dun from '@/assets/images/structure/dun.webp'

import specialProblemImage1 from '@/assets/images/problems/special/spec-problem-1.webp'
import specialProblemImage2 from '@/assets/images/problems/special/spec-problem-2.webp'
import specialProblemImage3 from '@/assets/images/problems/special/spec-problem-3.webp'
import specialProblemImage4 from '@/assets/images/problems/special/spec-problem-4.webp'
import specialProblemImage5 from '@/assets/images/problems/special/spec-problem-5.webp'
import specialProblemImage6 from '@/assets/images/problems/special/spec-problem-6.webp'

export const heroContent = {
  title: (
    <>
      Мониторинг спецтехники
      <span className="hero__accent"> ГЛОНАСС/GPS под ключ</span>
    </>
  ),
  description: (
    <>
      Установим ГЛОНАСС на спецтехнику, подключим GPS-трекеры, датчики топлива,
      моточасов и систему контроля для строительных, коммунальных, дорожных и
      сельхозпарков
    </>
  ),
  items: [
    'Контроль спецтехники 24/7 на онлайн-карте',
    'Установка ГЛОНАСС на технику с выездом на вашу площадку',
    'Контроль работы, простоев, моточасов и топлива',
    'Отчеты по объектам, сменам и расходам',
  ],
  image: {
    src: '/src/assets/images/special-main.webp',
    alt: 'Мониторинг спецтехники ГЛОНАСС/GPS',
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

export const specialProblems = {
  title: 'Какие задачи решает контроль спецтехники',
  titleId: 'problems-title',
  badgeIcon: 'alert',
  actionTitle:
    'Контроль техники помогает видеть работу на объектах, простои, топливо и отклонения от задания',
  imageClassName: 'transport-problem-image',
  items: [
    {
      title: 'Не видно технику на объекте',
      description:
        'Показывает местоположение машин, перемещения между объектами и время работы',
      badgeText: 'Нет прозрачности',
      imageSrc: specialProblemImage1,
      imageWidth: 205,
      imageHeight: 128,
      variant: 'yellow',
    },
    {
      title: 'Лишний пробег и нецелевые выезды',
      description:
        'Фиксирует поездки вне задания, отклонения от маршрута и работу техники не на своем участке',
      badgeText: 'Рост расходов',
      imageSrc: specialProblemImage2,
      imageWidth: 205,
      imageHeight: 128,
      variant: 'blue',
    },
    {
      title: 'Простои и холостой ход',
      description:
        'Отделяет движение, стоянки, работу двигателя и простой без полезной нагрузки',
      badgeText: 'Потери смены',
      imageSrc: specialProblemImage3,
      imageWidth: 205,
      imageHeight: 128,
      variant: 'gray',
    },
    {
      title: 'Сливы и перерасход топлива',
      description:
        'Помогает контролировать заправки, сливы, фактический расход и остаток топлива в баке',
      badgeText: 'Потери топлива',
      imageSrc: specialProblemImage4,
      imageWidth: 205,
      imageHeight: 128,
      variant: 'dark',
    },
    {
      title: 'Нет контроля операторов',
      description:
        'Показывает нарушения графика, длительные остановки, резкие маневры и работу вне смены',
      badgeText: 'Слабая дисциплина',
      imageSrc: specialProblemImage5,
      imageWidth: 205,
      imageHeight: 128,
      variant: 'yellow',
    },
    {
      title: 'Сложно подтвердить объем работ',
      description:
        'Отчеты по моточасам, маршрутам и геозонам помогают сверять фактическую работу с заданием',
      badgeText: 'Спорные отчеты',
      imageSrc: specialProblemImage6,
      imageWidth: 205,
      imageHeight: 128,
      variant: 'blue',
    },
  ],
}

export const specialStructures = {
  title: 'Как работает система мониторинга спецтехники',
  titleId: 'special-structures-title',
  items: [
    {
      title: 'GPS/ГЛОНАСС трекер',
      description:
        'Устанавливается на технику и передает координаты, скорость, пробег, зажигание, питание и события в систему мониторинга',
      image: tracker,
      imageWidth: 211,
      imageHeight: 215,
      variant: 'yellow',
    },
    {
      title: 'Датчики и CAN-шина',
      description:
        'Подключаем контроль топлива, моточасов, навесного оборудования и штатных параметров техники',
      image: dutAndDun,
      imageWidth: 284,
      imageHeight: 208,
      variant: 'gray',
    },
    {
      title: 'Онлайн-платформа',
      description:
        'Личный кабинет показывает технику на карте, историю движения, геозоны объектов, смены и уведомления по событиям',
      image: system,
      imageWidth: 300,
      imageHeight: 237,
      variant: 'gray',
    },
    {
      title: 'Отчеты и аналитика',
      description:
        'Руководитель получает данные по моточасам, простоям, расходу топлива, работе операторов и загрузке техники',
      image: structureReports,
      imageWidth: 306,
      imageHeight: 171,
      variant: 'blue',
    },
  ],
  result: {
    description:
      'Данные собираются автоматически, поэтому контроль спецтехники не зависит от ручных журналов, звонков операторам и отчетов после смены',
    items: [
      'Местоположение техники онлайн',
      'История работы на объектах',
      'Отчеты по топливу, моточасам и сменам',
    ],
  },
}

export const specialPossibilities = {
  title: 'Возможности GPS/ГЛОНАСС мониторинга спецтехники',
  titleId: 'special-possibilities-title',
  items: [
    {
      title: 'Онлайн-контроль техники',
      description:
        'Отслеживайте экскаваторы, самосвалы, погрузчики и коммунальную технику на карте в реальном времени',
      image: onlineMonitoring,
    },
    {
      title: 'Геозоны объектов',
      description:
        'Контролируйте въезд и выезд с площадок, карьеров, складов, баз, полей и городских зон работ',
      image: geozon,
    },
    {
      title: 'Контроль топлива и моточасов',
      description:
        'Подключайте ДУТ, CAN и датчики для учета расхода, заправок, сливов, работы двигателя и навесного оборудования',
      image: fuelControl,
    },
    {
      title: 'Контроль операторов',
      description:
        'Анализируйте соблюдение смен, простои, скорость, резкие маневры и работу техники вне задания',
      image: drivers,
    },
    {
      title: 'Отчеты по работе',
      description:
        'Получайте отчеты по объектам, сменам, пробегу, моточасам, простоям, топливу и загрузке техники',
      image: reports,
    },
    {
      title: 'Уведомления о событиях',
      description:
        'Настраивайте уведомления о простоях, выезде из геозоны, потере связи, сливе топлива и запуске двигателя',
      image: notifications,
    },
  ],
}

export const specialEquipments = {
  title: 'Оборудование ГЛОНАСС для спецтехники',
  titleId: 'special-equipments-title',
  items: [
    {
      title: 'Базовый GPS/ГЛОНАСС трекер',
      description:
        'Подходит для контроля местоположения, маршрутов, скорости, пробега, стоянок и зажигания спецтехники',
      image: basicTracker,
      imageWidth: 312,
      imageHeight: 208,
      variant: 'yellow',
    },
    {
      title: 'Трекер с CAN-шиной',
      description:
        'Получает штатные данные техники: пробег, моточасы, зажигание, ошибки, состояние узлов и расход топлива',
      image: canTracker,
      imageWidth: 312,
      imageHeight: 208,
      variant: 'gray',
    },
    {
      title: 'Датчик уровня топлива',
      description:
        'Нужен для точного контроля заправок, сливов, фактического расхода и остатков топлива в баке',
      image: dut,
      imageWidth: 235,
      imageHeight: 208,
      variant: 'gray',
    },
    {
      title: 'Датчики моточасов и оборудования',
      description:
        'Помогают видеть работу двигателя, навесного оборудования, кузова, стрелы и других параметров',
      image: dun,
      imageWidth: 278,
      imageHeight: 211,
      variant: 'blue',
    },
  ],
}

export const specialSteps = {
  title: 'Установка ГЛОНАСС на спецтехнику в четыре шага',
  titleId: 'steps-title',
  items: [
    {
      step: '1',
      title: 'Аудит задач',
      description:
        'Уточняем тип техники, количество единиц, объекты, режим работы, требования к топливу, моточасам, CAN и отчетам',
      time: '5-10 минут',
    },
    {
      step: '2',
      title: 'Подбор комплекта',
      description:
        'Подбираем трекер, датчики, SIM-карту, тариф мониторинга и рассчитываем стоимость установки ГЛОНАСС на спецтехнику',
      time: 'В день обращения',
    },
    {
      step: '3',
      title: 'Выездной монтаж',
      description:
        'Приезжаем на вашу площадку, устанавливаем оборудование, подключаем питание, датчики топлива, CAN и контроль моточасов',
      time: '1-3 часа',
    },
    {
      step: '4',
      title: 'Настройка системы',
      description:
        'Проверяем координаты, события, геозоны объектов, отчеты по сменам и доступы для диспетчера или руководителя',
      time: 'В день монтажа',
    },
  ],
  result: {
    title: 'Спецтехника готова к мониторингу',
    description:
      'Вы видите технику онлайн, контролируете моточасы, топливо, простои, работу на объектах и получаете понятные отчеты по автопарку',
  },
}

export const specialIndustries = {
  title: 'Для какой спецтехники подходит мониторинг',
  titleId: 'industries-title',
  items: [
    {
      title: 'Строительная',
      image: excavator,
      imageWidth: 432,
      imageHeight: 361,
      variant: 'featured',
    },
    {
      title: 'Дорожная',
      image: bulldozer,
      imageWidth: 276,
      imageHeight: 171,
      variant: 'wide-top',
    },
    {
      title: 'Сельхозтехника',
      image: combine,
      imageWidth: 283,
      imageHeight: 171,
      variant: 'wide-middle',
    },
    {
      title: 'Складская',
      image: forklift,
      imageWidth: 248,
      imageHeight: 209,
      variant: 'compact-start',
    },
    {
      title: 'Лесная',
      image: logging,
      imageWidth: 248,
      imageHeight: 209,
      variant: 'compact-center',
    },
    {
      title: 'Коммунальная',
      image: municipal,
      imageWidth: 283,
      imageHeight: 209,
      variant: 'compact-end',
    },
  ],
  actionItems: {
    actionTitle: 'Нет вашего типа техники?',
    actionDescription:
      'Подберем систему контроля техники под ваши объекты, смены и требования к отчетности',
  },
}

export const specialMainProblems = {
  title: 'Что получает владелец парка спецтехники',
  titleId: 'special-main-problems-title',
  items: [
    {
      title: 'Контроль спецтехники 24/7',
      description:
        'Техника видна на карте, а история маршрутов, стоянок и событий доступна в личном кабинете',
      image: specialMainProblems1,
      imageWidth: 265,
      imageHeight: 194,
      variant: 'yellow',
    },
    {
      title: 'Меньше простоев и лишнего пробега',
      description:
        'Система показывает нецелевые выезды, длительные стоянки, холостой ход и работу вне объекта',
      image: specialMainProblems2,
      imageWidth: 265,
      imageHeight: 177,
      variant: 'blue',
    },
    {
      title: 'Контроль топлива и сливов',
      description:
        'Отчеты помогают сравнивать расход по сменам, видеть заправки, подозрительные сливы и перерасход',
      image: specialMainProblems3,
      imageWidth: 265,
      imageHeight: 177,
      variant: 'blue',
    },
    {
      type: 'action',
    },
    {
      title: 'Прозрачная работа на объектах',
      description:
        'Диспетчер быстрее реагирует на простои, потерю связи, выезд из геозоны и нарушение графика смены',
      image: specialMainProblems4,
      imageWidth: 265,
      imageHeight: 167,
      variant: 'gray',
    },
  ],
  actionElements: {
    actionItems: ['Онлайн-карта', 'История маршрутов', 'Отчеты по моточасам'],
    actionTitle: 'Прозрачный контроль техники',
    actionDescription:
      'Настроим мониторинг спецтехники под задачи вашего парка:',
    actionImage: specialMainProblemsPhone,
  },
}

export const specialActionBanner = {
  title: 'Рассчитаем стоимость ГЛОНАСС на спецтехнику',
  description:
    'Подберем комплект под задачу: GPS/ГЛОНАСС трекер, датчики топлива, моточасов, SIM-карту, монтаж и тариф мониторинга. Стоимость установки ГЛОНАСС на спецтехнику зависит от типа техники, количества единиц и нужных отчетов.',
}

export const specialFaq = {
  title: 'Вопросы про мониторинг спецтехники',
  items: [
    {
      question: 'Что входит в мониторинг спецтехники?',
      answer:
        'В базовый мониторинг спецтехники входит GPS/ГЛОНАСС трекер, SIM-карта, подключение к онлайн-карте, настройка событий и отчетов по маршрутам, стоянкам, пробегу и зажиганию. Если нужен расширенный контроль спецтехники, добавляем датчик уровня топлива, CAN-шину, контроль моточасов, датчики навесного оборудования и уведомления.',
    },
    {
      question: 'Сколько стоит установка ГЛОНАСС на спецтехнику?',
      answer:
        'Стоимость установки ГЛОНАСС на спецтехнику зависит от модели трекера, способа монтажа, типа техники, тарифа мониторинга, количества единиц и дополнительных датчиков. Базовый комплект для контроля техники на карте считается отдельно от решения с ДУТ, CAN, моточасами и расширенными отчетами.',
    },
    {
      question: 'На какую технику можно установить ГЛОНАСС?',
      answer:
        'ГЛОНАСС на технику устанавливают на экскаваторы, самосвалы, погрузчики, бульдозеры, катки, краны, манипуляторы, автовышки, коммунальные машины, тракторы и сельхозтехнику. Система настраивается под разные задачи: контроль маршрутов, моточасов, топлива, работы на объекте и навесного оборудования.',
    },
    {
      question: 'Можно ли установить ГЛОНАСС на спецтехнику с выездом?',
      answer:
        'Да, монтаж можно выполнить на вашей территории: в парке техники, гараже, сервисной зоне, на строительной площадке, базе, складе или объекте. Это удобно, если нужно установить ГЛОНАСС на спецтехнику без перегона на сервис или подключить несколько единиц техники за один выезд.',
    },
    {
      question: 'Какие данные показывает система контроля техники?',
      answer:
        'Система контроля техники показывает местоположение, маршрут, скорость, пробег, стоянки, зажигание, моточасы, посещение геозон и историю работы на объектах. В отчетах можно смотреть контроль спецтехники по дням, сменам, операторам, расходу топлива, простоям и нарушениям маршрута.',
    },
    {
      question: 'Чем GPS мониторинг спецтехники отличается от маяка?',
      answer:
        'Обычный маяк чаще нужен для поиска техники и периодической передачи координат. GPS/ГЛОНАСС мониторинг спецтехники работает как инструмент диспетчера и руководителя: хранит историю движения, считает пробег и моточасы, фиксирует события, строит отчеты и помогает контролировать выполнение работ без ручных журналов.',
    },
    {
      question: 'Нужен ли датчик топлива для контроля спецтехники?',
      answer:
        'Если задача только видеть технику на карте, достаточно трекера. Если важно контролировать сливы, заправки, фактический расход и остатки в баке, к ГЛОНАСС на спецтехнику лучше добавить датчик уровня топлива или получить часть данных из CAN-шины. Для топливной аналитики ДУТ обычно точнее штатных расчетов.',
    },
    {
      question: 'Можно ли подключить уже установленный трекер?',
      answer:
        'Да, если устройство совместимо с платформой мониторинга и стабильно передает нужные параметры. Мы проверим модель, прошивку, SIM-карту, частоту отправки координат и набор доступных данных. Если старый трекер не подходит для отчетов или датчиков, предложим замену на совместимый GPS/ГЛОНАСС терминал.',
    },
    {
      question: 'Как быстро запускается мониторинг спецтехники?',
      answer:
        'Базовая установка трекера на одну единицу техники обычно занимает 1-3 часа. Подключение CAN, ДУТ, датчиков моточасов или навесного оборудования может занять больше времени. После монтажа проверяем координаты, события, отчеты, геозоны объектов и доступ для диспетчера.',
    },
    {
      question: 'Можно ли смотреть мониторинг спецтехники с телефона?',
      answer:
        'Да, доступ возможен с компьютера, планшета и телефона. Руководитель или диспетчер может смотреть карту, текущие статусы, уведомления, маршруты, смены и отчеты. Для операторов и ответственных сотрудников можно настроить отдельные уровни доступа.',
    },
  ],
}

export const specialSeoText = {
  title: 'Мониторинг спецтехники и ГЛОНАСС для контроля техники',
  firstParagraph:
    'Мониторинг спецтехники нужен компаниям, которые хотят видеть технику, объекты, смены и расходы в одной системе. ГЛОНАСС на спецтехнику или GPS-трекер передает координаты, скорость, пробег, зажигание, моточасы и события в онлайн-платформу. Диспетчер получает карту и уведомления, а руководитель видит отчеты по простоям, маршрутам, топливу, операторам и фактической работе техники.',
  secondParagraph:
    'ГЛОНАСС для спецтехники применяют в строительстве, дорожных работах, коммунальном хозяйстве, сельском хозяйстве, добыче, складской логистике и сервисных парках. Система контроля спецтехники помогает контролировать отклонения от маршрута, простои, нецелевые выезды, заправки, сливы, моточасы и работу навесного оборудования. Состав решения подбирается под задачу: от базового контроля техники на карте до мониторинга спецтехники с ДУТ, CAN, геозонами объектов и интеграциями.',
  items: [
    {
      label: 'ГЛОНАСС на технику.',
      description:
        'Подбираем трекер, способ подключения и тариф под конкретный парк: экскаваторы, самосвалы, погрузчики, коммунальную, дорожную или сельхозтехнику.',
    },
    {
      label: 'Установка ГЛОНАСС на спецтехнику.',
      description:
        'Выполняем выездной монтаж, подключаем питание, датчики, CAN, контроль моточасов и настраиваем отчеты под ваши объекты.',
    },
    {
      label: 'GPS мониторинг спецтехники.',
      description:
        'Показывает технику на карте, хранит историю движения, фиксирует стоянки, геозоны, пробег, скорость, моточасы и события в смене.',
    },
    {
      label: 'Система контроля техники.',
      description:
        'Объединяет трекеры, датчики, отчеты и уведомления, чтобы диспетчер контролировал объекты, а руководитель видел отклонения и расходы.',
    },
    {
      label: 'ГЛОНАСС для спецтехники.',
      description:
        'Подходит для строительной, коммунальной, дорожной, карьерной, складской и сельскохозяйственной техники с разными режимами работы.',
    },
    {
      label: 'Контроль спецтехники.',
      description:
        'Помогает контролировать выполнение работ, прибытие на объект, простои, нецелевые выезды, топливо, моточасы и работу операторов.',
    },
  ],
}

export const specialTagTiles = [
  {
    label: 'Установка ГЛОНАСС',
    href: '/ustanovka-glonass',
  },
  {
    label: 'Установка GPS трекера',
    href: '/ustanovka-gps-trekera',
  },
  {
    label: 'Контроль расхода топлива',
    href: '/kontrol-rashoda-topliva',
  },
  {
    label: 'Мониторинг грузового транспорта',
    href: '/resheniya/monitoring-gruzovogo-transporta',
  },
]
