import './Breadcrumbs.scss'
import clsx from 'clsx'

export default ({ items = [], isContainer = true }) => {
  if (items.length <= 1) {
    return null
  }

  return (
    <nav
      className={clsx('breadcrumbs', isContainer && 'container')}
      aria-label="Хлебные крошки"
    >
      <ol className="breadcrumbs__list">
        {items.map((item, index) => {
          const isLast = index === items.length - 1

          return (
            <li
              className="breadcrumbs__item"
              aria-current={isLast ? 'page' : undefined}
              key={index}
            >
              {isLast ? (
                <span className="breadcrumbs__current">{item.label}</span>
              ) : (
                <a className="breadcrumbs__link" href={item.href}>
                  {item.label}
                </a>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
