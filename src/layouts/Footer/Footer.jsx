import './Footer.scss'
import Logo from '@/components/Logo'

const footerMenuItems = [
  { label: 'Услуги', href: '/uslugi' },
  { label: 'Решения', href: '/resheniya' },
  { label: 'Оборудование', href: '/oborudovanie' },
  { label: 'Системы', href: '/#monitoring-system' },
  { label: 'О компании', href: '/company' },
  { label: 'Контакты', href: '/contacts' },
]

export default () => {
  return (
    <footer className="footer">
      <div className="footer__grid container">
        <Logo className="footer__logo" hideTextOnMobile={false} />

        <nav className="footer__menu">
          <ul className="footer__menu-list">
            {footerMenuItems.map(({ label, href }) => (
              <li className="footer__menu-item" key={href}>
                <a className="footer__menu-link" href={href}>
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="footer__contacts">
          <span className="footer__contacts-label">Телефон:</span>
          <a
            href="tel:+78002003068"
            className="footer__contact-value footer__contact-value--phone"
          >
            8 (800) 200-30-68
          </a>
          <p className="footer__worktime">
            Без выходных с <time dateTime="08:00">8:00</time> до{' '}
            <time dateTime="21:00">21:00</time>
          </p>
          <span className="footer__contacts-label">Адрес:</span>
          <address
            className="footer__contact-value footer__contact-value--address"
            data-js-utm-replace-address=""
          >
            Офисы по всей России
          </address>
        </div>
        <div className="footer__bottom">
          <span className="footer__line"></span>
          <p className="footer__copyright">
            © Мониторинг транспорта, <time dateTime="2014">2014</time> -
            <time dateTime="2026">2026</time>
          </p>
          <div className="footer__privacy">
            <a
              href="/sitemap"
              className="footer__privacy-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Карта сайта
            </a>
            <a
              href="/cookies"
              className="footer__privacy-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Политика куки
            </a>
            <a
              href="/privacy"
              className="footer__privacy-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Политика конфиденциальности
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
