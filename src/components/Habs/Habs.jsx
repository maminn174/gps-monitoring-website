import './Habs.scss'
import Icon from '../Icon'

export default (props) => {
  const { data } = props

  const { title, items } = data

  return (
    <section className="habs container">
      <h1 className="page-subtitle">{title}</h1>
      <ul className="habs__list">
        {items.map(({ label, icon, href }) => (
          <li className="habs__item" key={href}>
            <div className="habs__card">
              <Icon className="habs__icon" name={icon} hasFill />

              <a className="habs__link page-description" href={href}>
                {label}
              </a>
              <Icon className="habs__arrow-icon" name="arrow-right" />
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
