import './Privacy.scss'

export default (props) => {
  const { content } = props

  return (
    <section className="privacy container">
      {content.map(({ title, items }) => (
        <div className="privacy__section" key={title}>
          <h1 className="privacy__title">{title}</h1>
          <ul className="privacy__list">
            {items.map(({ label, description }, index) => (
              <li className="privacy__item" key={label || index}>
                {label && <h2 className="privacy__subtitle">{label}</h2>}
                <p className="privacy__text">{description}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  )
}
