import Hero from '@/sections/Hero'
import Advantages from '@/sections/Advantages'
import AdvantagesInstallation from '@/sections/AdvantagesInstallation'
import Industries from '@/sections/Industries'
import MonitoringSystem from '@/sections/MonitoringSystem'
import InstallationExample from '@/sections/InstallationExample'
import Faq from '@/sections/Faq'
import Structure from '@/sections/Structure'
import StepsInstallation from '../sections/Steps'
import ActionBanner from '@/sections/ActionBanner'
import TagTiles from '../components/TagTiles'
import SeoBlock from '../sections/SeoBlock'
import {
  actionBanner,
  faq,
  heroContent,
  heroIntegrations,
  industries,
  installationExamples,
  steps,
  structures,
  seoText,
  tagTiles,
} from '@/page-data/ustanovka-glonass.data'

export const metadata = {
  title:
    'Установка ГЛОНАСС на автомобиль под ключ - цены на оборудование с установкой',
  description:
    'Установка ГЛОНАСС на автомобиль под ключ с гарантией. Подбор оборудования и настройка за 1–3 дня. Бесплатный выезд в пределах города. Работаем по всей России.',
  faq: faq.items,
  breadcrumbs: [
    { label: 'Главная', href: '/' },
    {
      label: 'Услуги',
      href: '/uslugi',
    },
    { label: 'Установка ГЛОНАСС' },
  ],
  service: {
    name: 'Установка ГЛОНАСС под ключ',
    serviceType: 'Установка ГЛОНАСС на автомобиль',
    description:
      'Профессиональная установка ГЛОНАСС/GPS оборудования на автомобили, спецтехнику и коммерческий транспорт с настройкой системы мониторинга.',
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
      <Advantages title="Преимущества установки ГЛОНАСС" />
      <AdvantagesInstallation />
      <Industries data={industries} />
      <Structure structures={structures} />
      <StepsInstallation data={steps} />
      <MonitoringSystem />
      <InstallationExample
        examples={installationExamples}
        title="Примеры установки ГЛОНАСС на транспорт"
      />
      <ActionBanner data={actionBanner} />
      <Faq data={faq} />
      <SeoBlock seoText={seoText} />
      <TagTiles tagTiles={tagTiles} />
    </>
  )
}
