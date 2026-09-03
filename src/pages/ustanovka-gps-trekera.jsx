import Hero from '@/sections/Hero'
import Advantages from '@/sections/Advantages'
import EquipmentTypes from '@/sections/EquipmentTypes'
import {
  faq,
  heroContent,
  heroIntegrations,
  installationTrackerIndustries,
  installationTrackerPossibilities,
  installationTrackerProblems,
  structures,
  steps,
  seoText,
  tagTiles,
  actionBanner,
  equipmentTypes,
} from '@/page-data/ustanovka-gps-trekera.data'
import Possibilities from '../sections/Possibilities'
import CardStructure from '@/sections/CardStructure'
import Industries from '../sections/Industries'
import Problems from '@/sections/Problems'
import Steps from '@/sections/Steps'
import Faq from '@/sections/Faq/Questions'
import SeoBlock from '@/sections/SeoBlock/SeoBlock'
import TagTiles from '@/components/TagTiles/TagTiles'
import ActionBanner from '@/sections/ActionBanner/ActionBanner'

export const metadata = {
  title: 'Установка GPS трекера на автомобиль - цена с установкой под ключ',
  description:
    'Установить GPS трекер на автомобиль, грузовик или спецтехнику под ключ. Подбор оборудования, выездной монтаж, настройка мониторинга и расчёт цены с установкой.',
  faq: faq.items,
  breadcrumbs: [
    { label: 'Главная', href: '/' },
    {
      label: 'Услуги',
      href: '/uslugi',
    },
    { label: 'Установка GPS трекера' },
  ],
  service: {
    name: 'Установка GPS трекера на автомобиль под ключ',
    serviceType: 'Установка GPS трекера на автомобиль',
    description:
      'Профессиональная установка GPS трекера на автомобили, грузовой транспорт, спецтехнику и коммерческий автопарк с настройкой системы мониторинга.',
  },
}

export default () => {
  return (
    <>
      <Hero
        heroContent={heroContent}
        titleId="installation-hero-title"
        integrations={heroIntegrations}
      />
      <Advantages title="Преимущества установки GPS трекера на авто" />
      <EquipmentTypes equipments={equipmentTypes} />
      <Possibilities cards={installationTrackerPossibilities} />
      <Industries data={installationTrackerIndustries} />
      <Problems problems={installationTrackerProblems} />
      <CardStructure structures={structures} />
      <Steps data={steps} />
      <ActionBanner data={actionBanner} />
      <Faq data={faq} />
      <SeoBlock seoText={seoText} />
      <TagTiles tagTiles={tagTiles} />
    </>
  )
}
