import EquipmentCatalogPage from '../../../sections/EquipmentCatalogPage'
import ActionBanner from '../../../sections/ActionBanner'
import {
  ActionBannerGpsBeacons,
  beaconsTagTiles,
  faq,
  gpsBeacons,
  seoText,
  steps,
} from '@/page-data/gps-mayaki.data'
import Faq from '@/sections/Faq/Questions'
import SeoBlock from '@/sections/SeoBlock/SeoBlock'
import Steps from '@/sections/Steps/Steps'
import TagTiles from '@/components/TagTiles'

export const metadata = {
  title: 'GPS маяки купить | Автономные GPS-маяки для транспорта и грузов',
  description:
    'Купить GPS-маяк X-KEEPER для транспорта, контейнеров, грузов и имущества. Подбор автономного маяка, настройка и подключение к мониторингу.',
  ogImageAlt: 'GPS маяк',
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
      label: 'GPS маяки',
    },
  ],
  service: {
    name: 'GPS-маяк под ключ',
    serviceType: 'Продажа и настройка GPS-маяков',
    description:
      'Подбор, продажа, настройка и подключение автономных GPS-маяков для транспорта, контейнеров, грузов и имущества.',
  },
  productList: {
    name: 'Каталог GPS-маяков',
    category: 'GPS-маяк',
    items: gpsBeacons,
  },
  faq: faq.items,
}

export default () => {
  return (
    <>
      <EquipmentCatalogPage
        title="GPS маяки"
        lead="Подберём автономный GPS-маяк для скрытого контроля автомобиля, контейнера, груза, прицепа или имущества с подключением к системе мониторинга"
        products={gpsBeacons}
        withFilters={false}
        catalogTitle="Каталог GPS-маяков"
        variant="other"
      />
      <Steps data={steps} />
      <ActionBanner data={ActionBannerGpsBeacons} />
      <Faq data={faq} />
      <TagTiles tagTiles={beaconsTagTiles} />
      <SeoBlock seoText={seoText} />
    </>
  )
}
