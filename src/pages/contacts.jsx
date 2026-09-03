import ContactsPageHero from '../sections/ContactsPageHero'

export const metadata = {
  title: 'Контакты ГЛОНАСС GPS мониторинг транспорта',
  description:
    'Контакты компании ГЛОНАСС GPS мониторинг транспорта: телефон, почта, офисы по России и бесплатный выезд для установки оборудования.',
  breadcrumbs: [{ label: 'Главная', href: '/' }, { label: 'Контакты' }],
  breadcrumbsPlacement: 'section',
}

export default () => {
  return (
    <>
      <ContactsPageHero breadcrumbs={metadata.breadcrumbs} />
    </>
  )
}
