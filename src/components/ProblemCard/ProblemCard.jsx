import './ProblemCard.scss'
import Icon from '@/components/Icon'
import clsx from 'clsx'

export default (props) => {
  const {
    title,
    description,
    badgeText,
    badgeIcon,
    imageClassName,
    imageSrc,
    imageWidth,
    imageHeight,
    imageAlt,
    variant,
  } = props

  return (
    <div
      className={clsx('problem-card', variant && `problem-card--${variant}`)}
    >
      <div className="problem-card__body">
        <div className="problem-card__header">
          <h3 className="problem-card__title card-title">{title}</h3>
          <p className="problem-card__description page-description">
            {description}
          </p>
        </div>
        {badgeText && (
          <span className="problem-card__badge">
            <Icon
              className={clsx(
                'problem-card__badge-icon',
                badgeIcon && `problem-card__badge-icon--${badgeIcon}`
              )}
              name={badgeIcon}
              hasFill
            />
            {badgeText}
          </span>
        )}
      </div>
      <div className="problem-card__media">
        <img
          className={clsx(
            'problem-card__image',
            imageClassName && `problem-card__image--${imageClassName}`
          )}
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
