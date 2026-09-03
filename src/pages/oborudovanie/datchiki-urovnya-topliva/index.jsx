import EquipmentCatalogPage from '../../../sections/EquipmentCatalogPage'
import ActionBanner from '../../../sections/ActionBanner'
import {
  ActionBannerDuts,
  dutsTagTiles,
  faq,
  duts,
  seoText,
  steps,
} from '@/page-data/datchiki-topliva.data'
import Faq from '@/sections/Faq/Questions'
import SeoBlock from '@/sections/SeoBlock/SeoBlock'
import Steps from '@/sections/Steps/Steps'
import TagTiles from '@/components/TagTiles'

export const metadata = {
  title: 'Датчики уровня топлива купить | ДУТ для контроля топлива',
  description:
    'Купить датчик уровня топлива для транспорта и спецтехники: Эскорт TD-150, Эскорт TD BLE, подбор, монтаж, тарировка бака и подключение к мониторингу.',
  ogImageAlt: 'Датчик уровня топлива',
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
      label: 'Датчики уровня топлива',
    },
  ],
  service: {
    name: 'Датчик уровня топлива под ключ',
    serviceType: 'Продажа и установка датчиков уровня топлива',
    description:
      'Подбор, продажа и установка проводных и беспроводных датчиков уровня топлива для транспорта, спецтехники и стационарных емкостей с тарировкой бака и настройкой отчетов.',
  },
  productList: {
    name: 'Каталог датчиков уровня топлива',
    category: 'Датчик уровня топлива',
    items: duts,
  },
  faq: faq.items,
}

export default () => {
  return (
    <>
      <EquipmentCatalogPage
        title="Датчики уровня топлива"
        lead="Подберём проводной или беспроводной ДУТ для контроля заправок, сливов, расхода и остатков топлива на грузовом транспорте, спецтехнике и стационарных емкостях"
        products={duts}
        withFilters={false}
        catalogTitle="Каталог датчиков уровня топлива"
        variant="other"
      />
      <Steps data={steps} />
      <ActionBanner data={ActionBannerDuts} />
      <Faq data={faq} />
      <TagTiles tagTiles={dutsTagTiles} />
      <SeoBlock seoText={seoText} />
    </>
  )
}
