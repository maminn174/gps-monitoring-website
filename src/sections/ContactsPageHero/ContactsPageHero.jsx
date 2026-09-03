import './ContactsPageHero.scss'
import Breadcrumbs from '../../components/Breadcrumbs'
import Icon from '@/components/Icon'
import Button from '@/components/Button'

export default ({ breadcrumbs = [] }) => {
  const contacts = [
    {
      icon: 'phone',
      title: 'Телефон:',
      href: 'tel:+78002003068',
      description: '8 (800) 200-30-68',
    },
    {
      icon: 'location',
      title: 'Адрес:',
      description: 'Офисы по всей России',
      extraAttrs: { 'data-js-utm-replace-address': '' },
    },
    {
      icon: 'mail',
      title: 'Почта:',
      description: 'sales@глонасс.com',
      href: 'mailto:sales@xn--80afyieua.com',
    },
    {
      icon: 'clock',
      title: 'Время работы:',
      description: 'Ежедневно с 8:00 до 21:00',
    },
  ]

  return (
    <section className="main container">
      <div className="contacts-page">
        <div className="contacts-page__card">
          <Breadcrumbs items={breadcrumbs} isContainer={false} />
          <h1 className="page-title">Контакты</h1>
          <p className="contacts-page__subtitle">
            Для оснащения выезжаем на удобную вам территорию. По{' '}
            <span data-js-utm-replace-city="">городу</span> — выезд бесплатно
          </p>
          <dl className="contacts-page__list">
            {contacts.map(
              ({ icon, title, description, href, extraAttrs }, index) => (
                <div className="contacts-page__item" key={index}>
                  <dt className="contacts-page__title">
                    <Icon name={icon} hasFill className="contacts-page__icon" />
                    {title}
                  </dt>
                  <dd className="contacts-page__text" {...extraAttrs}>
                    {href ? (
                      <a href={href} className="contacts-page__link">
                        {description}
                      </a>
                    ) : (
                      description
                    )}
                  </dd>
                </div>
              )
            )}
          </dl>
          <Button
            className="contacts-page__button"
            data-js-open-modal=""
            data-source="contacts-page-hero"
          >
            Оставить заявку
          </Button>
        </div>
        <div className="contacts-page__map" data-js-render-map></div>
      </div>
    </section>
  )
}
