import Habs from '../../components/Habs'
import { resheniyaItems } from '@/page-data/habs.data'

export const metadata = {
  title: 'Решения по мониторингу транспорта с помощью GPS/ГЛОНАСС',
  description:
    'Решения GPS/ГЛОНАСС мониторинга для грузового транспорта, спецтехники и такси: контроль маршрутов, пробега, топлива и работы водителей.',
  ogImageAlt: 'Решения GPS/ГЛОНАСС мониторинга транспорта',
  breadcrumbs: [{ label: 'Главная', href: '/' }, { label: 'Решения' }],
  service: {
    name: 'Решения GPS/ГЛОНАСС мониторинга транспорта',
    serviceType: 'Мониторинг транспорта для отраслевых задач автопарков',
    description:
      'Подбираем решения мониторинга для грузового транспорта, спецтехники и такси: контроль маршрутов, топлива, простоев, пробега и дисциплины водителей.',
  },
  robots: 'noindex, follow',
}

export default () => {
  return (
    <>
      <Habs data={resheniyaItems} />
    </>
  )
}
