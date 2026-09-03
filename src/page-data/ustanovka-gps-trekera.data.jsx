import hero1cImage from '@/assets/images/hero-1c.webp'

import basicTracker from '@/assets/images/structure/installation-gps-tracker/basic-tracker.webp'
import canTracker from '@/assets/images/structure/installation-gps-tracker/can-tracker.webp'
import cigaretteTracker from '@/assets/images/structure/installation-gps-tracker/prikur-tracker.webp'
import lighthouse from '@/assets/images/structure/installation-gps-tracker/mayak-xkeeper.webp'

import logistic from '@/assets/images/industries/logistic.webp'
import agro from '@/assets/images/industries/agro.webp'
import building from '@/assets/images/industries/building.webp'
import company from '@/assets/images/industries/company.webp'
import delivery from '@/assets/images/industries/delivery.webp'
import taxi from '@/assets/images/industries/industries-taxi.webp'

import onlineMonitoring from '@/assets/images/possibilities/online-monitoring.webp'
import geozon from '@/assets/images/possibilities/geozon.webp'
import drivers from '@/assets/images/possibilities/possibilities-drivers.webp'
import fuelControl from '@/assets/images/possibilities/fuel-control.webp'
import reports from '@/assets/images/possibilities/reports.webp'
import notifications from '@/assets/images/possibilities/notifications.webp'

import hiddenInstallation from '@/assets/images/problems/install-gps-tracker/hidden-installation.webp'
import obdInstallation from '@/assets/images/problems/install-gps-tracker/obd-installation.webp'
import canInstallation from '@/assets/images/problems/install-gps-tracker/can-installation.webp'
import magnetInstallation from '@/assets/images/problems/install-gps-tracker/magnet-installation.webp'

import selection from '@/assets/images/structure/selection.webp'
import install from '@/assets/images/structure/structure-installation.webp'
import staffTraining from '@/assets/images/structure/staff-training.webp'
import settings from '@/assets/images/structure/settings.webp'

