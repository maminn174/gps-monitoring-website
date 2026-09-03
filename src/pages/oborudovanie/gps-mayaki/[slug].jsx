import { beaconsTagTiles, gpsBeacons } from '@/page-data/gps-mayaki.data'
import EquipmentHero from '@/sections/EquipmentHero'
import EquipmentDescription from '@/sections/EquipmentDescription'
import ActionBanner from '@/sections/ActionBanner'
import TagTiles from '@/components/TagTiles'

const productCategory = 'GPS-маяк'

export const getStaticData = () =>
  gpsBeacons.map((beacon) => ({
    paths: {
      slug: beacon.slug,
    },
    props: {
      tracker: beacon,
      title: `${beacon.title} купить | ${productCategory}`,
      description: `${beacon.title} - ${beacon.description}. Подбор, настройка и подключение к системе мониторинга.`,
      ogType: 'product',
      ogImage: beacon.image,
      ogImageAlt: `${productCategory} ${beacon.title}`,
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
          label: 'GPS маяки',
          href: '/oborudovanie/gps-mayaki',
        },
        {
          label: beacon.title,
        },
      ],
      service: {
        name: `Продажа и настройка ${beacon.title}`,
        serviceType: 'Продажа и настройка GPS-маяков',
        description: `${beacon.title}: ${beacon.description}. Подберём устройство, настроим режим работы и подключим маяк к системе мониторинга.`,
      },
      product: beacon,
      productCategory,
    },
  }))

export default ({ tracker }) => (
  <>
    <EquipmentHero
      product={tracker}
      productType="GPS-маяк"
      priceDescription="*Итоговая стоимость зависит от модели маяка, режима работы, настройки и количества устройств"
    />
    <EquipmentDescription
      tracker={tracker}
      tabsTitle="Описание GPS-маяка"
      descriptionTitle="Подробное описание GPS-маяка"
    />
    <ActionBanner
      data={{
        title: `Рассчитаем стоимость подключения ${tracker.title}`,
        description:
          'Подберём GPS-маяк под объект, настроим режим передачи координат и подключим устройство к системе мониторинга.',
      }}
    />
    <TagTiles tagTiles={beaconsTagTiles} />
  </>
)
