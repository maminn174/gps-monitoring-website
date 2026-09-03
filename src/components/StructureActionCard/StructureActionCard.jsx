import './StructureActionCard.scss'
import clsx from 'clsx'
import MarkerList from '@/components/MarkerList'
import Icon from '@/components/Icon'
import Button from '@/components/Button'

export default (props) => {
  const { className, result } = props

  return (
    <div className={clsx('structure-action-card', className)}>
      <div className="structure-action-card__header">
        <h3 className="structure-action-card__title">Итог</h3>
        <p className="structure-action-card__description">
          {result.description}
        </p>
      </div>
      <MarkerList
        className="structure-action-card__list"
        items={result.items}
      />
      <div className="structure-action-card__action">
        <div className="structure-action-card__action-wrapper">
          <span className="structure-action-card__icon">
            <Icon name="like" hasFill />
          </span>
          <p className="structure-action-card__note">
            Под ключ без лишних действий от вас!
          </p>
        </div>
        <Button
          className="structure-action-card__button"
          data-js-open-modal=""
          data-source="structure-action-card"
        >
          Оставить заявку
        </Button>
      </div>
    </div>
  )
}
