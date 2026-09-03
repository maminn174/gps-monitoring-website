import { duts, dutsTagTiles } from '@/page-data/datchiki-topliva.data'
import EquipmentHero from '@/sections/EquipmentHero'
import EquipmentDescription from '@/sections/EquipmentDescription'
import ActionBanner from '@/sections/ActionBanner'
import TagTiles from '@/components/TagTiles'

const productCategory = 'Датчик уровня топлива'

export const getStaticData = () =>
  duts.map((dut) => ({
    paths: {
      slug: dut.slug,
    },
    props: {
      tracker: dut,
      title: `${dut.title} купить | ${productCategory}`,
      description: `${dut.title} - ${dut.description}. Подбор, монтаж и тарировка бака.`,
      ogType: 'product',
      ogImage: dut.image,
      ogImageAlt: `${productCategory} ${dut.title}`,
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
          label: 'Датчики уровня топлива',
          href: '/oborudovanie/datchiki-urovnya-topliva',
        },
        {
          label: dut.title,
        },
      ],
      service: {
        name: `Продажа и установка ${dut.title}`,
        serviceType: 'Продажа и установка датчиков уровня топлива',
        description: `${dut.title}: ${dut.description}. Подберём оборудование, выполним монтаж, тарировку бака и подключим датчик к системе мониторинга топлива.`,
      },
      product: dut,
      productCategory,
    },
  }))

export default ({ tracker }) => (
  <>
    <EquipmentHero
      product={tracker}
      productType="Датчик уровня топлива"
      priceDescription="*Итоговая стоимость зависит от модели датчика, типа бака, способа подключения, тарировки и количества единиц техники"
    />
    <EquipmentDescription
      tracker={tracker}
      tabsTitle="Описание датчика уровня топлива"
      descriptionTitle="Подробное описание датчика уровня топлива"
    />
    <ActionBanner
      data={{
        title: `Рассчитаем стоимость установки ${tracker.title}`,
        description:
          'Подберём проводной или беспроводной ДУТ, проверим совместимость с трекером, выполним монтаж, тарировку бака и настроим отчеты по заправкам, сливам и расходу топлива.',
      }}
    />
    <TagTiles tagTiles={dutsTagTiles} />
  </>
)
