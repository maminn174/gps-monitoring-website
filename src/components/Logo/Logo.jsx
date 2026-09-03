import './Logo.scss'
import clsx from 'clsx'

export default (props) => {
  const { className, loading = 'lazy', hideTextOnMobile = true } = props

  const title = 'Главная'

  return (
    <a
      className={clsx('logo', className)}
      href="/"
      title={title}
      aria-label={title}
    >
      <img
        className="logo__image"
        src="/images/LogoGlonass.svg"
        alt=""
        width={40}
        height={40}
        loading={loading}
      />
      <span
        className={clsx('logo__text', hideTextOnMobile && 'hidden-mobile-s')}
      >
        GPS/ГЛОНАСС мониторинг
      </span>
    </a>
  )
}
