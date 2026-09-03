import './TransportCard.scss'
import clsx from 'clsx'

export default (props) => {
  const {
    className,
    title,
    image,
    imageAlt,
    imageWidth,
    imageHeight,
    backgroundColor = 'gray',
    titleTag: TitleTag = 'h3',
    imageClassName,
    titleClassName,
  } = props

  return (
    <article
      className={clsx(
        'transport-card',
        backgroundColor !== 'default' && `transport-card--${backgroundColor}`,
        className
      )}
    >
      <TitleTag
        className={clsx('transport-card__title', 'card-title', titleClassName)}
      >
        {title}
      </TitleTag>
      <img
        src={image}
        alt={imageAlt ?? title ?? ''}
        width={imageWidth}
        height={imageHeight}
        loading="lazy"
        className={clsx('transport-card__image', imageClassName)}
      />
    </article>
  )
}
