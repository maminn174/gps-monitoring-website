import './Accordion.scss'

export default (props) => {
  const { title, id, name, isOpen, children } = props

  return (
    <div className="accordion">
      <details className="accordion__details" name={name} open={isOpen}>
        <summary className="accordion__summary" aria-controls={id}>
          <h3 className="accordion__title">{title}</h3>
        </summary>

        <div className="accordion__content" id={id}>
          <div className="accordion__content-inner">
            <div className="accordion__content-body">{children}</div>
          </div>
        </div>
      </details>
    </div>
  )
}
