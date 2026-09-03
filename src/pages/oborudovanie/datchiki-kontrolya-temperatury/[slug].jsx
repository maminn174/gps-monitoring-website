import {
  temperatureSensors,
  temperatureSensorsTagTiles,
} from '@/page-data/datchiki-temperatury.data'
import EquipmentHero from '@/sections/EquipmentHero'
import EquipmentDescription from '@/sections/EquipmentDescription'
import ActionBanner from '@/sections/ActionBanner'
import TagTiles from '@/components/TagTiles'

const productCategory = 'Датчик контроля температуры'

export const getStaticData = () =>
  temperatureSensors.map((sensor) => ({
    paths: {
      slug: sensor.slug,
    },
    props: {
      tracker: sensor,
      title: `${sensor.title} купить | ${productCategory}`,
      description: `${sensor.title} - ${sensor.description}. Подбор, монтаж и настройка.`,
      ogType: 'product',
      ogImage: sensor.image,
      ogImageAlt: `${productCategory} ${sensor.title}`,
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
          label: 'Датчики контроля температуры',
          href: '/oborudovanie/datchiki-kontrolya-temperatury',
        },
        {
          label: sensor.title,
        },
      ],
      service: {
        name: `Продажа и установка ${sensor.title}`,
        serviceType: 'Продажа и установка датчиков контроля температуры',
        description: `${sensor.title}: ${sensor.description}. Подберём оборудование, выполним монтаж и подключим датчик к системе мониторинга температуры.`,
      },
      product: sensor,
      productCategory,
    },
  }))

export default ({ tracker }) => (
  <>
    <EquipmentHero
      product={tracker}
      productType="Датчик контроля температуры"
      priceDescription="*Итоговая стоимость зависит от модели датчика, места установки, способа подключения и количества зон контроля"
    />
    <EquipmentDescription
      tracker={tracker}
      tabsTitle="Описание датчика контроля температуры"
      descriptionTitle="Подробное описание датчика контроля температуры"
    />
    <ActionBanner
      data={{
        title: `Рассчитаем стоимость установки ${tracker.title}`,
        description:
          'Подберём проводной или беспроводной датчик температуры, проверим совместимость с трекером, выполним монтаж и настроим отчеты по температурному режиму.',
      }}
    />
    <TagTiles tagTiles={temperatureSensorsTagTiles} />
  </>
)
