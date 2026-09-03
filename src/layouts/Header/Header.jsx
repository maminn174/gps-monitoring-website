import './Header.scss'
import clsx from 'clsx'
import Logo from '@/components/Logo/index.js'
import BurgerButton from '@/components/BurgerButton/index.js'
import HeaderContacts from '@/components/HeaderContacts/index.js'
import CartButton from '../../components/CartButton'

const resheniyaLink = '/resheniya'
const uslugiLink = '/uslugi'
const equipmentsLink = '/oborudovanie'

const menuItems = [
  {
    label: 'Услуги',
    href: uslugiLink,
    mobileOnly: true,
    items: [
      {
        label: ' Все услуги',
        href: uslugiLink,
        mobileOnly: true,
      },
      { label: 'Установка ГЛОНАСС', href: '/ustanovka-glonass' },
      { label: 'Контроль топлива', href: '/kontrol-rashoda-topliva' },
      { label: 'Установка GPS трекера', href: '/ustanovka-gps-trekera' },
      { label: 'Адвантум', href: '/advantum' },
      { label: 'РНИС', href: '/rnis' },
    ],
  },
  {
    label: 'Решения',
    href: resheniyaLink,
    items: [
      {
        label: ' Все решения',
        href: resheniyaLink,
        mobileOnly: true,
      },
      {
        label: ' Мониторинг грузового транспорта',
        href: `${resheniyaLink}/monitoring-gruzovogo-transporta`,
      },
      {
        label: ' Мониторинг спецтехники',
        href: `${resheniyaLink}/monitoring-spectehniki`,
      },
      {
        label: ' Мониторинг такси',
        href: `${resheniyaLink}/monitoring-taksi`,
      },
    ],
  },
  {
    label: 'Оборудование',
    href: equipmentsLink,
    items: [
      {
        label: ' Все оборудование',
        href: equipmentsLink,
        mobileOnly: true,
      },
      {
        label: ' GPS трекеры',
        href: `${equipmentsLink}/gps-trekery-dlya-avtomobilya`,
      },
      {
        label: 'Датчики уровня топлива',
        href: `${equipmentsLink}/datchiki-urovnya-topliva`,
      },
      {
        label: 'Датчики температуры',
        href: `${equipmentsLink}/datchiki-kontrolya-temperatury`,
      },
      {
        label: 'GPS маяки',
        href: `${equipmentsLink}/gps-mayaki`,
      },
      {
        label: 'Персональные трекеры',
        href: `${equipmentsLink}/personalnye-trekery`,
      },
    ],
  },
  { label: 'О нас', href: '/company' },
  { label: 'Контакты', href: '/contacts' },
]

export default (props) => {
  const { url } = props

  return (
    <header className="header" data-js-header="">
      <Logo />

      <div className="header__overlay" data-js-header-overlay=""></div>

      <div className="header__panel" id="mobile-menu" data-js-header-panel="">
        <button
          className="header__close-button visible-laptop"
          type="button"
          aria-label="Закрыть меню"
          data-js-header-cross=""
        >
          ×
        </button>

        <nav className="header__menu">
          <ul className="header__menu-list">
            {menuItems.map(({ label, href, items }) => (
              <li
                className="header__menu-item"
                key={href || label}
                data-js-header-menu-item={items ? '' : undefined}
              >
                {items ? (
                  <>
                    <div className="header__menu-parent">
                      <a
                        className="header__menu-link"
                        href={href}
                        data-js-header-menu-link=""
                      >
                        {label}
                      </a>

                      <button
                        className="header__menu-toggle"
                        type="button"
                        aria-expanded="false"
                        data-js-header-menu-toggle=""
                        aria-label={`Открыть подменю ${label}`}
                      ></button>
                    </div>

                    <ul className="header__submenu" data-js-header-submenu="">
                      {items.map((item) => (
                        <li
                          className={clsx(
                            'header__submenu-item',
                            item.mobileOnly &&
                              'header__submenu-item--mobile-only'
                          )}
                          key={item.href}
                        >
                          <a
                            className="header__submenu-link"
                            href={item.href}
                            data-js-header-menu-link=""
                          >
                            {item.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <a
                    className={clsx(
                      'header__menu-link',
                      href === url && 'is-active'
                    )}
                    href={href}
                    data-js-header-menu-link=""
                  >
                    {label}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div className="header__mobile-actions visible-laptop">
          <HeaderContacts />

          <button
            className="header__button header__mobile-button open-modal-button"
            type="button"
            data-js-open-modal=""
            data-source="header-callback"
          >
            Заказать звонок
          </button>
        </div>
      </div>

      <div className="header__actions">
        <div className="header__contacts-links">
          <a href="tel:+78002003068" className="header__phone">
            8 (800) 200-30-68
          </a>
          <a
            href="mailto:sales@xn--80afyieua.com"
            className="header__email hidden-tablet"
          >
            sales@глонасс.com
          </a>
        </div>

        <button
          className="header__button open-modal-button hidden-mobile"
          type="button"
          data-js-open-modal=""
          data-source="header-callback"
        >
          Заказать звонок
        </button>
        <CartButton />
      </div>

      <BurgerButton
        className="header__burger-button visible-laptop"
        extraAttrs={{
          'aria-controls': 'mobile-menu',
          'aria-expanded': 'false',
          'data-js-header-burger-button': '',
        }}
      />
    </header>
  )
}
