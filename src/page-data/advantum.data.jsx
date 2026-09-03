import x5 from '@/assets/images/needAdvantum/x5.webp'
import metro from '@/assets/images/needAdvantum/metro.webp'
import auchan from '@/assets/images/needAdvantum/auchan.webp'
import ozon from '@/assets/images/needAdvantum/ozon.webp'
import ref from '@/assets/images/needAdvantum/ref.webp'
import basic from '@/assets/images/needAdvantum/basic.webp'

import onlineMonitoring from '@/assets/images/possibilities/online-monitoring.webp'
import geozon from '@/assets/images/possibilities/geozon.webp'
import autoEvents from '@/assets/images/possibilities/advantum/auto-events.webp'
import doorsAndTemperature from '@/assets/images/possibilities/advantum/doors-and-temperature.webp'
import reports from '@/assets/images/possibilities/reports.webp'
import notifications from '@/assets/images/possibilities/notifications.webp'

import requirements from '@/assets/images/main-problems/advantum/requirements.webp'
import phoneWithMap from '@/assets/images/main-problems/advantum/phone-with-map.webp'
import retranslation from '@/assets/images/main-problems/advantum/retranslation.webp'
import support from '@/assets/images/main-problems/advantum/support.webp'
import setForRefs from '@/assets/images/main-problems/advantum/set-for-refs.webp'

import equipments from '@/assets/images/data-transfer/advantum/1.webp'
import monitoringSystem from '@/assets/images/data-transfer/advantum/2.webp'
import advantumRetranslation from '@/assets/images/data-transfer/advantum/3.webp'
import customerControl from '@/assets/images/data-transfer/advantum/4.webp'

