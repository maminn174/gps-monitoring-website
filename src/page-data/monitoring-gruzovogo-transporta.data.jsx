import truckTransport from '@/assets/images/industries/truckTransport.webp'
import refTransport from '@/assets/images/industries/ref-transport.webp'
import dumpTransport from '@/assets/images/industries/dump-transport.webp'
import tankerTransport from '@/assets/images/industries/tanker-transport.webp'
import haulerTransport from '@/assets/images/industries/hauler-transport.webp'
import manipulatorTransport from '@/assets/images/industries/manipulator-transport.webp'

import onlineControlMainProblem from '@/assets/images/main-problems/truck/online-control-main-problem.webp'
import fuelControlMainProblem from '@/assets/images/main-problems/truck/control-fuel-main-problem.webp'
import downtimeMainProblem from '@/assets/images/main-problems/truck/downtime-main-problem.webp'
import mileageMainProblem from '@/assets/images/main-problems/truck/mileage-main-problem.webp'
import truckPhoneMainProblem from '@/assets/images/main-problems/truck/truck-phone-main-problem.webp'

import onlineMonitoring from '@/assets/images/possibilities/online-monitoring.webp'
import geozon from '@/assets/images/possibilities/geozon.webp'
import reports from '@/assets/images/possibilities/reports.webp'
import notifications from '@/assets/images/possibilities/notifications.webp'

import tracker from '@/assets/images/structure/fuel/tracker-fuel-strucutre.webp'
import dut from '@/assets/images/fuel-control-variant/dut-fuel-control-variant.webp'
import system from '@/assets/images/structure/fuel/system-fuel-strucutre.webp'
import differentEquipments from '@/assets/images/structure/different-equipments.webp'
import structureReports from '@/assets/images/structure/fuel/reports-fuel-strucutre.webp'
import fuelControl from '@/assets/images/possibilities/fuel-control.webp'
import drivers from '@/assets/images/possibilities/possibilities-drivers.webp'
import basicTracker from '@/assets/images/structure/installation-gps-tracker/basic-tracker.webp'
import canTracker from '@/assets/images/structure/installation-gps-tracker/can-tracker.webp'
import temperatureAndGerkon from '@/assets/images/structure/temp-gerkon.webp'

import routesTruckProblem from '@/assets/images/problems/truck/routes-truck-problem.webp'
import cargoTruckProblem from '@/assets/images/problems/truck/cargo-truck-problems.webp'
import downtimeTruckProblem from '@/assets/images/problems/truck/downtime-truck-problems.webp'
import driversTruckProblem from '@/assets/images/problems/truck/drivers-truck-problems.webp'
import fuelTruckProblem from '@/assets/images/problems/truck/fuel-truck-problems.webp'
import mileageTruckProblem from '@/assets/images/problems/truck/mileage-truck-problem.webp'

