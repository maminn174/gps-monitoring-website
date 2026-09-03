import taxiPool from '@/assets/images/industries/taxi/taxi-pool.webp'
import corporateTaxi from '@/assets/images/industries/taxi/corporate-taxi.webp'
import aggregatorParks from '@/assets/images/industries/taxi/aggregator-parks.webp'
import rentForTaxi from '@/assets/images/industries/taxi/rent-for-taxi.webp'
import carRollouts from '@/assets/images/industries/taxi/car-rollouts.webp'
import replacementVehicles from '@/assets/images/industries/taxi/replacement-vehicles.webp'

import taxiMainProblem1 from '@/assets/images/main-problems/taxi/main-problem-taxi-1.webp'
import taxiMainProblem2 from '@/assets/images/main-problems/taxi/main-problem-taxi-2.webp'
import taxiMainProblem3 from '@/assets/images/main-problems/taxi/main-problem-taxi-3.webp'
import taxiMainProblem4 from '@/assets/images/main-problems/taxi/main-problem-taxi-4.webp'
import taxiMainProblemPhone from '@/assets/images/main-problems/taxi/main-problem-taxi-phone.webp'

import onlineMonitoring from '@/assets/images/possibilities/online-monitoring.webp'
import geozon from '@/assets/images/possibilities/geozon.webp'
import reports from '@/assets/images/possibilities/reports.webp'
import notifications from '@/assets/images/possibilities/notifications.webp'

import system from '@/assets/images/structure/fuel/system-fuel-strucutre.webp'
import motorLockoutRelay from '@/assets/images/structure/motor-lockout-relay.webp'
import structureReports from '@/assets/images/structure/fuel/reports-fuel-strucutre.webp'
import engineBlock from '@/assets/images/possibilities/engine-block.webp'
import drivers from '@/assets/images/possibilities/possibilities-drivers.webp'
import basicTracker from '@/assets/images/structure/installation-gps-tracker/basic-tracker.webp'
import canTracker from '@/assets/images/structure/installation-gps-tracker/can-tracker.webp'
import tracker from '@/assets/images/structure/fuel/tracker-fuel-strucutre.webp'
import motorBlockRelay from '@/assets/images/structure/motor-block-relay.webp'
import mayakXkeeper from '@/assets/images/structure/installation-gps-tracker/mayak-xkeeper.webp'

import taxiProblems1 from '@/assets/images/problems/taxi/taxi-problem-1.webp'
import taxiProblems2 from '@/assets/images/problems/taxi/taxi-problem-2.webp'
import taxiProblems3 from '@/assets/images/problems/taxi/taxi-problem-3.webp'
import taxiProblems4 from '@/assets/images/problems/taxi/taxi-problem-4.webp'
import taxiProblems5 from '@/assets/images/problems/taxi/taxi-problem-5.webp'
import taxiProblems6 from '@/assets/images/problems/taxi/taxi-problem-6.webp'