export const heroContent = {
  title: (
    <>
      Установка GPS трекера на автомобиль
      <span className="hero__accent"> под ключ</span>
    </>
  ),
  description: (
    <>
      Подберём оборудование, выполним монтаж и настроим GPS-мониторинг для
      легковых авто, грузовиков и спецтехники по{' '}
      <span data-js-utm-replace-text="">всей России</span>
    </>
  ),
  items: [
    'Установка GPS на авто без вмешательства в штатные системы',
    'Отслеживание маршрутов, стоянок, скорости и пробега 24/7',
    'Топливо, зажигание, температура и CAN',
    'Цена установки — под задачу и транспорт',
  ],
  image: {
    src: '/src/assets/images/ustanovka-gps-tracker-main.webp',
    alt: 'Установка GPS трекера на автомобиль',
    width: 575,
    height: 383,
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

export const equipmentTypes = {
  title: 'Какие GPS трекеры и модули устанавливаем',
  titleId: 'equipment-types-title',
  items: [
    {
      title: 'Базовые GPS трекеры',
      description:
        'Для контроля местоположения, маршрутов, скорости, пробега и стоянок автомобиля',
      image: basicTracker,
      imageWidth: 322,
      imageHeight: 208,
      variant: 'yellow',
    },
    {
      title: 'GPS трекеры с CAN-шиной',
      description:
        'Подключаем к CAN для контроля пробега, зажигания, моточасов, состояния ТС и расхода топлива',
      image: canTracker,
      imageWidth: 312,
      imageHeight: 208,
      variant: 'gray',
    },
    {
      title: 'GPS маяки',
      description:
        'Ставим скрытно на машину, прицеп или технику для периодического контроля координат',
      image: lighthouse,
      imageWidth: 261,
      imageHeight: 208,
      variant: 'gray',
    },
    {
      title: 'GPS трекеры в прикуриватель',
      description:
        'Работают от штатной розетки 12/24 В и подходят для быстрого запуска мониторинга без сложного монтажа',
      image: cigaretteTracker,
      imageWidth: 362,
      imageHeight: 135,
      variant: 'blue',
    },
  ],
}

export const steps = {
  title: 'Как проходит установка GPS трекера на автомобиль',
  titleId: 'steps-title',
  items: [
    {
      step: '1',
      title: 'Заявка',
      description:
        'Уточняем, какой транспорт нужно оборудовать, где он находится и какие данные важно получать',
      time: '5 – 10 минут',
    },
    {
      step: '2',
      title: 'Подбор решения',
      description:
        'Подбираем GPS трекер, датчики, тариф мониторинга и называем цену оборудования с установкой',
      time: 'В день обращения',
    },
    {
      step: '3',
      title: 'Выезд и установка',
      description:
        'Приезжаем на вашу площадку, монтируем устройство, проверяем связь и выдаём доступ',
      time: '30 минут – 2 часа',
    },
  ],
  result: {
    title: 'Поставим GPS трекер на машину в день обращения',
    description:
      'После монтажа автомобиль сразу отображается в системе мониторинга',
  },
}

export const installationTrackerIndustries = {
  title: 'Для какого транспорта подходит установка GPS трекеров',
  titleId: 'industries-title',
  items: [
    {
      title: 'Грузовики и тягачи',
      image: logistic,
      imageWidth: 407,
      imageHeight: 289,
      variant: 'featured',
    },
    {
      title: 'Коммерческий транспорт',
      image: delivery,
      imageWidth: 286,
      imageHeight: 171,
      variant: 'wide-top',
    },
    {
      title: 'Строительная спецтехника',
      image: building,
      imageWidth: 288,
      imageHeight: 171,
      variant: 'wide-middle',
    },
    {
      title: 'Арендные автомобили',
      image: taxi,
      imageWidth: 240,
      imageHeight: 209,
      variant: 'compact-start',
    },
    {
      title: 'Автопарки компаний',
      image: company,
      imageWidth: 244,
      imageHeight: 209,
      variant: 'compact-center',
    },
    {
      title: 'Сельхозтехника',
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
  title: 'Рассчитаем цену установки GPS трекера под ваш автомобиль',
  description:
    'Подберём GPS-модуль, датчики и схему подключения под легковой автомобиль, грузовик, автобус или спецтехнику. Выполним установку на вашей территории, настроим карту, отчёты и уведомления для контроля транспорта.',
}

export const faq = {
  title: 'Вопросы про установку GPS трекера на автомобиль',
  items: [
    {
      question: 'Сколько стоит установка GPS трекера на автомобиль?',
      answer:
        'Цена установки GPS трекера на автомобиль зависит от модели устройства, способа подключения, количества машин и дополнительных датчиков. После короткой консультации рассчитаем стоимость оборудования, монтажа и тарифа мониторинга.',
    },
    {
      question: 'Какой GPS трекер лучше поставить на машину?',
      answer:
        'Выбор зависит от задачи: для базового контроля подойдёт проводной GPS трекер, для быстрого запуска — устройство в OBD или прикуриватель, для расширенных данных — модель с CAN, для скрытого контроля — автономный GPS маяк.',
    },
    {
      question: 'Что входит в установку GPS трекера под ключ?',
      answer:
        'В услугу входит подбор оборудования, монтаж GPS трекера на авто, подключение питания и датчиков, настройка передачи данных, добавление машины в систему мониторинга и проверка отчётов.',
    },
    {
      question: 'Можно ли установить GPS трекер с выездом на площадку?',
      answer:
        'Да, инженер может приехать в автопарк, гараж, сервисную зону или на стоянку техники. Это удобно, когда нужно поставить GPS на машину без перегонки транспорта в сервис.',
    },
    {
      question: 'Сколько времени занимает установка GPS трекера на авто?',
      answer:
        'Базовая установка GPS трекера обычно занимает от 30 минут до 2 часов на один автомобиль. Если подключаются датчики топлива, CAN-шина или дополнительное оборудование, время согласуем после осмотра транспорта.',
    },
    {
      question: 'На какой транспорт можно поставить GPS трекер?',
      answer:
        'Устанавливаем GPS на легковые автомобили, грузовики, автобусы, такси, курьерские машины, строительную, коммунальную, сельскохозяйственную и другую спецтехнику.',
    },
    {
      question: 'Можно ли установить трекер на автомобиль скрытно?',
      answer:
        'Да, место монтажа подбирается так, чтобы устройство стабильно принимало сигнал и не мешало штатной электрике. Для скрытого контроля можно использовать проводной трекер или автономный GPS маяк.',
    },
    {
      question: 'Можно ли подключить GPS-датчик топлива или CAN?',
      answer:
        'Да, вместе с трекером можно подключить датчик уровня топлива, CAN-шину, зажигание, датчик температуры, тревожную кнопку или реле блокировки двигателя.',
    },
    {
      question: 'Можно ли перенести GPS трекер на другой автомобиль?',
      answer:
        'Да, устройство можно демонтировать с одной машины и установить на другую. После переноса выполняется повторная настройка, проверка связи и корректной передачи данных.',
    },
    {
      question: 'Что будет доступно после установки GPS трекера?',
      answer:
        'Вы сможете видеть автомобиль на карте, историю маршрутов, скорость, пробег, остановки, нарушения, события по зажиганию и другие параметры. Набор данных зависит от выбранного оборудования и подключенных датчиков.',
    },
  ],
}

export const seoText = {
  title: 'Установка GPS трекера: что получает владелец автопарка',
  firstParagraph:
    'Установка GPS трекера на автомобиль нужна компаниям, которые хотят видеть транспорт на карте, контролировать маршруты, пробег, скорость, остановки и работу водителей без ручных звонков. На машину устанавливается навигационный терминал или GPS-модуль, при необходимости подключаются датчики топлива, зажигания, температуры и CAN-шина, после чего данные передаются в онлайн-систему мониторинга.',
  secondParagraph:
    'Если нужно установить трекер на автомобиль, важно не просто купить устройство, а правильно выбрать место монтажа, схему питания и набор контролируемых параметров. Грамотная установка GPS на авто помогает избежать обрывов связи, ошибок в отчётах и конфликтов со штатной электрикой. После запуска вы получаете готовую систему для контроля автопарка, снижения лишнего пробега и анализа работы техники.',
  items: [
    {
      label: 'Контроль транспорта онлайн.',
      description:
        'На карте видно местоположение машин, историю маршрутов, скорость, остановки и пробег.',
    },
    {
      label: 'Установка на разные авто.',
      description:
        'Ставим трекеры на легковые машины, грузовики, автобусы, спецтехнику и коммерческий транспорт.',
    },
    {
      label: 'Прозрачная цена.',
      description:
        'Стоимость зависит от оборудования, датчиков, количества машин и формата выезда монтажника.',
    },
    {
      label: 'Подключение датчиков.',
      description:
        'К GPS трекеру можно подключить контроль топлива, зажигание, температуру, CAN и другие параметры.',
    },
    {
      label: 'Отчёты для руководителя.',
      description:
        'Система показывает рейсы, пробег, простои, моточасы, нарушения и отклонения от маршрута.',
    },
    {
      label: 'Выездная установка.',
      description:
        'Монтаж можно выполнить на вашей территории, чтобы не останавливать работу автопарка.',
    },
  ],
}

export const tagTiles = [
  {
    label: 'Контроль расхода топлива',
    href: '/kontrol-rashoda-topliva',
  },
  {
    label: 'Установка ГЛОНАСС',
    href: '/ustanovka-glonass',
  },
  {
    label: 'РНИС',
    href: '/rnis',
  },
  {
    label: 'Адвантум',
    href: '/advantum',
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

export const installationTrackerPossibilities = {
  title: 'Возможности системы мониторинга транспорта',
  titleId: 'installation-gps-tracker-possibilities-title',
  items: [
    {
      title: 'Онлайн-контроль автомобиля',
      description:
        'Отслеживайте местоположение машины в режиме реального времени',
      image: onlineMonitoring,
    },
    {
      title: 'Геозоны и маршруты',
      description:
        'Контролируйте заезды в зоны, отклонения от маршрута и нецелевые поездки',
      image: geozon,
    },
    {
      title: 'Контроль топлива и датчики',
      description:
        'Подключайте ДУТ, CAN и другие датчики для контроля расхода и сливов',
      image: fuelControl,
    },
    {
      title: 'Контроль водителей',
      description:
        'Анализируйте скорость, резкие манёвры, простои и соблюдение заданий',
      image: drivers,
    },
    {
      title: 'Отчёты и аналитика',
      description:
        'Получайте отчёты по поездкам, пробегу, моточасам и работе транспорта',
      image: reports,
    },
    {
      title: 'Уведомления и события',
      description:
        'Настраивайте уведомления о стоянках, выезде из геозон и потере связи',
      image: notifications,
    },
  ],
}

export const installationTrackerProblems = {
  title: 'Способы установки GPS трекера',
  titleId: 'problems-title',
  badgeIcon: 'checkmark',
  actionTitle:
    'Подберём способ установки под задачу, бюджет и требования к контролю',
  items: [
    {
      title: 'Скрытая установка',
      description:
        'Проводной GPS трекер монтируется под панель и подключается к питанию автомобиля',
      badgeText: 'Для автопарков',
      imageSrc: hiddenInstallation,
      imageWidth: 205,
      imageHeight: 136,
      variant: 'yellow',
    },
    {
      title: 'Подключение через OBD',
      description:
        'Быстрый вариант, когда нужно поставить трекер на машину без сложного монтажа',
      badgeText: 'Быстрый запуск',
      imageSrc: obdInstallation,
      imageWidth: 205,
      imageHeight: 136,
      variant: 'blue',
    },
    {
      title: 'Подключение с CAN',
      description:
        'GPS модуль подключается к бортовой сети для расширенных данных по работе транспорта',
      badgeText: 'Больше данных',
      imageSrc: canInstallation,
      imageWidth: 205,
      imageHeight: 136,
      variant: 'gray',
    },
    {
      title: 'GPS маяк на магнитах',
      description:
        'Автономный маяк подходит для прицепов, аренды, резервного контроля и редких поездок',
      badgeText: 'Без проводов',
      imageSrc: magnetInstallation,
      imageWidth: 205,
      imageHeight: 136,
      variant: 'dark',
    },
  ],
}

export const structures = {
  title: 'Что входит в установку GPS трекера',
  titleId: 'installation-tracker-structure-title',
  items: [
    {
      title: 'Подбор оборудования',
      description:
        'Подбираем GPS трекер, SIM-карту, датчики и тариф мониторинга под тип автомобиля',
      image: selection,
      imageWidth: 250,
      imageHeight: 220,
      variant: 'yellow',
    },
    {
      title: 'Монтаж GPS трекера',
      description:
        'Устанавливаем устройство, подключаем питание, зажигание, CAN или дополнительные датчики',
      image: install,
      imageWidth: 250,
      imageHeight: 167,
      variant: 'gray',
    },
    {
      title: 'Настройка системы',
      description:
        'Добавляем транспорт на карту, настраиваем события, уведомления, отчёты и права пользователей',
      image: settings,
      imageWidth: 250,
      imageHeight: 150,
      variant: 'blue',
    },
    {
      title: 'Обучение сотрудников',
      description:
        'Показываем, как смотреть машину онлайн, строить маршруты и контролировать нарушения',
      image: staffTraining,
      imageWidth: 250,
      imageHeight: 220,
      variant: 'dark',
    },
  ],
}
