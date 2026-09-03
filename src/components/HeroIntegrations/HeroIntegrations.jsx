import './HeroIntegrations.scss'
import Icon from '@/components/Icon'
import clsx from 'clsx'

export default (props) => {
  const { integrations = [] } = props

  return (
    <div className="hero__integration-icons">
      {integrations.map(
        (
          {
            variant,
            iconId,
            imageSrc,
            imageAlt,
            imageWidth,
            imageHeight,
            text,
          },
          index
        ) => (
          <span className="hero__integration-icon" key={index}>
            {iconId ? (
              <Icon
                className={clsx(
                  variant && `hero__integration-icon--${variant}`
                )}
                name={iconId}
                hasFill
              />
            ) : (
              <img
                className="hero__integration-icon--image"
                src={imageSrc}
                alt={imageAlt ?? text ?? ''}
                width={imageWidth}
                height={imageHeight}
              />
            )}
            {text}
          </span>
        )
      )}
    </div>
  )
}
