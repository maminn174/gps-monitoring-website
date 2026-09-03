import './Contacts.scss'
import Section from '@/layouts/Section'
import Icon from '@/components/Icon'
import Form from '@/components/Form'

export default () => {
  const contacts = [
    {
      icon: 'phone',
      title: 'Телефон',
      description: '8 (800) 200-30-68',
      href: 'tel:+78002003068',
    },
    {
      icon: 'location',
      title: 'Адрес',
      description: 'Офисы по всей России',
      attributes: {
        'data-js-utm-replace-address': '',
      },
    },
    {
      icon: 'clock',
      title: 'График работы',
      description: 'Ежедневно с 8:00 до 21:00',
    },
    {
      icon: 'mail',
      title: 'Электронная почта',
      description: 'sales@глонасс.com',
      href: 'mailto:sales@xn--80afyieua.com',
    },
  ]

  return (
    <Section
      className="contacts"
      title="Контакты для подключения мониторинга транспорта"
      titleId="contacts-title"
    >
      <div className="contacts__grid">
        <ul className="contacts__card contacts__card--info">
          {contacts.map(
            ({ icon, title, description, href, attributes }, index) => (
              <li className="contacts__item" key={index}>
                <Icon className="contacts__icon" name={icon} hasFill />
                <div className="contacts__item-content">
                  <h3 className="contacts__item-title">{title}</h3>
                  {href ? (
                    <a className="contacts__item-value" href={href}>
                      {description}
                    </a>
                  ) : (
                    <span className="contacts__item-value" {...attributes}>
                      {description}
                    </span>
                  )}
                </div>
              </li>
            )
          )}
        </ul>
        <div className="contacts__card contacts__card--form">
          <div className="contacts__form-intro">
            <div className="contacts__form-title">Остались вопросы?</div>
            <p className="contacts__form-text">
              Оставьте заявку и наш менеджер свяжется с&nbsp;вами в&nbsp;течение
              15&nbsp;минут
            </p>
          </div>
          <Form
            className="contacts__form js-form"
            inputClassName="contacts__input"
            buttonClassName="contacts__button"
            formName="contacts-form"
            formId="contacts-form"
            idPrefix="contacts"
            source="contacts"
          />
        </div>
      </div>
      <div
        className="map-container"
        data-js-render-map=""
        data-js-render-map-timeout=""
      ></div>
    </Section>
  )
}
