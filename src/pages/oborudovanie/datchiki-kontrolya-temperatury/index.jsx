import EquipmentCatalogPage from '../../../sections/EquipmentCatalogPage'
import ActionBanner from '../../../sections/ActionBanner'
import {
  ActionBannerTemperatureSensors,
  faq,
  seoText,
  steps,
  temperatureSensors,
  temperatureSensorsTagTiles,
} from '@/page-data/datchiki-temperatury.data'
import Faq from '@/sections/Faq/Questions'
import SeoBlock from '@/sections/SeoBlock/SeoBlock'
import Steps from '@/sections/Steps/Steps'
import TagTiles from '@/components/TagTiles'

export const metadata = {
  title: 'Датчики температуры купить | Контроль температуры транспорта',
  description:
    'Купить датчик контроля температуры для транспорта и рефрижераторов: Mielta 3402-01, Эскорт TL BLE, подбор, монтаж и подключение к системе мониторинга.',
  ogImageAlt: 'Датчик контроля температуры',
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
      label: 'Датчики температуры',
    },
  ],
  service: {
    name: 'Датчик контроля температуры под ключ',
    serviceType: 'Продажа и установка датчиков контроля температуры',
    description:
      'Подбор, продажа и установка проводных и беспроводных датчиков контроля температуры для транспорта, рефрижераторов и складских зон с подключением к системе мониторинга.',
  },
  productList: {
    name: 'Каталог датчиков контроля температуры',
    category: 'Датчик температуры',
    items: temperatureSensors,
  },
  faq: faq.items,
}

export default () => {
  return (
    <>
      <EquipmentCatalogPage
        title="Датчики температуры"
        lead="Подберём проводной или беспроводной датчик температуры для рефрижератора, изотермического фургона, склада или грузового транспорта с подключением к GPS/ГЛОНАСС мониторингу"
        products={temperatureSensors}
        withFilters={false}
        catalogTitle="Каталог датчиков контроля температуры"
        variant="other"
      />
      <Steps data={steps} />
      <ActionBanner data={ActionBannerTemperatureSensors} />
      <Faq data={faq} />
      <TagTiles tagTiles={temperatureSensorsTagTiles} />
      <SeoBlock seoText={seoText} />
    </>
  )
}