export const heroContent = {
  title: (
    <>
      Мониторинг грузового транспорта
      <span className="hero__accent"> ГЛОНАСС/GPS под ключ</span>
    </>
  ),
  description: (
    <>
      Установим ГЛОНАСС на грузовой автомобиль, подключим GPS трекер, датчики
      топлива, температуры и систему отслеживания грузового транспорта для
      контроля рейсов, маршрутов и расходов
    </>
  ),
  items: [
    'Контроль грузовых автомобилей 24/7 на онлайн-карте',
    'ГЛОНАСС/GPS трекеры для грузовиков, фур и тягачей',
    'Мониторинг грузоперевозок, маршрутов, стоянок и пробега',
    'Отчеты по топливу, рейсам, водителям и работе автопарка',
  ],
  image: {
    src: '/src/assets/images/truck-main.webp',
    alt: 'Мониторинг грузового транспорта ГЛОНАСС/GPS',
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

export const truckProblems = {
  title: 'Какие задачи решает контроль грузового транспорта',
  titleId: 'problems-title',
  badgeIcon: 'alert',
  actionTitle:
    'Контроль грузового транспорта помогает видеть рейсы, простои, отклонения и потери',
  imageClassName: 'transport-problem-image',
  items: [
    {
      title: 'Нарушение маршрутов',
      description:
        'Фиксирует отклонения от маршрута, лишние заезды и остановки',
      badgeText: 'Отклонения в рейсе',
      imageSrc: routesTruckProblem,
      imageWidth: 205,
      imageHeight: 154,
      variant: 'yellow',
    },
    {
      title: 'Лишний пробег',
      description:
        'GPS мониторинг показывает холостой пробег и поездки вне работы',
      badgeText: 'Рост расходов',
      imageSrc: mileageTruckProblem,
      imageWidth: 205,
      imageHeight: 154,
      variant: 'blue',
    },
    {
      title: 'Простои и опоздания',
      description: 'Видно, где стоит грузовик и как простой влияет на доставку',
      badgeText: 'Срыв сроков',
      imageSrc: downtimeTruckProblem,
      imageWidth: 205,
      imageHeight: 154,
      variant: 'gray',
    },
    {
      title: 'Сливы и перерасход топлива',
      description: 'Фиксирует заправки, сливы, расход и остаток в баке',
      badgeText: 'Потери топлива',
      imageSrc: fuelTruckProblem,
      imageWidth: 205,
      imageHeight: 154,
      variant: 'dark',
    },
    {
      title: 'Нет данных по работе водителей',
      description: 'Показывает скорость, маневры, простои и соблюдение заданий',
      badgeText: 'Слабая дисциплина',
      imageSrc: driversTruckProblem,
      imageWidth: 205,
      imageHeight: 154,
      variant: 'yellow',
    },
    {
      title: 'Не видно местонахождение груза',
      description:
        'Трекер передает координаты, маршрут и события без звонков водителю',
      badgeText: 'Нет прозрачности',
      imageSrc: cargoTruckProblem,
      imageWidth: 205,
      imageHeight: 154,
      variant: 'blue',
    },
  ],
}

export const truckStructures = {
  title: 'Как работает система мониторинга грузового транспорта',
  titleId: 'truck-structures-title',
  items: [
    {
      title: 'GPS/ГЛОНАСС трекер',
      description:
        'Устанавливается на грузовой автомобиль и передает координаты, скорость, пробег, зажигание и события в систему',
      image: tracker,
      imageWidth: 211,
      imageHeight: 215,
      variant: 'yellow',
    },
    {
      title: 'Датчики и CAN-шина',
      description:
        'Подключаем контроль топлива, температуры, дверей, моточасов и штатных параметров грузового авто',
      image: differentEquipments,
      imageWidth: 381,
      imageHeight: 208,
      variant: 'gray',
    },
    {
      title: 'Онлайн-платформа',
      description:
        'Личный кабинет показывает транспорт на карте, историю движения, рейсы, геозоны и уведомления по событиям',
      image: system,
      imageWidth: 300,
      imageHeight: 237,
      variant: 'gray',
    },
    {
      title: 'Отчеты и аналитика',
      description:
        'Руководитель получает данные по пробегу, стоянкам, топливу, графику рейсов и работе водителей',
      image: structureReports,
      imageWidth: 306,
      imageHeight: 171,
      variant: 'blue',
    },
  ],
  result: {
    description:
      'Данные собираются автоматически, поэтому контроль грузоперевозок не зависит от ручных отчетов и звонков водителям',
    items: [
      'Местоположение грузовика онлайн',
      'История маршрутов и остановок',
      'Отчеты по топливу, пробегу и рейсам',
    ],
  },
}

export const truckPossibilities = {
  title: 'Возможности GPS мониторинга грузового транспорта',
  titleId: 'truck-possibilities-title',
  items: [
    {
      title: 'Онлайн-контроль автомобиля',
      description:
        'Отслеживайте грузовой автомобиль на карте в режиме реального времени',
      image: onlineMonitoring,
    },
    {
      title: 'Геозоны и маршруты',
      description:
        'Контролируйте заезды на склады, маршруты, стоянки и нецелевые поездки',
      image: geozon,
    },
    {
      title: 'Контроль топлива и датчики',
      description:
        'Подключайте ДУТ, CAN и другие датчики для контроля расхода, заправок и сливов',
      image: fuelControl,
    },
    {
      title: 'Контроль водителей',
      description:
        'Анализируйте скорость, резкие маневры, простои и стиль вождения',
      image: drivers,
    },
    {
      title: 'Отчеты и аналитика',
      description:
        'Получайте отчеты по поездкам, пробегу, моточасам, рейсам и работе грузового автопарка',
      image: reports,
    },
    {
      title: 'Уведомления и события',
      description:
        'Настраивайте уведомления о простоях, выезде из геозон, потере связи и нарушениях маршрута',
      image: notifications,
    },
  ],
}

export const truckEquipments = {
  title: 'Оборудование ГЛОНАСС для грузовых автомобилей',
  titleId: 'truck-equipments-title',
  items: [
    {
      title: 'Базовый GPS/ГЛОНАСС трекер',
      description:
        'Подходит для контроля местоположения, маршрутов, скорости, пробега и стоянок грузового автомобиля',
      image: basicTracker,
      imageWidth: 312,
      imageHeight: 208,
      variant: 'yellow',
    },
    {
      title: 'Трекер с CAN-шиной',
      description:
        'Получает штатные данные грузовика: пробег, зажигание, моточасы, ошибки, состояние ТС и расход топлива',
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
      title: 'Датчики температуры и дверей',
      description:
        'Подходят для рефрижераторов, фургонов и перевозок, где важно контролировать груз и условия доставки',
      image: temperatureAndGerkon,
      imageWidth: 312,
      imageHeight: 208,
      variant: 'blue',
    },
  ],
}

export const truckSteps = {
  title: 'Установка ГЛОНАСС на грузовой автомобиль в четыре шага',
  titleId: 'steps-title',
  items: [
    {
      step: '1',
      title: 'Аудит задачи',
      description:
        'Уточняем тип грузового авто, количество машин, маршруты, требования к топливу, температуре, CAN и отчетам',
      time: '5-10 минут',
    },
    {
      step: '2',
      title: 'Подбор комплекта',
      description:
        'Подбираем трекер для грузового автомобиля, датчики, SIM-карту, тариф мониторинга и рассчитываем стоимость',
      time: 'В день обращения',
    },
    {
      step: '3',
      title: 'Монтаж оборудования',
      description:
        'Устанавливаем ГЛОНАСС на грузовое авто, подключаем питание, CAN, датчики топлива, температуры или дверей',
      time: '1-4 часа',
    },
    {
      step: '4',
      title: 'Настройка системы',
      description:
        'Добавляем транспорт в систему мониторинга, проверяем координаты, отчеты, уведомления и обучаем сотрудников',
      time: 'В день монтажа',
    },
  ],
  result: {
    title: 'Грузовой транспорт готов к мониторингу',
    description:
      'Диспетчер видит грузовики онлайн, руководитель получает отчеты, а автопарк работает с понятными данными по рейсам, пробегу и топливу',
  },
}

export const truckIndustries = {
  title: 'Для какого грузового транспорта подходит мониторинг',
  titleId: 'industries-title',
  items: [
    {
      title: 'Тягачи',
      image: haulerTransport,
      imageWidth: 407,
      imageHeight: 289,
      variant: 'featured',
    },
    {
      title: 'Фуры',
      image: truckTransport,
      imageWidth: 286,
      imageHeight: 171,
      variant: 'wide-top',
    },
    {
      title: 'Рефрижераторы',
      image: refTransport,
      imageWidth: 288,
      imageHeight: 171,
      variant: 'wide-middle',
    },
    {
      title: 'Самосвалы',
      image: dumpTransport,
      imageWidth: 240,
      imageHeight: 209,
      variant: 'compact-start',
    },
    {
      title: 'Манипуляторы',
      image: manipulatorTransport,
      imageWidth: 244,
      imageHeight: 209,
      variant: 'compact-center',
    },
    {
      title: 'Бензовозы',
      image: tankerTransport,
      imageWidth: 244,
      imageHeight: 199,
      variant: 'compact-end',
    },
  ],
  actionItems: {
    actionTitle: 'Нет вашего типа транспорта?',
    actionDescription:
      'Подберем систему контроля грузового транспорта под ваши маршруты, грузы и требования к отчетности',
  },
}

export const truckMainProblems = {
  title: 'Что получает владелец грузового автопарка',
  titleId: 'truck-main-problems-title',
  items: [
    {
      title: 'Контроль грузовых автомобилей 24/7',
      description:
        'Автомобили видны на карте, а история маршрутов, стоянок и событий доступна в личном кабинете',
      image: onlineControlMainProblem,
      imageWidth: 265,
      imageHeight: 194,
      variant: 'yellow',
    },
    {
      title: 'Снижение лишнего пробега',
      description:
        'Система показывает нецелевые рейсы, отклонения от маршрута, холостой пробег и длительные простои',
      image: mileageMainProblem,
      imageWidth: 265,
      imageHeight: 177,
      variant: 'blue',
    },
    {
      title: 'Контроль топлива и сливов',
      description:
        'Отчеты помогают сравнивать расход по рейсам, видеть заправки, подозрительные сливы и перерасход',
      image: fuelControlMainProblem,
      imageWidth: 265,
      imageHeight: 177,
      variant: 'blue',
    },
    {
      type: 'action',
    },
    {
      title: 'Меньше простоев и срывов рейсов',
      description:
        'Диспетчер быстрее реагирует на задержки, потерю связи, нарушение геозон и отклонение от графика',
      image: downtimeMainProblem,
      imageWidth: 265,
      imageHeight: 167,
      variant: 'gray',
    },
  ],
  actionElements: {
    actionItems: [
      'Онлайн-карта',
      'История маршрутов',
      'Уведомления о событиях',
    ],
    actionTitle: 'Прозрачность грузоперевозок',
    actionDescription:
      'Настроим мониторинг грузоперевозок под задачи вашего автопарка:',
    actionImage: truckPhoneMainProblem,
  },
}

export const truckActionBanner = {
  title: 'Рассчитаем стоимость ГЛОНАСС на грузовой автомобиль',
  description:
    'Подберем комплект под задачу: GPS/ГЛОНАСС трекер, датчики, SIM-карту, монтаж и тариф мониторинга. Стоимость установки ГЛОНАСС на грузовые автомобили зависит от оборудования, количества машин и нужных отчетов.',
}

export const truckFaq = {
  title: 'Вопросы про мониторинг грузового транспорта',
  items: [
    {
      question: 'Что входит в мониторинг грузового транспорта?',
      answer:
        'В базовый мониторинг грузового транспорта входит трекер для грузового автомобиля, SIM-карта, подключение к онлайн-карте, настройка событий и отчетов по маршрутам, стоянкам, пробегу и зажиганию. Если нужен расширенный контроль грузового транспорта, добавляем ДУТ, CAN-шину, датчики температуры, дверей и тревожные уведомления.',
    },
    {
      question: 'Сколько стоит установить ГЛОНАСС на грузовой автомобиль?',
      answer:
        'Стоимость ГЛОНАСС на грузовой автомобиль зависит от модели трекера, способа монтажа, тарифа мониторинга, количества машин и дополнительных датчиков. Базовый комплект для отслеживания маршрутов считается отдельно от решения с контролем топлива, CAN и температурой. Для автопарка стоимость установки ГЛОНАСС на грузовые автомобили обычно рассчитывается по количеству ТС и единому набору отчетов.',
    },
    {
      question: 'От чего зависит цена ГЛОНАСС на грузовик?',
      answer:
        'Цена ГЛОНАСС на грузовик меняется из-за типа автомобиля, места установки, доступа к питанию и CAN, необходимости сверлить бак под датчик уровня топлива, подключать рефрижератор или контролировать двери. Поэтому стоимость установки ГЛОНАСС на грузовое авто лучше считать после короткого аудита: один и тот же трекер может решать простое отслеживание или полноценный контроль расходов.',
    },
    {
      question: 'Можно ли установить ГЛОНАСС на грузовые автомобили с выездом?',
      answer:
        'Да, монтаж можно выполнить на вашей территории: в автопарке, гараже, сервисной зоне или на стоянке техники. Это удобно, если нужно установить ГЛОНАСС на грузовой автомобиль без перегона на сервис или подключить сразу несколько грузовых машин в один день.',
    },
    {
      question:
        'Какие данные показывает система контроля грузового транспорта?',
      answer:
        'Система контроля грузового транспорта показывает местоположение машины, маршрут, скорость, пробег, стоянки, зажигание, моточасы, посещение геозон и историю рейсов. В отчетах можно смотреть контроль грузовых автомобилей по дням, водителям, рейсам, расходу топлива, нарушениям маршрута и простоям.',
    },
    {
      question:
        'Чем GPS мониторинг грузового транспорта отличается от обычного маяка?',
      answer:
        'Обычный маяк чаще нужен для поиска автомобиля и периодической передачи координат. GPS мониторинг грузового транспорта работает как рабочий инструмент диспетчера: хранит историю движения, считает пробег и стоянки, фиксирует события, строит отчеты и помогает контролировать выполнение грузоперевозки без постоянных звонков водителю.',
    },
    {
      question: 'Для каких грузовых автомобилей подходит система отслеживания?',
      answer:
        'Система отслеживания грузового транспорта подходит для фур, тягачей, рефрижераторов, самосвалов, бензовозов, манипуляторов, фургонов и городских доставочных машин. ГЛОНАСС для грузовых автомобилей настраивается под разные задачи: контроль маршрутов, мониторинг грузоперевозок, топливо, температуру, моточасы или работу спецоборудования.',
    },
    {
      question:
        'Нужен ли датчик топлива, если уже есть ГЛОНАСС на грузовое авто?',
      answer:
        'Если задача только видеть автомобиль на карте, достаточно трекера. Если важно контролировать сливы, заправки, фактический расход и остатки в баке, к ГЛОНАСС на грузовое авто лучше добавить датчик уровня топлива или получить часть данных из CAN-шины. Для топливной аналитики ДУТ обычно точнее штатных расчетов.',
    },
    {
      question:
        'Можно ли подключить уже установленный трекер для грузового автомобиля?',
      answer:
        'Да, если устройство совместимо с платформой мониторинга и стабильно передает нужные параметры. Мы проверим модель, прошивку, SIM-карту, частоту отправки координат и набор доступных данных. Если старый трекер для грузового автомобиля не подходит для отчетов или датчиков, предложим замену на совместимый GPS/ГЛОНАСС терминал.',
    },
    {
      question: 'Как быстро запускается мониторинг грузового транспорта?',
      answer:
        'Базовая установка трекера на один грузовой автомобиль обычно занимает 1-2 часа. Подключение CAN, ДУТ, температурных датчиков, дверей или дополнительного оборудования может занять несколько часов. После монтажа проверяем координаты, события, отчеты и доступ для диспетчера.',
    },
    {
      question:
        'Можно ли смотреть GPS мониторинг грузового транспорта с телефона?',
      answer:
        'Да, доступ возможен с компьютера, планшета и телефона. Руководитель или диспетчер может смотреть карту, текущие статусы, уведомления, маршруты и отчеты по рейсам. Для водителей и ответственных сотрудников можно настроить отдельные уровни доступа.',
    },
  ],
}

export const truckSeoText = {
  title: 'Мониторинг грузового транспорта и ГЛОНАСС для грузовых автомобилей',
  firstParagraph:
    'Мониторинг грузового транспорта нужен автопаркам, которые хотят видеть машины, рейсы и расходы в одной системе. ГЛОНАСС на грузовой автомобиль или GPS трекер передает координаты, скорость, пробег, зажигание и события в онлайн-платформу. Диспетчер получает карту и уведомления, а руководитель видит отчеты по маршрутам, стоянкам, водителям, топливу и выполнению грузоперевозок.',
  secondParagraph:
    'ГЛОНАСС для грузовых автомобилей применяют в междугородних перевозках, городской доставке, строительстве, торговле, сервисных и специальных автопарках. Система отслеживания грузового транспорта помогает контролировать отклонения от маршрута, простои, нецелевые поездки, заправки, сливы и работу оборудования. Состав решения подбирается под задачу: от базового контроля грузовых автомобилей до мониторинга грузоперевозок с ДУТ, CAN, температурой и интеграциями.',
  items: [
    {
      label: 'ГЛОНАСС на грузовой автомобиль.',
      description:
        'Подбираем трекер, способ подключения и тариф под конкретное ТС: грузовик, тягач, фуру, рефрижератор, самосвал или бензовоз.',
    },
    {
      label: 'GPS мониторинг грузового транспорта.',
      description:
        'Показывает автомобили на карте, хранит историю движения, фиксирует остановки, геозоны, пробег, скорость и события в рейсе.',
    },
    {
      label: 'Система контроля грузового транспорта.',
      description:
        'Объединяет трекеры, датчики, отчеты и уведомления, чтобы диспетчер контролировал рейсы, а руководитель видел отклонения и расходы.',
    },
    {
      label: 'Трекер для грузового автомобиля.',
      description:
        'Передает координаты, зажигание, питание, моточасы и данные с дополнительных датчиков; подходит для контроля одного грузовика или автопарка.',
    },
    {
      label: 'Стоимость ГЛОНАСС на грузовой автомобиль.',
      description:
        'Цена зависит от оборудования, монтажа, тарифа, количества машин и задач: простое отслеживание дешевле комплекта с топливом, CAN и температурой.',
    },
    {
      label: 'Мониторинг грузоперевозок.',
      description:
        'Помогает контролировать выполнение рейсов, прибытие на точки, простои, отклонения от маршрута, состояние груза и работу водителей.',
    },
  ],
}

export const truckTagTiles = [
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
    label: 'Адвантум',
    href: '/advantum',
  },
  {
    label: 'РНИС',
    href: '/rnis',
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
