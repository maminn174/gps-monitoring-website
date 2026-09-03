import EquipmentCatalogPage from '../../../sections/EquipmentCatalogPage'
import ActionBanner from '../../../sections/ActionBanner'
import {
  ActionBannerGpsTrackers,
  faq,
  gpsTrackers,
  seoText,
  steps,
  trackersTagTiles,
} from '@/page-data/gps-trackers.data'
import Faq from '@/sections/Faq/Questions'
import SeoBlock from '@/sections/SeoBlock/SeoBlock'
import Steps from '@/sections/Steps/Steps'
import TagTiles from '@/components/TagTiles'

export const metadata = {
  title: 'GPS трекеры для автомобиля купить | GPS/GSM трекеры для авто',
  description:
    'Купить GPS трекер для автомобиля: проводные, автономные, магнитные, GSM трекеры с SIM и модели в прикуриватель. Подбор, установка и мониторинг авто.',
  ogImageAlt: 'GPS трекер для автомобиля',
  breadcrumbs: [
    {
      label: 'Главная',
      href: '/',
    },
    {
      label: 'Оборудование',
      href: '/oborudovanie',
    },

    {
      label: 'GPS трекер для автомобиля',
    },
  ],
  service: {
    name: 'GPS трекер для автомобиля под ключ',
    serviceType: 'Продажа и установка GPS/GSM трекеров для авто',
    description:
      'Подбор, продажа и установка GPS/ГЛОНАСС/GSM трекеров для автомобиля: проводные модели, автономные маяки, магнитные трекеры, устройства с SIM и трекеры в прикуриватель.',
  },
  productList: {
    name: 'Каталог GPS трекеров для автомобиля',
    category: 'GPS трекер для автомобиля',
    items: gpsTrackers,
  },
  faq: faq.items,
}

export default () => {
  return (
    <>
      <EquipmentCatalogPage />
      <Steps data={steps} />
      <ActionBanner data={ActionBannerGpsTrackers} />
      <Faq data={faq} />
      <TagTiles tagTiles={trackersTagTiles} />
      <SeoBlock seoText={seoText} />
    </>
  )
}
