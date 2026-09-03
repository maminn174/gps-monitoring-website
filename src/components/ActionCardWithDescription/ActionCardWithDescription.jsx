import './ActionCardWithDescription.scss'
import Button from '@/components/Button'

export default (props) => {
  const { actionTitle, actionDescription } = props

  return (
    <div className="action-card-with-description">
      <div className="action-card-with-description__header">
        <h3 className="action-card-with-description__title card-title">
          {actionTitle}
        </h3>
        <p className="action-card-with-description__description page-description">
          {actionDescription}
        </p>
      </div>
      <Button
        className="action-card-with-description__button"
        data-js-open-modal=""
        data-source="action-card-with-description"
      >
        Оставить заявку
      </Button>
    </div>
  )
}
