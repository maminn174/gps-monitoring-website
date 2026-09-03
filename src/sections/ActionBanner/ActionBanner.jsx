import './ActionBanner.scss'
import Icon from '@/components/Icon'
import Button from '@/components/Button'

export default (props) => {
  const { data } = props

  const { title, description } = data

  return (
    <section
      className="section container action-banner"
      aria-labelledby="action-banner-title"
    >
      <div className="action-banner__inner">
        <Icon className="action-banner__logo" name="bannerLogo" />
        <div className="action-banner__header">
          <h2 className="action-banner__title" id="action-banner-title">
            {title}
          </h2>
          <p className="action-banner__description">{description}</p>
        </div>
        <div className="action-banner__buttons">
          <Button
            className="action-banner__button"
            data-js-open-modal=""
            data-source="action-banner"
          >
            Оставить заявку
          </Button>
          <Button className="action-banner__link" href="tel:+78002003068">
            <Icon className="action-banner__phone-icon" name="phone" hasFill />
            Позвонить
          </Button>
        </div>
      </div>
    </section>
  )
}
