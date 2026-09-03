import './StepsActionCard.scss'
import clsx from 'clsx'
import Icon from '@/components/Icon'
import Button from '../../Button'

export default (props) => {
  const { className, result } = props

  return (
    <div className={clsx('steps-action-card', className)}>
      <div className="steps-action-card__wrapper">
        <span className="steps-action-card__icon">
          <Icon
            className="steps-action-card__icon-image"
            name="result"
            hasFill
          />
        </span>
        <div className="steps-action-card__header">
          <h3 className="steps-action-card__title card-title">
            {result.title}
          </h3>
          <p className="steps-action-card__description page-description">
            {result.description}
          </p>
        </div>
      </div>
      <Button
        className="steps-action-card__button"
        data-js-open-modal=""
        data-source="steps-action-card"
      >
        Оставить заявку
      </Button>
    </div>
  )
}
