import './DefaultCard.scss'
import clsx from 'clsx'

export default (props) => {
  const {
    className,
    title,
    description,
    number,
    image,
    imageAlt,
    imageWidth,
    imageHeight,
    variant = 'default',
    titleTag: TitleTag = 'h3',
    bodyClassName,
    headerClassName,
    titleClassName,
    descriptionClassName,
    mediaClassName,
    mediaBefore,
    numberClassName,
    imageClassName,
    children,
    ...restProps
  } = props

  return (
    <article
      className={clsx(
        'default-card',
        variant !== 'default' && `default-card--${variant}`,
        className
      )}
      {...restProps}
    >
      <div className={clsx('default-card__body', bodyClassName)}>
        <div className={clsx('default-card__header', headerClassName)}>
          <TitleTag
            className={clsx(
              'default-card__title',
              'card-title',
              titleClassName
            )}
          >
            {title}
          </TitleTag>

          {description && (
            <p
              className={clsx(
                'default-card__description',
                descriptionClassName
              )}
            >
              {description}
            </p>
          )}
        </div>
        {children}
      </div>

      {image && (
        <span className={clsx('default-card__media', mediaClassName)}>
          {mediaBefore}
          <img
            className={clsx('default-card__image', imageClassName)}
            src={image}
            alt={imageAlt ?? title ?? ''}
            width={imageWidth}
            height={imageHeight}
            loading="lazy"
          />
        </span>
      )}

      {number && (
        <span className={clsx('default-card__number', numberClassName)}>
          {number}
        </span>
      )}
    </article>
  )
}