export const heroContent = {
  title: (
    <>
      Адвантум X5 мониторинг
      <span className="hero__accent"> под ключ</span>
    </>
  ),
  description: (
    <>
      Подключаем грузовые автомобили и рефрижераторы к системе Адвантум для
      рейсов X5, Metro и других ритейл-сетей: ставим GPS/ГЛОНАСС датчики и
      настраиваем передачу данных по{' '}
      <span data-js-utm-replace-text="">всей России</span>
    </>
  ),
  items: [
    'Настройка Адвантум для X5, Metro, Ашан, Ozon и других сетей',
    'GPS/ГЛОНАСС, температура и открытие дверей',
    'Координаты, скорость, маршрут и события в Адвантум',
    'Выездной монтаж: грузовики, фургоны, рефрижераторы',
  ],
  image: {
    src: '/src/assets/images/advantum-main.webp',
    alt: 'Адвантум X5 мониторинг транспорта',
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

export const steps = {
  title: 'Подключение к Адвантум X5 в четыре шага',
  titleId: 'steps-title',
  items: [
    {
      step: '1',
      title: 'Проверяем требования',
      description:
        'Уточняем сеть, тип кузова, наличие рефрижератора, установленное оборудование и список данных для передачи в Адвантум',
      time: '5 – 10 минут',
    },
    {
      step: '2',
      title: 'Подбираем оборудование',
      description:
        'Выбираем совместимый GPS/ГЛОНАСС трекер, SIM, датчик температуры, датчик двери, CAN или ДУТ, если эти данные нужны заказчику',
      time: 'В день обращения',
    },
    {
      step: '3',
      title: 'Устанавливаем и подключаем',
      description:
        'Монтируем оборудование на грузовой автомобиль или рефрижератор, проверяем питание, навигацию, датчики и стабильность связи',
      time: '1 – 4 часа',
    },
    {
      step: '4',
      title: 'Настраиваем Адвантум',
      description:
        'Добавляем транспорт в систему мониторинга, включаем ретрансляцию, проверяем отображение координат, температуры и событий',
      time: 'В день монтажа',
    },
  ],
  result: {
    title: 'Транспорт готов к рейсам с мониторингом Адвантум',
    description:
      'Заказчик видит машину в системе, а перевозчик получает рабочую схему контроля без ручной отправки треков и лишних звонков диспетчеру.',
  },
}

export const advantumIndustries = {
  title: 'Кому нужен Адвантум мониторинг',
  titleId: 'advantum-industries-title',
  items: [
    {
      title: 'Перевозчики X5',
      image: x5,
      imageWidth: 460,
      imageHeight: 279,
      variant: 'featured',
    },
    {
      title: 'Перевозчики Metro',
      image: metro,
      imageWidth: 277,
      imageHeight: 171,
      variant: 'wide-top',
    },
    {
      title: 'Перевозчики Ашан',
      image: auchan,
      imageWidth: 277,
      imageHeight: 171,
      variant: 'wide-middle',
    },
    {
      title: 'Перевозчики Ozon',
      image: ozon,
      imageWidth: 214,
      imageHeight: 165,
      variant: 'compact-start',
    },
    {
      title: 'Рефрижераторы',
      image: ref,
      imageWidth: 178,
      imageHeight: 165,
      variant: 'compact-center',
    },
    {
      title: 'Наёмный транспорт',
      image: basic,
      imageWidth: 205,
      imageHeight: 165,
      variant: 'compact-end',
    },
  ],
  actionItems: {
    actionTitle: 'Подключите транспорт к Адвантум!',
    actionDescription:
      'Настроим передачу данных для рейсов X5, Metro, Ашан, Ozon и других заказчиков',
  },
}

export const actionBanner = {
  title: 'Рассчитаем цену подключения к Адвантум для X5',
  description:
    'Подберём комплект под ваш транспорт: трекер, датчик температуры, датчик открытия дверей, монтаж и настройку ретрансляции. Рассчитаем отдельно грузовые автомобили, фургоны и рефрижераторы.',
}

export const faq = {
  title: 'Вопросы про Адвантум X5 мониторинг',
  items: [
    {
      question: 'Что такое Адвантум X5 мониторинг?',
      answer:
        'Это передача телематических данных с транспорта в систему Адвантум, которую используют ритейл-сети для контроля доставки. Для перевозчиков X5 мониторинг помогает подтверждать маршрут, время движения, местоположение машины и, для рефрижераторов, температурный режим.',
    },
    {
      question: 'Что нужно для подключения грузового автомобиля к Адвантум?',
      answer:
        'На автомобиль устанавливается GPS/ГЛОНАСС трекер, который передаёт координаты, скорость и события с периодичностью, требуемой сетью. Для ритейла обычно нужна передача не реже одного раза в минуту. Для рефрижераторов дополнительно ставятся датчики температуры и открытия дверей.',
    },
    {
      question: 'Нужен ли Адвантум для рефрижератора?',
      answer:
        'Да, если перевозка выполняется для сети, которой нужен контроль температурного режима. На рефрижератор ставится трекер, датчик температуры в кузове и датчик открытия дверей, после чего данные передаются в систему Адвантум вместе с координатами транспорта.',
    },
    {
      question: 'Сколько стоит Адвантум для рефрижератора?',
      answer:
        'Цена зависит от состава комплекта: GPS/ГЛОНАСС трекер, датчики температуры, датчик двери, монтаж, SIM-карта, тариф мониторинга и ретрансляция в Адвантум. После уточнения типа рефрижератора и требований сети рассчитаем стоимость под конкретную машину или автопарк.',
    },
    {
      question: 'Можно ли подключить уже установленный ГЛОНАСС трекер?',
      answer:
        'Да, если устройство поддерживает нужные данные и корректную передачу в систему мониторинга. Мы проверим модель трекера, протокол, датчики и качество связи. Если оборудование не подходит под требования Адвантум, предложим совместимую замену.',
    },
    {
      question: 'Какие данные передаются в систему Адвантум?',
      answer:
        'Обычно передаются координаты, скорость, время сообщения, маршрут, зажигание, остановки, события по датчикам, температура в кузове и открытие дверей. Дополнительно можно подключить топливо, CAN-данные и другие параметры, если они нужны заказчику перевозки.',
    },
    {
      question: 'Сколько времени занимает подключение к Адвантум?',
      answer:
        'Базовый монтаж трекера на одну машину обычно занимает 1–2 часа. Если нужен датчик температуры, датчик открытия дверей, CAN или ДУТ, время зависит от транспорта и места установки. Настройку передачи данных стараемся выполнить в день монтажа.',
    },
    {
      question: 'Подключаете ли Metro, Ашан, Ozon и другие сети?',
      answer:
        'Да, настраиваем Адвантум мониторинг для перевозчиков X5, Metro, Ашан, Ozon и других ритейл-сетей, где требуется передача телематики с грузового транспорта или рефрижераторов.',
    },
    {
      question: 'Что делать, если Адвантум не видит машину?',
      answer:
        'Проверяем питание трекера, баланс и работу SIM-карты, антенны, датчики, настройки сервера и ретрансляции. После диагностики восстанавливаем передачу данных и проверяем, что транспорт снова отображается в системе.',
    },
    {
      question: 'Можно ли подключить несколько машин сразу?',
      answer:
        'Да, подключаем отдельные машины и автопарки. Для нескольких транспортных средств заранее согласуем график выезда, список оборудования, шаблон данных для регистрации и порядок проверки каждой машины в Адвантум.',
    },
  ],
}

export const seoText = {
  title: 'Адвантум X5 мониторинг транспорта для перевозчиков',
  firstParagraph:
    'Подключение к Адвантум X5 требуется перевозчикам, которые возят грузы для крупных торговых сетей и должны передавать данные о транспорте в систему контроля доставки. GPS/ГЛОНАСС мониторинг показывает местоположение машины, скорость, движение по маршруту, посещение точек, остановки и события по датчикам. Для рефрижераторов дополнительно подключается контроль температуры в кузове и датчик открытия дверей, чтобы заказчик видел соблюдение условий перевозки.',
  secondParagraph:
    'Мы выполняем Адвантум мониторинг под ключ: проверяем уже установленное оборудование, настраиваем ретрансляцию или ставим совместимый трекер и датчики. Если транспорт работает для X5, Metro, Ашан, Ozon или другой сети, помогаем подготовить машину к передаче данных, проверить связь и быстро устранить ошибки, из-за которых рейс может не отображаться у заказчика.',
  items: [
    {
      label: 'Для X5 и ритейла.',
      description:
        'Настраиваем передачу данных в Адвантум для перевозчиков, которые работают с торговыми сетями.',
    },
    {
      label: 'Для рефрижераторов.',
      description:
        'Подключаем датчик температуры и датчик открытия дверей для контроля температурных грузов.',
    },
    {
      label: 'Без лишней замены.',
      description:
        'Если ваш трекер подходит, используем установленное оборудование и настраиваем ретрансляцию.',
    },
    {
      label: 'Понятная цена.',
      description:
        'Стоимость рассчитывается по составу оборудования, количеству машин, монтажу и тарифу обслуживания.',
    },
    {
      label: 'Передача данных.',
      description:
        'В Адвантум уходят координаты, скорость, события, температура, двери и другие параметры.',
    },
    {
      label: 'Сопровождение.',
      description:
        'Помогаем после запуска, если машина пропала из системы или заказчик не видит нужные данные.',
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
    label: 'Установка GPS трекера',
    href: '/ustanovka-gps-trekera',
  },
  {
    label: 'РНИС',
    href: '/rnis',
  },
  {
    label: 'Мониторинг грузового транспорта',
    href: '/resheniya/monitoring-gruzovogo-transporta',
  },
]

export const advantumPossibilities = {
  title: 'Какие данные передаются в Адвантум',
  titleId: 'advantum-possibilities-title',
  items: [
    {
      title: 'Координаты и скорость',
      description:
        'Передаются местоположение, скорость, направление движения и время последнего сообщения',
      image: onlineMonitoring,
    },
    {
      title: 'Геозоны и маршруты',
      description:
        'Система видит движение по рейсу, заезды в точки доставки и отклонения от маршрута',
      image: geozon,
    },
    {
      title: 'Температура и двери',
      description:
        'Для рефрижераторов подключаем датчик температуры и датчик открытия дверей',
      image: doorsAndTemperature,
    },
    {
      title: 'События по автомобилю',
      description:
        'Передаются зажигание, питание, простои, потеря связи и другие события с оборудования',
      image: autoEvents,
    },
    {
      title: 'Отчёты и аналитика',
      description:
        'Отчёты помогают подтвердить выполнение рейса и разобраться в спорных ситуациях',
      image: reports,
    },
    {
      title: 'Уведомления и события',
      description:
        'Диспетчер быстрее видит проблемы с рейсом, датчиками, связью или температурным режимом',
      image: notifications,
    },
  ],
}

export const retranslationAdvantum = {
  title: 'Что такое система Адвантум?',
  titleId: 'advantum-title',
  firstParagraph: (
    <>
      <strong>Адвантум</strong> — это платформа для контроля доставки и
      мониторинга транспорта, через которую ритейл-сети получают данные о
      рейсах, машинах и температурном режиме.
    </>
  ),

  secondParagraph:
    'Для перевозчика важно не просто видеть машину на карте, а корректно передать данные с GPS/ГЛОНАСС трекера и датчиков в систему Адвантум, чтобы X5, Metro или другой заказчик видел рейс без разрывов и претензий к телематике.',
  items: [
    'Мониторинг транспорта для X5 и Metro',
    'Ретрансляция GPS/ГЛОНАСС данных',
    'Контроль температуры REF-фургона',
    'Датчик открытия дверей',
  ],
  mainColor: 'advantum',
  retranslationIcon: 'advantum-page',
  summaryText: 'Подключаем и проверяем передачу данных',
}

export const advantumProblems = {
  title: 'Почему перевозчики подключают Адвантум через нас',
  titleId: 'main-problems-title',
  items: [
    {
      title: 'Подключаем под требования',
      description:
        'Сверяем, какие данные нужны для рейсов: координаты, скорость, температура, двери, события и периодичность передачи',
      image: requirements,
      imageWidth: 265,
      imageHeight: 194,
      variant: 'yellow',
    },
    {
      title: 'Настраиваем ретрансляцию',
      description:
        'Проверяем действующий трекер или ставим совместимый, чтобы данные уходили в Адвантум без ручной выгрузки',
      image: retranslation,
      imageWidth: 265,
      imageHeight: 177,
      variant: 'blue',
    },
    {
      title: 'Не бросаем после запуска',
      description:
        'Помогаем, если машина пропала из системы, датчик показывает ошибку или заказчик не видит рейс',
      image: support,
      imageWidth: 265,
      imageHeight: 177,
      variant: 'blue',
    },
    {
      type: 'action',
    },
    {
      title: 'Комплекты для рефрижераторов',
      description:
        'Устанавливаем датчики температуры и открытия дверей на REF-фургоны, полуприцепы и грузовые автомобили',
      image: setForRefs,
      imageWidth: 265,
      imageHeight: 167,
      variant: 'gray',
    },
  ],
  actionElements: {
    actionItems: [
      'X5, Metro и другие сети',
      'Рефрижераторы и фургоны',
      'Ретрансляция данных',
    ],
    actionTitle: 'Подключение по всей России',
    actionDescription: 'Настроим Адвантум мониторинг для автопарка:',
    actionImage: phoneWithMap,
  },
}

export const advantumDataTransfer = {
  title: 'Схема передачи данных в Адвантум',
  titleId: 'advantum-data-transfer-title',
  items: [
    {
      title: 'Трекер и датчики на ТС',
      description:
        'На грузовой автомобиль или рефрижератор ставится GPS/ГЛОНАСС трекер, датчик температуры и датчик открытия дверей',
      number: '01',
      imageSrc: equipments,
      imageWidth: 265,
      imageHeight: 170,
      variant: 'yellow',
    },
    {
      title: 'Система мониторинга',
      description:
        'Оборудование передаёт координаты, скорость, события и данные датчиков в систему мониторинга транспорта',
      number: '02',
      imageSrc: monitoringSystem,
      imageWidth: 265,
      imageHeight: 170,
      variant: 'blue',
    },
    {
      title: 'Ретрансляция в Адвантум',
      description:
        'Настраиваем передачу данных в Адвантум, чтобы ритейл-сеть видела машину и параметры рейса',
      number: '03',
      imageSrc: advantumRetranslation,
      imageWidth: 265,
      imageHeight: 170,
      variant: 'gray',
    },
    {
      title: 'Контроль рейса заказчиком',
      description:
        'X5, Metro или другой заказчик получает данные о движении, точках доставки и температурном режиме',
      number: '04',
      imageSrc: customerControl,
      imageWidth: 265,
      imageHeight: 170,
      variant: 'dark',
    },
  ],
}
