import Hero from '@/sections/Hero'
import Advantages from '@/sections/Advantages'
import Possibilities from '../sections/Possibilities'
import Industries from '../sections/Industries'
import Steps from '@/sections/Steps'
import Faq from '@/sections/Faq/Questions'
import SeoBlock from '@/sections/SeoBlock/SeoBlock'
import TagTiles from '@/components/TagTiles/TagTiles'
import ActionBanner from '@/sections/ActionBanner/ActionBanner'
import AboutRetranslations from '@/sections/AboutRetranslations'
import {
  advantumIndustries,
  advantumPossibilities,
  retranslationAdvantum,
  advantumProblems,
  faq,
  heroContent,
  steps,
  seoText,
  tagTiles,
  actionBanner,
  advantumDataTransfer,
} from '@/page-data/advantum.data'
import MainProblems from '@/sections/MainProblems'
import DataTransfer from '../sections/DataTransfer'

export const metadata = {
  title: 'Адвантум X5 мониторинг транспорта под ключ',
  description:
    'Подключение грузовых авто и рефрижераторов к Адвантум для X5, Metro и ритейл-сетей: GPS/ГЛОНАСС, датчики температуры и дверей, ретрансляция данных.',
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
      label: 'Адвантум',
    },
  ],
  service: {
    name: 'Адвантум X5 мониторинг транспорта под ключ',
    serviceType: 'Подключение транспорта к системе Адвантум',
    description:
      'Подбор и установка GPS/ГЛОНАСС оборудования, датчиков температуры и открытия дверей с настройкой ретрансляции данных в Адвантум для перевозчиков X5, Metro и других ритейл-сетей.',
  },
}

export default () => {
  return (
    <>
      <Hero heroContent={heroContent} titleId="installation-hero-title" />
      <Advantages title="Преимущества подключения к Адвантум" />
      <AboutRetranslations aboutRetranslations={retranslationAdvantum} />
      <Industries data={advantumIndustries} />
      <Steps data={steps} />
      <Possibilities cards={advantumPossibilities} />
      <MainProblems data={advantumProblems} />
      <DataTransfer data={advantumDataTransfer} />
      <ActionBanner data={actionBanner} />
      <Faq data={faq} />
      <SeoBlock seoText={seoText} />
      <TagTiles tagTiles={tagTiles} />
    </>
  )
}
