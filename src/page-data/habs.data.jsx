const resheniyaLink = '/resheniya'
const oborudovanieLink = '/oborudovanie'

export const resheniyaItems = {
  title: 'Наши решения',
  items: [
    {
      label: 'Мониторинг грузового транспорта',
      icon: 'truck-resheniya',
      href: `${resheniyaLink}/monitoring-gruzovogo-transporta`,
    },
    {
      label: 'Мониторинг спецтехники',
      icon: 'special-resheniya',
      href: `${resheniyaLink}/monitoring-spectehniki`,
    },
    {
      label: 'Мониторинг такси',
      icon: 'taxi-resheniya',
      href: `${resheniyaLink}/monitoring-taksi`,
    },
  ],
}

export const uslugiItems = {
  title: 'Наши услуги',
  items: [
    {
      label: 'Установка ГЛОНАСС',
      icon: 'install-glonass-uslugi',
      href: '/ustanovka-glonass',
    },
    {
      label: 'Контроль топлива',
      icon: 'fuel-uslugi',
      href: '/kontrol-rashoda-topliva',
    },
    {
      label: 'Установка GPS трекера',
      icon: 'gps-tracker-uslugi',
      href: '/ustanovka-gps-trekera',
    },
    {
      label: 'Адвантум',
      icon: 'advantum-uslugi',
      href: '/advantum',
    },
    {
      label: 'РНИС',
      icon: 'rnis-uslugi',
      href: '/rnis',
    },
  ],
}

export const oborudovanieItems = {
  title: 'Оборудование для мониторинга транспорта',
  items: [
    {
      label: 'GPS трекеры для автомобиля',
      icon: 'gps-tracker-uslugi',
      href: `${oborudovanieLink}/gps-trekery-dlya-avtomobilya`,
    },
    {
      label: 'Датчики уровня топлива',
      icon: 'fuel-equipment',
      href: `${oborudovanieLink}/datchiki-urovnya-topliva`,
    },
    {
      label: 'Датчики контроля температуры',
      icon: 'temp-equipment',
      href: `${oborudovanieLink}/datchiki-kontrolya-temperatury`,
    },

    {
      label: 'GPS маяки',
      icon: 'gps-mayak-equipment',
      href: `${oborudovanieLink}/gps-mayaki`,
    },
    {
      label: 'Персональные трекеры',
      icon: 'personal-tracker-equipment',
      href: `${oborudovanieLink}/personalnye-trekery`,
    },
  ],
}
