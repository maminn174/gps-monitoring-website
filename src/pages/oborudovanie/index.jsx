import Habs from '../../components/Habs'
import { oborudovanieItems } from '@/page-data/habs.data'

export const metadata = {
  title: 'Оборудование для GPS/ГЛОНАСС мониторинга транспорта',
  description:
    'Каталог оборудования для мониторинга транспорта: GPS/ГЛОНАСС трекеры, датчики топлива и температуры, CAN-модули, подбор и установка.',
  ogImageAlt: 'Оборудование для GPS/ГЛОНАСС мониторинга транспорта',
  breadcrumbs: [{ label: 'Главная', href: '/' }, { label: 'Оборудование' }],
  service: {
    name: 'Подбор и установка оборудования для мониторинга транспорта',
    serviceType: 'Продажа и установка GPS/ГЛОНАСС оборудования для транспорта',
    description:
      'Подберём GPS/ГЛОНАСС трекеры, датчики и дополнительное оборудование под задачи автопарка, выполним монтаж и подключим устройства к системе мониторинга транспорта.',
  },
  robots: 'noindex, follow',
}

export default () => {
  return (
    <>
      <Habs data={oborudovanieItems} />
    </>
  )
}