export const heroContent = {
  title: (
    <>
      Мониторинг такси
      <span className="hero__accent"> ГЛОНАСС/GPS под ключ</span>
    </>
  ),
  description: (
    <>
      Установим GPS/ГЛОНАСС трекеры и маячки для такси, настроим отслеживание
      автомобилей, отчеты по сменам и удаленную блокировку двигателя через реле
      блокировки
    </>
  ),
  items: [
    'Контроль такси 24/7 на онлайн-карте',
    'GPS трекер, ГЛОНАСС терминал или скрытый маячок такси',
    'Маршруты, простои, пробег и смены водителей',
    'Блокировка и уведомления для автопарков',
  ],
  image: {
    src: '/src/assets/images/taxi-main.webp',
    alt: 'Мониторинг такси ГЛОНАСС/GPS',
    width: 1407,
    height: 938,
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

export const taxiProblems = {
  title: 'Какие задачи решает мониторинг такси',
  titleId: 'problems-title',
  badgeIcon: 'alert',
  actionTitle:
    'GPS мониторинг такси помогает видеть машины, смены, нецелевые поездки и риски невозврата',
  imageClassName: 'transport-problem-image',
  items: [
    {
      title: 'Автомобиль не видно после выдачи',
      description:
        'Трекер такси передает координаты, статус зажигания, скорость и историю движения',
      badgeText: 'Нет контроля',
      imageSrc: taxiProblems1,
      imageAlt: 'Такси на карте мониторинга после выдачи водителю',
      imageWidth: 205,
      imageHeight: 154,
      variant: 'yellow',
    },
    {
      title: 'Лишний пробег и личные поездки',
      description:
        'Система показывает маршруты вне смены, ночные поездки, отклонения и холостой пробег',
      badgeText: 'Рост расходов',
      imageSrc: taxiProblems2,
      imageAlt: 'Маршрут такси с лишним пробегом в системе мониторинга',
      imageWidth: 205,
      imageHeight: 154,
      variant: 'blue',
    },
    {
      title: 'Простои и потеря выручки',
      description:
        'Видно, где такси стоит без движения, когда началась смена и как используется автомобиль',
      badgeText: 'Простой авто',
      imageSrc: taxiProblems3,
      imageAlt: 'Простой автомобиля такси на онлайн-карте',
      imageWidth: 205,
      imageHeight: 154,
      variant: 'gray',
    },
    {
      title: 'Риск угона или невозврата',
      description:
        'Маячок помогает найти машину, реле блокирует запуск двигателя',
      badgeText: 'Защита парка',
      imageSrc: taxiProblems4,
      imageAlt: 'Скрытый маячок и защита автомобиля такси от невозврата',
      imageWidth: 205,
      imageHeight: 154,
      variant: 'dark',
    },
    {
      title: 'Нет данных по водителям',
      description:
        'Контролируйте скорость, резкие маневры, нарушения геозон и дисциплину водителей',
      badgeText: 'Слабая дисциплина',
      imageSrc: taxiProblems5,
      imageAlt: 'Контроль водителя такси по скорости и событиям',
      imageWidth: 205,
      imageHeight: 154,
      variant: 'yellow',
    },
    {
      title: 'Сложно подтвердить спорные поездки',
      description:
        'История маршрутов и отчеты помогают разбирать претензии, штрафы, ДТП и спорные смены',
      badgeText: 'Нет доказательств',
      imageSrc: taxiProblems6,
      imageAlt: 'История маршрута такси для разбора спорной поездки',
      imageWidth: 205,
      imageHeight: 154,
      variant: 'blue',
    },
  ],
}

export const taxiStructures = {
  title: 'Как работает система мониторинга такси',
  titleId: 'taxi-structures-title',
  items: [
    {
      title: 'GPS/ГЛОНАСС трекер',
      description:
        'Устанавливается в автомобиль такси и передает координаты, скорость, пробег, зажигание, питание и события в систему мониторинга',
      image: tracker,
      imageAlt: 'GPS/ГЛОНАСС трекер для установки в такси',
      imageWidth: 211,
      imageHeight: 215,
      variant: 'yellow',
    },
    {
      title: 'Реле блокировки двигателя',
      description:
        'Подключаем блокировку запуска для автопарков, аренды и раскатчиков, снижая риск невозврата',
      image: motorLockoutRelay,
      imageAlt: 'Реле блокировки двигателя для автомобиля такси',
      imageWidth: 215,
      imageHeight: 215,
      variant: 'gray',
    },
    {
      title: 'Онлайн-платформа',
      description:
        'Личный кабинет показывает такси на карте, историю поездок, смены, геозоны, статусы и уведомления по событиям',
      image: system,
      imageAlt: 'Онлайн-платформа мониторинга такси на карте',
      imageWidth: 300,
      imageHeight: 237,
      variant: 'gray',
    },
    {
      title: 'Отчеты и уведомления',
      description:
        'Руководитель видит пробег, простои, поездки вне смены, нарушения скорости, потерю связи и работу каждого автомобиля',
      image: structureReports,
      imageAlt: 'Отчеты и уведомления по автомобилям таксопарка',
      imageWidth: 306,
      imageHeight: 171,
      variant: 'blue',
    },
  ],
  result: {
    description:
      'Данные собираются автоматически, поэтому контроль такси не зависит от звонков водителям, скриншотов из агрегаторов и ручных сверок',
    items: [
      'Местоположение такси онлайн',
      'История маршрутов и смен',
      'Отчеты по пробегу, простоям и водителям',
    ],
  },
}

export const taxiPossibilities = {
  title: 'Возможности GPS/ГЛОНАСС мониторинга такси',
  titleId: 'taxi-possibilities-title',
  items: [
    {
      title: 'Онлайн-отслеживание такси',
      description:
        'Смотрите автомобили на карте в реальном времени с компьютера, планшета или телефона',
      image: onlineMonitoring,
      imageAlt: 'Онлайн-карта с автомобилями такси',
    },
    {
      title: 'Геозоны и маршруты',
      description:
        'Контролируйте выезд из города, заезды в запрещенные зоны, стоянки, отклонения и личные поездки',
      image: geozon,
      imageAlt: 'Геозоны и маршруты для контроля таксопарка',
    },
    {
      title: 'Блокировка двигателя',
      description:
        'Устанавливаем реле блокировки для ограничения запуска при угоне, невозврате или нарушении аренды',
      image: engineBlock,
      imageAlt: 'Блокировка двигателя через систему мониторинга',
    },
    {
      title: 'Контроль водителей',
      description:
        'Анализируйте скорость, резкие маневры, опасное вождение, простои и использование автомобиля вне смены',
      image: drivers,
      imageAlt: 'Контроль поведения водителей такси',
    },
    {
      title: 'Отчеты по автопарку',
      description:
        'Получайте отчеты по пробегу, маршрутам, сменам, простоям и водителям',
      image: reports,
      imageAlt: 'Отчеты по пробегу и сменам таксопарка',
    },
    {
      title: 'Уведомления о событиях',
      description:
        'Настраивайте уведомления о потере связи, отключении питания, геозонах и попытке вмешательства',
      image: notifications,
      imageAlt: 'Уведомления о событиях автомобиля такси',
    },
  ],
}

export const taxiEquipments = {
  title: 'Оборудование ГЛОНАСС/GPS для такси',
  titleId: 'taxi-equipments-title',
  items: [
    {
      title: 'Базовый GPS/ГЛОНАСС трекер',
      description:
        'Подходит для отслеживания такси, контроля маршрутов, скорости, пробега, стоянок, статуса зажигания и режима работы',
      image: basicTracker,
      imageAlt: 'Базовый GPS/ГЛОНАСС трекер для такси',
      imageWidth: 312,
      imageHeight: 208,
      variant: 'yellow',
    },
    {
      title: 'Скрытый маячок такси',
      description:
        'Используется как дополнительный канал поиска автомобиля, если основной трекер отключили или машину пытаются скрыть',
      image: mayakXkeeper,
      imageAlt: 'Скрытый маячок для автомобиля такси',
      imageWidth: 261,
      imageHeight: 208,
      variant: 'gray',
    },
    {
      title: 'Реле блокировки двигателя',
      description:
        'Ставится вместе с трекером и позволяет удаленно ограничить запуск двигателя по команде из системы мониторинга',
      image: motorBlockRelay,
      imageAlt: 'Реле блокировки двигателя для такси',
      imageWidth: 270,
      imageHeight: 249,
      variant: 'gray',
    },
    {
      title: 'Подключение к CAN-шине',
      description:
        'Помогает получать штатные данные автомобиля: пробег, зажигание, ошибки, состояние дверей, аккумулятора и других параметров',
      image: canTracker,
      imageAlt: 'CAN-трекер для подключения к штатным данным автомобиля',
      imageWidth: 312,
      imageHeight: 208,
      variant: 'blue',
    },
  ],
}

export const taxiSteps = {
  title: 'Установка GPS/ГЛОНАСС для такси в четыре шага',
  titleId: 'steps-title',
  items: [
    {
      step: '1',
      title: 'Аудит автопарка',
      description:
        'Уточняем количество машин, формат работы, риски невозврата, требования к отслеживанию, блокировке и отчетам',
      time: '5-10 минут',
    },
    {
      step: '2',
      title: 'Подбор комплекта',
      description:
        'Подбираем GPS трекер для такси, маячок, SIM-карту, реле блокировки, тариф мониторинга и рассчитываем стоимость',
      time: 'В день обращения',
    },
    {
      step: '3',
      title: 'Монтаж оборудования',
      description:
        'Ставим трекер скрыто, подключаем питание, зажигание, CAN при необходимости и устанавливаем реле блокировки двигателя',
      time: '1-3 часа',
    },
    {
      step: '4',
      title: 'Настройка системы',
      description:
        'Добавляем автомобили в систему мониторинга, проверяем координаты, блокировку, уведомления, отчеты и доступы',
      time: 'В день монтажа',
    },
  ],
  result: {
    title: 'Таксопарк готов к мониторингу',
    description:
      'Вы видите автомобили онлайн, контролируете смены и пробег, получаете уведомления и можете использовать блокировку двигателя в критических ситуациях',
  },
}

export const taxiIndustries = {
  title: 'Для кого подходит мониторинг такси',
  titleId: 'industries-title',
  items: [
    {
      title: 'Таксопарки',
      image: taxiPool,
      imageAlt: 'Таксопарк с автомобилями для мониторинга',
      imageWidth: 384,
      imageHeight: 313,
      variant: 'featured',
    },
    {
      title: 'Аренда авто под такси',
      image: rentForTaxi,
      imageAlt: 'Автомобиль в аренде под такси',
      imageWidth: 243,
      imageHeight: 171,
      variant: 'wide-top',
    },
    {
      title: 'Раскатчики автомобилей',
      image: carRollouts,
      imageAlt: 'Автомобили для раската под такси',
      imageWidth: 261,
      imageHeight: 171,
      variant: 'wide-middle',
    },
    {
      title: 'Парки агрегаторов',
      image: aggregatorParks,
      imageAlt: 'Парк такси, работающий с агрегаторами',
      imageWidth: 221,
      imageHeight: 209,
      variant: 'compact-start',
    },
    {
      title: 'Корпоративное такси',
      image: corporateTaxi,
      imageAlt: 'Корпоративное такси компании',
      imageWidth: 209,
      imageHeight: 209,
      variant: 'compact-center',
    },
    {
      title: 'Подменные автомобили',
      image: replacementVehicles,
      imageAlt: 'Подменный автомобиль такси',
      imageWidth: 226,
      imageHeight: 209,
      variant: 'compact-end',
    },
  ],
  actionItems: {
    actionTitle: 'Нужно решение под ваш парк?',
    actionDescription:
      'Подберем мониторинг такси под количество машин, формат выдачи, требования к блокировке двигателя и отчетности',
  },
}

export const taxiMainProblems = {
  title: 'Что получает владелец таксопарка',
  titleId: 'taxi-main-problems-title',
  items: [
    {
      title: 'Контроль такси 24/7',
      description:
        'Автомобили видны на карте, история маршрутов, стоянок и смен доступна в кабинете',
      image: taxiMainProblem1,
      imageAlt: 'Онлайн-карта с автомобилями таксопарка',
      imageWidth: 265,
      imageHeight: 194,
      variant: 'yellow',
    },
    {
      title: 'Меньше лишнего пробега',
      description:
        'Система показывает поездки вне смены, выезд из зоны, ночное использование и простои',
      image: taxiMainProblem2,
      imageAlt: 'Контроль лишнего пробега такси в системе мониторинга',
      imageWidth: 265,
      imageHeight: 177,
      variant: 'blue',
    },
    {
      title: 'Защита от невозврата',
      description:
        'Маячок, уведомления и реле помогают при угоне, спорной аренде и потере связи',
      image: taxiMainProblem3,
      imageAlt: 'Защита такси от невозврата с маячком и уведомлениями',
      imageWidth: 265,
      imageHeight: 177,
      variant: 'blue',
    },
    {
      type: 'action',
    },
    {
      title: 'Контроль смен и простоев',
      description:
        'Отчеты показывают использование автомобиля, простои и потери времени',
      image: taxiMainProblem4,
      imageAlt: 'Отчет по сменам и простоям такси',
      imageWidth: 265,
      imageHeight: 167,
      variant: 'gray',
    },
  ],
  actionElements: {
    actionItems: ['Онлайн-карта', 'История маршрутов', 'Блокировка двигателя'],
    actionTitle: 'Прозрачность таксопарка',
    actionDescription: 'Настроим мониторинг такси под задачи вашего парка:',
    actionImage: taxiMainProblemPhone,
    actionImageAlt: 'Мобильный интерфейс мониторинга таксопарка',
  },
}

export const taxiActionBanner = {
  title: 'Рассчитаем стоимость GPS/ГЛОНАСС для такси',
  description:
    'Подберем комплект под задачу: трекер такси, скрытый маячок, реле блокировки двигателя, SIM-карту, монтаж и тариф мониторинга. Стоимость зависит от количества машин, способа установки и набора функций.',
}

export const taxiFaq = {
  title: 'Вопросы про мониторинг такси',
  items: [
    {
      question: 'Что входит в мониторинг такси?',
      answer:
        'В базовый мониторинг такси входит GPS/ГЛОНАСС трекер, SIM-карта, подключение к онлайн-карте, настройка маршрутов, стоянок, пробега, зажигания, уведомлений и отчетов. Для автопарков и раскатчиков часто дополнительно ставим скрытый маячок такси и реле блокировки двигателя.',
    },
    {
      question: 'Сколько стоит установить GPS трекер на такси?',
      answer:
        'Стоимость GPS трекера для такси зависит от модели устройства, способа скрытой установки, тарифа мониторинга, количества автомобилей и дополнительных функций. Базовое отслеживание такси считается отдельно от комплекта с CAN-шиной, маячком и блокировкой двигателя.',
    },
    {
      question: 'Можно ли установить блокировку двигателя на такси?',
      answer:
        'Да, вместе с трекером можно установить реле блокировки двигателя. Оно позволяет удаленно ограничить запуск двигателя по команде из системы мониторинга. Такой вариант часто выбирают таксопарки, аренда авто под такси и раскатчики, которым важно снизить риск невозврата автомобиля.',
    },
    {
      question: 'Чем трекер такси отличается от обычного маячка?',
      answer:
        'Трекер такси постоянно передает координаты, скорость, пробег, зажигание и события в систему мониторинга, хранит историю маршрутов и строит отчеты. Маячок такси чаще используют как скрытое поисковое устройство с периодической передачей координат. Для защиты автопарка можно использовать оба устройства.',
    },
    {
      question: 'Можно ли смотреть отслеживание такси с телефона?',
      answer:
        'Да, мониторинг такси доступен с компьютера, планшета и телефона. Руководитель или диспетчер видит автомобили на карте, текущие статусы, маршруты, уведомления, отчеты по пробегу и событиям.',
    },
    {
      question: 'Какие данные показывает GPS для такси?',
      answer:
        'GPS для такси показывает местоположение автомобиля, маршрут, скорость, пробег, стоянки, зажигание, питание, потерю связи, посещение геозон и историю поездок. При подключении CAN можно получать часть штатных данных автомобиля.',
    },
    {
      question: 'Подходит ли ГЛОНАСС для такси в аренде?',
      answer:
        'Да, ГЛОНАСС для такси подходит для аренды автомобилей, таксопарков, раскатчиков и парков, работающих с агрегаторами. Система помогает контролировать выдачу машины, поездки вне смены, выезд из разрешенной зоны, простои, пробег и риск невозврата.',
    },
    {
      question: 'Можно ли поставить оборудование скрыто?',
      answer:
        'Да, трекер и маячок можно установить скрыто, чтобы водитель или арендатор не видел оборудование. Место установки подбираем по модели автомобиля, качеству приема сигнала, доступу к питанию и требованиям к реле блокировки.',
    },
    {
      question: 'Можно ли подключить уже установленный трекер такси?',
      answer:
        'Да, если устройство совместимо с платформой мониторинга и стабильно передает нужные параметры. Мы проверим модель, прошивку, SIM-карту, частоту отправки координат и набор доступных данных. Если старый трекер не подходит, предложим замену.',
    },
    {
      question: 'Как быстро запускается мониторинг такси?',
      answer:
        'Базовая установка GPS/ГЛОНАСС трекера на один автомобиль обычно занимает 1-2 часа. Если нужно скрыто поставить маячок, подключить CAN или установить реле блокировки двигателя, монтаж может занять больше времени. После установки проверяем координаты, отчеты, уведомления и работу блокировки.',
    },
  ],
}

export const taxiSeoText = {
  title: 'Мониторинг такси для таксопарков и аренды',
  firstParagraph:
    'Таксопарку важно быстро понимать, где находится каждая машина, когда она вышла на смену, сколько проехала и не используется ли вне договоренных условий. GPS/ГЛОНАСС мониторинг собирает эти данные автоматически: координаты, скорость, зажигание, питание, простои и история поездок попадают в онлайн-платформу без звонков водителям и ручных сверок.',
  secondParagraph:
    'Для аренды авто под такси и парков, работающих с агрегаторами, систему можно усилить скрытым маячком, CAN-подключением, уведомлениями и реле блокировки повторного запуска. Комплект подбирается под риск невозврата, размер парка и нужные отчеты: от базовой онлайн-карты до контроля смен, геозон, пробега и разных уровней доступа.',
  items: [
    {
      label: 'ГЛОНАСС для такси.',
      description:
        'Подбираем терминал, SIM-карту, способ установки и тариф под таксопарк, аренду или раскат автомобилей.',
    },
    {
      label: 'GPS для такси.',
      description:
        'Показывает автомобили на карте, хранит историю движения и помогает проверять маршруты, стоянки, пробег и скорость.',
    },
    {
      label: 'Трекер такси.',
      description:
        'Передает координаты, зажигание, питание, пробег и данные с дополнительных подключений; подходит для одной машины и для парка.',
    },
    {
      label: 'Маячок такси.',
      description:
        'Работает как скрытый резервный канал поиска, если основной трекер отключили или машину пытаются спрятать.',
    },
    {
      label: 'Блокировка двигателя.',
      description:
        'Ставим реле для ограничения повторного запуска при угоне, невозврате или нарушении условий аренды.',
    },
    {
      label: 'Отслеживание такси.',
      description:
        'Помогает видеть смены, личные поездки, выезды из геозон, простои, спорные маршруты и дисциплину водителей.',
    },
  ],
}

export const taxiTagTiles = [
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
]
