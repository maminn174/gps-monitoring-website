import './HeaderContacts.scss'
import clsx from 'clsx'
import Icon from '@/components/Icon/'

const contactsItems = [
  {
    type: 'phone',
    iconName: 'phone',
    href: 'tel:+78002003068',
    content: '8 (800) 200-30-68',
  },
  {
    type: 'email',
    iconName: 'email',
    href: 'mailto:sales@xn--80afyieua.com',
    content: 'sales@глонасс.com',
  },
  {
    type: 'schedule',
    iconName: 'schedule',
    content: (
      <>
        Ежедневно с <time dateTime="08:00">8:00</time> до{' '}
        <time dateTime="21:00">21:00</time>
      </>
    ),
  },
  {
    type: 'address',
    iconName: 'address',
    content: 'Офисы по всей России',
    textAttrs: {
      'data-js-utm-replace-address': '',
    },
  },
]

const HeaderContacts = ({ className }) => (
  <address className={clsx('header-contacts', className)}>
    <ul className="header-contacts__list">
      {contactsItems.map(
        ({ type, iconName, href, content, textAttrs = {} }) => (
          <li className="header-contacts__item" key={type}>
            <Icon className="header-contacts__icon" name={iconName} hasFill />

            {href ? (
              <a className="header-contacts__link" href={href}>
                {content}
              </a>
            ) : (
              <p className="header-contacts__text" {...textAttrs}>
                {content}
              </p>
            )}
          </li>
        )
      )}
    </ul>
  </address>
)

export default HeaderContacts
