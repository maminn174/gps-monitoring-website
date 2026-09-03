import './Section.scss'
import clsx from 'clsx'

export default (props) => {
  const {
    className,
    title,
    titleId,
    titleClassName,
    description,
    children,
    action,
  } = props
  const sectionId = titleId?.replace(/-title$/, '')

  return (
    <section
      id={sectionId}
      className={clsx('section', 'container', className)}
      aria-labelledby={titleId}
    >
      <header className="section__header">
        <h2 className={clsx('page-subtitle', titleClassName)} id={titleId}>
          {title}
        </h2>
        {action && <div className="section__action">{action}</div>}
        {description && (
          <div className="section__description">
            <p>{description}</p>
          </div>
        )}
      </header>
      <div className="section__body">{children}</div>
    </section>
  )
}
