import Hero from '@/sections/Hero'
import Advantages from '@/sections/Advantages'
import Faq from '@/sections/Faq/Questions'
import SeoBlock from '@/sections/SeoBlock/SeoBlock'
import TagTiles from '@/components/TagTiles/TagTiles'
import ActionBanner from '@/sections/ActionBanner/ActionBanner'
import {
  specialProblems,
  specialStructures,
  specialPossibilities,
  specialSteps,
  specialIndustries,
  specialMainProblems,
  specialFaq,
  heroContent,
  specialEquipments,
  specialActionBanner,
  specialSeoText,
  specialTagTiles,
} from '@/page-data/monitoring-spectehniki.data'
import Problems from '@/sections/Problems'
import Structure from '@/sections/Structure'
import Possibilities from '@/sections/Possibilities/Possibilities'
import EquipmentTypes from '@/sections/EquipmentTypes'
import Steps from '@/sections/Steps/Steps'
import Industries from '@/sections/Industries/Industries'
import MainProblems from '@/sections/MainProblems/MainProblems'

export const metadata = {
  title: 'Мониторинг спецтехники ГЛОНАСС/GPS под ключ',
  description:
    'Мониторинг спецтехники: установка ГЛОНАСС/GPS на технику, контроль маршрутов, топлива, моточасов, простоев, объектов и расчет стоимости под парк.',
  ogImageAlt: 'Мониторинг спецтехники ГЛОНАСС/GPS',
  faq: specialFaq.items,
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
      label: 'Мониторинг спецтехники',
    },
  ],
  service: {
    name: 'Мониторинг спецтехники под ключ',
    serviceType: 'Установка GPS/ГЛОНАСС оборудования на спецтехнику',
    description:
      'Подбор и установка GPS/ГЛОНАСС трекеров, датчиков топлива, моточасов и CAN для контроля спецтехники, объектов, простоев, маршрутов и работы парка.',
  },
}

export default () => {
  return (
    <>
      <Hero heroContent={heroContent} titleId="special-monitoring-hero-title" />
      <Advantages title="Преимущества мониторинга спецтехники" />
      <Problems problems={specialProblems} />
      <Structure
        className="structure--centered-media"
        structures={specialStructures}
      />
      <Possibilities cards={specialPossibilities} />
      <EquipmentTypes equipments={specialEquipments} />
      <Steps data={specialSteps} />
      <Industries data={specialIndustries} />
      <MainProblems data={specialMainProblems} />
      <ActionBanner data={specialActionBanner} />
      <Faq data={specialFaq} />
      <SeoBlock seoText={specialSeoText} />
      <TagTiles tagTiles={specialTagTiles} />
    </>
  )
}
