import './BurgerButton.scss'
import clsx from 'clsx'

export default (props) => {
  const { className, extraAttrs } = props

  const title = 'Открыть меню'

  return (
    <button
      className={clsx('burger-button', className)}
      type="button"
      aria-label={title}
      title={title}
      {...extraAttrs}
    >
      <span className="burger-line"></span>
      <span className="burger-line"></span>
      <span className="burger-line"></span>
    </button>
  )
}
