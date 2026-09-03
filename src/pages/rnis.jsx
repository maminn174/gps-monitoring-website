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
  faq,
  heroContent,
  steps,
  seoText,
  tagTiles,
  actionBanner,
  rnisStructures,
  rnisIndustries,
  rnisPossibilities,
  rnisDataTransfer,
  retranslationRnis,
} from '@/page-data/rnis.data'
import DataTransfer from '../sections/DataTransfer'
import CardStructure from '@/sections/CardStructure'

export const metadata = {
  title: 'Подключение к системе РНИС ГЛОНАСС для пропуска на МКАД',
  description:
    'Подключение к РНИС: GPS/ГЛОНАСС трекеры, АТТ терминалы, монтаж оборудования и передача данных в РНИС Москвы для пропуска МКАД.',
  ogImageAlt: 'GPS/ГЛОНАСС трекер РНИС для подключения к пропуску МКАД',
  faq: faq.items,
  breadcrumbs: [
    { label: 'Главная', href: '/' },
    {
      label: 'Услуги',
      href: '/uslugi',
    },
    { label: 'РНИС' },
  ],
  service: {
    name: 'Подключение к РНИС под ключ',
    serviceType: 'Установка GPS/ГЛОНАСС оборудования для РНИС',
    description:
      'Подбор и установка GPS/ГЛОНАСС трекеров, абонентских телематических терминалов и настройка передачи данных в РНИС для грузового транспорта и пропуска МКАД.',
  },
}

export default () => {
  return (
    <>
      <Hero heroContent={heroContent} titleId="rnis-hero-title" />
      <Advantages title="Преимущества подключения к РНИС" />
      <AboutRetranslations aboutRetranslations={retranslationRnis} />
      <Industries data={rnisIndustries} />
      <CardStructure structures={rnisStructures} />
      <Steps data={steps} />
      <Possibilities cards={rnisPossibilities} />
      <DataTransfer data={rnisDataTransfer} />
      <ActionBanner data={actionBanner} />
      <Faq data={faq} />
      <SeoBlock seoText={seoText} />
      <TagTiles tagTiles={tagTiles} />
    </>
  )
}
