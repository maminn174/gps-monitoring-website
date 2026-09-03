import './DataTransferCard.scss'
import clsx from 'clsx'

export default (props) => {
  const {
    className,
    title,
    description,
    number,
    imageSrc,
    imageAlt,
    imageWidth,
    imageHeight,
    variant,
  } = props

  return (
    <div
      className={clsx(
        className,
        'data-transfer-card',
        `data-transfer-card--${variant}`
      )}
    >
      <div className="data-transfer-card__body">
        <div className="data-transfer-card__header">
          <span className="data-transfer-card__number">{number}</span>
          <h3 className="data-transfer-card__title card-title">{title}</h3>
        </div>
        <p className="data-transfer-card__description page-description">
          {description}
        </p>
      </div>
      <div className="data-transfer-card__media">
        <img
          className="data-transfer-card__image"
          src={imageSrc}
          alt={imageAlt ?? title ?? ''}
          width={imageWidth}
          height={imageHeight}
          loading="lazy"
        />
      </div>
    </div>
  )
}
