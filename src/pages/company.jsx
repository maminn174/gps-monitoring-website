import CompanyPageHero from '../sections/CompanyPageHero'
import Button from '@/components/Button'
import Advantages from '@/sections/Advantages'
import Company from '@/sections/Company'

export const metadata = {
  title: 'О компании',
  description:
    'Информация о компании: GPS/ГЛОНАСС мониторинг транспорта, выездной монтаж оборудования, поддержка и работа с автопарками по России.',
  breadcrumbs: [{ label: 'Главная', href: '/' }, { label: 'О компании' }],
  breadcrumbsPlacement: 'section',
}

export default () => {
  return (
    <>
      <CompanyPageHero breadcrumbs={metadata.breadcrumbs} />
      <Advantages
        itemsCount={3}
        variant="company"
        title="Преимущества нашей компании"
      />
      <Button
        className="company-page__button"
        data-js-open-modal=""
        data-source="company-page"
      >
        Начать сотрудничество
      </Button>
      <Company />
    </>
  )
}
