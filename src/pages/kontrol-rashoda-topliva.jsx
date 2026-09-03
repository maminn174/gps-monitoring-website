import Hero from '@/sections/Hero'
import Advantages from '@/sections/Advantages'
import Industries from '@/sections/Industries'
import Faq from '@/sections/Faq'
import Structure from '@/sections/Structure'
import Steps from '@/sections/Steps'
import ActionBanner from '@/sections/ActionBanner'
import Problems from '@/sections/Problems'
import FuelControlVariants from '@/sections/FuelControlVariants'
import TagTiles from '@/components/TagTiles'
import {
  actionBanner,
  faq,
  fuelIntegrations,
  heroContent,
  industries,
  steps,
  structures,
  seoText,
  tagTiles,
  fuelProblems,
} from '@/page-data/kontrol-rashoda-topliva.data'
import SeoBlock from '@/sections/SeoBlock/SeoBlock'

export const metadata = {
  title: 'Контроль расхода топлива | Система контроля топлива ГЛОНАСС/GPS',
  description:
    'Установим систему контроля расхода топлива и мониторинга транспорта для автопарка, грузовиков и коммерческого транспорта. ГЛОНАСС/GPS, ДУТ, CAN, гарантия.',
  faq: faq.items,
  breadcrumbs: [
    {
      label: 'Главная',
      href: '/',
    },
    {
      label: 'Услуги',
      href: '/uslugi',
    },
    {
      label: 'Контроль топлива',
    },
  ],
  service: {
    name: 'Контроль расхода топлива',
    serviceType: 'Система контроля топлива автомобиля',
    description:
      'Установка ГЛОНАСС/GPS системы контроля топлива на автомобили, грузовики, спецтехнику и коммерческий транспорт с настройкой мониторинга расхода топлива, пробега, заправок и сливов.',
  },
}

export default () => {
  return (
    <>
      <Hero
        heroContent={heroContent}
        titleId="fuel-hero-title"
        integrations={fuelIntegrations}
      />
      <Advantages title="Преимущества системы контроля расхода топлива" />
      <Problems problems={fuelProblems} />
      <Structure
        structures={structures}
        className="structure--centered-media"
      />
      <FuelControlVariants />
      <Steps data={steps} />
      <Industries data={industries} />
      <ActionBanner data={actionBanner} />
      <Faq data={faq} />
      <SeoBlock seoText={seoText} />
      <TagTiles tagTiles={tagTiles} />
    </>
  )
}
