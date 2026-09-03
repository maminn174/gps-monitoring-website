import {
  personalTrackers,
  personalTrackersTagTiles,
} from '@/page-data/personalnye-trekery.data'
import EquipmentHero from '@/sections/EquipmentHero'
import EquipmentDescription from '@/sections/EquipmentDescription'
import ActionBanner from '@/sections/ActionBanner'
import TagTiles from '@/components/TagTiles'

const productCategory = 'Персональный GPS-трекер'

export const getStaticData = () =>
  personalTrackers.map((tracker) => ({
    paths: {
      slug: tracker.slug,
    },
    props: {
      tracker,
      title: `${tracker.title} купить | ${productCategory}`,
      description: `${tracker.title} - ${tracker.description}. Подбор, настройка и подключение.`,
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
          label: 'Персональные трекеры',
          href: '/oborudovanie/personalnye-trekery',
        },
        {
          label: tracker.title,
        },
      ],
      service: {
        name: `Продажа и настройка ${tracker.title}`,
        serviceType: 'Продажа и настройка персональных GPS-трекеров',
        description: `${tracker.title}: ${tracker.description}. Подберём устройство, настроим передачу данных и подключим трекер к системе мониторинга.`,
      },
      product: tracker,
      productCategory,
    },
  }))

export default ({ tracker }) => (
  <>
    <EquipmentHero
      product={tracker}
      productType="Персональный GPS-трекер"
      priceDescription="*Итоговая стоимость зависит от модели трекера, настройки, тарифа мониторинга и количества устройств"
    />
    <EquipmentDescription
      tracker={tracker}
      tabsTitle="Описание персонального трекера"
      descriptionTitle="Подробное описание персонального трекера"
    />
    <ActionBanner
      data={{
        title: `Рассчитаем стоимость подключения ${tracker.title}`,
        description:
          'Подберём персональный трекер под сотрудников или мобильные объекты, настроим передачу координат и выдадим доступ к мониторингу.',
      }}
    />
    <TagTiles tagTiles={personalTrackersTagTiles} />
  </>
)
