import Hero from '@/sections/Hero'
import Advantages from '@/sections/Advantages'
import Faq from '@/sections/Faq/Questions'
import SeoBlock from '@/sections/SeoBlock/SeoBlock'
import TagTiles from '@/components/TagTiles/TagTiles'
import ActionBanner from '@/sections/ActionBanner/ActionBanner'
import {
  taxiProblems,
  taxiStructures,
  taxiPossibilities,
  taxiSteps,
  taxiIndustries,
  taxiMainProblems,
  taxiFaq,
  heroContent,
  taxiEquipments,
  taxiActionBanner,
  taxiSeoText,
  taxiTagTiles,
} from '@/page-data/monitoring-taksi.data'
import Problems from '@/sections/Problems'
import Structure from '@/sections/Structure'
import Possibilities from '@/sections/Possibilities/Possibilities'
import EquipmentTypes from '@/sections/EquipmentTypes'
import Steps from '@/sections/Steps/Steps'
import Industries from '@/sections/Industries/Industries'
import MainProblems from '@/sections/MainProblems/MainProblems'

export const metadata = {
  title: 'Мониторинг такси ГЛОНАСС/GPS под ключ',
  description:
    'Мониторинг такси: установка GPS/ГЛОНАСС трекеров, маячков и реле блокировки двигателя. Отслеживание автомобилей, маршрутов, смен и пробега для таксопарков.',
  ogImageAlt: 'Мониторинг такси ГЛОНАСС/GPS',
  faq: taxiFaq.items,
  breadcrumbs: [
    {
      label: 'Главная',
      href: '/',
    },
    {
      label: 'Решения',
      href: '/resheniya',
    },

    {
      label: 'Мониторинг такси',
    },
  ],
  service: {
    name: 'Мониторинг такси под ключ',
    serviceType: 'Установка GPS/ГЛОНАСС оборудования на автомобили такси',
    description:
      'Подбор и установка GPS/ГЛОНАСС трекеров, маячков, CAN-подключения и реле блокировки двигателя для контроля такси, маршрутов, смен и работы автопарка.',
  },
}

export default () => {
  return (
    <>
      <Hero heroContent={heroContent} titleId="taxi-monitoring-hero-title" />
      <Advantages title="Преимущества мониторинга такси" />
      <Problems problems={taxiProblems} />
      <Structure
        className="structure--centered-media"
        structures={taxiStructures}
      />
      <Possibilities cards={taxiPossibilities} />
      <EquipmentTypes equipments={taxiEquipments} />
      <Steps data={taxiSteps} />
      <Industries data={taxiIndustries} />
      <MainProblems data={taxiMainProblems} />
      <ActionBanner data={taxiActionBanner} />
      <Faq data={taxiFaq} />
      <SeoBlock seoText={taxiSeoText} />
      <TagTiles tagTiles={taxiTagTiles} />
    </>
  )
}
