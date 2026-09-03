import Hero from '@/sections/Hero'
import Advantages from '@/sections/Advantages'
import Faq from '@/sections/Faq/Questions'
import SeoBlock from '@/sections/SeoBlock/SeoBlock'
import TagTiles from '@/components/TagTiles/TagTiles'
import ActionBanner from '@/sections/ActionBanner/ActionBanner'
import {
  truckProblems,
  truckStructures,
  truckPossibilities,
  truckSteps,
  truckIndustries,
  truckMainProblems,
  truckFaq,
  heroContent,
  truckEquipments,
  truckActionBanner,
  truckSeoText,
  truckTagTiles,
} from '@/page-data/monitoring-gruzovogo-transporta.data'
import Problems from '@/sections/Problems'
import Structure from '@/sections/Structure'
import Possibilities from '@/sections/Possibilities/Possibilities'
import EquipmentTypes from '@/sections/EquipmentTypes'
import Steps from '@/sections/Steps/Steps'
import Industries from '@/sections/Industries/Industries'
import MainProblems from '@/sections/MainProblems/MainProblems'

export const metadata = {
  title: 'Мониторинг грузового транспорта ГЛОНАСС/GPS под ключ',
  description:
    'Мониторинг грузового транспорта: установка ГЛОНАСС/GPS трекеров на грузовые автомобили, контроль маршрутов, топлива, рейсов и расчет стоимости под автопарк.',
  ogImageAlt: 'Мониторинг грузового транспорта ГЛОНАСС/GPS',
  faq: truckFaq.items,
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
      label: 'Мониторинг грузового транспорта',
    },
  ],
  service: {
    name: 'Мониторинг грузового транспорта под ключ',
    serviceType: 'Установка GPS/ГЛОНАСС оборудования на грузовые автомобили',
    description:
      'Подбор и установка GPS/ГЛОНАСС трекеров, датчиков топлива, температуры и CAN для контроля грузового транспорта, маршрутов, рейсов и работы автопарка.',
  },
}

export default () => {
  return (
    <>
      <Hero heroContent={heroContent} titleId="truck-monitoring-hero-title" />
      <Advantages title="Преимущества мониторинга грузового транспорта" />
      <Problems problems={truckProblems} />
      <Structure
        className="structure--centered-media"
        structures={truckStructures}
      />
      <Possibilities cards={truckPossibilities} />
      <EquipmentTypes equipments={truckEquipments} />
      <Steps data={truckSteps} />
      <Industries data={truckIndustries} />
      <MainProblems data={truckMainProblems} />
      <ActionBanner data={truckActionBanner} />
      <Faq data={truckFaq} />
      <SeoBlock seoText={truckSeoText} />
      <TagTiles tagTiles={truckTagTiles} />
    </>
  )
}
