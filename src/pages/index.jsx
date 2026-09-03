import Hero from '@/sections/Hero'
import Advantages from '@/sections/Advantages'
import MainProblems from '@/sections/MainProblems'
import Possibilities from '@/sections/Possibilities'
import TypesTransport from '@/sections/TypesTransport'
import Equipment from '@/sections/Equipment'
import MonitoringSystem from '@/sections/MonitoringSystem'
import Services from '@/sections/Services'
import Integrations from '@/sections/Integrations'
import MainSteps from '../sections/MainSteps'
import InstallationExample from '@/sections/InstallationExample'
import Company from '@/sections/Company'
import Clients from '@/sections/Clients'
import Contacts from '@/sections/Contacts'
import Faq from '@/sections/Faq'
import TagTiles from '@/components/TagTiles'
import {
  faq,
  heroContent,
  heroIntegrations,
  installationExamples,
  mainPossibilities,
  mainProblems,
  seoText,
  tagTiles,
} from '@/page-data/index.data'
import SeoBlock from '../sections/SeoBlock'

export const metadata = {
  title:
    'Мониторинг транспорта — система GPS/ГЛОНАСС контроля с установкой под ключ',
  description:
    'Мониторинг транспорта для контроля автопарка и снижения расходов. GPS/ГЛОНАСС система с установкой под ключ. Настройка за 1-3 дня. Работаем по всей России.',
  faq: faq.items,
  service: {
    name: 'Мониторинг транспорта',
    serviceType: 'GPS/ГЛОНАСС мониторинг транспорта',
    description:
      'Система GPS/ГЛОНАСС мониторинга транспорта для контроля автопарка, маршрутов, пробега, топлива и других параметров с установкой под ключ.',
  },
}

export default () => {
  return (
    <>
      <Hero heroContent={heroContent} integrations={heroIntegrations} />
      <Advantages title="Преимущества мониторинга транспорта" />
      <MainProblems data={mainProblems} />
      <Possibilities cards={mainPossibilities} />
      <TypesTransport />
      <Equipment />
      <MonitoringSystem />
      <Integrations />
      <Services />
      <MainSteps />
      <Company />
      <Clients />
      <InstallationExample examples={installationExamples} />
      <Contacts />
      <Faq data={faq} />
      <SeoBlock seoText={seoText} />
      <TagTiles tagTiles={tagTiles} />
    </>
  )
}
