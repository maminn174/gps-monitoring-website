import Habs from '../components/Habs'
import { uslugiItems } from '@/page-data/habs.data'

export const metadata = {
  title: 'Услуги по мониторингу транспорта с помощью GPS/ГЛОНАСС',
  description:
    'Список услуг GPS/ГЛОНАСС мониторинга транспорта: установка трекеров, контроль топлива, подключение РНИС и Адвантум под ключ.',
  ogImageAlt: 'Услуги GPS/ГЛОНАСС мониторинга транспорта',
  breadcrumbs: [{ label: 'Главная', href: '/' }, { label: 'Услуги' }],
  service: {
    name: 'Услуги GPS/ГЛОНАСС мониторинга транспорта',
    serviceType:
      'Мониторинг транспорта и установка телематического оборудования',
    description:
      'Установка GPS/ГЛОНАСС трекеров, контроль топлива, подключение к РНИС и Адвантум, настройка мониторинга и сопровождение автопарков.',
  },
  robots: 'noindex, follow',
}

export default () => {
  return (
    <>
      <Habs data={uslugiItems} />
    </>
  )
}
