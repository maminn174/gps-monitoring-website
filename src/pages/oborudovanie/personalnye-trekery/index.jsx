import EquipmentCatalogPage from '../../../sections/EquipmentCatalogPage'
import ActionBanner from '../../../sections/ActionBanner'
import {
  ActionBannerPersonalTrackers,
  faq,
  personalTrackersTagTiles,
  personalTrackers,
  seoText,
  steps,
} from '@/page-data/personalnye-trekery.data'
import Faq from '@/sections/Faq/Questions'
import SeoBlock from '@/sections/SeoBlock/SeoBlock'
import Steps from '@/sections/Steps/Steps'
import TagTiles from '@/components/TagTiles'

export const metadata = {
  title: 'Персональные GPS трекеры купить | Трекеры для сотрудников',
  description:
    'Купить персональный GPS трекер для сотрудников, курьеров, охраны и мобильных объектов: Arnavi L2, Teltonika GH 5200, ADM P50, Teltonika TMT250.',
  ogImageAlt: 'Персональный GPS трекер',
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
      label: 'Персональные трекеры',
    },
  ],
  service: {
    name: 'Персональный GPS-трекер под ключ',
    serviceType: 'Продажа и настройка персональных GPS-трекеров',
    description:
      'Подбор, продажа, настройка и подключение персональных GPS-трекеров для сотрудников, курьеров, охраны и мобильных объектов.',
  },
  productList: {
    name: 'Каталог персональных GPS-трекеров',
    category: 'Персональный GPS-трекер',
    items: personalTrackers,
  },
  faq: faq.items,
}

export default () => {
  return (
    <>
      <EquipmentCatalogPage
        title="Персональные GPS трекеры"
        lead="Подберём персональный трекер для сотрудников, курьеров, охраны, сервисных бригад и мобильных объектов с подключением к системе мониторинга"
        products={personalTrackers}
        withFilters={false}
        catalogTitle="Каталог персональных трекеров"
        variant="other"
      />
      <Steps data={steps} />
      <ActionBanner data={ActionBannerPersonalTrackers} />
      <Faq data={faq} />
      <TagTiles tagTiles={personalTrackersTagTiles} />
      <SeoBlock seoText={seoText} />
    </>
  )
}
