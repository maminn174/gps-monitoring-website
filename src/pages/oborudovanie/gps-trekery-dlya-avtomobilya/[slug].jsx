import { gpsTrackers, trackersTagTiles } from '@/page-data/gps-trackers.data'
import RelatedProducts from '@/sections/RelatedProducts'
import EquipmentHero from '@/sections/EquipmentHero'
import EquipmentDescription from '@/sections/EquipmentDescription'
import ActionBanner from '@/sections/ActionBanner'
import TagTiles from '@/components/TagTiles'

const productCategory = 'GPS/ГЛОНАСС трекер для автомобиля'
const productTitleCategory = 'GPS/ГЛОНАСС трекер'

export const getStaticData = () =>
  gpsTrackers.map((tracker) => ({
    paths: {
      slug: tracker.slug,
    },
    props: {
      tracker,
      title: `${tracker.title} купить | ${productTitleCategory}`,
      description: `${tracker.title} — ${tracker.description}. Подбор, установка и подключение.`,
      ogType: 'product',
      ogImage: tracker.image,
      ogImageAlt: `${productCategory} ${tracker.title}`,
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
          label: 'GPS трекер для автомобиля',
          href: '/oborudovanie/gps-trekery-dlya-avtomobilya',
        },
        {
          label: tracker.title,
        },
      ],
      service: {
        name: `Продажа и установка ${tracker.title}`,
        serviceType: 'Продажа и установка GPS/ГЛОНАСС трекеров для транспорта',
        description: `${tracker.title}: ${tracker.description}. Подберём оборудование, выполним монтаж и подключим трекер к системе мониторинга транспорта.`,
      },
      product: tracker,
      productCategory,
    },
  }))

export default ({ tracker }) => (
  <>
    <EquipmentHero product={tracker} />
    <EquipmentDescription tracker={tracker} />
    <ActionBanner
      data={{
        title: `Рассчитаем стоимость подключения GPS/ГЛОНАСС трекера ${tracker.title}`,
        description:
          'Подберём комплект под задачу: GPS трекер, реле блокировки двигателя, SIM-карту, монтаж и тариф мониторинга. Стоимость зависит от количества машин, способа установки и набора функций',
      }}
    />
    <TagTiles tagTiles={trackersTagTiles} />
    <RelatedProducts currentProductId={tracker.id} />
  </>
)
