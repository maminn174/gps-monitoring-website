import dut from '@/assets/images/structure/fuel/dut-fuel-strucutre.webp'
import tracker from '@/assets/images/structure/fuel/tracker-fuel-strucutre.webp'
import system from '@/assets/images/structure/fuel/system-fuel-strucutre.webp'
import reports from '@/assets/images/structure/fuel/reports-fuel-strucutre.webp'

import logistic from '@/assets/images/industries/logistic.webp'
import agro from '@/assets/images/industries/agro.webp'
import building from '@/assets/images/industries/building.webp'
import company from '@/assets/images/industries/company.webp'
import delivery from '@/assets/images/industries/delivery.webp'
import taxi from '@/assets/images/industries/industries-taxi.webp'

import fuelDrains from '/src/assets/images/problems/fuel/fuel-drains.webp'
import fuelOverspending from '/src/assets/images/problems/fuel/fuel-overspending.webp'
import leftFlights from '/src/assets/images/problems/fuel/left-flights.webp'
import noTransparency from '/src/assets/images/problems/fuel/no-transparency.webp'

export const heroContent = {
  title: (
    <>
      Контроль расхода топлива и мониторинг транспорта
      <span className="hero__accent"> под ключ</span>
    </>
  ),
  description: (
    <>
      Исключите сливы и хищения топлива и сократите расходы до 30% с системой
      ГЛОНАСС по <span data-js-utm-replace-text="">всей России</span>
    </>
  ),
  items: [
    'Контроль заправок и сливов',
    'Исключение сливов и перерасхода топлива',
    'Полная прозрачность работы транспорта',
  ],
  image: {
    src: '/src/assets/images/kontrol-rashoda-topliva-main.webp',
    alt: 'Контроль расхода топлива',
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

export const fuelIntegrations = [
  {
    variant: 'fuel',
    iconId: 'canister',
    text: 'Экономия до 30%',
  },
]

export const structures = {
  title: 'Как работает система контроля топлива и\u00a0мониторинга транспорта',
  titleId: 'fuel-title',
  items: [
    {
      title: 'Датчик уровня топлива',
      description:
        'Устанавливается в бак и передаёт точные данные об остатке, заправках и сливах',
      image: dut,
      imageWidth: 235,
      imageHeight: 208,
      variant: 'yellow',
    },
    {
      title: 'GPS/ГЛОНАСС трекер',
      description:
        'Фиксирует местоположение, пробег, скорость, маршруты и передаёт данные в систему мониторинга',
      image: tracker,
      imageWidth: 211,
      imageHeight: 215,
      variant: 'gray',
    },
    {
      title: 'Система мониторинга топлива',
      description:
        'Сопоставляет расход топлива с пробегом, нормами, маршрутами и работой двигателя',
      image: system,
      imageWidth: 300,
      imageHeight: 237,
      variant: 'gray',
    },
    {
      title: 'Отчёты и контроль',
      description:
        'Показывают расход топлива автомобиля, отклонения, заправки и возможные сливы',
      image: reports,
      imageWidth: 306,
      imageHeight: 171,
      variant: 'blue',
    },
  ],
  result: {
    description:
      'Данные фиксируются автоматически, поэтому контроль топлива на транспорте не зависит от водителя и ручных отчётов',
    items: [
      'Уровень топлива в баке',
      'Пробег и движение транспорта',
      'Отчёты по расходу топлива',
    ],
  },
}

export const steps = {
  title: 'Установка контроля расхода топлива в четыре шага',
  titleId: 'steps-title',
  items: [
    {
      step: '1',
      title: 'Заявка и аудит автопарка',
      description:
        'Уточняем тип транспорта, количество баков, задачи контроля топлива, мониторинга и отчётности',
      time: '5 – 10 минут',
    },
    {
      step: '2',
      title: 'Подбор системы контроля топлива',
      description:
        'Подбираем ДУТ, GPS/ГЛОНАСС трекер, CAN-подключение и тариф мониторинга под автопарк',
      time: 'В день обращения',
    },
    {
      step: '3',
      title: 'Выезд и монтаж на авто',
      description:
        'Приезжаем на вашу территорию, устанавливаем оборудование на автомобиль, грузовик или спецтехнику',
      time: '1 – 2 часа',
    },
    {
      step: '4',
      title: 'Установка и тарировка',
      description:
        'Калибруем датчик, проверяем передачу данных, настраиваем отчёты по расходу топлива и пробегу',
      time: 'До 6 часов',
    },
  ],
  result: {
    title: 'Система контроля топлива готова к работе',
    description:
      'Вы видите топливо в баке, расход, заправки, сливы, пробег и маршруты в единой системе мониторинга.',
  },
}

export const industries = {
  title: 'Для какого транспорта подходит контроль топлива',
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
  title: 'Установим систему контроля расхода топлива в день обращения!',
  description:
    'Подберём и установим контроль топлива ГЛОНАСС/GPS на вашей территории. Настроим мониторинг транспорта, отчёты по расходу топлива, заправкам, сливам, пробегу и работе водителей.',
}

export const faq = {
  title: 'Вопросы про контроль расхода топлива',
  items: [
    {
      question: 'Что даёт система контроля расхода топлива?',
      answer:
        'Система контроля расхода топлива показывает фактический расход, уровень топлива в баке, заправки, сливы, пробег и маршруты. Руководитель видит, где возникают перерасход, отклонения от норм и нецелевое использование транспорта.',
    },
    {
      question: 'Как работает контроль топлива ГЛОНАСС/GPS?',
      answer:
        'На транспорт устанавливается GPS/ГЛОНАСС трекер и, при необходимости, датчик уровня топлива. Оборудование передаёт данные в систему мониторинга, где отображаются расход топлива, остаток в баке, заправки, сливы, пробег и маршрут автомобиля.',
    },
    {
      question: 'Что лучше установить: ДУТ, CAN или штатный датчик?',
      answer:
        'Для точного контроля топлива в баке чаще используют датчик уровня топлива ДУТ. CAN-шина подходит, когда нужно получать штатные данные автомобиля без вмешательства в бак. Подключение к штатному датчику используют для базового контроля, если его точности достаточно для ваших задач.',
    },
    {
      question:
        'Можно ли установить контроль топлива на грузовики и спецтехнику?',
      answer:
        'Да, система контроля топлива подходит для грузовиков, тягачей, автобусов, легкового коммерческого транспорта, строительной, коммунальной, сельскохозяйственной и другой спецтехники.',
    },
    {
      question: 'Сколько времени занимает установка контроля топлива?',
      answer:
        'Базовая установка GPS/ГЛОНАСС трекера обычно занимает 1-2 часа. Если требуется установка датчика уровня топлива и тарировка бака, работа может занять до 6 часов в зависимости от транспорта и количества баков.',
    },
    {
      question: 'Можно ли контролировать топливо в баке онлайн?',
      answer:
        'Да, после установки данные доступны в системе мониторинга через компьютер или мобильное устройство. Можно видеть текущий уровень топлива в баке, историю заправок, сливы, расход по маршрутам и уведомления о подозрительных событиях.',
    },
    {
      question: 'Подходит ли система контроля топлива для автопарка?',
      answer:
        'Да, решение рассчитано на автопарки любого размера. В одной системе можно контролировать расход топлива для автопарка, сравнивать автомобили между собой, анализировать пробег, маршруты, простои и работу водителей.',
    },
    {
      question: 'Можно ли объединить мониторинг транспорта и расход топлива?',
      answer:
        'Да, контроль расхода топлива и мониторинг транспорта работают в одной системе. Вы видите местоположение машин, маршруты, скорость, пробег, моточасы, остаток топлива, заправки, сливы и отчёты по расходу.',
    },
    {
      question: 'В каких регионах вы работаете?',
      answer:
        'Мы устанавливаем контроль расхода топлива по всей России. Специалисты могут выехать в автопарк, гараж, сервисную зону или на стоянку техники, чтобы не перегонять транспорт на монтаж.',
    },
    {
      question: 'Какие отчёты доступны после установки?',
      answer:
        'В системе доступны отчёты по расходу топлива, заправкам, сливам, остаткам в баке, пробегу, маршрутам, стоянкам, моточасам и отклонениям от норм. Набор отчётов настраивается под задачи компании.',
    },
  ],
}

export const seoText = {
  title: 'Почему стоит установить контроль расхода топлива?',
  firstParagraph:
    'Контроль расхода топлива помогает понять, сколько горючего фактически тратит каждая машина, где возникают перерасход, недоливы, нецелевые заправки или сливы. Данные с датчиков и навигационного оборудования поступают в систему мониторинга, где их можно сравнивать с пробегом, маршрутом, моточасами и нормами расхода по конкретному виду техники.',
  secondParagraph:
    'Такая система особенно полезна для автопарков, где топливо занимает заметную часть расходов: грузоперевозки, строительство, сельское хозяйство, доставка, спецтехника и выездной сервис. После установки контроля топлива руководитель получает прозрачные отчеты по заправкам, остаткам в баке, расходу за рейс и подозрительным операциям, а решения по экономии принимает на основе точных данных.',
  items: [
    {
      label: 'Фактический расход.',
      description:
        'Система показывает расход топлива по автомобилю, рейсу, смене, маршруту или периоду.',
    },
    {
      label: 'Заправки и сливы.',
      description:
        'Отчеты фиксируют заправки, резкие падения уровня топлива и подозрительные операции.',
    },
    {
      label: 'Сравнение с нормами.',
      description:
        'Фактические показатели можно сопоставлять с плановыми нормами и условиями работы техники.',
    },
    {
      label: 'Снижение потерь.',
      description:
        'Контроль помогает быстрее находить перерасход, лишний пробег и неэффективные маршруты.',
    },
    {
      label: 'Понятные отчеты.',
      description:
        'Доступны данные по остаткам, заправкам, расходу, пробегу, моточасам и отклонениям.',
    },
    {
      label: 'Для разной техники.',
      description:
        'Контроль топлива подходит для грузовиков, спецтехники, автобусов, фургонов и легковых авто.',
    },
  ],
}

export const tagTiles = [
  {
    label: 'Установка ГЛОНАСС',
    href: '/ustanovka-glonass',
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

export const fuelProblems = {
  title: 'Какие проблемы решает контроль расхода топлива',
  titleId: 'problems-title',
  badgeIcon: 'alert',
  actionTitle:
    'Система контроля расхода топлива делает работу транспорта прозрачной и помогает быстро находить потери',
  items: [
    {
      title: 'Сливы топлива',
      description:
        'Система фиксирует резкое снижение уровня топлива в баке и показывает время, место и автомобиль',
      badgeText: 'Потери на рейсах',
      imageSrc: fuelDrains,
      imageWidth: 205,
      imageHeight: 136,
      variant: 'yellow',
    },
    {
      title: 'Перерасход топлива',
      description:
        'Контроль расхода топлива помогает сравнивать фактический расход с нормами, пробегом и маршрутом',
      badgeText: 'Затраты без причин',
      imageSrc: fuelOverspending,
      imageWidth: 205,
      imageHeight: 136,
      variant: 'blue',
    },
    {
      title: 'Левые рейсы',
      description:
        'Мониторинг транспорта показывает нецелевые поездки, отклонения от маршрута и лишний пробег',
      badgeText: 'Лишний пробег',
      imageSrc: leftFlights,
      imageWidth: 205,
      imageHeight: 136,
      variant: 'gray',
    },
    {
      title: 'Нет прозрачности по автопарку',
      description:
        'Без системы контроля топлива сложно понять, где возникают сливы, перерасход и простои',
      badgeText: 'Нет точной аналитики',
      imageSrc: noTransparency,
      imageWidth: 205,
      imageHeight: 136,
      variant: 'dark',
    },
  ],
}
