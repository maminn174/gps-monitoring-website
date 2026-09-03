import './StepsCard.scss'
import clsx from 'clsx'
import Icon from '@/components/Icon'

export default (props) => {
  const { className, items } = props

  const { step, title, description, time } = items

  return (
    <div className={clsx('steps-card', className)}>
      <span className="steps-card__number">{step}</span>
      <div className="steps-card__header">
        <h3 className="steps-card__title card-title">{title}</h3>
        <p className="steps-card__description">{description}</p>
      </div>
      <div className="steps-card__time">
        <Icon className="steps-card__icon" name="clock" hasFill />
        <p className="steps-card__annotation">{time}</p>
      </div>
    </div>
  )
}
